import React, { useRef, useEffect } from 'react';
import { useLoader, useFrame, useThree } from '@react-three/fiber';
import { PlaneGeometry, MeshBasicMaterial, Mesh, TextureLoader, RepeatWrapping, Vector2, LinearFilter, LinearMipmapLinearFilter, MultiplyBlending } from 'three';

interface Cloud {
    mesh: Mesh;
    shadowMesh: Mesh; // Gölge mesh'i
    opacity: number;
    position: Vector2;
    direction: { x: number; z: number }; // Hareket yönü
    speed: number; // Hareket hızı
    baseHeight?: number; // Bulutun temel yüksekliği
    heightVariation?: number; // Bulutun yükseklik varyasyonu
    zDriftAmplitude?: number; // Z ekseninde dalgalanma genliği
    zDriftSpeed?: number; // Z ekseninde dalgalanma hızı
    zDriftPhase?: number; // Faz
    laneZ?: number; // Bu bulutun şeridi
}

const Clouds: React.FC = () => {
    const cloudsRef = useRef<Cloud[]>([]);
    const cloudsTexture = useLoader(TextureLoader, '/3dmap/gl/clouds.png');
    const { gl } = useThree();
    const HEIGHT_SCALE = 0.5; // Bulut yüksekliği ölçeği (50% düşür)

    useEffect(() => {
        if (cloudsTexture) {
            cloudsTexture.wrapS = RepeatWrapping;
            cloudsTexture.wrapT = RepeatWrapping;
            cloudsTexture.repeat.set(2, 1);
            // Flicker azaltmak için filtreleme ve anizotropi
            cloudsTexture.minFilter = LinearMipmapLinearFilter;
            cloudsTexture.magFilter = LinearFilter;
            // MultiplyBlending ile doğru sonuç için alpha'yı ön çarp
            cloudsTexture.premultiplyAlpha = true;
            cloudsTexture.anisotropy = Math.min(8, gl.capabilities.getMaxAnisotropy?.() || 8);
            cloudsTexture.needsUpdate = true;
        }
    }, [cloudsTexture, gl]);

    useEffect(() => {
        if (!cloudsTexture || cloudsRef.current.length > 0) return;

        const clouds: Cloud[] = [];
        const mapSize = 2500;
        const minZGap = 900; // Bulutlar arası minimum Z boşluğu
        const maxTries = 60;

        // X ekseninde hareket
        const movementDirection = { x: 1, z: 0 };

        // Şeritleri belirle: her şeritte tek bulut
        const lanesZ = [-1000, 0, 1000];
        const cloudCount = lanesZ.length; // Her şeride 1 bulut

        for (let i = 0; i < cloudCount; i++) {
            // Boyut çeşitliliği
            const baseSize = (300 + Math.random() * 2500) * 2; // 2 kat büyük
            const aspect = 0.35 + Math.random() * 0.25;
            const cloudSizeX = baseSize;
            const cloudSizeY = baseSize * aspect;

            const geometry = new PlaneGeometry(cloudSizeX, cloudSizeY);
            const material = new MeshBasicMaterial({
                map: cloudsTexture,
                transparent: true,
                opacity: 0.45 + Math.random() * 0.2,
                alphaTest: 0.0,
                side: 2,
                depthWrite: false
            });

            const mesh = new Mesh(geometry, material);

            // Gölge mesh'i
            const shadowGeometry = new PlaneGeometry(cloudSizeX * 0.9, cloudSizeY);
            const shadowMaterial = new MeshBasicMaterial({
                map: cloudsTexture,
                color: 0x000000,
                transparent: true,
                opacity: 0.25 + Math.random() * 0.1,
                alphaTest: 0.0,
                side: 2,
                depthWrite: false,
                depthTest: true,
                blending: MultiplyBlending,
                toneMapped: false,
                premultipliedAlpha: true
            });

            const shadowMesh = new Mesh(shadowGeometry, shadowMaterial);

            const direction = movementDirection;

            // Başlangıç konumları – her şeritte tek bulut, X başlangıcı geniş aralıkta
            const startX = -2500 - Math.random() * 1200 - i * 200; // Farklı büyük offset'ler
            const laneZ = lanesZ[i];
            const position = new Vector2(startX, laneZ);

            // Bulut başına yükseklik parametreleri
            const cloudBase = 300 + Math.random() * 400;
            const cloudVar = 180 + Math.random() * 320;
            const screenHeight = 2500;
            const normalizedY = (position.y + screenHeight) / (2 * screenHeight);
            const dynamicHeight = (cloudBase + (normalizedY * cloudVar)) * HEIGHT_SCALE;

            // Z-drift kapalı tut (şeritler sabit kalsın)
            const zDriftAmplitude = 0;
            const zDriftSpeed = 0;
            const zDriftPhase = 0;

            mesh.position.set(position.x, dynamicHeight, position.y);
            mesh.rotation.x = -Math.PI / 2;
            mesh.renderOrder = 2;

            shadowMesh.position.set(position.x, 5, position.y);
            shadowMesh.rotation.x = -Math.PI / 2;
            shadowMesh.renderOrder = 1;

            clouds.push({
                mesh,
                shadowMesh,
                opacity: material.opacity,
                position,
                direction,
                speed: 20 + Math.random() * 50,
                baseHeight: cloudBase,
                heightVariation: cloudVar,
                zDriftAmplitude,
                zDriftSpeed,
                zDriftPhase,
                laneZ,
            });
        }

        cloudsRef.current = clouds;
    }, [cloudsTexture]);

    // Bulut animasyonu - X ekseninde hareket (soldan sağa)
    useFrame((state, delta) => {
        const time = state.clock.elapsedTime;
        cloudsRef.current.forEach((cloud, index) => {
            // Sadece X ekseninde hareket (soldan sağa)
            const moveX = delta * cloud.speed;

            cloud.mesh.position.x += moveX;
            cloud.shadowMesh.position.x += moveX;

            // Z-drift ve dinamik yükseklik güncelleme
            const screenHeight = 2500; // Ekran yüksekliği (harita sınırları)
            const currentZ = cloud.laneZ ?? cloud.position.y; // Şerit Z'si sabit
            const normalizedY = (currentZ + screenHeight) / (2 * screenHeight);
            const dynamicHeight = ((cloud.baseHeight || 500) + (normalizedY * (cloud.heightVariation || 350))) * HEIGHT_SCALE;

            // Y pozisyonunu dinamik yükseklikle güncelle
            cloud.mesh.position.y = dynamicHeight;
            cloud.mesh.position.z = currentZ;
            cloud.shadowMesh.position.z = currentZ;

            // Bulut haritanın dışına çıktığında sol tarafa geri döndür
            const edgeLimit = 2500;

            if (cloud.mesh.position.x > edgeLimit) {
                // Şerit bazlı reset – aynı şeritte tek bulut kalır
                const newX = -edgeLimit - 800 - Math.random() * 1200; // Büyük aralık
                const newZ = cloud.laneZ ?? cloud.position.y;
                cloud.mesh.position.x = newX;
                cloud.shadowMesh.position.x = newX;
                cloud.position.y = newZ;

                // Şerit sabit; drift kapalı
                cloud.baseHeight = 300 + Math.random() * 400;
                cloud.heightVariation = 180 + Math.random() * 320;
                cloud.speed = 20 + Math.random() * 50;

                const resetNormalizedY = (newZ + screenHeight) / (2 * screenHeight);
                const resetDynamicHeight = (cloud.baseHeight + (resetNormalizedY * cloud.heightVariation)) * HEIGHT_SCALE;
                cloud.mesh.position.y = resetDynamicHeight;
                cloud.mesh.position.z = newZ;
                cloud.shadowMesh.position.z = newZ;
            }

            // Opacity sabit (her frame set etmeye gerek yok)
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
