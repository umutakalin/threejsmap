import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Canvas, useThree, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Environment, MapControls } from '@react-three/drei';
import { Vector3, TextureLoader } from 'three';
import { gsap } from 'gsap';
import Model from './Model';
import BirdFlocks from './BirdFlock';
import Clouds from './Clouds';
import Drones from './Drone';

// Kamera kontrolü için custom hook
function useMapControls() {
    const { camera } = useThree();
    const controlsRef = useRef<any>(null);
    const lastValidTargetRef = useRef(new Vector3());
    const lastValidPositionRef = useRef(new Vector3());
    const lastRotationRef = useRef(-Math.PI / 2); // Son rotasyon değerini sakla
    const [center, setCenter] = useState(new Vector3());
    const [size, setSize] = useState(new Vector3());
    const [initialTarget, setInitialTarget] = useState(new Vector3(0, 0, 0));
    const [initialPosition, setInitialPosition] = useState(new Vector3(0, 10, 0));
    const isAnimatingRef = useRef(false); // Animasyon durumu

    // Zoom smoothing + momentum config
    const zoomConfigRef = useRef({
        minDistance: 300,
        maxDistance: 900,
        zoomDamping: 0.25, // 0..1 (higher = faster)
        momentumDecay: 0.9, // per 60fps step (~apply via pow(decay, delta*60))
        wheelDeltaFactor: 0.15, // distance units per wheel delta unit (normalized)
        pinchDeltaFactor: 0.25, // distance units per pinch pixel
        inputMomentumScale: 0.6, // fraction of input applied as momentum
        edgeSoftness: 0.15, // fraction of range with soft easing near edges
        edgeSpringK: 12.0, // spring stiffness when overshooting bounds
        edgeSpringDamping: 1.8 // spring damping
    });

    // Desired distance and momentum
    const desiredDistanceRef = useRef<number | null>(null);
    const zoomVelocityRef = useRef<number>(0);

    // updateCameraBounds fonksiyonu
    const updateCameraBounds = useCallback((newSize: Vector3, newCenter: Vector3) => {
        setSize(newSize);
        setCenter(newCenter);

        if (controlsRef.current) {
            const maxDim = Math.max(newSize.x, newSize.y, newSize.z);

            // İlk geçerli pozisyonları ayarla
            lastValidTargetRef.current = newCenter.clone();
            lastValidPositionRef.current = camera.position.clone();

            // Başlangıç pozisyonlarını ayarla
            setInitialTarget(newCenter.clone());
            setInitialPosition(camera.position.clone());
        }
    }, [camera.position]);

    // Zoom durumunu takip etmek için ref
    const isZoomingRef = useRef(false);

    useEffect(() => {
        if (controlsRef.current) {
            controlsRef.current.update();

            // Pan işlemini engellemek için event listener ekle
            const controls = controlsRef.current;

            // Sınır kontrolü için ek event listener
            const handleChange = () => {
                // Zoom sırasında sınır kontrollerini atla
                if (isZoomingRef.current) return;

                const rectWidth = 8800;
                const rectHeight = 4000;
                const xLimit = rectWidth / 5;
                const zLimit = rectHeight / 5;

                const target = controls.target;
                const camera = controls.object;

                // Hedef pozisyonunu kontrol et
                if (Math.abs(target.x) > xLimit || Math.abs(target.z) > zLimit) {

                    // Hedef pozisyonunu sınırla
                    target.x = Math.max(-xLimit, Math.min(xLimit, target.x));
                    target.z = Math.max(-zLimit, Math.min(zLimit, target.z));

                    // Kamera pozisyonunu mevcut yükseklikte tut (sabit yükseklik yok)
                    camera.position.set(target.x, camera.position.y, target.z);

                    controls.update();
                }

                // Sınırlarda kamera pozisyonunu kontrol et (yükseklik sabit değil)
                const isNearBoundary = Math.abs(target.x) >= xLimit * 0.9 || Math.abs(target.z) >= zLimit * 0.9;
                if (isNearBoundary) {
                    // Sadece X ve Z pozisyonunu güncelle, Y (yükseklik) aynı kalsın
                    camera.position.set(target.x, camera.position.y, target.z);
                }
                // Normal alanlarda zoom'a izin ver
            };

            controls.addEventListener('change', handleChange);

            // Pan işlemini sınırlı hale getirmek için override et
            const originalPan = controls.pan;
            controls.pan = function (deltaX: number, deltaY: number) {
                // Pan sırasında sınır kontrollerini daha smooth hale getir
                const rectWidth = 8800;
                const rectHeight = 4000;
                const xLimit = rectWidth / 5; // Dikdörtgenin yarı genişliği
                const zLimit = rectHeight / 5; // Dikdörtgenin yarı yüksekliği

                // Pan hızını daha da azalt
                const speedFactor = 0.6; // Pan hızını 0.6 faktörü ile azalt
                deltaX *= speedFactor;
                deltaY *= speedFactor;

                const newTarget = this.target.clone();
                newTarget.x += deltaX;
                newTarget.z += deltaY;

                // Sınır kontrolü - daha toleranslı ve smooth
                if (Math.abs(newTarget.x) > xLimit * 1.1 || Math.abs(newTarget.z) > zLimit * 1.1) {
                    // Sınır aşılıyorsa pan'i yavaşlat ama tamamen engelleme
                    const slowFactor = 0.3; // Pan hızını yavaşlat (0.5 → 0.3)
                    deltaX *= slowFactor;
                    deltaY *= slowFactor;

                    // Yeni hedefi tekrar hesapla
                    newTarget.x = this.target.x + deltaX;
                    newTarget.z = this.target.z + deltaY;

                    // Son sınır kontrolü
                    if (Math.abs(newTarget.x) > xLimit || Math.abs(newTarget.z) > zLimit) {
                        return false; // Pan işlemini engelle
                    }
                }

                // Orijinal pan işlemini çağır
                return originalPan.call(this, deltaX, deltaY);
            };

            // Cleanup
            return () => {
                if (controls) {
                    controls.pan = originalPan;
                    controls.removeEventListener('change', handleChange);
                }
            };
        }
    }, []);

    useFrame((state, delta) => {
        // 60fps akıcı render: fps sınırlaması kaldırıldı
        // basit fps göstergesi (opsiyonel, istenirse kaldırılabilir)
        if (typeof document !== 'undefined') {
            const fps = Math.round(1000 / (delta * 1000));
            let fpsDisplay = document.getElementById('fps-display');
            if (!fpsDisplay) {
                fpsDisplay = document.createElement('div');
                fpsDisplay.id = 'fps-display';
                fpsDisplay.style.cssText = `
                    position: fixed;
                    top: 10px;
                    right: 10px;
                    background: rgba(0, 0, 0, 0.7);
                    color: white;
                    padding: 5px 10px;
                    border-radius: 5px;
                    font-family: monospace;
                    font-size: 14px;
                    z-index: 1000;
                `;
                document.body.appendChild(fpsDisplay);
            }
            fpsDisplay.textContent = `FPS: ${fps}`;
        }

        if (controlsRef.current && size.length() > 0) {
            controlsRef.current.update();

            // Zoom sırasında sınır kontrollerini geçici olarak devre dışı bırak
            if (isAnimatingRef.current) {
                return; // Animasyon sırasında sınır kontrollerini atla
            }

            // Pan sırasında performansı artırmak için sınır kontrollerini optimize et
            const isPanning = controlsRef.current.isPanning || false;
            if (isPanning) {
                // Pan sırasında sadece temel kontrolleri yap ve daha sık update et
                controlsRef.current.update();

                // Pan sırasında kamera pozisyonunu da güncelle
                const target = controlsRef.current.target;
                const camera = controlsRef.current.object;
                if (camera && target) {
                    const cameraToTarget = camera.position.clone().sub(target);
                    const currentDistance = cameraToTarget.length();
                    const minDistance = 300;
                    const maxDistance = 900;

                    if (currentDistance < minDistance || currentDistance > maxDistance) {
                        cameraToTarget.normalize().multiplyScalar(Math.max(minDistance, Math.min(maxDistance, currentDistance)));
                        camera.position.copy(target).add(cameraToTarget);
                    }
                }
                return;
            }

            // Diktörtgen sınırları (8800x4000) - Model.tsx'ten alınan değerler
            const rectWidth = 8800;
            const rectHeight = 4000;

            // Sınır limitleri - dikdörtgenin tam köşelerine kadar
            const xLimit = rectWidth / 5; // Dikdörtgenin yarı genişliği
            const zLimit = rectHeight / 5; // Dikdörtgenin yarı yüksekliği

            const currentTarget = controlsRef.current.target;
            const offset = currentTarget.clone().sub(center);

            // Rotasyon bilgisini sakla (loglama kaldırıldı)
            const cameraRotation = camera.rotation;
            const currentRotationX = cameraRotation.x;
            lastRotationRef.current = currentRotationX;

            // Sınır kontrolü - sadece kritik durumlarda
            let needsCorrection = false;
            let correctedTarget = currentTarget.clone();

            // X ekseni sınır kontrolü (genişlik) - daha toleranslı
            if (Math.abs(offset.x) > xLimit * 1.1) { // %10 tolerans
                correctedTarget.x = center.x + (offset.x > 0 ? xLimit : -xLimit);
                needsCorrection = true;
            }

            // Z ekseni sınır kontrolü (yükseklik) - daha toleranslı
            if (Math.abs(offset.z) > zLimit * 1.1) { // %10 tolerans
                correctedTarget.z = center.z + (offset.z > 0 ? zLimit : -zLimit);
                needsCorrection = true;
            }

            // Y ekseni sınır kontrolü (yükseklik - sınırlı) - daha toleranslı
            if (Math.abs(offset.y) > 150) { // Y sınırı - daha toleranslı
                correctedTarget.y = center.y + (offset.y > 0 ? 100 : -100);
                needsCorrection = true;
            }

            // Sınır aşıldıysa yay animasyonu ile geri at
            if (needsCorrection && !isAnimatingRef.current) {
                isAnimatingRef.current = true;

                const oldTarget = controlsRef.current.target.clone();
                const oldCameraPosition = camera.position.clone();

                // Yay animasyonu için hedef pozisyonu biraz daha içeri çek
                const bounceDistance = 200; // Geri atma mesafesi
                const bounceTarget = correctedTarget.clone();

                if (Math.abs(offset.x) > xLimit * 1.1) {
                    bounceTarget.x = center.x + (offset.x > 0 ? xLimit - bounceDistance : -xLimit + bounceDistance);
                }
                if (Math.abs(offset.z) > zLimit * 1.1) {
                    bounceTarget.z = center.z + (offset.z > 0 ? zLimit - bounceDistance : -zLimit + bounceDistance);
                }

                // GSAP ile yay animasyonu
                gsap.to(controlsRef.current.target, {
                    x: bounceTarget.x,
                    y: bounceTarget.y,
                    z: bounceTarget.z,
                    duration: 1.2,
                    ease: "elastic.out(1, 0.3)", // Yay efekti
                    onUpdate: () => {
                        controlsRef.current.update();
                    },
                    onComplete: () => {
                        isAnimatingRef.current = false;
                    }
                });

                // Kamera pozisyonu için de yay animasyonu
                const cameraOffset = camera.position.clone().sub(controlsRef.current.target);
                const maxCameraDistance = 1000;

                if (cameraOffset.length() > maxCameraDistance) {
                    cameraOffset.normalize().multiplyScalar(maxCameraDistance);
                    const newCameraPosition = bounceTarget.clone().add(cameraOffset);

                    gsap.to(camera.position, {
                        x: newCameraPosition.x,
                        y: newCameraPosition.y,
                        z: newCameraPosition.z,
                        duration: 1.2,
                        ease: "elastic.out(1, 0.3)",
                    });
                }

                // Loglar kaldırıldı
            }

            // Sadece hedef pozisyonunu sakla, kamera pozisyonunu değiştirme
            lastValidTargetRef.current = controlsRef.current.target.clone();

            // Kamera pozisyonunu ve hedefi al
            const target = controlsRef.current.target;
            const cameraToTarget = camera.position.clone().sub(target);
            const currentDistance = cameraToTarget.length();

            // Desired distance init
            if (desiredDistanceRef.current === null) {
                desiredDistanceRef.current = currentDistance;
            }

            const cfg = zoomConfigRef.current;
            const range = cfg.maxDistance - cfg.minDistance;
            const edgeWidth = Math.max(1e-3, cfg.edgeSoftness * range);

            // Momentum decay (frame-rate independent)
            const decay = Math.pow(cfg.momentumDecay, delta * 60);
            zoomVelocityRef.current *= decay;

            // Apply spring if desiredDistance overshoots bounds (soft clamp)
            const dd = desiredDistanceRef.current as number;
            if (dd < cfg.minDistance) {
                const overshoot = cfg.minDistance - dd;
                // v += k*x - c*v
                zoomVelocityRef.current += overshoot * cfg.edgeSpringK * delta;
                zoomVelocityRef.current -= zoomVelocityRef.current * cfg.edgeSpringDamping * delta;
            } else if (dd > cfg.maxDistance) {
                const overshoot = cfg.maxDistance - dd; // negative
                zoomVelocityRef.current += overshoot * cfg.edgeSpringK * delta;
                zoomVelocityRef.current -= zoomVelocityRef.current * cfg.edgeSpringDamping * delta;
            } else {
                // Near edges: attenuate velocity smoothly within edgeWidth
                const distToMin = dd - cfg.minDistance;
                const distToMax = cfg.maxDistance - dd;
                const tMin = Math.min(1, Math.max(0, distToMin / edgeWidth));
                const tMax = Math.min(1, Math.max(0, distToMax / edgeWidth));
                const ease = (t: number) => t * t * (3 - 2 * t); // smoothstep
                const attenuation = Math.min(ease(tMin), ease(tMax));
                zoomVelocityRef.current *= Math.max(0.05, attenuation);
            }

            // Integrate desired distance with velocity
            desiredDistanceRef.current = (desiredDistanceRef.current as number) + zoomVelocityRef.current * (delta * 60);

            // Compute target distance (hard clamp only for actual camera)
            const targetDistance = Math.max(cfg.minDistance, Math.min(cfg.maxDistance, desiredDistanceRef.current as number));

            // Exponential damping towards target distance for actual camera position
            const damp = (from: number, to: number, damping: number, dt: number) => {
                const lerpT = 1 - Math.pow(1 - Math.min(0.999, Math.max(0.0, damping)), dt * 60);
                return from + (to - from) * lerpT;
            };
            const newDistance = damp(currentDistance, targetDistance, cfg.zoomDamping, delta);

            // Reposition camera along its current direction (preserve target)
            const dir = cameraToTarget.normalize();
            const newPos = target.clone().add(dir.multiplyScalar(newDistance));
            camera.position.copy(newPos);

            // Kamera her zaman tam 90° (üstten) baksın
            camera.up.set(0, 0, -1);
            const angleDeg = 90;
            camera.rotation.set(-(angleDeg * Math.PI / 180), 0, 0);

            // Zoom hareketi durduysa isZooming'i serbest bırak
            const epsilonVel = 0.01;
            const epsilonDist = 0.1;
            const cfg2 = zoomConfigRef.current;
            const ddNow = desiredDistanceRef.current ?? currentDistance;
            const targetDistNow = Math.max(cfg2.minDistance, Math.min(cfg2.maxDistance, ddNow));
            if (Math.abs(zoomVelocityRef.current) < epsilonVel && Math.abs(targetDistNow - currentDistance) < epsilonDist) {
                isZoomingRef.current = false;
            }
        }
    });

    return { controlsRef, updateCameraBounds, isZoomingRef, desiredDistanceRef, zoomVelocityRef, zoomConfigRef };
}

