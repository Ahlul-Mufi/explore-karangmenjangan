# DESIGN PROMPT — KARANGMENJANGAN HERITAGE & NATURE

## 1. PROJECT OVERVIEW

Buat sebuah website katalog dan branding wisata untuk:

**Karangmenjangan Heritage & Nature**

Lokasi: Dusun Karangmenjangan, Desa Bulurejo, Kecamatan Tempursari, Kabupaten Lumajang, Jawa Timur.

Website berfungsi sebagai media digital untuk memperkenalkan dan mempromosikan potensi wisata, alam, budaya, UMKM, kuliner, dan aktivitas masyarakat lokal di Dusun Karangmenjangan.

Website bersifat:
- Static website.
- Data statis.
- Tidak menggunakan backend.
- Tidak menggunakan database.
- Tidak membutuhkan sistem login.
- Tidak membutuhkan CMS.
- Fokus pada storytelling, branding, visual, dan katalog informasi wisata.

## 2. TECH STACK

Gunakan stack berikut:

- React
- Vite
- TypeScript
- Tailwind CSS
- React Router DOM
- Lucide React
- Framer Motion
- Swiper
- JSON/TypeScript sebagai sumber data statis
- GitHub sebagai repository
- Cloudflare Pages atau Vercel untuk deployment

Jangan menggunakan backend, database, authentication, atau CMS.

## 3. COLOR PALETTE

### Primary
`#184332`

Deep Forest Green. Gunakan sebagai warna identitas utama untuk navbar, button, heading, footer, CTA, dan elemen navigasi.

### Secondary
`#BC6C25`

Burnt Orange. Gunakan sebagai accent, badge, highlight, dan secondary button.

### Tertiary
`#0077B6`

Ocean Blue. Gunakan secara selektif untuk elemen yang berkaitan dengan laut, sungai, air, dan wisata alam air.

### Neutral
`#FEFAE0`

Warm Cream. Gunakan sebagai background utama dan dasar visual.

### Text
`#26332E`

Gunakan untuk body text dan informasi.

## 4. TYPOGRAPHY

Gunakan kombinasi font serif dan sans-serif.

Heading:
- Sans-serif (system-ui atau Inter).

Body:
- Sans-serif (system-ui atau Inter).

Gunakan typography editorial dengan hierarki yang jelas.

## 5. DESIGN LANGUAGE

Gunakan gaya **Modern Heritage + Nature Editorial**.

Perpaduan antara travel magazine, tourism catalog, local heritage archive, dan nature exploration platform.

Gunakan:
- Large photography
- Asymmetric layout
- Editorial typography
- Rounded card
- Soft shadow
- Organic shape
- Generous whitespace
- Grid layout
- Subtle animation

Hindari gradient berlebihan, neon color, glassmorphism berlebihan, tampilan dashboard, dan desain corporate yang kaku.

## 6. RESPONSIVE DESIGN

Gunakan pendekatan Mobile First.

Target:
- 360px
- 375px
- 390px
- 430px
- 768px
- 1024px
- 1280px
- 1440px
- 1920px

Semua layout harus disesuaikan secara khusus untuk mobile, bukan sekadar mengecilkan layout desktop.

## 7. NAVBAR

Desktop:

Navbar transparan pada Hero dan berubah menjadi sticky setelah scroll.

Menu:
- Home
- Explore
- About
- Culture
- UMKM
- Gallery
- Contact

CTA:
- Explore Now

Mobile:

Gunakan logo, hamburger menu, dan navigation yang mudah digunakan dengan jari.

## 8. HOME PAGE

Urutan section:

1. Navbar
2. Hero
3. Introduction
4. Featured Destinations
5. Explore Nature
6. Heritage & Culture
7. Local Experience
8. UMKM / Local Products
9. Gallery
10. Location / Map
11. CTA
12. Footer

## 9. HERO

Gunakan full viewport image dengan foto alam lokal, susur sungai, pantai, atau lanskap Karangmenjangan.

Contoh copy:

> "Explore the Hidden Beauty of Karangmenjangan"

Subtitle:

> "Discover nature, heritage, and local life."

Gunakan overlay gelap jika diperlukan. Gunakan animasi fade-in dan slide-up yang halus.

## 10. FEATURED DESTINATIONS

Tampilkan destinasi dalam bentuk card.

