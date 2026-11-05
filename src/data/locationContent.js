import { PRICE_DISCLAIMER_TEXT } from "./siteFacts.js";
import LOCATION_EXPANDED from "./locationExpanded.json" with { type: "json" };

const WA_NUMBER = "6281514811120";
const WA_BASE = `https://api.whatsapp.com/send/?phone=${WA_NUMBER}&text=`;

function faqFor(city) {
  return [
    {
      q: `Apakah survey di ${city} gratis?`,
      a: "Ya. Survey lokasi dan konsultasi awal gratis di seluruh wilayah yang kami layani.",
    },
    {
      q: "Bagaimana kalau rumah saya berada di gang sempit?",
      a: "Sebutkan lebar gang saat Anda mengirim pesan. Setelah survey, kami menentukan metode yang bisa masuk. Strauss pile manual tidak membutuhkan alat besar, jadi sering menjadi pilihan di lokasi seperti itu.",
    },
    {
      q: "Berapa lama pengerjaannya?",
      a: "Pengeboran rata-rata 1 sampai 3 hari per titik. Rumah atau ruko standar selesai dalam 3 sampai 7 hari kerja, tergantung jumlah titik dan kondisi tanah. Mobilisasi dimulai dalam 1x24 jam setelah penawaran disepakati.",
    },
  ];
}

function waUrl(city) {
  return (
    WA_BASE +
    encodeURIComponent(
      `Halo Majujaya, saya mau survey lokasi bore pile di ${city}. Lokasi proyek saya: `
    )
  );
}

function link(text, href) {
  return { text, href };
}

const ARTICLES = {
  softSoil: {
    title: "Pondasi Rumah di Tanah Lembek",
    href: "/blog/pondasi-rumah-di-tanah-lembek.html",
  },
  twoStory: {
    title: "Bore Pile untuk Rumah 2 Lantai",
    href: "/blog/bore-pile-untuk-rumah-2-lantai.html",
  },
  ruko: {
    title: "Pondasi Ruko Bertingkat",
    href: "/blog/pondasi-ruko-bertingkat-bore-pile-atau-strauss.html",
  },
  industrial: {
    title: "Bore Pile untuk Gudang dan Pabrik",
    href: "/blog/bore-pile-untuk-gudang-dan-pabrik.html",
  },
  soilTest: {
    title: "Sondir dan Soil Test Sebelum Pondasi",
    href: "/blog/sondir-dan-soil-test-sebelum-pondasi.html",
  },
  price: {
    title: "Harga Bore Pile per Titik 2026",
    href: "/blog/harga-bore-pile-per-titik-2026.html",
  },
  vsPile: {
    title: "Bore Pile vs Tiang Pancang",
    href: "/blog/bore-pile-vs-tiang-pancang.html",
  },
};

const JAKARTA_SLUGS = new Set([
  "jakarta-selatan",
  "jakarta-pusat",
  "jakarta-barat",
  "jakarta-timur",
  "jakarta-utara",
]);

const INDUSTRIAL_SLUGS = new Set(["karawang", "cikarang", "cilegon"]);

function relatedArticlesFor(slug) {
  if (JAKARTA_SLUGS.has(slug)) {
    return [ARTICLES.ruko, ARTICLES.twoStory, ARTICLES.price];
  }
  if (INDUSTRIAL_SLUGS.has(slug)) {
    return [ARTICLES.industrial, ARTICLES.vsPile, ARTICLES.soilTest];
  }
  if (slug === "tangerang" || slug === "bekasi") {
    return [ARTICLES.softSoil, ARTICLES.ruko, ARTICLES.price];
  }
  if (slug === "purwakarta" || slug === "subang" || slug === "serang") {
    return [ARTICLES.softSoil, ARTICLES.industrial, ARTICLES.soilTest];
  }
  return [ARTICLES.softSoil, ARTICLES.twoStory, ARTICLES.soilTest];
}

function joinDistricts(districts) {
  if (districts.length <= 1) return districts[0] || "";
  return `${districts.slice(0, -1).join(", ")}, dan ${districts[districts.length - 1]}`;
}

