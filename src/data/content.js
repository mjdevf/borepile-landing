import { STRAUSS_FROM, MESIN_FROM, MESIN_MAX, DISCLAIMER_LONG } from './pricing.js';

export const navLinks = [
  { label: "Beranda", href: "/#hero", id: "nav-home" },
  { label: "Tentang Kami", href: "/#tentang", id: "nav-about" },
  { label: "Layanan", href: "/#layanan", id: "nav-services" },
  { label: "Kalkulator", href: "/#kalkulator", id: "nav-calculator" },
  { label: "Portfolio", href: "/#portfolio", id: "nav-portfolio" },
  { label: "Lokasi & Layanan", href: "/#maps", id: "nav-maps" },
  { label: "Kontak", href: "/#kontak", id: "nav-contact" },
];

export const hero = {
  headline: "Jasa Bore Pile Jakarta & Strauss Pile Terpercaya dan Profesional",
  subheadline:
    "Jasa bore pile Jakarta untuk pondasi bangunan, irigasi, dan kebutuhan industri. Berpengalaman 12+ tahun, 250+ titik pengeboran selesai. Melayani Jakarta Selatan, Jakarta Pusat, Jakarta Barat, Jakarta Timur, Jakarta Utara, Bogor, Depok, Tangerang, Bekasi, Karawang, Cikarang, dan seluruh Indonesia.",
  owner: "Subiyanto",
  ownerTitle: "Pimpinan",
  coverage: "Melayani Jakarta, Jabodetabek, Karawang, Cikarang, Purwakarta, Serang, Cilegon, dan seluruh wilayah Indonesia.",
  cta: "Chat via WhatsApp",
  ctaSecondary: "Lihat Portfolio",
};

export const trustBar = {
  items: [
    { label: "Titik Pengeboran", value: "250", suffix: "+", icon: "Drill" },
    { label: "Tahun Pengalaman", value: "12", suffix: "+", icon: "Calendar" },
    { label: "Diameter", value: "30-100", suffix: "cm", icon: "Ruler" },
    { label: "Kedalaman Maks", value: "30", suffix: "m", icon: "ArrowDown" },
  ],
};

export const services = [
  {
    title: "Borepile Pondasi",
    desc: "Jasa bore pile Jakarta untuk pondasi bangunan bertingkat, rumah, dan konstruksi berat. Layanan kontraktor bore pile profesional untuk proyek properti, infrastruktur, dan industri.",
    icon: "Building2",
    link: "/#layanan",
  },
  {
    title: "Sumur Bor Air",
    desc: "Pengeboran sumur air bersih untuk rumah tangga, perumahan, hingga industri. Solusi air bersih dengan teknologi pengeboran terkini untuk kebutuhan perumahan dan industri.",
    icon: "Droplets",
    link: "/#layanan",
  },
  {
    title: "Strauss Pile Manual",
    desc: "Pondasi strauss pile manual diameter 30 cm, 40 cm, 60 cm, 80 cm, sampai 100 cm. Sistem pondasi alternatif yang lebih ekonomis untuk berbagai jenis bangunan.",
    icon: "Ruler",
    link: "/#layanan",
  },
  {
    title: "Pengeboran Irigasi",
    desc: "Solusi pengeboran untuk sistem irigasi pertanian dan perkebunan skala besar. Layanan pengeboran irigasi untuk mendukung produktivitas pertanian dan perkebunan.",
    icon: "Sprout",
    link: "/#layanan",
  },
  {
    title: "Soil Investigation",
    desc: "Uji sondir / soil test untuk analisis daya dukung tanah sebelum pembangunan. Investigasi tanah profesional untuk perencanaan fondasi yang tepat dan aman.",
    icon: "Search",
    link: "/#layanan",
  },
  {
    title: "Borepile Mesin",
    desc: "Pengeboran mesin untuk proyek skala besar dengan kapasitas dan kedalaman maksimal. Teknologi pengeboran mesin modern untuk proyek-proyek besar dan kompleks.",
    icon: "Drill",
    link: "/#layanan",
  },
];

export const about = {
  title: "Tentang Majujaya Bore Pile",
  desc: "Kami adalah kontraktor jasa bore pile Jakarta yang berbasis di Jakarta Utara dan melayani proyek pondasi bore pile untuk wilayah Jabodetabek. Kami biasa menangani jasa bore pile Jakarta Selatan, Jakarta Pusat, Jakarta Barat, Jakarta Timur, dan Jakarta Utara, baik bore pile mesin maupun pondasi strauss pile manual dengan diameter mulai 30 cm, 40 cm, 60 cm, 80 cm, sampai 100 cm.",
  vision: "Menjadi perusahaan pengeboran tanah yang profesional yang mendukung pembangunan dan kemakmuran bangsa Indonesia.",
  legacyNote: "Majujaya Bore Pile sebelumnya dikenal lewat website majujayaborepile.com. Situs borepilemajujaya.com ini adalah website resmi terbaru kami.",
  highlights: [
    {
      title: "Kontraktor Jasa Bore Pile",
      desc: "Dapat melakukan pengeboran mulai dari diameter 30 cm, 40 cm, 60 cm, 80 cm, sampai 100 cm.",
    },
    {
      title: "SDM Profesional",
      desc: "Tenaga yang bekerja sesuai Standart Operational Procedure yang selalu dijalankan.",
    },
    {
      title: "Berpengalaman",
      desc: "Tenaga berpengalaman dalam bidang pengeboran sehingga bekerja tepat waktu dan efisien.",
    },
    {
      title: "Harga Kompetitif",
      desc: "Harga bersaing dengan tetap mengutamakan kualitas hasil pekerjaan.",
    },
    {
      title: "Cepat & Efisien",
      desc: "Dapat menyelesaikan pekerjaan sesuai dengan waktu yang ditentukan berdasarkan work schedule.",
    },
    {
      title: "Kepuasan Pelanggan",
      desc: "Setiap pekerjaan dikerjakan sesuai spesifikasi dan kesepakatan awal yang sudah disepakati bersama.",
    },
  ],
};

export const whyUs = [
  {
    title: "Harga Kompetitif",
    desc: "Harga kompetitif dan sangat bersaing dengan tetap mengutamakan kualitas hasil pekerjaan.",
    icon: "Drill",
  },
  {
    title: "Cepat & Efisien",
    desc: "Dapat menyelesaikan pekerjaan sesuai dengan waktu yang ditentukan berdasarkan work schedule.",
    icon: "Receipt",
  },
  {
    title: "Berpengalaman",
    desc: "Kami mempunyai pengalaman di bidang pengeboran dan SDM yang dapat bekerja dengan profesional.",
    icon: "Zap",
  },
  {
    title: "Kepuasan Pelanggan",
    desc: "Setiap pekerjaan dikerjakan sesuai spesifikasi dan kesepakatan awal yang sudah disepakati bersama.",
    icon: "Shield",
  },
];

export const portfolioImages = [
  {
    src: "/images/portfolio/01.jpg",
    alt: "Proyek bore pile perumahan di Jabodetabek, tim Majujaya melakukan pengecoran pondasi bore pile untuk perumahan skala menengah",
    label: "Proyek Perumahan",
  },
  {
    src: "/images/portfolio/02.jpg",
    alt: "Proyek pondasi bore pile gedung bertingkat, proses pengeboran mesin untuk pondasi bangunan bertingkat di Jakarta",
    label: "Proyek Gedung",
  },
  {
    src: "/images/portfolio/03.jpg",
    alt: "Pengeboran lapangan open area menggunakan rig bor mesin Majujaya untuk proyek infrastruktur",
    label: "Pengeboran Lapangan",
  },
  {
    src: "/images/portfolio/04.jpg",
    alt: "Alat bor mesin bore pile milik Majujaya siap mobilisasi ke lokasi proyek pondasi klien",
    label: "Pondasi Bore Pile",
  },
  {
    src: "/images/portfolio/05.jpg",
    alt: "Proses pengecoran bore pile di lokasi proyek, tim Majujaya memastikan kualitas campuran beton sesuai standar",
    label: "Pengecoran Bore Pile",
  },
  {
    src: "/images/portfolio/06.jpg",
    alt: "Strauss pile manual, metode pondasi manual cocok untuk akses sempit di proyek rumah tinggal Jakarta",
    label: "Strauss Pile",
  },
  {
    src: "/images/portfolio/07.jpg",
    alt: "Rig bor mesin bore pile Majujaya, alat pengeboran hidrolik untuk proyek pondasi skala besar",
    label: "Alat Bor Mesin",
  },
  {
    src: "/images/portfolio/08.jpg",
    alt: "Dokumentasi proyek bore pile skala besar, pengerjaan puluhan titik bore pile untuk gedung komersial di Jakarta",
    label: "Proyek Skala Besar",
  },
  {
    src: "/images/portfolio/09.jpg",
    alt: "Hasil pengeboran bore pile mencapai tanah keras, dokumentasi QC tim Majujaya untuk memastikan kedalaman sesuai spek",
    label: "Hasil Pengeboran",
  },
  {
    src: "/images/portfolio/10.jpg",
    alt: "Dokumentasi proyek bore pile Majujaya, kontraktor pondasi profesional berpengalaman sejak 2013",
    label: "Dokumentasi Proyek",
  },
];

export const serviceArea = [
  "Jakarta Pusat",
  "Jakarta Utara",
  "Jakarta Barat",
  "Jakarta Selatan",
  "Jakarta Timur",
  "Bogor",
  "Depok",
  "Tangerang",
  "Bekasi",
  "Karawang",
  "Cikarang",
  "Purwakarta",
  "Serang",
  "Cilegon",
  "Subang",
  "Cianjur",
];