Contoh:
- Susur Sungai
- Wisata Pesisir
- Pantai Watu Godeg
- Muara
- Hidden Gem

Setiap card memiliki:
- Image
- Category
- Title
- Short description
- Location
- CTA

Responsive:
- Desktop: 3 kolom.
- Tablet: 2 kolom.
- Mobile: 1 kolom atau horizontal slider.

## 11. TOURISM DETAIL

Route:

```text
/explore
/explore/:slug
```

Isi:
- Hero image
- Nama wisata
- Kategori
- Deskripsi
- Galeri
- Lokasi
- Google Maps
- Fasilitas
- Informasi tambahan
- CTA

## 12. HERITAGE & CULTURE

Tampilkan:
- Sejarah lokal
- Tradisi Larung Sesaji
- Budaya masyarakat pesisir
- Kehidupan nelayan
- Aktivitas masyarakat

Gunakan gaya editorial dengan large typography, image + text, dan timeline jika relevan.

## 13. UMKM

Tampilkan katalog produk lokal seperti:
- Produk olahan ikan
- Kuliner lokal
- Produk pisang
- Produk kelapa

Jangan membuat data kontak atau informasi fiktif.

## 14. GALLERY

Gunakan grid masonry.

Responsive:
- Desktop: 3–4 kolom.
- Tablet: 2–3 kolom.
- Mobile: 2 kolom.

Gunakan lazy loading dan lightbox.

## 15. LOCATION

Tampilkan:
- Google Maps
- Alamat: Dusun Karangmenjangan
- Desa: Bulurejo
- Kecamatan: Tempursari
- Kabupaten: Lumajang
- Provinsi: Jawa Timur
- Kode Pos: 67375

Responsive:
- Desktop: Map + informasi.
- Mobile: Map di atas dan informasi di bawah.

## 16. CTA

Gunakan background Deep Forest Green `#184332` dengan teks putih.

Contoh:

> "Ready to Explore Karangmenjangan?"

> "Discover the nature, stories, and local life waiting for you."

## 17. FOOTER

Gunakan background `#184332`.

Isi:
- Logo
- Deskripsi
- Navigation
- Social media
- Contact
- Copyright

## 18. COMPONENT ARCHITECTURE

Struktur yang disarankan:

```text
src/
├── assets/
│   ├── images/
│   └── icons/
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Button.tsx
│   ├── DestinationCard.tsx
│   ├── Gallery.tsx
│   └── SectionHeading.tsx
├── layouts/
│   └── MainLayout.tsx
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Explore.tsx
│   ├── DestinationDetail.tsx
│   ├── Culture.tsx
│   ├── Umkm.tsx
│   ├── GalleryPage.tsx
│   └── Contact.tsx
├── data/
│   ├── destinations.ts
│   ├── culture.ts
│   ├── umkm.ts
│   └── gallery.ts
├── types/
│   ├── destination.ts
│   ├── umkm.ts
│   └── gallery.ts
├── routes/
│   └── AppRoutes.tsx
├── hooks/
├── utils/
├── App.tsx
└── main.tsx
```

## 19. ACCESSIBILITY

Gunakan:
- Semantic HTML
- Alt text
- Button yang jelas
- Kontras warna
- Keyboard navigation
- Focus state
- ARIA label jika diperlukan

## 20. PERFORMANCE

Optimalkan:
- Gambar WebP jika memungkinkan
- Lazy loading
- Responsive image
- Hindari dependency yang tidak diperlukan

## 21. ANIMATION

Gunakan Framer Motion untuk:
- Hero entrance
- Section reveal
- Card hover
- Page transition

Gunakan animasi yang smooth dan subtle.

## 22. DEVELOPMENT WORKFLOW

### Phase 1 — Project Setup

1. React + Vite + TypeScript
2. Tailwind CSS
3. React Router
4. Lucide React
5. Framer Motion
6. Swiper
7. ESLint
8. Folder architecture
9. Git

### Phase 2 — Design System

Buat:
- Color variables
- Typography
- Button
- Container
- Section spacing
- Card
- Badge

### Phase 3 — Layout

Buat:
- Navbar
- Footer
- MainLayout

### Phase 4 — Home

Implementasikan:
- Hero
- Introduction
- Featured Destination
- Culture
- UMKM
- Gallery
- Location
- CTA

### Phase 5 — Pages

Implementasikan:
- About
- Explore
- Destination Detail
- Culture
- UMKM
- Gallery
- Contact

