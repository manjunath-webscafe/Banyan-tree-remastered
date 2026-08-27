/* Banyan Tree Group — site content.
   All repeated page content lives here so components stay presentational. */

export const brandName = "Banyan\u00A0Tree";

export const navLinks = [
  { href: "/legacy", label: "Legacy" },
  { href: "/leadership", label: "Leadership" },
  {
    href: "/projects",
    label: "Projects",
    submenu: [
      { href: "/projects#status-completed", label: "Completed" },
      { href: "/projects#status-ongoing", label: "Ongoing" },
    ],
  },
  { href: "/journey", label: "Journey" },
  { href: "/contact", label: "Contact" },
];

export const contact = {
  addressLines: [
    "PSR Marvel, 32/1, 4th Floor, Bellary Road,",
    "Vinayaka Nagar, Bengaluru \u2013 560024",
  ],
  footerAddressLines: [
    "PSR Marvel, 32/1, 4th Floor,",
    "Bellary Road, Vinayaka Nagar,",
    "Bengaluru \u2013 560024",
  ],
  phoneDisplay: "+91 90080 17739",
  phoneHref: "tel:+919008017739",
  email: "yashodhara@banyantreegroup.co.in",
};

export const stats = [
  { count: 20, suffix: "+", label: "Years of Practice" },
  { count: 9, suffix: "", label: "Landmark Addresses" },
  { count: 1200, suffix: "+", label: "Families Homed" },
  { count: 100, suffix: "%", label: "In\u2011House Design Oversight" },
];

export const pillars = [
  {
    id: "design-integrity",
    title: "Design Integrity",
    body: "Every plan is drawn to be lived in first, admired second — spaces that resolve honestly, without ornament for its own sake.",
  },
  {
    id: "enduring-craft",
    title: "Enduring Craft",
    body: "Material and method are chosen for the decades ahead, not the handover date — quality that reveals itself over years, not weeks.",
  },
  {
    id: "rooted-sustainability",
    title: "Rooted Sustainability",
    body: "We plan around existing trees and natural light, not against them — building that leaves a neighbourhood greener than it found it.",
  },
  {
    id: "complete-transparency",
    title: "Complete Transparency",
    body: "Every timeline, cost and specification is shared plainly — the same information for us and for the family choosing to invest in us.",
  },
];

