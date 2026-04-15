const STATS = ["Speed", "Acceleration", "Altitude", "Energy", "Handling", "Toughness", "Boost", "Training"];
const INF = 1_000_000_000;

const MATERIALS_BY_LEVEL = [
  {
    max: 9,
    materials: [
      ["copper_ingot", { Energy: 4, Toughness: 8 }],
      ["copper_gem", { Speed: 4, Energy: 2, Training: 6 }],
      ["oak_wood", { Speed: 2, Acceleration: 6, Toughness: 4 }],
      ["oak_paper", { Altitude: 8, Boost: 4 }],
      ["wheat_string", { Acceleration: 2, Handling: 4, Boost: 6 }],
      ["wheat_grains", { Speed: 8, Altitude: 4 }],
      ["gudgeon_oil", { Altitude: 2, Handling: 6, Training: 4 }],
      ["gudgeon_meat", { Acceleration: 4, Energy: 8 }],
    ],
  },
  {
    max: 19,
    materials: [
      ["granite_ingot", { Energy: 5, Toughness: 10 }],
      ["granite_gem", { Speed: 5, Energy: 2, Training: 8 }],
      ["birch_wood", { Speed: 2, Acceleration: 8, Toughness: 5 }],
      ["birch_paper", { Altitude: 10, Boost: 5 }],
      ["barley_string", { Acceleration: 2, Handling: 5, Boost: 8 }],
      ["barley_grains", { Speed: 10, Altitude: 5 }],
      ["trout_oil", { Altitude: 2, Handling: 8, Training: 5 }],
      ["trout_meat", { Acceleration: 5, Energy: 10 }],
    ],
  },
  {
    max: 29,
    materials: [
      ["gold_ingot", { Energy: 5, Toughness: 12 }],
      ["gold_gem", { Speed: 6, Energy: 3, Training: 9 }],
      ["willow_wood", { Speed: 3, Acceleration: 9, Toughness: 6 }],
      ["willow_paper", { Altitude: 12, Boost: 5 }],
      ["oat_string", { Acceleration: 3, Handling: 6, Boost: 9 }],
      ["oat_grains", { Speed: 12, Altitude: 5 }],
      ["salmon_oil", { Altitude: 3, Handling: 9, Training: 6 }],
      ["salmon_meat", { Acceleration: 5, Energy: 12 }],
    ],
  },
  {
    max: 39,
    materials: [
      ["sandstone_ingot", { Energy: 6, Toughness: 14 }],
      ["sandstone_gem", { Speed: 6, Energy: 3, Training: 11 }],
      ["acacia_wood", { Speed: 3, Acceleration: 11, Toughness: 6 }],
      ["acacia_paper", { Altitude: 14, Boost: 6 }],
      ["malt_string", { Acceleration: 3, Handling: 6, Boost: 11 }],
      ["malt_grains", { Speed: 14, Altitude: 6 }],
      ["carp_oil", { Altitude: 3, Handling: 11, Training: 6 }],
      ["carp_meat", { Acceleration: 6, Energy: 14 }],
    ],
  },
  {
    max: 49,
    materials: [
      ["iron_ingot", { Energy: 6, Toughness: 16 }],
      ["iron_gem", { Speed: 7, Energy: 3, Training: 12 }],
      ["spruce_wood", { Speed: 3, Acceleration: 12, Toughness: 7 }],
      ["spruce_paper", { Altitude: 16, Boost: 6 }],
      ["hops_string", { Acceleration: 3, Handling: 7, Boost: 12 }],
      ["hops_grains", { Speed: 16, Altitude: 6 }],
      ["icefish_oil", { Altitude: 3, Handling: 12, Training: 7 }],
      ["icefish_meat", { Acceleration: 6, Energy: 16 }],
    ],
  },
  {
    max: 59,
    materials: [
      ["silver_ingot", { Energy: 7, Toughness: 18 }],
      ["silver_gem", { Speed: 8, Energy: 4, Training: 14 }],
      ["jungle_wood", { Speed: 4, Acceleration: 14, Toughness: 8 }],
      ["jungle_paper", { Altitude: 18, Boost: 7 }],
      ["rye_string", { Acceleration: 4, Handling: 8, Boost: 14 }],
      ["rye_grains", { Speed: 18, Altitude: 7 }],
      ["piranha_oil", { Altitude: 4, Handling: 14, Training: 8 }],
      ["piranha_meat", { Acceleration: 7, Energy: 18 }],
    ],
  },
  {
    max: 69,
    materials: [
      ["cobalt_ingot", { Energy: 8, Toughness: 20 }],
      ["cobalt_gem", { Speed: 9, Energy: 4, Training: 15 }],
      ["dark_wood", { Speed: 4, Acceleration: 15, Toughness: 9 }],
      ["dark_paper", { Altitude: 20, Boost: 8 }],
      ["millet_string", { Acceleration: 4, Handling: 9, Boost: 15 }],
      ["millet_grains", { Speed: 20, Altitude: 8 }],
      ["koi_oil", { Altitude: 4, Handling: 15, Training: 9 }],
      ["koi_meat", { Acceleration: 8, Energy: 20 }],
    ],
  },
  {
    max: 79,
    materials: [
      ["kanderstone_ingot", { Energy: 8, Toughness: 22 }],
      ["kanderstone_gem", { Speed: 10, Energy: 4, Training: 17 }],
      ["light_wood", { Speed: 4, Acceleration: 17, Toughness: 10 }],
      ["light_paper", { Altitude: 22, Boost: 8 }],
      ["decay_string", { Acceleration: 4, Handling: 10, Boost: 17 }],
      ["decay_grains", { Speed: 22, Altitude: 8 }],
      ["gylia_oil", { Altitude: 4, Handling: 17, Training: 10 }],
      ["gylia_meat", { Acceleration: 8, Energy: 22 }],
    ],
  },
  {
    max: 89,
    materials: [
      ["diamond_ingot", { Energy: 9, Toughness: 24 }],
      ["diamond_gem", { Speed: 10, Energy: 4, Training: 18 }],
      ["pine_wood", { Speed: 4, Acceleration: 18, Toughness: 10 }],
      ["pine_paper", { Altitude: 24, Boost: 9 }],
      ["rice_string", { Acceleration: 4, Handling: 10, Boost: 18 }],
      ["rice_grains", { Speed: 24, Altitude: 9 }],
      ["bass_oil", { Altitude: 4, Handling: 18, Training: 10 }],
      ["bass_meat", { Acceleration: 9, Energy: 24 }],
    ],
  },
  {
    max: 99,
    materials: [
      ["molten_ingot", { Energy: 9, Toughness: 26 }],
      ["molten_gem", { Speed: 11, Energy: 5, Training: 20 }],
      ["avo_wood", { Speed: 5, Acceleration: 20, Toughness: 11 }],
      ["avo_paper", { Altitude: 26, Boost: 9 }],
      ["sorghum_string", { Acceleration: 5, Handling: 11, Boost: 20 }],
      ["sorghum_grains", { Speed: 26, Altitude: 9 }],
      ["molten_oil", { Altitude: 5, Handling: 20, Training: 11 }],
      ["molten_meat", { Acceleration: 9, Energy: 26 }],
    ],
  },
  {
    max: 104,
    materials: [
      ["voidstone_ingot", { Energy: 10, Toughness: 28 }],
      ["voidstone_gem", { Speed: 12, Energy: 5, Training: 21 }],
      ["sky_wood", { Speed: 5, Acceleration: 21, Toughness: 12 }],
      ["sky_paper", { Altitude: 28, Boost: 10 }],
      ["hemp_string", { Acceleration: 5, Handling: 12, Boost: 21 }],
      ["hemp_grains", { Speed: 28, Altitude: 10 }],
      ["starfish_oil", { Altitude: 5, Handling: 21, Training: 12 }],
      ["starfish_meat", { Acceleration: 10, Energy: 28 }],
    ],
  },
  {
    max: 109,
    materials: [
      ["dernic_ingot", { Energy: 10, Toughness: 29 }],
      ["dernic_gem", { Speed: 12, Energy: 5, Training: 22 }],
      ["dernic_wood", { Speed: 5, Acceleration: 22, Toughness: 12 }],
      ["dernic_paper", { Altitude: 29, Boost: 10 }],
      ["dernic_string", { Acceleration: 5, Handling: 12, Boost: 22 }],
      ["dernic_grains", { Speed: 29, Altitude: 10 }],
      ["dernic_oil", { Altitude: 5, Handling: 22, Training: 12 }],
      ["dernic_meat", { Acceleration: 10, Energy: 29 }],
    ],
  },
  {
    max: 114,
    materials: [
      ["titanium_ingot", { Energy: 11, Toughness: 30 }],
      ["titanium_gem", { Speed: 13, Energy: 5, Training: 23 }],
      ["maple_wood", { Speed: 5, Acceleration: 23, Toughness: 13 }],
      ["maple_paper", { Altitude: 30, Boost: 11 }],
      ["jute_string", { Acceleration: 5, Handling: 13, Boost: 23 }],
      ["jute_grains", { Speed: 30, Altitude: 11 }],
      ["sturgeon_oil", { Altitude: 5, Handling: 23, Training: 13 }],
      ["sturgeon_meat", { Acceleration: 11, Energy: 30 }],
    ],
  },
  {
    max: 119,
    materials: [
      ["cinnabar_ingot", { Energy: 11, Toughness: 31 }],
      ["cinnabar_gem", { Speed: 13, Energy: 5, Training: 23 }],
      ["redwood_wood", { Speed: 5, Acceleration: 23, Toughness: 13 }],
      ["redwood_paper", { Altitude: 31, Boost: 11 }],
      ["heather_string", { Acceleration: 5, Handling: 13, Boost: 23 }],
      ["heather_grains", { Speed: 31, Altitude: 11 }],
      ["mahseer_oil", { Altitude: 5, Handling: 23, Training: 13 }],
      ["mahseer_meat", { Acceleration: 11, Energy: 31 }],
    ],
  },
];

