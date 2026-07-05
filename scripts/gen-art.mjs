// Generates self-made abstract art SVGs for the ShijimiWORKs Art Collection.
// All output is original work created procedurally — no third-party assets.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "..", "public", "artworks");
mkdirSync(outDir, { recursive: true });

// A small seeded PRNG so builds are deterministic.
function mulberry32(a) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Muted gallery palette per artwork: [paper, base, mid, accent1, accent2].
const palettes = [
  ["#F5F2EC", "#E7E0D3", "#C9BCA6", "#8FA6B8", "#2E2C29"], // Quiet Morning
  ["#F4F1EB", "#E4DBCF", "#D9C2C6", "#B9A2A6", "#33302C"], // Pale Window
  ["#EFF1F3", "#D6E0E7", "#A9C0D6", "#7E97AD", "#25303A"], // Blue Silence
  ["#F6F3ED", "#EAE2D4", "#E0D2B7", "#C6A98A", "#2B2824"], // Room and Light
  ["#F3F0EA", "#E6DFD3", "#CFC6B4", "#9AA79A", "#2A2C28"], // Paper Moon
  ["#F1F3EE", "#DCE3D6", "#B7C7AE", "#8AA184", "#28302A"], // Small Garden
  ["#F5F1EC", "#E9DED2", "#DCC0C4", "#C79FA6", "#302A2B"], // Soft Boundary
  ["#F4F2ED", "#E3DDD2", "#C4BBA9", "#8892A0", "#2C2C2E"], // Slow Scrolling
  ["#F6F2EA", "#ECE0CE", "#E3C9A2", "#CBA36F", "#332C22"], // Warm Shadow
  ["#F1F0EC", "#DEDAD0", "#B9B4A6", "#7C8A93", "#26282A"], // Inner Landscape
];

function grain(id, opacity = 0.05) {
  return `
  <filter id="${id}">
    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" result="n"/>
    <feColorMatrix in="n" type="saturate" values="0"/>
    <feComponentTransfer><feFuncA type="linear" slope="${opacity}"/></feComponentTransfer>
    <feComposite operator="over" in2="SourceGraphic"/>
  </filter>`;
}

