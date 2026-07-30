import type { Product } from "@/lib/products";
import { SITE_URL } from "@/lib/seo";

/* ==========================================================================
   AbuFarha Medical — Product Brochure Generator
   --------------------------------------------------------------------------
   Generates a dedicated, print-ready two-page A4 product brochure entirely
   from product data. Nothing is exported from the HTML page.
   Page 1 — Product Overview.  Page 2 — Technical Profile.
   ========================================================================== */

const CONTACT = {
  company: "AbuFarha Medical Equipment",
  tagline: "Medical Imaging Systems · Engineering · Installation · Support",
  landline: "+962 6 4026063",
  whatsapp: "+962 79 9741318",
  email: "info@abufarhamedical.com",
  website: "www.abufarhamedical.com",
  address: "4th Floor, Complex 396, Queen Rania Street, Amman, Jordan",
};

/* --- Brand palette (matches the site tokens, converted to print RGB) ------ */
const BRAND: [number, number, number] = [198, 32, 38];
const BRAND_DARK: [number, number, number] = [150, 22, 28];
const INK: [number, number, number] = [21, 24, 31];
const SLATE: [number, number, number] = [104, 111, 123];
const LINE: [number, number, number] = [225, 228, 234];
const TINT: [number, number, number] = [247, 248, 250];
const BRAND_TINT: [number, number, number] = [252, 240, 240];

const PAGE_W = 595.28;
const PAGE_H = 841.89;
const M = 42; // page margin
const CW = PAGE_W - M * 2; // content width

type Doc = import("jspdf").jsPDF;

/* ------------------------------------------------------------------ utils */

/** Cover-crops a remote image to a fixed aspect ratio at high resolution. */
async function imageToDataUrl(
  url: string,
  aspect: number,
  outW = 1800,
): Promise<{ data: string; format: string } | null> {
  try {
    const res = await fetch(url, { mode: "cors" });
    const blob = await res.blob();
    const bitmap = await createImageBitmap(blob);

    const srcRatio = bitmap.width / bitmap.height;
    let sx = 0;
    let sy = 0;
    let sw = bitmap.width;
    let sh = bitmap.height;
    if (srcRatio > aspect) {
      sw = bitmap.height * aspect;
      sx = (bitmap.width - sw) / 2;
    } else {
      sh = bitmap.width / aspect;
      sy = (bitmap.height - sh) / 2;
    }

    const outH = Math.round(outW / aspect);
    const canvas = document.createElement("canvas");
    canvas.width = outW;
    canvas.height = outH;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("no canvas context");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, outW, outH);
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(bitmap, sx, sy, sw, sh, 0, 0, outW, outH);
    bitmap.close();

    return { data: canvas.toDataURL("image/jpeg", 0.94), format: "JPEG" };
  } catch {
    return null;
  }
}

async function qrDataUrl(text: string): Promise<string | null> {
  try {
    const QR = await import("qrcode");
    return await QR.toDataURL(text, {
      width: 512,
      margin: 0,
      errorCorrectionLevel: "M",
      color: { dark: "#15181f", light: "#ffffff" },
    });
  } catch {
    return null;
  }
}

function titleCase(s: string) {
  return s.replace(/\b\w/g, (c) => c.toUpperCase());
}

/* ---------------------------------------------------------- content model */

/** Builds a 100–150 word professional description from product data. */
function buildDescription(p: Product): string {
  const base = (p.description ?? "").replace(/\s+/g, " ").trim();
  const words = base ? base.split(" ") : [];

  const opening =
    `The ${p.name} is a ${p.status.toLowerCase()} ${p.category.toLowerCase()} platform ` +
    `manufactured by ${p.brand} in ${p.country} (year of manufacture ${p.year}). ` +
    `Supplied by AbuFarha Medical Equipment as a ${p.systemType.toLowerCase()} installation, ` +
    `the system is offered complete with technical evaluation, delivery, installation ` +
    `supervision, application training and long-term biomedical engineering support.`;

  const closing =
    `Each unit is inspected, tested and documented by our biomedical engineering team ` +
    `before dispatch, and is supported across the Middle East and Africa through our ` +
    `service network, spare-parts programme and remote technical assistance.`;

  let out = words.length > 40 ? base : opening;
  const count = () => out.split(/\s+/).length;

  if (count() < 100) out = `${out} ${count() < 60 ? opening + " " : ""}${closing}`.trim();
  const w = out.split(/\s+/);
  if (w.length > 150) out = `${w.slice(0, 148).join(" ")}…`;
  return out.replace(/\s+/g, " ");
}

