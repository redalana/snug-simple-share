import type { Product } from "@/lib/products";

const CONTACT = {
  company: "AbuFarha Medical Equipment",
  landline: "+962 6 4026063",
  mobile: "+962 79 9741318",
  email: "info@abufarhamedical.com",
  website: "www.abufarhamedical.com",
  location: "Amman, Jordan",
};

async function imageToDataUrl(url: string): Promise<{ data: string; format: string } | null> {
  try {
    const res = await fetch(url);
    const blob = await res.blob();
    const format = blob.type.includes("png") ? "PNG" : "JPEG";
    const data = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
    return { data, format };
  } catch {
    return null;
  }
}

/**
 * Generates a professional, printable PDF product profile from product data —
 * company logo/name, product image, product info, technical highlights and
 * company contact details. No manually uploaded PDFs.
 */
export async function generateProductPdf(product: Product): Promise<void> {
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const margin = 48;
  const primary: [number, number, number] = [214, 40, 40];
  const dark: [number, number, number] = [23, 23, 23];
  const gray: [number, number, number] = [110, 110, 110];

  // HEADER BAR
  doc.setFillColor(...primary);
  doc.rect(0, 0, pageW, 70, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text("AbuFarha", margin, 34);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.text("MEDICAL EQUIPMENT", margin, 50);
  doc.setFontSize(9);
  doc.text("Product Profile", pageW - margin, 40, { align: "right" });

  let y = 100;

  // PRODUCT IMAGE
  const img = await imageToDataUrl(product.image);
  const imgW = pageW - margin * 2;
  const imgH = imgW * 0.5;
  if (img) {
    try {
      doc.addImage(img.data, img.format, margin, y, imgW, imgH);
    } catch {
      /* ignore image failures */
    }
  }
  y += imgH + 28;

  // TITLE
  doc.setTextColor(...primary);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text(product.category.toUpperCase(), margin, y);
  y += 20;
  doc.setTextColor(...dark);
  doc.setFontSize(22);
  doc.text(product.name, margin, y);
  y += 20;
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...gray);
  doc.setFontSize(12);
  doc.text(product.subtitle, margin, y);
  y += 30;

  // PRODUCT INFORMATION
  const info: [string, string][] = [
    ["Manufacturer", product.brand],
    ["Category", product.category],
    ["Model", product.model],
    ["Condition", product.status],
    ["Warranty", product.warranty],
    ["Availability", "In Stock"],
    ["Country of Origin", product.country],
    ["Year", String(product.year)],
    ["System Type", product.systemType],
  ];
  doc.setTextColor(...dark);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.text("Product Information", margin, y);
  y += 8;
  doc.setDrawColor(...primary);
  doc.setLineWidth(2);
  doc.line(margin, y, margin + 40, y);
  y += 18;

  const colW = (pageW - margin * 2) / 2;
  doc.setFontSize(10);
  info.forEach((row, i) => {
    const col = i % 2;
    const rowY = y + Math.floor(i / 2) * 22;
    const x = margin + col * colW;
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...gray);
    doc.text(row[0], x, rowY);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...dark);
    doc.text(row[1], x, rowY + 12);
  });
  y += Math.ceil(info.length / 2) * 22 + 20;

  // TECHNICAL HIGHLIGHTS
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.text("Technical Specifications", margin, y);
  y += 8;
  doc.setDrawColor(...primary);
  doc.line(margin, y, margin + 40, y);
  y += 18;
  doc.setFontSize(10);
  product.snapshot.forEach((s, i) => {
    const col = i % 2;
    const rowY = y + Math.floor(i / 2) * 22;
    const x = margin + col * colW;
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...gray);
    doc.text(s.label, x, rowY);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...dark);
    doc.text(s.value, x, rowY + 12);
  });
  y += Math.ceil(product.snapshot.length / 2) * 22 + 16;

  // FOOTER / CONTACT
  const footerY = pageH - 96;
  doc.setFillColor(23, 23, 23);
  doc.rect(0, footerY, pageW, 96, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text(CONTACT.company, margin, footerY + 26);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(210, 210, 210);
  doc.text(`Landline: ${CONTACT.landline}    Mobile / WhatsApp: ${CONTACT.mobile}`, margin, footerY + 46);
  doc.text(`Email: ${CONTACT.email}    Website: ${CONTACT.website}`, margin, footerY + 62);
  doc.text(`Location: ${CONTACT.location}`, margin, footerY + 78);

  const safeName = product.name.replace(/[^a-z0-9]+/gi, "-").replace(/(^-|-$)/g, "");
  doc.save(`${safeName}-AbuFarha.pdf`);
}