const statsGrid = typeof document !== "undefined" ? document.getElementById("statsGrid") : null;
const output = typeof document !== "undefined" ? document.getElementById("output") : null;
const calcBtn = typeof document !== "undefined" ? document.getElementById("calcBtn") : null;
const resetBtn = typeof document !== "undefined" ? document.getElementById("resetBtn") : null;
const loadingPopup = typeof document !== "undefined" ? document.getElementById("loadingPopup") : null;

const istInputs = {};
const sollInputs = {};

function createInputRow(stat) {
  const row = document.createElement("div");
  row.className = "stat-row";

  const label = document.createElement("label");
  label.textContent = stat;
  label.htmlFor = `ist_${stat}`;

  const ist = document.createElement("input");
  ist.type = "number";
  ist.id = `ist_${stat}`;
  ist.min = "0";
  ist.step = "1";
  ist.value = "0";

  const soll = document.createElement("input");
  soll.type = "number";
  soll.id = `soll_${stat}`;
  soll.min = "0";
  soll.step = "1";
  soll.value = "0";

  row.appendChild(label);
  row.appendChild(ist);
  row.appendChild(soll);

  istInputs[stat] = ist;
  sollInputs[stat] = soll;
  statsGrid.appendChild(row);
}

function buildNeed(ist, soll) {
  return STATS.map((s) => Math.max(0, soll[s] - ist[s]));
}