/** Six key highlights, always populated. */
function buildHighlights(p: Product): string[] {
  const out: string[] = [];
  p.snapshot.slice(0, 4).forEach((s) => out.push(`${s.label}: ${s.value}`));
  const fallbacks = [
    `${p.brand} OEM platform — ${p.category}`,
    `${p.status} · Year of manufacture ${p.year}`,
    `${p.systemType} installation, ${p.country} origin`,
    p.installation ? "Turnkey installation & commissioning included" : "Installation supervision available",
    p.training ? "On-site clinical application training" : "Clinical application training available",
    p.specialty.length ? `Clinical use: ${p.specialty.join(", ")}` : "Multi-specialty clinical use",
    "Biomedical engineering support & spare parts programme",
  ];
  for (const f of fallbacks) {
    if (out.length >= 6) break;
    if (!out.includes(f)) out.push(f);
  }
  return out.slice(0, 6).map((t) => (t.length > 96 ? `${t.slice(0, 94)}…` : t));
}

function buildBenefits(p: Product): string[] {
  return [
    `Proven ${p.brand} imaging performance with OEM-specification components`,
    `Fully inspected and functionally tested prior to shipment`,
    `Lower capital investment compared with an equivalent new system`,
    `Faster deployment — typical delivery and commissioning within weeks`,
    `Documented service history and engineering handover file`,
    `Single accountable partner for supply, installation and after-sales`,
  ].slice(0, p.status === "Brand New" ? 5 : 6);
}

function buildIncluded(p: Product): string[] {
  const items = [
    `${p.name} main system and standard accessories`,
    "Pre-shipment inspection and functional test report",
    "Professional packing, crating and export documentation",
    "Installation and commissioning supervision",
    "Clinical application training for users",
    "Technical documentation and handover file",
  ];
  if (p.services.length) items.splice(3, 0, ...p.services.slice(0, 2));
  return items.slice(0, 6);
}

/* ------------------------------------------------------------ draw helpers */

function brandHeader(doc: Doc, right: string) {
  doc.setFillColor(...INK);
  doc.rect(0, 0, PAGE_W, 78, "F");
  doc.setFillColor(...BRAND);
  doc.rect(0, 0, 6, 78, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(19);
  doc.text("Abu", M, 36);
  const w = doc.getTextWidth("Abu");
  doc.setTextColor(...BRAND);
  doc.text("Farha", M + w, 36);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.4);
  doc.setTextColor(190, 195, 205);
  doc.text("MEDICAL EQUIPMENT", M, 49);
  doc.setFontSize(6.6);
  doc.setTextColor(150, 156, 168);
  doc.text(CONTACT.tagline.toUpperCase(), M, 61);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.setTextColor(255, 255, 255);
  doc.text(right.toUpperCase(), PAGE_W - M, 40, { align: "right" });
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7);
  doc.setTextColor(170, 176, 188);
  doc.text(CONTACT.website, PAGE_W - M, 53, { align: "right" });
}

function sectionTitle(doc: Doc, label: string, y: number, x = M, width = CW): number {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(...INK);
  doc.text(label.toUpperCase(), x, y);
  doc.setDrawColor(...LINE);
  doc.setLineWidth(0.7);
  doc.line(x, y + 6, x + width, y + 6);
  doc.setDrawColor(...BRAND);
  doc.setLineWidth(1.6);
  doc.line(x, y + 6, x + 34, y + 6);
  return y + 20;
}

/** Two-column key/value table with zebra rows. Returns the new y. */
function kvTable(
  doc: Doc,
  rows: [string, string][],
  x: number,
  y: number,
  width: number,
  opts: { labelW?: number } = {},
): number {
  const labelW = opts.labelW ?? width * 0.38;
  const padX = 8;
  let cy = y;

  rows.forEach((r, i) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.6);
    const valLines = doc.splitTextToSize(r[1] || "—", width - labelW - padX * 2);
    const labLines = doc.splitTextToSize(r[0], labelW - padX * 2);
    const h = Math.max(labLines.length, valLines.length) * 9.4 + 9;

    if (i % 2 === 0) {
      doc.setFillColor(...TINT);
      doc.rect(x, cy, width, h, "F");
    }
    doc.setDrawColor(...LINE);
    doc.setLineWidth(0.4);
    doc.rect(x, cy, width, h, "S");
    doc.line(x + labelW, cy, x + labelW, cy + h);

    doc.setFont("helvetica", "bold");
    doc.setTextColor(...SLATE);
    doc.text(labLines, x + padX, cy + 12);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...INK);
    doc.text(valLines, x + labelW + padX, cy + 12);
    cy += h;
  });
  return cy;
}