### Phase 6 — Responsive

Test:
- 360px
- 375px
- 390px
- 430px
- 768px
- 1024px
- 1280px
- 1440px
- 1920px

### Phase 7 — Optimization

Lakukan:
- Image optimization
- Accessibility
- SEO
- Performance

### Phase 8 — Deployment

Jalankan:

```bash
npm run build
npm run preview
```

Deploy ke Cloudflare Pages atau Vercel.

## 23. IMPORTANT DESIGN RULES

1. Jangan menggunakan warna di luar palette utama tanpa alasan jelas.
2. Gunakan Deep Forest Green sebagai identitas utama.
3. Gunakan Warm Cream sebagai background utama.
4. Gunakan Burnt Orange dan Ocean Blue sebagai accent.
5. Jangan membuat website terlihat seperti dashboard.
6. Prioritaskan foto lokal berkualitas tinggi.
7. Jangan menggunakan stock image jika foto lokal tersedia.
8. Jangan membuat informasi wisata yang belum terverifikasi.
9. Jangan mengarang harga tiket, fasilitas, jam operasional, atau kontak.
10. Gunakan placeholder jika data belum tersedia.
11. Pastikan seluruh website responsif.
12. Pastikan navigasi mobile mudah digunakan.
13. Gunakan reusable component.
14. Gunakan TypeScript dengan interface atau type yang jelas.
15. Pisahkan data dari UI.
16. Gunakan semantic HTML.
17. Optimalkan performa gambar.
18. Pastikan website tetap terlihat profesional meskipun data masih statis.
19. Jangan membuat desain terlalu kompleks sehingga sulit dipelihara.
20. Prioritaskan maintainability karena website akan menjadi luaran program BBK dan berpotensi dilanjutkan oleh masyarakat atau kelompok berikutnya.

## 24. FINAL DESIGN DIRECTION

Website harus terasa seperti:

> "Digital Travel Guide untuk menemukan sisi tersembunyi Karangmenjangan."

Website bukan sekadar katalog wisata.

Pengunjung harus mendapatkan pengalaman:

**Discover → Explore → Learn → Experience → Visit**

Prioritaskan:
- Storytelling
- Fotografi
- Identitas lokal

Website harus terasa:

> "Hangat, alami, autentik, dan modern."

---

## 25. DATA KONTEN DARI PROFIL DESA BULUREJO

Berikut adalah data riil dari Profil Desa Bulurejo yang harus digunakan sebagai dasar konten website:

### 25.1 Profil Dusun Karangmenjangan

Dusun Karangmenjangan adalah salah satu dari 3 dusun di Desa Bulurejo, Kecamatan Tempursari, Kabupaten Lumajang, Jawa Timur. Wilayah ini berada di pesisir selatan yang berbatasan langsung dengan Samudera Indonesia.

**Data Administratif:**
- Kepala Dusun: Nurkholis
- Jumlah RT: 8 RT (RW 5: 4 RT, RW 6: 4 RT)
- Jumlah Penduduk: 1.984 jiwa (994 laki-laki, 990 perempuan)
- Jumlah Kepala Keluarga: 625 KK
- Jumlah Rumah Tangga Miskin: 142 KK

### 25.2 Sejarah Singkat

Desa Bulurejo (induk dari Dusun Karangmenjangan) awalnya bernama **Desa Mbuveng** (artinya "pusing" dalam bahasa Jawa — karena banyak pendatang mengalami pusing-pusing tiba-tiba). Kawasan ini dulunya adalah rawa-rawa dan perkebunan karet.

Pada tahun **1952**, nama desa diubah menjadi **Bulurejo**, diambil dari banyaknya sumber mata air bening di wilayah ini.

Sejak tahun 2013 hingga sekarang, Desa Bulurejo dipimpin oleh Kepala Desa **Rohman Adi**.

**Mata Pencaharian Masyarakat:**
- Sektor pertanian: 1.071 orang (45,10%)
- Nelayan: 645 orang (35,30%)
- Jasa/perdagangan: 125 orang (1,90%)
- Sektor lain: 724 orang (18,00%)

Penduduk usia produktif (20-49 tahun): sekitar 2.166 jiwa (45,19%).
Tingkat pendapatan rata-rata: Rp 30.000,- per hari.

### 25.3 Destinasi Wisata (Hasil Survei & Data Desa)