function applyMaterial(need, materialBonus) {
  return need.map((value, index) => Math.max(0, value - (materialBonus[STATS[index]] || 0)));
}

function optimizeMaterials(need, materials) {
  const memo = new Map();

  function dp(state) {
    const key = state.join(",");
    if (memo.has(key)) {
      return memo.get(key);
    }

    if (state.every((v) => v === 0)) {
      const solved = { count: 0, path: [] };
      memo.set(key, solved);
      return solved;
    }

    let bestCount = INF;
    let bestPath = null;

    for (const [name, bonus] of materials) {
      const nextState = applyMaterial(state, bonus);
      if (nextState.every((value, idx) => value === state[idx])) {
        continue;
      }

      const sub = dp(nextState);
      const candidateCount = sub.count + 1;
      if (candidateCount < bestCount) {
        bestCount = candidateCount;
        bestPath = [name, ...sub.path];
      }
    }

    const result = { count: bestCount, path: bestPath };
    memo.set(key, result);
    return result;
  }

  return dp(need);
}

function getHighestStat(ist) {
  let highestStatName = STATS[0];
  let highestStat = ist[highestStatName];

  for (const stat of STATS) {
    if (ist[stat] > highestStat) {
      highestStat = ist[stat];
      highestStatName = stat;
    }
  }

  return { highestStat, highestStatName };
}

function getMaterialsForLevel(highestStat) {
  for (const entry of MATERIALS_BY_LEVEL) {
    if (highestStat <= entry.max) {
      return entry.materials;
    }
  }
  return null;
}

