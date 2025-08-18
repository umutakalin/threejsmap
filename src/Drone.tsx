import React, { useRef, useEffect, useCallback } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Vector3, Group, CylinderGeometry, MeshStandardMaterial, Mesh } from 'three';
import { gsap } from 'gsap';

interface DroneProps {
    droneId: number;
    startPosition: Vector3;
    endPosition: Vector3;
    speed: number;
    delay: number;
    size: number;
}

const Drone: React.FC<DroneProps> = ({
    droneId,
    startPosition,
    endPosition,
    speed,
    delay,
    size
}) => {
    const { scene } = useGLTF('/3dmap/baykar_bayraktar_tb2.glb');
    const droneRef = useRef<Group>(null);
    const animationRef = useRef<gsap.core.Timeline | null>(null);
    const isVisibleRef = useRef(true);

    // Rastgele başlangıç pozisyonu oluştur (harita dışından)
    const generateRandomStartPosition = () => {
        const mapBounds = 2500; // Harita sınırları
        // Dinamik yükseklik sistemi kullanılacak, burada sadece temel yükseklik
        const height = 100;

        // Kenarlardan rastgele bir pozisyon seç (harita dışından)
        const side = Math.floor(Math.random() * 4);
        let x, z;

        switch (side) {
            case 0: // Kuzey (harita dışı)
                x = (Math.random() - 0.5) * mapBounds;
                z = -mapBounds - Math.random() * 500;
                break;
            case 1: // Doğu (harita dışı)
                x = mapBounds + Math.random() * 500;
                z = (Math.random() - 0.5) * mapBounds;
                break;
            case 2: // Güney (harita dışı)
                x = (Math.random() - 0.5) * mapBounds;
                z = mapBounds + Math.random() * 500;
                break;
            case 3: // Batı (harita dışı)
                x = -mapBounds - Math.random() * 500;
                z = (Math.random() - 0.5) * mapBounds;
                break;
        }

        return new Vector3(x, height, z);
    };

    // Rastgele bitiş pozisyonu oluştur (harita dışına)
    const generateRandomEndPosition = (startPos: Vector3) => {
        const mapBounds = 2500;
        // Dinamik yükseklik sistemi kullanılacak, burada sadece temel yükseklik
        const height = 100;

        // Başlangıç pozisyonunun karşı tarafına git (harita dışına)
        let x, z;

        if (startPos.x < -mapBounds) { // Batıdan başladıysa doğuya git
            x = mapBounds + Math.random() * 500;
            z = (Math.random() - 0.5) * mapBounds;
        } else if (startPos.x > mapBounds) { // Doğudan başladıysa batıya git
            x = -mapBounds - Math.random() * 500;
            z = (Math.random() - 0.5) * mapBounds;
        } else if (startPos.z < -mapBounds) { // Kuzeyden başladıysa güneye git
            x = (Math.random() - 0.5) * mapBounds;
            z = mapBounds + Math.random() * 500;
        } else { // Güneyden başladıysa kuzeye git
            x = (Math.random() - 0.5) * mapBounds;
            z = -mapBounds - Math.random() * 500;
        }

        return new Vector3(x, height, z);
    };

    // Drone'u oluştur
    const createDrone = useCallback(() => {
        if (!droneRef.current) return;

        // Önceki drone'u temizle
        while (droneRef.current.children.length > 0) {
            droneRef.current.remove(droneRef.current.children[0]);
        }

        if (scene) {
            // GLB modelini klonla
            const droneObject = scene.clone();

            // Drone'un rengini ve materyalini ayarla
            droneObject.traverse((child: any) => {
                if (child.isMesh && child.material) {
                    if (Array.isArray(child.material)) {
                        child.material.forEach((mat: any) => {
                            if (mat.isMaterial) {
                                // Drone rengi - beyaz
                                mat.color.setHex(0xffffff);
                                mat.emissive.setHex(0x222222);
                                mat.metalness = 0.1;
                                mat.roughness = 0.2;
                                mat.needsUpdate = true;
                            }
                        });
                    } else {
                        // Drone rengi - beyaz
                        child.material.color.setHex(0xffffff);
                        child.material.emissive.setHex(0x222222);
                        child.material.metalness = 0.1;
                        child.material.roughness = 0.2;
                        child.material.needsUpdate = true;
                    }
                }
            });

            // Drone pozisyonunu ayarla
            droneObject.position.set(0, 0, 0);
            droneObject.rotation.set(0, 0, 0);
            droneObject.scale.setScalar(size);

            // Gruba ekle
            droneRef.current.add(droneObject);
        } else {
            // GLB modeli yüklenemezse basit bir drone oluştur
            const geometry = new CylinderGeometry(2, 2, 8, 8);
            const material = new MeshStandardMaterial({
                color: 0xffffff,
                emissive: 0x222222,
                metalness: 0.1,
                roughness: 0.2
            });
            const droneObject = new Mesh(geometry, material);
            droneObject.rotation.x = Math.PI / 2; // Yatay pozisyon
            droneObject.scale.setScalar(size);
            droneRef.current.add(droneObject);
        }
    }, [scene, size]);

    // Sonsuz uçuş animasyonu
    const startInfiniteFlight = useCallback(() => {
        if (!droneRef.current) return;

        const startPos = generateRandomStartPosition();
        const endPos = generateRandomEndPosition(startPos);
        const flightSpeed = speed + Math.random() * 10; // Rastgele hız varyasyonu

        // Drone'u görünür yap
        droneRef.current.visible = true;
        isVisibleRef.current = true;

        // Drone'u başlangıç pozisyonuna yerleştir
        droneRef.current.position.copy(startPos);

        // Uçuş animasyonu
        animationRef.current = gsap.timeline({
            onComplete: () => {
                // Animasyon bittiğinde drone'u gizle ve yeni uçuş başlat
                if (droneRef.current) {
                    droneRef.current.visible = false;
                    isVisibleRef.current = false;
                }

                // Kısa bir bekleme sonrası yeni uçuş başlat
                setTimeout(() => {
                    startInfiniteFlight();
                }, 5000 + Math.random() * 8000); // 5-13 saniye arası rastgele bekleme
            }
        });

        animationRef.current.to(droneRef.current, {
            duration: flightSpeed,
            ease: "none",
            onUpdate: () => {
                if (droneRef.current && animationRef.current) {
                    // Progress hesapla
                    const progress = animationRef.current.progress();
                    const currentPosition = new Vector3().lerpVectors(startPos, endPos, progress);

                    // Dinamik yükseklik sistemi - ekranın yukarısına çıktıkça yükseklik azalsın, aşağıya indikçe artsın
                    const screenHeight = 2500; // Ekran yüksekliği (harita sınırları)
                    const normalizedY = (currentPosition.z + screenHeight) / (2 * screenHeight); // 0-1 arası normalize edilmiş Y pozisyonu

                    // Yükseklik hesaplama: üstte çok, altta az (tersine çevrilmiş)
                    const baseHeight = 300; // Temel yükseklik (drone'lar için yüksek)
                    const heightVariation = 200; // Yükseklik değişim miktarı
                    const dynamicHeight = baseHeight - (normalizedY * heightVariation); // Tersine çevrilmiş formül

                    // Y pozisyonunu dinamik yükseklikle güncelle
                    currentPosition.y = dynamicHeight;

                    droneRef.current.position.copy(currentPosition);

                    // Uçuş yönüne göre rotasyon
                    const direction = new Vector3()
                        .subVectors(endPos, startPos)
                        .normalize();

                    const angle = Math.atan2(direction.x, direction.z);
                    droneRef.current.rotation.y = angle;

                    // Drone için daha gerçekçi salınım (daha az)
                    const time = Date.now() * 0.001;
                    const wobble = Math.sin(time * 0.3) * 0.015; // Daha az salınım
                    droneRef.current.position.y += wobble;

                    // Hafif yan yana hareket (rüzgar etkisi)
                    const sideWobble = Math.sin(time * 0.2) * 0.01;
                    droneRef.current.position.x += sideWobble;
                }
            }
        });
    }, [speed]);

    useEffect(() => {
        createDrone();

        // İlk uçuşu başlat
        setTimeout(() => {
            startInfiniteFlight();
        }, delay);

        return () => {
            if (animationRef.current) {
                animationRef.current.kill();
            }
        };
    }, [delay, createDrone, startInfiniteFlight]);

    // Sürekli animasyon için useFrame
    useFrame((state) => {
        if (!droneRef.current || !isVisibleRef.current) return;

        const time = state.clock.elapsedTime;

        // Drone'un pervanelerini döndür (eğer varsa)
        droneRef.current.children.forEach((child: any) => {
            const childName = child.name.toLowerCase();

            // Pervane animasyonu - çok hızlı dönen pervaneler
            if (childName.includes('propeller') || childName.includes('pervane') ||
                childName.includes('rotor') || childName.includes('motor')) {
                child.rotation.z += 1.2; // Çok hızlı dönen pervaneler
                // Pervane dönüşü sırasında hafif titreşim
                child.position.y += Math.sin(time * 50) * 0.001;
            }

            // Kanat animasyonu (hafif salınım)
            if (childName.includes('wing') || childName.includes('kanat')) {
                child.rotation.z = Math.sin(time * 0.3) * 0.02;
            }

            // Gövde için hafif salınım
            if (childName.includes('body') || childName.includes('gövde') ||
                childName.includes('fuselage')) {
                child.rotation.z = Math.sin(time * 0.2) * 0.01;
                child.rotation.x = Math.sin(time * 0.15) * 0.005;
            }

            // Kuyruk için hafif hareket
            if (childName.includes('tail') || childName.includes('kuyruk')) {
                child.rotation.y = Math.sin(time * 0.4) * 0.01;
            }
        });

        // Drone'un genel pozisyonu için hafif salınım
        const generalWobble = Math.sin(time * 0.4) * 0.015;
        droneRef.current.position.y += generalWobble;

        // Hafif ileri-geri hareket
        const forwardBackward = Math.sin(time * 0.3) * 0.01;
        droneRef.current.position.z += forwardBackward;
    });

    return (
        <group ref={droneRef}>
            {/* Drone için özel ışık */}
            <pointLight
                position={[0, 0, 0]}
                intensity={0.6}
                color={0xffffff}
                distance={100}
            />
            {/* Ek ışık - drone'u daha belirgin göster */}
            <spotLight
                position={[0, 10, 0]}
                intensity={0.4}
                color={0xffffff}
                angle={Math.PI / 4}
                penumbra={0.2}
                distance={80}
            />
            {/* Drone izi efekti */}
            <mesh position={[0, -5, -10]}>
                <cylinderGeometry args={[0.1, 0.1, 20, 8]} />
                <meshBasicMaterial
                    color={0xffffff}
                    transparent={true}
                    opacity={0.3}
                />
            </mesh>
        </group>
    );
};

// Ana drone sürüsü bileşeni
interface DronesProps {
    enableDrones: boolean;
    droneSpeed: number;
    droneSize: number;
    droneCount: number;
}

const Drones: React.FC<DronesProps> = ({
    enableDrones,
    droneSpeed,
    droneSize,
    droneCount
}) => {
    if (!enableDrones) return null;

    return (
        <>
            {/* Belirtilen sayıda drone oluştur */}
            {Array.from({ length: droneCount }, (_, index) => (
                <Drone
                    key={index}
                    droneId={index}
                    startPosition={new Vector3(0, 0, 0)} // Bu değerler artık kullanılmıyor
                    endPosition={new Vector3(0, 0, 0)}   // Bu değerler artık kullanılmıyor
                    speed={droneSpeed}
                    delay={index * 15} // Her drone 15 saniye arayla başlasın
                    size={droneSize}
                />
            ))}
        </>
    );
};

export default Drones;