export const locationPages = [
  {
    "slug": "jakarta-pusat",
    "city": "Jakarta Pusat",
    "region": "DKI Jakarta",
    "headline": "Jasa Bore Pile Jakarta Pusat – Pengeboran Pondasi Gedung & Ruko Menteng Senayan",
    "title": "Jasa Bore Pile Jakarta Pusat — Ruko & Gedung | Majujaya",
    "intro": "Kebutuhan pondasi bore pile di Jakarta Pusat didominasi oleh peremajaan gedung kantor, pembangunan ruko komersial, dan renovasi rumah tinggal bertingkat di kawasan berdensitas tinggi seperti Menteng, Tanah Abang, Gambir, dan Senayan. Kerapatan bangunan perkotaan dan batas lahan yang berhimpitan menuntut metode pondasi minim getaran untuk menjaga stabilitas bangunan sekitar.",
    "keywords": [
      "jasa bore pile jakarta pusat",
      "bore pile jakarta pusat",
      "jasa bore pile menteng",
      "kontraktor pondasi jakpus",
      "bore pile senayan",
      "strauss pile jakarta pusat"
    ],
    "services": [
      "Bore Pile Pondasi",
      "Strauss Pile Manual",
      "Bore Pile Mesin",
      "Sumur Bor Air",
      "Soil Investigation"
    ],
    "areaCovered": [
      "Menteng",
      "Tanah Abang",
      "Gambir",
      "Senayan",
      "Cempaka Putih",
      "Senen",
      "Johar Baru",
      "Sawah Besar",
      "Kemayoran",
      "Cideng",
      "Petojo",
      "Gondangdia",
      "Rawasari"
    ],
    "image": "/images/portfolio/01.jpg",
    "metaDesc": "Jasa bore pile & strauss pile Jakarta Pusat sejak 2013. Survey gratis, harga bersaing. Melayani Menteng, Tanah Abang, Senayan & area Jakpus. WA 0815-1481-1120.",
    "soilInfo": "Formasi geologi permukaan Jakarta Pusat tersusun atas endapan aluvial dan lempung lanauan dengan variasi daya dukung. Lapisan tanah keras (bearing layer dengan N-SPT > 50) umumnya ditemukan pada kedalaman 14 hingga 22 meter di bawah muka tanah. Pada area di sekitar lembah Kali Ciliwung dan kali buatan perkotaan, muka air tanah relatif dangkal (2–4 meter), sehingga pengeboran tiang pondasi memerlukan metode sirkulasi lumpur bentonit (wash boring) atau pemasangan temporary casing baja agar dinding bor terhindar dari kelongsoran saat proses pengecoran beton.",
    "foundationRecommendation": "Untuk pemukiman padat dan renovasi rumah bertingkat di gang sempit (seperti di Menteng Dalam, Cempaka Putih, atau Johar Baru), metode Strauss Pile Manual diameter 30–40 cm sangat diunggulkan karena alat ringkas tanpa polusi suara. Sedangkan untuk konstruksi ruko, hotel butik, dan gedung 3–8 lantai di jalan utama kawasan Senayan, Tanah Abang, atau Kemayoran, Bore Pile Mesin Mini Crane diameter 40–80 cm menjadi solusi teknis terbaik untuk memikul beban struktural yang besar.",
    "localContext": "Kepadatan bangunan di Menteng, Tanah Abang, dan Cempaka Putih membuat ruang kerja alat bor sangat terbatas, sehingga penentuan titik dan jalur mobilisasi dibahas bersama pengelola gedung sebelum pengeboran. Untuk ruko dan gedung di koridor Senayan serta Kemayoran, tiang bor mesin dipilih agar beban struktur tersalur ke lapisan keras tanpa mengganggu aktivitas jalan utama. Pada renovasi rumah di gang sempit seperti Johar Baru dan Sawah Besar, strauss pile manual memungkinkan pekerjaan tetap berjalan meski akses kendaraan besar tidak tersedia. Semua titik dicatat dan didokumentasikan agar pemilik proyek dapat memeriksa hasil pengeboran.",
    "faq": [
      {
        "q": "Bagaimana pengendalian getaran bore pile di kawasan padat gedung Jakarta Pusat?",
        "a": "Metode bore pile rotary dan strauss pile manual bekerja dengan memotong dan mengangkat tanah keluar, bukan memancang atau menumbuk. Hasilnya, getaran mekanis dan kebisingan sangat minim, sehingga aman dari risiko keretakan dinding pada gedung dan rumah tetangga yang berdempetan."
      },
      {
        "q": "Apakah perlu izin khusus lingkungan untuk pengeboran di Menteng atau Senayan?",
        "a": "Untuk kawasan pemukiman tertib seperti Menteng atau Senayan, koordinasi dengan pengurus lingkungan (RT/RW/Pengelola Kawasan) wajib dilakukan terkait jam kerja dan mobilisasi armada. Tim Majujaya siap mendampingi pemilik proyek dengan penyediaan metode kerja tertulis dan standar kebersihan lokasi."
      },
      {
        "q": "Berapa lama estimasi mobilisasi alat bor ke lokasi proyek di Jakarta Pusat?",
        "a": "Dengan workshop dan pool armada kami yang berlokasi strategis di Jakarta Selatan, mobilisasi unit mini crane maupun regu strauss pile manual ke seluruh area Jakarta Pusat dapat dilaksanakan dalam 1x24 jam setelah kesepakatan SPK disetujui."
      }
    ]
  },
  {
    "slug": "jakarta-selatan",
    "city": "Jakarta Selatan",
    "region": "DKI Jakarta",
    "headline": "Jasa Bore Pile Jakarta Selatan – Pondasi Kuat Hunian & Komersial Jaksel",
    "title": "Jasa Bore Pile Jakarta Selatan — Hunian & Ruko | Majujaya",
    "intro": "Wilayah Jakarta Selatan merupakan pusat hunian premium, townhouse eksklusif, ruko komersial, serta sentra bisnis kuliner di koridor Kebayoran Baru, Tebet, Cilandak, Pasar Minggu, hingga Jagakarsa. Pembangunan gedung dan hunian bertingkat di kawasan ini membutuhkan pondasi dalam bore pile yang presisi untuk menjamin integritas struktural di atas kontur lahan yang dinamis.",
    "keywords": [
      "jasa bore pile jakarta selatan",
      "bore pile jakarta selatan",
      "jasa bore pile kebayoran",
      "kontraktor pondasi jaksel",
      "bore pile tebet",
      "strauss pile jakarta selatan"
    ],
    "services": [
      "Bore Pile Pondasi",
      "Strauss Pile Manual",
      "Bore Pile Mesin",
      "Sumur Bor Air",
      "Soil Investigation"
    ],
    "areaCovered": [
      "Kebayoran Baru",
      "Kebayoran Lama",
      "Pancoran",
      "Tebet",
      "Pasar Minggu",
      "Jagakarsa",
      "Mampang Prapatan",
      "Setiabudi",
      "Pesanggrahan",
      "Cilandak",
      "Gandaria",
      "Pondok Indah",
      "Cipete"
    ],
    "image": "/images/portfolio/02.jpg",
    "metaDesc": "Jasa bore pile & strauss pile Jakarta Selatan. Survey gratis, harga bersaing. Melayani Kebayoran Baru, Tebet, Cilandak & seluruh Jaksel. WA 0815-1481-1120.",
    "soilInfo": "Karakteristik tanah Jakarta Selatan bervariasi dari lapisan lempung kaku (stiff clay) di wilayah utara (Kebayoran Baru, Senopati, Mampang) hingga endapan vulkanik tuff di wilayah selatan (Jagakarsa, Lenteng Agung, Ciganjur). Lapisan tanah keras umumnya berada pada kedalaman 10 hingga 18 meter. Kontur tanah bergelombang di sekitar sempadan sungai Krukut dan Pesanggrahan memerlukan survey topografi dan kedalaman bor yang teliti agar seluruh tiang mencapai formasi tanah pendukung yang merata.",
    "foundationRecommendation": "Untuk bangunan rumah tinggal 2 hingga 3 lantai di kawasan pemukiman rapat seperti Tebet, Pancoran, dan Kebayoran Lama, strauss pile manual diameter 30–40 cm sangat direkomendasikan karena biaya ekonomis dan manuver mudah. Untuk perumahan klaster, townhouse bertingkat, dan bangunan perkantoran di Cilandak atau Pondok Indah, bore pile mesin mini crane diameter 40–60 cm memberikan kapasitas tahanan friksi dan tahanan ujung yang kokoh.",
    "localContext": "Perbedaan kontur antara Kebayoran Baru yang relatif datar dan Jagakarsa yang berbukit membuat kedalaman bor di Jakarta Selatan tidak bisa diseragamkan. Rumah tinggal dan townhouse di Tebet, Cilandak, serta Pondok Indah umumnya memakai strauss pile manual karena lahan sempit dan berdekatan dengan bangunan tetangga. Sementara ruko dan bangunan komersial di koridor Pasar Minggu serta Mampang Prapatan lebih cocok memakai bore pile mesin untuk memikul beban lantai bertingkat. Survey awal kami memetakan akses, batas lahan, dan posisi utilitas sebelum menetapkan diameter serta kedalaman tiang.",
    "faq": [
      {
        "q": "Apakah area berkontur miring di Jagakarsa dan Ciganjur aman untuk dibor?",
        "a": "Sangat aman dengan perencanaan rekayasa geoteknik yang benar. Pada lahan berkontur miring, pengeboran tiang bore pile dilakukan dengan memperhitungkan potensi gaya geser lateral, dan panjang tiang disesuaikan dengan elevasi muka lapisan tanah keras di tiap titik kontur."
      },
      {
        "q": "Berapa lama pengerjaan 10–15 titik bore pile untuk rumah tinggal di Jaksel?",
        "a": "Rata-rata proyek rumah tinggal dengan 10 hingga 15 titik bore pile kedalaman 8–12 meter dapat diselesaikan dalam kurun waktu 3 hingga 5 hari kerja, mencakup tahapan pengeboran, instalasi keranjang besi tulangan, dan pengecoran beton."
      },
      {
        "q": "Apakah survey lokasi dan konsultasi teknis di Jakarta Selatan dikenakan biaya?",
        "a": "Tidak ada biaya sama sekali. Tim geoteknik Majujaya menyediakan layanan survey lokasi, pengukuran kondisi tanah awal, dan penyusunan RAB detail secara GRATIS untuk seluruh area Jakarta Selatan."
      }
    ]
  },
  {
    "slug": "jakarta-barat",
    "city": "Jakarta Barat",
    "region": "DKI Jakarta",
    "headline": "Jasa Bore Pile Jakarta Barat – Solusi Pondasi Tanah Lunak & Bekas Rawa",
    "title": "Jasa Bore Pile Jakarta Barat — Survey Gratis | Majujaya",
    "intro": "Membangun di kawasan Jakarta Barat seperti Cengkareng, Kalideres, Kembangan, Palmerah, dan Grogol menghadirkan tantangan geoteknik tinggi karena sebagian besar wilayahnya merupakan dataran aluvial rendah bekas rawa. Pondasi tiang bore pile menjadi solusi mutlak bagi ruko, pergudangan, dan rumah tinggal untuk mencegah kegagalan struktur akibat penurunan pondasi (land subsidence).",
    "keywords": [
      "jasa bore pile jakarta barat",
      "bore pile jakarta barat",
      "jasa bore pile grogol",
      "kontraktor pondasi jakbar",
      "bore pile cengkareng",
      "strauss pile jakarta barat"
    ],
    "services": [
      "Bore Pile Pondasi",
      "Strauss Pile Manual",
      "Bore Pile Mesin",
      "Sumur Bor Air",
      "Soil Investigation"
    ],
    "areaCovered": [
      "Grogol Petamburan",
      "Kalideres",
      "Cengkareng",
      "Kembangan",
      "Palmerah",
      "Taman Sari",
      "Tambora",
      "Daan Mogot",
      "Meruya",
      "Kebon Jeruk",
      "Jelambar",
      "Kapuk"
    ],
    "image": "/images/portfolio/03.jpg",
    "metaDesc": "Jasa bore pile & strauss pile Jakarta Barat. Survey gratis, harga bersaing. Melayani Grogol, Cengkareng, Kembangan & seluruh Jakbar. WA 0815-1481-1120.",
    "soilInfo": "Struktur tanah Jakarta Barat didominasi endapan lempung lunak (marine soft clay) dan lanau dengan nilai daya dukung tanah sangat rendah hingga kedalaman 8–12 meter. Lapisan tanah keras (N-SPT > 50) rata-rata baru dijumpai pada kedalaman 14 hingga 24 meter. Tingginya muka air tanah yang hanya 1–2 meter dari permukaan tanah memerlukan metode pengeboran basah (wash boring) disertai pipa casing pelindung baja agar lubang bor tidak longsor sebelum beton dicor.",
    "foundationRecommendation": "Pondasi dangkal konvensional sangat berisiko amblas di tanah lunak Jakarta Barat. Kami merekomendasikan Bore Pile Mesin Mini Crane diameter 40–80 cm untuk ruko komersial di Daan Mogot dan Cengkareng agar beban tersalurkan sempurna ke tanah keras. Untuk rumah tinggal di gang sempit seperti Palmerah, Tambora, atau Jelambar, metode Strauss Pile Manual yang menembus lapisan lempung atas memberikan proteksi maksimal terhadap keretakan dinding.",
    "localContext": "Tanah aluvial lunak di Cengkareng, Kalideres, dan Kapuk membuat pondasi dangkal mudah mengalami penurunan tidak merata, sehingga bangunan ruko dan gudang di Daan Mogot sebaiknya ditopang tiang bor yang mencapai lapisan keras. Untuk rumah tinggal di Palmerah, Tambora, dan Jelambar yang berdiri rapat, pekerjaan strauss pile manual dipilih agar tidak menimbulkan getaran pada dinding tetangga. Muka air tanah yang dangkal juga menjadi pertimbangan saat menentukan metode pengecoran dan pemasangan casing agar lubang bor tidak longsor sebelum beton mengeras.",
    "faq": [
      {
        "q": "Mengapa pondasi tapak konvensional sering mengalami retak dan miring di Jakarta Barat?",
        "a": "Lapisan lempung lunak bekas rawa di Jakarta Barat mengalami proses konsolidasi dan penurunan volume saat menerima beban terus-menerus. Tanpa tiang bore pile yang bertumpu pada lapisan tanah keras di kedalaman belasan meter, penurunan tak seragam (differential settlement) akan memicu dinding retak dan struktur miring."
      },
      {
        "q": "Bagaimana cara menangani lubang bor yang berair lumpur di Cengkareng dan Kalideres?",
        "a": "Tim kami menerapkan sistem pengeboran sirkulasi fluida bentonit untuk menahan tekanan dinding lubang tanah serta menggunakan pipa tremi saat pengecoran agar pasta semen tidak tercampur lumpur tanah dasar."
      },
      {
        "q": "Berapa estimasi kedalaman tiang bore pile untuk ruko 3 lantai di Kembangan?",
        "a": "Berdasarkan data sondir umum kawasan Kembangan dan Puri Indah, kedalaman tiang bor rata-rata berkisar 14 hingga 20 meter dengan diameter 40 cm atau 50 cm. Survey lokasi gratis kami akan memastikan kebutuhan eksak titik pondasi Anda."
      }
    ]
  },
  {
    "slug": "jakarta-timur",
    "city": "Jakarta Timur",
    "region": "DKI Jakarta",
    "headline": "Jasa Bore Pile Jakarta Timur – Pondasi Industri, Pergudangan & Hunian Jaktim",
    "title": "Jasa Bore Pile Jakarta Timur — Industri & Gudang | Majujaya",
    "intro": "Jakarta Timur adalah wilayah strategis yang memadukan kawasan residensial padat di Matraman, Jatinegara, dan Duren Sawit dengan zona pergudangan dan industri manufaktur di Cakung, Pulo Gadung, serta Ciracas. Keberagaman fungsi bangunan ini menuntut kontraktor bore pile dengan armada mesin berdaya bor tinggi dan kapasitas penanganan proyek skala menengah hingga besar.",
    "keywords": [
      "jasa bore pile jakarta timur",
      "bore pile jakarta timur",
      "jasa bore pile matraman",
      "kontraktor pondasi jaktim",
      "bore pile jatinegara",
      "strauss pile jakarta timur"
    ],
    "services": [
      "Bore Pile Pondasi",
      "Strauss Pile Manual",
      "Bore Pile Mesin",
      "Sumur Bor Air",
      "Soil Investigation"
    ],
    "areaCovered": [
      "Matraman",
      "Jatinegara",
      "Cakung",
      "Pulo Gadung",
      "Duren Sawit",
      "Kramat Jati",
      "Makasar",
      "Cipayung",
      "Ciracas",
      "Pasar Rebo",
      "Rawamangun",
      "Klender",
      "Cibubur"
    ],
    "image": "/images/portfolio/04.jpg",
    "metaDesc": "Jasa bore pile & strauss pile Jakarta Timur. Survey gratis, harga bersaing. Melayani Cakung, Pulo Gadung, Duren Sawit & area Jaktim. WA 0815-1481-1120.",
    "soilInfo": "Karakteristik tanah Jakarta Timur memiliki variasi formasi lempung ekspansif di area timur (Cakung, Ciracas) dan aluvial stabil di area tengah dan barat (Matraman, Rawamangun). Kedalaman lapisan tanah keras (N-SPT > 50) rata-rata berada pada kedalaman 10 hingga 18 meter. Muka air tanah di Jakarta Timur umumnya berada di kedalaman 3–6 meter, memberikan stabilitas lubang bor yang cukup baik selama tahapan pengeboran kering maupun basah.",
    "foundationRecommendation": "Untuk fasilitas pergudangan logistik, pabrik, dan workshop di Kawasan Industri Pulo Gadung (JIEP) dan Cakung, tiang bor bore pile mesin diameter 50–80 cm wajib digunakan guna memikul beban lantai dan mesin produksi bergetar. Untuk pembangunan rumah tinggal keluarga dan klaster residensial di Rawamangun, Duren Sawit, dan Cibubur, strauss pile manual atau mini crane diameter 30–40 cm menawarkan efisiensi biaya dan kecepatan waktu kerja.",
    "localContext": "Wilayah Jakarta Timur mencampur kawasan hunian di Matraman, Jatinegara, dan Duren Sawit dengan zona industri di Cakung, Pulo Gadung, serta Ciracas, sehingga kebutuhan pondasi tiap titik berbeda. Gudang dan pabrik di kawasan industri membutuhkan tiang bor berdiameter lebih besar untuk menahan beban mesin dan lantai kerja, sedangkan rumah tinggal di Rawamangun atau Klender cukup memakai strauss pile manual. Akses jalan lingkungan di Jatinegara dan Makasar sering membatasi kendaraan besar, karena itu jadwal mobilisasi dan ukuran alat kami sesuaikan dengan kondisi lapangan saat survey.",
    "faq": [
      {
        "q": "Apakah Majujaya melayani pekerjaan bore pile di kawasan industri Cakung dan Pulo Gadung?",
        "a": "Ya, kami berpengalaman menangani bore pile untuk hanggar gudang, pabrik, silo, dan pondasi mesin di kawasan industri Jakarta Timur dengan pemenuhan standar K3 serta kapasitas daya dukung beban tinggi."
      },
      {
        "q": "Apakah tim Majujaya menyediakan layanan uji sondir tanah di Jakarta Timur?",
        "a": "Tentu. Kami menyediakan layanan Soil Investigation (uji sondir konus kapasitas 2,5 ton & 5 ton) untuk memberikan laporan daya dukung tanah dan kedalaman tanah keras sebelum desain pondasi dieksekusi."
      },
      {
        "q": "Berapa lama waktu pengerjaan pondasi bore pile untuk rumah 2 lantai di Duren Sawit?",
        "a": "Untuk volume standar rumah 2 lantai (rata-rata 10–14 titik bor kedalaman 8–10 meter), waktu pengerjaan normal adalah 3 sampai 4 hari kerja hingga selesai pengecoran."
      }
    ]
  },
  {
    "slug": "jakarta-utara",
    "city": "Jakarta Utara",
    "region": "DKI Jakarta",
    "headline": "Jasa Bore Pile Jakarta Utara – Spesialis Pondasi Dalam Area Pesisir & Reklamasi",
    "title": "Jasa Bore Pile Jakarta Utara — Tanah Pesisir | Majujaya",
    "intro": "Mendirikan bangunan di kawasan pesisir Jakarta Utara seperti Kelapa Gading, Pluit, Sunter, Tanjung Priok, Penjaringan, dan Cilincing memerlukan pertimbangan rekayasa geoteknik yang matang. Ancaman penurunan tanah (subsidence), paparan air asin pesisir, serta lapisan tanah lunak tebal menjadikan pondasi bore pile dalam sebagai tumpuan wajib bagi konstruksi gedung, ruko, dan residensial.",
    "keywords": [
      "jasa bore pile jakarta utara",
      "bore pile jakarta utara",
      "jasa bore pile kelapa gading",
      "kontraktor pondasi jakut",
      "bore pile tanjung priok",
      "strauss pile jakarta utara"
    ],
    "services": [
      "Bore Pile Pondasi",
      "Strauss Pile Manual",
      "Bore Pile Mesin",
      "Sumur Bor Air",
      "Soil Investigation"
    ],
    "areaCovered": [
      "Kelapa Gading",
      "Tanjung Priok",
      "Koja",
      "Cilincing",
      "Pademangan",
      "Penjaringan",
      "Pluit",
      "Sunter",
      "Ancol",
      "Marunda",
      "Pantai Indah Kapuk"
    ],
    "image": "/images/portfolio/05.jpg",
    "metaDesc": "Jasa bore pile & strauss pile Jakarta Utara sejak 2013. Survey gratis, harga bersaing. Melayani Kelapa Gading, Pluit, Sunter & seluruh Jakut. WA 0815-1481-1120.",
    "soilInfo": "Lapisan tanah Jakarta Utara tersusun atas formasi lempung kelautan (marine soft clay) sangat lunak dan pasir halus dengan ketebalan mencapai 12 hingga 18 meter. Lapisan tanah keras sejati (N-SPT > 50) baru dijumpai pada kedalaman 18 hingga 28 meter di bawah permukaan tanah. Selain itu, salinitas air tanah yang tinggi memerlukan spesifikasi beton kedap air dengan mutu minimal K-300 serta selimut beton ekstra untuk melindungi besi tulangan dari bahaya korosi klorida.",
    "foundationRecommendation": "Metode yang paling efektif untuk wilayah Jakarta Utara adalah Bore Pile Mesin Mini Crane dengan sistem wash boring dan casing pelindung penuh pada lapisan atas. Tiang bor berdiameter 40–80 cm dirancang menembus seluruh lapisan lumpur pesisir hingga bertumpu kuat pada lapisan batuan/tanah keras. Metode tiang pancang pukul konvensional kerap dihindari di kawasan padat seperti Kelapa Gading dan Pluit karena getaran benturan yang dapat merusak struktur ruko sekitar.",
    "localContext": "Lapisan lempung laut yang tebal di Pluit, Penjaringan, dan Cilincing menuntut tiang bor yang benar-benar menembus tanah lunak hingga lapisan pendukung, bukan sekadar pondasi dangkal. Bangunan ruko dan residensial di Kelapa Gading serta Sunter juga menghadapi risiko penurunan tanah, sehingga pengeboran basah dengan casing pelindung menjadi pilihan agar dinding lubang tetap stabil. Untuk kawasan pelabuhan dan industri di Tanjung Priok serta Marunda, kami memperhatikan mutu beton dan perlindungan tulangan terhadap air tanah yang mengandung garam sebelum pekerjaan dimulai.",
    "faq": [
      {
        "q": "Bagaimana cara bore pile mencegah amblas di tanah rawa pesisir Jakarta Utara?",
        "a": "Bore pile meneruskan beban bangunan melewati seluruh lapisan tanah lunak atas langsung ke formasi tanah keras di kedalaman 18–28 meter. Tahanan friksi selimut tiang dan tahanan ujung bawah tiang bekerja simultan meniadakan risiko amblas."
      },
      {
        "q": "Bagaimana perlindungan terhadap korosi air asin pada tiang bore pile di Jakut?",
        "a": "Kami menerapkan spesifikasi beton mutu tinggi kedap air, penambahan tebal selimut beton (concrete cover) minimal 5–7 cm, serta pemakaian aditif anti-sulfat pada campuran beton bila diinstruksikan oleh konsultan struktur."
      },
      {
        "q": "Apakah bore pile aman dilakukan bersebelahan langsung dengan ruko tetangga di Sunter?",
        "a": "Sangat aman. Pengeboran rotary sistem rotasi tidak menimbulkan efek kejut hentakan lateral layaknya diesel hammer tiang pancang, sehingga bangunan bersebelahan tetap terlindungi seutuhnya."
      }
    ]
  },
  {
    "slug": "bogor",
    "city": "Bogor",
    "region": "Jawa Barat",
    "headline": "Jasa Bore Pile Bogor – Pondasi Kokoh Kontur Tanah Miring & Curah Hujan Tinggi",
    "title": "Jasa Bore Pile Bogor — Pondasi Lereng & Perumahan | Majujaya",
    "intro": "Pembangunan di wilayah Bogor Kota maupun Kabupaten (Bogor Selatan, Bogor Utara, Tanah Sereal, Cibinong, Sentul, Bojonggede) memiliki karakteristik kontur perbukitan bergelombang dan intensitas curah hujan yang tinggi. Kontraktor bore pile berpengalaman sangat dibutuhkan untuk memastikan pondasi rumah tinggal, villa, ruko, dan dinding penahan tanah (retaining wall) berdiri kokoh tanpa risiko pergeseran tanah.",
    "keywords": [
      "bore pile bogor",
      "jasa bore pile bogor",
      "kontraktor pondasi bogor",
      "bore pile bogor selatan",
      "strauss pile bogor"
    ],
    "services": [
      "Bore Pile Pondasi",
      "Strauss Pile Manual",
      "Bore Pile Mesin",
      "Sumur Bor Air",
      "Soil Investigation"
    ],
    "areaCovered": [
      "Bogor Selatan",
      "Bogor Utara",
      "Bogor Timur",
      "Bogor Barat",
      "Tanah Sereal",
      "Bogor Tengah",
      "Cibinong",
      "Citeureup",
      "Sentul",
      "Bojonggede",
      "Sukaraja",
      "Ciomas"
    ],
    "image": "/images/portfolio/06.jpg",
    "metaDesc": "Jasa bore pile & strauss pile Bogor sejak 2013. Survey gratis, harga bersaing. Melayani Cibinong, Sentul, Bogor Kota & seluruh area Bogor. WA 0815-1481-1120.",
    "soilInfo": "Struktur geologi wilayah Bogor didominasi oleh batuan vulkanik muda hasil letusan Gunung Salak dan Gunung Pangrango, berupa tanah lempung tufaan kemerahan (laterit) dan lapisan breksi vulkanik. Pada kawasan lereng (Bogor Selatan, Sentul), lapisan tanah keras dapat ditemukan relatif dangkal pada kedalaman 6 hingga 12 meter, namun memiliki sifat rentan rayapan tanah (soil creep) saat jenuh air hujan. Sedangkan di zona dataran utara (Cibinong, Citeureup), kedalaman tanah keras berada di kisaran 10 hingga 16 meter.",
    "foundationRecommendation": "Untuk pembangunan villa dan rumah di area perbukitan Sentul atau Bogor Selatan, kombinasi tiang bore pile mesin diameter 40–60 cm sebagai tiang penyangga pondasi dan secant pile penahan lereng longsor sangat efektif. Untuk kawasan pemukiman perumahan Cibinong dan Tanah Sereal, metode strauss pile manual diameter 30–40 cm sangat hemat biaya dan cepat dalam mobilisasi.",
    "localContext": "Kontur perbukitan di Sentul, Bogor Selatan, dan Cibinong membuat posisi tiang harus mengikuti kemiringan lahan dan lapisan batuan di bawahnya. Pada villa dan rumah di lereng, pengeboran sering diarahkan ke lapisan keras yang lebih dangkal, sementara dinding penahan tanah di sekitarnya direncanakan agar tidak membebani lereng. Curah hujan yang tinggi di Bogor juga menjadi alasan untuk menjaga kebersihan lokasi dan mengatur drainase selama pengeboran agar lubang tidak terisi air dan tanah sekitar tidak jenuh.",
    "faq": [
      {
        "q": "Bagaimana penanganan pekerjaan pengeboran bore pile di Bogor saat musim hujan?",
        "a": "Tim kami mengantisipasi curah hujan tinggi dengan pemasangan parit drainase sementara di area titik bor, penutupan lubang bor dengan terpal kedap air saat jeda kerja, dan percepatan pengecoran langsung setelah lubang bersih."
      },
      {
        "q": "Apakah bore pile bisa diaplikasikan sebagai dinding penahan tanah (turap) lereng di Bogor?",
        "a": "Sangat bisa. Kami sering mengerjakan bored pile berderet rapat (continous/secant pile) yang disatukan capping beam beton untuk mengunci lereng tanah di proyek villa perbukitan Bogor agar tidak longsor."
      },
      {
        "q": "Berapa lama mobilisasi armada bor Majujaya menuju lokasi proyek di Bogor?",
        "a": "Melalui akses tol Jagorawi dan Tol Lingkar Bogor, armada mesin mini crane dan tim kami siap tiba di lokasi proyek Anda dalam 1x24 jam setelah kesepakatan kerja tercapai."
      }
    ]
  },
  {
    "slug": "depok",
    "city": "Depok",
    "region": "Jawa Barat",
    "headline": "Jasa Bore Pile Depok – Pengeboran Pondasi Rumah Tinggal & Ruko Margonda Sawangan",
    "title": "Jasa Bore Pile Depok — Rumah Kos & Hunian | Majujaya",
    "intro": "Kota Depok terus berkembang pesat sebagai kawasan hunian favorit dan koridor bisnis pendidikan. Pembangunan rumah tinggal pribadi, townhouse, kos-kosan mahasiswa, dan deretan ruko komersial di Margonda, Beji, Cimanggis, Cinere, hingga Sawangan menuntut pondasi kokoh yang mampu menahan beban bertingkat dengan proses kerja yang efisien tanpa mengganggu tetangga.",
    "keywords": [
      "bore pile depok",
      "jasa bore pile depok",
      "kontraktor pondasi depok",
      "bore pile pancoran mas",
      "strauss pile depok"
    ],
    "services": [
      "Bore Pile Pondasi",
      "Strauss Pile Manual",
      "Bore Pile Mesin",
      "Sumur Bor Air",
      "Soil Investigation"
    ],
    "areaCovered": [
      "Beji",
      "Pancoran Mas",
      "Cimanggis",
      "Sukmajaya",
      "Sawangan",
      "Cinere",
      "Limo",
      "Tapos",
      "Bojongsari",
      "Cilodong",
      "Margonda"
    ],
    "image": "/images/portfolio/07.jpg",
    "metaDesc": "Jasa bore pile & strauss pile Depok sejak 2013. Survey gratis, harga bersaing. Melayani Margonda, Sawangan, Cinere & seluruh Depok. WA 0815-1481-1120.",
    "soilInfo": "Formasi tanah di Depok terbagi menjadi dua karakteristik utama: kawasan utara (Margonda, Beji, Cinere) memiliki lapisan lempung tufaan pasiran dengan kedalaman tanah keras sekitar 8 hingga 14 meter. Sementara kawasan selatan dan barat (Sawangan, Bojongsari, Tapos) memiliki topografi perbukitan landai dengan lapisan padas keras yang terkadang dijumpai lebih dangkal pada kedalaman 6 hingga 10 meter. Muka air tanah di Depok bervariasi antara 3 hingga 7 meter di bawah permukaan.",
    "foundationRecommendation": "Untuk pembangunan rumah kos dan hunian bertingkat di gang-gang pemukiman padat Margonda, Kukusan, atau Beji, metode Strauss Pile Manual diameter 30–40 cm adalah opsi paling tepat karena tidak memerlukan manuver truk besar. Untuk proyek perumahan townhouse di Sawangan, Cinere, atau ruko bertingkat di jalan utama Depok, Bore Pile Mesin Mini Crane memberikan kecepatan pengerjaan dan daya dukung tiang optimal.",
    "localContext": "Kawasan utara Depok seperti Beji, Margonda, dan Cinere memiliki lapisan lempung tufaan, sedangkan Sawangan dan Tapos cenderung berbukit dengan lapisan keras yang lebih dangkal. Perbedaan ini membuat rumah kos dan hunian bertingkat di sekitar Margonda lebih sering memakai strauss pile manual karena akses gang sempit, sementara townhouse dan ruko di Sawangan memakai bore pile mesin untuk kecepatan kerja. Survey lokasi kami memeriksa posisi septic tank, saluran air, dan batas tanah agar titik bor tidak mengganggu utilitas yang sudah ada.",
    "faq": [
      {
        "q": "Mengapa strauss pile manual sangat digemari untuk proyek rumah tinggal di Depok?",
        "a": "Karena strauss pile manual memiliki keunggulan akses fleksibel ke dalam gang perumahan sempit tanpa merusak jalan lingkungan, biaya operasional lebih ekonomis, dan waktu setup alat sangat cepat."
      },
      {
        "q": "Berapa titik rata-rata bore pile untuk rumah 2 lantai ukuran 8x15 meter di Depok?",
        "a": "Umumnya memerlukan 10 hingga 14 titik pondasi bore pile dengan diameter 30–40 cm dan kedalaman rata-rata 8–10 meter, tergantung layout kolom struktural bangunan Anda."
      },
      {
        "q": "Bagaimana cara memesan survey lokasi gratis untuk proyek di Depok?",
        "a": "Cukup hubungi tim kami via WhatsApp di 0815-1481-1120. Tim surveyor teknis Majujaya akan menjadwalkan kunjungan gratis langsung ke lokasi proyek Anda di Depok dalam 1x24 jam."
      }
    ]
  },
  {
    "slug": "tangerang",
    "city": "Tangerang",
    "region": "Banten",
    "headline": "Jasa Bore Pile Tangerang – Pondasi Kawasan Residensial & Komersial BSD Serpong",
    "title": "Jasa Bore Pile Tangerang — BSD & Gading Serpong | Majujaya",
    "intro": "Kawasan Tangerang Raya (Tangerang Kota, Tangerang Selatan, BSD City, Gading Serpong, Karawaci, Alam Sutera, Bintaro) merupakan episentrum properti terpadat di barat Jakarta. Pembangunan ruko modern, pusat perbelanjaan, cluster perumahan bertingkat, dan gedung perkantoran menuntut standar pondasi bore pile yang presisi tinggi dan terverifikasi kelayakan geotekniknya.",
    "keywords": [
      "bore pile tangerang",
      "jasa bore pile tangerang",
      "kontraktor pondasi tangerang",
      "bore pile BSD",
      "strauss pile tangerang"
    ],
    "services": [
      "Bore Pile Pondasi",
      "Strauss Pile Manual",
      "Bore Pile Mesin",
      "Sumur Bor Air",
      "Soil Investigation"
    ],
    "areaCovered": [
      "Tangerang Kota",
      "Tangerang Selatan",
      "Cipondoh",
      "Ciledug",
      "Karawaci",
      "BSD City",
      "Gading Serpong",
      "Alam Sutera",
      "Bintaro",
      "Ciputat",
      "Pamulang",
      "Curug",
      "Kelapa Dua"
    ],
    "image": "/images/portfolio/08.jpg",
    "metaDesc": "Jasa bore pile & strauss pile Tangerang sejak 2013. Survey gratis, harga bersaing. Melayani BSD, Serpong, Karawaci & seluruh Tangerang. WA 0815-1481-1120.",
    "soilInfo": "Sebagian besar kawasan pemukiman baru di Tangerang dan Serpong dibangun di atas bekas perkebunan karet dan cekungan aluvial sungai Cisadane. Lapisan atas berupa lempung lunak dan tanah urugan dengan daya dukung rendah sedalam 4–8 meter. Lapisan tanah keras (bearing stratum N-SPT > 50) umumnya dijumpai pada kedalaman 12 hingga 20 meter. Fluktuasi muka air tanah di area dekat danau retensi atau aliran sungai mengharuskan pengendalian sirkulasi air saat pengeboran berlangsung.",
    "foundationRecommendation": "Pengembang di kawasan BSD City dan Gading Serpong umumnya mewajibkan penggunaan pondasi tiang bore pile untuk semua bangunan bertingkat demi mencegah keretakan dinding. Metode Bore Pile Mesin Mini Crane diameter 40–60 cm sangat cocok untuk ruko dan kavling mandiri, sedangkan metode Strauss Pile Manual sangat ideal untuk proyek renovasi hunian di perumahan yang sudah padat penghuni seperti Bintaro Jaya dan Karawaci.",
    "localContext": "Banyak kawasan di BSD City, Gading Serpong, dan Alam Sutera dibangun di atas tanah urugan dan bekas lahan perkebunan, sehingga lapisan atas perlu ditembus sebelum tiang mencapai tanah keras. Pengembang di Tangerang Selatan umumnya mensyaratkan pondasi tiang untuk bangunan bertingkat, dan kami menyesuaikan diameter serta kedalaman dengan beban bangunan. Untuk renovasi rumah di Bintaro, Karawaci, dan Ciledug yang sudah padat, strauss pile manual menjadi pilihan agar pekerjaan tidak mengganggu tetangga dan akses kendaraan besar tetap terbatas.",
    "faq": [
      {
        "q": "Mengapa banyak pengembang di BSD dan Gading Serpong mensyaratkan bore pile?",
        "a": "Karakteristik tanah urugan bekas perkebunan memiliki potensi diferensiasi penurunan tanah jika hanya menggunakan pondasi cakar ayam dangkal. Tiang bore pile memastikan beban bertumpu langsung pada formasi cadas/tanah keras di kedalaman belasan meter."
      },
      {
        "q": "Apakah mobilisasi alat bore pile diizinkan masuk ke dalam klaster perumahan BSD?",
        "a": "Ya, unit mesin mini crane dan peralatan strauss pile kami didesain kompak dengan bobot terukur sehingga tidak merusak paving block jalan lingkungan klaster perumahan modern di Tangerang."
      },
      {
        "q": "Berapa estimasi biaya bore pile per titik untuk rumah tinggal di Tangerang?",
        "a": `Biaya jasa bore pile mulai dari ${STRAUSS_FROM} per titik untuk strauss pile manual hingga ${MESIN_MAX} untuk bore pile mesin diameter besar. ${DISCLAIMER_LONG}`
      }
    ]
  },
  {
    "slug": "bekasi",
    "city": "Bekasi",
    "region": "Jawa Barat",
    "headline": "Jasa Bore Pile Bekasi – Pondasi Bangunan Bertingkat & Industri Tambun Bekasi",
    "title": "Jasa Bore Pile Bekasi — Tanah Ekspansif | Majujaya",
    "intro": "Bekasi merupakan gerbang timur metropolitan dengan dinamika pembangunan perumahan komersial skala besar, apartemen, ruko, dan sentra industri di Bekasi Kota, Bekasi Barat, Bekasi Timur, Medan Satria, hingga Tambun. Kondisi tanah ekspansif di sejumlah zona Bekasi menuntut solusi pondasi dalam bore pile yang sanggup menahan pergerakan kembang-susut tanah secara permanen.",
    "keywords": [
      "bore pile bekasi",
      "jasa bore pile bekasi",
      "kontraktor pondasi bekasi",
      "jasa bore pile tambun",
      "strauss pile bekasi"
    ],
    "services": [
      "Bore Pile Pondasi",
      "Strauss Pile Manual",
      "Bore Pile Mesin",
      "Sumur Bor Air",
      "Soil Investigation"
    ],
    "areaCovered": [
      "Bekasi Kota",
      "Bekasi Barat",
      "Bekasi Timur",
      "Bekasi Utara",
      "Bekasi Selatan",
      "Tambun Selatan",
      "Tambun Utara",
      "Medan Satria",
      "Rawalumbu",
      "Pondok Gede",
      "Jatiasih",
      "Bantar Gebang"
    ],
    "image": "/images/portfolio/09.jpg",
    "metaDesc": "Jasa bore pile & strauss pile Bekasi sejak 2013. Survey gratis, harga bersaing. Melayani Tambun, Bekasi Barat, Jatiasih & seluruh Bekasi. WA 0815-1481-1120.",
    "soilInfo": "Struktur tanah Bekasi didominasi endapan aluvial lempung hitam (black clay) yang bersifat ekspansif (mengembang saat basah dan menyusut drastis saat kemarau). Ketebalan lapisan lempung ini berkisar 4–8 meter. Lapisan tanah keras penopang tiang pondasi (N-SPT > 50) umumnya ditemukan pada kedalaman 10 hingga 16 meter di bawah permukaan. Daya dukung lateral tanah ekspansif memerlukan penulangan tiang bor yang memadai dengan besi ulir bersertifikat SNI.",
    "foundationRecommendation": "Pondasi dangkal di tanah Bekasi sering mengalami kegagalan struktural (lantai pecah bergelombang dan dinding retak tarik) akibat sifat kembang susut tanah lempung. Bore Pile Mesin diameter 40–60 cm merupakan pilihan utama untuk proyek ruko, perkantoran, dan rumah mewah di Summarecon Bekasi atau Grand Galaxy. Untuk pemukiman padat di Tambun atau Jatiasih, metode Strauss Pile Manual diameter 30–40 cm memberikan perlindungan struktur terbaik dengan harga bersahabat.",
    "localContext": "Sifat kembang susut lempung di Bekasi membuat lantai dan dinding bangunan rentan retak bila hanya memakai pondasi dangkal, terutama pada musim kemarau panjang. Ruko dan rumah mewah di Summarecon Bekasi serta Grand Galaxy umumnya memakai bore pile mesin, sedangkan hunian di Tambun dan Jatiasih lebih sering memakai strauss pile manual karena jalan lingkungan yang sempit. Kami memperhatikan penulangan tiang dan mutu beton agar tiang mampu menahan pergerakan tanah ekspansif, lalu mencatat setiap titik sebagai bukti pekerjaan.",
    "faq": [
      {
        "q": "Bagaimana bore pile mengatasi tanah lempung ekspansif di Bekasi?",
        "a": "Tiang bore pile menembus seluruh zona aktif kembang susut lempung atas hingga menancap kuat ke tanah keras stabil di bawahnya, sehingga pergerakan tanah permukaan saat pergantian musim tidak mempengaruhi kestabilan bangunan."
      },
      {
        "q": "Berapa lama proses pembuatan tiang bore pile per titik di Bekasi?",
        "a": "Dengan mesin rotary mini crane, proses pengeboran dan pengecoran per titik rata-rata memakan waktu 1 hingga 2 jam untuk kedalaman 10–12 meter pada kondisi tanah lempung standar Bekasi."
      },
      {
        "q": "Apakah tim Majujaya melayani proyek bore pile untuk ruko di pinggir jalan raya Bekasi?",
        "a": "Tentu. Kami berpengalaman menangani proyek komersial di pinggir jalan raya utama Bekasi dengan pengaturan sirkulasi buangan tanah bor yang rapi dan tertib lalu lintas."
      }
    ]
  },
  {
    "slug": "karawang",
    "city": "Karawang",
    "region": "Jawa Barat",
    "headline": "Jasa Bore Pile Karawang – Pengeboran Pondasi Pabrik Kawasan Industri KIIC Suryacipta",
    "title": "Jasa Bore Pile Karawang — Kawasan Industri | Majujaya",
    "intro": "Kabupaten Karawang adalah salah satu lumbung industri terbesar di Asia Tenggara dengan kawasan industri raksasa seperti KIIC, Surya Cipta, KIM, dan Karawang Barat. Pembangunan sarana manufaktur otomotif, elektronik, data center, gudang logistik, serta residensial di Galuh Mas dan Telukjambe membutuhkan kontraktor tiang bore pile berstandar industri dengan kapasitas rig mumpuni.",
    "keywords": [
      "bore pile karawang",
      "jasa bore pile karawang",
      "kontraktor pondasi karawang",
      "bore pile cikampek",
      "strauss pile karawang"
    ],
    "services": [
      "Bore Pile Pondasi",
      "Strauss Pile Manual",
      "Bore Pile Mesin",
      "Sumur Bor Air",
      "Soil Investigation"
    ],
    "areaCovered": [
      "Karawang Barat",
      "Karawang Timur",
      "Telukjambe Timur",
      "Telukjambe Barat",
      "Klari",
      "Cikampek",
      "Purwasari",
      "Ciampel",
      "Rengasdengklok",
      "Kawasan KIIC",
      "Kawasan Surya Cipta"
    ],
    "image": "/images/portfolio/10.jpg",
    "metaDesc": "Jasa bore pile & strauss pile Karawang. Survey gratis, harga bersaing. Melayani kawasan industri KIIC, Surya Cipta, Klari & Karawang. WA 0815-1481-1120.",
    "soilInfo": "Karakteristik tanah Karawang terbagi secara tegas antara zona selatan dan utara. Wilayah selatan (KIIC, Ciampel, Telukjambe) didominasi formasi perbukitan tuf lempung berpasir dengan kedalaman tanah keras berkisar 8 hingga 14 meter. Sebaliknya, wilayah utara mendekati pesisir Laut Jawa (Rengasdengklok, Batujaya) berupa dataran aluvial rawa dan sawah dengan tanah keras yang lebih dalam pada kisaran 16 hingga 22 meter.",
    "foundationRecommendation": "Untuk bangunan pabrik, instalasi mesin berat, dan gedung penyimpanan di KIIC atau Surya Cipta, tiang Bore Pile Mesin diameter 50–100 cm adalah standar mutlak untuk mengantisipasi getaran dinamis dan beban titik berat. Untuk proyek komersial ruko, minimarket, dan perumahan di Galuh Mas atau Klari, bore pile mini crane diameter 40–50 cm memberikan solusi cepat dan kokoh.",
    "localContext": "Karawang memadukan kawasan industri di KIIC, Surya Cipta, dan Klari dengan perumahan di Galuh Mas serta Telukjambe, sehingga kebutuhan pondasi sangat beragam. Pabrik dan gudang menuntut tiang bor berdiameter besar yang mampu menahan beban mesin dan getaran produksi, sementara ruko dan rumah cukup memakai tiang bor mini crane. Pada area utara yang mendekati pesisir, lapisan tanah lunak lebih tebal sehingga kedalaman tiang ditentukan setelah survey. Jadwal kerja di kawasan industri kami susun mengikuti aturan K3 dan jam operasional pabrik sekitar.",
    "faq": [
      {
        "q": "Apakah kontraktor Majujaya memenuhi standar K3 kawasan industri Karawang?",
        "a": "Ya, tim kami terbiasa mematuhi SOP K3 ketat kawasan industri termasuk penggunaan APD lengkap (helmet, safety vest, boots, safety glass), izin kerja panas/dingin (permit to work), dan inspeksi kelayakan peralatan."
      },
      {
        "q": "Bagaimana sistem mobilisasi armada bor Majujaya ke kawasan Karawang?",
        "a": "Armada kami dimobilisasi melalui Tol Jakarta–Cikampek langsung ke lokasi proyek di Karawang. Biaya mobilisasi dan demobilisasi sudah dirinci secara transparan dalam penawaran RAB resmi."
      },
      {
        "q": "Berapa kapasitas kedalaman pengeboran mesin bore pile Majujaya di Karawang?",
        "a": "Rig bore pile mesin kami mampu mengebor hingga kedalaman 30 meter dengan diameter hingga 100 cm, mencukupi seluruh kebutuhan pondasi industri berat di Karawang."
      }
    ]
  },
  {
    "slug": "cikarang",
    "city": "Cikarang",
    "region": "Jawa Barat",
    "headline": "Jasa Bore Pile Cikarang – Pondasi Mesin Beban Berat Jababeka, MM2100 & EJIP",
    "title": "Jasa Bore Pile Cikarang — Pabrik & Gudang | Majujaya",
    "intro": "Cikarang merupakan pusat manufaktur utama Indonesia dengan konsentrasi kawasan industri terpadat seperti Jababeka, MM2100, EJIP, Delta Silicon, GIIC, dan BIIE. Konstruksi pabrik modern, gudang e-commerce raksasa, pondasi mesin press bertekanan tinggi, serta fasilitas komersial di Cikarang membutuhkan tiang pondasi bore pile berdaya dukung tinggi dan toleransi kemiringan yang sangat ketat.",
    "keywords": [
      "bore pile cikarang",
      "jasa bore pile cikarang",
      "kontraktor pondasi cikarang",
      "bore pile kawasan industri cikarang",
      "strauss pile cikarang"
    ],
    "services": [
      "Bore Pile Pondasi",
      "Strauss Pile Manual",
      "Bore Pile Mesin",
      "Sumur Bor Air",
      "Soil Investigation"
    ],
    "areaCovered": [
      "Cikarang Pusat",
      "Cikarang Selatan",
      "Cikarang Barat",
      "Cikarang Timur",
      "Cikarang Utara",
      "Kawasan Jababeka",
      "Kawasan MM2100",
      "Kawasan EJIP",
      "Delta Silicon",
      "Cibitung",
      "Lemahabang"
    ],
    "image": "/images/portfolio/03.jpg",
    "metaDesc": "Jasa bore pile & strauss pile Cikarang sejak 2013. Survey gratis, harga bersaing. Melayani Jababeka, MM2100, EJIP, Delta Silicon. WA 0815-1481-1120.",
    "soilInfo": "Struktur geologi Cikarang umumnya berada pada dataran aluvial dengan formasi lempung lanauan kaku (stiff to very stiff clay). Kedalaman tanah keras pendukung tiang pancang atau bore pile (N-SPT > 50) biasanya dijumpai pada kedalaman 8 hingga 15 meter. Karakteristik tanah Cikarang tergolong stabil, namun adanya beban getaran mesin frekuensi tinggi pada pabrik manufaktur menuntut penanaman tiang pondasi hingga menyatu kuat dengan lapisan tanah keras dasar.",
    "foundationRecommendation": "Pondasi Bore Pile Mesin diameter 40–80 cm dengan mutu beton K-350 / fc 30 MPa menjadi pilihan wajib untuk instalasi struktur pabrik dan warehouse di Jababeka dan MM2100. Pengeboran tiang bor memberikan keuntungan signifikan dibandingkan tiang pancang karena tidak memicu getaran yang dapat mengganggu kalibrasi mesin-mesin presisi pabrik tetangga yang sedang beroperasi 24 jam.",
    "localContext": "Kawasan industri Cikarang seperti Jababeka, MM2100, dan Delta Silicon memiliki bangunan pabrik yang beroperasi hampir terus-menerus, sehingga metode pondasi tanpa getaran besar menjadi pertimbangan utama. Tiang bor mesin dipilih agar pengeboran tidak mengganggu kalibrasi mesin presisi di pabrik tetangga, dan mutu beton disesuaikan dengan beban struktur serta lantai kerja. Untuk fasilitas komersial dan hunian di Cibitung serta Lemahabang, kami menyesuaikan ukuran alat dengan lebar jalan dan ruang manuver yang tersedia di lokasi.",
    "faq": [
      {
        "q": "Mengapa bore pile lebih dipilih dibanding tiang pancang di kawasan industri Cikarang?",
        "a": "Tiang pancang menimbulkan gelombang getaran kejut tanah yang dapat mematikan sensor mesin presisi atau meretakkan lantai pabrik tetangga yang aktif berproduksi. Bore pile bebas getaran tumbukan sehingga dapat dikerjakan berdampingan dengan fasilitas operasional."
      },
      {
        "q": "Apakah tim Majujaya sanggup mengerjakan volume puluhan hingga ratusan titik di Cikarang?",
        "a": "Sanggup. Kami memiliki beberapa armada rig bor mesin mini crane dan kru profesional berpengalaman yang dapat bekerja simultan untuk mengejar jadwal serah terima proyek industri yang ketat."
      },
      {
        "q": "Bagaimana proses verifikasi kedalaman tanah keras di lokasi proyek Cikarang?",
        "a": "Kami melakukan uji sondir awal dan memantau sampel tanah bor (cutting sample) secara langsung saat proses pengeboran untuk memastikan mata bor telah menyentuh lapisan tanah keras sesuai gambar rencana."
      }
    ]
  },
  {
    "slug": "purwakarta",
    "city": "Purwakarta",
    "region": "Jawa Barat",
    "headline": "Jasa Bore Pile Purwakarta – Pondasi Kontur Perbukitan & Kawasan Industri Bukit Indah",
    "title": "Jasa Bore Pile Purwakarta — Industri & Ruko | Majujaya",
    "intro": "Kabupaten Purwakarta memadukan pusat kegiatan ekonomi perkotaan, perumahan komersial, dan kawasan industri modern seperti Kota Bukit Indah (BIC) serta koridor Sadang–Jatiluhur. Wilayah dengan variasi kontur perbukitan dan jalur seismik aktif ini membutuhkan konstruksi pondasi tiang bore pile yang dirancang kokoh menahan beban gravitasi maupun gempa bumi.",
    "keywords": [
      "bore pile purwakarta",
      "jasa bore pile purwakarta",
      "kontraktor pondasi purwakarta",
      "jasa bore pile jatiluhur",
      "strauss pile purwakarta"
    ],
    "services": [
      "Bore Pile Pondasi",
      "Strauss Pile Manual",
      "Bore Pile Mesin",
      "Sumur Bor Air",
      "Soil Investigation"
    ],
    "areaCovered": [
      "Purwakarta Kota",
      "Cibatu",
      "Bungursari",
      "Babakancikao",
      "Plered",
      "Sukatani",
      "Campaka",
      "Jatiluhur",
      "Pasawahan",
      "Darangdan",
      "Kota Bukit Indah"
    ],
    "image": "/images/portfolio/04.jpg",
    "metaDesc": "Jasa bore pile & strauss pile Purwakarta. Survey gratis, harga bersaing. Melayani Kota Bukit Indah, Bungursari, Sadang & Purwakarta. WA 0815-1481-1120.",
    "soilInfo": "Kondisi tanah di Purwakarta tergolong bervariasi karena dipengaruhi formasi batuan sedimen vulkanik Formasi Cantayan dan aluvial danau Jatiluhur. Di wilayah dataran industri utara (Bungursari, Bukit Indah, Cibatu), tanah keras dijumpai pada kedalaman 6 hingga 12 meter. Di area selatan dan barat yang berbukit (Plered, Sukatani, Pasawahan), sering dijumpai batuan andesit keras dan lapisan cadas pada kedalaman lebih dangkal (4–8 meter). Keberadaan segmen sesar aktif memerlukan perhatian ekstra pada elastisitas tulangan tiang bor.",
    "foundationRecommendation": "Untuk proyek pabrik, gudang, dan struktur berat di Kawasan Industri Bukit Indah BIC, bore pile mesin diameter 40–80 cm dengan mata bor coring batuan andesit adalah solusi paling handal. Untuk perumahan residensial dan ruko bertingkat di Purwakarta Kota atau Sadang, strauss pile manual atau mini crane diameter 30–40 cm sangat efisien dari segi biaya dan durasi.",
    "localContext": "Purwakarta memiliki dua karakter lahan yang berbeda: dataran industri di Bungursari dan Kota Bukit Indah, serta perbukitan di Plered dan Sukatani yang sering dijumpai lapisan cadas. Pada area industri, tiang bor mesin dipakai untuk menembus lapisan padat dan memikul beban gudang atau pabrik, sedangkan rumah dan ruko di Purwakarta Kota cukup memakai strauss pile manual. Karena wilayah ini berada di jalur gempa, penulangan tiang dan sambungan struktur kami periksa agar bangunan tetap aman terhadap guncangan.",
    "faq": [
      {
        "q": "Bagaimana cara bore pile menembus lapisan tanah berbatu cadas di Purwakarta?",
        "a": "Rig bore pile mesin kami dilengkapi mata bor khusus tipe rock auger dan roller cone bit yang dirancang khusus untuk memotong lapisan batuan vulkanik keras di wilayah Purwakarta secara efektif."
      },
      {
        "q": "Apakah kontur tanah lereng di Sukatani atau Jatiluhur membutuhkan pondasi khusus?",
        "a": "Ya, kami menerapkan perhitungan kedalaman tiang yang menjangkau batuan dasar stabil di bawah bidang gelincir lereng, serta memperkuat tulangan lentur tiang bor untuk menahan dorongan lateral tanah lereng."
      },
      {
        "q": "Berapa lama estimasi survey teknis tiba di Purwakarta dari Jakarta?",
        "a": "Surveyor kami dapat menjangkau seluruh lokasi proyek di Purwakarta melalui Tol Cipularang dalam waktu 1 hari kerja setelah kontak awal dikonfirmasi."
      }
    ]
  },
  {
    "slug": "serang",
    "city": "Serang",
    "region": "Banten",
    "headline": "Jasa Bore Pile Serang – Solusi Pondasi Wilayah Pesisir & Ibu Kota Banten",
    "title": "Jasa Bore Pile Serang — Survey Lokasi Gratis | Majujaya",
    "intro": "Sebagai ibu kota Provinsi Banten, Kota dan Kabupaten Serang mengalami pertumbuhan pesat pada sektor fasilitas publik, pergudangan, perumahan modern, dan sentra industri di koridor Cikande, Kragilan, hingga pesisir Kasemen dan Anyer. Karakteristik wilayah pesisir dan dataran aluvial menuntut kontraktor bore pile dengan spesifikasi ketahanan korosi dan daya dukung tiang prima.",
    "keywords": [
      "bore pile serang",
      "jasa bore pile serang",
      "kontraktor pondasi serang",
      "bore pile serang banten",
      "strauss pile serang"
    ],
    "services": [
      "Bore Pile Pondasi",
      "Strauss Pile Manual",
      "Bore Pile Mesin",
      "Sumur Bor Air",
      "Soil Investigation"
    ],
    "areaCovered": [
      "Serang Kota",
      "Cipocok Jaya",
      "Curug",
      "Taktakan",
      "Kasemen",
      "Walantaka",
      "Ciruas",
      "Kragilan",
      "Cikande",
      "Anyer",
      "Kramatwatu"
    ],
    "image": "/images/portfolio/05.jpg",
    "metaDesc": "Jasa bore pile & strauss pile Serang. Survey gratis, harga bersaing. Melayani Cikande, Ciruas, Serang Kota, Anyer & seluruh Banten. WA 0815-1481-1120.",
    "soilInfo": "Struktur geologi wilayah Serang utara (Kasemen, Ciruas, Pontang) dipengaruhi endapan pantai Teluk Banten dengan dominasi lempung lunak dan muka air tanah tinggi. Kedalaman tanah keras pendukung pondasi berada di kisaran 10 hingga 20 meter. Di wilayah Serang tengah dan selatan (Serang Kota, Curug, Cipocok), tanah berupa lempung tufaan yang lebih padat dengan tanah keras pada kedalaman 8 hingga 14 meter. Daerah pesisir Anyer dan Teluk Banten memiliki air tanah payau yang menuntut mutu material beton berstandar anti-korosi.",
    "foundationRecommendation": "Untuk kawasan industri padat Cikande dan Kragilan, tiang Bore Pile Mesin Mini Crane diameter 40–80 cm dengan sistem pengecoran pipa tremi menjamin kepadatan tiang beton di bawah muka air tanah. Untuk ruko, rukan, dan perumahan di Serang Kota dan Cipocok Jaya, Strauss Pile Manual diameter 30–40 cm menawarkan solusi ekonomis yang cepat selesai tanpa mengorbankan keamanan struktur.",
    "localContext": "Serang utara seperti Kasemen dan Ciruas berada di dataran pesisir dengan muka air tanah tinggi, sedangkan Serang Kota dan Cipocok Jaya memiliki tanah yang lebih padat. Perbedaan ini membuat metode pengecoran dan kebutuhan casing di tiap area tidak sama, terutama untuk gudang dan pabrik di koridor Cikande serta Kragilan. Di pesisir Anyer, air tanah yang payau menjadi pertimbangan dalam memilih mutu beton dan perlindungan tulangan. Untuk ruko dan perumahan di Serang Kota, strauss pile manual memberi solusi cepat dengan gangguan lingkungan yang minimal.",
    "faq": [
      {
        "q": "Bagaimana perlindungan tiang bore pile terhadap air tanah payau di pesisir Serang?",
        "a": "Kami merekomendasikan pemakaian semen tahan sulfat atau campuran beton dengan slump terkontrol dan selimut beton tebal (minimal 6 cm) agar tulangan besi terlindung sempurna dari penetrasi ion klorida air laut."
      },
      {
        "q": "Apakah Majujaya melayani proyek bore pile di Kawasan Industri Modern Cikande?",
        "a": "Ya, kami siap melayani proyek gudang, pabrik, dan kantor di Modern Cikande Industrial Estate dengan kepatuhan penuh terhadap standar mutu konstruksi dan jadwal yang disepakati."
      },
      {
        "q": "Apakah survey lokasi ke Kota Serang benar-benar bebas biaya?",
        "a": "Ya, layanan survey lokasi, pengukuran lapangan, dan RAB estimasi biaya dari Majujaya bersifat 100% gratis untuk seluruh wilayah Serang dan sekitarnya."
      }
    ]
  },
  {
    "slug": "cilegon",
    "city": "Cilegon",
    "region": "Banten",
    "headline": "Jasa Bore Pile Cilegon – Pondasi Industri Berat, Pabrik Baja & Petrokimia Merak",
    "title": "Jasa Bore Pile Cilegon — Kawasan Industri | Majujaya",
    "intro": "Kota Cilegon dikenal luas sebagai 'Kota Baja' dan episentrum industri petrokimia, pembangkit listrik, dan pelabuhan internasional di Selat Sunda. Pembangunan fasilitas pengolahan, tangki penyimpanan cairan kimia, pipa perpipaan berat, dan workshop alat industri di Ciwandan, Merak, Citangkil, hingga Gerogol menuntut pondasi bore pile dengan daya dukung tiang ekstra besar dan ketahanan kimiawi tinggi.",
    "keywords": [
      "bore pile cilegon",
      "jasa bore pile cilegon",
      "kontraktor pondasi cilegon",
      "bore pile merak",
      "strauss pile cilegon"
    ],
    "services": [
      "Bore Pile Pondasi",
      "Strauss Pile Manual",
      "Bore Pile Mesin",
      "Sumur Bor Air",
      "Soil Investigation"
    ],
    "areaCovered": [
      "Cilegon Kota",
      "Ciwandan",
      "Merak",
      "Pulomerak",
      "Gerogol",
      "Citangkil",
      "Jombang",
      "Cibeber",
      "Grogol Cilegon",
      "Krakatau Industrial Estate"
    ],
    "image": "/images/portfolio/06.jpg",
    "metaDesc": "Jasa bore pile & strauss pile Cilegon sejak 2013. Survey gratis, harga bersaing. Melayani kawasan industri Merak, Ciwandan & seluruh Cilegon. WA 0815-1481-1120.",
    "soilInfo": "Formasi geologi Cilegon tergolong kompleks karena pertemuan daerah pantai Selat Sunda dengan gugusan perbukitan andesit Gede-Merak. Pada zona pesisir (Ciwandan, Merak), tanah atas berupa endapan pasir aluvial dan lanau lunak dengan tanah keras di kedalaman 12 hingga 22 meter. Pada zona dataran timur (Cibeber, Jombang), lapisan batuan cadas dapat ditemukan pada kedalaman 6 hingga 12 meter. Getaran mesin industri berat dan paparan aerosol laut mengharuskan pemilihan diameter tiang dan mutu beton di atas rata-rata.",
    "foundationRecommendation": "Metode Bore Pile Mesin sistem rotary hidrolik dengan diameter 50–100 cm adalah solusi mutlak untuk proyek skala industri berat di Krakatau Industrial Estate (KIEC) dan Ciwandan. Sistem pengeboran coring sanggup menembus lapisan lensa batuan keras pesisir tanpa menimbulkan keretakan pada instalasi pipa industri gas atau BBM di dekatnya.",
    "localContext": "Sebagai kawasan industri berat, Cilegon menuntut pondasi yang mampu menahan beban struktur besar dan getaran mesin, terutama di Ciwandan, Merak, dan Krakatau Industrial Estate. Lapisan batuan pesisir yang tidak seragam membuat pengeboran perlu penyesuaian mata bor dan kedalaman di setiap titik. Paparan udara laut yang mengandung garam juga menjadi alasan untuk memperhatikan mutu beton serta selimut tulangan. Untuk workshop dan fasilitas penunjang di Citangkil dan Gerogol, kami menyusun metode kerja agar pekerjaan tidak mengganggu instalasi pipa dan jalur operasional sekitar.",
    "faq": [
      {
        "q": "Bagaimana cara kerja bore pile di dekat instalasi pipa gas atau minyak di Cilegon?",
        "a": "Bore pile tidak menghasilkan getaran hentakan tanah seperti tiang pancang, sehingga sangat aman dilakukan di samping pipa utilitas gas, pipa kimia, dan tangki bertekanan tanpa memicu kebocoran sambungan pipa."
      },
      {
        "q": "Apakah tim Majujaya menyediakan laporan dokumentasi per titik bor untuk auditor industri?",
        "a": "Ya, kami mencatat dan mendokumentasikan setiap titik pengeboran (boring log, kedalaman riil tanah keras, volume beton yang masuk, foto pengerjaan) sebagai lampiran berita acara serah terima resmi."
      },
      {
        "q": "Berapa lama persiapan mobilisasi rig bor mesin ke kawasan industri Cilegon?",
        "a": "Dengan akses jalan tol Jakarta–Merak yang terhubung langsung, armada mesin bor kami dapat tiba di kawasan industri Cilegon dalam 1x24 jam setelah izin kerja (SIMAK/permit) diterbitkan."
      }
    ]
  },
  {
    "slug": "subang",
    "city": "Subang",
    "region": "Jawa Barat",
    "headline": "Jasa Bore Pile Subang – Pondasi Tanah Aluvial Persawahan & Jalur Pantura Subang",
    "title": "Jasa Bore Pile Subang — Patimban & Pantura | Majujaya",
    "intro": "Kabupaten Subang tengah mengalami lompatan industri dan infrastruktur pesat seiring beroperasinya Pelabuhan Internasional Patimban dan koridor industri baru Subang Smartpolitan. Pembangunan pergudangan ekspor-impor, kawasan komersial, perumahan, serta ruko di Subang Kota, Pagaden, Pamanukan, hingga Kalijati membutuhkan kontraktor pondasi bore pile yang handal menangani tanah persawahan dan aluvial pesisir.",
    "keywords": [
      "bore pile subang",
      "jasa bore pile subang",
      "kontraktor pondasi subang",
      "strauss pile subang"
    ],
    "services": [
      "Bore Pile Pondasi",
      "Strauss Pile Manual",
      "Bore Pile Mesin",
      "Sumur Bor Air",
      "Soil Investigation"
    ],
    "areaCovered": [
      "Subang Kota",
      "Ciasem",
      "Patokbeusi",
      "Pagaden",
      "Pamanukan",
      "Binong",
      "Cibogo",
      "Cipeundeuy",
      "Kalijati",
      "Patimban",
      "Purwadadi"
    ],
    "image": "/images/portfolio/01.jpg",
    "metaDesc": "Jasa bore pile & strauss pile Subang sejak 2013. Survey gratis, harga bersaing. Melayani kawasan Patimban, Cipeundeuy, Pamanukan & Subang. WA 0815-1481-1120.",
    "soilInfo": "Karakteristik tanah Subang terbagi tajam antara utara dan selatan. Zona Pantura (Pamanukan, Patokbeusi, Ciasem, Patimban) merupakan dataran aluvial rawa dan bekas persawahan dengan tanah lempung sangat lunak dan muka air tanah tinggi sedalam 0,5–2 meter. Tanah keras di utara berada pada kedalaman 12 hingga 22 meter. Sedangkan zona selatan (Subang Kota, Cibogo, Cipeundeuy) memiliki formasi tanah lempung tufaan perbukitan yang lebih padat dengan tanah keras pada kedalaman 6 hingga 12 meter.",
    "foundationRecommendation": "Untuk kawasan pergudangan dan logistik penunjang Pelabuhan Patimban dan kawasan industri Cipeundeuy, tiang Bore Pile Mesin diameter 40–80 cm dengan bantuan temporary casing wajib diterapkan untuk mencegah runtuhnya dinding bor di lapisan lempung berair. Untuk ruko dan perumahan di Subang Kota atau Pagaden, metode Strauss Pile Manual diameter 30–40 cm sangat efisien dan terjangkau.",
    "localContext": "Subang memiliki dua wajah tanah yang kontras: dataran aluvial dan bekas sawah di Pamanukan, Ciasem, serta Patimban, dan perbukitan di Cipeundeuy serta Kalijati. Pergudangan penunjang Pelabuhan Patimban membutuhkan tiang bor yang menembus lempung berair dengan bantuan casing, sementara ruko dan rumah di Subang Kota serta Pagaden cukup memakai strauss pile manual. Muka air tanah yang tinggi di wilayah utara membuat kami merencanakan pompa dan pengaturan lumpur agar lubang bor tetap bersih dan pekerjaan berjalan lancar.",
    "faq": [
      {
        "q": "Bagaimana solusi pondasi di area bekas sawah berlumpur di Subang Pantura?",
        "a": "Pondasi bore pile menembus seluruh lapisan lumpur sawah atas sampai ujung bawah tiang bertumpu mantap pada lapisan pasir padat atau lempung keras di bawahnya, meniadakan risiko amblas secara permanen."
      },
      {
        "q": "Apakah Majujaya melayani proyek bore pile penunjang Pelabuhan Patimban?",
        "a": "Ya, kami melayani proyek fasilitas penunjang pergudangan, kantor logistik, ruko komersial, dan workshop di koridor Patimban dan akses jalan tol Subang."
      },
      {
        "q": "Bagaimana cara mengatur jadwal survey lokasi gratis untuk proyek di Subang?",
        "a": "Hubungi WhatsApp kami di 0815-1481-1120 dengan mencantumkan koordinat lokasi proyek. Tim teknis kami akan mengonfirmasi jadwal survey gratis dalam 1x24 jam."
      }
    ]
  },
  {
    "slug": "cianjur",
    "city": "Cianjur",
    "region": "Jawa Barat",
    "headline": "Jasa Bore Pile Cianjur – Pondasi Tahan Gempa & Daerah Pegunungan Cipanas Cianjur",
    "title": "Jasa Bore Pile Cianjur — Villa & Lereng | Majujaya",
    "intro": "Membangun di Kabupaten Cianjur (Cianjur Kota, Cipanas, Pacet, Sukaresmi, Cilaku) memerlukan perhatian geoteknik khusus mengingat daerah ini berada di jalur aktivitas seismik aktif (Sesar Cugenang & Sesar Cimandiri) serta memiliki kontur lereng pegunungan. Pondasi bore pile bertulang kokoh menjadi standar rekayasa penting untuk menjamin bangunan tahan guncangan gempa dan pergeseran tanah lereng.",
    "keywords": [
      "bore pile cianjur",
      "jasa bore pile cianjur",
      "kontraktor pondasi cianjur",
      "strauss pile cianjur"
    ],
    "services": [
      "Bore Pile Pondasi",
      "Strauss Pile Manual",
      "Bore Pile Mesin",
      "Sumur Bor Air",
      "Soil Investigation"
    ],
    "areaCovered": [
      "Cianjur Kota",
      "Cipanas",
      "Pacet",
      "Sukaresmi",
      "Cilaku",
      "Cibeber",
      "Bojongpicung",
      "Karangtengah",
      "Cugenang",
      "Warungkondang",
      "Ciranjang"
    ],
    "image": "/images/portfolio/02.jpg",
    "metaDesc": "Jasa bore pile & strauss pile Cianjur sejak 2013. Survey gratis, harga bersaing. Melayani Cipanas, Pacet, Cianjur Kota & seluruh area. WA 0815-1481-1120.",
    "soilInfo": "Struktur geologi Cianjur didominasi endapan vulkanik Gunung Gede-Pangrango berupa breksi, lahar, dan tuf lempungan. Di wilayah pegunungan Cipanas dan Pacet, lapisan batuan keras dan cadas dijumpai pada kedalaman relatif dangkal (4–10 meter). Namun, kemiringan lereng yang curam menuntut pondasi tiang yang diangkurkan ke lapisan batuan dasar untuk mencegah bahaya gelincir lereng saat gempa bumi. Di Cianjur Kota dan Cilaku, tanah keras berada pada kedalaman 8 hingga 14 meter.",
    "foundationRecommendation": "Untuk villa, resort, dan perumahan di Cipanas, Cugenang, dan Pacet, bore pile mesin diameter 40–60 cm yang diperkuat besi tulangan ulir penuh (full cage rebar) sesuai kaidah SNI 1726 (Tata Cara Perencanaan Ketahanan Gempa untuk Struktur Gedung) merupakan pilihan wajib. Untuk renovasi rumah bertingkat di pemukiman Cianjur Kota, metode strauss pile manual diameter 30–40 cm memberikan fleksibilitas kerja yang aman dan terjangkau.",
    "localContext": "Cianjur berada di jalur gempa aktif dan memiliki kontur lereng pegunungan, sehingga pondasi tiang harus dirancang dengan penulangan yang memadai dan diteruskan ke lapisan batuan dasar. Villa dan penginapan di Cipanas, Pacet, serta Cugenang memerlukan tiang bor mesin yang stabil di lahan miring, sedangkan renovasi rumah di Cianjur Kota lebih sering memakai strauss pile manual. Kondisi lereng juga membuat kami memeriksa arah aliran air dan stabilitas tanah sekitar sebelum menentukan titik bor dan kedalaman tiang.",
    "faq": [
      {
        "q": "Mengapa desain penulangan tiang bore pile di Cianjur harus memperhitungkan faktor gempa?",
        "a": "Saat gempa terjadi, gaya lateral dan momen lentur tinggi bekerja pada tiang pondasi. Pemasangan tulangan besi ulir dengan rasio sengkang spiral rapat memastikan tiang bore pile memiliki daktilitas tinggi dan tidak patah di bawah tanah."
      },
      {
        "q": "Bagaimana pengeboran dilakukan pada lahan berkontur curam di area Cipanas?",
        "a": "Kami melakukan perataan dudukan alat kerja bertingkat (terasing sementara) demi keamanan operator dan stabilitas vertikalitas tiang bor agar sudut tiang tegak lurus sempurna 90 derajat."
      },
      {
        "q": "Berapa lama estimasi pengerjaan tiang bore pile untuk villa di Cipanas atau Pacet?",
        "a": "Untuk proyek villa standar (8–12 titik tiang bor kedalaman 6–10 meter), waktu pengerjaan berkisar 3 sampai 5 hari kerja tergantung kekerasan lapisan batuan vulkanik di lokasi."
      }
    ]
  }
];

