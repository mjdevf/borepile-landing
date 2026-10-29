const GROUPS = [
  {
    province: "DKI Jakarta",
    cities: [
      ["jakarta-pusat", "Jakarta Pusat"],
      ["jakarta-utara", "Jakarta Utara"],
      ["jakarta-barat", "Jakarta Barat"],
      ["jakarta-selatan", "Jakarta Selatan"],
      ["jakarta-timur", "Jakarta Timur"],
    ],
  },
  {
    province: "Jawa Barat",
    cities: [
      ["bogor", "Bogor"],
      ["depok", "Depok"],
      ["bekasi", "Bekasi"],
      ["karawang", "Karawang"],
      ["cikarang", "Cikarang"],
      ["purwakarta", "Purwakarta"],
      ["subang", "Subang"],
      ["cianjur", "Cianjur"],
    ],
  },
  {
    province: "Banten",
    cities: [
      ["tangerang", "Tangerang"],
      ["serang", "Serang"],
      ["cilegon", "Cilegon"],
    ],
  },
];

export default function LocationDirectory() {
  return (
    <section id="wilayah" className="bg-surface px-5 pt-16 md:px-10 md:pt-28">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-8 flex max-w-2xl flex-col gap-3 md:mb-14 md:gap-4">
          <h2 className="text-display-sm leading-[1.1] tracking-tight text-primary md:text-display">
            Melayani Jabodetabek dan Sekitarnya
          </h2>
          <p className="max-w-[56ch] text-base leading-relaxed text-secondary md:text-lg">
            Pilih kota Anda untuk melihat layanan, kondisi tanah, dan FAQ setempat. Proyek di luar wilayah ini juga kami layani.
          </p>
        </div>

        <div className="border-t border-primary">
          {GROUPS.map((g) => (
            <div
              key={g.province}
              className="border-b border-border-muted py-5 md:grid md:grid-cols-12 md:gap-x-6 md:py-7"
            >
              <h3 className="mb-1 text-lg font-bold text-accent md:col-span-3 md:mb-0 md:leading-[44px]">
                {g.province}
              </h3>
              <div className="grid grid-cols-2 gap-x-4 md:col-span-9 md:grid-cols-3 md:gap-x-6">
                {g.cities.map(([slug, name]) => (
                  <a
                    key={slug}
                    href={`/location/${slug}/`}
                    className="flex min-h-11 items-center text-base font-medium text-primary transition-colors hover:text-accent md:text-lg"
                  >
                    {name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
