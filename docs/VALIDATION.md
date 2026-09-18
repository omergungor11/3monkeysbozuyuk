# Doğrulama — 18 Eylül 2026

- `npm run typecheck`: başarılı.
- `npm run build`: başarılı.
- Üretim Worker önizlemesi: `/`, `/menu`, `/hakkimizda`, `/iletisim` HTTP 200; bilinmeyen rota HTTP 404.
- Hero: 390 × 844 mobil ölçümünde yükseklik 844 px; 1440 × 900 masaüstü ölçümünde yükseklik 900 px.
- Mobilde ayrı dikey görselin seçildiği ve duman canvas’ının oluşturulduğu DOM üzerinden doğrulandı.
- Mobil menü: açılışta ilk bağlantıya odak, Tab ile sonraki bağlantı, Escape ile kapatma ve düğmeye geri odak doğrulandı.
- Burger sahnesinin ayrı/birleşmiş durumu görsel olarak incelendi; sprite kesim hatası düzeltildi.
- Ürün görselleri, kaynak bağlantıları, telefon ve harita hedefleri kontrol edildi.
- `prefers-reduced-motion`, ekran dışı ve gizli sekme duraklatma akışları kod incelemesinden geçti. Fiziksel cihaz performans testi yapılmadı.
- İlk geliştirme sırasında bulunan geçersiz Instagram ikon importu giderildi; son TypeScript ve build kontrolleri temiz.
