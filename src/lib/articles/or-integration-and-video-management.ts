/**
 * Operating Room cluster — "OR Integration and Video Management Systems"
 */

import type { ContentBlock, TocItem } from "../blog";

export const OR_INTEGRATION_TOC: TocItem[] = [
  { id: "purpose", title: "What an OR Integration System Does" },
  { id: "components", title: "Core Components of an Integration Platform" },
  { id: "workflow", title: "Workflow Benefits and Risks" },
  { id: "connectivity", title: "Connectivity to Hospital Data Systems" },
  { id: "selection", title: "Selecting a Platform for a Given Theatre" },
  { id: "commissioning", title: "Installation, Commissioning and Support" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const OR_INTEGRATION_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "An operating room integration and video management system routes, displays, records and distributes the imaging and camera sources used during a procedure, from endoscopy towers and surgical light cameras to mobile C-arms and monitoring data. AbuFarha Medical supplies, installs, commissions and services OR integration platforms, including the cabling and display coordination they depend on, alongside training and ongoing technical support.",
      "Integration platforms are frequently evaluated on their display and switching capability alone, but their practical value in a theatre depends equally on how well they are wired into the room's existing equipment, how reliably they route sources under time pressure during a live procedure, and how well they connect into the hospital's broader imaging and record systems.",
      "This guide sets out what an integration platform actually does, its core components, the workflow benefits and risks involved, how it should connect to hospital data systems, and what to check when selecting and commissioning one for a specific theatre.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "OR integration platform function, core components, workflow benefits and risks, connectivity to hospital systems, selection criteria, installation and commissioning",
    audience:
      "Theatre managers, surgeons, IT and clinical engineering teams, biomedical engineering staff, procurement committees",
    readingTime: "11 min read",
    technology: "OR Integration Systems",
  },
  {
    type: "h2",
    id: "purpose",
    text: "What an OR Integration System Does",
    number: 1,
    body: "Routing, recording and displaying every image source in the room from a single controlled platform.",
  },
  {
    type: "p",
    text: "An OR integration system connects the imaging and video sources used in a theatre — endoscopy cameras, surgical microscope video, mobile C-arm output, patient monitoring data, surgical light cameras and external teaching or telemedicine feeds — and routes them to displays positioned around the room, typically controlled from a single touch panel rather than requiring the surgical team to operate each source device directly.",
  },
  {
    type: "p",
    text: "Beyond live routing, most platforms also record and archive video and still images from a case, either for the patient record, for teaching, or for quality review, and can distribute a feed to a remote viewing room, conference facility or another location within the hospital for consultation or education.",
  },
  {
    type: "knowledgeBox",
    variant: "did-you-know",
    title: "Integration is a routing layer, not a source device",
    text: "The integration platform does not generate images; it manages sources produced by other equipment. Its value comes from reliably switching and displaying what the connected devices produce, and from documenting the case, rather than from any imaging capability of its own.",
  },
  {
    type: "h2",
    id: "components",
    text: "Core Components of an Integration Platform",
    number: 2,
  },
  {
    type: "table",
    headers: ["Component", "Function", "Planning consideration"],
    rows: [
      ["Central switching and control unit", "Routes selected sources to selected displays", "Sized to the number of sources and displays the room will have"],
      ["Touch panel or control interface", "Allows the team to select sources and layouts", "Positioned for sterile or non-sterile access as needed"],
      ["Displays (ceiling, wall, boom-mounted)", "Present routed sources to each working position", "Sightlines checked for every position in the room"],
      ["Video and data cabling infrastructure", "Carries source signals to the switching unit", "Routed and terminated during construction or renovation, difficult to alter later"],
      ["Recording and archiving module", "Captures case video and images", "Storage capacity and retention policy defined before go-live"],
      ["Network interface", "Connects the platform to hospital imaging and record systems", "Interoperability with PACS and EPR confirmed before procurement"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "Cabling infrastructure is the component most often underestimated at the planning stage, because it is invisible once installed but the most disruptive to alter afterward.",
    clinicalInterpretation:
      "Where cabling is under-provisioned, later additions such as a new endoscopy tower or an extra display are delivered as visible surface trunking rather than a concealed installation, and can constrain future flexibility.",
    hospitalRecommendation:
      "Provision cable containment and spare capacity for anticipated future sources at the initial installation, even if not all connections are populated immediately.",
  },
  {
    type: "h2",
    id: "workflow",
    text: "Workflow Benefits and Risks",
    number: 3,
  },
  {
    type: "ul",
    items: [
      "Reduced need for staff to leave the sterile field or interrupt the procedure to operate individual source devices directly.",
      "Consistent display of the relevant image to every working position, reducing miscommunication during complex or image-guided procedures.",
      "Recorded case video supporting teaching, audit and quality review where institutional policy permits.",
      "Remote viewing supporting consultation or education without additional staff inside the room.",
      "Risk: a single point of failure if the integration platform itself fails during a case, which is why source devices typically retain a direct local display as a fallback.",
      "Risk: control-panel complexity that is not intuitive under time pressure, which training should specifically address.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "warning",
    title: "Keep a local fallback display on every source device",
    text: "An integration platform failure should not remove the surgical team's ability to see a live image. Source devices such as endoscopy towers and C-arms should retain their own local monitor as a fallback independent of the integration platform.",
  },
  {
    type: "h2",
    id: "connectivity",
    text: "Connectivity to Hospital Data Systems",
    number: 4,
  },
  {
    type: "ul",
    items: [
      "Interoperability with the hospital's picture archiving and communication system (PACS) for image storage.",
      "Interoperability with the electronic patient record (EPR) where case documentation or images are attached to the patient file.",
      "Network security and access control appropriate to clinical data, agreed with the hospital's IT and information security teams.",
      "Bandwidth and network capacity adequate for the video and data traffic the platform generates, particularly where remote viewing is used.",
      "A defined data retention and deletion policy consistent with institutional and applicable legal requirements.",
    ],
  },
  {
    type: "h2",
    id: "selection",
    text: "Selecting a Platform for a Given Theatre",
    number: 5,
  },
  {
    type: "ul",
    items: [
      "Number and type of sources the room needs to support now and in the foreseeable future, including any planned hybrid or imaging upgrades.",
      "Compatibility with existing endoscopy towers, imaging systems, surgical lights and displays already in use.",
      "Display count and positioning against the room's actual working positions and sightlines.",
      "Recording, archiving and remote viewing requirements as defined by clinical and teaching policy.",
      "Interoperability with the hospital's PACS and EPR, confirmed with the platform vendor and hospital IT before procurement.",
      "Vendor and local service support availability, given the platform's central role in daily theatre function.",
    ],
  },
  {
    type: "h2",
    id: "commissioning",
    text: "Installation, Commissioning and Support",
    number: 6,
  },
  {
    type: "ul",
    items: [
      "Cabling installed and tested against the platform manufacturer's specification before equipment connection.",
      "Every source and display verified individually and then as routed combinations, with results recorded.",
      "Recording and archiving function tested end-to-end, including retrieval from the hospital's storage system.",
      "Network connectivity to PACS and EPR tested and signed off jointly with hospital IT.",
      "Fallback display function on each source device confirmed independently of the integration platform.",
      "Operator training for surgical, nursing and technical staff on routine use and on the fallback procedure if the platform fails.",
    ],
  },
  {
    type: "p",
    text: "AbuFarha Medical supplies, installs and commissions OR integration and video management platforms, coordinates the cabling and display work with the room's other equipment, and provides ongoing technical support, preventive maintenance and spare parts for the installed system.",
  },
  {
    type: "faq",
    items: [
      {
        q: "Does an integration system replace the need for individual source device monitors?",
        a: "No. Source devices should retain their own local display as a fallback so that a failure of the integration platform does not remove the team's ability to see a live image during a procedure.",
      },
      {
        q: "Can an integration system be added to an existing theatre?",
        a: "Yes, but retrofitting cabling into a completed room is more disruptive than installing it during initial construction or renovation, and the existing sources' compatibility with the chosen platform must be confirmed first.",
      },
      {
        q: "What should be confirmed before connecting an integration platform to the hospital's PACS?",
        a: "Interoperability between the specific platform and the hospital's PACS and EPR versions, network security requirements, and a joint test with hospital IT covering both storage and retrieval before clinical use.",
      },
      {
        q: "How many displays does a theatre typically need?",
        a: "This depends on the room's working positions and specialty; it should be determined from the sightlines of each position in the room rather than a standard count, and reviewed during the design walk-through.",
      },
      {
        q: "What training does an integration system require?",
        a: "Routine operation of the control panel for surgical and nursing staff, and a clearly rehearsed fallback procedure for what to do if the platform fails during a case.",
      },
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 7,
  },
  {
    type: "p",
    text: "An OR integration platform's value depends on reliable routing of the room's actual sources, well-planned cabling and display placement, a tested fallback if it fails, and genuine interoperability with hospital imaging and record systems. Selected and commissioned against these criteria, it removes friction from a procedure rather than adding a new point of failure to it.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Theatre and perioperative service practice" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Theatre equipment installation and commissioning" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Project delivery and commissioning practice synthesis",
    disclaimer:
      "Educational guidance on operating room integration and video management systems. It does not replace manufacturer site planning documentation, clinical guidelines or local regulatory requirements.",
  },
  {
    type: "references",
    items: [
      { label: "Manufacturer site planning and interoperability documentation for OR integration platforms." },
      { label: "Institutional network security and data governance policy for clinical imaging systems." },
      { label: "Institutional theatre commissioning records for integration and video management installations." },
    ],
  },
];
