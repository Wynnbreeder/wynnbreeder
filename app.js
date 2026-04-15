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
const maxLevelInput = typeof document !== "undefined" ? document.getElementById("maxLevel") : null;
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
  ist.autocomplete = "off";
  ist.setAttribute("data-form-type", "other");

  const soll = document.createElement("input");
  soll.type = "number";
  soll.id = `soll_${stat}`;
  soll.min = "0";
  soll.step = "1";
  soll.value = "0";
  soll.autocomplete = "off";
  soll.setAttribute("data-form-type", "other");

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

function toStateKey(state) {
  return state.join(",");
}

function optimizeMaterials(need, materials) {
  const statCount = STATS.length;
  const normalizedMaterials = materials.map(([name, bonus]) => {
    const bonusVector = new Array(statCount);
    for (let i = 0; i < statCount; i += 1) {
      bonusVector[i] = bonus[STATS[i]] || 0;
    }
    return { name, bonusVector };
  });

  let startIsZero = true;
  for (let i = 0; i < statCount; i += 1) {
    if (need[i] !== 0) {
      startIsZero = false;
      break;
    }
  }

  if (startIsZero) {
    return { count: 0, path: [] };
  }

  const maxPerStat = new Array(statCount).fill(0);
  for (const material of normalizedMaterials) {
    for (let i = 0; i < statCount; i += 1) {
      if (material.bonusVector[i] > maxPerStat[i]) {
        maxPerStat[i] = material.bonusVector[i];
      }
    }
  }

  for (let i = 0; i < statCount; i += 1) {
    if (need[i] > 0 && maxPerStat[i] === 0) {
      return { count: INF, path: null };
    }
  }

  const greedyCounts = new Array(normalizedMaterials.length).fill(0);
  const remaining = need.slice();
  let greedySteps = 0;
  const maxGreedySteps = 2000;
  while (greedySteps < maxGreedySteps) {
    let allCovered = true;
    for (let i = 0; i < statCount; i += 1) {
      if (remaining[i] > 0) {
        allCovered = false;
        break;
      }
    }
    if (allCovered) {
      break;
    }

    let bestIndex = -1;
    let bestScore = -1;
    for (let m = 0; m < normalizedMaterials.length; m += 1) {
      let score = 0;
      for (let i = 0; i < statCount; i += 1) {
        const contribution = normalizedMaterials[m].bonusVector[i];
        if (remaining[i] > 0 && contribution > 0) {
          score += Math.min(remaining[i], contribution);
        }
      }
      if (score > bestScore) {
        bestScore = score;
        bestIndex = m;
      }
    }

    if (bestIndex < 0 || bestScore <= 0) {
      return { count: INF, path: null };
    }

    greedyCounts[bestIndex] += 1;
    greedySteps += 1;
    for (let i = 0; i < statCount; i += 1) {
      remaining[i] = Math.max(0, remaining[i] - normalizedMaterials[bestIndex].bonusVector[i]);
    }
  }

  if (greedySteps >= maxGreedySteps) {
    return { count: INF, path: null };
  }

  let lowerBound = 0;
  for (let i = 0; i < statCount; i += 1) {
    if (need[i] > 0) {
      lowerBound = Math.max(lowerBound, Math.ceil(need[i] / maxPerStat[i]));
    }
  }
  const upperBound = greedySteps;

  const perIndexMax = new Array(normalizedMaterials.length + 1);
  perIndexMax[normalizedMaterials.length] = new Array(statCount).fill(0);
  for (let idx = normalizedMaterials.length - 1; idx >= 0; idx -= 1) {
    const current = normalizedMaterials[idx].bonusVector;
    const next = perIndexMax[idx + 1];
    const merged = new Array(statCount);
    for (let i = 0; i < statCount; i += 1) {
      merged[i] = Math.max(current[i], next[i]);
    }
    perIndexMax[idx] = merged;
  }

  const counts = new Array(normalizedMaterials.length).fill(0);
  let solvedCounts = null;

  function canStillReach(coverage, materialIndex, slotsLeft) {
    const maxFromHere = perIndexMax[materialIndex];
    for (let i = 0; i < statCount; i += 1) {
      if (coverage[i] >= need[i]) {
        continue;
      }
      if (maxFromHere[i] === 0) {
        return false;
      }
      const remainingNeed = need[i] - coverage[i];
      if (remainingNeed > slotsLeft * maxFromHere[i]) {
        return false;
      }
    }
    return true;
  }

  function meetsNeed(coverage) {
    for (let i = 0; i < statCount; i += 1) {
      if (coverage[i] < need[i]) {
        return false;
      }
    }
    return true;
  }

  function search(materialIndex, slotsLeft, coverage) {
    if (materialIndex === normalizedMaterials.length) {
      return slotsLeft === 0 && meetsNeed(coverage);
    }

    if (!canStillReach(coverage, materialIndex, slotsLeft)) {
      return false;
    }

    const material = normalizedMaterials[materialIndex];
    for (let take = slotsLeft; take >= 0; take -= 1) {
      counts[materialIndex] = take;
      const nextCoverage = new Array(statCount);
      for (let i = 0; i < statCount; i += 1) {
        nextCoverage[i] = coverage[i] + take * material.bonusVector[i];
      }

      if (search(materialIndex + 1, slotsLeft - take, nextCoverage)) {
        return true;
      }
    }

    counts[materialIndex] = 0;
    return false;
  }

  for (let total = lowerBound; total <= upperBound; total += 1) {
    for (let i = 0; i < counts.length; i += 1) {
      counts[i] = 0;
    }

    if (search(0, total, new Array(statCount).fill(0))) {
      solvedCounts = counts.slice();
      break;
    }
  }

  if (solvedCounts === null) {
    return { count: INF, path: null };
  }

  const path = [];
  for (let i = 0; i < solvedCounts.length; i += 1) {
    for (let c = 0; c < solvedCounts[i]; c += 1) {
      path.push(normalizedMaterials[i].name);
    }
  }

  return { count: path.length, path };
}

