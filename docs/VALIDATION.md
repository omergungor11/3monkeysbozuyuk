# Doğrulama

## 19 Eylül 2026 — Başlıklar ve giriş animasyonları

- TypeScript kontrolü ve üretim derlemesi başarılı.
- Tamamen kırpılan gözlem hedefleri başlıkların görünürlük tetikleyicisini engelliyordu; başlık maskesi kaldırılarak fade/yükselme geçişi kullanıldı.
- Ana sayfa, menü, hikâyemiz ve iletişim sayfalarında başlıklar, metinler ve bağlantılar kaydırmayla görünür oluyor. İstemci tarafındaki sayfa geçişleri doğrulandı.
- Altı ana sayfa menü kartı masaüstünde sıra gecikmesiyle, mobilde ekrana girdikçe açılıyor; görseller ve kart metinleri ayrı geçişler kullanıyor.
- 393 × 852 mobil görünümde hero tam ekran; yatay taşma yok. Hero başlığının iki satırında başlangıç, ara ve bitiş durumları ölçüldü; animasyon sonunda opaklık 1.
- Azaltılmış hareket tercihinde hero animasyonları ve Lenis kapanıyor; tüm bölüm içerikleri görünür kalıyor. Tarayıcıda çalışma hatası yok.
- Mobil kontrol tarayıcı görünüm emülasyonudur; fiziksel cihaz testi yapılmadı.

## 19 Eylül 2026 — Lenis ve menü görselleri

- TypeScript ve üretim derlemesi başarılı; tarayıcıda çalışma hatası veya hata katmanı yok.
- Lenis 1.3.26: tek 650 px tekerlek girdisinde ara kaydırma konumları 0 → 187 → 225 → 649 px olarak ölçüldü.
- Ana sayfadan menüye istemci navigasyonu ve menü içi `#yaninda` bağlantısı doğrulandı.
- Burger katmanları kaydırma ilerledikçe birleşiyor. Canlı azaltılmış hareket tercihinde Lenis kaldırılıyor ve birleşim tamamlanıyor.
- 1440 px masaüstü ve 393 px mobil görünümde yatay taşma yok; altı kartın altı ayrı, başarıyla yüklenen görseli var.
- Yeni kare görsellerde ürünün tamamı kadrajda. Beş WebP toplam yaklaşık 1.21 MB; tembel yükleme ve sabit en/boy oranı kullanılıyor.
- Mobil kontrol tarayıcı görünüm emülasyonudur; fiziksel cihaz dokunmatik testi yapılmadı.

## 18 Eylül 2026

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
