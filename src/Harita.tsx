import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, MapControls } from '@react-three/drei';
import { Vector3 } from 'three';
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
                    console.log('🚫 SINIR AŞILDI - EVENT LISTENER!');

                    // Hedef pozisyonunu sınırla
                    target.x = Math.max(-xLimit, Math.min(xLimit, target.x));
                    target.z = Math.max(-zLimit, Math.min(zLimit, target.z));

                    // Kamera pozisyonunu da sabit tut
                    const fixedDistance = 1000;
                    camera.position.set(target.x, fixedDistance, target.z);

                    controls.update();
                }

                // Sınırlarda kamera pozisyonunu kontrol et
                const isNearBoundary = Math.abs(target.x) >= xLimit * 0.9 || Math.abs(target.z) >= zLimit * 0.9;
                if (isNearBoundary) {
                    const fixedDistance = 1000;
                    camera.position.set(target.x, fixedDistance, target.z);
                    console.log('🔒 EVENT LISTENER - Sınırlarda kamera pozisyonu sabitlendi');
                }
                // Normal alanlarda zoom'a izin ver
            };

            controls.addEventListener('change', handleChange);

            // Pan işlemini sınırlı hale getirmek için override et
            const originalPan = controls.pan;
            controls.pan = function (deltaX: number, deltaY: number) {
                // DEBUG: Pan işlemini izle
                console.log('🖱️ PAN İŞLEMİ:', {
                    deltaX: deltaX.toFixed(2),
                    deltaY: deltaY.toFixed(2),
                    mevcutHedef: {
                        x: this.target.x.toFixed(2),
                        y: this.target.y.toFixed(2),
                        z: this.target.z.toFixed(2)
                    }
                });

                // Sınırları kontrol et - Model.tsx'ten alınan değerler
                const rectWidth = 8800;
                const rectHeight = 4000;
                const xLimit = rectWidth / 5; // Dikdörtgenin yarı genişliği
                const zLimit = rectHeight / 5; // Dikdörtgenin yarı yüksekliği

                const newTarget = this.target.clone();
                newTarget.x += deltaX;
                newTarget.z += deltaY;

                console.log('🖱️ YENİ HEDEF:', {
                    x: newTarget.x.toFixed(2),
                    y: newTarget.y.toFixed(2),
                    z: newTarget.z.toFixed(2)
                });

                // Sınır kontrolü - sadece hedef pozisyonunu kontrol et
                if (Math.abs(newTarget.x) > xLimit || Math.abs(newTarget.z) > zLimit) {
                    console.log('🚫 PAN ENGELLENDİ! Sınır aşılıyor');
                    console.log('🚫 Sınırlar:', { xLimit: xLimit.toFixed(2), zLimit: zLimit.toFixed(2) });
                    return false; // Pan işlemini engelle
                }

                console.log('✅ PAN İZİN VERİLDİ');
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

    useFrame(() => {
        if (controlsRef.current && size.length() > 0) {
            controlsRef.current.update();

            // Zoom sırasında sınır kontrollerini geçici olarak devre dışı bırak
            if (isAnimatingRef.current) {
                return; // Animasyon sırasında sınır kontrollerini atla
            }

            // Diktörtgen sınırları (8800x4000) - Model.tsx'ten alınan değerler
            const rectWidth = 8800;
            const rectHeight = 4000;

            // Sınır limitleri - dikdörtgenin tam köşelerine kadar
            const xLimit = rectWidth / 5; // Dikdörtgenin yarı genişliği
            const zLimit = rectHeight / 5; // Dikdörtgenin yarı yüksekliği

            const currentTarget = controlsRef.current.target;
            const offset = currentTarget.clone().sub(center);

            // DEBUG: Kamera ve hedef pozisyonlarını izle
            const cameraRotation = camera.rotation;
            const targetRotation = controlsRef.current.target;

            // Sadece rotasyon değişimlerini izle
            const currentRotationX = cameraRotation.x;
            const lastRotationX = lastRotationRef.current;

            // Rotasyon değiştiyse log yazdır
            if (Math.abs(currentRotationX - lastRotationX) > 0.001) {
                console.log('🔄 ROTASYON DEĞİŞTİ!', {
                    eski: (lastRotationX * 180 / Math.PI).toFixed(2) + '°',
                    yeni: (currentRotationX * 180 / Math.PI).toFixed(2) + '°',
                    fark: ((currentRotationX - lastRotationX) * 180 / Math.PI).toFixed(2) + '°'
                });
            }

            // Son rotasyon değerini güncelle
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
                        console.log('🎯 YAY ANİMASYONU TAMAMLANDI!');
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

                console.log('🎯 YAY ANİMASYONU BAŞLADI!');
                console.log('📍 Eski hedef:', oldTarget);
                console.log('📍 Yeni hedef:', bounceTarget);
            }

            // Sadece hedef pozisyonunu sakla, kamera pozisyonunu değiştirme
            lastValidTargetRef.current = controlsRef.current.target.clone();

            // Kamera pozisyonunu sürekli kontrol et (otomatik zoom'u engelle)
            const target = controlsRef.current.target;
            const cameraToTarget = camera.position.clone().sub(target);
            const currentDistance = cameraToTarget.length();
            const minDistance = 300;
            const maxDistance = 1050;

            // Sınırlarda zoom'u engelle - daha sıkı kontrol
            const isNearBoundary = Math.abs(target.x) >= xLimit * 0.9 || Math.abs(target.z) >= zLimit * 0.9;

            if (isNearBoundary) {
                // Sınırlardaysa kamera pozisyonunu tamamen sabit tut
                const fixedDistance = 1000; // Sabit mesafe
                const fixedCameraPosition = new Vector3(
                    target.x,
                    fixedDistance,
                    target.z
                );
                camera.position.copy(fixedCameraPosition);
            } else {
                // Sınırlarda değilse normal zoom mesafesini kontrol et (500-900 arası)
                const minDistance = 500; // Minimum zoom (100 derece FOV)
                const maxDistance = 900; // Maximum zoom (85 derece FOV)

                if (currentDistance < minDistance) {
                    cameraToTarget.normalize().multiplyScalar(minDistance);
                    camera.position.copy(target).add(cameraToTarget);
                } else if (currentDistance > maxDistance) {
                    cameraToTarget.normalize().multiplyScalar(maxDistance);
                    camera.position.copy(target).add(cameraToTarget);
                }
                // Normal aralıkta ise zoom'a izin ver
            }

            // Kamera her karede yukarıdan aşağıya sabit baksın
            camera.up.set(0, 0, -1);

            // Kamera rotasyonunu sabit tut (harita dönmesin)
            camera.rotation.x = -Math.PI / 2; // -90 derece (üstten görünüm)
            camera.rotation.y = 0; // Y ekseni rotasyonu yok
            camera.rotation.z = 0; // Z ekseni rotasyonu yok
        }
    });

    return { controlsRef, updateCameraBounds, isZoomingRef };
}

