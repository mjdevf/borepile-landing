const WA_NUMBER = "6281514811120";
const WA_BASE = `https://api.whatsapp.com/send/?phone=${WA_NUMBER}&text=`;

const PRICE_TEXT =
  "Biaya strauss pile manual mulai Rp800.000 per titik untuk diameter 30-40 cm. Bore pile mesin mulai Rp2.500.000 per titik, tergantung diameter dan kedalaman. Harga per November 2026. Penawaran resmi (RAB) diberikan setelah survey lokasi gratis.";

const FAQ = [
  {
    q: "Berapa lama pengerjaan bore pile untuk rumah 2 lantai?",
    a: "Untuk rumah 2 lantai dengan 12-16 titik, strauss pile manual biasanya selesai 3-5 hari kerja setelah alat dan material siap.",
  },
  {
    q: "Apakah survey lokasi benar-benar gratis?",
    a: "Ya. Survey lokasi gratis. Kami hanya menagih pekerjaan pengeboran setelah penawaran disetujui.",
  },
  {
    q: "Bagaimana kalau jalan masuk sempit?",
    a: "Kami cek akses saat survey. Kalau alat mesin tidak bisa masuk, metode strauss pile manual jadi pilihan.",
  },
];

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

function methodSection(city) {
  return {
    heading: `Memilih metode untuk bangunan di ${city}`,
    paragraphs: [
      "Jenis bangunan dan lebar jalan masuk biasanya menentukan metodenya.",
      "Bore pile mesin cocok untuk bangunan bertingkat, gudang, dan proyek yang membutuhkan tiang diameter besar. Mesin mini crane bisa masuk ke lahan yang masih punya akses jalan.",
      "Strauss pile manual cocok untuk rumah tinggal, pagar, dan ruko di gang sempit. Tenaga manual dipakai karena alat berat tidak bisa masuk.",
      [
        "Ukuran dan kedalaman tiang ditentukan setelah sondir atau pengecekan tanah. Baca ",
        link(
          "perbedaan strauss pile dan bore pile",
          "/blog/perbedaan-strauss-pile-dan-bore-pile.html"
        ),
        " sebelum memilih metode.",
      ],
    ],
  };
}

function surveySection() {
  return {
    heading: "Yang kami periksa saat survey",
    intro: "Saat survey, kami memeriksa:",
    items: [
      "Akses jalan masuk dan ruang untuk alat.",
      "Jarak ke bangunan tetangga.",
      "Kondisi tanah dan muka air tanah.",
      "Beban bangunan dan jumlah titik.",
    ],
    closing: [
      "Panduan singkatnya ada di ",
      link(
        "persiapan sebelum survey bore pile",
        "/blog/persiapan-sebelum-survey-bore-pile.html"
      ),
      ".",
    ],
  };
}

function districtSection(city, districts, closing) {
  return { heading: `Kecamatan di ${city} yang kami layani`, list: districts, closing };
}

function fullPage(config) {
  return {
    full: true,
    title: config.title,
    metaDesc: config.metaDesc,
    h1: `Jasa bore pile dan strauss pile di ${config.city}`,
    intro: config.intro,
    districts: config.districts,
    method: methodSection(config.city),
    survey: surveySection(),
    price: { heading: "Biaya", text: PRICE_TEXT },
    projects: null,
    faq: FAQ,
    faqHeading: `FAQ bore pile ${config.city}`,
    cta: {
      text: `Kirim lokasi proyek di ${config.city} lewat WhatsApp 0815-1481-1120.`,
      button: "Chat WhatsApp Sekarang",
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
    intro: [
      "Majujaya Bore Pile mengerjakan pondasi bore pile dan strauss pile di Jakarta Pusat, dari Gambir sampai Johar Baru. Kantor kami ada di Sunter, Jakarta Utara. Kami berdiri sejak 2013 dan sudah menyelesaikan 250+ titik pengeboran di Jabodetabek dan sekitarnya.",
      "Survey lokasi gratis. Setelah survey, Anda menerima penawaran resmi (RAB).",
    ],
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
};

export function getLocationPageContent(slug) {
  return LOCATION_CONTENT[slug] || null;
}
