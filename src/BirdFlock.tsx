import React, { useRef, useEffect, useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Vector3, Group, Object3D, SphereGeometry, MeshStandardMaterial, Mesh, BufferGeometry, Float32BufferAttribute } from 'three';
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
    const { scene } = useGLTF((process.env.PUBLIC_URL || '') + '/bird.glb');
    const flockRef = useRef<Group>(null);
    const birdsRef = useRef<Object3D[]>([]);
    const birdWingNodesRef = useRef<Object3D[][]>([]); // Her kuş için kanat düğümlerini önbelleğe al
    // Kanat shader materyali kaldırıldı
    const animationRef = useRef<gsap.core.Timeline | null>(null);
    const isVisibleRef = useRef(true);
    // Kanat shader'ları kaldırıldı

    // GLB yerine kodla üretilmiş düşük poligon kuş kullan (resimdeki gibi)
    const USE_PROCEDURAL_BIRD = true;

    // Basit üçgen geometrisi oluşturucu
    const createTriangleGeometry = (v0: Vector3, v1: Vector3, v2: Vector3) => {
        const geometry = new BufferGeometry();
        const vertices = new Float32BufferAttribute(
            new Float32Array([
                v0.x, v0.y, v0.z,
                v1.x, v1.y, v1.z,
                v2.x, v2.y, v2.z,
            ]),
            3
        );
        geometry.setAttribute('position', vertices);
        geometry.setIndex([0, 1, 2]);
        geometry.computeVertexNormals();
        return geometry;
    };

    // Resimdeki gibi düşük poligon kuşu oluşturan yardımcı
    const createProceduralBird = (): Group => {
        const bird = new Group();
        bird.name = 'proceduralBird';

        const material = new MeshStandardMaterial({
            color: 0xffffff,
            emissive: 0x222222,
            metalness: 0.0,
            roughness: 0.2,
            side: 2,
        });

        // Gövde (ince dikey plaka)
        const body = new Mesh(
            createTriangleGeometry(
                new Vector3(0, 0.35, -0.05),
                new Vector3(0, -0.5, 0.0),
                new Vector3(0, -0.5, -0.2)
            ),
            material
        );
        body.name = 'body';
        bird.add(body);

        // Üst yüzgeç (dorsal) - küçük üçgen
        const dorsal = new Mesh(
            createTriangleGeometry(
                new Vector3(0, 0.35, -0.05),
                new Vector3(0.12, 0.6, -0.05),
                new Vector3(-0.12, 0.6, -0.05)
            ),
            material
        );
        dorsal.name = 'dorsal';
        bird.add(dorsal);

        // Kuyruk (dikey üçgen)
        const tail = new Mesh(
            createTriangleGeometry(
                new Vector3(0, -0.4, -0.25),
                new Vector3(0.0, -1.05, -0.45),
                new Vector3(0.0, -0.7, -0.1)
            ),
            material
        );
        tail.name = 'tail';
        bird.add(tail);

        // Sağ kanat (geniş üçgen plaka)
        const rightWing = new Mesh(
            createTriangleGeometry(
                new Vector3(0.0, -0.05, -0.05),   // kök
                new Vector3(2.4, 0.0, -0.6),      // uç
                new Vector3(0.0, -0.25, -1.1)     // arka kök
            ),
            material
        );
        rightWing.name = 'rightWing';
        bird.add(rightWing);

        // Sol kanat (ayna görüntüsü)
        const leftWing = new Mesh(
            createTriangleGeometry(
                new Vector3(0.0, -0.05, -0.05),   // kök
                new Vector3(-2.4, 0.0, -0.6),     // uç
                new Vector3(0.0, -0.25, -1.1)     // arka kök
            ),
            material
        );
        leftWing.name = 'leftWing';
        bird.add(leftWing);

        return bird;
    };

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

    // Rastgele başlangıç pozisyonu oluştur (sadece X yönünde - doğudan batıya veya batıdan doğuya)
    const generateRandomStartPosition = () => {
        const mapBounds = 2500; // GLB dosyasının dışındaki sınırlar
        // Dinamik yükseklik sistemi kullanılacak, burada sadece temel yükseklik
        const height = 2; // 4 kat daha alçak: 5 → 2

        // Sadece X ekseninde başla (doğu veya batı)
        const side = Math.floor(Math.random() * 2); // Sadece 2 yön: doğu veya batı
        let x, z;

        switch (side) {
            case 0: // Doğu (GLB dışı)
                x = mapBounds + Math.random() * 500;
                z = (Math.random() - 0.5) * mapBounds; // Z ekseninde rastgele pozisyon
                break;
            case 1: // Batı (GLB dışı)
                x = -mapBounds - Math.random() * 500;
                z = (Math.random() - 0.5) * mapBounds; // Z ekseninde rastgele pozisyon
                break;
        }

        return new Vector3(x, height, z);
    };

    // Rastgele bitiş pozisyonu oluştur (sadece X yönünde - karşı tarafa)
    const generateRandomEndPosition = (startPos: Vector3) => {
        const mapBounds = 2500;
        // Dinamik yükseklik sistemi kullanılacak, burada sadece temel yükseklik
        const height = 2; // 4 kat daha alçak: 5 → 2

        // Başlangıç pozisyonunun karşı tarafına git (sadece X ekseninde)
        let x, z;

        if (startPos.x < -mapBounds) { // Batıdan başladıysa doğuya git
            x = mapBounds + Math.random() * 500;
            z = startPos.z; // Aynı Z pozisyonunda kal
        } else if (startPos.x > mapBounds) { // Doğudan başladıysa batıya git
            x = -mapBounds - Math.random() * 500;
            z = startPos.z; // Aynı Z pozisyonunda kal
        }

        return new Vector3(x, height, z);
    };

    // Kanat çırpma için yardımcı fonksiyon (hafif Y kaldırma ve Z ileri-geri)
    const applyWingFlapping = (bird: Object3D, wingPhase: number) => {
        const liftEffect = Math.abs(Math.sin(wingPhase)) * 0.02;
        const zMovement = Math.sin(wingPhase * 0.6) * 0.02;
        bird.position.y += liftEffect;
        bird.position.z += zMovement;
    };

    // Kuşları oluştur
    const createBirds = () => {
        if (!flockRef.current) return;

        // Önceki kuşları temizle
        while (flockRef.current.children.length > 0) {
            flockRef.current.remove(flockRef.current.children[0]);
        }
        birdsRef.current = [];
        birdWingNodesRef.current = [];

        // Her kuş için tek klon oluştur
        birdPositions.forEach((birdProps, index) => {
            let birdObject: Object3D;

            if (scene && !USE_PROCEDURAL_BIRD) {
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
                            // Tüm mesh'ler için standart beyaz materyal ayarları (kanat shader'ı yok)
                            child.material.color.setHex(0xffffff);
                            child.material.emissive.setHex(0x222222);
                            child.material.metalness = 0.0;
                            child.material.roughness = 0.1;
                            if (child.material.map) {
                                child.material.map = null;
                            }
                            if (child.material.vertexColors) {
                                child.material.vertexColors = false;
                            }
                            if (child.material.specular) {
                                child.material.specular.setHex(0x000000);
                            }
                            if (child.material.sheenColor) {
                                child.material.sheenColor.setHex(0xffffff);
                            }
                            child.material.needsUpdate = true;
                        }
                    }
                });
            } else {
                // GLB kullanılmıyorsa resimdeki gibi düşük poligon kuş modeli oluştur
                birdObject = createProceduralBird();
            }

            // Kuş pozisyonunu ayarla
            birdObject.position.copy(birdProps.position);
            birdObject.rotation.set(birdProps.rotation.x, birdProps.rotation.y, birdProps.rotation.z);
            birdObject.scale.setScalar(birdProps.scale);

            // Yavru kuş bilgisini sakla
            (birdObject as any).isChick = birdProps.isChick;

            // Bu kuş için kanat düğümlerini tespit et ve önbelleğe al (derin traverse)
            const wingNodes: Object3D[] = [];
            birdObject.traverse((child: any) => {
                const childName = (child.name || '').toLowerCase();
                if (
                    childName.includes('wing') ||
                    childName.includes('kanat') ||
                    childName.includes('left') ||
                    childName.includes('sol') ||
                    childName.includes('right') ||
                    childName.includes('sağ')
                ) {
                    wingNodes.push(child as Object3D);
                }
            });

            // Sürüye ekle
            flockRef.current!.add(birdObject);
            birdsRef.current.push(birdObject);
            birdWingNodesRef.current.push(wingNodes);
        });
    };

    // Sonsuz uçuş animasyonu
    const startInfiniteFlight = () => {
        if (!flockRef.current) return;

        const startPos = generateRandomStartPosition();
        const endPos = generateRandomEndPosition(startPos);
        // Hız %40 düşürülsün => süre 1/0.6 ≈ 1.666x artırılır
        const durationMultiplier = 1 / 0.6;
        const flightDuration = (speed + Math.random() * 1) * durationMultiplier; // Daha uzun süre = daha yavaş uçuş

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
            duration: flightDuration,
            ease: "none",
            onUpdate: () => {
                if (flockRef.current && animationRef.current) {
                    // Progress hesapla
                    const progress = animationRef.current.progress();
                    const currentPosition = new Vector3().lerpVectors(startPos, endPos, progress);

                    // Dinamik yükseklik sistemi - güneyden kuzeye giderken yükselsin
                    const screenHeight = 2500; // Ekran yüksekliği (harita sınırları)
                    const normalizedY = (currentPosition.z + screenHeight) / (2 * screenHeight); // 0-1 arası normalize edilmiş Y pozisyonu

                    // Yükseklik hesaplama: güneyde alçak, kuzeyde yüksek (2x daha yüksek)
                    const baseHeight = 30; // Temel yükseklik (önceki 15'in 2 katı)
                    const heightVariation = 24; // Yükseklik değişim miktarı (önceki 12'nin 2 katı)
                    const dynamicHeight = baseHeight + (normalizedY * heightVariation); // Normal formül (güneyde alçak, kuzeyde yüksek)

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

        // Kuşların kanat çırpma animasyonu (hafif)
        birdsRef.current.forEach((bird, index) => {
            const isChick = (bird as any).isChick;

            // Yavru kuşlar için ek animasyonlar - 4 kat daha az
            if (isChick) {
                // Yavrular daha fazla salınım yapar ama 4 kat daha az
                bird.position.y += Math.sin(time * 3) * 0.02; // 0.04 → 0.02
                bird.rotation.x = Math.sin(time * 2.5) * 0.0375; // 0.075 → 0.0375
                bird.rotation.y = Math.sin(time * 1.8) * 0.02; // 0.04 → 0.02
            } else {
                // Yetişkin kuşlar için daha yumuşak hareket - 4 kat daha az
                bird.position.y += Math.sin(time * 1.5) * 0.0075; // 0.015 → 0.0075
                bird.rotation.x = Math.sin(time * 1.2) * 0.0075; // 0.015 → 0.0075
            }

            // Tüm kuşlar için genel uçuş hareketi
            const flightWobble = Math.sin(time * 1.1) * 0.00375; // 0.0075 → 0.00375
            bird.position.x += flightWobble;
            bird.position.z += Math.cos(time * 1.0) * 0.008;

            // Kanat çırpma: yavrular daha hızlı çırpar
            const baseWingSpeed = isChick ? 12 : 8;
            const wingSpeed = baseWingSpeed + index * 0.5;
            const wingPhase = time * wingSpeed;

            // Kanat parçalarına hafif rotasyon uygula (derin düğümler dahil)
            const wingNodes = birdWingNodesRef.current[index] || [];
            for (const child of wingNodes as any[]) {
                const childName = (child.name || '').toLowerCase();
                if (childName.includes('left') || childName.includes('sol')) {
                    child.rotation.z = Math.sin(wingPhase) * (isChick ? 1.1 : 0.9);
                } else if (childName.includes('right') || childName.includes('sağ')) {
                    child.rotation.z = -Math.sin(wingPhase) * (isChick ? 1.1 : 0.9);
                } else if (childName.includes('wing') || childName.includes('kanat')) {
                    child.rotation.z = Math.sin(wingPhase) * 0.9;
                }
            }

            // Gövdeye çok hafif lift ve z-ileri/geri ekle
            applyWingFlapping(bird, wingPhase);
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