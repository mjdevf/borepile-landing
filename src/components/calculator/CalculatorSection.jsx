import React, { useState, useEffect, useRef } from 'react';
import { Phone, Check, BookmarkPlus } from 'lucide-react';
import { calculateEstimation, formatRangeCost, generateWhatsAppLink } from './calculator';
import DrillVisualizer from './DrillVisualizer';
import SavedEstimates from './SavedEstimates';

const SOIL_LABELS = { soft: 'Tanah Lunak', medium: 'Tanah Sedang', hard: 'Tanah Keras' };

const Step = ({ n, title, children }) => (
  <section className="flex flex-col gap-3.5">
    <div className="flex items-center gap-3">
      <span aria-hidden="true" className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary font-mono text-[13px] text-on-primary">{n}</span>
      <h3 className="text-lg font-bold text-primary">{title}</h3>
    </div>
    {children}
  </section>
);

const Slider = ({ id, label, min, max, value, onChange, text, minText, maxText }) => (
  <div className="flex flex-col gap-0.5">
    <div className="flex items-baseline justify-between gap-3">
      <label htmlFor={id} className="font-mono text-[13px] text-secondary">{label}</label>
      <output htmlFor={id} className="font-mono text-xl font-medium text-accent">{text}</output>
    </div>
    <input id={id} type="range" min={min} max={max} step="1" value={value} onChange={onChange} className="m-0 h-11 w-full cursor-pointer accent-accent" />
    <div className="flex justify-between font-mono text-xs text-outline"><span>{minText}</span><span>{maxText}</span></div>
  </div>
);

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
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'estimate_saved', {
        pile_type: input.pileType,
        diameter_cm: input.diameter,
        depth_m: input.depth,
        points: input.points,
      });
    }
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

  const optBtn = (active) =>
    `inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-sm border-[1.5px] px-3 text-[15px] font-semibold transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
      active
        ? 'border-primary bg-primary text-on-primary'
        : 'border-border-muted bg-white text-primary hover:border-primary'
    }`;
  const labelClass = 'mb-2 block font-mono text-[13px] text-secondary';

  const row = 'flex justify-between gap-4 border-b border-white/15 py-2.5 text-[15px]';

  return (
    <section id="kalkulator" ref={sectionRef} className="bg-surface-container px-5 py-16 md:px-10 md:py-28">
      <div className="mx-auto w-full max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex max-w-2xl flex-col gap-3 md:mb-12 md:gap-4">
          <h2 className="text-[32px] leading-[1.1] tracking-tight text-primary md:text-[44px]">
            Hitung Estimasi Biaya Pondasi
          </h2>
          <p className="max-w-[56ch] text-base leading-relaxed text-secondary md:text-lg">
            Pilih metode, diameter, dan kedalaman. Hasilnya perkiraan awal sebelum survey lokasi.
          </p>
          <p className="max-w-[56ch] border-l-2 border-accent pl-3 text-xs leading-relaxed text-secondary">
            <strong className="font-semibold text-accent">DISCLAIMER:</strong> Simulasi awal estimasi kisaran pasar, <strong className="font-semibold text-primary">bukan harga pasti</strong> (bukan harga jadi). Biaya aktual mengikuti hasil survey lokasi teknis gratis.
          </p>
        </div>

        {visible ? (
          <div className="grid items-start gap-6 lg:grid-cols-12">
            {/* LEFT: steps */}
            <div className="flex flex-col gap-8 rounded-sm border border-border-muted bg-surface p-5 md:p-8 lg:col-span-6">
              <Step n={1} title="Jenis pekerjaan">
                <div>
                  <span className={labelClass}>Metode</span>
                  <div className="flex flex-wrap gap-2">
                    <button type="button" aria-pressed={input.pileType === 'bored-pile-machine'} onClick={() => handlePileType('bored-pile-machine')} className={`${optBtn(input.pileType === 'bored-pile-machine')} min-w-[130px]`}>
                      {input.pileType === 'bored-pile-machine' && <Check className="h-3.5 w-3.5" strokeWidth={3} />} Bore Pile Mesin
                    </button>
                    <button type="button" aria-pressed={input.pileType === 'strauss-pile-manual'} onClick={() => handlePileType('strauss-pile-manual')} className={`${optBtn(input.pileType === 'strauss-pile-manual')} min-w-[130px]`}>
                      {input.pileType === 'strauss-pile-manual' && <Check className="h-3.5 w-3.5" strokeWidth={3} />} Strauss Pile Manual
                    </button>
                  </div>
                </div>
                <div>
                  <span className={labelClass}>Diameter tiang</span>
                  <div className="flex flex-wrap gap-2">
                    {diaOptions.map((d) => (
                      <button type="button" key={d} aria-pressed={input.diameter === d} onClick={() => update('diameter', d)} className={`${optBtn(input.diameter === d)} min-w-16`}>
                        {input.diameter === d && <Check className="h-3.5 w-3.5" strokeWidth={3} />} {d} cm
                      </button>
                    ))}
                  </div>
                </div>
              </Step>

              <div className="h-px bg-border-muted" />

              <Step n={2} title="Dimensi">
                <Slider id="c-depth" label="Kedalaman per titik" min={depthMin} max={depthMax} value={input.depth} onChange={(e) => update('depth', Number(e.target.value))} text={`${input.depth} m`} minText={`${depthMin} m`} maxText={`${depthMax} m`} />
                <Slider id="c-points" label="Jumlah titik" min={1} max={150} value={input.points} onChange={(e) => update('points', Number(e.target.value))} text={`${input.points} titik`} minText="1" maxText="150" />
              </Step>

              <div className="h-px bg-border-muted" />

              <Step n={3} title="Lokasi dan tanah">
                <div>
                  <span className={labelClass}>Kondisi tanah</span>
                  <div className="flex flex-wrap gap-2">
                    {['soft', 'medium', 'hard'].map((k) => (
                      <button type="button" key={k} aria-pressed={input.soilType === k} onClick={() => update('soilType', k)} className={`${optBtn(input.soilType === k)} min-w-24`}>
                        {input.soilType === k && <Check className="h-3.5 w-3.5" strokeWidth={3} />} {SOIL_LABELS[k]}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label htmlFor="c-region" className={labelClass}>Wilayah proyek</label>
                  <select id="c-region" value={input.region} onChange={(e) => update('region', e.target.value)}
                    className="min-h-12 w-full cursor-pointer rounded-sm border-[1.5px] border-border-muted bg-white px-3 text-base text-primary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent">
                    <option value="jabodetabek">JABODETABEK</option>
                    <option value="jawa-barat">Jawa Barat</option>
                    <option value="jawa-tengah-timur">Jawa Tengah / Jawa Timur</option>
                    <option value="luar-jawa">Luar Pulau Jawa</option>
                  </select>
                </div>
              </Step>

              <div className="h-px bg-border-muted" />

              <Step n={4} title="Opsi material">
                <div className="flex items-center justify-between gap-4 rounded-sm border-[1.5px] border-border-muted bg-white px-4 py-3">
                  <div>
                    <div className="text-base font-bold text-primary">Sistem All-In Material</div>
                    <div className="text-sm text-secondary">Besi SNI + ReadyMix K-300</div>
                  </div>
                  <button type="button" role="switch" aria-checked={input.includeMaterial} aria-label="Sistem All-In Material" onClick={() => update('includeMaterial', !input.includeMaterial)}
                    className="flex h-11 w-[52px] shrink-0 cursor-pointer items-center">
                    <span className={`relative block h-7 w-12 rounded-full transition-colors ${input.includeMaterial ? 'bg-accent' : 'bg-[#A8A69E]'}`}>
                      <span className={`absolute top-[3px] h-[22px] w-[22px] rounded-full bg-white transition-all ${input.includeMaterial ? 'left-[23px]' : 'left-[3px]'}`} />
                    </span>
                  </button>
                </div>
              </Step>

              {saved.length < 5 && (
                <button type="button" onClick={saveEstimate}
                  className="inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-sm border border-border-muted bg-surface text-sm font-semibold text-primary transition-colors hover:bg-surface-container-low">
                  <BookmarkPlus className="h-4 w-4" /> Simpan konfigurasi ini
                </button>
              )}
            </div>

            {/* RIGHT: visual + result (sticky on desktop) */}
            <div className="flex flex-col gap-4 lg:sticky lg:top-24 lg:col-span-6">
              <DrillVisualizer pileType={input.pileType} diameter={input.diameter} depth={input.depth} soilType={input.soilType} includeMaterial={input.includeMaterial} />

              <div className="flex flex-col gap-5 rounded-sm bg-primary p-6 text-on-primary md:p-8">
                <div className="flex flex-col gap-1.5">
                  <div className="font-mono text-[13px] text-[#B9B8B0]">Estimasi biaya · {result.totalMeters} m total</div>
                  <div aria-live="polite" className="text-[30px] font-extrabold leading-[1.08] tracking-tight md:text-[40px]">
                    {formatRangeCost(result.costMin, result.costMax)}
                  </div>
                  <div className="text-base text-[#D2D1CA]">Durasi {result.durationDaysMin} - {result.durationDaysMax} hari kerja</div>
                </div>

                <div className="border-t border-white/15">
                  <div className={row}><span className="text-[#D2D1CA]">Pengeboran</span><span className="font-mono">{formatRangeCost(result.itemizedCosts.drilling.min, result.itemizedCosts.drilling.max)}</span></div>
                  {input.includeMaterial && (
                    <div className={row}><span className="text-[#D2D1CA]">Material</span><span className="font-mono">{formatRangeCost(result.itemizedCosts.material.min, result.itemizedCosts.material.max)}</span></div>
                  )}
                  <div className={row}><span className="text-[#D2D1CA]">Mobilisasi</span><span className="font-mono">Rp {(result.itemizedCosts.mobilization / 1000000).toFixed(1)} Juta</span></div>
                  {result.itemizedCosts.mudHandling > 0 && (
                    <div className={row}><span className="text-[#D2D1CA]">Penanganan lumpur</span><span className="font-mono">Rp {(result.itemizedCosts.mudHandling / 1000000).toFixed(1)} Juta</span></div>
                  )}
                  <div className={row}><span className="text-[#D2D1CA]">Volume beton ReadyMix</span><span className="font-mono">{result.concreteVolumeM3} m³</span></div>
                  <div className={row}><span className="text-[#D2D1CA]">Berat besi tulangan</span><span className="font-mono">{input.includeMaterial ? `${result.rebarWeightKg} Kg` : 'Disiapkan owner'}</span></div>
                </div>

                <a href={generateWhatsAppLink(input, result)} target="_blank" rel="noreferrer"
                  className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-sm bg-accent px-4 text-base font-semibold text-on-primary transition-colors hover:bg-accent-dark">
                  <Phone className="h-4 w-4" /> Kirim rincian via WhatsApp
                </a>
                <p className="font-mono text-xs leading-relaxed text-[#B9B8B0]">Estimasi kisaran pasar, bukan harga pasti. Belum termasuk PPN 11%. Harga final setelah survey lokasi.</p>
              </div>

              <SavedEstimates estimates={saved} onLoad={loadSaved} onDelete={deleteSaved} onClearAll={() => { setSaved([]); localStorage.removeItem('bmj_saved_estimates'); }} />
            </div>
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-6"><div className="h-96 animate-pulse rounded-sm border border-border-muted bg-surface-container-low" /></div>
            <div className="space-y-4 lg:col-span-6">
              <div className="h-64 animate-pulse rounded-sm border border-border-muted bg-surface-container-low" />
              <div className="h-48 animate-pulse rounded-sm border border-border-muted bg-surface-container-low" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
