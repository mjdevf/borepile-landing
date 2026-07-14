#!/usr/bin/env python3
"""Generate 5 Jakarta sub-region location pages + update hub page + sitemap + schema + footer"""

import os

OUTPUT_DIR = "/tmp/borepile-location/public/location"
os.makedirs(OUTPUT_DIR, exist_ok=True)

CSS_LINK = '<link rel="stylesheet" href="/location/location.css">'
WA_URL = "https://wa.me/6281514811120?text=Halo%20Majujaya%2C%20saya%20butuh%20informasi%20jasa%20bore%20pile"

subregions = {
    "jakarta-pusat": {
        "name": "Jakarta Pusat",
        "slug_display": "Jakarta Pusat",
        "title": "Jasa Bore Pile Jakarta Pusat - Kontraktor Pondasi Gedung & Perkantoran",
        "description": "Jasa bore pile & strauss pile Jakarta Pusat sejak 2013. Melayani Menteng, Tanah Abang, Gambir, Senayan, Kemayoran. Survey gratis. WA 0815-1481-1120.",
        "keywords": "jasa bore pile jakarta pusat, kontraktor bore pile menteng, pondasi bore pile jakpus, strauss pile jakarta pusat, bore pile senayan",
        "intro": "Kami adalah kontraktor bore pile dan strauss pile terpercaya di Jakarta Pusat sejak 2013. Sebagai pusat bisnis dan pemerintahan, Jakarta Pusat didominasi gedung perkantoran, hotel, pusat perbelanjaan, dan apartemen bertingkat yang membutuhkan pondasi dalam berkualitas tinggi. Tim Majujaya telah menyelesaikan banyak proyek di kawasan Menteng, Tanah Abang, Gambir, Senayan, dan Kemayoran.",
        "soil": "Jakarta Pusat memiliki karakteristik tanah yang cukup bervariasi. Wilayah Gambir dan Menteng cenderung memiliki tanah yang lebih stabil karena berada di area cekungan Jakarta bagian atas. Sementara itu, kawasan Tanah Abang, Senayan, dan Kemayoran memiliki tanah lunak dengan kedalaman tanah keras mencapai 10-18 meter. Pengeboran di area padat bangunan seperti Jakarta Pusat juga memerlukan penanganan khusus untuk menghindari getaran berlebih yang bisa mempengaruhi bangunan sekitar.",
        "areas": ["Menteng", "Tanah Abang", "Gambir", "Senayan", "Cempaka Putih", "Senen", "Johar Baru", "Sawah Besar", "Kemayoran"],
        "faq_q": "Apakah proses bore pile di Jakarta Pusat yang padat bangunan berisiko merusak bangunan tetangga?",
        "faq_a": "Tim Majujaya menggunakan metode pengeboran yang minim getaran dan telah berpengalaman bekerja di area padat Jakarta Pusat. Kami melakukan survey lingkungan sekitar sebelum memulai dan memastikan area kerja aman. Untuk strauss pile manual, getaran hampir tidak ada sama sekali karena dikerjakan manual tanpa mesin berat.",
        "faq2_q": "Apakah ada pembatasan akses alat berat di beberapa kawasan Jakarta Pusat seperti Menteng?",
        "faq2_a": "Beberapa kawasan di Jakarta Pusat seperti Menteng dan Gambir memang memiliki peraturan lalu lintas yang membatasi kendaraan besar pada jam tertentu. Kami biasa mengatur mobilisasi alat di luar jam sibuk (pagi buta atau malam hari) dan sudah terbiasa mengurus izin akses yang diperlukan. Hal ini sudah termasuk dalam RAB yang kami berikan."
    },
    "jakarta-selatan": {
        "name": "Jakarta Selatan",
        "slug_display": "Jakarta Selatan",
        "title": "Jasa Bore Pile Jakarta Selatan - Kontraktor Pondasi Rumah & Ruko",
        "description": "Jasa bore pile & strauss pile Jakarta Selatan sejak 2013. Melayani Kebayoran Baru, Tebet, Pancoran, Pasar Minggu, Jagakarsa. Survey gratis. WA 0815-1481-1120.",
        "keywords": "jasa bore pile jakarta selatan, kontraktor bore pile jaksel, pondasi bore pile tebet, strauss pile kebayoran, bore pile jakarta selatan",
        "intro": "Kontraktor jasa bore pile dan strauss pile profesional di Jakarta Selatan sejak 2013. Jakarta Selatan memiliki karakteristik campuran — dari kawasan perumahan elite di Kebayoran Baru, kompleks perkantoran di Pancoran dan TB Simatupang, hingga perumahan padat di Tebet dan Pasar Minggu. Tim Majujaya berpengalaman menangani semua tipe proyek di Jaksel — dari rumah tinggal, ruko, hingga gedung bertingkat.",
        "soil": "Jakarta Selatan secara geologis berada di area yang relatif lebih stabil dibanding wilayah Jakarta lainnya. Kawasan Kebayoran Baru dan Pondok Indah memiliki tanah dengan daya dukung yang baik. Namun, area Tebet, Pancoran, dan Pasar Minggu yang dekat dengan aliran sungai memiliki variasi kondisi tanah. Kedalaman tanah keras di Jakarta Selatan umumnya berkisar 6-14 meter, tergantung lokasi spesifik.",
        "areas": ["Kebayoran Baru", "Kebayoran Lama", "Pancoran", "Tebet", "Pasar Minggu", "Jagakarsa", "Mampang Prapatan", "Setiabudi", "Pasar Rebo", "Cilandak"],
        "faq_q": "Apakah bore pile diperlukan untuk rumah di Kebayoran Baru yang tanahnya terkenal keras?",
        "faq_a": "Meskipun Kebayoran Baru dan sekitarnya memiliki tanah yang relatif lebih stabil, bore pile tetap direkomendasikan untuk bangunan 2 lantai ke atas atau bangunan di area yang berdekatan dengan sungai (Tebet, Pancoran). Pondasi yang baik adalah investasi jangka panjang — mencegah retak dan ambles yang biaya perbaikannya jauh lebih mahal daripada biaya pondasi awal.",
        "faq2_q": "Berapa estimasi biaya untuk bore pile rumah di area Jakarta Selatan?",
        "faq2_a": "Untuk rumah di Jakarta Selatan, estimasi Rp750.000-Rp1.800.000 per titik tergantung diameter (30-60cm) dan kedalaman. Rumah tipe 120-200m² biasanya membutuhkan 8-15 titik bore pile. Kami selalu berikan RAB detail gratis tanpa biaya tersembunyi setelah survey lokasi."
    },
    "jakarta-barat": {
        "name": "Jakarta Barat",
        "slug_display": "Jakarta Barat",
        "title": "Jasa Bore Pile Jakarta Barat - Kontraktor Pondasi Perumahan & Komersial",
        "description": "Jasa bore pile & strauss pile Jakarta Barat sejak 2013. Melayani Grogol, Kalideres, Cengkareng, Kembangan, Palmerah. Survey gratis. WA 0815-1481-1120.",
        "keywords": "jasa bore pile jakarta barat, kontraktor bore pile jakbar, pondasi bore pile grogol, strauss pile cengkareng, bore pile jakarta barat",
        "intro": "Jasa bore pile dan strauss pile di Jakarta Barat dari Majujaya sejak 2013. Jakarta Barat adalah wilayah dengan pertumbuhan properti yang pesat — dari kawasan perumahan di Cengkareng dan Kalideres, pusat niaga di Grogol, hingga area komersial di Kembangan dan Palmerah. Tim kami siap menangani proyek pondasi Anda di seluruh Jakarta Barat.",
        "soil": "Wilayah Jakarta Barat bagian utara (Kalideres, Cengkareng, dan sebagian Grogol) merupakan area bekas rawa dengan tanah lunak yang cukup dalam. Kedalaman tanah keras di sini bisa mencapai 12-20 meter. Sementara Palmerah dan Kembangan yang lebih ke selatan memiliki kondisi tanah yang lebih stabil. Untuk area bekas rawa, bore pile mesin dengan casing sangat disarankan untuk menjaga stabilitas lubang bor.",
        "areas": ["Grogol Petamburan", "Kalideres", "Cengkareng", "Kembangan", "Palmerah", "Taman Sari", "Tambora", "Keagungan", "Kebon Jeruk"],
        "faq_q": "Apakah bore pile tetap aman untuk tanah bekas rawa di Cengkareng dan Kalideres?",
        "faq_a": "Justru untuk tanah bekas rawa seperti di Cengkareng, Kalideres, dan Taman Sari, bore pile adalah solusi pondasi yang paling tepat. Tanah lunak harus ditembus hingga mencapai lapisan tanah keras di kedalaman tertentu. Kami menggunakan casing (pelindung lubang) saat mengebor di tanah labil agar lubang tidak runtuh. Majujaya sudah banyak menangani proyek di area ini.",
        "faq2_q": "Bagaimana akses alat bore pile ke perumahan padat di Jakarta Barat?",
        "faq2_a": "Kami biasa menghadapi akses sempit di perumahan Jakarta Barat. Untuk lokasi yang sulit dijangkau rig bor besar, kami punya opsi strauss pile manual yang bisa dikerjakan manual tanpa alat berat — hanya butuh akses 1 meter saja. Tim survey kami akan menilai akses lokasi dan merekomendasikan metode terbaik."
    },
    "jakarta-timur": {
        "name": "Jakarta Timur",
        "slug_display": "Jakarta Timur",
        "title": "Jasa Bore Pile Jakarta Timur - Kontraktor Pondasi Perumahan & Industri",
        "description": "Jasa bore pile & strauss pile Jakarta Timur sejak 2013. Melayani Matraman, Jatinegara, Cakung, Pulo Gadung, Duren Sawit. Survey gratis. WA 0815-1481-1120.",
        "keywords": "jasa bore pile jakarta timur, kontraktor bore pile jaktim, pondasi bore pile jatinegara, strauss pile cakung, bore pile jakarta timur",
        "intro": "Kontraktor bore pile dan strauss pile terpercaya di Jakarta Timur sejak 2013. Jakarta Timur merupakan wilayah terluas di DKI Jakarta dengan karakteristik beragam — dari perumahan di Cipayung dan Ciracas, kawasan industri di Pulo Gadung dan Cakung, hingga pusat bisnis di Matraman dan Jatinegara. Kami melayani semua jenis proyek pondasi di seluruh kecamatan Jakarta Timur.",
        "soil": "Jakarta Timur memiliki kondisi tanah yang lebih stabil dibanding Jakarta Utara dan Barat. Lapisan tanah keras umumnya ditemukan di kedalaman 5-12 meter. Kawasan Cakung dan Pulo Gadung yang merupakan kawasan industri memiliki tanah yang cukup baik untuk pondasi. Namun, area yang berdekatan dengan Kali Sunter dan Kali Ciliwung di Jatinegara dan Matraman memerlukan perhatian khusus karena potensi pasang surut air tanah.",
        "areas": ["Matraman", "Jatinegara", "Cakung", "Pulo Gadung", "Duren Sawit", "Kramat Jati", "Makasar", "Cipayung", "Ciracas"],
        "faq_q": "Apakah bore pile cocok untuk proyek industri di kawasan Pulo Gadung?",
        "faq_a": "Sangat cocok. Kawasan industri Pulo Gadung dan Cakung membutuhkan pondasi bore pile dengan kapasitas beban tinggi untuk menopang mesin produksi dan bangunan pabrik. Kami biasa menggunakan bore pile mesin dengan diameter 60-100cm untuk proyek industri. Tim kami sudah berpengalaman menangani spesifikasi teknis dari berbagai jenis industri di Jakarta Timur.",
        "faq2_q": "Berapa lama proses bore pile untuk rumah di Cipayung atau Ciracas?",
        "faq2_a": "Untuk rumah di Cipayung, Ciracas, atau Duren Sawit dengan 8-12 titik bore pile diameter 30-40cm, estimasi pengerjaan 2-5 hari. Kondisi tanah yang relatif stabil di Jakarta Timur membuat proses pengeboran lebih cepat. Survey gratis untuk menentukan jadwal pasti."
    },
    "jakarta-utara": {
        "name": "Jakarta Utara",
        "slug_display": "Jakarta Utara",
        "title": "Jasa Bore Pile Jakarta Utara - Kontraktor Pondasi Pantai & Bisnis",
        "description": "Jasa bore pile & strauss pile Jakarta Utara sejak 2013. Melayani Kelapa Gading, Tanjung Priok, Koja, Cilincing, Pademangan. Survey gratis. WA 0815-1481-1120.",
        "keywords": "jasa bore pile jakarta utara, kontraktor bore pile jakut, pondasi bore pile kelapa gading, strauss pile tanjung priok, bore pile jakarta utara",
        "intro": "Jasa bore pile dan strauss pile profesional di Jakarta Utara sejak 2013. Jakarta Utara adalah wilayah pesisir dengan karakteristik unik — dari kawasan bisnis dan perumahan di Kelapa Gading, pelabuhan dan industri di Tanjung Priok dan Cilincing, hingga area perumahan padat di Koja dan Pademangan. Tim Majujaya berpengalaman menangani proyek di area pesisir dengan kondisi tanah yang menantang.",
        "soil": "Jakarta Utara memiliki tantangan geologis terberat dibanding wilayah Jakarta lainnya. Hampir seluruh wilayah Jakarta Utara — dari Penjaringan, Pademangan, hingga Cilincing — berada di atas tanah reklamasi dan bekas rawa pesisir dengan tanah lunak sangat dalam. Kedalaman tanah keras bisa mencapai 20-40 meter. Metode bore pile mesin sangat direkomendasikan untuk mencapai tanah keras dengan stabil. Kami menggunakan teknik pelubangan dengan casing penuh untuk mencegah lubang bor runtuh di tanah labil.",
        "areas": ["Kelapa Gading", "Tanjung Priok", "Koja", "Cilincing", "Pademangan", "Penjaringan", "Pluit", "Sunter", "Ancol"],
        "faq_q": "Mengapa banyak bangunan di Jakarta Utara ambles dan bagaimana bore pile mencegahnya?",
        "faq_a": "Penurunan tanah (land subsidence) di Jakarta Utara adalah masalah serius — rata-rata 5-15 cm per tahun. Bangunan tanpa pondasi dalam yang mencapai tanah keras berisiko ambles, retak, atau bahkan miring. Bore pile yang mencapai tanah keras di kedalaman 20-40 meter memberikan fondasi yang stabil dan tidak ikut turun saat permukaan tanah ambles. Ini adalah investasi wajib untuk bangunan di Jakarta Utara.",
        "faq2_q": "Apakah air tanah yang asin di Jakarta Utara mempengaruhi kualitas beton bore pile?",
        "faq2_a": "Air tanah di Jakarta Utara memang cenderung payau karena intrusi air laut. Untuk itu, kami menggunakan campuran beton dengan aditif khusus yang tahan terhadap air asin (sulfate-resistant cement) untuk proyek di area pesisir seperti Pluit, Penjaringan, dan Ancol. Spesifikasi ini sudah termasuk dalam RAB yang kami sesuaikan dengan kondisi lokasi."
    }
}

