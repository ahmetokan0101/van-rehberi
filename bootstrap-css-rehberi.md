2# Van Şehir Rehberi - Bootstrap CSS Sınıfları Rehberi

Bu dokümanda projede kullanılan tüm Bootstrap 5 CSS sınıfları ve ne işe yaradıkları açıklanmıştır.

---

## 📐 LAYOUT (Düzen) Sınıfları

### Container Sınıfları
- **`container`** - İçeriği ortalar ve responsive genişlik verir (max-width: 1140px)
- **`container-fluid`** - Tam genişlik container (ekranın %100'ü)

### Grid System (Izgara Sistemi)
- **`row`** - Yatay satır oluşturur, içinde kolonlar barındırır
- **`col-md-4`** - Orta ekranlarda 12'lik sistemde 4 birim genişlik (3 kolon yan yana)
- **`col-md-5`** - Orta ekranlarda 5 birim genişlik
- **`col-md-7`** - Orta ekranlarda 7 birim genişlik
- **`col-md-8`** - Orta ekranlarda 8 birim genişlik
- **`col-md-12`** - Orta ekranlarda tam genişlik (12 birim)
- **`col-lg-6`** - Büyük ekranlarda 6 birim genişlik (2 kolon yan yana)
- **`col-lg-8`** - Büyük ekranlarda 8 birim genişlik
- **`col-lg-10`** - Büyük ekranlarda 10 birim genişlik

### Responsive Order (Sıralama)
- **`order-md-1`** - Orta ekranlarda bu elemanı 1. sıraya koy
- **`order-md-2`** - Orta ekranlarda bu elemanı 2. sıraya koy
  - *Kullanım:* Mobilde resim alta, masaüstünde sağa almak için

---

## 🎨 RENK Sınıfları

### Metin Renkleri
- **`text-primary`** - Mavi metin rengi (#0d6efd)
- **`text-secondary`** - Gri metin rengi (#6c757d)
- **`text-white`** - Beyaz metin rengi
- **`text-success`** - Yeşil metin rengi (başarı mesajları için)
- **`text-dark`** - Koyu metin rengi

### Arkaplan Renkleri
- **`bg-primary`** - Mavi arkaplan (#0d6efd)
- **`bg-light`** - Açık gri arkaplan (#f8f9fa)
- **`bg-white`** - Beyaz arkaplan

---

## 📏 SPACING (Boşluk) Sınıfları

### Margin (Dış Boşluk)
- **`m-0`** - Tüm yönlerde margin yok
- **`mb-0`** - Alt margin yok (margin-bottom: 0)
- **`mb-1`** - Alt margin 0.25rem
- **`mb-3`** - Alt margin 1rem
- **`mb-4`** - Alt margin 1.5rem
- **`mb-5`** - Alt margin 3rem
- **`mt-3`** - Üst margin 1rem
- **`mt-4`** - Üst margin 1.5rem
- **`mt-5`** - Üst margin 3rem
- **`mt-md-0`** - Orta ekranlarda üst margin yok
- **`mt-lg-0`** - Büyük ekranlarda üst margin yok
- **`mx-2`** - Sağ-sol margin 0.5rem
- **`ms-auto`** - Sol margin otomatik (sağa yaslar)
- **`ms-1`** - Sol margin 0.25rem
- **`my-4`** - Üst-alt margin 1.5rem
- **`my-5`** - Üst-alt margin 3rem

### Padding (İç Boşluk)
- **`p-0`** - Tüm yönlerde padding yok
- **`p-4`** - Tüm yönlerde padding 1.5rem
- **`p-5`** - Tüm yönlerde padding 3rem
- **`py-5`** - Üst-alt padding 3rem
- **`px-3`** - Sağ-sol padding 1rem
- **`px-4`** - Sağ-sol padding 1.5rem
- **`px-5`** - Sağ-sol padding 3rem

---

## 🔤 TİPOGRAFİ (Yazı) Sınıfları

### Font Weight (Yazı Kalınlığı)
- **`fw-bold`** - Kalın yazı (font-weight: 700)

### Font Size (Yazı Boyutu)
- **`display-4`** - Çok büyük başlık (56px) - *Projede kaldırıldı*
- **`display-5`** - Büyük başlık (48px)
- **`lead`** - Öne çıkan paragraf (1.25rem) - *index.html'de kullanılıyor*
- **`small`** - Küçük yazı (0.875em)

### Text Alignment (Hizalama)
- **`text-center`** - Metni ortala
- **`text-start`** - Metni sola hizala
- **`text-end`** - Metni sağa hizala
- **`text-md-start`** - Orta ekranlarda sola hizala
- **`text-lg-start`** - Büyük ekranlarda sola hizala

### Text Decoration
- **`text-decoration-none`** - Alt çizgi kaldır (linkler için)

---

## 🎴 CARD (Kart) Sınıfları

### Temel Card Yapısı
- **`card`** - Kart container'ı
- **`card-body`** - Kart içeriği
- **`card-img-top`** - Kartın üstündeki resim
- **`card-hover`** - Hover efekti için özel sınıf

### Card Stilleri
- **`h-100`** - Kartın yüksekliği %100 (eşit yükseklik için) - *Projede kaldırıldı*

---

## 🔘 BUTTON (Buton) Sınıfları

### Temel Buton
- **`btn`** - Temel buton sınıfı
- **`btn-primary`** - Mavi buton
- **`btn-outline-primary`** - Çerçeveli mavi buton (içi boş)
- **`btn-outline-secondary`** - Çerçeveli gri buton

### Buton Boyutları
- **`btn-sm`** - Küçük buton
- **`btn-lg`** - Büyük buton

---

## 🏷️ BADGE (Rozet) Sınıfları

- **`badge`** - Rozet/etiket
- **`bg-primary`** - Mavi arkaplan

---

## 🖼️ IMAGE (Resim) Sınıfları

- **`img-fluid`** - Responsive resim (max-width: 100%, height: auto)

---

## 🧭 NAVBAR (Menü) Sınıfları

### Navbar Yapısı
- **`navbar`** - Ana navbar container
- **`navbar-expand-lg`** - Büyük ekranlarda genişlet
- **`navbar-dark`** - Koyu tema (beyaz yazılar)
- **`navbar-brand`** - Logo/marka alanı
- **`navbar-nav`** - Menü listesi

### Nav Items
- **`nav-item`** - Menü öğesi
- **`nav-link`** - Menü linki
- **`active`** - Aktif sayfa göstergesi

---

## 📦 BORDER (Çerçeve) Sınıfları

### Border Stilleri
- **`border`** - Tüm yönlerde çerçeve
- **`border-0`** - Çerçeve yok
- **`border-primary`** - Mavi çerçeve
- **`border-start`** - Sol tarafta çerçeve
- **`border-5`** - Kalın çerçeve (5px)

### Border Radius (Köşe Yuvarlama)
- **`rounded`** - Hafif yuvarlatılmış köşeler
- **`rounded-4`** - Orta yuvarlatılmış köşeler (0.5rem)
- **`rounded-pill`** - Tam yuvarlatılmış (hap şekli)

### Border Opacity
- **`border-opacity-25`** - Çerçeve %25 şeffaf

---

## 🌑 SHADOW (Gölge) Sınıfları

- **`shadow`** - Orta gölge efekti - *Projede kaldırıldı*
- **`shadow-sm`** - Hafif gölge efekti
- **`shadow-lg`** - Büyük/kalın gölge efekti (hero resim için)

---

## 📐 DISPLAY & POSITION Sınıfları

### Display
- **`d-none`** - Gizle
- **`d-md-block`** - Orta ekranlarda göster - *Projede kaldırıldı*
- **`d-flex`** - Flexbox düzeni
- **`d-grid`** - Grid düzeni (quiz seçenekleri için)
- **`d-inline-block`** - Inline-block gösterim

### Flexbox
- **`justify-content-center`** - Yatayda ortala
- **`align-items-center`** - Dikeyde ortala
- **`gap-4`** - Elemanlar arası boşluk 1.5rem

### Position
- **`position-fixed`** - Sabit konum (scroll'da kalır)
- **`position-relative`** - Göreceli konum

---

## 📋 LIST (Liste) Sınıfları

- **`list-inline`** - Yatay liste
- **`list-inline-item`** - Yatay liste öğesi

---

## 🎭 UTILITY (Yardımcı) Sınıfları

### Overflow
- **`overflow-hidden`** - Taşan içeriği gizle

### Opacity
- **`opacity-50`** - %50 şeffaflık
- **`opacity-75`** - %75 şeffaflık

---

## 🎯 ÖZEL KULLANIM ÖRNEKLERİ

### Responsive Resim Sağda
```html
<div class="row align-items-center">
  <div class="col-md-5 order-md-2">
    <img src="resim.jpg" class="img-fluid rounded-4 shadow-sm">
  </div>
  <div class="col-md-7 order-md-1">
    <h2>Başlık</h2>
    <p>İçerik</p>
  </div>
</div>
```
- Mobilde: Resim üstte, metin altta
- Masaüstünde: Resim sağda, metin solda

### Kart Yapısı
```html
<div class="col-md-4 mb-4">
  <div class="card border-0 shadow-sm rounded-4 overflow-hidden text-center">
    <img src="resim.jpg" class="card-img-top" style="height: 200px; object-fit: cover;">
    <div class="card-body p-4">
      <h5 class="fw-bold text-primary">Başlık</h5>
      <p class="text-secondary">Açıklama</p>
    </div>
  </div>
</div>
```

### Buton Stilleri
```html
<!-- Dolu buton -->
<button class="btn btn-primary">Gönder</button>

<!-- Çerçeveli buton -->
<a href="#" class="btn btn-outline-primary btn-lg px-5">Geri Dön</a>

<!-- Yuvarlak buton -->
<button class="btn btn-primary rounded-pill">Filtrele</button>
```

---

## 📱 RESPONSIVE BREAKPOINTS

Bootstrap'in ekran boyutu kırılma noktaları:

- **xs** - Extra small (< 576px) - Mobil telefonlar
- **sm** - Small (≥ 576px) - Büyük telefonlar
- **md** - Medium (≥ 768px) - Tabletler
- **lg** - Large (≥ 992px) - Küçük laptoplar
- **xl** - Extra large (≥ 1200px) - Masaüstü
- **xxl** - Extra extra large (≥ 1400px) - Büyük ekranlar

### Kullanım Örneği:
- `col-md-4` → Orta ekrandan itibaren 4 kolon genişliğinde
- `d-none d-md-block` → Mobilde gizli, orta ekrandan itibaren görünür
- `mt-4 mt-md-0` → Mobilde üstte margin var, orta ekrandan itibaren yok

---

## 🎨 PROJEDE KULLANILAN INLINE STYLE'LAR

Bazı özel durumlar için inline CSS kullanıldı:

### Preloader
```css
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: #0d6efd;
z-index: 10000;
display: flex;
justify-content: center;
align-items: center;
```

### Yukarı Çık Butonu
```css
display: none;
position: fixed;
bottom: 20px;
right: 20px;
z-index: 99;
border-radius: 50px;
width: 50px;
height: 50px;
font-size: 20px;
font-weight: bold;
```

### Resim Yüksekliği
```css
height: 200px;
object-fit: cover;
```
- Tüm kartlardaki resimlerin aynı yükseklikte olması için

---

## ✅ PROJEDE KALDIRILAN SINIFLAR

Basitleştirme için kaldırılan sınıflar:

- ❌ `display-4` → Çok büyük başlık
- ❌ `lead` → Öne çıkan paragraf
- ❌ `shadow` → Kalın gölge (yerine `shadow-sm`)
- ❌ `h-100` → Kart yüksekliği %100
- ❌ `text-center` (kartlarda) → Ortalama
- ❌ `d-none d-md-block` → Responsive gizleme
- ❌ `text-md-start` → Responsive hizalama
- ❌ `p-md-5` → Responsive padding (yerine `p-4`)
- ❌ `<b>` tagları → Kalın yazı tagları

---

## 📚 ÖĞRENME KAYNAKLARI

- Bootstrap Resmi Dokümantasyon: https://getbootstrap.com/docs/5.3/
- Bootstrap Grid Sistemi: https://getbootstrap.com/docs/5.3/layout/grid/
- Bootstrap Utilities: https://getbootstrap.com/docs/5.3/utilities/spacing/

---

**Not:** Bu proje Bootstrap 5.3.0 kullanmaktadır. Tüm sınıflar Bootstrap'in resmi dokümantasyonuna uygundur.


---

## 📝 FORM (Form) Sınıfları

### Form Kontrolleri
- **`form-control`** - Temel form input stili (text, email, textarea)
- **`form-label`** - Form etiket stili
- **`form-select`** - Dropdown/select kutusu stili
- **`form-select-sm`** - Küçük dropdown

### Form Kullanım Örneği
```html
<div class="mb-3">
  <label for="adSoyad" class="form-label text-secondary">Ad Soyad</label>
  <input type="text" id="adSoyad" class="form-control py-2 rounded-3" placeholder="Adınızı giriniz...">
</div>

<div class="mb-3">
  <label class="form-label">Soru Sayısı</label>
  <select class="form-select form-select-sm">
    <option value="1">1 Soru</option>
    <option value="3">3 Soru</option>
  </select>
</div>
```

---

## 📐 WIDTH & HEIGHT (Genişlik & Yükseklik) Sınıfları

### Width (Genişlik)
- **`w-100`** - Genişlik %100 (parent'ın tamamı)
- **`w-50`** - Genişlik %50
- **`w-75`** - Genişlik %75

### Height (Yükseklik)
- **`h-100`** - Yükseklik %100 - *Projede kartlardan kaldırıldı*

---

## 🎨 GAP (Boşluk) Sınıfları

Grid ve Flexbox için elemanlar arası boşluk:

- **`g-4`** - Grid gap 1.5rem (row ve col arası boşluk)
- **`g-5`** - Grid gap 3rem (daha geniş boşluk)
- **`gap-2`** - Flexbox gap 0.5rem
- **`gap-4`** - Flexbox gap 1.5rem (sadece flex elemanları arası)

### Kullanım Örneği
```html
<!-- Grid için -->
<div class="row g-4">
  <div class="col-md-4">Kart 1</div>
  <div class="col-md-4">Kart 2</div>
  <div class="col-md-4">Kart 3</div>
</div>

<!-- Flexbox için -->
<div class="d-flex gap-4">
  <span>😍</span>
  <span>😊</span>
  <span>😔</span>
</div>
```

---

## 🎭 ÖZEL PROJE SINIFLARI

Projede kullanılan özel (custom) CSS sınıfları:

### Galeri Sınıfları
- **`galeri-resmi`** - Galeri resimleri için özel sınıf
- **`galeri-img`** - Galeri resim hover efekti için

### JavaScript Sınıfları
- **`emoji-oy`** - Emoji geri bildirim sistemi için
- **`card-hover`** - Kart hover efekti için

### Kullanım Örneği
```html
<!-- Galeri Resmi -->
<img src="resim.jpg" class="w-100 rounded-4 galeri-img shadow-sm galeri-resmi" alt="Van Kalesi">

<!-- Emoji Geri Bildirim -->
<span class="emoji-oy" data-mesaj="Harika! 😍">😍</span>
```

---

## 🔄 ROUNDED (Yuvarlatma) Detayları

Bootstrap'te köşe yuvarlatma seviyeleri:

- **`rounded`** - 0.25rem (4px)
- **`rounded-1`** - 0.2rem
- **`rounded-2`** - 0.25rem
- **`rounded-3`** - 0.3rem (form inputlar için)
- **`rounded-4`** - 0.5rem (kartlar için) ⭐ En çok kullanılan
- **`rounded-5`** - 1rem
- **`rounded-pill`** - 50rem (tam yuvarlak)
- **`rounded-circle`** - 50% (daire)

---

## 📊 ALIGN & JUSTIFY (Hizalama) Sınıfları

### Align Items (Dikey Hizalama)
- **`align-items-start`** - Üste hizala
- **`align-items-center`** - Ortaya hizala
- **`align-items-end`** - Alta hizala

### Justify Content (Yatay Hizalama)
- **`justify-content-start`** - Sola hizala
- **`justify-content-center`** - Ortaya hizala
- **`justify-content-end`** - Sağa hizala
- **`justify-content-between`** - Aralarında boşluk bırak

### Kullanım Örneği
```html
<div class="row align-items-center mb-5">
  <div class="col-md-7">Metin</div>
  <div class="col-md-5">Resim</div>
</div>

<div class="d-flex justify-content-center gap-4">
  <span>😍</span>
  <span>😊</span>
  <span>😔</span>
</div>
```

---

## 🎯 RESPONSIVE MARGIN & PADDING

Ekran boyutuna göre değişen boşluklar:

### Responsive Margin
- **`mt-4 mt-md-0`** - Mobilde üstte 1.5rem margin, orta ekrandan itibaren yok
- **`mb-4 mb-md-0`** - Mobilde altta 1.5rem margin, orta ekrandan itibaren yok

### Responsive Padding
- **`py-2`** - Üst-alt padding 0.5rem
- **`py-5`** - Üst-alt padding 3rem

---

## 🔍 PROJEDE KULLANILAN TÜM SINIFLAR LİSTESİ

### Layout & Grid
`container`, `container-fluid`, `row`, `col-md-4`, `col-md-5`, `col-md-7`, `col-md-8`, `col-md-12`, `col-lg-6`, `col-lg-8`, `col-lg-10`, `order-md-1`, `order-md-2`

### Renkler
`text-primary`, `text-secondary`, `text-white`, `text-success`, `text-dark`, `bg-primary`, `bg-light`, `bg-white`

### Spacing
`m-0`, `mb-0`, `mb-1`, `mb-3`, `mb-4`, `mb-5`, `mt-3`, `mt-4`, `mt-5`, `mt-md-0`, `mt-lg-0`, `mx-2`, `ms-auto`, `ms-1`, `my-4`, `my-5`, `p-0`, `p-4`, `p-5`, `py-2`, `py-5`, `px-3`, `px-4`, `px-5`

### Typography
`fw-bold`, `display-5`, `lead`, `small`, `text-center`, `text-start`, `text-end`, `text-md-start`, `text-lg-start`, `text-decoration-none`

### Components
`card`, `card-body`, `card-img-top`, `btn`, `btn-primary`, `btn-outline-primary`, `btn-outline-secondary`, `btn-sm`, `btn-lg`, `badge`, `navbar`, `navbar-expand-lg`, `navbar-dark`, `navbar-brand`, `navbar-nav`, `nav-item`, `nav-link`, `active`

### Borders & Shadows
`border`, `border-0`, `border-primary`, `border-start`, `border-5`, `border-opacity-25`, `rounded`, `rounded-3`, `rounded-4`, `rounded-pill`, `shadow-sm`, `shadow-lg`

### Display & Position
`d-none`, `d-flex`, `d-grid`, `d-inline-block`, `position-fixed`, `position-relative`, `overflow-hidden`

### Flexbox
`justify-content-center`, `align-items-center`, `gap-2`, `gap-4`, `g-4`, `g-5`

### Width & Height
`w-100`, `h-100`

### Forms
`form-control`, `form-label`, `form-select`, `form-select-sm`

### Utility
`opacity-50`, `opacity-75`, `img-fluid`, `list-inline`, `list-inline-item`

### Özel Sınıflar
`galeri-resmi`, `galeri-img`, `emoji-oy`, `card-hover`

---

## 💡 İPUÇLARI

### 1. Responsive Tasarım
```html
<!-- Mobilde tam genişlik, tablette 2 kolon, masaüstünde 3 kolon -->
<div class="col-12 col-md-6 col-lg-4">
  <div class="card">...</div>
</div>
```

### 2. Boşluk Sistemi
Bootstrap'te boşluk değerleri:
- 0 = 0
- 1 = 0.25rem (4px)
- 2 = 0.5rem (8px)
- 3 = 1rem (16px)
- 4 = 1.5rem (24px)
- 5 = 3rem (48px)

### 3. Renk Sistemi
- `primary` = Mavi (#0d6efd)
- `secondary` = Gri (#6c757d)
- `success` = Yeşil (#198754)
- `danger` = Kırmızı (#dc3545)
- `warning` = Sarı (#ffc107)
- `info` = Açık Mavi (#0dcaf0)
- `light` = Açık Gri (#f8f9fa)
- `dark` = Koyu (#212529)

### 4. Breakpoint'ler
- `sm` = 576px
- `md` = 768px ⭐ En çok kullanılan
- `lg` = 992px
- `xl` = 1200px
- `xxl` = 1400px

---

## 🎓 ÖĞRENME YOLU

1. **Başlangıç:** `container`, `row`, `col-md-*` ile grid sistemini öğren
2. **Renkler:** `text-*`, `bg-*` sınıflarını dene
3. **Boşluklar:** `m-*`, `p-*` ile margin/padding'i anla
4. **Componentler:** `card`, `btn`, `navbar` gibi hazır bileşenleri kullan
5. **Responsive:** `*-md-*` gibi responsive sınıfları öğren
6. **İleri Seviye:** Flexbox (`d-flex`, `justify-content-*`) ve Grid (`g-*`) sistemlerini öğren

---

**Son Güncelleme:** Tüm HTML dosyaları tarandı ve kullanılan tüm sınıflar eklendi.
