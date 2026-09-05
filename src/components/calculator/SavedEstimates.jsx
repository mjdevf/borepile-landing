import React, { useState } from 'react';
import { Trash2, Phone, Sparkles, X, Scale, Check, Copy, TrendingDown, Calendar, Coins, Layers, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { formatRangeCost, generateWhatsAppLink } from './calculator';

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
- Dimensi: D-${itemA.input.diameter}cm, ${itemA.input.depth}m, ${itemA.input.points} titik (${itemA.result.totalMeters} m\u00b9)
- Material: ${itemA.input.includeMaterial ? 'All-In' : 'Jasa Bor Saja'}
- Estimasi: ${formatRangeCost(itemA.result.costMin, itemA.result.costMax)}
- Durasi: ${itemA.result.durationDaysMin} - ${itemA.result.durationDaysMax} Hari

OPSI B: ${itemB.name}
- Metode: ${itemB.input.pileType === 'bored-pile-machine' ? 'Bored Pile Mini Crane' : 'Strauss Pile Manual'}
- Dimensi: D-${itemB.input.diameter}cm, ${itemB.input.depth}m, ${itemB.input.points} titik (${itemB.result.totalMeters} m\u00b9)
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

  const borderCol = 'border-border-muted';
  const textSec = 'text-secondary';
  const gold = 'text-accent';

  return (
    <div className="rounded-sm border border-border-muted bg-surface p-6 relative overflow-hidden">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 relative z-10">
        <div>
          <div className="flex items-center gap-1.5">
            <Sparkles className={`h-4 w-4 ${gold} animate-pulse`} />
            <h3 className="text-sm sm:text-base font-bold text-primary">
              Konfigurasi Tersimpan & Perbandingan ({estimates.length}/5)
            </h3>
          </div>
          <p className="text-xs text-secondary mt-1">
            Centang <strong className={gold}>2 opsi</strong> untuk membuka panel perbandingan.
          </p>
        </div>
        <div className="flex items-center gap-3 self-stretch sm:self-auto justify-between">
          {selectedIds.length > 0 && (
            <button onClick={handleClearSelected} className={`text-xs ${textSec} hover:text-primary font-semibold underline cursor-pointer`}>Reset Pilihan</button>
          )}
          <button onClick={onClearAll} className={`text-xs text-alert-red hover:text-alert-red/80 font-bold flex items-center gap-1.5 px-3 py-1.5 rounded-sm hover:bg-alert-red/5 border border-transparent hover:border-alert-red/20 transition-all cursor-pointer`}>
            <Trash2 className="h-3.5 w-3.5" /> Hapus Semua
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isComparing && itemA && itemB && (
          <motion.div initial={{ opacity: 0, height: 0, marginBottom: 0 }} animate={{ opacity: 1, height: 'auto', marginBottom: 24 }} exit={{ opacity: 0, height: 0, marginBottom: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }} className="overflow-hidden">
            <div className="bg-surface-container-low rounded-sm border border-border-muted p-5 sm:p-6 relative">
              <div className="absolute top-0 right-0 p-3">
                <button onClick={handleClearSelected} className={`${textSec} hover:text-primary p-1 rounded-full hover:bg-surface-container transition-colors cursor-pointer`}><X className="h-4 w-4" /></button>
              </div>
              <div className="flex items-center gap-2 mb-4 border-b ${borderCol} pb-3">
                <Scale className={`h-5 w-5 ${gold}`} />
                <h4 className="text-sm font-bold text-primary">Matrik Perbandingan Berdampingan</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[500px]">
                  <thead>
                    <tr className="border-b ${borderCol}">
                      <th className={`py-2.5 text-xs ${textSec} font-bold w-1/3`}>Parameter</th>
                      <th className={`py-2.5 text-xs font-bold ${gold} w-1/3`}>Opsi A: {itemA.name}</th>
                      <th className="py-2.5 text-xs font-bold text-accent w-1/3">Opsi B: {itemB.name}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y ${borderCol} text-xs text-secondary font-medium">
                    <tr>
                      <td className="py-3 font-semibold text-secondary flex items-center gap-1.5"><Layers className="h-3.5 w-3.5 text-on-surface-variant" /> Metode Kerja</td>
                      <td className="py-3"><span className="font-bold text-primary">{itemA.input.pileType === 'bored-pile-machine' ? 'Bored Pile (Mini Crane)' : 'Strauss Pile (Manual)'}</span></td>
                      <td className="py-3"><span className="font-bold text-primary">{itemB.input.pileType === 'bored-pile-machine' ? 'Bored Pile (Mini Crane)' : 'Strauss Pile (Manual)'}</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-secondary">Dimensi & Volume</td>
                      <td className="py-3 font-mono text-primary">{'\u00d8'} {itemA.input.diameter} cm @ {itemA.input.depth} m</td>
                      <td className="py-3 font-mono text-primary">{'\u00d8'} {itemB.input.diameter} cm @ {itemB.input.depth} m</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-secondary">Estimasi ReadyMix K-300</td>
                      <td className="py-3 font-mono text-primary">{itemA.result.concreteVolumeM3} m\u00b3</td>
                      <td className="py-3 font-mono text-primary">{itemB.result.concreteVolumeM3} m\u00b3</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-secondary">Estimasi Besi Beton</td>
                      <td className="py-3 font-mono text-primary">{itemA.input.includeMaterial ? `${itemA.result.rebarWeightKg} Kg (${(itemA.result.rebarWeightKg / 1000).toFixed(2)} Ton)` : 'Disiapkan Owner'}</td>
                      <td className="py-3 font-mono text-primary">{itemB.input.includeMaterial ? `${itemB.result.rebarWeightKg} Kg (${(itemB.result.rebarWeightKg / 1000).toFixed(2)} Ton)` : 'Disiapkan Owner'}</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-secondary">Total Kedalaman Bor</td>
                      <td className="py-3 font-mono text-primary">{itemA.input.points} Titik ({itemA.result.totalMeters} m\u00b9)</td>
                      <td className="py-3 font-mono text-primary">{itemB.input.points} Titik ({itemB.result.totalMeters} m\u00b9)</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-secondary">Tanah & Lokasi</td>
                      <td className="py-3 text-primary">{itemA.input.soilType === 'soft' ? 'Tanah Lunak' : itemA.input.soilType === 'medium' ? 'Tanah Sedang' : 'Tanah Keras'} | {itemA.input.region.toUpperCase()}</td>
                      <td className="py-3 text-primary">{itemB.input.soilType === 'soft' ? 'Tanah Lunak' : itemB.input.soilType === 'medium' ? 'Tanah Sedang' : 'Tanah Keras'} | {itemB.input.region.toUpperCase()}</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-secondary">Sistem Pengadaan</td>
                      <td className="py-3">{itemA.input.includeMaterial ? <span className="text-success-green font-bold bg-success-green/5 px-1.5 py-0.5 rounded border border-success-green/20">All-In Material</span> : <span className={textSec}>Jasa Bor Saja</span>}</td>
                      <td className="py-3">{itemB.input.includeMaterial ? <span className="text-success-green font-bold bg-success-green/5 px-1.5 py-0.5 rounded border border-success-green/20">All-In Material</span> : <span className={textSec}>Jasa Bor Saja</span>}</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-secondary flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-on-surface-variant" /> Durasi Konstruksi</td>
                      <td className="py-3"><span className="font-mono font-bold text-primary">{itemA.result.durationDaysMin} - {itemA.result.durationDaysMax} Hari</span>{itemA.result.durationDaysMax < itemB.result.durationDaysMax && <span className="ml-2 text-[10px] text-success-green font-semibold bg-success-green/5 px-1.5 py-0.2 rounded">Lebih Cepat</span>}</td>
                      <td className="py-3"><span className="font-mono font-bold text-primary">{itemB.result.durationDaysMin} - {itemB.result.durationDaysMax} Hari</span>{itemB.result.durationDaysMax < itemA.result.durationDaysMax && <span className="ml-2 text-[10px] text-success-green font-semibold bg-success-green/5 px-1.5 py-0.2 rounded">Lebih Cepat</span>}</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-secondary flex items-center gap-1.5"><Coins className="h-3.5 w-3.5 text-on-surface-variant" /> Estimasi Investasi</td>
                      <td className="py-3 font-mono">
                        <div className={`font-bold text-sm ${gold}`}>{formatRangeCost(itemA.result.costMin, itemA.result.costMax)}</div>
                        {itemA.result.costMin < itemB.result.costMin && <span className="mt-1 inline-flex items-center gap-1 text-[10px] text-success-green font-bold bg-success-green/5 px-2 py-0.5 rounded border border-success-green/20"><TrendingDown className="h-3 w-3" /> Lebih Hemat</span>}
                      </td>
                      <td className="py-3 font-mono">
                        <div className="font-bold text-sm text-accent">{formatRangeCost(itemB.result.costMin, itemB.result.costMax)}</div>
                        {itemB.result.costMin < itemA.result.costMin && <span className="mt-1 inline-flex items-center gap-1 text-[10px] text-success-green font-bold bg-success-green/5 px-2 py-0.5 rounded border border-success-green/20"><TrendingDown className="h-3 w-3" /> Lebih Hemat</span>}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-5 p-4 bg-surface-container-low rounded-sm border border-border-muted flex items-start gap-3">
                <Info className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-xs">
                  <h5 className="font-bold text-xs mb-1 text-accent">Rekomendasi Teknikal</h5>
                  <p className="text-secondary leading-relaxed">
                    {itemA.input.pileType !== itemB.input.pileType ? (
                      <span>Anda membandingkan <strong className="text-primary">Mini Crane</strong> dengan <strong className="text-primary">Strauss Pile</strong>. Mini Crane lebih andal untuk tanah keras & kedalaman besar; Strauss Pile cocok untuk akses sempit & biaya lebih ekonomis.</span>
                    ) : (
                      <span>Kedua opsi menggunakan metode yang sama. Perbedaan utama di diameter/kedalaman yang berdampak pada volume material & daya dukung fondasi.</span>
                    )}
                  </p>
                </div>
              </div>
              <div className="mt-5 pt-4 border-t border-border-muted flex flex-col sm:flex-row gap-3 justify-end">
                <button onClick={handleCopyToClipboard} className="bg-surface hover:bg-surface-container-low border border-border-muted text-secondary hover:text-primary px-4 py-2.5 rounded-sm font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer">
                  {copied ? <Check className="h-4 w-4 text-success-green" /> : <Copy className="h-4 w-4" />}
                  {copied ? 'Tersalin!' : 'Salin Perbandingan'}
                </button>
                <a href={handleGetComparisonWALink()} target="_blank" rel="noreferrer" className="bg-accent hover:bg-accent-dark text-on-primary px-5 py-2.5 rounded-sm font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer">
                  <Phone className="h-4 w-4" /> Konsultasikan Kedua Opsi via WA
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {selectedIds.length === 1 && (
        <div className="mb-4 p-3 bg-accent/5 rounded-sm border border-accent/15 text-xs text-accent flex items-center gap-2 animate-pulse">
          <Scale className="h-4 w-4 flex-shrink-0" />
          <span>Pilih <strong className="text-primary">1 lagi</strong> untuk membandingkan keduanya!</span>
        </div>
      )}

      <div className="grid gap-4 relative z-10">
        {estimates.map((item) => {
          const ratio = (item.result.costMin / maxCost) * 100;
          const isMachine = item.input.pileType === 'bored-pile-machine';
          const isSelected = selectedIds.includes(item.id);
          return (
            <div key={item.id} onClick={() => onLoad(item)} className={`group border p-5 rounded-sm cursor-pointer transition-all flex flex-col md:flex-row md:items-center justify-between gap-5 relative overflow-hidden ${isSelected ? 'border-accent bg-surface shadow-sm ring-1 ring-accent/30' : 'border-border-muted bg-surface hover:border-accent/40 hover:bg-surface-container-low'}`}>
              <div className="flex-1 min-w-0 flex items-start gap-4">
                <button onClick={(e) => handleToggleSelect(item.id, e)} className={`mt-1 h-5 w-5 rounded-sm border flex items-center justify-center transition-all flex-shrink-0 cursor-pointer ${isSelected ? 'bg-accent border-accent text-on-primary' : 'border-outline-variant bg-surface-container-lowest group-hover:border-accent/50'}`}>
                  {isSelected && <Check className="h-3.5 w-3.5 stroke-[3.5]" />}
                </button>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-sm uppercase tracking-wider ${isMachine ? 'bg-accent/5 text-accent border border-accent/20' : `${gold} bg-accent/5 border border-accent/20`}`}>
                      {isMachine ? 'Mini Crane' : 'Strauss Manual'}
                    </span>
                    <span className="text-xs font-mono font-bold text-on-surface-variant">D-{item.input.diameter}cm | {item.input.depth}m | {item.input.points} Titik</span>
                    <span className={`text-[10px] font-semibold text-secondary bg-surface-container-low px-1.5 py-0.5 rounded-sm border ${borderCol}`}>{item.input.region.toUpperCase()}</span>
                  </div>
                  <h4 className="text-sm font-bold text-primary mt-2 group-hover:text-accent transition-colors line-clamp-1">{item.name}</h4>
                  <div className={`text-[10px] text-secondary mt-1 flex items-center gap-3`}>
                    <span>Volume: <strong className="text-primary">{item.result.concreteVolumeM3} m³</strong></span>
                    <span>Besi: <strong className="text-primary">{item.input.includeMaterial ? `${(item.result.rebarWeightKg / 1000).toFixed(2)} Ton` : 'Disiapkan Owner'}</strong></span>
                    <span>Durasi: <strong className="text-primary">{item.result.durationDaysMin}-{item.result.durationDaysMax} Hari</strong></span>
                  </div>
                </div>
              </div>
              <div className="flex-1 max-w-sm hidden lg:block">
                <div className="flex justify-between items-center text-[10px] text-secondary mb-1">
                  <span>Rasio</span>
                  <span className={`font-mono font-bold ${gold}`}>{ratio.toFixed(0)}%</span>
                </div>
                <div className="w-full bg-surface-container-low h-2 rounded-full overflow-hidden border border-border-muted">
                  <div className="bg-accent h-full rounded-full transition-all duration-500" style={{ width: `${ratio}%` }} />
                </div>
              </div>
              <div className="flex items-center justify-between md:justify-end gap-4 border-t border-border-muted/40 md:border-t-0 pt-3 md:pt-0">
                <div className="text-left md:text-right">
                  <div className={`text-[9px] uppercase tracking-wider ${textSec}`}>Estimasi</div>
                  <div className={`text-sm font-mono font-extrabold mt-0.5 ${gold}`}>{formatRangeCost(item.result.costMin, item.result.costMax)}</div>
                </div>
                <div className="flex items-center gap-2">
                  <a href={generateWhatsAppLink(item.input, item.result)} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="bg-accent/10 hover:bg-accent border border-accent/20 text-accent hover:text-on-primary p-2 rounded-sm transition-colors" title="Konsultasikan">
                    <Phone className="h-4 w-4" />
                  </a>
                  <button onClick={(e) => onDelete(item.id, e)} className="text-secondary hover:text-alert-red p-2 hover:bg-alert-red/5 rounded-sm transition-colors cursor-pointer"><X className="h-4 w-4" /></button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