Berdasarkan data Profil Desa Bulurejo, sarana rekreasi yang tercatat meliputi:

| No | Destinasi | Keterangan |
|----|-----------|------------|
| 1 | **Pantai Watu Godeg (Pantai Godek / Watu Gedek)** | Destinasi wisata pantai utama di Karangmenjangan |
| 2 | **Tempat Pelelangan Ikan (TPI)** | Pusat aktivitas nelayan, potensi wisata edukasi |
| 3 | **Wisata Buah Naga** | Agrowisata buah naga |
| 4 | **Susur Sungai** | Wisata susur sungai di kawasan pesisir |
| 5 | **Muara** | Muara sungai yang bermuara ke Samudera Indonesia |

**Catatan:** Data wisata lain seperti Pantai Watu Godeg, susur sungai, muara, dan potensi lain hasil survei lapangan harus dimasukkan jika telah terverifikasi.

### 25.4 Budaya Lokal

**Tradisi Larung Sesaji:** Tradisi masyarakat pesisir di Dusun Karangmenjangan yang dilakukan sebagai wujud syukur kepada Tuhan atas hasil laut. Ritual ini melibatkan sesaji yang dilarung ke laut.

**Kehidupan Nelayan:** Aktivitas sehari-hari nelayan di pesisir Karangmenjangan, termasuk aktivitas di Tempat Pelelangan Ikan (TPI).

**Kondisi Sosial:** Masyarakat di dusun Karangmenjangan (kawasan pesisir) memerlukan perhatian khusus dalam hal kesehatan dan kesejahteraan. Sebagian besar masyarakat masih MCK di sungai dan kebiasaan merokok di dalam rumah masih tinggi.

### 25.5 Agama & Kepercayaan

| Agama | Jumlah |
|-------|--------|
| Islam | 4.048 orang |
| Kristen | 55 orang |
| Hindu | 80 orang |
| Katolik | - |
| Budha | - |

Mayoritas penduduk (96,77%) memeluk agama Islam, dengan sarana ibadah berupa 6 Masjid, 15 Musholla, dan 1 Pure (Pura).

### 25.6 Sarana & Fasilitas

**Sarana Pendidikan:**
- PAUD: 2 unit
- SD/MI: 3 unit
- MTs/SLTP: 1 unit
- Pesantren: 1 unit

**Sarana Kesehatan:**
- Poskesdes: 1 unit
- Posyandu: 6 unit
- Praktek Bidan: 1 unit

**Sarana Umum:**
- Pasar: 1 unit
- Tempat Pelelangan Ikan (TPI): 1 unit
- Pos Siskamling: 16 unit
- Lapangan Bola: 2 unit

### 25.7 Informasi Geografis & Demografis

**Batas Wilayah Desa Bulurejo:**
- Sebelah Utara: Desa Purorejo dan Tempurejo / Desa Wates
- Sebelah Selatan: Desa Tegalrejo dan Samudera Indonesia
- Sebelah Timur: Hutan Lindung
- Sebelah Barat: Desa Purorejo / Desa Cepoko

**Luas Wilayah:** 456,654 Ha (Lahan pertanian 199,33 Ha, perkebunan 57,50 Ha, pemukiman 141,00 Ha)

**Topografi:** Ketinggian dengan suhu udara rata-rata 27-32°C, curah hujan rata-rata 2.045 mm/th.

**Kondisi Tanah:** Lahan tanah hitam yang sangat subur (222 Ha), subur (196,1 Ha), sedang (170 Ha), tidak subur/kritis (138 Ha).

**Jarak:** 56 Km arah selatan dari pusat Pemerintahan Kabupaten Lumajang (tempuh ~1,5 jam), 5,5 Km arah selatan dari Pusat Pemerintahan Kecamatan Tempursari (tempuh ~0,15 jam).

### 25.8 Data Pendukung Lain

- **Kode Pos:** 67375
- **Alamat Kantor Desa:** Jl. Cendrawasih No. 29
- **Email Desa:** desabulurejo056@gmail.com
- **Jumlah Penduduk Desa Bulurejo:** 4.183 jiwa (2.089 L, 2.094 P)
- **Jumlah KK:** 1.320 KK
- **Keluarga Miskin:** 565 KK
- **Tingkat Pendidikan:** Mayoritas tamat SD (27%) dan tidak tamat SD (17,8%)
