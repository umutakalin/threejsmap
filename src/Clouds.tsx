import React, { useRef, useEffect } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { PlaneGeometry, MeshBasicMaterial, Mesh, TextureLoader, RepeatWrapping, Vector2 } from 'three';

interface Cloud {
    mesh: Mesh;
    shadowMesh: Mesh; // Gölge mesh'i
    opacity: number;
    position: Vector2;
    direction: { x: number; z: number }; // Hareket yönü
    speed: number; // Hareket hızı
}

const Clouds: React.FC = () => {
    const cloudsRef = useRef<Cloud[]>([]);
    const cloudsTexture = useLoader(TextureLoader, '/3dmap/gl/clouds.png');

    useEffect(() => {
        if (cloudsTexture) {
            cloudsTexture.wrapS = RepeatWrapping;
            cloudsTexture.wrapT = RepeatWrapping;
            cloudsTexture.repeat.set(2, 1);
            cloudsTexture.needsUpdate = true;
        }
    }, [cloudsTexture]);

    useEffect(() => {
        if (!cloudsTexture || cloudsRef.current.length > 0) return;

        const clouds: Cloud[] = [];
        const mapSize = 2500;
        const minDistance = 1500; // 📏 Minimum bulutlar arası mesafe
        const maxTries = 50;

        // Tüm bulutlar X ekseninde (soldan sağa) hareket etsin
        const movementDirection = { x: 1, z: 0 }; // Doğuya doğru (soldan sağa)

        for (let i = 0; i < 3; i++) {
            const baseSize = 400 + Math.random() * 400;
            const cloudSize = baseSize * 3;

            const geometry = new PlaneGeometry(cloudSize, cloudSize * 0.4);
            const material = new MeshBasicMaterial({
                map: cloudsTexture,
                transparent: true,
                opacity: 0.7 + Math.random() * 0.2,
                alphaTest: 0.3,
                side: 2,
                depthWrite: false
            });

            const mesh = new Mesh(geometry, material);

            // Gölge mesh'i oluştur - bulut şeklinde
            const shadowGeometry = new PlaneGeometry(cloudSize * 0.9, cloudSize * 0.4);
            const shadowMaterial = new MeshBasicMaterial({
                map: cloudsTexture, // Aynı bulut texture'ını kullan
                color: 0x000000, // Siyah renk
                transparent: true,
                opacity: 0.3, // Daha sabit opacity
                alphaTest: 0.1, // Daha düşük alpha test
                side: 2,
                depthWrite: true, // Gölge derinlik yazımını aktif et
                depthTest: true // Derinlik testini aktif et
            });

            const shadowMesh = new Mesh(shadowGeometry, shadowMaterial);

            // Tüm bulutlar aynı yönde (soldan sağa) hareket etsin
            const direction = movementDirection;

            // Her bulut için farklı başlangıç pozisyonu
            const startX = -2000 + (i * 800); // Her bulut 800 birim arayla başlasın
            const startZ = (Math.random() - 0.5) * mapSize; // Rastgele Z pozisyonu

            const position = new Vector2(startX, startZ);

            // Dinamik yükseklik sistemi - ekranın yukarısına çıktıkça yükseklik azalsın, aşağıya indikçe artsın
            const screenHeight = 2500; // Ekran yüksekliği (harita sınırları)
            const normalizedY = (position.y + screenHeight) / (2 * screenHeight); // 0-1 arası normalize edilmiş Y pozisyonu

            // Yükseklik hesaplama: üstte çok, altta az (tersine çevrilmiş)
            const baseHeight = 500; // Temel yükseklik (bulutlar için yüksek)
            const heightVariation = 350; // Yükseklik değişim miktarı
            const dynamicHeight = baseHeight - (normalizedY * heightVariation); // Tersine çevrilmiş formül

            mesh.position.set(position.x, dynamicHeight, position.y);
            mesh.rotation.x = -Math.PI / 2;

            // Gölge pozisyonunu ayarla (harita üzerinde) - daha yüksek Y pozisyonu
            shadowMesh.position.set(position.x, 5, position.y);
            shadowMesh.rotation.x = -Math.PI / 2;

            // Gölge için sabit scale (değişken scale kaldırıldı)
            shadowMesh.scale.set(1.0, 1.0, 1.0);

            clouds.push({
                mesh,
                shadowMesh,
                opacity: material.opacity,
                position,
                direction: direction, // Hareket yönünü sakla
                speed: 20 + (i * 15) + Math.random() * 10 // Her bulut farklı hızda (20-65 arası)
            });
        }

        cloudsRef.current = clouds;
    }, [cloudsTexture]);

    // Bulut animasyonu - X ekseninde hareket (soldan sağa)
    useFrame((state, delta) => {
        cloudsRef.current.forEach((cloud, index) => {
            // Sadece X ekseninde hareket (soldan sağa)
            const moveX = delta * cloud.speed;

            cloud.mesh.position.x += moveX;
            cloud.shadowMesh.position.x += moveX;

            // Dinamik yükseklik güncelleme - hareket sırasında sürekli yükseklik ayarı
            const screenHeight = 2500; // Ekran yüksekliği (harita sınırları)
            const normalizedY = (cloud.mesh.position.z + screenHeight) / (2 * screenHeight); // 0-1 arası normalize edilmiş Y pozisyonu

            // Yükseklik hesaplama: üstte çok, altta az (tersine çevrilmiş)
            const baseHeight = 500; // Temel yükseklik (bulutlar için yüksek)
            const heightVariation = 350; // Yükseklik değişim miktarı
            const dynamicHeight = baseHeight - (normalizedY * heightVariation); // Tersine çevrilmiş formül

            // Y pozisyonunu dinamik yükseklikle güncelle
            cloud.mesh.position.y = dynamicHeight;

            // Bulut haritanın dışına çıktığında sol tarafa geri döndür
            const edgeLimit = 2500;

            if (cloud.mesh.position.x > edgeLimit) {
                cloud.mesh.position.x = -edgeLimit;
                cloud.shadowMesh.position.x = -edgeLimit;

                // Yeniden konumlandırıldığında dinamik yüksekliği güncelle
                const resetNormalizedY = (cloud.mesh.position.z + screenHeight) / (2 * screenHeight);
                const resetDynamicHeight = baseHeight - (resetNormalizedY * heightVariation); // Tersine çevrilmiş formül
                cloud.mesh.position.y = resetDynamicHeight;
            }

            // Gölge opacity'sini sabit tut (animasyon kaldırıldı)
            (cloud.shadowMesh.material as MeshBasicMaterial).opacity = 0.3;
        });
    });

    return (
        <group>
            {cloudsRef.current.map((cloud, index) => (
                <group key={index}>
                    <primitive object={cloud.mesh} />
                    <primitive object={cloud.shadowMesh} />
                </group>
            ))}
        </group>
    );
};

export default Clouds;