function methodSection(city) {
  return {
    heading: `Memilih metode untuk bangunan di ${city}`,
    paragraphs: [
      "Jenis bangunan dan lebar jalan masuk biasanya menentukan metodenya.",
      "Bore pile mesin dikerjakan dengan mini crane untuk diameter 30 sampai 100 cm dan kedalaman hingga 30 meter. Metode ini cocok untuk bangunan dengan beban lebih besar atau yang membutuhkan tiang lebih dalam.",
      "Strauss pile manual dikerjakan dengan tenaga putar manusia, untuk diameter 30 sampai 40 cm pada kedalaman 6 sampai 15 meter. Karena tidak membutuhkan alat besar masuk ke lokasi, metode ini lebih mudah dipakai di tempat dengan akses sempit.",
      [
        "Ukuran dan kedalaman tiang yang final ditentukan perencana struktur dari data tanah. Kami mengerjakan bagian pelaksanaannya. Perbandingan lengkap ada di artikel ",
        link(
          "perbedaan strauss pile dan bore pile",
          "/blog/perbedaan-strauss-pile-dan-bore-pile.html"
        ),
        ".",
      ],
    ],
  };
}

function surveySection() {
  return {
    heading: "Yang kami periksa saat survey",
    items: [
      "Lebar dan kondisi jalan masuk, diukur di titik tersempit",
      "Ruang kerja di sekitar titik pondasi",
      "Jarak dan kondisi bangunan tetangga",
      "Kabel listrik atau telepon di atas jalur alat",
      "Tempat untuk menaruh tanah hasil galian",
    ],
    closing: [
      "Siapkan informasi ini sebelum kami datang dengan membaca ",
      link(
        "persiapan sebelum survey bore pile",
        "/blog/persiapan-sebelum-survey-bore-pile.html"
      ),
      ".",
    ],
  };
}

function districtSection(city, districts, closing) {
  return {
    heading: `Kecamatan di ${city} yang kami layani`,
    listText: `${joinDistricts(districts)}.`,
    closing,
  };
}

function standardIntro(city, office) {
  return [
    `Majujaya Bore Pile mengerjakan pondasi bore pile dan strauss pile di ${city}. ${office}, dan kami sudah menyelesaikan 250+ titik sejak 2013. Survey lokasi gratis, dan setelah survey Anda menerima penawaran resmi (RAB).`,
  ];
}

function fullPage(config) {
  const slug = config.city.toLowerCase().replace(/\s+/g, "-");
  return {
    full: true,
    title: config.title,
    metaDesc: config.metaDesc,
    h1: `Jasa bore pile dan strauss pile di ${config.city}`,
    intro: config.intro,
    context: null,
    districts: config.districts,
    method: methodSection(config.city),
    survey: surveySection(),
    price: { heading: "Biaya", text: PRICE_DISCLAIMER_TEXT },
    projects: null,
    faq: faqFor(config.city),
    relatedArticles: relatedArticlesFor(slug),
    faqHeading: "Pertanyaan yang sering diajukan",
    cta: {
      text: `Kirim lokasi proyek di ${config.city} lewat WhatsApp 0815-1481-1120.`,
      button: "Kirim lokasi proyek via WhatsApp",
      url: waUrl(config.city),
    },
  };
}