// MapControls wrapper component
function MapControlsWrapper({ controlsRef, isZoomingRef }: { controlsRef: any; isZoomingRef: any }) {
    // Smooth wheel zoom için useEffect ile event listener ekle
    useEffect(() => {
        if (controlsRef.current) {
            let zoomTimeout: NodeJS.Timeout;
            let isZooming = false;
            let zoomStartTime = 0;

            const handleWheel = (event: any) => {
                // Event'i engelle (default zoom'u devre dışı bırak)
                event.preventDefault();

                // Zoom zaten devam ediyorsa yeni zoom'u engelle
                if (isZooming) return;

                // Controls ve camera kontrolü
                if (!controlsRef.current || !controlsRef.current.object) return;

                // Zoom durumunu hook'a bildir
                isZoomingRef.current = true;

                // Wheel event'i daha hızlı zoom için optimize et
                const delta = event.deltaY * 0.002; // Wheel sensitivity'yi 3 kat artır (0.001 → 0.003)
                const camera = controlsRef.current.object;
                const target = controlsRef.current.target;

                // Güvenlik kontrolü
                if (!camera || !camera.position || !target) return;

                // Zoom başlangıç zamanını kaydet
                zoomStartTime = Date.now();

                // Daha hızlı zoom için güçlendirilmiş zoom interpolation
                const currentDistance = camera.position.distanceTo(target);
                const zoomFactor = 1 + (delta * 2); // Zoom factor'ını 2 kat güçlendir
                const newDistance = Math.max(500, Math.min(900, currentDistance * zoomFactor));

                // Kamera pozisyonunu smooth şekilde güncelle
                const direction = camera.position.clone().sub(target).normalize();
                const newPosition = target.clone().add(direction.multiplyScalar(newDistance));

                // Zoom durumunu işaretle
                isZooming = true;

                // GSAP ile smooth animation - daha kısa süre
                gsap.to(camera.position, {
                    x: newPosition.x,
                    y: newPosition.y,
                    z: newPosition.z,
                    duration: 0.15, // Daha hızlı zoom için süreyi azalt
                    ease: "power1.out", // Daha yumuşak easing
                    onUpdate: () => {
                        if (controlsRef.current) {
                            controlsRef.current.update();
                        }
                    },
                    onComplete: () => {
                        // Zoom bittikten sonra kısa bir bekleme
                        zoomTimeout = setTimeout(() => {
                            isZooming = false;
                            isZoomingRef.current = false; // Hook'ta zoom durumunu güncelle
                        }, 30); // Daha kısa bekleme süresi
                    }
                });
            };

            // Wheel event listener ekle
            const canvas = document.querySelector('canvas');
            if (canvas) {
                canvas.addEventListener('wheel', handleWheel, { passive: false });

                // Cleanup
                return () => {
                    canvas.removeEventListener('wheel', handleWheel);
                    if (zoomTimeout) {
                        clearTimeout(zoomTimeout);
                    }
                };
            }
        }
    }, [controlsRef, isZoomingRef]);

    return (
        <MapControls
            ref={controlsRef}
            enablePan={true} // Pan'i geri aç
            enableZoom={false} // Zoom'u kapat (kendi wheel handling'imizi kullanıyoruz)
            enableRotate={false} // Rotate'i kapat - harita dönmesin

            minDistance={500} // Minimum zoom (100 derece FOV)
            maxDistance={900} // Maximum zoom (85 derece FOV)
            target={[0, 0, 0]} // Modelin merkezine göre ayarla

            // Smooth zoom için optimize edilmiş ayarlar
            enableDamping={false} // Damping'i kapat (daha stabil)
            rotateSpeed={0} // Rotate hızını sıfırla
            panSpeed={0.5}
            zoomSpeed={0.6} // Zoom hızını orta seviyede tut

            maxPolarAngle={Math.PI / 2} // Sadece üstten görünüm için
            minPolarAngle={Math.PI / 2} // Sadece üstten görünüm için (aynı değer)
            screenSpacePanning={true}

            // DEBUG: MapControls ayarlarını logla
            onUpdate={() => {
                console.log('🔄 MAPCONTROLS UPDATE:', {
                    target: controlsRef.current?.target,
                    cameraPosition: controlsRef.current?.object?.position,
                    cameraRotation: controlsRef.current?.object?.rotation
                });
            }}
        />
    );
}

function Harita() {
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
                    antialias: true // Anti-aliasing ekle
                }}
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
                    <SceneContent />
                    {/* Optional: Environment for subtle reflections, not background */}
                    <Environment preset="sunset" background={false} />
                </React.Suspense>
            </Canvas>
        </div>
    );
}

// Canvas içinde kullanılacak bileşen
function SceneContent() {
    const { controlsRef, updateCameraBounds, isZoomingRef } = useMapControls();

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

            {/* MapControls: left=pan, right=rotate, scroll=zoom */}
            <MapControlsWrapper controlsRef={controlsRef} isZoomingRef={isZoomingRef} />

            {/* Işıklar */}
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 10, 7.5]} intensity={0.8} castShadow />
            <directionalLight position={[-5, -10, -7.5]} intensity={0.3} />
        </>
    );
}

export default Harita; 