// MapControls wrapper component
function MapControlsWrapper({ controlsRef, isZoomingRef, desiredDistanceRef, zoomVelocityRef, zoomConfigRef }: { controlsRef: any; isZoomingRef: any; desiredDistanceRef: React.MutableRefObject<number | null>; zoomVelocityRef: React.MutableRefObject<number>; zoomConfigRef: React.MutableRefObject<any>; }) {
    // Smooth wheel zoom için useEffect ile event listener ekle
    useEffect(() => {
        if (controlsRef.current) {
            let lastPinchDistance = 0;
            let isPinching = false;

            const handleWheel = (event: WheelEvent) => {
                event.preventDefault();
                if (!controlsRef.current) return;
                const cfg = zoomConfigRef.current;
                isZoomingRef.current = true;

                // Positive deltaY = scroll down = zoom out (increase distance)
                const LINE_HEIGHT = 16; // px (approx)
                const PAGE_HEIGHT = window.innerHeight; // px
                let normalized = event.deltaY;
                if (event.deltaMode === 1) normalized *= LINE_HEIGHT; // lines -> px
                else if (event.deltaMode === 2) normalized *= PAGE_HEIGHT; // pages -> px
                const delta = normalized * cfg.wheelDeltaFactor;

                // Initialize desired if needed
                if (desiredDistanceRef.current === null) {
                    const camera = controlsRef.current.object;
                    const target = controlsRef.current.target;
                    desiredDistanceRef.current = camera.position.distanceTo(target);
                }

                // Apply immediately to desired distance; add fraction to momentum for glide
                desiredDistanceRef.current = (desiredDistanceRef.current as number) + delta;
                zoomVelocityRef.current += delta * cfg.inputMomentumScale;
            };

            const handleTouchStart = (ev: TouchEvent) => {
                if (ev.touches.length === 2) {
                    isPinching = true;
                    isZoomingRef.current = true;
                    const dx = ev.touches[0].clientX - ev.touches[1].clientX;
                    const dy = ev.touches[0].clientY - ev.touches[1].clientY;
                    lastPinchDistance = Math.hypot(dx, dy);
                }
            };

            const handleTouchMove = (ev: TouchEvent) => {
                if (!isPinching || ev.touches.length !== 2) return;
                ev.preventDefault();
                const cfg = zoomConfigRef.current;
                const dx = ev.touches[0].clientX - ev.touches[1].clientX;
                const dy = ev.touches[0].clientY - ev.touches[1].clientY;
                const pinchDistance = Math.hypot(dx, dy);
                const deltaPinch = lastPinchDistance - pinchDistance; // pinch in -> positive -> zoom in
                lastPinchDistance = pinchDistance;

                // Convert pinch pixels to distance change
                const delta = deltaPinch * cfg.pinchDeltaFactor;

                if (desiredDistanceRef.current === null && controlsRef.current) {
                    const camera = controlsRef.current.object;
                    const target = controlsRef.current.target;
                    desiredDistanceRef.current = camera.position.distanceTo(target);
                }

                desiredDistanceRef.current = (desiredDistanceRef.current as number) + delta;
                zoomVelocityRef.current += delta * cfg.inputMomentumScale;
            };

            const handleTouchEnd = () => {
                isPinching = false;
            };

            const domElement = controlsRef.current?.domElement || document.querySelector('canvas');
            if (domElement) {
                domElement.addEventListener('wheel', handleWheel, { passive: false });
                domElement.addEventListener('touchstart', handleTouchStart, { passive: false });
                domElement.addEventListener('touchmove', handleTouchMove, { passive: false });
                domElement.addEventListener('touchend', handleTouchEnd, { passive: true });

                return () => {
                    domElement.removeEventListener('wheel', handleWheel as any);
                    domElement.removeEventListener('touchstart', handleTouchStart as any);
                    domElement.removeEventListener('touchmove', handleTouchMove as any);
                    domElement.removeEventListener('touchend', handleTouchEnd as any);
                };
            }
        }
    }, [controlsRef, isZoomingRef, desiredDistanceRef, zoomVelocityRef, zoomConfigRef]);

    return (
        <MapControls
            ref={controlsRef}
            enablePan={true} // Pan'i geri aç
            enableZoom={false} // Zoom'u kapat (kendi wheel handling'imizi kullanıyoruz)
            enableRotate={false} // Rotate'i kapat - harita dönmesin

            minDistance={300} // Minimum zoom (100 derece FOV)
            maxDistance={900} // Maximum zoom (85 derece FOV)
            target={[0, 0, 0]} // Modelin merkezine göre ayarla

            // Smooth pan için optimize edilmiş ayarlar
            enableDamping={true} // Damping'i aç (daha smooth pan)
            dampingFactor={0.05} // Damping faktörü (daha yavaş tepki)
            rotateSpeed={0} // Rotate hızını sıfırla
            panSpeed={0.8} // Pan hızını azalt (2.0 → 0.8)
            zoomSpeed={0.6} // MapControls zoom devre dışı, sadece pan damping etkili

            maxPolarAngle={Math.PI / 2} // Sadece üstten görünüm için
            minPolarAngle={Math.PI / 2} // Sadece üstten görünüm için (aynı değer)
            screenSpacePanning={true}
            minAzimuthAngle={0}
            maxAzimuthAngle={0}
            autoRotate={false}

        // onUpdate logları kaldırıldı
        />
    );
}

