/**
 * Lithotripsy Systems cluster — "Shock Wave Generation Technologies Explained"
 */

import type { ContentBlock, TocItem } from "../blog";

export const SHOCK_WAVE_GENERATION_TECH_TOC: TocItem[] = [
  { id: "pulse", title: "What a Therapeutic Shock Wave Actually Is" },
  { id: "electrohydraulic", title: "Electrohydraulic Generation" },
  { id: "electromagnetic", title: "Electromagnetic Generation" },
  { id: "piezoelectric", title: "Piezoelectric Generation" },
  { id: "focusing", title: "Focusing Geometry and Focal Volume" },
  { id: "comparison", title: "Comparing the Three Principles" },
  { id: "choosing", title: "What This Means When Choosing a System" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const SHOCK_WAVE_GENERATION_TECH_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Every lithotripter fragments stones with the same basic mechanism — a focused pressure pulse delivered through a coupling medium — but the three engineering approaches used to generate that pulse produce meaningfully different clinical and operational profiles. AbuFarha Medical supplies, installs and services lithotripsy systems across these generation principles, including Richard Wolf Piezolith platforms, and fields the same question repeatedly from clinical and procurement teams: what actually differs between them, beyond the marketing terms.",
      "The honest answer is that generation principle shapes focal geometry, skin entry pressure, consumable behaviour and source longevity — all of which have downstream clinical and financial consequences — but it does not by itself determine which stones a given system can treat. That depends on the complete configuration, including imaging and energy range.",
      "This guide explains the physics of shock wave generation in accessible engineering terms, the three principles in current clinical use, and how the differences between them should inform a procurement or clinical-protocol decision.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Shock wave physics fundamentals, electrohydraulic, electromagnetic and piezoelectric generation, focal geometry, and how generation principle affects clinical and procurement decisions",
    audience:
      "Biomedical engineering teams, urologists, medical physicists, procurement committees",
    readingTime: "12 min read",
    technology: "Lithotripsy Systems",
  },
  {
    type: "h2",
    id: "pulse",
    text: "What a Therapeutic Shock Wave Actually Is",
    number: 1,
    body: "A single, very short, high-amplitude pressure transient — not a continuous acoustic beam.",
  },
  {
    type: "p",
    text: "A lithotripsy shock wave is a discrete pressure pulse: a fast positive-pressure rise followed by a lower-amplitude negative-pressure tail, all within a few microseconds. It is generated in a coupling medium, usually water, and shaped so that its energy converges on a small target volume some distance from the source. The generation method determines how that initial pressure transient is created — by an electrical spark, by an electromagnetically driven membrane, or by a synchronised array of piezoelectric elements — but once launched, all three propagate and focus according to the same acoustic principles.",
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "The pulse is the tool; the focusing is the precision",
    text: "Comparing generation principles by peak pressure alone is misleading. The focusing geometry that concentrates that pressure onto the stone is at least as important to clinical performance.",
  },
  {
    type: "h2",
    id: "electrohydraulic",
    text: "Electrohydraulic Generation",
    number: 2,
  },
  {
    type: "ul",
    items: [
      "A high-voltage spark discharge between two submerged electrodes vaporises a small volume of water almost instantaneously, generating a rapidly expanding plasma bubble.",
      "The resulting pressure wave is reflected and shaped by an ellipsoidal reflector positioned around the spark gap, which focuses the wave onto the second focal point where the stone is positioned.",
      "The electrode gap changes with each discharge, so output is not perfectly constant over the electrode's service life — a known behaviour that preventive maintenance protocols are built to detect.",
      "Electrodes are a wear consumable with a defined service life measured in discharges, and are among the more frequently replaced parts in an electrohydraulic system.",
      "This was historically the first clinically deployed generation principle and remains in use, valued for the peak pressures it can achieve.",
    ],
  },
  {
    type: "h2",
    id: "electromagnetic",
    text: "Electromagnetic Generation",
    number: 3,
  },
  {
    type: "ul",
    items: [
      "A strong, brief current pulse through a coil induces an opposing current in an adjacent metallic membrane or cylinder, driving it rapidly outward by electromagnetic repulsion.",
      "That mechanical displacement launches a pressure wave into the coupling water, which is then focused either by an acoustic lens or by a shaped, curved membrane geometry depending on the specific design.",
      "Because the driving mechanism does not rely on a degrading spark gap, output tends to remain more stable over a long service interval, with source replacement measured in a large cumulative impulse count rather than a comparatively short consumable cycle.",
      "This principle has become widely used in general-purpose hospital lithotripters because of its combination of stable output and broad clinical coverage.",
    ],
  },
  {
    type: "h2",
    id: "piezoelectric",
    text: "Piezoelectric Generation",
    number: 4,
  },
  {
    type: "ul",
    items: [
      "A large number of piezoelectric elements, arranged on a concave shell, are fired simultaneously when a voltage pulse is applied, each contributing a small pressure contribution that sums at a common geometric focus.",
      "Because focusing is achieved by the physical curvature of the element array itself rather than by a separate reflector or lens, the resulting focal volume is typically very tight.",
      "Skin entry pressure — the pressure experienced at the point where the wave enters the body, away from the tight focal zone — is comparatively low relative to the pressure delivered at the target, which is the physical basis for the generally good patient tolerance reported with this principle.",
      "There is no spark electrode to wear and replace, giving a different consumable profile from electrohydraulic systems, though the element array itself is a long-term service item.",
      "The tight focus places a greater premium on accurate localisation and stable patient positioning throughout the session, since a stone that drifts out of a narrow focal volume simply stops receiving effective energy.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "did-you-know",
    title: "Low pain and low precision margin are the same trade-off",
    text: "The comparatively gentle patient experience often reported with piezoelectric systems and the higher demand they place on localisation accuracy are two sides of the same focal geometry — not independent features.",
  },
  {
    type: "h2",
    id: "focusing",
    text: "Focusing Geometry and Focal Volume",
    number: 5,
  },
  {
    type: "p",
    text: "Focal volume — the region of space where pressure is high enough to fragment tissue effectively — differs by design even within the same generation principle, since it depends on reflector or lens geometry, source aperture and the specific engineering choices of the manufacturer. A larger focal volume is more forgiving of respiratory movement and small localisation error, at the cost of exposing a larger tissue volume to treatment pressure. A smaller focal volume concentrates energy precisely but rewards — and requires — accurate, continuously verified localisation. Neither is universally superior; the appropriate choice depends on the imaging configuration, operator skill and case mix the service expects to treat.",
  },
  {
    type: "h2",
    id: "comparison",
    text: "Comparing the Three Principles",
    number: 6,
  },
  {
    type: "table",
    headers: ["Principle", "Pulse generation mechanism", "Consumable behaviour", "Typical focal characteristic"],
    rows: [
      ["Electrohydraulic", "Spark discharge between electrodes", "Electrode wears and is replaced on a discharge-based schedule", "Comparatively wide focal zone, high peak pressure"],
      ["Electromagnetic", "Coil-driven membrane or cylinder displacement", "No spark consumable; source rated on high cumulative impulse count", "Stable output over long service life"],
      ["Piezoelectric", "Synchronised piezo element array", "No spark electrode; element array is the long-term service item", "Very tight focal volume, comparatively low skin entry pressure"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "None of the three principles is obsolete; each remains in current clinical manufacture because it serves a genuine combination of clinical and operational priorities differently.",
    clinicalInterpretation:
      "The generation principle predicts consumable cost structure and typical patient tolerance more reliably than it predicts which specific stones a system can treat, which also depends on energy range and imaging.",
    hospitalRecommendation:
      "Evaluate generation principle alongside imaging configuration and anaesthesia model as a package, not as an isolated specification line.",
  },
  {
    type: "h2",
    id: "choosing",
    text: "What This Means When Choosing a System",
    number: 7,
  },
  {
    type: "ul",
    items: [
      "Anaesthesia model: lower typical skin entry pressure can support a lighter analgesia pathway, which affects staffing and outpatient throughput.",
      "Consumable budgeting: electrode-based systems carry a recurring per-treatment consumable line that electromagnetic and piezoelectric systems generally do not carry in the same form.",
      "Localisation demand: a tight focal volume raises the bar for imaging quality and operator technique; a wider focus is more tolerant of imperfect targeting.",
      "Source longevity planning: cumulative impulse count remains the right service metric across all three principles, but the point at which major source replacement falls due differs by design.",
      "Reference-site observation of a live session on each candidate principle reveals workflow and tolerance characteristics that a datasheet does not communicate.",
    ],
  },
  {
    type: "p",
    text: "AbuFarha Medical supplies and services lithotripsy systems across these generation principles, including Richard Wolf Piezolith platforms with integrated ultrasound localisation, and advises services on matching generation principle to case mix, anaesthesia model and consumable budget during procurement.",
  },
  {
    type: "faq",
    items: [
      {
        q: "Which generation principle produces the highest peak pressure?",
        a: "Electrohydraulic systems are generally associated with high peak pressures at the focus, owing to the energy release characteristics of the spark discharge, though effective clinical performance also depends on focal geometry and energy range, not peak pressure alone.",
      },
      {
        q: "Why do piezoelectric systems tend to need less analgesia?",
        a: "Their large-array design produces a comparatively low pressure at the skin entry surface relative to the pressure concentrated at the tight focus, which is the physical basis for the generally better tolerated treatment experience reported with this principle.",
      },
      {
        q: "Do electromagnetic lithotripters have consumable electrodes?",
        a: "No. Electromagnetic generation uses a coil-driven membrane or cylinder rather than a spark gap, so it does not carry the electrode replacement cycle associated with electrohydraulic systems.",
      },
      {
        q: "Is a tighter focal volume always clinically better?",
        a: "No. It concentrates energy precisely and can spare surrounding tissue, but it also demands more accurate localisation and stable positioning. A wider focus is more tolerant of movement at the cost of a larger treated tissue volume.",
      },
      {
        q: "Does generation principle determine which stones a system can treat?",
        a: "Not by itself. It strongly influences focal geometry, consumable cost and patient tolerance, but treatable case mix also depends on the system's energy range and its imaging and localisation configuration.",
      },
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 8,
  },
  {
    type: "p",
    text: "Electrohydraulic, electromagnetic and piezoelectric generation share the same underlying physics but differ meaningfully in focal geometry, consumable behaviour and patient tolerance. Understanding those differences in engineering terms, rather than in marketing shorthand, is what allows a clinical or procurement decision to be matched to the service's actual case mix and operating model.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Lithotripsy system installation and service" },
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Urology treatment service practice" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Manufacturer technical documentation and field engineering synthesis",
    disclaimer:
      "Educational technical guidance on shock wave generation principles. It does not replace manufacturer documentation or clinical judgement.",
  },
  {
    type: "references",
    items: [
      { label: "Manufacturer technical documentation for installed lithotripsy systems across generation principles." },
      { label: "AbuFarha Biomedical Engineering field service and installation records." },
      { label: "Institutional biomedical engineering training materials on shock wave physics." },
    ],
  },
];