function getErrorMessage(err) {
  if (err instanceof Error && typeof err.message === "string" && err.message.length > 0) {
    return err.message;
  }
  if (typeof err === "string" && err.length > 0) {
    return err;
  }
  return "Unexpected error while calculating. Please try smaller values or reload the page.";
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

function calculateMountPlan(ist, soll, maxLevel = null) {
  const missingStats = {};
  for (const stat of STATS) {
    missingStats[stat] = Math.max(0, soll[stat] - ist[stat]);
  }

  const { highestStat, highestStatName } = getHighestStat(ist);
  const need = buildNeed(ist, soll);
  const materialsLevel = Number.isFinite(maxLevel) ? maxLevel : highestStat;
  const materials = getMaterialsForLevel(materialsLevel);

  if (materials === null) {
    return {
      missingStats,
      highestStat,
      highestStatName,
      count: INF,
      picked: null,
      error: "invalid max level",
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
    throw new Error(`${stat}: Please enter only whole numbers.`);
  }
  const parsed = Number.parseInt(value, 10);
  if (parsed < 0) {
    throw new Error(`${stat}: Values must be >= 0.`);
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

  const maxLevel = maxLevelInput ? parseInteger(maxLevelInput.value, "Max level") : 0;

  return { ist, soll, maxLevel };
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

  lines.push("Missing Stats:");
  const missingEntries = STATS
    .map((stat) => [stat, result.missingStats[stat]])
    .filter(([, amount]) => amount > 0);

  if (missingEntries.length === 0) {
    lines.push("- No missing Stats.");
  } else {
    for (const [stat, amount] of missingEntries) {
      lines.push(`- ${stat}: ${amount}`);
    }
  }

  lines.push("");
  lines.push("Optimal Materials:");

  if (result.error !== null) {
    lines.push(`- ${result.error}`);
  } else if (result.count >= INF || result.picked === null) {
    lines.push("- No matching material combination found.");
  } else if (result.count === 0) {
    lines.push("- No materials needed.");
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
  if (maxLevelInput) {
    maxLevelInput.value = "0";
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
    const { ist, soll, maxLevel } = readValues();
    const result = calculateMountPlan(ist, soll, maxLevel);
    if (output) {
      output.textContent = formatResult(result);
    }
  } catch (err) {
    if (output) {
      output.textContent = `Invalid Input:\n${getErrorMessage(err)}`;
    }
  } finally {
    if (calcBtn) {
      calcBtn.disabled = false;
    }
    hideLoadingPopup();
  }
}

function incrementOpenCounter() {
  const countElement = typeof document !== "undefined" ? document.getElementById("siteOpenCount") : null;
  if (!countElement) {
    return;
  }
  
  let count = localStorage.getItem("siteOpenCount") || "0";
  count = parseInt(count, 10) + 1;
  localStorage.setItem("siteOpenCount", count);
  countElement.textContent = count;
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
  
  incrementOpenCounter();
}

initUI();

if (typeof globalThis !== "undefined") {
  globalThis.calculateMountPlan = calculateMountPlan;
}