export const LOCATION_CONTENT = {
  "jakarta-selatan": fullPage({
    city: "Jakarta Selatan",
    title: "Jasa Bore Pile Jakarta Selatan | Survey Gratis | Majujaya",
    metaDesc:
      "Jasa bore pile dan strauss pile di Jakarta Selatan: Tebet, Kebayoran, Pasar Minggu, Cilandak. Survey lokasi gratis, estimasi biaya jelas. Chat WA sekarang.",
    intro: [
      "Majujaya Bore Pile mengerjakan pondasi bore pile dan strauss pile di Jakarta Selatan, dari Tebet sampai Jagakarsa. Kantor kami ada di Sunter, Jakarta Utara. Kami berdiri sejak 2013 dan sudah menyelesaikan 250+ titik pengeboran di Jabodetabek dan sekitarnya.",
      "Survey lokasi gratis. Setelah survey, Anda menerima penawaran resmi (RAB).",
    ],
    districts: districtSection(
      "Jakarta Selatan",
      [
        "Cilandak",
        "Jagakarsa",
        "Kebayoran Baru",
        "Kebayoran Lama",
        "Mampang Prapatan",
        "Pancoran",
        "Pasar Minggu",
        "Pesanggrahan",
        "Setiabudi",
        "Tebet",
      ],
      [
        "Kalau lokasi Anda berada di perbatasan, misalnya dekat Depok atau Jakarta Pusat, kirim titik lokasinya lewat WhatsApp. Lihat juga halaman ",
        link("jasa bore pile Depok", "/location/depok/"),
        " dan ",
        link("jasa bore pile Jakarta Pusat", "/location/jakarta-pusat/"),
        ".",
      ]
    ),
  }),
  "jakarta-pusat": fullPage({
    city: "Jakarta Pusat",
    title: "Jasa Bore Pile Jakarta Pusat | Survey Gratis | Majujaya",
    metaDesc:
      "Jasa bore pile dan strauss pile di Jakarta Pusat: Gambir, Sawah Besar, Kemayoran, Senen. Survey lokasi gratis, estimasi biaya jelas. Chat WA sekarang.",
    intro: standardIntro(
      "Jakarta Pusat",
      "Kantor kami ada di Sunter, Jakarta Utara"
    ),
    districts: districtSection(
      "Jakarta Pusat",
      [
        "Gambir",
        "Sawah Besar",
        "Kemayoran",
        "Senen",
        "Cempaka Putih",
        "Menteng",
        "Tanah Abang",
        "Johar Baru",
      ],
      [
        "Kalau lokasi Anda berada di perbatasan, misalnya dekat Jakarta Selatan atau Jakarta Barat, kirim titik lokasinya lewat WhatsApp. Lihat juga halaman ",
        link("jasa bore pile Jakarta Selatan", "/location/jakarta-selatan/"),
        " dan ",
        link("jasa bore pile Jakarta Barat", "/location/jakarta-barat/"),
        ".",
      ]
    ),
  }),
  "jakarta-barat": fullPage({
    city: "Jakarta Barat",
    title: "Jasa Bore Pile Jakarta Barat | Survey Gratis | Majujaya",
    metaDesc:
      "Jasa bore pile dan strauss pile di Jakarta Barat: Cengkareng, Grogol Petamburan, Taman Sari. Survey lokasi gratis, estimasi biaya jelas. Chat WA sekarang.",
    intro: standardIntro(
      "Jakarta Barat",
      "Kantor kami ada di Sunter, Jakarta Utara"
    ),
    districts: districtSection(
      "Jakarta Barat",
      [
        "Cengkareng",
        "Grogol Petamburan",
        "Taman Sari",
        "Tambora",
        "Kebon Jeruk",
        "Kalideres",
        "Palmerah",
        "Kembangan",
      ],
      [
        "Kalau lokasi Anda berada di perbatasan, misalnya dekat Jakarta Pusat atau Tangerang, kirim titik lokasinya lewat WhatsApp. Lihat juga halaman ",
        link("jasa bore pile Jakarta Pusat", "/location/jakarta-pusat/"),
        " dan ",
        link("jasa bore pile Tangerang", "/location/tangerang/"),
        ".",
      ]
    ),
  }),
  "jakarta-timur": fullPage({
    city: "Jakarta Timur",
    title: "Jasa Bore Pile Jakarta Timur | Survey Gratis | Majujaya",
    metaDesc:
      "Jasa bore pile dan strauss pile di Jakarta Timur: Matraman, Pulogadung, Jatinegara, Kramat Jati. Survey lokasi gratis, estimasi biaya jelas. Chat WA sekarang.",
    intro: standardIntro(
      "Jakarta Timur",
      "Kantor kami ada di Sunter, Jakarta Utara"
    ),
    districts: districtSection(
      "Jakarta Timur",
      [
        "Matraman",
        "Pulogadung",
        "Jatinegara",
        "Kramat Jati",
        "Pasar Rebo",
        "Cakung",
        "Duren Sawit",
        "Makasar",
        "Ciracas",
        "Cipayung",
      ],
      [
        "Kalau lokasi Anda berada di perbatasan, misalnya dekat Jakarta Selatan atau Bekasi, kirim titik lokasinya lewat WhatsApp. Lihat juga halaman ",
        link("jasa bore pile Jakarta Selatan", "/location/jakarta-selatan/"),
        " dan ",
        link("jasa bore pile Bekasi", "/location/bekasi/"),
        ".",
      ]
    ),
  }),
  "jakarta-utara": fullPage({
    city: "Jakarta Utara",
    title: "Jasa Bore Pile Jakarta Utara | Survey Gratis | Majujaya",
    metaDesc:
      "Jasa bore pile dan strauss pile di Jakarta Utara: Penjaringan, Pademangan, Tanjung Priok, Koja. Survey lokasi gratis, estimasi biaya jelas. Chat WA sekarang.",
    intro: standardIntro(
      "Jakarta Utara",
      "Kantor kami ada di Sunter Agung, Tanjung Priok, Jakarta Utara"
    ),
    districts: districtSection(
      "Jakarta Utara",
      [
        "Penjaringan",
        "Pademangan",
        "Tanjung Priok",
        "Koja",
        "Kelapa Gading",
        "Cilincing",
      ],
      [
        "Kalau lokasi Anda berada di perbatasan, misalnya dekat Jakarta Pusat atau Jakarta Barat, kirim titik lokasinya lewat WhatsApp. Lihat juga halaman ",
        link("jasa bore pile Jakarta Pusat", "/location/jakarta-pusat/"),
        " dan ",
        link("jasa bore pile Jakarta Barat", "/location/jakarta-barat/"),
        ".",
      ]
    ),
  }),
};