const LOCATION_COORDS = {
  serang: [-6.12, 106.15],
  cilegon: [-6.04, 106.05],
  tangerang: [-6.18, 106.63],
  "jakarta-barat": [-6.17, 106.75],
  "jakarta-utara": [-6.12, 106.88],
  "jakarta-pusat": [-6.18, 106.83],
  "jakarta-timur": [-6.23, 106.9],
  "jakarta-selatan": [-6.26, 106.82],
  depok: [-6.4, 106.82],
  bekasi: [-6.24, 106.99],
  cikarang: [-6.3, 107.15],
  karawang: [-6.3, 107.3],
  purwakarta: [-6.55, 107.45],
  subang: [-6.57, 107.7],
  bogor: [-6.59, 106.79],
  cianjur: [-6.82, 107.13],
};

function dist2(a, b) {
  const dLat = a[0] - b[0];
  const dLng = a[1] - b[1];
  return dLat * dLat + dLng * dLng;
}

/* ── Shared per-location SEO content: cross-links + expanded paragraph ── */
const WORKSHOP_SLUG = "jakarta-selatan"; // workshop & pool armada Majujaya

// Approximate straight-line distance in km (haversine) between two [lat, lng] pairs
function distKm(a, b) {
  const R = 6371;
  const rad = (d) => (d * Math.PI) / 180;
  const dLat = rad(b[0] - a[0]);
  const dLng = rad(b[1] - a[1]);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(rad(a[0])) * Math.cos(rad(b[0])) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

function joinList(items) {
  if (items.length <= 1) return items.join("");
  return `${items.slice(0, -1).join(", ")} dan ${items[items.length - 1]}`;
}

export function getLocationDetail(location) {
  const here = LOCATION_COORDS[location.slug];
  const others = locationPages
    .filter((l) => l.slug !== location.slug)
    .sort((a, b) => {
      if (!here) return 0;
      return dist2(LOCATION_COORDS[a.slug] || here, here) - dist2(LOCATION_COORDS[b.slug] || here, here);
    })
    .slice(0, 4)
    .map((l) => ({ title: `Jasa Bore Pile ${l.city}`, href: `/location/${l.slug}/` }));

  const city = location.city;
  const region = location.region;
  const idx = Math.max(0, locationPages.findIndex((l) => l.slug === location.slug));
  const areas = joinList((location.areaCovered || []).slice(0, 3));
  const nearby = joinList(
    others.slice(0, 2).map((o) => o.title.replace("Jasa Bore Pile ", ""))
  );

  const workshop = LOCATION_COORDS[WORKSHOP_SLUG];
  const km = here && location.slug !== WORKSHOP_SLUG ? Math.round(distKm(workshop, here) / 5) * 5 : 0;

  // Paragraph 1: who we are + where exactly (varied sentence structure, city-specific areas & neighbours)
  const intros = [
    `Majujaya melayani jasa bore pile ${city} dan strauss pile di ${city}, ${region}, dengan titik kerja yang kerap berada di ${areas}. Mulai dari rumah tinggal, ruko, hingga bangunan komersial dan industri, setiap titik pengeboran dikerjakan dengan metode standar, diawasi langsung, dan didokumentasikan.`,
    `Pemilik bangunan di wilayah ${areas} maupun sekitarnya dapat memakai jasa bore pile ${city} dari Majujaya, baik untuk pondasi bore pile maupun strauss pile. Kami berpengalaman lebih dari 12 tahun dengan 250+ titik pengeboran selesai, dan wilayah ${city} masuk dalam jangkauan layanan rutin kami bersama ${nearby}.`,
    `Untuk proyek pondasi dalam di ${city}, ${region}, tim Majujaya menangani jasa bore pile ${city} dari tahap survey, penentuan kedalaman dan diameter tiang, pengeboran, hingga pengecoran. Area yang paling sering kami layani meliputi ${areas}, dengan hasil kerja yang dicatat per titik sebagai bentuk transparansi.`,
  ];

  // Paragraph 2: survey/RAB + mobilization that depends on real distance from our workshop
  let mobil;
  if (!km) {
    mobil = `Workshop dan pool armada kami berada di ${city}, sehingga mobilisasi alat ke lokasi proyek dapat dilakukan dengan cepat, biasanya dalam 1x24 jam setelah deal disepakati.`;
  } else if (km <= 60) {
    mobil = `Lokasi ${city} berjarak sekitar ${km} km dari workshop kami di Jakarta Selatan, sehingga mobilisasi alat dapat dimulai dalam 1x24 jam setelah deal disepakati.`;
  } else {
    mobil = `Lokasi ${city} berjarak sekitar ${km} km dari workshop kami di Jakarta Selatan. Jadwal mobilisasi dikonfirmasi saat survey, dan biaya mobilisasi serta demobilisasi dirinci terbuka di dalam RAB.`;
  }
  const surveys = [
    `Sebelum pekerjaan dimulai, survey lokasi gratis dilakukan untuk menentukan kedalaman, diameter, dan jenis tiang yang paling efisien di ${city}: bore pile mesin untuk beban besar, atau strauss pile manual untuk akses sempit. Estimasi biaya (RAB) diberikan tanpa biaya dan tanpa biaya tersembunyi. ${mobil}`,
    `Konsultasi awal untuk proyek di ${city} gratis: tim kami meninjau lokasi, membaca kondisi tanah, lalu menyusun RAB rinci per titik. Kami menyediakan bore pile mesin dan strauss pile manual sesuai kebutuhan bangunan. ${mobil}`,
    `Langkah awalnya sederhana: hubungi kami via WhatsApp, kami jadwalkan survey gratis ke lokasi di ${city}, lalu kirim RAB yang jelas dan terperinci. ${mobil} Jenis tiang, bore pile mesin atau strauss pile manual, disesuaikan dengan beban bangunan dan akses lokasi.`,
  ];

  const localContext = location.localContext ? `\n\n${location.localContext}` : '';
  const paragraph = `${intros[idx % 3]}\n\n${surveys[(idx + 1) % 3]}${localContext}`;

  return { others, paragraph };
}

export const howItWorks = [
  {
    step: "01",
    title: "Konsultasi & Survey",
    desc: "Hubungi kami via WA. Tim kami akan survey lokasi dan kebutuhan pengeboran Anda secara gratis.",
  },
  {
    step: "02",
    title: "RAB & Deal",
    desc: "Kami kirimkan RAB detail. Setelah deal, jadwal pengerjaan segera kami tentukan.",
  },
  {
    step: "03",
    title: "Pengerjaan",
    desc: "Tim & alat turun ke lokasi. Pengerjaan sesuai standar operasional & pengawasan ketat.",
  },
  {
    step: "04",
    title: "Selesai & Serah Terima",
    desc: "Hasil diperiksa bersama. Dokumentasi pengeboran diberikan untuk setiap titik yang kami kerjakan.",
  },
];

export const faq = [
  {
    q: "Apa itu borepile dan kapan saya butuh?",
    a: "Borepile adalah teknik pengeboran dalam untuk pondasi bangunan. Anda butuh borepile jika membangun rumah bertingkat, ruko, atau gedung di area dengan kondisi tanah lunak. Kami melayani jasa bore pile di Jakarta, Bogor, Depok, Tangerang, Bekasi, dan seluruh Indonesia."
  },
  {
    q: "Berapa biaya jasa bore pile per titik?",
    a: `Biaya jasa mulai dari ${STRAUSS_FROM} per titik untuk strauss pile manual (diameter 30–40 cm) dan mulai ${MESIN_FROM} per titik untuk bore pile mesin mini crane. ${DISCLAIMER_LONG}`
  },
  {
    q: "Berapa lama proses pengerjaan bore pile dari survey hingga selesai?",
    a: "Setelah survey lokasi dan deal disepakati, tim kami dapat mulai mobilisasi dalam 1x24 jam. Proses pengeboran rata-rata 1-3 hari per titik, atau total 3-7 hari kerja untuk proyek rumah atau ruko standar tergantung jumlah titik dan kondisi tanah."
  },
  {
    q: "Apakah survey lokasi gratis?",
    a: "Ya, survey lokasi dan konsultasi awal GRATIS tanpa biaya. Kami akan datang ke lokasi untuk mengukur kondisi tanah dan kebutuhan pengeboran Anda di seluruh Jabodetabek dan Karawang-Cikarang-Purwakarta area."
  },
  {
    q: "Gimana kalau hasil pengeboran gak keluar air?",
    a: "Kami akan evaluasi dan cari solusi terbaik, termasuk pengeboran ulang di titik lain jika diperlukan. Pekerjaan akan disesuaikan dengan hasil yang disepakati awal. Tim kami ahli dalam kondisi tanah keras di Jakarta dan sekitarnya."
  },
  {
    q: "Wilayah mana saja yang dilayani?",
    a: "Kami melayani jasa bore pile Jakarta Selatan, Jakarta Pusat, Jakarta Barat, Jakarta Timur, dan Jakarta Utara, serta seluruh Jabodetabek. Selain itu Karawang, Cikarang, Purwakarta, Serang, Cilegon, Subang, Cianjur, dan proyek di seluruh Indonesia."
  },
  {
    q: "Apa perbedaan bore pile mesin dan strauss pile manual?",
    a: "Bore pile mesin menggunakan rig bertenaga mesin untuk pengeboran dalam diameter 30-100cm dengan kedalaman hingga 30 meter. Strauss pile manual menggunakan tenaga putar manusia untuk diameter 30-40cm pada kedalaman 6-15 meter. Kami menyediakan keduanya sesuai kebutuhan proyek Anda."
  },
  {
    q: "Bagaimana dengan kualitas dan standar pekerjaan?",
    a: "Setiap pekerjaan dilakukan sesuai standar teknis yang berlaku oleh tim berpengalaman 12+ tahun. Hasil pengeboran diverifikasi berdasarkan spesifikasi yang telah disepakati sebelumnya bersama klien."
  },
];

export const footer = {
  company: "MAJUJAYA BORE PILE",
  legacyNote: "Website resmi terbaru Majujaya Bore Pile (sebelumnya majujayaborepile.com).",
  tagline: "Jasa Bore Pile & Strauss Pile Profesional",
  address:
    "JL. SUNTER MUARA NO.7, RT.7/RW.5, SUNTER AGUNG, TANJUNG PRIOK, JAKARTA UTARA",
  phone: "081514811120",
  wa: "6281514811120",
  wa2: "6281284499082",
  email: "info@borepilemajujaya.com",
  hours: "Senin - Jum'at: 08.00 - 17.00",
  blogLinks: [
    { title: "Blog Bore Pile", href: "/blog/" },
    { title: "Apa Itu Borepile? Panduan Lengkap", href: "/blog/apa-itu-borepile-panduan-lengkap.html" },
    { title: "Harga Bore Pile per Titik 2026", href: "/blog/harga-bore-pile-per-titik-2026.html" },
    { title: "7 Tips Memilih Kontraktor Bore Pile Jakarta", href: "/blog/tips-memilih-kontraktor-bore-pile-jakarta.html" },
    { title: "Perbedaan Strauss Pile dan Bore Pile", href: "/blog/perbedaan-strauss-pile-dan-bore-pile.html" },
    { title: "Bore Pile untuk Rumah 2 Lantai", href: "/blog/bore-pile-untuk-rumah-2-lantai.html" },
    { title: "Bore Pile vs Tiang Pancang", href: "/blog/bore-pile-vs-tiang-pancang.html" },
    { title: "Pondasi Rumah di Tanah Lembek", href: "/blog/pondasi-rumah-di-tanah-lembek.html" },
    { title: "Sondir & Soil Test Sebelum Pondasi", href: "/blog/sondir-dan-soil-test-sebelum-pondasi.html" },
    { title: "Pondasi Ruko Bertingkat", href: "/blog/pondasi-ruko-bertingkat-bore-pile-atau-strauss.html" },
    { title: "Bore Pile untuk Gudang & Pabrik", href: "/blog/bore-pile-untuk-gudang-dan-pabrik.html" },
  ],
  serviceLinks: [
    { title: "Jasa Bore Pile Jakarta Pusat", href: "/location/jakarta-pusat/" },
    { title: "Jasa Bore Pile Jakarta Selatan", href: "/location/jakarta-selatan/" },
    { title: "Jasa Bore Pile Jakarta Barat", href: "/location/jakarta-barat/" },
    { title: "Jasa Bore Pile Jakarta Timur", href: "/location/jakarta-timur/" },
    { title: "Jasa Bore Pile Jakarta Utara", href: "/location/jakarta-utara/" },
    { title: "Jasa Bore Pile Bogor", href: "/location/bogor/" },
    { title: "Jasa Bore Pile Tangerang", href: "/location/tangerang/" },
    { title: "Jasa Bore Pile Bekasi", href: "/location/bekasi/" },
    { title: "Jasa Bore Pile Depok", href: "/location/depok/" },
    { title: "Jasa Bore Pile Karawang", href: "/location/karawang/" },
    { title: "Jasa Bore Pile Cikarang", href: "/location/cikarang/" },
    { title: "Jasa Bore Pile Purwakarta", href: "/location/purwakarta/" },
    { title: "Jasa Bore Pile Serang", href: "/location/serang/" },
    { title: "Jasa Bore Pile Cilegon", href: "/location/cilegon/" },
    { title: "Jasa Bore Pile Subang", href: "/location/subang/" },
    { title: "Jasa Bore Pile Cianjur", href: "/location/cianjur/" },
  ],
  privacy: "Data Anda hanya digunakan untuk menanggapi pertanyaan dan tidak dibagikan ke pihak ketiga.",
};
