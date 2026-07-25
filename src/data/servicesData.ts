export interface ProductItem {
  id: string;
  name: string;
  desc: string;
  image: string;
  gallery: string[];
}

export interface ServiceDetail {
  id: number;
  slug: string;
  title: string;
  tagline: string;
  desc: string;
  longDesc: string;
  materials: string;
  image: string;
  gradient: string;
  features: string[];
  products: ProductItem[];
  specifications: { label: string; value: string }[];
  useCases: string[];
}

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 1,
    slug: "packaging",
    title: "Packaging",
    tagline: "Custom retail, e-commerce, & product packaging solutions",
    desc: "Bespoke structural packaging engineered to protect products and elevate unboxing moments.",
    longDesc: "Transform every transaction into an unforgettable unboxing experience. Our custom packaging manufacturing offers everything from eco-friendly shipping mailers and boutique paper bags to custom folding display cartons, designed with structural integrity and exquisite print precision.",
    materials: "Kraft paper, organic cotton, corrugated flutes, soft-touch laminations.",
    image: "/services/box.png",
    gradient: "from-[#8a6834]/40 to-black",
    features: [
      "Custom E-Commerce Shipping & Mailer Boxes",
      "Bespoke Retail Paper Bags & Custom Handles",
      "Eco-Friendly Recycled Kraft & Cardboard Stock",
      "Precision Die-Cut Structural Packaging",
      "Full Edge-to-Edge Brand Pattern Printing"
    ],
    products: [
      { id: "pkg-1", name: "Custom Boxes", desc: "Durable corrugated shipping boxes with full edge-to-edge custom brand printing.", image: "/services/box.png", gallery: ["/services/box.png", "/services/bag.png", "/services/card.png", "/services/corparate.png"] },
      { id: "pkg-2", name: "Product Labels", desc: "High-resolution self-adhesive product labels and custom brand stickers.", image: "/services/bag.png", gallery: ["/services/bag.png", "/services/box.png", "/services/promotional.png", "/services/card.png"] },
      { id: "pkg-3", name: "Stickers", desc: "Precision die-cut vinyl stickers and promotional brand decals.", image: "/services/card.png", gallery: ["/services/card.png", "/services/box.png", "/services/advertising.png", "/services/bag.png"] },
      { id: "pkg-4", name: "Tags", desc: "Custom heavy-stock hang tags with foil accents and metallic eyelets.", image: "/services/promotional.png", gallery: ["/services/promotional.png", "/services/card.png", "/services/corparate.png", "/services/box.png"] },
      { id: "pkg-5", name: "Pouches", desc: "Flexible barrier pouches and custom printed resealable packaging bags.", image: "/services/box.png", gallery: ["/services/box.png", "/services/bag.png", "/services/fabric.png", "/services/card.png"] },
      { id: "pkg-6", name: "Sleeves", desc: "Textured paperboard sleeves tailored for artisanal items and gift boxes.", image: "/services/corparate.png", gallery: ["/services/corparate.png", "/services/box.png", "/services/bag.png", "/services/promotional.png"] }
    ],
    specifications: [
      { label: "Paper Weight", value: "170gsm - 350gsm Kraft & Art Board" },
      { label: "Finishing", value: "Matte/Gloss Lamination, Debossing, Hot Foil" },
      { label: "Custom Insets", value: "Laser-cut Cardboard & Foam Inserts" },
      { label: "Turnaround", value: "3-5 Business Days" }
    ],
    useCases: ["Retail Boutiques", "E-Commerce Brands", "Product Launches", "Food & Beverage"]
  },
  {
    id: 2,
    slug: "promotional-materials",
    title: "Promotional Materials",
    tagline: "Engaging branded giveaways, merchandise & event activation items",
    desc: "Custom branded merchandise and promotional items designed to capture interest and amplify brand awareness.",
    longDesc: "Elevate brand engagement at exhibitions, corporate events, and trade shows with high-quality promotional materials. From custom-printed event tickets and woven lanyards to branded ceramic mugs, drinkware, gift bags, and VIP event passes.",
    materials: "Recycled paperboard, satin ribbons, woven polyester, ceramic, acrylic.",
    image: "/services/promotional.png",
    gradient: "from-amber-900/40 to-black",
    features: [
      "Custom Branded Trade Show Giveaways",
      "Woven Lanyards & Eco-Friendly Wristbands",
      "Ceramic Mugs & Vacuum Stainless Tumblers",
      "Laminated VIP Event Passes & Badges",
      "Custom Printed Boutique Gift Bags"
    ],
    products: [
      { id: "prom-1", name: "Event Tickets", desc: "Custom printed security tickets with foil stamping, sequential numbering, and perforation.", image: "/services/promotional.png", gallery: ["/services/promotional.png", "/services/card.png", "/services/bag.png", "/services/box.png"] },
      { id: "prom-2", name: "Wristbands", desc: "Durable Tyvek, fabric, and silicone wristbands for events and VIP access control.", image: "/services/card.png", gallery: ["/services/card.png", "/services/promotional.png", "/services/advertising.png", "/services/corparate.png"] },
      { id: "prom-3", name: "Lanyards", desc: "Full-color dye-sublimated woven lanyards with custom safety breakaway clips.", image: "/services/bag.png", gallery: ["/services/bag.png", "/services/promotional.png", "/services/box.png", "/services/card.png"] },
      { id: "prom-4", name: "Mugs & Tumblers", desc: "Laser-engraved stainless steel tumblers and ceramic coffee mugs with full branding.", image: "/services/corparate.png", gallery: ["/services/corparate.png", "/services/promotional.png", "/services/fabric.png", "/services/bag.png"] },
      { id: "prom-5", name: "Gift Bags", desc: "Custom boutique paper gift bags featuring soft-touch lamination and rope handles.", image: "/services/box.png", gallery: ["/services/box.png", "/services/promotional.png", "/services/card.png", "/services/advertising.png"] },
      { id: "prom-6", name: "Badges & Passes", desc: "Laminated VIP event passes, conference badges, and custom ID cards.", image: "/services/advertising.png", gallery: ["/services/advertising.png", "/services/promotional.png", "/services/corparate.png", "/services/bag.png"] }
    ],
    specifications: [
      { label: "Material Options", value: "Polyester, Ceramic, Cardstock, Recycled PVC" },
      { label: "Printing Tech", value: "Dye-Sublimation, Screen Printing, Laser Engraving" },
      { label: "Hardware", value: "Metal Swivel Hooks, Safety Breakaways, Clips" },
      { label: "Turnaround", value: "2-4 Business Days" }
    ],
    useCases: ["Corporate Events", "Exhibitions & Expos", "Festival Wristbands", "Employee Appreciation"]
  },
  {
    id: 3,
    slug: "marketing-collaterals",
    title: "Marketing Collaterals",
    tagline: "High-definition commercial print collaterals for business growth",
    desc: "Premium printed collateral designed to communicate your brand message with clarity, rich color accuracy, and fine tactile finishes.",
    longDesc: "Make a powerful commercial impact with high-definition marketing collaterals. We print everything from high-volume marketing flyers and product catalogues to large-format posters, saddle-stitched booklets, tri-fold brochures, and corporate newsletters.",
    materials: "Gloss cardstock, silk paper, recycled matte paper, UV coating.",
    image: "/services/card.png",
    gradient: "from-amber-700/40 to-black",
    features: [
      "High-Volume Marketing Flyers & Handouts",
      "Product Catalogues & Bound Booklets",
      "High-Definition Architectural & Promotional Posters",
      "Tri-Fold & Multi-Page Custom Corporate Brochures",
      "Internal & External Corporate Newsletters"
    ],
    products: [
      { id: "mkt-1", name: "Flyers", desc: "Vibrant single & double-sided promotional flyers printed on premium silk cardstock.", image: "/services/card.png", gallery: ["/services/card.png", "/services/box.png", "/services/promotional.png", "/services/bag.png"] },
      { id: "mkt-2", name: "Catalogues", desc: "Perfect-bound product catalogues with full color fidelity and soft-touch covers.", image: "/services/box.png", gallery: ["/services/box.png", "/services/card.png", "/services/corparate.png", "/services/advertising.png"] },
      { id: "mkt-3", name: "Posters", desc: "High-definition large-format posters for indoor marketing and storefront displays.", image: "/services/advertising.png", gallery: ["/services/advertising.png", "/services/card.png", "/services/bag.png", "/services/box.png"] },
      { id: "mkt-4", name: "Booklets", desc: "Saddle-stitched corporate booklets, event programs, and annual reports.", image: "/services/promotional.png", gallery: ["/services/promotional.png", "/services/card.png", "/services/fabric.png", "/services/corparate.png"] },
      { id: "mkt-5", name: "Brochures", desc: "Tri-fold and bi-fold marketing brochures with spot UV accents and precision folding.", image: "/services/corparate.png", gallery: ["/services/corparate.png", "/services/card.png", "/services/box.png", "/services/bag.png"] },
      { id: "mkt-6", name: "Newsletters", desc: "Multi-page company newsletters and publication prints for stakeholder communication.", image: "/services/bag.png", gallery: ["/services/bag.png", "/services/card.png", "/services/promotional.png", "/services/advertising.png"] }
    ],
    specifications: [
      { label: "Paper Stock", value: "130gsm - 350gsm Silk, Gloss, & Matte" },
      { label: "Binding Options", value: "Saddle-Stitch, Perfect Bound, Wire-O" },
      { label: "Coating", value: "Soft-Touch Matte, Gloss UV, Spot Foil" },
      { label: "Turnaround", value: "1-3 Business Days" }
    ],
    useCases: ["Product Launches", "Corporate Presentations", "Trade Shows", "Retail Promotions"]
  },
  {
    id: 4,
    slug: "advertising",
    title: "Advertising",
    tagline: "High-visibility outdoor & retail advertising displays",
    desc: "Command attention with large-format outdoor advertising, exhibition backdrops, roll-up banners, and custom display stands.",
    longDesc: "Dominate retail environments and outdoor spaces with high-impact advertising structures. We engineer roll-up standees, modular exhibition backdrops, feather flags, outdoor weather-resistant signage, vinyl stickers pasting, and POS display stands.",
    materials: "Heavy-duty vinyl, anodized aluminum, mesh fabric, acrylic, LED lighting.",
    image: "/services/advertising.png",
    gradient: "from-yellow-900/40 to-black",
    features: [
      "Retractable Premium Roll-Up Standees",
      "Modular Exhibition Backdrops & Media Walls",
      "Outdoor Feather Flags & Teardrop Banners",
      "Weather-Resistant Architectural Signage",
      "Precision Retail Display Stands & POS Racks"
    ],
    products: [
      { id: "adv-1", name: "Roll Up Standees", desc: "Retractable aluminum roll-up banners with anti-curl blockout vinyl graphic prints.", image: "/services/advertising.png", gallery: ["/services/advertising.png", "/services/box.png", "/services/card.png", "/services/fabric.png"] },
      { id: "adv-2", name: "Backdrop", desc: "Seamless stretch-fabric media backdrops and pop-up exhibition displays.", image: "/services/fabric.png", gallery: ["/services/fabric.png", "/services/advertising.png", "/services/bag.png", "/services/corparate.png"] },
      { id: "adv-3", name: "Flags", desc: "Outdoor teardrop and feather flags engineered for wind-resistance and high visibility.", image: "/services/box.png", gallery: ["/services/box.png", "/services/advertising.png", "/services/promotional.png", "/services/card.png"] },
      { id: "adv-4", name: "Outside Signage", desc: "Durable aluminum composite and acrylic outdoor signage built for weather durability.", image: "/services/card.png", gallery: ["/services/card.png", "/services/advertising.png", "/services/corparate.png", "/services/bag.png"] },
      { id: "adv-5", name: "Vinyl Stickers Pasting", desc: "High-tack vinyl wall murals, window wraps, and vehicle decal pastings.", image: "/services/bag.png", gallery: ["/services/bag.png", "/services/advertising.png", "/services/box.png", "/services/promotional.png"] },
      { id: "adv-6", name: "Display Stand", desc: "Custom retail POS display stands, brochure holders, and product showcases.", image: "/services/corparate.png", gallery: ["/services/corparate.png", "/services/advertising.png", "/services/card.png", "/services/fabric.png"] }
    ],
    specifications: [
      { label: "Graphic Material", value: "Anti-Curl Blockout Vinyl, 240gsm Tension Fabric" },
      { label: "Frame", value: "Anodized Heavy-Duty Aluminum Base" },
      { label: "UV Protection", value: "3-5 Year Outdoor Fade Resistance" },
      { label: "Turnaround", value: "2-4 Business Days" }
    ],
    useCases: ["Retail Storefronts", "Trade Shows & Expos", "Brand Activations", "Outdoor Campaigns"]
  },
  {
    id: 5,
    slug: "luxury-rigid-boxes",
    title: "Luxury Rigid Boxes",
    tagline: "Premium handcrafted rigid boxes & luxury presentation packaging",
    desc: "Handcrafted heavy-duty rigid boxes featuring magnetic closures, velvet inserts, leatherette finishes, and metallic foil accents.",
    longDesc: "Elevate your product presentation with handcrafted luxury rigid boxes. Engineered from heavy-gauge chipboard wrapped in fine paper, velvet, or faux leather, our boxes feature neodymium magnetic latches, pull-out drawers, and metallic hot-foil stamping.",
    materials: "Hand-wrapped chipboard, velvet linings, faux leather, neodymium magnetic latches, gold foil.",
    image: "/services/box.png",
    gradient: "from-amber-950/40 to-black",
    features: [
      "Custom Handcrafted Heavy-Duty Rigid Boxes",
      "Neodymium Magnetic Closure Latches",
      "Premium Leatherette & Velvet Lined Interior Inserts",
      "Pull-Out Drawers & Ribbon Pull Tabs",
      "Hot-Foil Stamped Metallic Logos & Debossing"
    ],
    products: [
      { id: "rig-1", name: "Rigid Boxes", desc: "Heavy-gauge handcrafted rigid setup boxes with custom structural inserts.", image: "/services/box.png", gallery: ["/services/box.png", "/services/corparate.png", "/services/bag.png", "/services/card.png"] },
      { id: "rig-2", name: "Special Magnetic Boxes", desc: "Concealed magnetic latch boxes wrapped in soft-touch paper with gold foil stamping.", image: "/services/corparate.png", gallery: ["/services/corparate.png", "/services/box.png", "/services/promotional.png", "/services/bag.png"] },
      { id: "rig-3", name: "Leather Boxes", desc: "Luxury faux leather wrapped presentation boxes with debossed branding.", image: "/services/card.png", gallery: ["/services/card.png", "/services/box.png", "/services/advertising.png", "/services/fabric.png"] },
      { id: "rig-4", name: "Tissue Boxes", desc: "Custom decorative rigid tissue box covers tailored for executive suites and hotels.", image: "/services/bag.png", gallery: ["/services/bag.png", "/services/box.png", "/services/corparate.png", "/services/card.png"] },
      { id: "rig-5", name: "Drawer & Pull-Out Boxes", desc: "Slide-out drawer rigid boxes with satin ribbon pull tabs for jewelry and cosmetics.", image: "/services/promotional.png", gallery: ["/services/promotional.png", "/services/box.png", "/services/fabric.png", "/services/advertising.png"] },
      { id: "rig-6", name: "Luxury Presentation Boxes", desc: "Custom VIP gift presentation boxes with multi-tiered velvet compartments.", image: "/services/fabric.png", gallery: ["/services/fabric.png", "/services/box.png", "/services/corparate.png", "/services/bag.png"] }
    ],
    specifications: [
      { label: "Board Thickness", value: "1000gsm - 1800gsm Heavy Industrial Chipboard" },
      { label: "Inserts", value: "EVA Foam, High-Density Velvet, Thermoformed Tray" },
      { label: "Foil Options", value: "Gold, Silver, Rose Gold, Metallic Copper" },
      { label: "Turnaround", value: "4-7 Business Days" }
    ],
    useCases: ["Luxury Watches & Jewelry", "Perfumery & Cosmetics", "High-End Electronics", "VIP Executive Gifts"]
  },
  {
    id: 6,
    slug: "cloth-sublimation-printing",
    title: "Cloth Sublimation Printing",
    tagline: "High-definition dye-sublimation textile & apparel printing",
    desc: "Vibrant dye-sublimation fused into performance fabrics, sportswear, safety vests, tote bags, and custom apparel with zero fading.",
    longDesc: "Produce brilliant color-fast textile prints with deep dye-sublimation printing. Our thermal transfer inks penetrate fabric fibers at high temperatures, ensuring soft-touch feel, zero cracking, and unlimited color vibrancy across safety vests, canvas tote bags, custom t-shirts, caps, hoodies, and activewear.",
    materials: "Polyester blends, organic cotton, high-vis reflective mesh, canvas, microfiber.",
    image: "/services/fabric.png",
    gradient: "from-amber-800/40 to-black",
    features: [
      "High-Definition Full Color Dye-Sublimation",
      "High-Visibility Safety Vests & Reflective Tapes",
      "Heavyweight Canvas Tote Bags & Custom Handles",
      "Breathable Moisture-Wicking Sportswear & Jerseys",
      "Fleece Hoodies & Custom Embroidered Caps"
    ],
    products: [
      { id: "cloth-1", name: "Safety Vest", desc: "High-visibility reflective safety vests custom printed with corporate logos.", image: "/services/fabric.png", gallery: ["/services/fabric.png", "/services/promotional.png", "/services/bag.png", "/services/box.png"] },
      { id: "cloth-2", name: "Tote Bag", desc: "Heavyweight organic canvas tote bags printed with eco-friendly vibrant inks.", image: "/services/bag.png", gallery: ["/services/bag.png", "/services/fabric.png", "/services/card.png", "/services/corparate.png"] },
      { id: "cloth-3", name: "T-Shirt", desc: "Custom crewneck t-shirts featuring full-bleed dye-sublimation artwork.", image: "/services/card.png", gallery: ["/services/card.png", "/services/fabric.png", "/services/advertising.png", "/services/box.png"] },
      { id: "cloth-4", name: "Cap", desc: "5-panel baseball caps and trucker hats with custom sublimated patches.", image: "/services/promotional.png", gallery: ["/services/promotional.png", "/services/fabric.png", "/services/corparate.png", "/services/bag.png"] },
      { id: "cloth-5", name: "Hoodies & Sweatshirts", desc: "Fleece-lined custom printed sweatshirts with wash-durable fabric dyes.", image: "/services/corparate.png", gallery: ["/services/corparate.png", "/services/fabric.png", "/services/box.png", "/services/card.png"] },
      { id: "cloth-6", name: "Sportswear & Activewear", desc: "Performance athletic jerseys and team uniforms printed with breathable inks.", image: "/services/box.png", gallery: ["/services/box.png", "/services/fabric.png", "/services/advertising.png", "/services/promotional.png"] }
    ],
    specifications: [
      { label: "Wash Resistance", value: "Grade 4.5 Fade Resistant (50+ Washes)" },
      { label: "Resolution", value: "Ultra High Detail Sublimation Transfer" },
      { label: "Fabric Types", value: "Polyester, Lycra, Satin, Canvas Blends" },
      { label: "Turnaround", value: "2-4 Business Days" }
    ],
    useCases: ["Sports Teams & Apparel", "Corporate Uniforms", "Trade Show Merchandise", "Staff Workwear"]
  },
  {
    id: 7,
    slug: "business-corporate-gifts",
    title: "Business Corporate Gifts",
    tagline: "Executive corporate gift sets & branded merchandise",
    desc: "Bespoke executive gift sets including laser-engraved pens, power banks, leather notebooks, stainless steel water bottles, and custom keychains.",
    longDesc: "Strengthen executive relationships with curated business corporate gifts. We specialize in curating elegant corporate sets featuring laser-engraved pens, fast-charging power banks, leather notebooks, metal pendrive keychains, stainless steel water bottles, and custom mouse pads.",
    materials: "Stainless steel, PU leather, anodized aluminum, bamboo, faux leather.",
    image: "/services/corparate.png",
    gradient: "from-emerald-900/40 to-black",
    features: [
      "Custom Executive Presentation Suites",
      "Laser-Engraved Anodized Metal Pens",
      "Fast-Charging Wireless Power Banks",
      "Faux Leather Embossed Notebooks & Diaries",
      "Stainless Steel Insulated Water Bottles"
    ],
    products: [
      { id: "corp-1", name: "Notebooks", desc: "Hardcover faux-leather notebooks with ribbon bookmarks and elastic closures.", image: "/services/corparate.png", gallery: ["/services/corparate.png", "/services/bag.png", "/services/card.png", "/services/box.png"] },
      { id: "corp-2", name: "Power Banks", desc: "Slim wireless power banks custom engraved with company logos.", image: "/services/card.png", gallery: ["/services/card.png", "/services/corparate.png", "/services/promotional.png", "/services/bag.png"] },
      { id: "corp-3", name: "Pens", desc: "Heavyweight anodized metal rollerball pens with precision laser etching.", image: "/services/promotional.png", gallery: ["/services/promotional.png", "/services/corparate.png", "/services/advertising.png", "/services/box.png"] },
      { id: "corp-4", name: "Pendrives & Keychains", desc: "Metal USB 3.0 pendrives paired with custom leatherette keychains.", image: "/services/box.png", gallery: ["/services/box.png", "/services/corparate.png", "/services/bag.png", "/services/card.png"] },
      { id: "corp-5", name: "Water Bottles", desc: "Double-wall vacuum insulated stainless steel water bottles.", image: "/services/bag.png", gallery: ["/services/bag.png", "/services/corparate.png", "/services/card.png", "/services/promotional.png"] },
      { id: "corp-6", name: "Mouse Pads", desc: "Ergonomic memory foam mouse pads with full-color custom surface printing.", image: "/services/corparate.png", gallery: ["/services/corparate.png", "/services/box.png", "/services/bag.png", "/services/card.png"] }
    ],
    specifications: [
      { label: "Customization", value: "Laser Engraving, UV Print, Debossing" },
      { label: "Packaging", value: "Foil-Stamped Presentation Box Included" },
      { label: "Materials", value: "Stainless Steel, Leatherette, Anodized Aluminum" },
      { label: "Turnaround", value: "3-5 Business Days" }
    ],
    useCases: ["Executive Recognition", "Board Member Gifts", "Milestone Celebrations", "Client Onboarding"]
  }
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return SERVICES_DATA.find((service) => service.slug === slug);
}
