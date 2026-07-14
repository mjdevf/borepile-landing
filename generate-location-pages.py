#!/usr/bin/env python3
"""Generate 6 location service pages under public/location/"""

import os

OUTPUT_DIR = "/tmp/borepile-location/public/location"
os.makedirs(OUTPUT_DIR, exist_ok=True)

CSS_LINK = '<link rel="stylesheet" href="/location/location.css">'

def city_data():
    return {
        "jakarta": {
            "name": "Jakarta",
            "region": "DKI Jakarta",
            "title": "Jasa Bore Pile Jakarta - Kontraktor Pondasi Profesional | Majujaya",
            "description": "Jasa bore pile & strauss pile Jakarta sejak 2013. Survey gratis, harga kompetitif. Melayani Jakarta Pusat, Selatan, Barat, Timur, Utara. 250+ proyek. Hubungi WA 0815-1481-1120.",
            "keywords": "jasa bore pile jakarta, kontraktor bore pile jakarta, pondasi bore pile jakarta, strauss pile jakarta, bore pile jabodetabek, kontraktor pondasi jakarta",
            "services": ["Bore Pile Pondasi", "Strauss Pile Manual", "Bore Pile Mesin", "Sumur Bor Air", "Soil Investigation"],
            "areas": ["Jakarta Pusat", "Jakarta Selatan", "Jakarta Barat", "Jakarta Timur", "Jakarta Utara", "Menteng", "Kebayoran Baru", "Kelapa Gading", "Tanjung Priok", "Cakung"],
            "intro": "Kami adalah kontraktor jasa bore pile dan strauss pile terpercaya di Jakarta sejak 2013. Dengan pengalaman 12+ tahun dan 250+ titik pengeboran yang telah diselesaikan, tim Majujaya siap menangani proyek pondasi Anda — dari rumah tinggal, ruko, gedung bertingkat, hingga infrastruktur skala besar di seluruh wilayah Jakarta.",
            "soil": "Wilayah Jakarta umumnya memiliki karakteristik tanah lunak hingga sedang dengan lapisan tanah keras pada kedalaman 8-20 meter. Di Jakarta Utara dan Barat, tanah cenderung lebih lunak karena merupakan area bekas rawa, sementara Jakarta Selatan dan Timur memiliki kondisi tanah yang lebih stabil.",
            "faq_q": "Apakah bore pile cocok untuk rumah di Jakarta dengan tanah yang tidak stabil?",
            "faq_a": "Sangat cocok. Bore pile dirancang khusus untuk menembus lapisan tanah lunak hingga mencapai tanah keras di kedalaman tertentu. Untuk proyek rumah di Jakarta, tim Majujaya akan melakukan survey lokasi gratis untuk menentukan kedalaman dan diameter bore pile yang tepat sesuai kondisi tanah di area Anda.",
            "faq2_q": "Berapa lama proses bore pile untuk proyek rumah di Jakarta?",
            "faq2_a": "Untuk proyek rumah standar di Jakarta, rata-rata pengerjaan 3-7 hari tergantung jumlah titik dan akses lokasi. Tim kami bisa mulai dalam 1x24 jam setelah deal. Jadwal pasti akan kami informasikan setelah survey lokasi gratis."
        },
        "bogor": {
            "name": "Bogor",
            "region": "Jawa Barat",
            "title": "Jasa Bore Pile Bogor - Kontraktor Pondasi Profesional | Majujaya",
            "description": "Jasa bore pile & strauss pile Bogor sejak 2013. Survey gratis, harga bersaing. Melayani Bogor Selatan, Utara, Timur, Barat, Cibinong, Citeureup. WA 0815-1481-1120.",
            "keywords": "jasa bore pile bogor, kontraktor bore pile bogor, pondasi bore pile bogor, strauss pile bogor, bore pile cibinong",
            "services": ["Bore Pile Pondasi", "Strauss Pile Manual", "Bore Pile Mesin", "Sumur Bor Air", "Soil Investigation"],
            "areas": ["Bogor Selatan", "Bogor Utara", "Bogor Timur", "Bogor Barat", "Bogor Tengah", "Tanah Sereal", "Cibinong", "Citeureup", "Sukaraja", "Ciawi"],
            "intro": "Kami melayani jasa bore pile dan strauss pile profesional di seluruh wilayah Bogor sejak 2013. Tim Majujaya berpengalaman menangani berbagai proyek pondasi di area Bogor — dari perumahan di Cibinong, ruko di Bogor Tengah, hingga gedung bertingkat di area Puncak dan sekitarnya.",
            "soil": "Wilayah Bogor memiliki kontur tanah yang bervariasi — dari tanah vulkanik di area Bogor Selatan hingga tanah aluvial di Bogor Utara dan Cibinong. Curah hujan tinggi di Bogor juga memerlukan perencanaan pondasi yang matang agar daya dukung optimal.",
            "faq_q": "Apakah cuaca Bogor yang sering hujan mempengaruhi proses bore pile?",
            "faq_a": "Kami tetap bisa melakukan pengeboran saat hujan ringan, namun untuk intensitas tinggi akan dijadwalkan ulang demi keamanan dan kualitas pekerjaan. Kami selalu monitor prakiraan cuaca dan atur jadwal pengerjaan agar efisien. Survey lokasi gratis bisa dijadwalkan kapan saja — termasuk di musim hujan.",
            "faq2_q": "Berapa kedalaman bore pile yang ideal untuk rumah di Bogor?",
            "faq2_a": "Rata-rata kedalaman bore pile untuk rumah di Bogor berkisar 6-15 meter tergantung kondisi tanah di lokasi spesifik. Area Bogor Selatan dengan tanah vulkanik cenderung lebih dangkal, sementara area Bogor Utara dan Cibinong butuh kedalaman lebih. Tim kami akan tentukan setelah survey lokasi gratis."
        },
        "tangerang": {
            "name": "Tangerang",
            "region": "Banten",
            "title": "Jasa Bore Pile Tangerang - Kontraktor Pondasi Profesional | Majujaya",
            "description": "Jasa bore pile & strauss pile Tangerang sejak 2013. Survey gratis, harga bersaing. Melayani Tangerang Kota, Tangsel, BSD, Gading Serpong, Karawaci. WA 0815-1481-1120.",
            "keywords": "jasa bore pile tangerang, kontraktor bore pile tangerang, pondasi bore pile BSD, strauss pile tangerang, bore pile gading serpong",
            "services": ["Bore Pile Pondasi", "Strauss Pile Manual", "Bore Pile Mesin", "Sumur Bor Air", "Soil Investigation"],
            "areas": ["Tangerang Kota", "Tangerang Selatan", "BSD City", "Gading Serpong", "Cipondoh", "Ciledug", "Karawaci", "Legok", "Pagedangan", "Serpong"],
            "intro": "Kontraktor jasa bore pile dan strauss pile terpercaya di Tangerang sejak 2013. Perkembangan pesat di BSD, Gading Serpong, dan Tangerang Selatan membuat permintaan pondasi berkualitas semakin tinggi. Majujaya siap mendukung proyek Anda — dari rumah cluster hingga gedung komersial.",
            "soil": "Wilayah Tangerang memiliki karakteristik tanah bekas rawa terutama di Serpong, BSD, dan Gading Serpong bagian utara. Tanah lunak ini memerlukan kedalaman bore pile yang lebih dalam untuk mencapai tanah keras. Tim kami berpengalaman menangani kondisi ini dengan metode bore pile mesin maupun strauss pile manual.",
            "faq_q": "Mengapa bore pile penting untuk bangunan di BSD dan Gading Serpong?",
            "faq_a": "BSD, Gading Serpong, dan sebagian besar area Tangerang dibangun di atas tanah bekas perkebunan dan rawa yang memiliki daya dukung rendah. Tanpa pondasi bore pile yang memadai, bangunan berisiko ambles atau retak dalam 3-5 tahun. Banyak pengembang di BSD dan Gading Serpong mewajibkan bore pile untuk semua bangunan baru sebagai standar konstruksi.",
            "faq2_q": "Berapa estimasi biaya bore pile untuk rumah di Tangerang?",
            "faq2_a": "Harga mulai dari Rp750.000 per titik tergantung diameter, kedalaman, dan kondisi tanah. Untuk rumah standar di BSD atau Gading Serpong dengan 8-12 titik bore pile, estimasi biaya Rp8-18 juta termasuk mobilisasi dan material. Kami berikan RAB detail gratis setelah survey lokasi."
        },
        "bekasi": {
            "name": "Bekasi",
            "region": "Jawa Barat",
            "title": "Jasa Bore Pile Bekasi - Kontraktor Pondasi Profesional | Majujaya",
            "description": "Jasa bore pile & strauss pile Bekasi sejak 2013. Survey gratis, harga bersaing. Melayani Bekasi Kota, Cikarang, Tambun, Bekasi Barat, Timur, Utara, Selatan. WA 0815-1481-1120.",
            "keywords": "jasa bore pile bekasi, kontraktor bore pile bekasi, pondasi bore pile cikarang, strauss pile bekasi, bore pile tambun",
            "services": ["Bore Pile Pondasi", "Strauss Pile Manual", "Bore Pile Mesin", "Sumur Bor Air", "Soil Investigation"],
            "areas": ["Bekasi Kota", "Bekasi Barat", "Bekasi Timur", "Bekasi Utara", "Bekasi Selatan", "Tambun", "Cikarang", "Cibitung", "Cikarang Pusat", "Cikarang Selatan"],
            "intro": "Jasa bore pile dan strauss pile profesional di Bekasi dan Cikarang dari Majujaya. Sejak 2013, kami telah menangani berbagai proyek pondasi di Bekasi — dari perumahan di Bekasi Timur, pabrik di Cikarang, hingga ruko di Bekasi Kota. Dengan 12+ tahun pengalaman, kualitas dan ketepatan waktu adalah prioritas kami.",
            "soil": "Bekasi dan Cikarang memiliki tanah yang relatif lebih stabil dibanding area Jakarta dan Tangerang. Lapisan tanah keras biasanya ditemukan di kedalaman 6-12 meter. Namun, proyek industrial di Cikarang sering memerlukan kapasitas beban lebih besar, sehingga diameter bore pile dan kedalaman perlu disesuaikan.",
            "faq_q": "Apa perbedaan penanganan bore pile untuk kawasan industri Cikarang vs perumahan?",
            "faq_a": "Proyek industri di Cikarang umumnya membutuhkan bore pile dengan diameter lebih besar (60-100cm) dan kedalaman lebih dalam untuk menopang bebang pabrik dan mesin berat. Untuk perumahan di Bekasi, diameter 30-40cm dengan kedalaman 6-12 meter biasanya mencukupi. Kami menyesuaikan spesifikasi berdasarkan kebutuhan spesifik proyek Anda.",
            "faq2_q": "Apakah Anda melayani proyek bore pile skala besar di Cikarang?",
            "faq2_a": "Ya, kami melayani proyek skala besar di kawasan industri Cikarang, EJIP, MM2100, dan Jababeka. Dengan peralatan bore pile mesin dan tim berpengalaman, kami mampu menangani ratusan titik pengeboran untuk pabrik, gudang, dan infrastruktur. Hubungi kami untuk diskusi kebutuhan proyek Anda."
        },
        "depok": {
            "name": "Depok",
            "region": "Jawa Barat",
            "title": "Jasa Bore Pile Depok - Kontraktor Pondasi Profesional | Majujaya",
            "description": "Jasa bore pile & strauss pile Depok sejak 2013. Survey gratis, harga bersaing. Melayani Beji, Pancoran Mas, Cimanggis, Sukmajaya, Sawangan, Cinere. WA 0815-1481-1120.",
            "keywords": "jasa bore pile depok, kontraktor bore pile depok, pondasi bore pile depok, strauss pile depok, bore pile cimanggis",
            "services": ["Bore Pile Pondasi", "Strauss Pile Manual", "Bore Pile Mesin", "Sumur Bor Air", "Soil Investigation"],
            "areas": ["Beji", "Pancoran Mas", "Cimanggis", "Sukmajaya", "Sawangan", "Cinere", "Limo", "Tapos", "Cisalak", "Margonda"],
            "intro": "Kami adalah kontraktor bore pile dan strauss pile terpercaya di Depok sejak 2013. Melayani seluruh kecamatan di Depok — dari Margonda, Beji, hingga Sawangan dan Cinere. Dukung proyek bangunan Anda dengan pondasi bore pile berkualitas dari tim berpengalaman 12+ tahun.",
            "soil": "Kondisi tanah di Depok cukup bervariasi. Wilayah Depok bagian utara (Beji, Margonda) memiliki tanah lunak hingga sedang dengan kedalaman tanah keras 8-14 meter. Bagian selatan (Sawangan, Tapos) cenderung lebih stabil. Cimanggis dan Sukmajaya berada di area transisi. Survey lokasi diperlukan untuk menentukan spesifikasi tepat.",
            "faq_q": "Apakah tanah di daerah Sawangan/Cinere memerlukan bore pile yang lebih dalam?",
            "faq_a": "Sawangan dan Cinere yang berada di perbatasan Depok-Bogor memiliki kontur tanah perbukitan dengan lapisan tanah keras yang bervariasi. Di beberapa titik, tanah keras sudah ditemukan di kedalaman 4-6 meter, sementara di lokasi lain bisa mencapai 12-15 meter. Kami sarankan survey gratis untuk memastikan tanpa tebak-tebakan.",
            "faq2_q": "Berapa lama proses bore pile untuk ruko di Margonda Depok?",
            "faq2_a": "Untuk ruko di kawasan Margonda, rata-rata pengerjaan 2-4 hari untuk 6-10 titik bore pile. Akses jalan yang padat di Margonda mungkin mempengaruhi jadwal mobilisasi alat, namun tim kami biasa mengatur waktu pengerjaan di luar jam sibuk untuk meminimalkan gangguan."
        },
        "karawang": {
            "name": "Karawang",
            "region": "Jawa Barat",
            "title": "Jasa Bore Pile Karawang - Kontraktor Pondasi Profesional | Majujaya",
            "description": "Jasa bore pile & strauss pile Karawang sejak 2013. Survey gratis, harga bersaing. Melayani Karawang Kota, Klari, Cikampek, Purwasari, Teluk Jambe. WA 0815-1481-1120.",
            "keywords": "jasa bore pile karawang, kontraktor bore pile karawang, pondasi bore pile karawang, strauss pile karawang, bore pile cikampek",
            "services": ["Bore Pile Pondasi", "Strauss Pile Manual", "Bore Pile Mesin", "Sumur Bor Air", "Soil Investigation"],
            "areas": ["Karawang Kota", "Klari", "Cikampek", "Purwasari", "Teluk Jambe", "Ciampel", "Rengasdengklok", "Batujaya", "Tirtajaya", "Pedes"],
            "intro": "Kontraktor jasa bore pile dan strauss pile di Karawang dari Majujaya sejak 2013. Karawang tumbuh pesat sebagai pusat industri dan perumahan — dari Karawang Kota hingga kawasan industri KIIC, Surya Cipta, dan Mitra Karawang. Kami siap mendukung pondasi proyek Anda.",
            "soil": "Wilayah Karawang bagian utara (Rengasdengklok, Batujaya) memiliki tanah lunak karena dekat pesisir pantai, sementara Karawang selatan (Klari, Cikampek) memiliki tanah yang lebih stabil. Kawasan industri di Karawang umumnya membutuhkan bore pile dengan spesifikasi khusus sesuai beban bangunan.",
            "faq_q": "Apakah Anda melayani proyek bore pile untuk pabrik di kawasan industri KIIC Karawang?",
            "faq_a": "Ya, kami melayani proyek pondasi untuk pabrik di kawasan industri KIIC, Surya Cipta, Mitra Karawang, dan Bukit Indah City. Proyek industri memerlukan bore pile dengan kapasitas beban tinggi. Tim kami berpengalaman menangani spesifikasi teknis yang dipersyaratkan oleh manajemen kawasan industri.",
            "faq2_q": "Bagaimana dengan biaya mobilisasi ke Karawang dari Jakarta?",
            "faq2_a": "Biaya mobilisasi alat ke Karawang sudah termasuk dalam RAB yang kami berikan. Untuk proyek di Karawang, tim kami biasanya mobilisasi pagi hari dan siap bekerja di lokasi. Kami juga telah menangani banyak proyek di Karawang sehingga akses dan logistik sudah terbukti."
        }
    }

