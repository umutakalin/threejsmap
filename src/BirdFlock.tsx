import React, { useRef, useEffect, useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Vector3, Group, Object3D, SphereGeometry, MeshStandardMaterial, Mesh } from 'three';
import { gsap } from 'gsap';

interface BirdFlockProps {
    flockId: number;
    startPosition: Vector3;
    endPosition: Vector3;
    speed: number;
    delay: number;
    size: number;
    birdCount: number;
}

interface BirdProps {
    position: Vector3;
    rotation: Vector3;
    scale: number;
    isChick: boolean; // Yavru kuş mu?
}

const BirdFlock: React.FC<BirdFlockProps> = ({
    flockId,
    startPosition,
    endPosition,
    speed,
    delay,
    size,
    birdCount
}) => {
    const { scene } = useGLTF('/3dmap/bird.glb');
    const flockRef = useRef<Group>(null);
    const birdsRef = useRef<Object3D[]>([]);
    const animationRef = useRef<gsap.core.Timeline | null>(null);
    const isVisibleRef = useRef(true);

    // Kuş pozisyonlarını hesapla (üçgen formasyon için)
    const birdPositions = useMemo(() => {
        const positions: BirdProps[] = [];
        const spacing = size * 15; // Kuşlar arası mesafe

        // Üçgen formasyon için pozisyonlar (4 kuş için)
        const trianglePositions = [
            { x: 0, y: 0, z: 0 },           // Lider kuş (ön)
            { x: -spacing, y: -spacing * 0.3, z: -spacing * 0.8 }, // Sol arka
            { x: spacing, y: -spacing * 0.3, z: -spacing * 0.8 },  // Sağ arka
            { x: 0, y: -spacing * 0.6, z: -spacing * 1.6 }         // En arka
        ];

        // 4 kuş için pozisyon oluştur
        for (let i = 0; i < 4; i++) {
            const pos = trianglePositions[i];
            const isChick = Math.random() < 0.4; // %40 ihtimalle yavru kuş

            positions.push({
                position: new Vector3(pos.x, pos.y, pos.z),
                rotation: new Vector3(0, 0, 0),
                scale: isChick ? 2.0 + Math.random() * 1.0 : 4.0 + Math.random() * 1.0, // Yavrular daha küçük
                isChick: isChick
            });
        }

        return positions;
    }, [size]);

    // Rastgele başlangıç pozisyonu oluştur (GLB dışından)
    const generateRandomStartPosition = () => {
        const mapBounds = 2500; // GLB dosyasının dışındaki sınırlar
        // Dinamik yükseklik sistemi kullanılacak, burada sadece temel yükseklik
        const height = 10;

        // Kenarlardan rastgele bir pozisyon seç (GLB dışından)
        const side = Math.floor(Math.random() * 4);
        let x, z;

        switch (side) {
            case 0: // Kuzey (GLB dışı)
                x = (Math.random() - 0.5) * mapBounds;
                z = -mapBounds - Math.random() * 500;
                break;
            case 1: // Doğu (GLB dışı)
                x = mapBounds + Math.random() * 500;
                z = (Math.random() - 0.5) * mapBounds;
                break;
            case 2: // Güney (GLB dışı)
                x = (Math.random() - 0.5) * mapBounds;
                z = mapBounds + Math.random() * 500;
                break;
            case 3: // Batı (GLB dışı)
                x = -mapBounds - Math.random() * 500;
                z = (Math.random() - 0.5) * mapBounds;
                break;
        }

        return new Vector3(x, height, z);
    };

    // Rastgele bitiş pozisyonu oluştur (GLB dışına)
    const generateRandomEndPosition = (startPos: Vector3) => {
        const mapBounds = 2500;
        // Dinamik yükseklik sistemi kullanılacak, burada sadece temel yükseklik
        const height = 10;

        // Başlangıç pozisyonunun karşı tarafına git (GLB dışına)
        let x, z;

        if (startPos.x < -mapBounds) { // Batıdan başladıysa doğuya git
            x = mapBounds + Math.random() * 500;
            z = (Math.random() - 0.5) * mapBounds;
        } else if (startPos.x > mapBounds) { // Doğudan başladıysa batıya git
            x = -mapBounds - Math.random() * 500;
            z = (Math.random() - 0.5) * mapBounds;
        } else { // Güneyden başladıysa kuzeye git
            x = (Math.random() - 0.5) * mapBounds;
            z = -mapBounds - Math.random() * 500;
        }

        return new Vector3(x, height, z);
    };

    // Gerçekçi kanat çırpma animasyonu için yardımcı fonksiyon
    const applyWingFlapping = (bird: Object3D, wingPhase: number, isChick: boolean) => {
        // Kanat çırpma sırasında hafif süzülme efekti
        const glidingEffect = Math.sin(wingPhase * 0.3) * 0.05;

        // Kanat çırpma sırasında hafif ileri itme
        const forwardThrust = Math.abs(Math.sin(wingPhase)) * 0.03;

        // Kuşun pozisyonunu güncelle
        bird.position.y += glidingEffect;
        bird.position.z += forwardThrust;

        // Kanat çırpma sırasında hafif rotasyon
        const bodyRotation = Math.sin(wingPhase * 0.2) * 0.02;
        bird.rotation.z += bodyRotation;
    };

    // Kuşları oluştur
    const createBirds = () => {
        if (!flockRef.current) return;

        // Önceki kuşları temizle
        while (flockRef.current.children.length > 0) {
            flockRef.current.remove(flockRef.current.children[0]);
        }
        birdsRef.current = [];

        // Her kuş için tek klon oluştur
        birdPositions.forEach((birdProps, index) => {
            let birdObject: Object3D;

            if (scene) {
                // GLB modeli varsa onu kullan
                birdObject = scene.clone();

                // Kuşun rengini tamamen beyaz yap - tüm yeşil tonlarını kaldır
                birdObject.traverse((child: any) => {
                    if (child.isMesh && child.material) {
                        if (Array.isArray(child.material)) {
                            child.material.forEach((mat: any) => {
                                if (mat.isMaterial) {
                                    // Ana renk - tamamen beyaz
                                    mat.color.setHex(0xffffff);

                                    // Emissive - hafif beyaz parlaklık ekle
                                    mat.emissive.setHex(0x222222);

                                    // Tüm yeşil tonlarını kaldırmak için ek ayarlar
                                    mat.metalness = 0.0;
                                    mat.roughness = 0.1;

                                    // Eğer texture varsa, onu da beyaz yap
                                    if (mat.map) {
                                        mat.map = null;
                                    }

                                    // Vertex colors varsa onları da beyaz yap
                                    if (mat.vertexColors) {
                                        mat.vertexColors = false;
                                    }

                                    // Specular ve diğer renk özelliklerini sıfırla
                                    if (mat.specular) {
                                        mat.specular.setHex(0x000000);
                                    }

                                    // Sheen rengi varsa onu da beyaz yap
                                    if (mat.sheenColor) {
                                        mat.sheenColor.setHex(0xffffff);
                                    }

                                    mat.needsUpdate = true;
                                }
                            });
                        } else {
                            // Ana renk - tamamen beyaz
                            child.material.color.setHex(0xffffff);

                            // Emissive - hafif beyaz parlaklık ekle
                            child.material.emissive.setHex(0x222222);

                            // Tüm yeşil tonlarını kaldırmak için ek ayarlar
                            child.material.metalness = 0.0;
                            child.material.roughness = 0.1;

                            // Eğer texture varsa, onu da beyaz yap
                            if (child.material.map) {
                                child.material.map = null;
                            }

                            // Vertex colors varsa onları da beyaz yap
                            if (child.material.vertexColors) {
                                child.material.vertexColors = false;
                            }

                            // Specular ve diğer renk özelliklerini sıfırla
                            if (child.material.specular) {
                                child.material.specular.setHex(0x000000);
                            }

                            // Sheen rengi varsa onu da beyaz yap
                            if (child.material.sheenColor) {
                                child.material.sheenColor.setHex(0xffffff);
                            }

                            child.material.needsUpdate = true;
                        }
                    }
                });
            } else {
                // GLB modeli yoksa basit küre oluştur - tamamen beyaz
                const geometry = new SphereGeometry(1.0, 12, 8);
                const material = new MeshStandardMaterial({
                    color: 0xffffff, // Tamamen beyaz
                    emissive: 0x222222, // Hafif beyaz parlaklık
                    metalness: 0.0, // Metalik olmasın
                    roughness: 0.1, // Daha pürüzsüz
                    transparent: false,
                    opacity: 1.0
                });
                birdObject = new Mesh(geometry, material);
            }

            // Kuş pozisyonunu ayarla
            birdObject.position.copy(birdProps.position);
            birdObject.rotation.set(birdProps.rotation.x, birdProps.rotation.y, birdProps.rotation.z);
            birdObject.scale.setScalar(birdProps.scale);

            // Yavru kuş bilgisini sakla
            (birdObject as any).isChick = birdProps.isChick;

            // Sürüye ekle
            flockRef.current!.add(birdObject);
            birdsRef.current.push(birdObject);
        });
    };

    // Sonsuz uçuş animasyonu
    const startInfiniteFlight = () => {
        if (!flockRef.current) return;

        const startPos = generateRandomStartPosition();
        const endPos = generateRandomEndPosition(startPos);
        const flightSpeed = speed + Math.random() * 1; // Rastgele hız varyasyonu

        // Kuşları görünür yap
        flockRef.current.visible = true;
        isVisibleRef.current = true;

        // Sürüyü başlangıç pozisyonuna yerleştir
        flockRef.current.position.copy(startPos);

        // Uçuş animasyonu
        animationRef.current = gsap.timeline({
            onComplete: () => {
                // Animasyon bittiğinde kuşları gizle ve yeni uçuş başlat
                if (flockRef.current) {
                    flockRef.current.visible = false;
                    isVisibleRef.current = false;
                }

                // Kısa bir bekleme sonrası yeni uçuş başlat
                setTimeout(() => {
                    startInfiniteFlight();
                }, 3000 + Math.random() * 4000); // 3-7 saniye arası rastgele bekleme
            }
        });

        animationRef.current.to(flockRef.current, {
            duration: flightSpeed,
            ease: "none",
            onUpdate: () => {
                if (flockRef.current && animationRef.current) {
                    // Progress hesapla
                    const progress = animationRef.current.progress();
                    const currentPosition = new Vector3().lerpVectors(startPos, endPos, progress);

                    // Dinamik yükseklik sistemi - ekranın yukarısına çıktıkça yükseklik azalsın, aşağıya indikçe artsın
                    const screenHeight = 2500; // Ekran yüksekliği (harita sınırları)
                    const normalizedY = (currentPosition.z + screenHeight) / (2 * screenHeight); // 0-1 arası normalize edilmiş Y pozisyonu

                    // Yükseklik hesaplama: üstte çok, altta az (tersine çevrilmiş)
                    const baseHeight = 60; // Temel yükseklik (kuşlar için yüksek)
                    const heightVariation = 50; // Yükseklik değişim miktarı
                    const dynamicHeight = baseHeight - (normalizedY * heightVariation); // Tersine çevrilmiş formül

                    // Y pozisyonunu dinamik yükseklikle güncelle
                    currentPosition.y = dynamicHeight;

                    flockRef.current.position.copy(currentPosition);

                    // Uçuş yönüne göre rotasyon
                    const direction = new Vector3()
                        .subVectors(endPos, startPos)
                        .normalize();

                    const angle = Math.atan2(direction.x, direction.z);
                    flockRef.current.rotation.y = angle;

                    // Hafif salınım animasyonu
                    const time = Date.now() * 0.001;
                    birdsRef.current.forEach((bird, index) => {
                        const waveOffset = index * 0.5;
                        bird.position.y += Math.sin(time + waveOffset) * 0.1;
                        bird.rotation.z = Math.sin(time + waveOffset) * 0.1;
                    });
                }
            }
        });
    };

    useEffect(() => {
        createBirds();

        // İlk uçuşu başlat
        setTimeout(() => {
            startInfiniteFlight();
        }, delay);

        return () => {
            if (animationRef.current) {
                animationRef.current.kill();
            }
        };
    }, [delay, birdPositions, scene]);

    // Sürekli animasyon için useFrame
    useFrame((state) => {
        if (!flockRef.current || !isVisibleRef.current) return;

        const time = state.clock.elapsedTime;

        // Kuşların gerçekçi kanat çırpma animasyonu
        birdsRef.current.forEach((bird, index) => {
            const isChick = (bird as any).isChick;

            // Kanat çırpma hızı ve genişliği
            const baseWingSpeed = isChick ? 12 : 8; // Yavrular daha hızlı
            const wingSpeed = baseWingSpeed + index * 0.5; // Her kuş için farklı hız
            const wingAmplitude = isChick ? 1.5 : 1.2; // Yavrular daha geniş kanat çırpar

            // Gerçekçi kanat çırpma animasyonu (asimetrik)
            const wingPhase = time * wingSpeed;
            const wingAngle = Math.sin(wingPhase) * wingAmplitude;

            // Kanat çırpma sırasında hafif yukarı-aşağı hareket
            const liftEffect = Math.abs(Math.sin(wingPhase)) * 0.1;

            // Kanat animasyonu (eğer kuş modelinde kanat mesh'leri varsa)
            if (scene) {
                bird.children.forEach((child: any) => {
                    const childName = child.name.toLowerCase();

                    // Sol kanat animasyonu
                    if (childName.includes('left') || childName.includes('sol')) {
                        child.rotation.z = wingAngle;
                        child.rotation.x = Math.sin(wingPhase * 0.7) * 0.4;
                        child.rotation.y = Math.sin(wingPhase * 0.5) * 0.2;
                    }
                    // Sağ kanat animasyonu (sol kanatla ters fazda)
                    else if (childName.includes('right') || childName.includes('sağ')) {
                        child.rotation.z = -wingAngle; // Ters faz
                        child.rotation.x = Math.sin(wingPhase * 0.7 + Math.PI) * 0.4;
                        child.rotation.y = Math.sin(wingPhase * 0.5 + Math.PI) * 0.2;
                    }
                    // Genel kanat mesh'leri
                    else if (childName.includes('wing') || childName.includes('kanat')) {
                        child.rotation.z = wingAngle;
                        child.rotation.x = Math.sin(wingPhase * 0.7) * 0.3;
                    }
                    // Gövde için hafif salınım (kanat çırpmaya uyumlu)
                    else if (childName.includes('body') || childName.includes('torso') || childName.includes('gövde')) {
                        child.rotation.z = Math.sin(wingPhase * 0.3) * 0.05;
                        child.rotation.x = Math.sin(wingPhase * 0.2) * 0.03;
                    }
                    // Kuyruk animasyonu (kanat çırpmaya uyumlu)
                    else if (childName.includes('tail') || childName.includes('kuyruk')) {
                        child.rotation.z = Math.sin(wingPhase * 0.4) * 0.15;
                        child.rotation.y = Math.sin(wingPhase * 0.3) * 0.1;
                    }
                    // Baş animasyonu
                    else if (childName.includes('head') || childName.includes('baş')) {
                        child.rotation.y = Math.sin(wingPhase * 0.2) * 0.1;
                        child.rotation.x = Math.sin(wingPhase * 0.1) * 0.05;
                    }
                });

                // Kuşun genel pozisyonunu kanat çırpmaya göre ayarla
                bird.position.y += liftEffect;

                // Gerçekçi kanat çırpma efektlerini uygula
                applyWingFlapping(bird, wingPhase, isChick);

            } else {
                // GLB modeli yoksa basit küre için kanat çırpma efekti
                // Küreyi yatay olarak sıkıştırıp genişleterek kanat efekti yarat
                const scaleX = 1 + Math.abs(Math.sin(wingPhase)) * 0.3;
                const scaleY = 1 - Math.abs(Math.sin(wingPhase)) * 0.2;
                const scaleZ = 1 + Math.abs(Math.sin(wingPhase)) * 0.1;

                bird.scale.set(scaleX, scaleY, scaleZ);

                // Hafif rotasyon animasyonu
                bird.rotation.z = Math.sin(wingPhase * 0.5) * 0.3;
                bird.rotation.x = Math.sin(wingPhase * 0.3) * 0.2;

                // Yukarı-aşağı hareket
                bird.position.y += liftEffect;

                // Gerçekçi kanat çırpma efektlerini uygula
                applyWingFlapping(bird, wingPhase, isChick);
            }

            // Yavru kuşlar için ek animasyonlar
            if (isChick) {
                // Yavrular daha fazla salınım yapar
                bird.position.y += Math.sin(time * 3) * 0.08;
                bird.rotation.x = Math.sin(time * 2.5) * 0.15;
                bird.rotation.y = Math.sin(time * 1.8) * 0.08;
            } else {
                // Yetişkin kuşlar için daha yumuşak hareket
                bird.position.y += Math.sin(time * 1.5) * 0.03;
                bird.rotation.x = Math.sin(time * 1.2) * 0.03;
            }

            // Tüm kuşlar için genel uçuş hareketi (kanat çırpmaya uyumlu)
            const flightWobble = Math.sin(time * 1.1) * 0.015;
            bird.position.x += flightWobble;
            bird.position.z += Math.cos(time * 1.0) * 0.015;

            // Kanat çırpma sırasında hafif ileri-geri hareket
            const forwardBackward = Math.sin(wingPhase * 0.5) * 0.02;
            bird.position.z += forwardBackward;

            // Kanat çırpma sırasında hafif dönme efekti (gerçekçi uçuş)
            const wingRotationEffect = Math.sin(wingPhase * 0.8) * 0.01;
            bird.rotation.y += wingRotationEffect;
        });
    });

    return (
        <group ref={flockRef}>
            {/* Kuşlar için özel beyaz ışık - yeşil tonlarını tamamen kaldır */}
            <pointLight
                position={[0, 0, 0]}
                intensity={0.8}
                color={0xffffff}
                distance={150}
            />
            {/* Ek beyaz ışık - kuşları daha parlak göster */}
            <spotLight
                position={[0, 15, 0]}
                intensity={0.5}
                color={0xffffff}
                angle={Math.PI / 3}
                penumbra={0.3}
                distance={120}
            />
            {/* Ambient ışık - kuşları her yönden aydınlat */}
            <ambientLight
                intensity={0.4}
                color={0xffffff}
            />
        </group>
    );
};

// Ana kuş sürüleri bileşeni
interface BirdFlocksProps {
    enableBirdFlocks: boolean;
    birdSpeed: number;
    birdSize: number;
    birdCount: number;
}

const BirdFlocks: React.FC<BirdFlocksProps> = ({
    enableBirdFlocks,
    birdSpeed,
    birdSize,
    birdCount
}) => {
    if (!enableBirdFlocks) return null;

    return (
        <>
            {/* 3 farklı sürü oluştur (daha fazla mesafe ile) */}
            {[0, 1, 2].map((index) => (
                <BirdFlock
                    key={index}
                    flockId={index}
                    startPosition={new Vector3(0, 0, 0)} // Bu değerler artık kullanılmıyor
                    endPosition={new Vector3(0, 0, 0)}   // Bu değerler artık kullanılmıyor
                    speed={birdSpeed}
                    delay={index * 8} // Her sürü 8 saniye arayla başlasın (daha fazla mesafe)
                    size={birdSize}
                    birdCount={4} // Her sürüde tam olarak 4 kuş
                />
            ))}
        </>
    );
};

export default BirdFlocks; 