/** Bulleted list with brand markers. Returns the new y. */
function bulletList(
  doc: Doc,
  items: string[],
  x: number,
  y: number,
  width: number,
  size = 8,
): number {
  let cy = y;
  doc.setFontSize(size);
  items.forEach((t) => {
    const lines = doc.splitTextToSize(t, width - 14);
    doc.setFillColor(...BRAND);
    doc.circle(x + 2.6, cy - 2.6, 2, "F");
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...INK);
    doc.text(lines, x + 12, cy);
    cy += lines.length * (size + 2.6) + 5;
  });
  return cy;
}

function pageFooter(doc: Doc, page: number, product: Product) {
  doc.setDrawColor(...LINE);
  doc.setLineWidth(0.6);
  doc.line(M, PAGE_H - 40, PAGE_W - M, PAGE_H - 40);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(6.8);
  doc.setTextColor(...SLATE);
  doc.text(`${CONTACT.company} · ${CONTACT.website} · ${CONTACT.email}`, M, PAGE_H - 28);
  doc.text(
    `${product.name} — Page ${page} of 2`,
    PAGE_W - M,
    PAGE_H - 28,
    { align: "right" },
  );
}

/* ------------------------------------------------------------------ page 1 */

async function drawOverview(doc: Doc, p: Product, qr: string | null) {
  brandHeader(doc, "Product Brochure");

  let y = 104;

  /* Title block */
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7.6);
  doc.setTextColor(...BRAND);
  doc.text(p.category.toUpperCase(), M, y);
  y += 18;
  doc.setFontSize(21);
  doc.setTextColor(...INK);
  const nameLines = doc.splitTextToSize(p.name, CW);
  doc.text(nameLines, M, y);
  y += nameLines.length * 22 - 6;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(...SLATE);
  doc.text(doc.splitTextToSize(p.subtitle, CW), M, y);
  y += 16;

  /* Status pills */
  const pills = [p.brand, p.status, `YOM ${p.year}`, p.sold ? "Sold" : "Available"];
  let px = M;
  pills.forEach((t, i) => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7.4);
    const w = doc.getTextWidth(t.toUpperCase()) + 16;
    if (i === 0) {
      doc.setFillColor(...BRAND);
      doc.roundedRect(px, y - 9, w, 15, 7.5, 7.5, "F");
      doc.setTextColor(255, 255, 255);
    } else {
      doc.setFillColor(...BRAND_TINT);
      doc.roundedRect(px, y - 9, w, 15, 7.5, 7.5, "F");
      doc.setTextColor(...BRAND_DARK);
    }
    doc.text(t.toUpperCase(), px + 8, y + 1);
    px += w + 6;
  });
  y += 22;

  /* Hero image */
  const heroAspect = 2.95;
  const hero = await imageToDataUrl(p.gallery?.[0] ?? p.image, heroAspect, 1900);
  const imgH = CW / heroAspect;
  doc.setFillColor(...TINT);
  doc.rect(M, y, CW, imgH, "F");
  if (hero) {
    try {
      doc.addImage(hero.data, hero.format, M, y, CW, imgH, undefined, "FAST");
    } catch {
      /* ignore */
    }
  }
  doc.setDrawColor(...LINE);
  doc.setLineWidth(0.6);
  doc.rect(M, y, CW, imgH, "S");
  y += imgH + 22;

  /* Description */
  y = sectionTitle(doc, "Product Overview", y);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(60, 66, 76);
  const descAll: string[] = doc.splitTextToSize(buildDescription(p), CW);
  const desc =
    descAll.length > 6 ? [...descAll.slice(0, 5), `${descAll[5].replace(/\s+\S*$/, "")} …`] : descAll;
  doc.text(desc, M, y, { lineHeightFactor: 1.4 });
  y += desc.length * 11.2 + 12;

  /* Highlights — two columns */
  y = sectionTitle(doc, "Key Highlights", y);
  const colW = (CW - 16) / 2;
  const hl = buildHighlights(p);
  let leftY = y;
  let rightY = y;
  hl.forEach((t, i) => {
    const col = i % 2;
    const x = M + col * (colW + 16);
    const cy = col === 0 ? leftY : rightY;
    const lines = doc.splitTextToSize(t, colW - 16);
    const h = lines.length * 9.5 + 11;
    doc.setFillColor(...TINT);
    doc.roundedRect(x, cy, colW, h, 3.5, 3.5, "F");
    doc.setFillColor(...BRAND);
    doc.roundedRect(x, cy, 2.4, h, 1.2, 1.2, "F");
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.4);
    doc.setTextColor(...INK);
    doc.text(lines, x + 9, cy + 10.5);
    if (col === 0) leftY = cy + h + 6;
    else rightY = cy + h + 6;
  });
  y = Math.max(leftY, rightY) + 10;

  /* Quick facts — compact two-pair grid */
  y = sectionTitle(doc, "Quick Facts", y);
  const facts: [string, string][] = [
    ["Manufacturer", p.brand],
    ["Category", p.category],
    ["Model", p.model],
    ["Year of Manufacture", String(p.year)],
    ["Condition", p.status],
    ["Availability", p.sold ? "Sold — similar available" : "In stock"],
    ["Country of Origin", p.country],
    ["System Type", p.systemType],
  ];
  const cellW = CW / 2;
  const labelW = cellW * 0.44;
  const rowH = 17;
  facts.forEach(([label, value], i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = M + col * cellW;
    const ry = y + row * rowH;
    if (row % 2 === 0) {
      doc.setFillColor(...TINT);
      doc.rect(x, ry, cellW, rowH, "F");
    }
    doc.setDrawColor(...LINE);
    doc.setLineWidth(0.4);
    doc.rect(x, ry, cellW, rowH, "S");
    doc.line(x + labelW, ry, x + labelW, ry + rowH);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7.2);
    doc.setTextColor(...SLATE);
    doc.text(doc.splitTextToSize(label, labelW - 12)[0], x + 7, ry + 11);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...INK);
    doc.text(doc.splitTextToSize(value, cellW - labelW - 12)[0], x + labelW + 7, ry + 11);
  });
  y += Math.ceil(facts.length / 2) * rowH + 16;

  /* Contact strip with QR */
  const stripH = 84;
  const cy = Math.min(y, PAGE_H - 52 - stripH);
  doc.setFillColor(...INK);
  doc.roundedRect(M, cy, CW, stripH, 6, 6, "F");
  doc.setFillColor(...BRAND);
  doc.roundedRect(M, cy, 3.5, stripH, 2, 2, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(255, 255, 255);
  doc.text(CONTACT.company, M + 16, cy + 22);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.4);
  doc.setTextColor(198, 204, 214);
  doc.text(`Tel ${CONTACT.landline}   ·   WhatsApp ${CONTACT.whatsapp}`, M + 16, cy + 38);
  doc.text(`${CONTACT.email}   ·   ${CONTACT.website}`, M + 16, cy + 51);
  doc.text(doc.splitTextToSize(CONTACT.address, CW - 160)[0], M + 16, cy + 64);

  /* QR block inside the strip */
  const qs = 48;
  const qx = PAGE_W - M - 16 - qs;
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(qx - 5, cy + 9, qs + 10, qs + 10, 4, 4, "F");
  if (qr) {
    try {
      doc.addImage(qr, "PNG", qx, cy + 14, qs, qs);
    } catch {
      /* ignore */
    }
  }
  doc.setFont("helvetica", "bold");
  doc.setFontSize(5.8);
  doc.setTextColor(170, 176, 188);
  doc.text("SCAN FOR PRODUCT PAGE", qx + qs / 2, cy + 72, { align: "center" });

  pageFooter(doc, 1, p);
}

