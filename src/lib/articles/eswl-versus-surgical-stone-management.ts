/**
 * Lithotripsy Systems cluster — "ESWL Versus Surgical Stone Management"
 */

import type { ContentBlock, TocItem } from "../blog";

export const ESWL_VS_SURGICAL_TOC: TocItem[] = [
  { id: "spectrum", title: "The Stone Management Spectrum" },
  { id: "eswl-profile", title: "Where ESWL Fits" },
  { id: "ureteroscopy", title: "Ureteroscopy" },
  { id: "pcnl", title: "Percutaneous Nephrolithotomy" },
  { id: "open", title: "Open and Laparoscopic Surgery" },
  { id: "comparison", title: "Comparing the Routes" },
  { id: "pathway", title: "Building a Multi-Modality Pathway" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const ESWL_VS_SURGICAL_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "No single stone management technique serves every patient and every stone. A urology service with only one treatment option applies that option to cases it does not suit; a service that offers ESWL, ureteroscopy and percutaneous nephrolithotomy under one clinical pathway can match the treatment to the stone. AbuFarha Medical supplies, installs and services lithotripsy systems as one component of that broader equipment landscape, alongside endourology and imaging capital that hospitals rely on for the surgical alternatives.",
      "The routes are not competitors for the same cases; they are complementary tools with different invasiveness, anaesthesia requirements, single-session clearance likelihood and resource demands. Comparing them meaningfully means comparing what each does well and what it requires, not ranking them by a single headline metric.",
      "This guide sets out where ESWL sits relative to ureteroscopy, percutaneous nephrolithotomy and open or laparoscopic surgery, and how a service builds a pathway that routes each case to the appropriate technique rather than to whichever technique happens to be available that week.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "The stone management spectrum, comparative profile of ESWL against ureteroscopy, PCNL and open/laparoscopic surgery, and multi-modality pathway design",
    audience:
      "Urologists, service planners, theatre and outpatient managers, clinical governance leads",
    readingTime: "12 min read",
    technology: "Lithotripsy Systems",
  },
  {
    type: "h2",
    id: "spectrum",
    text: "The Stone Management Spectrum",
    number: 1,
    body: "Four broad approaches span the range from fully non-invasive to open surgical.",
  },
  {
    type: "p",
    text: "Stone treatment options run from extracorporeal shock wave lithotripsy at the least invasive end, through ureteroscopic and percutaneous endoscopic approaches, to open or laparoscopic surgery reserved for the most complex or unusual presentations. Each step along that spectrum trades non-invasiveness for greater certainty of stone clearance in a single procedure, and each carries a different anaesthesia, theatre and recovery resource requirement. A well-run stone service treats this as a single pathway with defined routing logic, rather than as separate silos that compete for the same patients.",
  },
  {
    type: "knowledgeBox",
    variant: "did-you-know",
    title: "Route selection is a stone decision, not a department decision",
    text: "The strongest programmes route patients by stone characteristics and clearance objective, independent of which technique the treating clinician happens to specialise in.",
  },
  {
    type: "h2",
    id: "eswl-profile",
    text: "Where ESWL Fits",
    number: 2,
  },
  {
    type: "ul",
    items: [
      "Fully non-invasive: no instrumentation of the urinary tract, and frequently deliverable with analgesia or light sedation rather than general anaesthesia.",
      "Outpatient-oriented: many services run ESWL as a day case with minimal recovery infrastructure required.",
      "Clearance depends on the patient passing fragments after treatment, which introduces a time lag and a dependence on unobstructed anatomy that other routes do not share.",
      "Best suited to moderate-sized, favourably located stones of workable composition, where the fragmentation and clearance questions both answer favourably.",
      "Less predictable against very hard, very large, or unfavourably positioned stones, where retreatment burden can outweigh its non-invasiveness advantage.",
    ],
  },
  {
    type: "h2",
    id: "ureteroscopy",
    text: "Ureteroscopy",
    number: 3,
  },
  {
    type: "p",
    text: "Ureteroscopy passes an endoscope, often with laser lithotripsy, directly to the stone via the natural urinary tract, allowing fragmentation and, frequently, direct retrieval of fragments in the same procedure. It generally requires anaesthesia and theatre time, and carries the instrumentation-related risks of any endourological procedure, but converts stone clearance into a single-session event to a greater degree than ESWL, since fragments do not need to pass unaided. It is often the preferred route for ureteric stones, for stones in locations where ESWL clearance is unreliable, and for cases where a single definitive procedure is clinically or logistically preferable to a course of ESWL sessions.",
  },
  {
    type: "h2",
    id: "pcnl",
    text: "Percutaneous Nephrolithotomy",
    number: 4,
  },
  {
    type: "ul",
    items: [
      "Accesses the kidney directly through a small percutaneous tract, allowing fragmentation and extraction of large stone volumes in a controlled, monitored procedure.",
      "Reserved principally for large renal stones, complex staghorn calculi, and cases where ESWL or ureteroscopy would require an impractical number of sessions to achieve clearance.",
      "Requires anaesthesia, a dedicated procedure suite with fluoroscopic or ultrasound guidance, and typically an inpatient stay, making it more resource-intensive than either ESWL or standard ureteroscopy.",
      "Offers the highest single-session stone-free rate among the routes for the large and complex stones it is indicated for, which is the basis of its role in the pathway.",
    ],
  },
  {
    type: "h2",
    id: "open",
    text: "Open and Laparoscopic Surgery",
    number: 5,
  },
  {
    type: "p",
    text: "Open or laparoscopic stone surgery is now uncommon in most services, reserved for cases where anatomical abnormality, failed prior minimally invasive attempts, or a concurrent surgical indication makes it the appropriate route. It carries the greatest procedural and recovery burden of the four approaches and is not a routine alternative to the other three; its role in a modern pathway is as a defined fallback for cases that do not fit the endourological or extracorporeal options, rather than as a first-line technique.",
  },
  {
    type: "h2",
    id: "comparison",
    text: "Comparing the Routes",
    number: 6,
  },
  {
    type: "table",
    headers: ["Route", "Invasiveness", "Typical anaesthesia", "Single-session clearance certainty", "Resource demand"],
    rows: [
      ["ESWL", "Non-invasive", "Analgesia or sedation, often no general anaesthetic", "Depends on unaided fragment passage", "Low; outpatient-oriented"],
      ["Ureteroscopy", "Endoscopic, transurethral", "General or regional anaesthesia", "High for most cases; fragments often retrieved directly", "Moderate; theatre time required"],
      ["Percutaneous nephrolithotomy", "Percutaneous renal access", "General anaesthesia", "Highest, for large or complex stones", "High; dedicated suite and typically inpatient stay"],
      ["Open or laparoscopic surgery", "Surgical", "General anaesthesia", "High, but rarely indicated as first line", "Highest; reserved for defined exceptional cases"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "Invasiveness and single-session certainty move in opposite directions across this spectrum. There is no universally superior route, only a route matched or mismatched to the case.",
    clinicalInterpretation:
      "A patient counselled only on the least invasive option may accept a treatment course that is longer and less certain than a more invasive but more definitive alternative would have been.",
    hospitalRecommendation:
      "Present the realistic clearance timeline for each applicable route during consent, not only the invasiveness comparison.",
  },
  {
    type: "h2",
    id: "pathway",
    text: "Building a Multi-Modality Pathway",
    number: 7,
  },
  {
    type: "ul",
    items: [
      "Define, in written protocol, the stone and patient factor combinations that route to each technique, based on the service's own case mix and available capacity.",
      "Ensure multidisciplinary case discussion is available for stones that do not clearly fit one route, rather than defaulting to whichever clinician sees the patient first.",
      "Track outcomes by route and by the factors that led to that routing decision, so the pathway can be refined from the service's own data.",
      "Maintain working referral relationships to the technique the service does not itself provide, if any, so a mismatched case can be redirected rather than treated suboptimally in-house.",
      "Review retreatment and conversion rates — cases that started on one route and required a different one — as a pathway quality indicator.",
    ],
  },
  {
    type: "p",
    text: "AbuFarha Medical supplies and supports the lithotripsy component of a multi-modality stone service, with installation, commissioning, training and biomedical engineering support that keep the non-invasive route available and dependable alongside the endourological and surgical alternatives a comprehensive service requires.",
  },
  {
    type: "faq",
    items: [
      {
        q: "Is ESWL always the first option offered to a patient with a urinary stone?",
        a: "It should be offered where the stone and patient factors make it a reasonable candidate, but not as a default. For stones or anatomy poorly suited to ESWL, an endoscopic or percutaneous route may be the more appropriate first-line recommendation.",
      },
      {
        q: "Why might ureteroscopy be preferred over ESWL for a ureteric stone?",
        a: "Ureteroscopy allows direct visualisation and, frequently, direct retrieval of fragments in a single procedure, which is often more reliable for ureteric stones than depending on unaided fragment passage after ESWL.",
      },
      {
        q: "When is percutaneous nephrolithotomy the right choice over ESWL?",
        a: "Principally for large renal stones or complex staghorn calculi, where ESWL would require an impractical number of retreatment sessions and PCNL offers a materially higher chance of single-session clearance.",
      },
      {
        q: "Does a hospital need all four techniques available to run a good stone service?",
        a: "Not necessarily in-house, but the service needs a defined pathway that identifies when a case requires a technique it does not provide, and a working referral route to obtain it.",
      },
      {
        q: "How should patients be counselled when more than one route is reasonable?",
        a: "With the realistic clearance timeline, retreatment likelihood, anaesthesia requirement and recovery expectation for each applicable route, so the choice reflects the patient's own priorities as well as clinical suitability.",
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
    text: "ESWL, ureteroscopy, percutaneous nephrolithotomy and open surgery occupy distinct positions on the stone management spectrum, trading invasiveness against single-session certainty. A service that routes cases against defined, data-informed criteria delivers better outcomes than one that applies whichever technique it happens to have on hand.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Urology treatment service practice" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Lithotripsy and endourology equipment support" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Clinical practice synthesis",
    disclaimer:
      "Educational guidance comparing stone management approaches. It does not replace clinical judgement or institutional treatment protocol.",
  },
  {
    type: "references",
    items: [
      { label: "Institutional multidisciplinary stone management pathway documentation." },
      { label: "Urology service outcome audit records across treatment routes." },
      { label: "Manufacturer operating documentation for lithotripsy and endourology equipment." },
    ],
  },
];
