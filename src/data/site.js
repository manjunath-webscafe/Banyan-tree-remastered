/* Banyan Tree Group — site content.
   All repeated page content lives here so components stay presentational. */

export const brandName = "Banyan\u00A0Tree";
import image from "../assets/comingsoon.jpg";

export const navLinks = [
  { href: "/legacy", label: "Legacy" },
  { href: "/leadership", label: "Leadership" },
  {
    href: "/projects",
    label: "Projects",
    submenu: [
      { href: "/projects#status-completed", label: "Completed" },
      { href: "/projects#status-ongoing", label: "Ongoing" },
      { href: "/projects#status-upcoming", label: "Upcoming" },
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
      "https://res.cloudinary.com/flxf4ltt/image/upload/v1786535398/Sunshine_gifp8j.png",
    alt: "Sunshine, a Banyan Tree residence in Sarjapur",
  },
  {
    name: "Lake Drive Villas",
    location: "Whitefield \u2013 Old Madras Road Junction",
    tag: "Villas",
    status: "ongoing",
    image:
      "https://res.cloudinary.com/flxf4ltt/image/upload/v1786534572/Lake_Drive_vwdvtw.png",
    alt: "Lake Drive Villas, a Banyan Tree villa community near Whitefield",
  },
  {
    name: "Mystic Wind Row Houses",
    location: "Whitefield \u2013 Old Madras Road",
    tag: "Row Houses",
    status: "ongoing",
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
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80",
    alt: "Anand Apartments, a Banyan Tree residence JP nagar",
  },
  {
    name: "North Square",
    location: " Yelahanka",
    tag: "Residential",
    status: "completed",
    image:
      "https://res.cloudinary.com/flxf4ltt/image/upload/v1786535354/North_Square_hqadmf.png",
    alt: "North Square, a Banyan Tree residence Yelahanka",
  },
  {
    name: "Bliss",
    location: " Off Sarjapur Road",
    tag: "Residential",
    status: "completed",
    image:
      "https://res.cloudinary.com/flxf4ltt/image/upload/v1786535307/Bliss_rrbomy.png",
    alt: "Bliss, a Banyan Tree residence Off Sarjapur Road,",
  },
  {
    name: "Wintergreen",
    location: " Sarjapur Ring Road",
    tag: "Residential",
    status: "completed",
    image:
      "https://res.cloudinary.com/flxf4ltt/image/upload/v1786535411/winter_green_lvumdt.png",
    alt: "Wintergreen, a Banyan Tree residence Sarjapur Ring Road,",
  },
  {
    name: "Rhythm",
    location: " Off Hennur Road",
    tag: "Residential",
    status: "completed",
    image:
      "https://res.cloudinary.com/flxf4ltt/image/upload/v1786535367/Rhythm_sjxw04.png",
    alt: "Rhythm, a Banyan Tree residence Off Hennur Road",
  },
  {
    name: "Song of wind",
    location: " Nandi Hills",
    tag: "Residential",
    status: "completed",
    image:
      "https://res.cloudinary.com/flxf4ltt/image/upload/v1786535398/Sunshine_gifp8j.png",
    alt: "Song of wind, a Banyan Tree residence Nandi Hills",
  },
  {
    name: "Marigold Homes",
    location: "Bengaluru",
    tag: "Ongoing",
    status: "ongoing",
    upcoming: true,
    image:
      "https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?auto=format&fit=crop&w=900&q=80",
    alt: "Marigold Homes, an ongoing Banyan Tree development",
  },
  {
    name: "Coming Soon....!",
    location: "Bengaluru",
    tag: "Upcoming",
    status: "Upcoming",
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
    title: "Over Two Decades of Trust",
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
    body: "We study the land before we design for it — light, soil, existing trees and the rhythm of the neighbourhood around it.",
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
      "Delivered, occupied and standing as proof of two decades of design integrity and honest craft.",
  },
  {
    key: "ongoing",
    label: "Ongoing Projects",
    description:
      "Under active construction today, supervised in‑house at every stage from foundation to finish.",
  },
  {
    key: "upcoming",
    label: "Upcoming Projects",
    description:
      "In design and planning — the next addresses set to join our portfolio.",
  },
];

/* Promoter details to be supplied by Banyan Tree Group and dropped in below. */
export const promoters = [
  {
    id: "promoter-1",
    name: "Promoter Name",
    role: "Managing Promoter",
    bio: "Promoter profile to be added — background, track record and role in founding Banyan Tree Group.",
  },
  {
    id: "promoter-2",
    name: "Promoter Name",
    role: "Promoter & Director",
    bio: "Promoter profile to be added — background, track record and role in founding Banyan Tree Group.",
  },
];

/* Team member details to be supplied by Banyan Tree Group and dropped in below. */
export const teamMembers = [
  { id: "team-1", name: "Team Member", role: "Design & Architecture" },
  { id: "team-2", name: "Team Member", role: "Construction & Engineering" },
  { id: "team-3", name: "Team Member", role: "Sales & Advisory" },
  { id: "team-4", name: "Team Member", role: "Customer Relations" },
];

/* Leadership bios/photos to be supplied by Banyan Tree Group and dropped in below. */
export const leadershipTeam = [
  {
    id: "leader-1",
    name: "Leadership Name",
    role: "Managing Director",
    bio: "Biography to be added.",
  },
  {
    id: "leader-2",
    name: "Leadership Name",
    role: "Director – Design",
    bio: "Biography to be added.",
  },
  {
    id: "leader-3",
    name: "Leadership Name",
    role: "Director – Operations",
    bio: "Biography to be added.",
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
    a: "Our current portfolio is concentrated in Bengaluru, where two decades of local knowledge lets us plan with real precision. We evaluate new markets carefully and deliberately.",
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
  "Rhythm",
  "North Square",
  "Bliss",
  "Wintergreen",
  "Song of wind",
  "Anand Apartments",
];

/* Real profile URLs to be added later — hrefs are placeholders until then. */
export const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Mail", href: `mailto:${contact.email}` },
];