/* ------------------------------------------------------------------ page 2 */

function drawTechnical(doc: Doc, p: Product) {
  brandHeader(doc, "Technical Profile");

  let y = 106;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.setTextColor(...INK);
  doc.text(doc.splitTextToSize(p.name, CW), M, y);
  y += 22;

  /* Technical specifications */
  y = sectionTitle(doc, "Technical Specifications", y);
  const specSource: [string, string][] = [
    ...p.snapshot.map((s) => [s.label, s.value] as [string, string]),
    ["Modality", p.category],
    ["Manufacturer", p.brand],
    ["Country of Origin", p.country],
    ["Installation Type", p.systemType],
  ];
  const seen = new Set<string>();
  const specs = specSource.filter(([label]) => {
    const k = label.trim().toLowerCase();
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
  y = kvTable(doc, specs, M, y, CW, { labelW: CW * 0.34 }) + 18;

  /* Clinical applications + Key benefits (two columns) */
  const colW = (CW - 22) / 2;
  const colTop = y;
  let ly = sectionTitle(doc, "Clinical Applications", colTop, M, colW);
  const apps = p.specialty.length
    ? p.specialty.map((s) => `${titleCase(s)} imaging and diagnostic workflows`)
    : [`${p.category} diagnostic imaging`, "Routine and specialist clinical workflows"];
  ly = bulletList(doc, apps, M, ly + 2, colW, 7.4);

  let ry = sectionTitle(doc, "Key Benefits", colTop, M + colW + 22, colW);
  ry = bulletList(doc, buildBenefits(p), M + colW + 22, ry + 2, colW, 7.4);

  y = Math.max(ly, ry) + 8;

  /* Included with purchase */
  y = sectionTitle(doc, "Included With Purchase", y);
  y = bulletList(doc, buildIncluded(p), M, y + 2, CW, 7.6) + 4;

  /* Installation / Warranty / After-sales */
  y = sectionTitle(doc, "Installation, Warranty & After-Sales Support", y);
  const support: [string, string][] = [
    [
      "Installation",
      p.installation
        ? "Turnkey site survey, delivery, installation and commissioning by AbuFarha biomedical engineers."
        : "Installation and commissioning supervision provided by AbuFarha biomedical engineers on request.",
    ],
    ["Warranty", p.warranty || "Warranty terms are confirmed with each quotation."],
    [
      "After-Sales Support",
      "Preventive maintenance, corrective service, spare parts supply, remote technical assistance and user training across the Middle East and Africa.",
    ],
  ];
  y = kvTable(doc, support, M, y, CW, { labelW: CW * 0.26 }) + 18;

  /* CTA block */
  const ctaH = 104;
  const cy = PAGE_H - 52 - ctaH;
  doc.setFillColor(...INK);
  doc.roundedRect(M, cy, CW, ctaH, 7, 7, "F");
  doc.setFillColor(...BRAND);
  doc.roundedRect(M, cy, CW, 3.5, 2, 2, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12.5);
  doc.setTextColor(255, 255, 255);
  doc.text("Request a Quote for This System", M + 18, cy + 30);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(192, 198, 209);
  doc.text(
    doc.splitTextToSize(
      "Our specialists respond with configuration options, pricing, lead time and full installation planning — for hospitals, distributors, healthcare groups and government tenders.",
      CW - 36,
    ),
    M + 18,
    cy + 46,
  );

  const actions: [string, string][] = [
    ["Request a Quote", `${CONTACT.website}/contact`],
    ["WhatsApp", CONTACT.whatsapp],
    ["Website", CONTACT.website],
    ["Email", CONTACT.email],
  ];
  const bw = (CW - 36 - 3 * 8) / 4;
  actions.forEach(([label, value], i) => {
    const bx = M + 18 + i * (bw + 8);
    const by = cy + 68;
    doc.setFillColor(i === 0 ? BRAND[0] : 38, i === 0 ? BRAND[1] : 43, i === 0 ? BRAND[2] : 52);
    doc.roundedRect(bx, by, bw, 26, 4, 4, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(6.8);
    doc.setTextColor(255, 255, 255);
    doc.text(label.toUpperCase(), bx + bw / 2, by + 11, { align: "center" });
    doc.setFont("helvetica", "normal");
    doc.setFontSize(6.4);
    doc.setTextColor(i === 0 ? 255 : 175, i === 0 ? 220 : 181, i === 0 ? 220 : 192);
    doc.text(doc.splitTextToSize(value.replace(/^https?:\/\//, ""), bw - 10)[0], bx + bw / 2, by + 20, {
      align: "center",
    });
  });

  pageFooter(doc, 2, p);
}

/* -------------------------------------------------------------------- api */

/**
 * Generates and downloads a professional two-page A4 product brochure,
 * built entirely from the product record — no HTML export, no manual editing.
 */
export async function generateProductPdf(product: Product): Promise<void> {
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({ unit: "pt", format: "a4", compress: true });
  doc.setProperties({
    title: `${product.name} — Product Brochure`,
    subject: `${product.category} · ${product.brand}`,
    author: CONTACT.company,
    keywords: [product.brand, product.category, product.model, "AbuFarha Medical"].join(", "),
    creator: CONTACT.company,
  });

  const productUrl = `${SITE_URL}/products/${product.slug}`;
  const qr = await qrDataUrl(productUrl);

  await drawOverview(doc, product, qr);
  doc.addPage("a4", "portrait");
  drawTechnical(doc, product);

  const safeName = product.name.replace(/[^a-z0-9]+/gi, "-").replace(/(^-|-$)/g, "");
  doc.save(`${safeName}-Brochure-AbuFarha.pdf`);
}
