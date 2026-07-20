import React, { useState } from 'react';
import { Trash2, Phone, Sparkles, X, Scale, Check, Copy, TrendingDown, Calendar, Coins, Layers, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { formatRupiah, formatRangeCost, generateWhatsAppLink } from './calculator';

export default function SavedEstimates({ estimates, onLoad, onDelete, onClearAll }) {
  const [selectedIds, setSelectedIds] = useState([]);
  const [copied, setCopied] = useState(false);

  if (estimates.length === 0) return null;

  const handleToggleSelect = (id, e) => {
    e.stopPropagation();
    setSelectedIds((prev) => {
      if (prev.includes(id)) return prev.filter((item) => item !== id);
      if (prev.length >= 2) return [prev[1], id];
      return [...prev, id];
    });
  };

  const handleClearSelected = () => setSelectedIds([]);

  const itemA = estimates.find((e) => e.id === selectedIds[0]);
  const itemB = estimates.find((e) => e.id === selectedIds[1]);
  const isComparing = itemA && itemB;

  const maxCost = Math.max(...estimates.map((item) => item.result.costMin), 1);

  const handleGetComparisonWALink = () => {
    if (!itemA || !itemB) return '';
    const text = `Halo Admin Borepile Maju Jaya, saya sedang membandingkan dua konfigurasi fondasi di website untuk proyek saya:

*OPSI 1: ${itemA.name}*
- Metode: ${itemA.input.pileType === 'bored-pile-machine' ? 'Bored Pile Mesin' : 'Strauss Pile (Manual)'}
- Dimensi: D-${itemA.input.diameter}cm | Kedalaman: ${itemA.input.depth}m | ${itemA.input.points} Titik
- Sistem: ${itemA.input.includeMaterial ? 'All-In (Jasa + Material)' : 'Jasa Bor Saja'}
- Estimasi: ${formatRangeCost(itemA.result.costMin, itemA.result.costMax)}
- Durasi: ${itemA.result.durationDaysMin}-${itemA.result.durationDaysMax} Hari

*OPSI 2: ${itemB.name}*
- Metode: ${itemB.input.pileType === 'bored-pile-machine' ? 'Bored Pile Mesin' : 'Strauss Pile (Manual)'}
- Dimensi: D-${itemB.input.diameter}cm | Kedalaman: ${itemB.input.depth}m | ${itemB.input.points} Titik
- Sistem: ${itemB.input.includeMaterial ? 'All-In (Jasa + Material)' : 'Jasa Bor Saja'}
- Estimasi: ${formatRangeCost(itemB.result.costMin, itemB.result.costMax)}
- Durasi: ${itemB.result.durationDaysMin}-${itemB.result.durationDaysMax} Hari

Mohon saran metode yang lebih cocok untuk proyek saya. Terima kasih!`;
    return `https://wa.me/6281514811120?text=${encodeURIComponent(text)}`;
  };

  const handleCopyToClipboard = () => {
    if (!itemA || !itemB) return;
    const text = `PERBANDINGAN ESTIMASI BOREPILE MAJU JAYA
--------------------------------------------------
OPSI A: ${itemA.name}
- Metode: ${itemA.input.pileType === 'bored-pile-machine' ? 'Bored Pile Mini Crane' : 'Strauss Pile Manual'}
- Dimensi: D-${itemA.input.diameter}cm, ${itemA.input.depth}m, ${itemA.input.points} titik (${itemA.result.totalMeters} m¹)
- Material: ${itemA.input.includeMaterial ? 'All-In' : 'Jasa Bor Saja'}
- Estimasi: ${formatRangeCost(itemA.result.costMin, itemA.result.costMax)}
- Durasi: ${itemA.result.durationDaysMin} - ${itemA.result.durationDaysMax} Hari

OPSI B: ${itemB.name}
- Metode: ${itemB.input.pileType === 'bored-pile-machine' ? 'Bored Pile Mini Crane' : 'Strauss Pile Manual'}
- Dimensi: D-${itemB.input.diameter}cm, ${itemB.input.depth}m, ${itemB.input.points} titik (${itemB.result.totalMeters} m¹)
- Material: ${itemB.input.includeMaterial ? 'All-In' : 'Jasa Bor Saja'}
- Estimasi: ${formatRangeCost(itemB.result.costMin, itemB.result.costMax)}
- Durasi: ${itemB.result.durationDaysMin} - ${itemB.result.durationDaysMax} Hari
--------------------------------------------------
borepilemajujaya.com`;

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div id="saved-designs-comparison" className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-2xl shadow-xl relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 relative z-10">
        <div>
          <div className="flex items-center gap-1.5">
            <Sparkles className="h-4 w-4 text-amber-500 animate-pulse" />
            <h3 className="font-display font-extrabold text-sm sm:text-base uppercase tracking-wider text-white">
              Konfigurasi Tersimpan & Perbandingan ({estimates.length}/5)
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Centang <strong className="text-amber-500">2 opsi</strong> untuk membuka panel perbandingan.
          </p>
        </div>
        <div className="flex items-center gap-3 self-stretch sm:self-auto justify-between">
          {selectedIds.length > 0 && (
            <button onClick={handleClearSelected} className="text-xs text-slate-400 hover:text-white font-semibold underline cursor-pointer">Reset Pilihan</button>
          )}
          <button onClick={onClearAll} className="text-xs text-rose-400 hover:text-rose-300 font-bold flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-rose-500/10 border border-transparent hover:border-rose-500/20 transition-all cursor-pointer">
            <Trash2 className="h-3.5 w-3.5" /> Hapus Semua
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isComparing && itemA && itemB && (
          <motion.div initial={{ opacity: 0, height: 0, marginBottom: 0 }} animate={{ opacity: 1, height: 'auto', marginBottom: 24 }} exit={{ opacity: 0, height: 0, marginBottom: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }} className="overflow-hidden">
            <div className="bg-slate-950 rounded-xl border border-amber-500/20 p-5 sm:p-6 shadow-2xl relative">
              <div className="absolute top-0 right-0 p-3">
                <button onClick={handleClearSelected} className="text-slate-500 hover:text-white p-1 rounded-full hover:bg-slate-900 transition-colors cursor-pointer"><X className="h-4 w-4" /></button>
              </div>
              <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-3">
                <Scale className="h-5 w-5 text-amber-500" />
                <h4 className="font-display font-extrabold text-sm uppercase tracking-wider text-white">Matrik Perbandingan Berdampingan</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[500px]">
                  <thead>
                    <tr className="border-b border-slate-850">
                      <th className="py-2.5 text-[10px] uppercase tracking-wider text-slate-500 font-bold w-1/3">Parameter</th>
                      <th className="py-2.5 text-xs font-bold text-amber-400 w-1/3">Opsi A: {itemA.name}</th>
                      <th className="py-2.5 text-xs font-bold text-indigo-400 w-1/3">Opsi B: {itemB.name}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-900 text-xs text-slate-300 font-medium">
                    <tr>
                      <td className="py-3 font-semibold text-slate-400 flex items-center gap-1.5"><Layers className="h-3.5 w-3.5 text-slate-500" /> Metode Kerja</td>
                      <td className="py-3"><span className="font-bold text-white">{itemA.input.pileType === 'bored-pile-machine' ? 'Bored Pile (Mini Crane)' : 'Strauss Pile (Manual)'}</span></td>
                      <td className="py-3"><span className="font-bold text-white">{itemB.input.pileType === 'bored-pile-machine' ? 'Bored Pile (Mini Crane)' : 'Strauss Pile (Manual)'}</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-slate-400">Dimensi & Volume</td>
                      <td className="py-3 font-mono">{'Ø'} {itemA.input.diameter} cm @ {itemA.input.depth} m</td>
                      <td className="py-3 font-mono">{'Ø'} {itemB.input.diameter} cm @ {itemB.input.depth} m</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-slate-400">Estimasi ReadyMix K-300</td>
                      <td className="py-3 font-mono">{itemA.result.concreteVolumeM3} m³</td>
                      <td className="py-3 font-mono">{itemB.result.concreteVolumeM3} m³</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-slate-400">Estimasi Besi Beton</td>
                      <td className="py-3 font-mono">{itemA.input.includeMaterial ? `${itemA.result.rebarWeightKg} Kg (${(itemA.result.rebarWeightKg / 1000).toFixed(2)} Ton)` : 'Disiapkan Owner'}</td>
                      <td className="py-3 font-mono">{itemB.input.includeMaterial ? `${itemB.result.rebarWeightKg} Kg (${(itemB.result.rebarWeightKg / 1000).toFixed(2)} Ton)` : 'Disiapkan Owner'}</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-slate-400">Total Kedalaman Bor</td>
                      <td className="py-3 font-mono">{itemA.input.points} Titik ({itemA.result.totalMeters} m¹)</td>
                      <td className="py-3 font-mono">{itemB.input.points} Titik ({itemB.result.totalMeters} m¹)</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-slate-400">Tanah & Lokasi</td>
                      <td className="py-3">{itemA.input.soilType === 'soft' ? 'Tanah Lunak' : itemA.input.soilType === 'medium' ? 'Tanah Sedang' : 'Tanah Keras'} | {itemA.input.region.toUpperCase()}</td>
                      <td className="py-3">{itemB.input.soilType === 'soft' ? 'Tanah Lunak' : itemB.input.soilType === 'medium' ? 'Tanah Sedang' : 'Tanah Keras'} | {itemB.input.region.toUpperCase()}</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-slate-400">Sistem Pengadaan</td>
                      <td className="py-3">{itemA.input.includeMaterial ? <span className="text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">All-In Material</span> : <span className="text-slate-400 bg-slate-900 px-1.5 py-0.5 rounded">Jasa Bor Saja</span>}</td>
                      <td className="py-3">{itemB.input.includeMaterial ? <span className="text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">All-In Material</span> : <span className="text-slate-400 bg-slate-900 px-1.5 py-0.5 rounded">Jasa Bor Saja</span>}</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-slate-400 flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-slate-500" /> Durasi Konstruksi</td>
                      <td className="py-3"><span className="font-mono text-white">{itemA.result.durationDaysMin} - {itemA.result.durationDaysMax} Hari</span>{itemA.result.durationDaysMax < itemB.result.durationDaysMax && <span className="ml-2 text-[10px] text-emerald-400 font-semibold bg-emerald-500/10 px-1.5 py-0.2 rounded">Lebih Cepat</span>}</td>
                      <td className="py-3"><span className="font-mono text-white">{itemB.result.durationDaysMin} - {itemB.result.durationDaysMax} Hari</span>{itemB.result.durationDaysMax < itemA.result.durationDaysMax && <span className="ml-2 text-[10px] text-emerald-400 font-semibold bg-emerald-500/10 px-1.5 py-0.2 rounded">Lebih Cepat</span>}</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-slate-400 flex items-center gap-1.5"><Coins className="h-3.5 w-3.5 text-slate-500" /> Estimasi Investasi</td>
                      <td className="py-3 font-mono">
                        <div className="text-amber-400 font-bold text-sm">{formatRangeCost(itemA.result.costMin, itemA.result.costMax)}</div>
                        {itemA.result.costMin < itemB.result.costMin && <span className="mt-1 inline-flex items-center gap-1 text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20"><TrendingDown className="h-3 w-3" /> Lebih Hemat</span>}
                      </td>
                      <td className="py-3 font-mono">
                        <div className="text-indigo-400 font-bold text-sm">{formatRangeCost(itemB.result.costMin, itemB.result.costMax)}</div>
                        {itemB.result.costMin < itemA.result.costMin && <span className="mt-1 inline-flex items-center gap-1 text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20"><TrendingDown className="h-3 w-3" /> Lebih Hemat</span>}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-5 p-4 bg-slate-900 rounded-xl border border-slate-800/80 flex items-start gap-3">
                <Info className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                <div className="text-xs">
                  <h5 className="font-bold text-amber-400 uppercase tracking-wide text-[10px] mb-1">Rekomendasi Teknikal</h5>
                  <p className="text-slate-400 leading-relaxed">
                    {itemA.input.pileType !== itemB.input.pileType ? (
                      <span>Anda membandingkan <strong className="text-white">Mini Crane</strong> dengan <strong className="text-white">Strauss Pile</strong>. Mini Crane lebih andal untuk tanah keras & kedalaman besar; Strauss Pile cocok untuk akses sempit & biaya lebih ekonomis.</span>
                    ) : (
                      <span>Kedua opsi menggunakan metode yang sama. Perbedaan utama di diameter/kedalaman yang berdampak pada volume material & daya dukung fondasi.</span>
                    )}
                  </p>
                </div>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-850 flex flex-col sm:flex-row gap-3 justify-end">
                <button onClick={handleCopyToClipboard} className="bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-300 hover:text-white px-4 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer">
                  <Copy className="h-4 w-4" />{copied ? 'Berhasil Disalin!' : 'Salin Rincian'}
                </button>
                <a href={handleGetComparisonWALink()} target="_blank" rel="noreferrer" className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-lg hover:shadow-emerald-500/10 transition-all cursor-pointer">
                  <Phone className="h-4 w-4 fill-current" /> Tanya Teknisi
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {selectedIds.length === 1 && (
        <div className="mb-4 p-3 bg-indigo-500/5 rounded-xl border border-indigo-500/10 text-xs text-indigo-400 flex items-center gap-2 animate-pulse">
          <Scale className="h-4 w-4 flex-shrink-0" />
          <span>Pilih <strong className="text-white">1 lagi</strong> untuk membandingkan keduanya!</span>
        </div>
      )}

      <div className="grid gap-4 relative z-10">
        {estimates.map((item) => {
          const ratio = (item.result.costMin / maxCost) * 100;
          const isMachine = item.input.pileType === 'bored-pile-machine';
          const isSelected = selectedIds.includes(item.id);
          return (
            <div key={item.id} onClick={() => onLoad(item)} className={`group bg-slate-950/60 hover:bg-slate-950 border p-5 rounded-xl cursor-pointer transition-all flex flex-col md:flex-row md:items-center justify-between gap-5 relative overflow-hidden ${
              isSelected ? 'border-amber-500 bg-slate-950 shadow-md ring-1 ring-amber-500/30' : 'border-slate-800 hover:border-amber-500/40'
            }`}>
              <div className="flex-1 min-w-0 flex items-start gap-4">
                <button onClick={(e) => handleToggleSelect(item.id, e)} className={`mt-1 h-5 w-5 rounded-md border flex items-center justify-center transition-all flex-shrink-0 cursor-pointer ${
                  isSelected ? 'bg-amber-500 border-amber-500 text-slate-950' : 'border-slate-700 bg-slate-900 group-hover:border-amber-500/50'
                }`}>
                  {isSelected && <Check className="h-3.5 w-3.5 stroke-[3.5]" />}
                </button>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider ${
                      isMachine ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                    }`}>{isMachine ? 'Mini Crane' : 'Strauss Manual'}</span>
                    <span className="text-xs font-mono font-bold text-slate-300">D-{item.input.diameter}cm | {item.input.depth}m | {item.input.points} Titik</span>
                    <span className="text-[10px] font-semibold text-slate-500 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">{item.input.region.toUpperCase()}</span>
                  </div>
                  <h4 className="font-display font-bold text-sm text-white mt-2 group-hover:text-amber-400 transition-colors line-clamp-1">{item.name}</h4>
                  <div className="text-[10px] text-slate-400 mt-1 flex items-center gap-3">
                    <span>Volume: <strong className="text-slate-300">{item.result.concreteVolumeM3} m³</strong></span>
                    <span>Besi: <strong className="text-slate-300">{item.input.includeMaterial ? `${(item.result.rebarWeightKg / 1000).toFixed(2)} Ton` : 'Disiapkan Owner'}</strong></span>
                    <span>Durasi: <strong className="text-slate-300">{item.result.durationDaysMin}-{item.result.durationDaysMax} Hari</strong></span>
                  </div>
                </div>
              </div>
              <div className="flex-1 max-w-sm hidden lg:block">
                <div className="flex justify-between items-center text-[10px] text-slate-400 mb-1">
                  <span>Rasio</span>
                  <span className="font-mono font-bold text-amber-400">{ratio.toFixed(0)}%</span>
                </div>
                <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800">
                  <div className="bg-amber-500 h-full rounded-full transition-all duration-500" style={{ width: `${ratio}%` }} />
                </div>
              </div>
              <div className="flex items-center justify-between md:justify-end gap-4 border-t border-slate-800/40 md:border-t-0 pt-3 md:pt-0">
                <div className="text-left md:text-right">
                  <div className="text-[9px] text-slate-500 uppercase tracking-wider">Estimasi</div>
                  <div className="text-sm font-mono font-extrabold text-amber-400 mt-0.5">{formatRangeCost(item.result.costMin, item.result.costMax)}</div>
                </div>
                <div className="flex items-center gap-2">
                  <a href={generateWhatsAppLink(item.input, item.result)} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="bg-emerald-600/10 hover:bg-emerald-600 border border-emerald-500/20 text-emerald-400 hover:text-white p-2 rounded-lg transition-colors" title="Konsultasikan">
                    <Phone className="h-4 w-4" />
                  </a>
                  <button onClick={(e) => onDelete(item.id, e)} className="text-slate-500 hover:text-rose-400 p-2 hover:bg-rose-500/10 rounded-lg transition-colors cursor-pointer"><X className="h-4 w-4" /></button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
