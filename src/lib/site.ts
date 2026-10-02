export const SITE = {
  name: "MISO Studio",
  url: "https://www.miso-studio.au",
  email: "hello@miso-studio.au",
  phone: "0403 670 603",
  phoneHref: "tel:+61403670603",
  instagram: "https://www.instagram.com/miso_studio_au/",
  linkedin: "https://www.linkedin.com/in/hayleyurmston/",
  reviewUrl: "https://g.page/r/Ccsw9PdvpgnEEAI/review",
  hamletFields: "https://hamletandfields.au/",
  // Set these in Vercel > Settings > Environment Variables
  auditPaymentLink: process.env.NEXT_PUBLIC_AUDIT_PAYMENT_LINK || "/contact",
  freeAuditUrl: "https://freeaudit.miso-studio.au",
};

export const NAV = [
  { href: "/free-ai-seo-audit", label: "Free AI & SEO Audit" },
  { href: "/order-ai-audit", label: "AI Readiness Audit" },
  { href: "/studio-services", label: "Studio Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about-us", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const FOOTER_NAV = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About" },
  { href: "/studio-services", label: "Studio Services" },
  { href: "/web-design-orange", label: "Web Design Orange" },
  { href: "/web-design-bathurst", label: "Web Design Bathurst" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/digital-guide", label: "Digital Guide" },
  { href: "/contact", label: "Contact" },
];

export type Package = {
  name: string;
  tagline: string;
  price: string;
  priceNote?: string;
  includes: string[];
  cta: string;
};

export const PACKAGES: Package[] = [
  {
    name: "Focused Custom Website",
    tagline:
      "A lightweight, custom-built site for new businesses and older websites ready for a fresh start.",
    price: "From $1,500 + GST",
    includes: [
      "One focused page or a multi-page site, for services or e-commerce",
      "Custom design and development",
      "SEO and AI search foundations",
      "Copy direction and content support",
      "Mobile optimisation",
      "Contact and enquiry setup",
    ],
    cta: "Let's talk custom",
  },
  {
    name: "The Footprint",
    tagline:
      "A simple, elegant 3-page site (Home, About, Contact) to get you launched with clarity.",
    price: "Squarespace/Shopify $3,000",
    priceNote: "WordPress $3,600",
    includes: [
      "1:1 site strategy session",
      "3-page custom layout",
      "Contact form integration",
      "Mobile-friendly, brand-aligned styling",
      "Basic SEO setup (titles, descriptions, alt text)",
      "5-day turnaround and 2 weeks of support",
    ],
    cta: "Start my Footprint",
  },
  {
    name: "The Foundation",
    tagline:
      "A strategic 5-page website that balances beauty with function - a lasting base for your brand online.",
    price: "Squarespace/Shopify $5,200",
    priceNote: "WordPress $5,900",
    includes: [
      "1:1 clarity and layout session",
      "5-page custom website",
      "Content prompts and light copy guidance",
      "Basic SEO setup (titles, descriptions, keywords)",
      "Contact form, social and analytics integration",
      "Training video and 7 days of support",
    ],
    cta: "Build my Foundation",
  },
  {
    name: "The Landmark",
    tagline:
      "A complete, immersive website designed with depth and storytelling for established brands.",
    price: "Squarespace/Shopify $7,500",
    priceNote: "WordPress from $8,500",
    includes: [
      "1:1 site strategy session",
      "8-page custom website",
      "Advanced integrations (booking, e-commerce, memberships)",
      "Copy direction and content support",
      "SEO and AI search foundations, plus Google integrations",
      "Launch prep, training and 3 weeks of support",
    ],
    cta: "Build my Landmark",
  },
];

export const EXTRAS = [
  {
    name: "The Brand Mark",
    price: "$2,000",
    blurb:
      "Visual identity, elevated. Direction and moodboard, colour and font system, a new or refined logo, brand guidelines and a print-ready business card.",
    cta: "Let's talk brand",
  },
  {
    name: "MISO VIP Day",
    price: "$1,100",
    blurb:
      "A focused design sprint. Eight dedicated hours for updates, refinements, a homepage refresh or small builds, plus 7 days of email support.",
    cta: "Book my VIP Day",
  },
  {
    name: "Google Ads",
    price: "Setup $1,500 | $250/month",
    blurb:
      "Get found by people already searching. Strategy, keyword research, up to 3 ad groups, ad copy, conversion tracking and monthly optimisation.",
    cta: "Get found on Google",
  },
  {
    name: "WordPress Care Plan",
    price: "$250/month",
    blurb:
      "Core, plugin and theme updates, security scans, uptime monitoring and a monthly report. No lock-in contracts. Light edits from $150.",
    cta: "Let's talk WordPress",
  },
];

export const ADDONS: { group: string; items: { name: string; price: string; blurb: string }[] }[] = [
  {
    group: "Story and words",
    items: [
      { name: "SEO Copywriting", price: "From $275/page", blurb: "Clear, on-brand words that connect and get found." },
      { name: "Voice and Tone Guide", price: "$400", blurb: "Your brand's language, distilled into one reference page." },
    ],
  },
  {
    group: "Visibility and performance",
    items: [
      { name: "SEO Essentials", price: "From $400", blurb: "Titles, descriptions and alt text so your site can be found." },
      { name: "Google Analytics Setup", price: "$450", blurb: "Track who is visiting and how they engage." },
    ],
  },
  {
    group: "Commerce and integration",
    items: [
      { name: "Online Store Setup and SEO Basics", price: "From $950", blurb: "A styled, search-ready shop (up to 10 products)." },
      { name: "Shop Starter Bundle", price: "$1,400", blurb: "Store setup, email opt-in and abandoned cart workflow (save $200)." },
      { name: "Booking Calendar Integration", price: "$650", blurb: "Scheduling directly through your site." },
      { name: "Email Opt-In Setup and Design", price: "$325", blurb: "Branded sign-up forms to grow your list." },
      { name: "Abandoned Cart Workflow", price: "From $400", blurb: "An automated sequence to recover lost sales." },
    ],
  },
  {
    group: "Design and styling",
    items: [
      { name: "Template Styling", price: "From $650", blurb: "Turn a template into something truly yours." },
      { name: "Mini Brand Board", price: "$350", blurb: "Palette and typography guide in PDF or Canva." },
      { name: "Business Card or Print Design", price: "$300", blurb: "Minimal, refined collateral to extend your brand." },
    ],
  },
];

export type Testimonial = { quote: string; name: string; role: string; project: string };

export const TESTIMONIALS: Testimonial[] = [
  {
    project: "DPI in Schools - SEO on-page optimisation",
    quote:
      "Since Hayley implemented search engine optimisation tools on our website, we have had a 57% increase in new visitors to our site and a 109% increase in overall sessions. To say I am thrilled with the results is an understatement! Hayley was a joy to work with, she knew what we needed and completed the work quickly.",
    name: "Michelle Fifield",
    role: "Department of Primary Industries in Schools Program, NSW",
  },
  {
    project: "The Peisley St Gallery - Shopify website",
    quote:
      "Hayley brought a new, fresh perspective to our vision and created the perfect site for us. The best result - increased SALES! That and the most wonderful feedback from customers - it looks great and it's easy to navigate.",
    name: "Leiarna Dunworth",
    role: "Director, The Peisley St Gallery. Orange, NSW",
  },
  {
    project: "Central West Mums - WordPress refresh and maintenance",
    quote:
      "Hayley is a guru of e-commerce and warrior who finds solutions to the problems that I don't like! I am so fortunate to have connected with Hayley and love that she is working on our Central West Mums platform, so rest assured it flows smoothly.",
    name: "Ami Zielinski",
    role: "Director, Central West Mums. Orange, NSW",
  },
  {
    project: "The Avid Gardener - website refresh, Meta shop and EDMs",
    quote:
      "Hayley is absolutely wonderful! She has been instrumental in setting up our online presence making everything easy and seamless and significantly increasing our exposure. I couldn't recommend her more highly. She is an investment in your business.",
    name: "Henrietta Hood",
    role: "Co-founder, The Avid Gardener. Orange, NSW",
  },
  {
    project: "Turkish Bath & Home - brand and custom Shopify website",
    quote:
      "Hayley's knowledge and attention to detail has been exceptional, and creating a website from scratch with a new business is not easy. What is really a complicated business structure, Hayley has managed to simplify within the website and provide all the support with promotional material.",
    name: "Pip Orr",
    role: "Managing Director, Turkish Bath & Home",
  },
  {
    project: "Complete Reo - rebrand, custom Shopify and WordPress websites",
    quote:
      "From the start, she was a fantastic communicator, asking all the right questions to truly understand our needs. Her attention to detail and thoughtful approach ensured that the final result was exactly what we were looking for - an incredible improvement over our previous site.",
    name: "Belinda Newham",
    role: "General Manager, Complete Reo",
  },
  {
    project: "Blayney Shire Council - editorial and itinerary",
    quote:
      "The Millthorpe Village editorial and itinerary was crafted with the perfect tone and language to engage and inspire the audience. The campaign has helped Millthorpe achieve Bronze Award status in the NSW Top Tourism Awards Tiny Town category.",
    name: "Megan Rodd",
    role: "Manager Tourism & Communications, Blayney Shire Council",
  },
  {
    project: "Hamlet & Fields - brand refresh",
    quote:
      "Working with Hayley has been an absolute game-changer for my business. She supported me through a full re-brand and made the process feel seamless. The result was a brand identity that finally feels like me.",
    name: "Fee May",
    role: "Hamlet & Fields. Bathurst, NSW",
  },
  {
    project: "Hamlet & Fields - WordPress refresh",
    quote:
      "Hayley completely elevated the aesthetics of my website. She knew exactly how to balance style with functionality so the site not only looks beautiful but also flows effortlessly for my clients.",
    name: "Fee May",
    role: "Hamlet & Fields. Bathurst, NSW",
  },
  {
    project: "Capell Road Art - custom Shopify website",
    quote:
      "Hayley is knowledgeable, organised, efficient, great with suggestions, and just very accessible and patient! I can't recommend Hayley and her skills highly enough. I'm extremely happy with what she has designed and developed for me.",
    name: "Helen Gray",
    role: "Director, Capell Road Art",
  },
  {
    project: "Ashburton Lavender Farm - WordPress refresh",
    quote:
      "Hayley delivered an exceptional website makeover resulting in a far more presentable and user friendly home for our brand online. She captured our vision in the final design, exceeding our expectations.",
    name: "Phe & Ken",
    role: "Directors, Ashburton Lavender Farm. Millthorpe, NSW",
  },
  {
    project: "Merrell Skyrunner World Series - WordPress refresh",
    quote:
      "Hayley redesigned a fairly complex integration resulting in better functionality and appearance. She was very responsive, flexible in scope, and provided us with exactly the redesign we wanted.",
    name: "Etienne",
    role: "COO, Merrell Skyrunner World Series",
  },
  {
    project: "French Soda - Shopify refresh",
    quote:
      "I'm pleased I contacted Hayley for our Shopify update. Her service was incredibly helpful, and the turnaround time was fast. Hayley's attention to detail ensured a cohesive product.",
    name: "Ashlee",
    role: "Director, French Soda, NSW",
  },
  {
    project: "Malco Built - capability statement",
    quote:
      "Hayley understood our brief perfectly and turned it into something that presented very professionally with great themed graphics throughout. Very impressed and would recommend Hayley to anyone looking to improve their professional appearance in any market.",
    name: "Borek Thorovsky",
    role: "Director, Malco Built, Double Bay, NSW",
  },
  {
    project: "Regroup One - website refresh",
    quote:
      "Hayley was efficient, knowledgeable and intuitively understood our vision and brought it to life. She was able to enhance our branding whilst maintaining the original threads. Could not be more impressed with quick turnaround and increased engagement with our business.",
    name: "Clare Groves",
    role: "Managing Director, Regroup One. Melbourne, VIC",
  },
];

export const HOME_FAQS = [
  {
    q: "What does MISO Studio do?",
    a: "MISO Studio is a creative and digital studio supporting businesses with websites, SEO, AI search, digital strategy and marketing. From website design and development through to Google Ads, email marketing and content, I bring the parts of your marketing together.",
  },
  {
    q: "Do you design and build custom websites?",
    a: "Yes. MISO designs and develops websites tailored to your business, audience and goals, on Squarespace, Shopify, WordPress or a fully custom build.",
  },
  {
    q: "Can you help if I already have a website?",
    a: "Absolutely. You don't always need to start again. I can audit, refresh or improve an existing site - design, copy, SEO, mobile performance and search visibility.",
  },
  {
    q: "Do your websites include SEO?",
    a: "Yes. SEO is built into every MISO website from the start: site structure, page titles, headings, metadata, copy, mobile usability and technical foundations. Ongoing SEO support can be added.",
  },
  {
    q: "What is AI search readiness?",
    a: "It is about making your website easier for tools like ChatGPT, Google AI Overviews and Perplexity to understand, trust and reference. MISO offers a free AI and SEO check and a detailed paid AI Readiness Audit.",
  },
  {
    q: "Can you help with marketing beyond my website?",
    a: "Yes. Google Ads, social media, email marketing, content and campaigns, so your website and marketing work together instead of sitting in separate silos.",
  },
  {
    q: "Do you offer photography and content creation?",
    a: "Yes. For brand and campaign photography I collaborate with Hamlet & Fields, so website, marketing and visuals come together under one coordinated approach.",
  },
  {
    q: "Can you write the website copy too?",
    a: "Yes. Copywriting can be part of your project. I shape the messaging, page structure and calls to action so your site sounds like you and is clear for customers and search engines.",
  },
  {
    q: "Do you only work with businesses in Orange and the Central West?",
    a: "No. MISO is based in Millthorpe and works closely with businesses in Orange, Bathurst and the wider Central West, but I also work remotely with businesses across Australia, including Sydney and Melbourne. Calls, reviews and handovers all happen online, and I'm happy to meet in person if you're nearby.",
  },
  {
    q: "How long does a new website take?",
    a: "Once I have your content and assets, I'll build your homepage for a first review within 3 days. Most websites are ready for final review in 7-14 days, depending on the size of the project.",
  },
  {
    q: "How much does a new website cost?",
    a: "It depends on the size of the project. A website refresh starts from $1,100 with a MISO VIP Day: eight dedicated hours to update, refine or rebuild your homepage or add small pages, plus 7 days of email support. Focused Custom Websites start from $1,500 + GST, and full 8-page Landmark sites start from $7,500. See the Studio Services page for every package, or book a call and I'll recommend the right fit.",
  },
];

export type LocationPageData = {
  slug: string;
  town: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  localHeading: string;
  localBody: string[];
  workHeading: string;
  work: { name: string; detail: string }[];
  quote: { text: string; by: string };
  midHeading: string;
  midBody?: string;
  midList?: string[];
  faqs: { q: string; a: string }[];
  alsoWorking: string;
  areaServed: string[];
};

export const LOCATIONS: Record<string, LocationPageData> = {
  orange: {
    slug: "web-design-orange",
    town: "Orange",
    title: "Web Design Orange NSW | Squarespace, Shopify & WordPress | MISO Studio",
    description:
      "Strategy-led website design for Orange businesses, from a local studio in Millthorpe. Squarespace, Shopify and WordPress sites with SEO and AI search built in. From $1,500.",
    h1: "Website design for Orange businesses",
    intro:
      "Local, strategy-led websites for Orange and the surrounding district - designed to be found on Google and AI search, and built to bring in enquiries.",
    localHeading: "A local studio, 20 minutes down the road",
    localBody: [
      "MISO Studio is based in Millthorpe, just outside Orange. I'm Hayley, and I've spent over 10 years designing and building websites for regional businesses - wineries, retailers, health practices, trades, tourism, agriculture and local organisations.",
      "Being local matters. I know the Orange market, the seasons that drive your trade and the way people here actually search. And when you want to sit down and talk it through, we can meet in person.",
    ],
    workHeading: "Orange businesses I've worked with",
    work: [
      { name: "Complete Reo", detail: "rebrand, plus custom Shopify and WordPress websites" },
      { name: "The Peisley St Gallery", detail: "Shopify website that lifted online sales" },
      { name: "The Avid Gardener", detail: "website refresh, Meta shop and email marketing" },
      { name: "Central West Mums", detail: "WordPress refresh and ongoing maintenance" },
      { name: "Orange 360", detail: "Google Ads and Meta advertising for regional tourism" },
      { name: "Macquariedale Wines, Total Health Orange, Studio Seed and Larissa Blake", detail: "websites and brand work" },
    ],
    quote: {
      text: "The best result - increased SALES! That and the most wonderful feedback from customers.",
      by: "Leiarna Dunworth, The Peisley St Gallery, Orange",
    },
    midHeading: "Already have a website?",
    midBody:
      "You don't always need to start again. I can refresh what you have, fix your SEO, or run an AI Readiness Audit to show exactly what is holding it back. One of my SEO clients saw a 57% jump in new visitors after on-page work.",
    faqs: [
      {
        q: "Do you meet clients in person?",
        a: "Yes. I'm based in Millthorpe and happy to meet in Orange for your strategy session. Everything else can happen by phone, email or video, whatever suits you.",
      },
      {
        q: "Which platform should I use?",
        a: "Squarespace suits most service businesses that want to make their own updates. Shopify is best for online shops. WordPress suits bigger or more complex sites. I'll recommend one on our first call.",
      },
      {
        q: "How long does a website take?",
        a: "A Focused site or Footprint can be live in a week or two. Larger builds usually take 4 to 8 weeks, depending on content.",
      },
      {
        q: "Will my site show up on Google?",
        a: "Every MISO site is built with SEO foundations - page titles, descriptions, headings, local keywords and Google integrations. For ongoing visibility, I also manage Google Ads for Orange businesses.",
      },
    ],
    alsoWorking:
      "Also working with businesses in Bathurst, Millthorpe, Blayney, Parkes and across the Central West.",
    areaServed: ["Orange", "Millthorpe", "Blayney", "Bathurst", "Central West NSW"],
  },
  bathurst: {
    slug: "web-design-bathurst",
    town: "Bathurst",
    title: "Web Design Bathurst NSW | Websites for Local & Rural Business | MISO Studio",
    description:
      "Website design for Bathurst businesses, agriculture and trades. Custom Squarespace, Shopify and WordPress sites with SEO and AI search built in, from a Central West studio.",
    h1: "Website design for Bathurst businesses",
    intro:
      "Clear, considered websites for Bathurst trades, agriculture, makers and service businesses - built to be found locally and to turn visitors into enquiries.",
    localHeading: "Central West based, Bathurst focused",
    localBody: [
      "MISO Studio is based in Millthorpe, between Orange and Bathurst. I work with Bathurst businesses on everything from a first website to a full rebuild, with the local SEO and AI search groundwork that helps people find you when they search.",
      "A lot of my Bathurst work is with builders, producers and rural businesses - people who are great at what they do but don't have time to fight with a website. My job is to make it simple, look right, and actually bring in work.",
    ],
    workHeading: "Bathurst work",
    work: [
      { name: "Tablelands Builders", detail: "website refresh to showcase projects and bring in quotes" },
      { name: "Margra Lamb", detail: "website for a premium lamb producer" },
      { name: "Calabash Waters", detail: "website design" },
      { name: "Hamlet & Fields", detail: "full rebrand and WordPress website refresh for Fee May's photography and content studio" },
      { name: "Karoo Angus, Meadow Flat", detail: "WordPress website rebuild for a stud cattle operation" },
    ],
    quote: {
      text: "Working with Hayley has been an absolute game-changer for my business.",
      by: "Fee May, Hamlet & Fields, Bathurst",
    },
    midHeading: "Websites for trades, agriculture and producers",
    midBody:
      "If you're a builder, grower, producer or rural business, your website has a few jobs: show your work, build trust fast, and make it easy to call or enquire. I design around that:",
    midList: [
      "Project galleries and case studies that show what you've built or grown",
      "Clear service pages so Google knows exactly what you do and where",
      "Quote and enquiry forms that come straight to your inbox",
      "Online shops for producers selling direct",
      "Brand photography through my creative partner Hamlet & Fields, based in Bathurst",
    ],
    faqs: [
      {
        q: "Do you come to Bathurst?",
        a: "Yes. I'm in Millthorpe, so Bathurst is an easy trip for a strategy session or photo day. The rest can happen by phone, email or video.",
      },
      {
        q: "I'm flat out - how much do I need to do?",
        a: "Less than you think. I'll guide you with content prompts, and can write the copy for you. You review, I build.",
      },
      {
        q: "Can you fix my existing site instead?",
        a: "Often, yes. A MISO VIP Day ($1,100) covers a full day of updates, or an AI Readiness Audit ($350) shows exactly what to fix first.",
      },
      {
        q: "Can you help with Google Ads too?",
        a: "Yes. I set up and manage Google Ads so you show up when Bathurst locals search for what you do.",
      },
    ],
    alsoWorking:
      "Also working with businesses in Orange, Millthorpe, Blayney, Oberon, Lithgow and across the Central West.",
    areaServed: ["Bathurst", "Orange", "Millthorpe", "Blayney", "Oberon", "Lithgow", "Central West NSW"],
  },
};

export const PORTFOLIO: { name: string; place: string; kind: string; pos?: string; img?: string; fit?: "contain" }[] = [
  { name: "Karoo Angus", place: "Meadow Flat, NSW", kind: "WordPress website rebuild" },
  { name: "Tablelands Builders", place: "Bathurst, NSW", kind: "Wix website refresh", img: "tablelands-builders-heritage-aerial"  },
  { name: "Margra Lamb", place: "Bathurst, NSW", kind: "WordPress website design"  },
  { name: "Calabash Waters", place: "Bathurst, NSW", kind: "Squarespace website design"  },
  { name: "Orange 360", place: "Orange, NSW", kind: "Google Ads and Meta Ads" , pos: "left" },
  { name: "Studio Seed", place: "Orange, NSW", kind: "Squarespace website refresh", pos: "bottom" },
  { name: "The White Place", place: "Orange and Millthorpe, NSW", kind: "Website and brand" , fit: "contain" },
  { name: "Macquariedale Wines", place: "Orange, NSW", kind: "Website" , fit: "contain" },
  { name: "Total Health Orange", place: "Orange, NSW", kind: "Squarespace website" , fit: "contain" },
  { name: "Larissa Blake", place: "Orange, NSW", kind: "E-commerce website"  },
  { name: "Complete Reo", place: "Orange, NSW", kind: "Rebrand, Shopify and WordPress" , fit: "contain" },
  { name: "Westonfence", place: "Parkes, NSW", kind: "WordPress and WooCommerce", pos: "bottom" },
  { name: "Millthorpe Village", place: "Millthorpe, NSW", kind: "Squarespace website" , fit: "contain" },
  { name: "The Silo", place: "NSW", kind: "Squarespace website" , fit: "contain" },
  { name: "KdV Aged Care Support", place: "NSW", kind: "Brand identity" },
  { name: "Smart Guide", place: "Melbourne, VIC", kind: "Figma design for an in-house website", pos: "top"  },
  { name: "Capelin Law", place: "NSW", kind: "WordPress refresh" },
  { name: "Hamlet & Fields", place: "Bathurst, NSW", kind: "WordPress refresh and SEO" },
  { name: "Ashburton Lavender Farm", place: "Millthorpe, NSW", kind: "WordPress refresh and SEO" },
  { name: "Rustic Range Retreat", place: "Bathurst, NSW", kind: "Brand, Squarespace and booking", img: "rustic-range-retreat-cattle" },
  { name: "Central West Mums", place: "Orange, NSW", kind: "WordPress design and management", img: "central-west-mums-play" },
  { name: "Peisley Street Gallery", place: "Orange, NSW", kind: "Shopify e-commerce website" },
  { name: "The Management Agency", place: "Surry Hills, NSW", kind: "WordPress refresh and SEO", img: "the-management-agency-living" },
  { name: "Single Source Solutions", place: "Perth, WA", kind: "Squarespace website" },
  { name: "Greater Water", place: "Millthorpe, NSW", kind: "Custom-built website" },
  { name: "Beyond the Gate", place: "Central West, NSW", kind: "Custom-built website" },
  { name: "Skin 8", place: "Woollahra, NSW", kind: "Shopify e-commerce and booking" },
  { name: "MISO Studio", place: "Millthorpe, NSW", kind: "Own brand and custom-built website" },
];

export const STUDIO_FAQS = [
  {
    q: "What's the difference between Squarespace, Shopify and WordPress pricing?",
    a: "Squarespace and Shopify builds are priced lower because the platform handles hosting, security and updates for you. WordPress gives you the most flexibility, so WordPress packages cost a little more (for example The Footprint is $3,600 compared with $3,000, and The Landmark starts from $8,500). I'll recommend the right platform for your business on a call.",
  },
  {
    q: "Do your prices include GST?",
    a: "Prices exclude GST unless stated. Additional pages are from $650 each.",
  },
  {
    q: "What's included in The Brand Mark?",
    a: "A direction and moodboard, a colour and font system, a new or refined logo, brand guidelines and a print-ready business card. It pairs well with a website build, so we can plan both together.",
  },
  {
    q: "What is a MISO VIP Day?",
    a: "Eight dedicated hours of design and build time for updates, refinements, a homepage refresh or small builds, plus 7 days of email support. It's a great fit if you have a site that just needs a lift.",
  },
  {
    q: "How long does a website take?",
    a: "Once I have your content and assets, I'll build your homepage for a first review within 3 days. Most websites are ready for final review in 7-14 days, depending on the size of the project. The Footprint is the quickest, with a 5-day turnaround. I'll give you a clear timeline on your discovery call.",
  },
  {
    q: "Do you offer brand photography?",
    a: "Yes, through my collaborator Fee May of Hamlet & Fields. Photography and social content packages are booked separately with Fee, and they pair beautifully with a new website.",
  },
  {
    q: "Can I add services later?",
    a: "Yes. The Studio Menu is there so you can add copywriting, SEO, Google Ads or a Care Plan when you're ready. I'll suggest the right ones on your discovery call.",
  },
  {
    q: "Not sure what you need?",
    a: "Book a free 30-minute call. I'll ask a few questions about your business and budget and recommend the right package - no pressure.",
  },
];
