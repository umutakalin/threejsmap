# Dinamik Yükseklik Sistemi

Bu dokümantasyon, kuşlar, drone'lar ve bulutlar için uygulanan dinamik yükseklik sistemini açıklar.

## Genel Açıklama

Haritayı yataydan görüntülediğinizde, ekranın yukarısına çıktıkça kuşlar, drone'lar ve bulutların yüksekliği azalır, aşağıya indikçe artar. Bu sistem, sabit yükseklikten uçmak yerine, ekran pozisyonuna göre dinamik olarak yükseklik değiştirir.

## Teknik Detaylar

### Yükseklik Hesaplama Formülü

```typescript
const screenHeight = 2500; // Ekran yüksekliği (harita sınırları)
const normalizedY = (currentPosition.z + screenHeight) / (2 * screenHeight); // 0-1 arası normalize edilmiş Y pozisyonu

// Yükseklik hesaplama: üstte çok, altta az (tersine çevrilmiş)
const baseHeight = [base_height]; // Temel yükseklik
const heightVariation = [variation_amount]; // Yükseklik değişim miktarı
const dynamicHeight = baseHeight - (normalizedY * heightVariation); // Tersine çevrilmiş formül
```

### Bileşen Bazında Ayarlar

#### 1. Drone'lar (Drone.tsx)
- **Temel Yükseklik**: 300 birim
- **Yükseklik Değişim**: 200 birim
- **Toplam Yükseklik Aralığı**: 100-300 birim (üstte yüksek, altta alçak)

#### 2. Kuşlar (BirdFlock.tsx)
- **Temel Yükseklik**: 60 birim
- **Yükseklik Değişim**: 50 birim
- **Toplam Yükseklik Aralığı**: 10-60 birim (üstte yüksek, altta alçak)

#### 3. Bulutlar (Clouds.tsx)
- **Temel Yükseklik**: 500 birim
- **Yükseklik Değişim**: 350 birim
- **Toplam Yükseklik Aralığı**: 150-500 birim (üstte yüksek, altta alçak)

## Nasıl Çalışır

1. **Normalizasyon**: Z pozisyonu (ekran yüksekliği) -2500 ile +2500 arasında normalize edilir (0-1 arası)
2. **Yükseklik Hesaplama**: Normalize edilmiş pozisyon, yükseklik değişim miktarı ile çarpılarak dinamik yükseklik hesaplanır
3. **Sürekli Güncelleme**: Her frame'de pozisyon değiştiğinde yükseklik otomatik olarak güncellenir

## Avantajlar

- **Gerçekçi Görünüm**: Kuşlar, drone'lar ve bulutlar artık sabit yükseklikte uçmaz
- **Derinlik Algısı**: Ekranın üst ve alt kısımlarında farklı yükseklikler sayesinde daha iyi derinlik algısı
- **Dinamik Hareket**: Hareket sırasında sürekli yükseklik değişimi ile daha canlı animasyon

## Uygulanan Dosyalar

- `src/Drone.tsx` - Drone dinamik yükseklik sistemi
- `src/BirdFlock.tsx` - Kuş sürüleri dinamik yükseklik sistemi  
- `src/Clouds.tsx` - Bulutlar dinamik yükseklik sistemi

## Test

Sistemi test etmek için:
1. Haritayı yataydan görüntüleyin
2. Kuşlar, drone'lar ve bulutların ekranın üstünde daha alçak, altında daha yüksek uçtuğunu gözlemleyin
3. Hareket sırasında yükseklik değişiminin sürekli olduğunu kontrol edin