def generate_page(slug, data):
    canonical = f"https://borepilemajujaya.com/location/{slug}.html"
    wa_url = "https://wa.me/6281514811120?text=Halo%20Majujaya%2C%20saya%20butuh%20informasi%20jasa%20bore%20pile"
    
    service_cards = "\n".join(
        f'            <div class="service-card">\n'
        f'              <h3>{s}</h3>\n'
        f'              <p>Layanan {s.lower()} profesional untuk {data["name"]}.</p>\n'
        f'            </div>'
        for s in data["services"]
    )
    
    area_tags = "\n".join(
        f'            <span class="area-tag">{area}</span>'
        for area in data["areas"]
    )
    
    schema_service = f"""{{
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Jasa Bore Pile & Strauss Pile di {data['name']}",
      "description": "{data['description']}",
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
        "areaServed": [{{"@type": "City", "name": "{data['name']}", "containedInPlace": {{"@type": "State", "name": "{data['region']}"}}}}]
      }},
      "areaServed": ["{data['name']}"],
      "serviceType": ["Bore Pile", "Strauss Pile", "Sumur Bor", "Soil Investigation"]
    }}"""
    
    schema_breadcrumb = f"""{{
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://borepilemajujaya.com"}},
        {{"@type": "ListItem", "position": 2, "name": "Layanan", "item": "https://borepilemajujaya.com/#layanan"}},
        {{"@type": "ListItem", "position": 3, "name": "{data['name']}", "item": "{canonical}"}}
      ]
    }}"""
    
    html = f'''<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="{data['description']}">
    <meta name="keywords" content="{data['keywords']}">
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">
    <title>{data['title']}</title>
    <link rel="canonical" href="{canonical}">
    <meta property="og:type" content="website">
    <meta property="og:title" content="{data['title']}">
    <meta property="og:description" content="{data['description']}">
    <meta property="og:url" content="{canonical}">
    <meta property="og:image" content="https://borepilemajujaya.com/og-image.jpg">
    <meta property="og:locale" content="id_ID">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{data['title']}">
    <meta name="twitter:description" content="{data['description']}">
    <meta name="twitter:image" content="https://borepilemajujaya.com/og-image.jpg">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    {CSS_LINK}
    <script type="application/ld+json">{schema_service}</script>
    <script type="application/ld+json">{schema_breadcrumb}</script>
</head>
<body>
    <div class="container">
        <div class="page-header">
            <nav class="breadcrumb" aria-label="Breadcrumb">
                <a href="/">Beranda</a>
                <span class="breadcrumb-sep">/</span>
                <a href="/#layanan">Layanan</a>
                <span class="breadcrumb-sep">/</span>
                <span>{data['name']}</span>
            </nav>
            <h1>Jasa Bore Pile Profesional di {data['name']}</h1>
            <p class="lead">Kontraktor pondasi bore pile & strauss pile terpercaya sejak 2013. Survey gratis, 250+ proyek selesai.</p>
        </div>

        <div class="intro-section">
            <p>{data['intro']}</p>
        </div>

        <h2>Layanan Kami di {data['name']}</h2>
        <div class="service-grid">
{service_cards}
        </div>

        <h2>Area Terlayani di {data['name']}</h2>
        <div class="area-grid">
{area_tags}
        </div>

        <h2>Kondisi Tanah di {data['name']}</h2>
        <div class="content-section">
            <p>{data['soil']}</p>
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
                <div class="faq-question">{data['faq_q']}</div>
                <div class="faq-answer">{data['faq_a']}</div>
            </div>
            <div class="faq-item">
                <div class="faq-question">{data['faq2_q']}</div>
                <div class="faq-answer">{data['faq2_a']}</div>
            </div>
            <div class="faq-item">
                <div class="faq-question">Bagaimana cara memesan jasa bore pile di {data['name']}?</div>
                <div class="faq-answer">Hubungi kami via WhatsApp atau telepon. Tim kami akan survey lokasi gratis, kirimkan RAB detail, dan setelah deal pekerjaan bisa dimulai dalam 1x24 jam. Proses cepat, profesional, dan transparan.</div>
            </div>
        </div>

        <div class="cta-box">
            <h2>Konsultasi Gratis untuk Proyek di {data['name']}</h2>
            <p>Hubungi Subiyanto — tim Majujaya siap survey lokasi dan berikan penawaran terbaik untuk proyek Anda.</p>
            <a href="{wa_url}" class="btn" target="_blank" rel="noopener">Konsultasi via WhatsApp</a>
            <p style="margin-top:1rem; font-size:0.875rem; opacity:0.7;">0815-1481-1120 (Subiyanto) | Melayani {data['name']} & sekitarnya</p>
        </div>

        <div class="page-footer">
            <p>&copy; 2024 JASA BORE PILE MAJUJAYA</p>
            <p><a href="/">Kembali ke Beranda</a></p>
        </div>
    </div>
</body>
</html>'''
    return html

# Generate all 6 pages
cities = city_data()
for slug in ["jakarta", "bogor", "tangerang", "bekasi", "depok", "karawang"]:
    html = generate_page(slug, cities[slug])
    filepath = os.path.join(OUTPUT_DIR, f"{slug}.html")
    with open(filepath, "w") as f:
        f.write(html)
    print(f"✅ Created: {slug}.html ({len(html)} bytes)")

print("\n🎉 All 6 location pages generated!")