function art(seed, pal, w = 900, h = 1200) {
  const r = mulberry32(seed * 2654435761);
  const [paper, base, mid, a1, a2] = pal;
  const style = seed % 5;
  let body = "";

  if (style === 0) {
    // Soft horizon fields.
    const bands = 4 + Math.floor(r() * 3);
    let y = 0;
    const cols = [base, mid, a1, paper, mid, a1];
    for (let i = 0; i < bands; i++) {
      const bh = (h / bands) * (0.7 + r() * 0.7);
      body += `<rect x="0" y="${y.toFixed(1)}" width="${w}" height="${(bh + 40).toFixed(1)}" fill="${cols[i % cols.length]}" opacity="${(0.85 - i * 0.05).toFixed(2)}"/>`;
      y += bh;
    }
    const cy = h * (0.32 + r() * 0.2);
    body += `<circle cx="${(w * (0.4 + r() * 0.3)).toFixed(1)}" cy="${cy.toFixed(1)}" r="${(w * (0.14 + r() * 0.08)).toFixed(1)}" fill="${a1}" opacity="0.55"/>`;
  } else if (style === 1) {
    // Overlapping translucent panes.
    body += `<rect width="${w}" height="${h}" fill="${base}"/>`;
    const n = 5 + Math.floor(r() * 3);
    const cols = [mid, a1, a2, paper];
    for (let i = 0; i < n; i++) {
      const rw = w * (0.28 + r() * 0.4);
      const rh = h * (0.24 + r() * 0.4);
      const x = r() * (w - rw);
      const yy = r() * (h - rh);
      body += `<rect x="${x.toFixed(1)}" y="${yy.toFixed(1)}" width="${rw.toFixed(1)}" height="${rh.toFixed(1)}" fill="${cols[i % cols.length]}" opacity="${(0.28 + r() * 0.28).toFixed(2)}"/>`;
    }
  } else if (style === 2) {
    // Calm brush strokes.
    body += `<rect width="${w}" height="${h}" fill="${paper}"/>`;
    const n = 6 + Math.floor(r() * 4);
    const cols = [mid, a1, a2, base];
    for (let i = 0; i < n; i++) {
      const yy = (h / n) * i + r() * 40;
      const sw = 12 + r() * 46;
      const x1 = w * (0.06 + r() * 0.1);
      const x2 = w * (0.72 + r() * 0.22);
      const cy = yy + (r() - 0.5) * 90;
      body += `<path d="M${x1.toFixed(0)} ${yy.toFixed(0)} Q ${(w / 2).toFixed(0)} ${cy.toFixed(0)} ${x2.toFixed(0)} ${(yy + (r() - 0.5) * 60).toFixed(0)}" stroke="${cols[i % cols.length]}" stroke-width="${sw.toFixed(1)}" fill="none" stroke-linecap="round" opacity="${(0.35 + r() * 0.4).toFixed(2)}"/>`;
    }
  } else if (style === 3) {
    // Geometric quiet composition.
    body += `<rect width="${w}" height="${h}" fill="${base}"/>`;
    body += `<rect x="${(w * 0.12).toFixed(0)}" y="${(h * 0.1).toFixed(0)}" width="${(w * 0.62).toFixed(0)}" height="${(h * 0.5).toFixed(0)}" fill="${mid}" opacity="0.8"/>`;
    body += `<rect x="${(w * 0.3).toFixed(0)}" y="${(h * 0.42).toFixed(0)}" width="${(w * 0.55).toFixed(0)}" height="${(h * 0.44).toFixed(0)}" fill="${a1}" opacity="0.7"/>`;
    body += `<circle cx="${(w * 0.68).toFixed(0)}" cy="${(h * 0.3).toFixed(0)}" r="${(w * 0.1).toFixed(0)}" fill="${a2}" opacity="0.85"/>`;
    body += `<line x1="0" y1="${(h * 0.72).toFixed(0)}" x2="${w}" y2="${(h * 0.72).toFixed(0)}" stroke="${a2}" stroke-width="3" opacity="0.5"/>`;
  } else {
    // Layered organic blobs.
    body += `<rect width="${w}" height="${h}" fill="${paper}"/>`;
    const n = 4 + Math.floor(r() * 3);
    const cols = [base, mid, a1, a2];
    for (let i = 0; i < n; i++) {
      const cx = w * (0.2 + r() * 0.6);
      const cy = h * (0.2 + r() * 0.6);
      const rad = w * (0.16 + r() * 0.16);
      let d = `M ${(cx + rad).toFixed(0)} ${cy.toFixed(0)}`;
      const pts = 7;
      for (let p = 1; p <= pts; p++) {
        const ang = (p / pts) * Math.PI * 2;
        const rr = rad * (0.7 + r() * 0.5);
        d += ` L ${(cx + Math.cos(ang) * rr).toFixed(0)} ${(cy + Math.sin(ang) * rr).toFixed(0)}`;
      }
      d += " Z";
      body += `<path d="${d}" fill="${cols[i % cols.length]}" opacity="${(0.4 + r() * 0.35).toFixed(2)}"/>`;
    }
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img">
  <defs>${grain("g" + seed)}</defs>
  <rect width="${w}" height="${h}" fill="${paper}"/>
  <g filter="url(#g${seed})">${body}</g>
  <rect x="0" y="0" width="${w}" height="${h}" fill="none" stroke="${a2}" stroke-opacity="0.06" stroke-width="2"/>
</svg>`;
}

const titles = [
  "quiet-morning",
  "pale-window",
  "blue-silence",
  "room-and-light",
  "paper-moon",
  "small-garden",
  "soft-boundary",
  "slow-scrolling",
  "warm-shadow",
  "inner-landscape",
];

titles.forEach((slug, i) => {
  const svg = art(i + 1, palettes[i]);
  writeFileSync(resolve(outDir, `${slug}.svg`), svg);
});

// Collection cover images (wide).
const collections = [
  ["for-living-room", palettes[3]],
  ["for-workspace", palettes[2]],
  ["for-gift", palettes[6]],
];
collections.forEach(([slug, pal], i) => {
  writeFileSync(resolve(outDir, `${slug}.svg`), art(20 + i, pal, 1000, 750));
});

// Hero background (large, calm).
writeFileSync(resolve(outDir, "hero.svg"), art(31, palettes[0], 1600, 1100));

// Product detail hero uses pale-window already.

console.log("Generated", titles.length + collections.length + 1, "artworks in", outDir);