export const projects = [
  {
    name: "Royale",
    location: "Cooke Town",
    tag: "Residential",
    status: "completed",
    image:
      "https://res.cloudinary.com/flxf4ltt/image/upload/v1786535376/Royale_k8tffx.png",
    alt: "Royale, a Banyan Tree residence in Cooke Town",
  },
  {
    name: "Regal",
    location: "Cooke Town",
    tag: "Residential",
    status: "completed",
    image:
      "https://res.cloudinary.com/flxf4ltt/image/upload/v1786535361/Regal_gqsrb7.png",
    alt: "Regal, a Banyan Tree residence in Cooke Town",
  },
  {
    name: "Grace",
    location: "Richard's Town",
    tag: "Residential",
    status: "completed",
    image:
      "https://res.cloudinary.com/flxf4ltt/image/upload/v1786535329/Grace_gw3ulb.png",
    alt: "Grace, a Banyan Tree residence in Richard's Town",
  },
  {
    name: "East Lyne",
    location: "Whitefield",
    tag: "Residential",
    status: "completed",
    image:
      "https://res.cloudinary.com/flxf4ltt/image/upload/v1786535321/East_Lyne_xgabn0.png",
    alt: "Eastlynne, a Banyan Tree residence in Whitefield",
  },
  {
    name: "Sunshine",
    location: "Sarjapur",
    tag: "Residential",
    status: "completed",
    image:
      "https://res.cloudinary.com/flxf4ltt/image/upload/v1787548390/sunshine_fsxi28.png",
    alt: "Sunshine, a Banyan Tree residence in Sarjapur",
  },
  {
    name: "Lake Drive",
    location: "Old Madras Road",
    tag: "Villas",
    status: "completed",
    image:
      "https://res.cloudinary.com/flxf4ltt/image/upload/v1786534572/Lake_Drive_vwdvtw.png",
    alt: "Lake Drive, a Banyan Tree villa community on Old Madras Road",
  },
  {
    name: "Mystic Wind Row Houses",
    location: "Whitefield \u2013 Old Madras Road",
    tag: "Row Houses",
    status: "completed",
    image:
      "https://res.cloudinary.com/flxf4ltt/image/upload/v1786535346/Mystic_wind_jazc4l.png",
    alt: "Mystic Wind Row Houses, a Banyan Tree community near Whitefield",
  },
  {
    name: "Anand Apartments",
    location: "JP nagar",
    tag: "Residential",
    status: "completed",
    image:
      "https://res.cloudinary.com/flxf4ltt/image/upload/v1786535367/Rhythm_sjxw04.png",
    alt: "Anand Apartments, a Banyan Tree residence JP nagar",
  },
  {
    name: "Basaveshwara Layout",
    location: "Vijayanagar",
    tag: "Residential",
    status: "completed",
  },
  {
    name: "Basaveshwara Layout Phase 2",
    location: "Chandra Layout, Vijayanagar",
    tag: "Residential",
    status: "completed",
  },
  {
    name: "Ashirwad Apartments",
    location: "RPC Layout, Vijayanagar",
    tag: "Residential",
    status: "completed",
    image:
      "https://res.cloudinary.com/flxf4ltt/image/upload/v1786535411/winter_green_lvumdt.png",
    alt: "Ashirwad Apartments, a Banyan Tree residence in RPC Layout, Vijayanagar",
  },
  {
    name: "Ashirwad Layout",
    location: "Magadi Road",
    tag: "Residential",
    status: "completed",
  },
  {
    name: "Trishul Commercial Complex",
    location: "RPC Layout, Vijayanagar",
    tag: "Commercial",
    status: "completed",
    image: "",
    alt: "Trishul Commercial Complex, a Banyan Tree development in RPC Layout, Vijayanagar",
  },
  {
    name: "Ashirwad Commercial Complex",
    location: "Chandra Layout, Vijayanagar",
    tag: "Commercial",
    status: "completed",
    image: "",
    alt: "Ashirwad Commercial Complex, a Banyan Tree development in Chandra Layout, Vijayanagar",
  },
  {
    name: "Coconut Garden",
    location: "Nagarbhavi Main Road",
    tag: "Residential",
    status: "completed",
    image: "",
    alt: "Coconut Garden, a Banyan Tree residence on Nagarbhavi Main Road",
  },
  {
    name: "Marigold Homes",
    location: "Bengaluru",
    tag: "Ongoing",
    status: "ongoing",
    upcoming: true,
    image:
      "https://res.cloudinary.com/flxf4ltt/image/upload/v1787549893/marigold_uhzuy9.jpg",
    alt: "Marigold Homes, an ongoing Banyan Tree development",
  },
  {
    name: "Coming Soon....!",
    location: "Bengaluru",
    tag: "Ongoing",
    status: "ongoing",
    upcoming: true,
    image:
      "https://i.pinimg.com/736x/74/99/a0/7499a03f6a46b393186eb0b287fd05f6.jpg",
    alt: "upcoming",
  },
];

export const features = [
  {
    title: "A Considered Portfolio",
    body: "Every address is chosen and designed with restraint, not volume — a portfolio built one deliberate project at a time.",
  },
  {
    title: "Simplified Financing",
    body: "Our in\u2011house advisory works alongside leading lenders to structure financing that fits your family's plans, not just ours.",
  },
  {
    title: "Over three decades of Trust",
    body: "Generations of Bengaluru families have chosen Banyan Tree — a track record built on homes that were delivered as promised.",
  },
  {
    title: "Proactive Communication",
    body: "From groundbreaking to handover, you receive clear, timely updates — never left to wonder where your home stands.",
  },
  {
    title: "Complete Transparency",
    body: "Documentation, specifications and timelines are shared candidly, so every decision you make is an informed one.",
  },
  {
    title: "Neighbourhood Intelligence",
    body: "Our teams know each micro\u2011market intimately — schools, transit and civic infrastructure — before we ever break ground.",
  },
];

export const journeySteps = [
  {
    num: "01",
    title: "Discover",
    body: "We study the land before we design for it light, soil, existing trees and the rhythm of the neighbourhood around it.",
  },
  {
    num: "02",
    title: "Design",
    body: "Architects and engineers work in the same room, resolving spatial planning, structure and services together from day one.",
  },
  {
    num: "03",
    title: "Build",
    body: "Construction proceeds under continuous in\u2011house supervision, with quality checkpoints at every stage of the structure.",
  },
  {
    num: "04",
    title: "Deliver",
    body: "Homes are handed over complete and inspected — followed by a dedicated relationship team long after you've moved in.",
  },
];

