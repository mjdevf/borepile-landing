// calculator.js — Borepile estimation engine (range pricing)
// Ported from utils.ts — JS biasa, no TypeScript

export function formatRupiah(value) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(value);
}

// Range display: "Rp 20 – 30 Juta"
export function formatRangeCost(min, max) {
  const minMillions = Math.round(min / 1000000);
  const maxMillions = Math.round(max / 1000000);
  if (minMillions === maxMillions) return `~Rp ${minMillions} Juta`;
  return `Rp ${minMillions} – ${maxMillions} Juta`;
}

// Compact format: "Rp20–30jt"
export function formatCostCompact(min, max) {
  const minM = Math.round(min / 1000000);
  const maxM = Math.round(max / 1000000);
  if (minM === maxM) return `~Rp${minM}jt`;
  return `Rp${minM}–${maxM}jt`;
}

export function calculateEstimation(input) {
  const { pileType, diameter, depth, points, soilType, region, includeMaterial } = input;
  const totalMeters = depth * points;

  // 1. Base Drilling Cost per Meter (IDR)
  let baseDrillMin = 0, baseDrillMax = 0;
  if (pileType === 'strauss-pile-manual') {
    if (diameter <= 20)      { baseDrillMin = 75000;  baseDrillMax = 90000; }
    else if (diameter <= 25) { baseDrillMin = 85000;  baseDrillMax = 105000; }
    else                     { baseDrillMin = 95000;  baseDrillMax = 125000; }
  } else {
    if (diameter <= 30)      { baseDrillMin = 140000; baseDrillMax = 175000; }
    else if (diameter <= 40) { baseDrillMin = 175000; baseDrillMax = 215000; }
    else if (diameter <= 50) { baseDrillMin = 225000; baseDrillMax = 275000; }
    else                     { baseDrillMin = 285000; baseDrillMax = 350000; }
  }

  // 2. Soil Multiplier
  let soilMultiplier = 1.0;
  if (soilType === 'medium') soilMultiplier = 1.15;
  if (soilType === 'hard')   soilMultiplier = 1.35;

  const drillCostMin = Math.round(baseDrillMin * soilMultiplier * totalMeters);
  const drillCostMax = Math.round(baseDrillMax * soilMultiplier * totalMeters);

  // 3. Mobilization
  const mobMapStrauss = { jabodetabek: 1500000, 'jawa-barat': 2500000, 'jawa-tengah-timur': 4500000, 'luar-jawa': 15000000 };
  const mobMapMachine = { jabodetabek: 5000000, 'jawa-barat': 11000000, 'jawa-tengah-timur': 15000000, 'luar-jawa': 35000000 };
  const mobilizationCost = pileType === 'strauss-pile-manual'
    ? (mobMapStrauss[region] || 0)
    : (mobMapMachine[region] || 0);

  // 4. Material
  const radiusM = diameter / 200;
  const theoreticalVolume = Math.PI * radiusM ** 2 * totalMeters;
  const concreteVolumeM3 = parseFloat((theoreticalVolume * 1.15).toFixed(2));

  let rebarPerM = 4.5;
  if (diameter <= 20)      rebarPerM = 4.5;
  else if (diameter <= 25) rebarPerM = 6.0;
  else if (diameter <= 30) rebarPerM = 8.5;
  else if (diameter <= 40) rebarPerM = 14.5;
  else if (diameter <= 50) rebarPerM = 21.0;
  else                     rebarPerM = 30.5;

  const rebarWeightKg = Math.round(rebarPerM * totalMeters);
  const steelCost  = rebarWeightKg * 13000;
  const cementCost = concreteVolumeM3 * 1100000;
  const totalMaterialCost = includeMaterial ? Math.round(steelCost + cementCost) : 0;
  const materialCostMin = Math.round(totalMaterialCost * 0.95);
  const materialCostMax = Math.round(totalMaterialCost * 1.05);

  // 5. Mud handling
  const mudHandling = pileType === 'bored-pile-machine' ? points * 200000 : 0;

  // 6. Duration
  let pointsPerDay = 3.5;
  if (pileType === 'strauss-pile-manual') pointsPerDay = 5.0 / (depth / 6.0);
  else pointsPerDay = 3.0 / (depth / 12.0);
  if (soilType === 'medium') pointsPerDay *= 0.85;
  if (soilType === 'hard')   pointsPerDay *= 0.65;
  const durRaw = points / Math.max(pointsPerDay, 0.01);
  const durationDaysMin = Math.max(2, Math.floor(durRaw * 0.9));
  const durationDaysMax = Math.max(3, Math.ceil(durRaw * 1.2));

  // 7. Final (range)
  const costMin = drillCostMin + mobilizationCost + materialCostMin + mudHandling;
  const costMax = drillCostMax + mobilizationCost + materialCostMax + mudHandling;

  return {
    pileType, diameter, depth, points, totalMeters,
    costMin, costMax,
    concreteVolumeM3, rebarWeightKg,
    durationDaysMin, durationDaysMax,
    itemizedCosts: {
      drilling: { min: drillCostMin, max: drillCostMax },
      material: { min: materialCostMin, max: materialCostMax },
      mobilization: mobilizationCost,
      mudHandling: mudHandling > 0 ? mudHandling : undefined,
    },
  };
}

export function generateWhatsAppLink(input, result) {
  const isMachine = input.pileType === 'bored-pile-machine';
  const typeText = isMachine ? 'Bored Pile Mesin (Mini Crane)' : 'Strauss Pile (Manual)';
  const materialText = input.includeMaterial ? 'Sistem All-In (Jasa + Material)' : 'Jasa Pengeboran Saja';
  const soilMap = { soft: 'Tanah Lunak / Lempung', medium: 'Tanah Sedang', hard: 'Tanah Keras / Berbatu' };
  const regionMap = { jabodetabek: 'JABODETABEK', 'jawa-barat': 'Jawa Barat', 'jawa-tengah-timur': 'Jawa Tengah / Jawa Timur', 'luar-jawa': 'Luar Pulau Jawa' };

  const range = formatRangeCost(result.costMin, result.costMax);
  const text = `Halo Admin Borepile Maju Jaya, saya tertarik untuk berkonsultasi mengenai jasa Bored Pile/Strauss Pile.

Berikut rincian estimasi proyek saya dari kalkulator website:
- *Jenis Pekerjaan*: ${typeText}
- *Pilihan Sistem*: ${materialText}
- *Diameter Bor*: ${input.diameter} cm
- *Kedalaman Lubang*: ${input.depth} meter
- *Jumlah Titik*: ${input.points} titik (Total: ${result.totalMeters} m¹)
- *Kondisi Tanah*: ${soilMap[input.soilType] || input.soilType}
- *Lokasi Proyek*: ${regionMap[input.region] || input.region}

*Estimasi Biaya*: ${range} (perkiraan awal, belum termasuk PPN)
*Estimasi Durasi*: ${result.durationDaysMin} - ${result.durationDaysMax} hari kerja.

Mohon info ketersediaan jadwal dan survei lokasi untuk penawaran resmi. Terima kasih!`;

  return `https://wa.me/6281514811120?text=${encodeURIComponent(text)}`;
}