def gen_page(slug, d):
    canonical = f"https://borepilemajujaya.com/location/{slug}.html"
    breadcrumb = f"""{{
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://borepilemajujaya.com"}},
        {{"@type": "ListItem", "position": 2, "name": "Layanan", "item": "https://borepilemajujaya.com/#layanan"}},
        {{"@type": "ListItem", "position": 3, "name": "Jakarta", "item": "https://borepilemajujaya.com/location/jakarta.html"}},
        {{"@type": "ListItem", "position": 4, "name": "{d['name']}", "item": "{canonical}"}}
      ]
    }}"""
    
    service_cards = "\n".join(
        f'            <div class="service-card"><h3>{s}</h3><p>Layanan {s.lower()} profesional untuk {d["name"]}.</p></div>'
        for s in ["Bore Pile Pondasi", "Strauss Pile Manual", "Bore Pile Mesin", "Sumur Bor Air", "Soil Investigation"]
    )
    area_tags = "\n".join(f'<span class="area-tag">{a}</span>' for a in d["areas"])
    
    schema_service = f"""{{
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Jasa Bore Pile & Strauss Pile di {d['name']}",
      "description": "{d['description']}",
      "provider": {{
        "@type": "LocalBusiness",
        "@id": "https://borepilemajujaya.com/#localbusiness",
        "name": "Jasa Bore Pile Majujaya",
        "telephone": "+62-815-1481-1120",
        "address": {{
          "@type": "PostalAddress",
          "streetAddress": "JL. OPHIR DALAM 2 RT.06/01 NO.61",
          "addressLocality": "Gunung",
          "addressRegion": "DKI Jakarta",
          "postalCode": "12310",
          "addressCountry": "ID"
        }},
        "founder": {{"@type": "Person", "name": "Subiyanto"}},
        "areaServed": [{{"@type": "AdministrativeArea", "name": "{d['name']}", "containedInPlace": {{"@type": "City", "name": "Jakarta", "containedInPlace": {{"@type": "State", "name": "DKI Jakarta"}}}}}}]
      }},
      "areaServed": ["{d['name']}"],
      "serviceType": ["Bore Pile", "Strauss Pile", "Sumur Bor", "Soil Investigation"]
    }}"""
    
    return f'''<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="{d['description']}">
    <meta name="keywords" content="{d['keywords']}">
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">
    <title>{d['title']}</title>
    <link rel="canonical" href="{canonical}">
    <meta property="og:type" content="website">
    <meta property="og:title" content="{d['title']}">
    <meta property="og:description" content="{d['description']}">
    <meta property="og:url" content="{canonical}">
    <meta property="og:image" content="https://borepilemajujaya.com/og-image.jpg">
    <meta property="og:locale" content="id_ID">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{d['title']}">
    <meta name="twitter:description" content="{d['description']}">
    <meta name="twitter:image" content="https://borepilemajujaya.com/og-image.jpg">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    {CSS_LINK}
    <script type="application/ld+json">{schema_service}</script>
    <script type="application/ld+json">{breadcrumb}</script>
</head>
<body>
    <div class="container">
        <div class="page-header">
            <nav class="breadcrumb" aria-label="Breadcrumb">
                <a href="/">Beranda</a>
                <span class="breadcrumb-sep">/</span>
                <a href="/#layanan">Layanan</a>
                <span class="breadcrumb-sep">/</span>
                <a href="/location/jakarta.html">Jakarta</a>
                <span class="breadcrumb-sep">/</span>
                <span>{d['name']}</span>
            </nav>
            <h1>Jasa Bore Pile Profesional di {d['name']}</h1>
            <p class="lead">Kontraktor pondasi bore pile & strauss pile terpercaya sejak 2013. Survey gratis, 250+ proyek selesai.</p>
        </div>
        <div class="intro-section">
            <p>{d['intro']}</p>
        </div>
        <h2>Layanan Kami di {d['name']}</h2>
        <div class="service-grid">
{service_cards}
        </div>
        <h2>Area Terlayani di {d['name']}</h2>
        <div class="area-grid">
{area_tags}
        </div>
        <h2>Kondisi Tanah di {d['name']}</h2>
        <div class="content-section">
            <p>{d['soil']}</p>
            <p>Setiap proyek memerlukan analisis tanah yang akurat. Kami melakukan survey lokasi gratis untuk menentukan spesifikasi bore pile yang tepat — tidak ada tebak-tebakan, semua berdasarkan data lapangan.</p>
        </div>
        <h2>Mengapa Pilih Majujaya?</h2>
        <div class="content-section">
            <ul>
                <li><strong>12+ Tahun Pengalaman</strong> — Berdiri sejak 2013, ribuan titik pengeboran telah diselesaikan</li>
                <li><strong>Survey Gratis</strong> — Datang ke lokasi, analisis tanah, tanpa biaya</li>
                <li><strong>Alat Sendiri</strong> — Rig bor mesin & perlengkapan strauss pile milik sendiri (bukan sewa)</li>
                <li><strong>Harga Transparan</strong> — RAB detail, tidak ada biaya tersembunyi</li>
                <li><strong>Garansi Hasil</strong> — Pekerjaan sesuai spek yang disepakati</li>
                <li><strong>Mulai Cepat</strong> — Jadwal pengerjaan bisa 1x24 jam setelah deal</li>
            </ul>
        </div>
        <h2>Pertanyaan Umum</h2>
        <div class="faq-section">
            <div class="faq-item">
                <div class="faq-question">{d['faq_q']}</div>
                <div class="faq-answer">{d['faq_a']}</div>
            </div>
            <div class="faq-item">
                <div class="faq-question">{d['faq2_q']}</div>
                <div class="faq-answer">{d['faq2_a']}</div>
            </div>
            <div class="faq-item">
                <div class="faq-question">Bagaimana cara memesan jasa bore pile di {d['name']}?</div>
                <div class="faq-answer">Hubungi kami via WhatsApp atau telepon. Tim kami akan survey lokasi gratis, kirimkan RAB detail, dan setelah deal pekerjaan bisa dimulai dalam 1x24 jam. Proses cepat, profesional, dan transparan.</div>
            </div>
        </div>
        <div class="cta-box">
            <h2>Konsultasi Gratis untuk Proyek di {d['name']}</h2>
            <p>Hubungi Subiyanto — tim Majujaya siap survey lokasi dan berikan penawaran terbaik untuk proyek Anda.</p>
            <a href="{WA_URL}" class="btn" target="_blank" rel="noopener">Konsultasi via WhatsApp</a>
            <p style="margin-top:1rem; font-size:0.875rem; opacity:0.7;">0815-1481-1120 (Subiyanto) | Melayani {d['name']} & sekitarnya</p>
        </div>
        <div class="page-footer">
            <p>&copy; 2024 JASA BORE PILE MAJUJAYA</p>
            <p><a href="/">Kembali ke Beranda</a></p>
        </div>
    </div>
</body>
</html>'''