export const projectStatusGroups = [
  {
    key: "completed",
    label: "Completed Projects",
    description:
      "Delivered, occupied and standing as proof of three decades of design integrity and honest craft.",
  },
  {
    key: "ongoing",
    label: "Ongoing Projects",
    description:
      "Under active construction today, supervised in‑house at every stage from foundation to finish.",
  },
];

export const leadershipTeam = [
  {
    id: "leader-1",
    image:
      "https://res.cloudinary.com/flxf4ltt/image/upload/v1787127181/ravi_t3p8te.png",
    name: "Mr. Ravindra M Madhudi ",
    bio: "Ravindra M. Madhudi is a Management Graduate with a specialization and strong affinity for Marketing, and comes from a family with a long-standing background in real estate development. With close to three decades of professional experience, he has worked across diverse sectors including Construction, Real Estate, Journalism, Public Relations, Investment Banking, Pharmaceuticals, Finance and Publishing.He oversees and drives key aspects of the business, including Marketing, Business Development, Design and Construction. His strong business acumen and industry experience have enabled him to build lasting relationships with several MNCs across India. A multifaceted leader, he is known for his ability to inspire, motivate and lead his colleagues and employees while contributing to the continued growth of the organization.",
  },
  {
    id: "leader-2",
    image:
      "https://res.cloudinary.com/flxf4ltt/image/upload/v1787127171/hemag_kxzqj9.png",
    name: "Mr. Hemang D Rawal  ",
    bio: " Mr. Hemang D. Rawal is a Chartered Accountant by qualification, he brings over three decades of experience in the real estate sector.He initiated the Indian operations of a British Real Estate Services Company, ranked among the world's largest in its field, and has advised several leading multinational corporations, including Godrej, SKF Bearings, Zee Telefilms, McDonald's and Deutsche Bank. His extensive industry expertise and business acumen have helped organizations navigate challenging and volatile market conditions. He is also on the panel of The Economic Times Realty, and his insights and articles have appeared in leading newspapers.",
  },
];

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=900&q=80",
    alt: "Living room bathed in natural light",
  },
  {
    src: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=900&q=80",
    alt: "Contemporary interior detailing",
  },
  {
    src: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=900&q=80",
    alt: "Serene bedroom interior",
  },
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80",
    alt: "Residential tower at dusk",
  },
  {
    src: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=900&q=80",
    alt: "Mature green canopy within a Banyan Tree community",
  },
];

export const faqs = [
  {
    q: "What financing options are available?",
    a: "Our in\u2011house advisory team works with a panel of leading banks and NBFCs to structure home loans suited to your eligibility and timeline, at no additional cost to you.",
  },
  {
    q: "How is construction quality monitored?",
    a: "Every project is supervised in\u2011house through defined quality checkpoints at each stage — from foundation to finishing — rather than left to a single final inspection.",
  },
  {
    q: "Can I customise interiors before handover?",
    a: "Select finishes and layouts can be personalised during the design stage, depending on the project and construction timeline. Our sales team can confirm what's possible for a specific residence.",
  },
  {
    q: "What support is offered after I move in?",
    a: "A dedicated relationship team remains available well beyond handover for maintenance coordination, documentation and any post\u2011possession queries.",
  },
  {
    q: "Do you build outside Bengaluru?",
    a: "Our current portfolio is concentrated in Bengaluru, where three decades of local knowledge lets us plan with real precision. We evaluate new markets carefully and deliberately.",
  },
];

export const footerQuickLinks = [
  { href: "#top", label: "Home" },
  { href: "#legacy", label: "About Us" },
  { href: "#projects", label: "Projects" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact Us" },
];

export const footerProjects = [
  "Royale",
  "Regal",
  "Grace",
  "East Lyne",
  "Sunshine",
  "Lake Drive",
  "Mystic Wind",
  "Anand Apartments",
  "Basaveshwara Layout",
  "Ashirwad Apartments",
  "Ashirwad Layout",
  "Coconut Garden",
];

/* Real profile URLs to be added later — hrefs are placeholders until then. */
export const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Mail", href: `mailto:${contact.email}` },
];
