import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Calculator, HardHat, Phone, BookmarkPlus, MapPin, Drill, Wrench, ChevronDown, ChevronUp } from 'lucide-react';
import { calculateEstimation, formatRangeCost, generateWhatsAppLink } from './calculator';
import DrillVisualizer from './DrillVisualizer';
import SavedEstimates from './SavedEstimates';

const SOIL_LABELS = { soft: 'Tanah Lunak', medium: 'Tanah Sedang', hard: 'Tanah Keras' };
const REGION_LABELS = { jabodetabek: 'JABODETABEK', 'jawa-barat': 'Jawa Barat', 'jawa-tengah-timur': 'Jawa Tengah / Timur', 'luar-jawa': 'Luar Jawa' };

export default function CalculatorSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Lazy-load trigger
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

  // Form state
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

  // Saved estimates
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

  // Diameter options based on pile type
  const diaOptions = input.pileType === 'bored-pile-machine' ? [30, 40, 50, 60] : [20, 25, 30];
  const depthMin = input.pileType === 'bored-pile-machine' ? 10 : 3;
  const depthMax = input.pileType === 'bored-pile-machine' ? 30 : 8;

  return (
    <section id="kalkulator" ref={sectionRef} className="py-24 bg-slate-950 border-b border-slate-900 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/5 via-slate-950 to-slate-950 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col items-center gap-3">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 border border-amber-500/30 px-3.5 py-1.5 rounded-full">
            <Calculator className="h-3.5 w-3.5 inline -mt-0.5 mr-1" /> Kalkulator Biaya Mandiri
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-white">
            Estimasi Biaya Fondasi Proyek Anda
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl">
            Isi parameter proyek di bawah untuk simulasi kasar biaya. Hasil akan otomatis terupdate.
          </p>

          {/* PERINGATAN KERAS — DISCLAIMER TOP */}
          <div className="w-full max-w-2xl mx-auto mt-4 p-4 bg-red-950/40 border-2 border-red-500/40 rounded-xl">
            <div className="flex items-start gap-3">
              <span className="text-red-400 font-bold text-lg leading-none mt-0.5">!</span>
              <div className="text-xs text-red-300 leading-relaxed">
                <strong className="text-red-400 uppercase tracking-wider">PERINGATAN:</strong> Kalkulator ini hanya alat bantu simulasi kasar. Angka yang muncul <strong className="text-red-200">BUKAN harga resmi, BUKAN quotation, dan BUKAN harga jadi</strong>. Biaya aktual bisa berbeda signifikan tergantung hasil survei lapangan, kondisi tanah aktual, akses lokasi, dan negosiasi. <strong className="text-red-200">Jangan gunakan angka ini sebagai dasar kontrak atau klaim hukum.</strong> Hubungi kami untuk penawaran resmi dan survei gratis.
              </div>
            </div>
          </div>
        </div>

        {visible ? (
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left: Form */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-5">
                {/* Pile Type */}
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Metode Pekerjaan</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button onClick={() => handlePileType('bored-pile-machine')} className={`flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      input.pileType === 'bored-pile-machine' ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}>
                      <Drill className="h-4 w-4" /> Bored Pile Mesin
                    </button>
                    <button onClick={() => handlePileType('strauss-pile-manual')} className={`flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      input.pileType === 'strauss-pile-manual' ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}>
                      <Wrench className="h-4 w-4" /> Strauss Manual
                    </button>
                  </div>
                </div>

                {/* Diameter */}
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Diameter Tiang</label>
                  <div className="grid grid-cols-4 gap-2">
                    {diaOptions.map((d) => (
                      <button key={d} onClick={() => update('diameter', d)} className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        input.diameter === d ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}>
                        {d} cm
                      </button>
                    ))}
                  </div>
                </div>

                {/* Depth & Points */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Kedalaman (m)</label>
                    <input type="range" min={depthMin} max={depthMax} step="1" value={input.depth} onChange={(e) => update('depth', Number(e.target.value))} className="w-full accent-amber-500" />
                    <div className="text-center text-sm font-mono font-bold text-amber-400 mt-1">{input.depth} m</div>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Jumlah Titik</label>
                    <input type="range" min="1" max="150" step="1" value={input.points} onChange={(e) => update('points', Number(e.target.value))} className="w-full accent-amber-500" />
                    <div className="text-center text-sm font-mono font-bold text-amber-400 mt-1">{input.points} titik</div>
                  </div>
                </div>

                {/* Soil Type */}
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Kondisi Tanah</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['soft', 'medium', 'hard'].map((s) => (
                      <button key={s} onClick={() => update('soilType', s)} className={`px-3 py-2.5 rounded-xl text-[10px] font-bold transition-all cursor-pointer ${
                        input.soilType === s ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}>
                        {SOIL_LABELS[s]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Region */}
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2"><MapPin className="h-3 w-3 inline -mt-0.5" /> Wilayah Proyek</label>
                  <select value={input.region} onChange={(e) => update('region', e.target.value)} className="w-full bg-slate-800 text-white border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 cursor-pointer">
                    <option value="jabodetabek">JABODETABEK</option>
                    <option value="jawa-barat">Jawa Barat</option>
                    <option value="jawa-tengah-timur">Jawa Tengah / Jawa Timur</option>
                    <option value="luar-jawa">Luar Pulau Jawa</option>
                  </select>
                </div>

                {/* Include Material */}
                <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-xl border border-slate-700">
                  <div>
                    <div className="text-xs font-bold text-white">Sistem All-In Material</div>
                    <div className="text-[10px] text-slate-400">Besi SNI + ReadyMix K-300</div>
                  </div>
                  <button onClick={() => update('includeMaterial', !input.includeMaterial)} className={`relative w-12 h-6 rounded-full transition-colors cursor-pointer ${
                    input.includeMaterial ? 'bg-amber-500' : 'bg-slate-700'
                  }`}>
                    <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                      input.includeMaterial ? 'translate-x-6' : ''
                    }`} />
                  </button>
                </div>
              </div>

              {/* Save button */}
              {saved.length < 5 && (
                <button onClick={saveEstimate} className="w-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-2 transition-all cursor-pointer">
                  <BookmarkPlus className="h-4 w-4" /> Simpan Konfigurasi Ini
                </button>
              )}
            </div>

            {/* Right: Results + Visualizer */}
            <div className="lg:col-span-7 space-y-6">
              {/* Drill Visualizer */}
              <DrillVisualizer pileType={input.pileType} diameter={input.diameter} depth={input.depth} soilType={input.soilType} includeMaterial={input.includeMaterial} />

              {/* Result Card */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display font-bold text-sm uppercase tracking-wider text-white">Ringkasan Estimasi</h3>
                  <span className="text-[10px] text-slate-500 font-mono">{result.totalMeters} m¹ total</span>
                </div>

                {/* RANGE PRICING — bulat/range, BUKAN presisi */}
                <div className="bg-slate-950 rounded-xl p-5 border border-slate-800 mb-4 text-center">
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Estimasi Biaya Proyek</div>
                  <div className="text-2xl sm:text-3xl font-display font-extrabold text-amber-400">
                    {formatRangeCost(result.costMin, result.costMax)}
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">*belum termasuk PPN 11%</div>

                  {/* DISCLAIMER KERAS — prominent, nempel di hasil */}
                  <div className="mt-4 p-4 bg-red-950/30 border border-red-500/30 rounded-xl">
                    <p className="text-[11px] text-red-300 leading-relaxed">
                      <strong className="text-red-400 uppercase">PERINGATAN:</strong> Ini <strong className="text-red-200">BUKAN harga resmi</strong>. Hanya simulasi kasar. Biaya aktual bisa berbeda. Harga pasti berlaku setelah survei lokasi dan penawaran resmi.
                    </p>
                    <a
                      href={generateWhatsAppLink(input, result)}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl text-xs items-center justify-center gap-2 transition-all shadow-lg cursor-pointer"
                    >
                      <Phone className="h-4 w-4" />
                      Kirim ke WhatsApp Admin
                    </a>
                  </div>
                </div>

                {/* Itemized */}
                <div className="space-y-3">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Jasa Pengeboran</span>
                    <span className="text-white font-mono font-bold">{formatRangeCost(result.itemizedCosts.drilling.min, result.itemizedCosts.drilling.max)}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Material (Besi + Beton)</span>
                    <span className="text-white font-mono font-bold">{input.includeMaterial ? formatRangeCost(result.itemizedCosts.material.min, result.itemizedCosts.material.max) : 'Tidak termasuk'}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Mobilisasi Alat</span>
                    <span className="text-white font-mono font-bold">Rp {(result.itemizedCosts.mobilization / 1000000).toFixed(1)} Juta</span>
                  </div>
                  {result.itemizedCosts.mudHandling && (
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">Penanganan Lumpur</span>
                      <span className="text-white font-mono font-bold">Rp {(result.itemizedCosts.mudHandling / 1000000).toFixed(1)} Juta</span>
                    </div>
                  )}
                  <div className="flex justify-between text-xs pt-3 border-t border-slate-800">
                    <span className="text-slate-400">Estimasi Durasi</span>
                    <span className="text-white font-mono font-bold">{result.durationDaysMin} - {result.durationDaysMax} hari kerja</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Volume Beton ReadyMix</span>
                    <span className="text-white font-mono font-bold">{result.concreteVolumeM3} m³</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Berat Besi Tulangan</span>
                    <span className="text-white font-mono font-bold">{input.includeMaterial ? `${result.rebarWeightKg} Kg (${(result.rebarWeightKg / 1000).toFixed(2)} Ton)` : 'Disiapkan Owner'}</span>
                  </div>
                </div>
              </div>

              {/* Saved Estimates */}
              <SavedEstimates estimates={saved} onLoad={loadSaved} onDelete={deleteSaved} onClearAll={() => { setSaved([]); localStorage.removeItem('bmj_saved_estimates'); }} />
            </div>
          </div>
        ) : (
          /* Skeleton placeholder */
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5">
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 h-96 animate-pulse" />
            </div>
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 h-64 animate-pulse" />
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 h-48 animate-pulse" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
