import React, { useRef, useEffect, useCallback } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Vector3, Group, CylinderGeometry, MeshBasicMaterial, Mesh } from 'three';
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

    // Rastgele başlangıç pozisyonu oluştur (X ekseninde soldan sağa)
    const generateRandomStartPosition = () => {
        const mapBounds = 2500; // Harita sınırları
        // Dinamik yükseklik sistemi kullanılacak, burada sadece temel yükseklik
        const height = 100;

        // Sol taraftan (X ekseninde) başla
        const x = -mapBounds - Math.random() * 500; // Sol taraftan başla
        const z = (Math.random() - 0.5) * mapBounds; // Z ekseninde rastgele pozisyon

        return new Vector3(x, height, z);
    };

    // Rastgele bitiş pozisyonu oluştur (X ekseninde soldan sağa)
    const generateRandomEndPosition = (startPos: Vector3) => {
        const mapBounds = 2500;
        // Dinamik yükseklik sistemi kullanılacak, burada sadece temel yükseklik
        const height = 100;

        // Sağ tarafa (X ekseninde) git
        const x = mapBounds + Math.random() * 500; // Sağ tarafa git
        const z = startPos.z; // Aynı Z pozisyonunda kal (sadece X yönünde hareket)

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
            // GLB modeli yoksa basit bir drone oluştur
            const geometry = new CylinderGeometry(2, 2, 8, 8);
            const material = new MeshBasicMaterial({
                color: 0xffffff,
                transparent: true,
                opacity: 0.8
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

                    // Dinamik yükseklik sistemi - güneyden kuzeye giderken yükselsin
                    const screenHeight = 2500; // Ekran yüksekliği (harita sınırları)
                    const normalizedY = (currentPosition.z + screenHeight) / (2 * screenHeight); // 0-1 arası normalize edilmiş Y pozisyonu

                    // Yükseklik hesaplama: güneyde alçak, kuzeyde yüksek (normal formül)
                    const baseHeight = 300; // Temel yükseklik (drone'lar için yüksek)
                    const heightVariation = 200; // Yükseklik değişim miktarı
                    const dynamicHeight = baseHeight + (normalizedY * heightVariation); // Normal formül (güneyde alçak, kuzeyde yüksek)

                    // Y pozisyonunu dinamik yükseklikle güncelle
                    currentPosition.y = dynamicHeight;

                    droneRef.current.position.copy(currentPosition);

                    // Uçuş yönüne göre rotasyon - X ekseninde uçuş ama kuzey yönüne 45° açı
                    const direction = new Vector3()
                        .subVectors(endPos, startPos)
                        .normalize();

                    // X ekseninde uçuş için Y rotasyonu (soldan sağa)
                    const angle = Math.atan2(direction.x, direction.z);
                    droneRef.current.rotation.y = angle;

                    // Drone modelini kuzey yönüne doğru 45 derece eğ (haritayı yataydan görünce yatay uçuyormuş gibi)
                    droneRef.current.rotation.z = -Math.PI / 5; // 45 derece = π/4 radyan (kuzey yönüne)

                    // Drone için daha gerçekçi salınım (X ekseninde hareket)
                    const time = Date.now() * 0.001;
                    const wobble = Math.sin(time * 0.3) * 0.015; // Daha az salınım
                    droneRef.current.position.y += wobble;

                    // Sadece X yönünde hafif hareket (rüzgar etkisi) - Z yönünde hareket yok
                    const sideWobble = Math.sin(time * 0.2) * 0.01;
                    droneRef.current.position.x += sideWobble; // X yönünde hafif hareket
                    // droneRef.current.position.z += sideWobble; // Z yönünde hareket kaldırıldı
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

        // Sadece X yönünde hafif ileri-geri hareket (Z yönünde hareket yok)
        const forwardBackward = Math.sin(time * 0.3) * 0.01;
        droneRef.current.position.x += forwardBackward;
        // droneRef.current.position.z += forwardBackward; // Z yönünde hareket kaldırıldı
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
