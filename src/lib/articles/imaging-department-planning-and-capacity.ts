/**
 * Imaging department planning and capacity design — Buyer's Guides cluster.
 */

import type { ContentBlock, TocItem } from "../blog";

export const IMAGING_DEPARTMENT_PLANNING_TOC: TocItem[] = [
  { id: "starting-point", title: "Planning a Department, Not a Room" },
  { id: "demand", title: "Establishing Real Demand" },
  { id: "capacity", title: "From Demand to Room Count" },
  { id: "adjacency", title: "Adjacency: How Layout Determines Throughput" },
  { id: "staffing", title: "Staffing the Plan You Have Drawn" },
  { id: "phasing", title: "Phasing and Continuity of Service" },
  { id: "futureproofing", title: "Designing for the Next Replacement" },
  { id: "checklist", title: "Department Planning Checklist" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const IMAGING_DEPARTMENT_PLANNING_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Hospitals frequently plan imaging one machine at a time. A scanner is replaced, a room is refitted, a second unit is added where space allows — and after a decade the department is a collection of individually sensible decisions that together produce congestion, long internal transfers, unbalanced staffing and rooms that cannot host the equipment their successors will need.",
      "Department planning asks a different question. Not what equipment do we need, but what service are we building, how much of it, arranged how, staffed by whom, and capable of surviving three equipment generations without structural rework. The equipment decision then follows from the plan rather than defining it.",
      "This guide covers demand analysis that reflects real referral behaviour, converting demand into a defensible room count, the adjacency rules that make or break throughput, staffing implications, phasing work while keeping the service running, and the design decisions that determine whether the next replacement is a straightforward swap or a construction project.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Demand analysis, capacity modelling, room count justification, department adjacency, staffing implications, phased construction, future replacement design",
    audience:
      "Radiology managers, clinical directors, estates and capital planning teams, hospital executives",
    readingTime: "16 min read",
    technology: "Department Planning",
  },
  {
    type: "h2",
    id: "starting-point",
    text: "Planning a Department, Not a Room",
    number: 1,
    body: "The unit of planning should be the patient pathway through the department, because that is what determines both throughput and experience.",
  },
  {
    type: "p",
    text: "A department is a system with entry points, queues, service stations, transfers and exits. Its capacity is set by its narrowest constraint, which is frequently not the scanner. Common real constraints include preparation and recovery space, changing cubicles, patient waiting capacity, porter availability for inpatient transfers, reporting capacity downstream, and the number of injection or preparation bays supporting a contrast-heavy workload. Adding a second scanner to a department whose constraint is preparation space increases cost without increasing output.",
  },
  {
    type: "knowledgeBox",
    variant: "planning-tip",
    title: "Find the constraint before sizing the equipment",
    text: "Walk one day of the department's actual workload and record where patients wait and why. In most under-performing departments the dominant delay is not scan time — it is preparation, transfer or reporting. The planning decision that follows from that observation is usually cheaper than the one the department expected to make.",
  },
  {
    type: "h2",
    id: "demand",
    text: "Establishing Real Demand",
    number: 2,
    body: "Demand analysis fails when it uses requests as a proxy for need, or historical activity as a proxy for future demand.",
  },
  {
    type: "ul",
    items: [
      "Start from current examinations completed, broken down by modality, examination type, referral source and session (in hours, out of hours, emergency).",
      "Add suppressed demand: examinations referred out, waiting list length and age, and requests declined or deferred for capacity reasons.",
      "Separate growth drivers explicitly — population change, new clinical services, screening programmes, referral pattern change and case-mix complexity — because each grows at a different rate.",
      "Quantify examination duration by type using the department's own room occupancy data rather than nominal slot lengths.",
      "Model the emergency and inpatient share separately; unscheduled workload consumes capacity unpredictably and cannot be planned as average throughput.",
      "Identify seasonality and weekday variation, since peak-day demand determines perceived adequacy far more than annual totals.",
      "State the planning horizon and the growth assumption as explicit numbers that reviewers can challenge.",
    ],
  },
  {
    type: "table",
    headers: ["Demand component", "Where the data comes from", "Common error"],
    rows: [
      ["Completed activity", "RIS examination records by type and source", "Counting requests rather than completed examinations"],
      ["Suppressed demand", "Waiting lists, outsourcing spend, declined requests", "Ignoring it entirely, which understates need"],
      ["Examination duration", "Room occupancy timestamps", "Using nominal slot length instead of measured occupancy"],
      ["Unscheduled workload", "Emergency and inpatient request timestamps", "Averaging it into scheduled capacity"],
      ["Growth", "Population data, service development plans, screening policy", "Applying a single blended growth rate to all examination types"],
      ["Case-mix complexity", "Protocol mix over time", "Assuming average duration is stable as complexity rises"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "Measured occupancy versus nominal slot length",
    clinicalInterpretation:
      "Departments plan with nominal slots and operate with real occupancy, which includes patient changing, positioning, protocol adjustment, contrast administration and room turnover. The gap between the two is where capacity plans quietly lose their margin.",
    hospitalRecommendation:
      "Base every capacity calculation on measured room occupancy from the department's own timestamps, and state the utilisation assumption separately. A plan built on nominal slots at high assumed utilisation will be presented as adequate and experienced as overloaded.",
  },
  {
    type: "h2",
    id: "capacity",
    text: "From Demand to Room Count",
    number: 3,
    body: "Room count is a function of demand, measured examination duration, operating hours and a stated utilisation assumption — all four of which must be visible in the business case.",
  },
  {
    type: "p",
    text: "The method is straightforward and its integrity depends entirely on honest inputs. Annual demand by examination type is converted into total required room hours using measured durations. Available room hours follow from operating hours, session structure and planned downtime for maintenance and quality assurance. The ratio gives a theoretical room count, which is then adjusted for the practical realities the arithmetic cannot see: unscheduled workload requiring reserve capacity, the need to maintain service during planned maintenance, and the operational fact that a department running at very high utilisation has no capacity to absorb variation.",
  },
  {
    type: "ul",
    items: [
      "State planned annual maintenance and quality assurance downtime as room hours removed from availability, not as an afterthought.",
      "Reserve explicit capacity for unscheduled and emergency work rather than assuming it fits into gaps.",
      "Consider single-room redundancy: a single-room service has no continuity plan during any outage, planned or otherwise.",
      "Check whether extended operating hours are a genuine alternative to an additional room — often cheaper, but constrained by staffing and out-of-hours support.",
      "Test the plan at peak-day demand, not annual average, because that is the load the department will be judged on.",
      "Where a fractional room is indicated, decide deliberately between extended hours, workload redistribution and building the additional room.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "expert-recommendation",
    title: "Publish the utilisation assumption",
    text: "Two capacity plans for the same department can differ by a whole room purely through the utilisation figure assumed. Making that assumption explicit turns a hidden judgement into a reviewable one, and it is the single most useful discipline in imaging capacity planning.",
  },
  {
    type: "h2",
    id: "adjacency",
    text: "Adjacency: How Layout Determines Throughput",
    number: 4,
    body: "Adjacency decisions are permanent in a way that equipment decisions are not, and they set the department's practical ceiling.",
  },
  {
    type: "table",
    headers: ["Relationship", "Planning intent", "Consequence if ignored"],
    rows: [
      ["Reception and waiting to changing areas", "Short, supervised, dignified route", "Congestion at reception and privacy compromise"],
      ["Changing cubicles to scan room", "Direct access without crossing public circulation", "Gowned patients in public corridors; slower turnover"],
      ["Preparation or injection bay to scan room", "Immediately adjacent for contrast and radiopharmaceutical workflows", "Room time consumed by preparation that should happen elsewhere"],
      ["Recovery to scan room", "Adjacent with direct observation", "Room occupied by recovering patients, reducing effective capacity"],
      ["Control room to scan room and corridor", "Visual control of both patient and door", "Safety supervision gaps, particularly in MRI"],
      ["Emergency access route", "Direct trolley route from emergency department", "Long transfers that consume porter time and delay urgent studies"],
      ["Reporting area to department", "Close enough for consultation, separated from noise", "Radiologist time lost to travel, or reporting disrupted"],
      ["Equipment and technical space", "Accessible for service without entering clinical space", "Service visits requiring clinical shutdown"],
    ],
  },
  {
    type: "diagram",
    id: "room-planning",
    title: "Imaging department adjacency",
    purpose:
      "Illustrates the relationships between reception, changing, preparation, scan room, control and recovery that determine practical departmental throughput.",
    alt: "Diagram showing adjacency relationships in an imaging department between reception, waiting, changing, preparation, scan room, control room, recovery and technical space",
    caption:
      "Throughput is usually limited by the spaces around the scanner rather than the scanner itself.",
  },
  {
    type: "h2",
    id: "staffing",
    text: "Staffing the Plan You Have Drawn",
    number: 5,
    body: "A capacity plan that cannot be staffed is a capital plan, not a service plan.",
  },
  {
    type: "ul",
    items: [
      "Derive staffing from the session structure the capacity model assumes, including out-of-hours cover if extended hours were used to avoid a room.",
      "Include the roles that determine flow and are often omitted: reception, portering, nursing support for contrast and sedation, and helpers for patient positioning.",
      "Account for reporting capacity downstream; unreported studies are not delivered activity.",
      "Plan the training pipeline for new technology before go-live, and plan for turnover afterwards.",
      "Where advanced applications are part of the justification, name the staff who will deliver them and protect their development time.",
      "Confirm biomedical engineering capacity to support an enlarged fleet, including quality assurance participation.",
      "Model recruitment lead times honestly — specialist staff availability is frequently the binding constraint on a new service.",
    ],
  },
  {
    type: "h2",
    id: "phasing",
    text: "Phasing and Continuity of Service",
    number: 6,
    body: "Almost every real project happens inside a working department, which makes phasing a clinical decision rather than a construction one.",
  },
  {
    type: "table",
    headers: ["Phasing approach", "When it fits", "Requirements and risks"],
    rows: [
      ["Sequential room-by-room refit", "Departments with more than one room per modality", "Reduced capacity throughout; needs an agreed activity reduction plan"],
      ["Build new, then decommission old", "Sites with adjacent expansion space", "Highest continuity, highest capital and space requirement"],
      ["Temporary or mobile provision", "Single-room services that cannot stop", "Siting, power, shielding and staffing for the temporary unit"],
      ["Workload redistribution to partner sites", "Networks with nearby capacity", "Transport, reporting arrangements and patient acceptability"],
      ["Extended-hours working during works", "Short outages with available staff", "Staff agreement and support service availability"],
      ["Deferred non-urgent workload", "Short, well-defined outages only", "Waiting list growth and clinical risk assessment"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "Single-room modalities need a continuity plan before the project starts",
    clinicalInterpretation:
      "When a hospital has only one CT or one MRI, any works or major fault stops the service entirely. The continuity plan is therefore part of the project design, not a contingency to be improvised when the outage begins.",
    hospitalRecommendation:
      "Agree and document the continuity arrangement — mobile provision, partner site capacity, or an accepted and quantified reduction in service — before committing to the construction programme, and have the clinical governance sign-off for that arrangement in place at the same time.",
  },
  {
    type: "h2",
    id: "futureproofing",
    text: "Designing for the Next Replacement",
    number: 7,
    body: "The department being planned now will host at least two further equipment generations. Modest decisions today decide whether those are swaps or rebuilds.",
  },
  {
    type: "ul",
    items: [
      "Size rooms generously against current minimum requirements; equipment footprints do not shrink as reliably as expected and clearances tend to grow.",
      "Design and record a permanent equipment delivery route, including removable panels, door widths and floor loading along the whole path.",
      "Provide electrical capacity and containment headroom rather than exactly matching today's load.",
      "Plan cooling with spare capacity and independent control per room, so one room's technology change does not require plant replacement.",
      "Design shielding for a plausible higher specification within the room's intended use rather than the minimum for the first system.",
      "Keep technical and equipment rooms accessible from outside clinical space so service can occur without clinical disruption.",
      "Maintain an as-built record of structural, electrical, cooling and shielding provision — the document the next project team will most need and least often find.",
      "Preserve a documented expansion boundary so a future additional room is possible without redesigning circulation.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "planning-tip",
    title: "The as-built file is a capital asset",
    text: "Replacement projects routinely spend weeks re-surveying structure, power and shielding because the original records were never kept or never updated. Maintaining an accurate as-built record for each imaging room costs almost nothing and removes a recurring, entirely avoidable delay from every future project.",
  },
  {
    type: "h2",
    id: "checklist",
    text: "Department Planning Checklist",
    number: 8,
    body: "Use this as a completeness test on any imaging department plan before it goes to capital approval.",
  },
  {
    type: "requirements",
    checklist: [
      "Demand analysis with completed activity, suppressed demand and stated growth assumptions",
      "Measured examination durations from the department's own occupancy data",
      "Capacity calculation with explicit operating hours, downtime and utilisation assumptions",
      "Peak-day as well as annual demand test",
      "Documented adjacency plan covering preparation, recovery and emergency access",
      "Staffing model matched to the assumed session structure, including reporting",
      "Continuity plan for the construction period, signed off clinically",
      "Future replacement provision: delivery route, loading, power, cooling and shielding headroom",
      "As-built documentation requirement written into the works contract",
      "Post-occupancy review scheduled against the original demand and capacity assumptions",
    ],
    specs: {
      title: "Assumptions to state explicitly in the business case",
      rows: [
        { label: "Planning horizon", value: "Years covered by the plan" },
        { label: "Growth", value: "Rate applied, per examination group" },
        { label: "Operating hours", value: "Sessions per week, including any extended hours" },
        { label: "Utilisation", value: "Assumed productive proportion of available room hours" },
        { label: "Downtime", value: "Planned maintenance and QA hours removed" },
        { label: "Unscheduled reserve", value: "Capacity held for emergency and inpatient work" },
        { label: "Duration source", value: "Measured occupancy, stated by examination type" },
        { label: "Redundancy", value: "Continuity arrangement during single-room outage" },
      ],
    },
  },
  {
    type: "faq",
    items: [
      {
        q: "How many examinations justify an additional room rather than extended hours?",
        a: "There is no universal threshold, because the answer depends on measured examination duration, achievable utilisation, staff availability for extended sessions and the cost of out-of-hours support at that hospital. The comparison should be made explicitly in the business case, with both options costed over the same period.",
      },
      {
        q: "Why does a department with adequate scanner capacity still have long waits?",
        a: "Because the binding constraint is elsewhere — commonly preparation or recovery space, changing cubicles, porter availability for inpatient transfers, or reporting capacity. Observation of a real working day identifies the true constraint far more reliably than activity data alone.",
      },
      {
        q: "Should room sizes exceed the manufacturer's stated minimum?",
        a: "Yes, where the room is intended to serve for multiple equipment generations. Minimum dimensions accommodate one specific configuration; a modest allowance above minimum preserves the ability to host a future system, additional accessories, or a different patient handling approach without structural work.",
      },
      {
        q: "How should suppressed demand be evidenced?",
        a: "Through waiting list length and age, outsourcing volume and spend, declined or deferred requests, and referral patterns to other providers. Presented together these give a defensible estimate of the demand the current service is not meeting.",
      },
      {
        q: "Is a mobile unit a reasonable continuity solution during works?",
        a: "It can be, provided siting, power supply, shielding, access, staffing and data connectivity are planned as a project of their own. Mobile provision fails when it is treated as equipment hire rather than as a temporary clinical facility requiring the same infrastructure discipline as a fixed room.",
      },
      {
        q: "When should a post-occupancy review be carried out?",
        a: "Approximately twelve months after the department becomes fully operational, comparing actual activity, durations, utilisation and staffing against the plan's assumptions. The purpose is not audit but calibration — it improves the accuracy of the next plan the hospital produces.",
      },
    ],
  },
  {
    type: "articleCta",
    heading: "Planning or expanding an imaging department?",
    subheading:
      "AbuFarha Medical supports hospitals with room planning, infrastructure assessment, equipment selection, installation and commissioning across all imaging modalities.",
    technology: "Department Planning",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Planning review", name: "AbuFarha Projects & Installation", credential: "Imaging room and department planning" },
      { role: "Technical review", name: "AbuFarha Biomedical Engineering", credential: "Infrastructure assessment and commissioning" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel:
      "Healthcare facility planning guidance, manufacturer site planning documentation and AbuFarha Medical project experience",
    disclaimer:
      "Facility standards, room dimensions and shielding requirements are governed by national regulation and manufacturer specification. Confirm all figures against local requirements and the documentation for the specific equipment selected.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Facility planning",
        items: [
          { label: "National healthcare facility design and space standards for diagnostic imaging" },
          { label: "Manufacturer site planning guides for the specific systems under consideration" },
        ],
      },
      {
        title: "Capacity and service planning",
        items: [
          { label: "Health service capacity planning methodology for diagnostic services" },
          { label: "Professional body guidance on imaging workforce and workload" },
        ],
      },
      {
        title: "Safety and shielding",
        items: [
          { label: "National radiation protection requirements for diagnostic imaging facilities" },
          { label: "MRI facility safety guidance on zoning and controlled access" },
        ],
      },
    ],
    note: "References are cited as authority classes rather than deep links so the article remains accurate as guidance is revised.",
  },
  {
    type: "takeaways",
    items: [
      "Plan the department as a flow system; the scanner is rarely the binding constraint.",
      "Use measured room occupancy, not nominal slot lengths, in every capacity calculation.",
      "State growth, operating hours, downtime and utilisation assumptions explicitly so they can be challenged.",
      "Test the plan against peak-day demand, which is what the service will be judged on.",
      "Adjacency decisions are permanent and set the department's practical throughput ceiling.",
      "Single-room modalities need a documented continuity plan before construction begins.",
      "Design and record delivery route, loading, power, cooling and shielding headroom for the next two equipment generations.",
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 9,
    body: "Imaging departments are built once and replaced piecemeal for decades, which makes the original plan unusually consequential.",
  },
  {
    type: "p",
    text: "The hospitals that get most from their imaging investment are not the ones with the highest specifications. They are the ones whose departments flow — where preparation happens outside the scan room, recovery does not occupy capacity, service can be performed without clinical shutdown, and the next replacement is a delivery rather than a construction programme. All of that is decided at planning stage, and almost none of it can be bought later.",
  },
];
