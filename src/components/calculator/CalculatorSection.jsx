import React, { useState, useEffect, useRef } from 'react';
import { Calculator, Phone, MapPin, Drill, Wrench } from 'lucide-react';
import { calculateEstimation, formatRangeCost, generateWhatsAppLink } from './calculator';
import DrillVisualizer from './DrillVisualizer';
import SavedEstimates from './SavedEstimates';

const SOIL_LABELS = { soft: 'Tanah Lunak', medium: 'Tanah Sedang', hard: 'Tanah Keras' };

export default function CalculatorSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { rootMargin: '150px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const [input, setInput] = useState({
    pileType: 'bored-pile-machine',
    diameter: 40,
    depth: 12,
    points: 20,
    soilType: 'soft',
    region: 'jabodetabek',
    includeMaterial: true,
  });

  const result = calculateEstimation(input);

  const handlePileType = (type) => {
    setInput((prev) => ({
      ...prev,
      pileType: type,
      diameter: type === 'bored-pile-machine' ? 40 : 30,
      depth: type === 'bored-pile-machine' ? 12 : 6,
    }));
  };

  const update = (key, value) => setInput((prev) => ({ ...prev, [key]: value }));

  const [saved, setSaved] = useState([]);
  useEffect(() => {
    try {
      const d = localStorage.getItem('bmj_saved_estimates');
      if (d) setSaved(JSON.parse(d));
    } catch (e) { /* ignore */ }
  }, []);

  const saveEstimate = () => {
    const name = `${input.pileType === 'bored-pile-machine' ? 'Bored Pile' : 'Strauss'} D-${input.diameter} (${input.points} Titik)`;
    const item = { id: Date.now().toString(), name, input: { ...input }, result: { ...result } };
    const updated = [item, ...saved].slice(0, 5);
    setSaved(updated);
    localStorage.setItem('bmj_saved_estimates', JSON.stringify(updated));
  };

  const deleteSaved = (id, e) => {
    e.stopPropagation();
    const updated = saved.filter((s) => s.id !== id);
    setSaved(updated);
    localStorage.setItem('bmj_saved_estimates', JSON.stringify(updated));
  };

  const loadSaved = (item) => {
    setInput(item.input);
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const diaOptions = input.pileType === 'bored-pile-machine' ? [30, 40, 50, 60] : [20, 25, 30];
  const depthMin = input.pileType === 'bored-pile-machine' ? 10 : 3;
  const depthMax = input.pileType === 'bored-pile-machine' ? 30 : 8;

  const activeBtn = 'bg-primary text-on-primary shadow-sm';
  const inactiveBtn = 'bg-surface-container-low hover:bg-surface-container text-secondary border border-border-muted';
  const labelClass = 'text-[11px] font-semibold uppercase tracking-[0.08em] text-secondary mb-2 block';

  return (
    <section id="kalkulator" ref={sectionRef} className="bg-surface px-4 py-16 md:px-10 md:py-24 border-t border-border-muted">
      <div className="mx-auto w-full max-w-7xl">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center gap-3 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border-muted bg-surface-container-low px-3 py-1 font-mono text-[11px] text-secondary">
            <Calculator className="h-3.5 w-3.5 text-tertiary" />
            Kalkulator Biaya Mandiri
          </span>
          <h2 className="max-w-2xl text-3xl font-semibold text-primary" style={{ letterSpacing: '-0.01em', lineHeight: '1.3' }}>
            Estimasi Biaya Fondasi Proyek Anda
          </h2>
          <p className="max-w-xl text-base text-secondary">
            Isi parameter proyek di bawah untuk simulasi kasar biaya. Hasil akan otomatis terupdate.
          </p>

          {/* PERINGATAN KERAS */}
          <div className="mt-4 w-full max-w-2xl rounded-lg border border-alert-red/30 bg-alert-red/5 p-4 text-left">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 text-lg font-bold leading-none text-alert-red">!</span>
              <div className="text-xs leading-relaxed text-secondary">
                <strong className="uppercase tracking-wider text-alert-red">PERINGATAN:</strong> Kalkulator ini hanya alat bantu simulasi kasar. Angka yang muncul <strong className="text-primary">BUKAN harga resmi, BUKAN quotation, dan BUKAN harga jadi</strong>. Biaya aktual bisa berbeda signifikan tergantung hasil survei lapangan, kondisi tanah aktual, akses lokasi, dan negosiasi. <strong className="text-primary">Jangan gunakan angka ini sebagai dasar kontrak atau klaim hukum.</strong> Hubungi kami untuk penawaran resmi dan survei gratis.
              </div>
            </div>
          </div>
        </div>

        {visible ? (
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10 items-start">
            {/* LEFT: Form */}
            <div className="lg:col-span-5 space-y-5">
              <div className="rounded-lg border border-border-muted bg-surface p-6 shadow-[0_10px_30px_-10px_rgba(15,23,42,0.05)] space-y-5">
                {/* Pile Type */}
                <div>
                  <label className={labelClass}>Metode Pekerjaan</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button onClick={() => handlePileType('bored-pile-machine')}
                      className={`flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-xs font-semibold transition-all cursor-pointer ${input.pileType === 'bored-pile-machine' ? activeBtn : inactiveBtn}`}>
                      <Drill className="h-4 w-4" /> Bored Pile Mesin
                    </button>
                    <button onClick={() => handlePileType('strauss-pile-manual')}
                      className={`flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-xs font-semibold transition-all cursor-pointer ${input.pileType === 'strauss-pile-manual' ? activeBtn : inactiveBtn}`}>
                      <Wrench className="h-4 w-4" /> Strauss Manual
                    </button>
                  </div>
                </div>

                {/* Diameter */}
                <div>
                  <label className={labelClass}>Diameter Tiang</label>
                  <div className="grid grid-cols-4 gap-2">
                    {diaOptions.map((d) => (
                      <button key={d} onClick={() => update('diameter', d)}
                        className={`rounded-lg px-3 py-2.5 text-xs font-bold transition-all cursor-pointer ${input.diameter === d ? activeBtn : inactiveBtn}`}>
                        {d} cm
                      </button>
                    ))}
                  </div>
                </div>

                {/* Depth & Points */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Kedalaman (m)</label>
                    <input type="range" min={depthMin} max={depthMax} step="1" value={input.depth} onChange={(e) => update('depth', Number(e.target.value))} className="w-full accent-tertiary" />
                    <div className="mt-1 text-center font-mono text-sm font-bold text-tertiary">{input.depth} m</div>
                  </div>
                  <div>
                    <label className={labelClass}>Jumlah Titik</label>
                    <input type="range" min="1" max="150" step="1" value={input.points} onChange={(e) => update('points', Number(e.target.value))} className="w-full accent-tertiary" />
                    <div className="mt-1 text-center font-mono text-sm font-bold text-tertiary">{input.points} titik</div>
                  </div>
                </div>

                {/* Soil Type */}
                <div>
                  <label className={labelClass}>Kondisi Tanah</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['soft', 'medium', 'hard'].map((s) => (
                      <button key={s} onClick={() => update('soilType', s)}
                        className={`rounded-lg px-3 py-2.5 text-[11px] font-bold transition-all cursor-pointer ${input.soilType === s ? activeBtn : inactiveBtn}`}>
                        {SOIL_LABELS[s]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Region */}
                <div>
                  <label className={labelClass}><MapPin className="mr-0.5 inline h-3 w-3 -mt-0.5" /> Wilayah Proyek</label>
                  <select value={input.region} onChange={(e) => update('region', e.target.value)}
                    className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-3.5 py-2.5 text-sm text-on-surface transition-colors focus:border-tertiary focus:outline-none focus:ring-1 focus:ring-tertiary cursor-pointer">
                    <option value="jabodetabek">JABODETABEK</option>
                    <option value="jawa-barat">Jawa Barat</option>
                    <option value="jawa-tengah-timur">Jawa Tengah / Jawa Timur</option>
                    <option value="luar-jawa">Luar Pulau Jawa</option>
                  </select>
                </div>

                {/* Include Material */}
                <div className="flex items-center justify-between rounded-lg border border-border-muted bg-surface-container-low p-3.5">
                  <div>
                    <div className="text-sm font-semibold text-primary">Sistem All-In Material</div>
                    <div className="text-xs text-secondary">Besi SNI + ReadyMix K-300</div>
                  </div>
                  <button onClick={() => update('includeMaterial', !input.includeMaterial)}
                    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors ${input.includeMaterial ? 'bg-tertiary' : 'bg-outline-variant'}`}>
                    <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${input.includeMaterial ? 'translate-x-5' : 'translate-x-0'}`} />
                  </button>
                </div>
              </div>

              {/* Save button */}
              {saved.length < 5 && (
                <button onClick={saveEstimate}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border-muted bg-surface px-4 py-3 text-xs font-semibold text-secondary transition-all hover:bg-surface-container-low cursor-pointer">
                  <BookmarkPlus className="h-4 w-4" /> Simpan Konfigurasi Ini
                </button>
              )}
            </div>

            {/* RIGHT: Results */}
            <div className="lg:col-span-7 space-y-6">
              {/* Visualizer */}
              <DrillVisualizer pileType={input.pileType} diameter={input.diameter} depth={input.depth} soilType={input.soilType} includeMaterial={input.includeMaterial} />

              {/* Result Card */}
              <div className="rounded-lg border border-border-muted bg-surface p-6 shadow-[0_10px_30px_-10px_rgba(15,23,42,0.05)]">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Ringkasan Estimasi</h3>
                  <span className="font-mono text-[11px] text-secondary">{result.totalMeters} m¹ total</span>
                </div>

                {/* RANGE PRICING */}
                <div className="mb-5 rounded-lg border border-border-muted bg-surface-container-low p-5 text-center">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-secondary">Estimasi Biaya Proyek</div>
                  <div className="mt-1 font-display text-2xl font-extrabold text-tertiary sm:text-3xl" style={{ letterSpacing: '-0.01em' }}>
                    {formatRangeCost(result.costMin, result.costMax)}
                  </div>
                  <div className="mt-1 text-[11px] text-secondary">*belum termasuk PPN 11%</div>

                  {/* DISCLAIMER KERAS */}
                  <div className="mt-4 rounded-lg border border-alert-red/30 bg-alert-red/5 p-3">
                    <p className="text-xs leading-relaxed text-secondary">
                      <strong className="uppercase text-alert-red">PERINGATAN:</strong> Ini <strong className="text-primary">BUKAN harga resmi</strong>. Hanya simulasi kasar. Biaya aktual bisa berbeda. Harga pasti berlaku setelah survei lokasi dan penawaran resmi.
                    </p>
                    <a href={generateWhatsAppLink(input, result)} target="_blank" rel="noreferrer"
                      className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-xs font-semibold text-on-primary transition-all hover:scale-[0.98] active:scale-[0.96] cursor-pointer">
                      <Phone className="h-4 w-4" /> Kirim ke WhatsApp Admin
                    </a>
                  </div>
                </div>

                {/* Itemized */}
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-secondary">Jasa Pengeboran</span>
                    <span className="font-mono font-bold text-primary">{formatRangeCost(result.itemizedCosts.drilling.min, result.itemizedCosts.drilling.max)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary">Material (Besi + Beton)</span>
                    <span className="font-mono font-bold text-primary">{input.includeMaterial ? formatRangeCost(result.itemizedCosts.material.min, result.itemizedCosts.material.max) : 'Tidak termasuk'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary">Mobilisasi Alat</span>
                    <span className="font-mono font-bold text-primary">Rp {(result.itemizedCosts.mobilization / 1000000).toFixed(1)} Juta</span>
                  </div>
                  {result.itemizedCosts.mudHandling && (
                    <div className="flex justify-between">
                      <span className="text-secondary">Penanganan Lumpur</span>
                      <span className="font-mono font-bold text-primary">Rp {(result.itemizedCosts.mudHandling / 1000000).toFixed(1)} Juta</span>
                    </div>
                  )}
                  <div className="flex justify-between border-t border-border-muted pt-3">
                    <span className="text-secondary">Estimasi Durasi</span>
                    <span className="font-mono font-bold text-primary">{result.durationDaysMin} - {result.durationDaysMax} hari kerja</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary">Volume Beton ReadyMix</span>
                    <span className="font-mono font-bold text-primary">{result.concreteVolumeM3} m³</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary">Berat Besi Tulangan</span>
                    <span className="font-mono font-bold text-primary">{input.includeMaterial ? `${result.rebarWeightKg} Kg (${(result.rebarWeightKg / 1000).toFixed(2)} Ton)` : 'Disiapkan Owner'}</span>
                  </div>
                </div>
              </div>

              {/* Saved Estimates */}
              <SavedEstimates estimates={saved} onLoad={loadSaved} onDelete={deleteSaved} onClearAll={() => { setSaved([]); localStorage.removeItem('bmj_saved_estimates'); }} />
            </div>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <div className="h-96 animate-pulse rounded-lg border border-border-muted bg-surface-container-low" />
            </div>
            <div className="lg:col-span-7 space-y-6">
              <div className="h-64 animate-pulse rounded-lg border border-border-muted bg-surface-container-low" />
              <div className="h-48 animate-pulse rounded-lg border border-border-muted bg-surface-container-low" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