function calculateMountPlan(ist, soll) {
  const missingStats = {};
  for (const stat of STATS) {
    missingStats[stat] = Math.max(0, soll[stat] - ist[stat]);
  }

  const { highestStat, highestStatName } = getHighestStat(ist);
  const need = buildNeed(ist, soll);
  const materials = getMaterialsForLevel(highestStat);

  if (materials === null) {
    return {
      missingStats,
      highestStat,
      highestStatName,
      count: INF,
      picked: null,
      error: "Ungultige hochste Stat. Bitte Eingaben uberprufen.",
    };
  }

  const { count, path } = optimizeMaterials(need, materials);
  return {
    missingStats,
    highestStat,
    highestStatName,
    count,
    picked: path,
    error: null,
  };
}

function parseInteger(value, stat) {
  if (!/^-?\d+$/.test(value.trim())) {
    throw new Error(`${stat}: Bitte nur ganze Zahlen eingeben.`);
  }
  const parsed = Number.parseInt(value, 10);
  if (parsed < 0) {
    throw new Error(`${stat}: Werte mussen >= 0 sein.`);
  }
  return parsed;
}

function readValues() {
  const ist = {};
  const soll = {};

  for (const stat of STATS) {
    ist[stat] = parseInteger(istInputs[stat].value, stat);
    soll[stat] = parseInteger(sollInputs[stat].value, stat);
  }

  return { ist, soll };
}

function countItems(items) {
  const counts = {};
  for (const item of items) {
    counts[item] = (counts[item] || 0) + 1;
  }
  return counts;
}

function formatResult(result) {
  const lines = [];

  lines.push("Fehlende Stats:");
  const missingEntries = STATS
    .map((stat) => [stat, result.missingStats[stat]])
    .filter(([, amount]) => amount > 0);

  if (missingEntries.length === 0) {
    lines.push("- Keine fehlenden Stats.");
  } else {
    for (const [stat, amount] of missingEntries) {
      lines.push(`- ${stat}: ${amount}`);
    }
  }

  lines.push("");
  lines.push("Hochste Stat:");
  lines.push(`- ${result.highestStatName}: ${result.highestStat}`);
  lines.push("");
  lines.push("Optimale Materialien:");

  if (result.error !== null) {
    lines.push(`- ${result.error}`);
  } else if (result.count >= INF || result.picked === null) {
    lines.push("- Keine passende Material-Kombination gefunden.");
  } else if (result.count === 0) {
    lines.push("- Keine Materialien notig.");
  } else {
    const counter = countItems(result.picked);
    for (const [name, amount] of Object.entries(counter)) {
      lines.push(`- ${name}: ${amount}x`);
    }
  }

  return lines.join("\n");
}

function resetFields() {
  for (const stat of STATS) {
    istInputs[stat].value = "0";
    sollInputs[stat].value = "0";
  }
  if (output) {
    output.textContent = "";
  }
}

function showLoadingPopup() {
  if (!loadingPopup) {
    return;
  }
  loadingPopup.classList.add("is-visible");
  loadingPopup.setAttribute("aria-hidden", "false");
}

function hideLoadingPopup() {
  if (!loadingPopup) {
    return;
  }
  loadingPopup.classList.remove("is-visible");
  loadingPopup.setAttribute("aria-hidden", "true");
}

function waitForPaint() {
  if (typeof window === "undefined" || typeof window.requestAnimationFrame !== "function") {
    return Promise.resolve();
  }
  return new Promise((resolve) => {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(resolve);
    });
  });
}

async function onCalculate() {
  showLoadingPopup();
  if (calcBtn) {
    calcBtn.disabled = true;
  }

  try {
    await waitForPaint();
    const { ist, soll } = readValues();
    const result = calculateMountPlan(ist, soll);
    if (output) {
      output.textContent = formatResult(result);
    }
  } catch (err) {
    if (output) {
      output.textContent = `Ungultige Eingabe:\n${err.message}`;
    }
  } finally {
    if (calcBtn) {
      calcBtn.disabled = false;
    }
    hideLoadingPopup();
  }
}

function initUI() {
  if (!statsGrid || !calcBtn || !resetBtn || typeof document.createElement !== "function") {
    return;
  }

  for (const stat of STATS) {
    createInputRow(stat);
  }

  calcBtn.addEventListener("click", onCalculate);
  resetBtn.addEventListener("click", resetFields);
}

initUI();

if (typeof globalThis !== "undefined") {
  globalThis.calculateMountPlan = calculateMountPlan;
}