const THIN_REGIONS = [
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

function thinPage(city) {
  const slug = city.toLowerCase();
  const expanded = LOCATION_EXPANDED[slug] || null;
  const rukoPhrase = city === "Purwakarta" ? "rumah, ruko" : "rumah dan ruko";
  return {
    thin: true,
    title: `Jasa Bore Pile ${city} | Survey Gratis | Majujaya`,
    metaDesc: `Jasa bore pile dan strauss pile di ${city} untuk ${rukoPhrase}. Survey lokasi gratis, estimasi biaya jelas, penawaran resmi setelah survey. Chat WA sekarang.`,
    h1: `Jasa bore pile dan strauss pile di ${city}`,
    intro: [
      `Majujaya Bore Pile melayani jasa bore pile dan strauss pile di ${city}. Kantor kami ada di Sunter, Jakarta Utara, dan kami sudah mengerjakan 250+ titik sejak 2013.`,
    ],
    context: expanded?.context || null,
    area: expanded?.area || {
      heading: `Area layanan di ${city}`,
      text: `Kami melayani pekerjaan pondasi bore pile dan strauss pile di ${city} dan sekitarnya.`,
    },
    districts: null,
    method: expanded?.method || null,
    survey: surveySection(),
    price: { heading: "Biaya", text: PRICE_DISCLAIMER_TEXT },
    projects: null,
    faq: expanded?.faq || faqFor(city),
    relatedArticles: relatedArticlesFor(slug),
    faqHeading: "Pertanyaan yang sering diajukan",
    cta: {
      text: `Kirim lokasi proyek di ${city} lewat WhatsApp 0815-1481-1120.`,
      button: "Kirim lokasi proyek via WhatsApp",
      url: waUrl(city),
    },
  };
}

export function getLocationPageContent(slug) {
  if (LOCATION_CONTENT[slug]) return LOCATION_CONTENT[slug];
  const city = THIN_REGIONS.find((name) => name.toLowerCase() === slug);
  return city ? thinPage(city) : null;
}