# Generate 5 sub-region pages
for slug, d in subregions.items():
    html = gen_page(slug, d)
    fp = os.path.join(OUTPUT_DIR, f"{slug}.html")
    with open(fp, "w") as f:
        f.write(html)
    print(f"✅ Created: {slug}.html ({len(html)} bytes)")

# ======== UPDATE jakarta.html (hub page) ========
hub_path = os.path.join(OUTPUT_DIR, "jakarta.html")
hub = open(hub_path).read()

# Add sub-region links section before "Kondisi Tanah"
subregion_links = """\n        <h2>Layanan per Wilayah Jakarta</h2>
        <p class="text" style="margin-bottom:1.25rem;">Pilih wilayah Jakarta Anda untuk informasi lebih detail:</p>
        <div class="service-grid">
            <a href="/location/jakarta-pusat.html" class="service-card" style="text-decoration:none;display:block;">
                <h3>Jakarta Pusat</h3>
                <p>Gedung perkantoran, hotel & apartemen di Menteng, Tanah Abang, Gambir</p>
            </a>
            <a href="/location/jakarta-selatan.html" class="service-card" style="text-decoration:none;display:block;">
                <h3>Jakarta Selatan</h3>
                <p>Perumahan elite & ruko di Kebayoran Baru, Tebet, Pancoran, Cilandak</p>
            </a>
            <a href="/location/jakarta-barat.html" class="service-card" style="text-decoration:none;display:block;">
                <h3>Jakarta Barat</h3>
                <p>Perumahan & komersial di Grogol, Cengkareng, Kalideres, Kembangan</p>
            </a>
            <a href="/location/jakarta-timur.html" class="service-card" style="text-decoration:none;display:block;">
                <h3>Jakarta Timur</h3>
                <p>Perumahan & industri di Cakung, Pulo Gadung, Jatinegara, Ciracas</p>
            </a>
            <a href="/location/jakarta-utara.html" class="service-card" style="text-decoration:none;display:block;">
                <h3>Jakarta Utara</h3>
                <p>Bisnis & pesisir di Kelapa Gading, Tanjung Priok, Pluit, Sunter</p>
            </a>
        </div>\n\n        <h2>Kondisi Tanah di Jakarta</h2>"""

hub = hub.replace('\n        <h2>Kondisi Tanah di Jakarta</h2>', subregion_links)
open(hub_path, "w").write(hub)
print("✅ Updated: jakarta.html (hub page with sub-region links)")

print("\n🎉 All done!")