function Harita() {
    const [showMarker, setShowMarker] = useState(false);
    const [showPanel, setShowPanel] = useState(false);

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            margin: 0,
            padding: 0,
            backgroundColor: 'black',
            overflow: 'hidden', // Taşan içeriği gizle
            position: 'relative' // Pozisyon referansı
        }}>
            <Canvas
                camera={{
                    position: [0, 1000, 0],
                    fov: 85,
                    near: 0.1,
                    far: 5000
                }}
                gl={{
                    preserveDrawingBuffer: true,
                    antialias: true, // Anti-aliasing ekle
                    powerPreference: "high-performance", // Yüksek performans tercihi
                    stencil: false, // Stencil buffer'ı kapat (performans için)
                    depth: true // Depth buffer'ı aç
                }}
                frameloop="always" // Sürekli render et (animasyonların durmaması için)
                performance={{ min: 0.8 }} // Minimum FPS ayarı - daha yüksek
                style={{
                    background: '#000000',
                    overflow: 'hidden', // Taşan içeriği gizle
                    position: 'absolute', // Mutlak pozisyon
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%'
                }}
            >
                <React.Suspense fallback={null}>
                    <SceneContent showMarker={showMarker} onMarkerClick={() => setShowPanel(true)} />
                    {/* Optional: Environment for subtle reflections, not background */}
                    <Environment preset="sunset" background={false} />
                </React.Suspense>
            </Canvas>
            {/* Alt orta buton */}
            <button
                onClick={() => {
                    if (showMarker || showPanel) {
                        setShowMarker(false);
                        setShowPanel(false);
                    } else {
                        setShowMarker(true);
                    }
                }}
                style={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    bottom: 16,
                    padding: '10px 16px',
                    background: '#ffffff',
                    color: '#000000',
                    border: 'none',
                    borderRadius: 8,
                    cursor: 'pointer',
                    fontWeight: 600,
                    zIndex: 1001
                }}
            >
                {(showMarker || showPanel) ? 'özellikleri kapat' : 'özellikleri gör'}
            </button>
            {/* Sağdan kayan panel */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '30%',
                    height: '100%',
                    background: 'rgba(10,10,10,0.92)',
                    color: '#fff',
                    transform: showPanel ? 'translateX(0)' : 'translateX(100%)',
                    transition: 'transform 300ms ease',
                    boxShadow: '0 0 20px rgba(0,0,0,0.5)',
                    zIndex: 1000,
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <div style={{ padding: 16, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <button
                        onClick={() => setShowPanel(false)}
                        style={{
                            background: 'transparent',
                            color: '#fff',
                            border: '1px solid rgba(255,255,255,0.4)',
                            borderRadius: 6,
                            padding: '6px 10px',
                            cursor: 'pointer'
                        }}
                    >
                        Kapat
                    </button>
                </div>
                <div style={{ padding: 16, overflow: 'auto' }}>
                    <h3 style={{ marginTop: 0 }}>Özellikler</h3>
                    <p>Seçilen işaretçi için açıklama/panel içeriği buraya gelecek.</p>
                </div>
            </div>
        </div>
    );
}

// Canvas içinde kullanılacak bileşen
function SceneContent({ showMarker, onMarkerClick }: { showMarker: boolean; onMarkerClick: () => void }) {
    const { controlsRef, updateCameraBounds, isZoomingRef, desiredDistanceRef, zoomVelocityRef, zoomConfigRef } = useMapControls();
    // Marker dokusunu önceden yükle ki butona basınca Suspense tetiklenmesin
    const markerTexture = useLoader(TextureLoader, (process.env.PUBLIC_URL || '') + '/marker.png');

    // Animasyonlu marker komponenti
    const AnimatedMarker: React.FC<{ position: [number, number, number]; onClick: () => void }> = ({ position, onClick }) => {
        const spriteRef = useRef<any>(null);
        useFrame((state) => {
            const t = state.clock.elapsedTime;
            if (spriteRef.current) {
                // Sadece yukarı-aşağı hareket
                spriteRef.current.position.y = 20 + Math.sin(t * 2.0) * 20;
                // Görünürlüğü artırmak için sabit bir ölçek uygula
                spriteRef.current.scale.set(120, 120, 1);
            }
        });
        return (
            <group position={position} onClick={onClick}>
                <sprite ref={spriteRef}>
                    <spriteMaterial map={markerTexture} transparent depthWrite={false} />
                </sprite>
            </group>
        );
    };

    // Smooth camera updates için useFrame hook'u kaldırıldı
    // MapControls'ın kendi smooth sistemi kullanılıyor

    return (
        <>
            <Model
                onModelLoaded={updateCameraBounds}
                enableKTX2Texture={true}
                textureRepeatX={1}
                textureRepeatY={1}
                textureOffsetX={0}
                textureOffsetY={0}
            />

            {/* Bulut animasyonları */}
            <Clouds />

            {/* Kuş sürüleri */}
            <BirdFlocks
                enableBirdFlocks={true}
                birdSpeed={25}
                birdSize={3.0}
                birdCount={4}
            />

            {/* Bayraktar TB2 Drone'ları */}
            <Drones
                enableDrones={true}
                droneSpeed={35}
                droneSize={8.0}
                droneCount={2}
            />

            {/* Animasyonlu marker */}
            {showMarker && (
                <AnimatedMarker position={[0, 12, 0]} onClick={onMarkerClick} />
            )}

            {/* MapControls: left=pan, right=rotate, scroll=zoom */}
            <MapControlsWrapper
                controlsRef={controlsRef}
                isZoomingRef={isZoomingRef}
                desiredDistanceRef={desiredDistanceRef}
                zoomVelocityRef={zoomVelocityRef}
                zoomConfigRef={zoomConfigRef}
            />

            {/* Işıklar */}
            <ambientLight intensity={0.25} />
            <directionalLight position={[5, 10, 7.5]} intensity={0.5} castShadow />
            <directionalLight position={[-5, -10, -7.5]} intensity={0.15} />
        </>
    );
}

export default Harita; 