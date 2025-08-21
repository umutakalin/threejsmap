import React, { Suspense, useEffect, useRef, useCallback } from 'react';
import { useKTX2 } from '@react-three/drei';
import { Vector3, Box3, MeshStandardMaterial, PlaneGeometry } from 'three';

const MODEL_PATH = '/3dmap/map.glb';
const TEXTURE_PATH = '/3dmap/output.ktx2';

// GLB dosyasını test etmek için alternatif yol
// const MODEL_PATH = '/gl/models/map.glb'; // BLaCuJu6.js'de bu yol kullanılıyor

interface ModelProps {
    onModelLoaded?: (size: Vector3, center: Vector3) => void;
    enableKTX2Texture?: boolean;
    textureRepeatX?: number;
    textureRepeatY?: number;
    textureOffsetX?: number;
    textureOffsetY?: number;
}

const Model: React.FC<ModelProps> = ({
    onModelLoaded,
    enableKTX2Texture = true,
    textureRepeatX = 1,
    textureRepeatY = 1,
    textureOffsetX = 0,
    textureOffsetY = 0
}) => {
    // Texture yükleme hatalarını yakala
    const texture = useKTX2(TEXTURE_PATH);

    const modelRef = useRef<any>(null);

    // Debug loglar kaldırıldı

    useEffect(() => {
        // Debug loglar kaldırıldı

        // Diktörtgen boyutları: 8800 x 4000
        const width = 8800;
        const height = 4000;
        const size = new Vector3(width, 1, height); // Yükseklik 1 (düz diktörtgen)
        const center = new Vector3(0, 0, 0);

        // Debug loglar kaldırıldı

        if (onModelLoaded) {
            onModelLoaded(size, center);
        }

        // Debug loglar kaldırıldı
    }, [onModelLoaded]);

    // Texture ayarlarını optimize et
    useEffect(() => {
        if (texture && enableKTX2Texture) {
            texture.wrapS = texture.wrapT = 1001; // ClampToEdgeWrapping
            texture.repeat.set(-textureRepeatX, textureRepeatY); // X ekseninde ayna efekti
            texture.offset.set(textureOffsetX, textureOffsetY);
            texture.center.set(0.5, 0.5);
            texture.rotation = Math.PI; // 180 derece döndür
            texture.needsUpdate = true;
        }
    }, [texture, enableKTX2Texture, textureRepeatX, textureRepeatY, textureOffsetX, textureOffsetY]);

    // Debug loglar kaldırıldı

    return (
        <>
            {/* 8800x4000 boyutunda diktörtgen */}
            <mesh
                ref={modelRef}
                position={[0, 0, 0]} // Merkeze yerleştir
                rotation={[-Math.PI / 2, 0, 0]} // Yatay düzlem için -90 derece X ekseni
            >
                <planeGeometry args={[8800, 4000]} />
                <meshStandardMaterial
                    map={enableKTX2Texture ? texture : null}
                    color={enableKTX2Texture ? 0xffffff : 0x888888}
                    transparent={false}
                    side={2} // DoubleSide - her iki taraftan da görünür
                />
            </mesh>
        </>
    );
};

export default Model; 