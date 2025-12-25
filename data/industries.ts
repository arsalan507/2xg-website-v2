export interface IndustryData {
  slug: string;
  name: string;
  hero: {
    headline: string;
    subheadline: string;
    accentColor: string;
    bgGradient: string;
    bgImage?: string;
  };
  insights: {
    title: string;
    items: string[];
    sideImage?: string;
  };
  framework: {
    title: string;
    steps: {
      name: string;
      whatMostDo: string;
      what2XGDoes: string;
    }[];
  };
  metrics: {
    title: string;
    kpis: {
      label: string;
      description: string;
    }[];
  };
  services: {
    title: string;
    mappedServices: {
      service: string;
      industrySpecific: string;
    }[];
  };
}

export const industriesData: Record<string, IndustryData> = {
  restaurant: {
    slug: 'restaurant',
    name: 'Restaurants 🍽️',
    hero: {
      headline: 'From Empty Tables to Weekend Waitlists 🔥',
      subheadline: 'We help restaurants turn Instagram attention into repeat customers and predictable footfall 📍',
      accentColor: '#FF6B35',
      bgGradient: 'linear-gradient(135deg, #1F1F1F 0%, #2D1810 100%)',
      bgImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=90',
    },
    insights: {
      title: 'We Understand This Business',
      items: [
        'Peak sales depend on repeat visibility, not discounts',
        'Reels outperform static food photos by 3–4x',
        'Local discovery beats national reach every time',
        'Google + Instagram is the real funnel',
        'UGC from happy diners converts better than professional shoots',
        'Menu visibility drives walk-ins, not just aesthetic posts',
      ],
    },
    framework: {
      title: 'The 2X Growth Framework for Restaurants',
      steps: [
        {
          name: 'Attention Engine',
          whatMostDo: 'Post pretty food photos occasionally with no strategy or consistency',
          what2XGDoes: 'Create high-frequency Reels showing sizzle moments, chef stories, and customer reactions that trigger cravings and trust',
        },
        {
          name: 'Demand Capture',
          whatMostDo: 'Hope people call after seeing posts, with no clear next step',
          what2XGDoes: 'Embed reservation links, WhatsApp CTAs, and Google Maps directions in every piece of content with urgency triggers',
        },
        {
          name: 'Trust Proof',
          whatMostDo: 'Rely on word-of-mouth and random customer tags',
          what2XGDoes: 'Systematically collect and amplify customer testimonials, Google reviews, and UGC that showcases the full dining experience',
        },
        {
          name: 'Conversion Layer',
          whatMostDo: 'Run discount promotions that erode margins and attract one-time deal hunters',
          what2XGDoes: 'Deploy retargeting campaigns with table-booking incentives, limited-time specials, and loyalty programs that drive repeat visits',
        },
      ],
    },
    metrics: {
      title: 'Metrics That Matter for Restaurants',
      kpis: [
        {
          label: 'Repeat Visits per Month',
          description: 'How many customers return within 30 days',
        },
        {
          label: 'Google Search Volume',
          description: 'Monthly brand searches in your locality',
        },
        {
          label: 'Weekend Footfall',
          description: 'Table bookings during peak hours',
        },
        {
          label: 'Enquiry Quality',
          description: 'Percentage of qualified reservation requests',
        },
        {
          label: 'Cost Per Booking',
          description: 'Ad spend divided by confirmed reservations',
        },
        {
          label: 'Social Engagement Rate',
          description: 'Comments, saves, and shares per post',
        },
      ],
    },
    services: {
      title: 'What We Actually Do For You',
      mappedServices: [
        {
          service: 'Content Marketing',
          industrySpecific: 'High-frequency Reels designed to trigger cravings and drive table bookings',
        },
        {
          service: 'Performance Marketing',
          industrySpecific: 'Hyper-local campaigns targeting food lovers within 5km of your location',
        },
        {
          service: 'Influencer Marketing',
          industrySpecific: 'Strategic partnerships with food bloggers who bring real footfall, not just vanity metrics',
        },
        {
          service: 'Review Management',
          industrySpecific: 'Systematic Google and Zomato review collection and response strategy',
        },
        {
          service: 'Loyalty Systems',
          industrySpecific: 'WhatsApp-based programs that turn first-timers into regulars',
        },
      ],
    },
  },

  'bridal-wear': {
    slug: 'bridal-wear',
    name: 'Bridal Wear 👰',
    hero: {
      headline: 'From Walk-Ins to Wedding Bookings on Autopilot 💍',
      subheadline: 'We help bridal brands turn Instagram attention into showroom footfall and confirmed bookings ✨',
      accentColor: '#D4A574',
      bgGradient: 'linear-gradient(135deg, #1F1F1F 0%, #2A1F1F 100%)',
      bgImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=90',
    },
    insights: {
      title: 'We Understand This Business',
      items: [
        'Bridal purchases are family decisions, not individual choices',
        'Trust and aspiration matter more than price in this category',
        'One viral Reel can book your next 3 months',
        'Brides research for 6+ months before visiting a single showroom',
        'Real wedding content converts 5x better than studio shoots',
        'Instagram is where the journey starts, showroom is where it ends',
      ],
    },
    framework: {
      title: 'The 2X Growth Framework for Bridal Wear',
      steps: [
        {
          name: 'Attention Engine',
          whatMostDo: 'Post catalog images with generic captions hoping someone notices',
          what2XGDoes: 'Create aspirational real-wedding content, behind-the-scenes fittings, and transformation stories that build emotional connection',
        },
        {
          name: 'Demand Capture',
          whatMostDo: 'Wait for walk-ins with no appointment system or follow-up',
          what2XGDoes: 'Drive appointment bookings via DMs, WhatsApp links, and calendar integrations with personalized consultation offers',
        },
        {
          name: 'Trust Proof',
          whatMostDo: 'Show products without customer validation or social proof',
          what2XGDoes: 'Amplify customer testimonials, real bride transformations, and family approval moments that build credibility',
        },
        {
          name: 'Conversion Layer',
          whatMostDo: 'Expect brides to remember and return after initial interest fades',
          what2XGDoes: 'Implement nurture sequences via WhatsApp, retargeting ads with new collections, and exclusive preview events for warm leads',
        },
      ],
    },
    metrics: {
      title: 'Metrics That Matter for Bridal Wear',
      kpis: [
        {
          label: 'Appointment Bookings',
          description: 'Scheduled showroom visits per month',
        },
        {
          label: 'Enquiry Quality',
          description: 'Percentage of leads with confirmed wedding dates',
        },
        {
          label: 'Conversion to Sale',
          description: 'Showroom visits that result in orders',
        },
        {
          label: 'Average Order Value',
          description: 'Revenue per bridal booking',
        },
        {
          label: 'Content Reach',
          description: 'Monthly impressions on bridal content',
        },
        {
          label: 'Customer Referrals',
          description: 'New leads from existing customers',
        },
      ],
    },
    services: {
      title: 'What We Actually Do For You',
      mappedServices: [
        {
          service: 'Content Marketing',
          industrySpecific: 'Real-wedding stories and transformation content that builds aspiration and trust',
        },
        {
          service: 'Performance Marketing',
          industrySpecific: 'Targeted campaigns reaching brides 6-12 months before their wedding date',
        },
        {
          service: 'Influencer Marketing',
          industrySpecific: 'Collaborations with wedding influencers and real brides who share authentic experiences',
        },
        {
          service: 'Showroom Marketing',
          industrySpecific: 'Appointment-booking funnels and exclusive preview event campaigns',
        },
        {
          service: 'WhatsApp Nurture',
          industrySpecific: 'Personalized follow-ups with new collections and styling suggestions',
        },
      ],
    },
  },

  'real-estate': {
    slug: 'real-estate',
    name: 'Real Estate',
    hero: {
      headline: 'From Brochures to Booked Site Visits',
      subheadline: 'We help real estate brands generate qualified leads and turn interest into site visits.',
      accentColor: '#0052FF',
      bgGradient: 'linear-gradient(135deg, #1F1F1F 0%, #1A2332 100%)',
    },
    insights: {
      title: 'We Understand This Business',
      items: [
        'Real estate decisions take months, not days',
        'Buyers need to see location, amenities, and lifestyle — not just floor plans',
        'Trust is built through transparency and consistent visibility',
        'One qualified lead is worth 100 random enquiries',
        'Video walkthroughs convert 4x better than static images',
        'Local SEO and Google My Business drive 60% of enquiries',
      ],
    },
    framework: {
      title: 'The 2X Growth Framework for Real Estate',
      steps: [
        {
          name: 'Attention Engine',
          whatMostDo: 'Post property images with generic descriptions and wait',
          what2XGDoes: 'Create immersive video walkthroughs, neighborhood highlights, and customer testimonials that showcase the lifestyle, not just the property',
        },
        {
          name: 'Demand Capture',
          whatMostDo: 'Collect random phone numbers with no qualification or follow-up process',
          what2XGDoes: 'Build multi-step lead forms that filter for budget, timeline, and intent, then route to sales via CRM integration',
        },
        {
          name: 'Trust Proof',
          whatMostDo: 'Rely on builder brand name without customer validation',
          what2XGDoes: 'Showcase buyer testimonials, construction updates, possession stories, and verified ratings that build credibility',
        },
        {
          name: 'Conversion Layer',
          whatMostDo: 'Hope leads remember after initial interest fades away',
          what2XGDoes: 'Deploy nurture campaigns with property updates, virtual site visits, and limited-time incentives to accelerate decision-making',
        },
      ],
    },
    metrics: {
      title: 'Metrics That Matter for Real Estate',
      kpis: [
        {
          label: 'Site Visits Scheduled',
          description: 'Number of confirmed appointments per month',
        },
        {
          label: 'Qualified Leads',
          description: 'Prospects with verified budget and timeline',
        },
        {
          label: 'Cost Per Lead',
          description: 'Marketing spend per qualified enquiry',
        },
        {
          label: 'Lead-to-Visit Ratio',
          description: 'Percentage of leads that attend site visits',
        },
        {
          label: 'Visit-to-Booking Ratio',
          description: 'Site visits that result in token bookings',
        },
        {
          label: 'Content Engagement',
          description: 'Video views and brochure downloads',
        },
      ],
    },
    services: {
      title: 'What We Actually Do For You',
      mappedServices: [
        {
          service: 'Content Marketing',
          industrySpecific: 'Video walkthroughs, drone footage, and lifestyle content that showcases the complete living experience',
        },
        {
          service: 'Performance Marketing',
          industrySpecific: 'Lead generation campaigns with advanced targeting by income, location, and intent signals',
        },
        {
          service: 'SEO & Local Search',
          industrySpecific: 'Dominate Google searches for "[location] properties" and "[project name] reviews"',
        },
        {
          service: 'CRM Integration',
          industrySpecific: 'Automated lead routing, follow-up sequences, and sales team coordination',
        },
        {
          service: 'Virtual Site Visits',
          industrySpecific: '360° tours and live video walkthroughs for remote buyers',
        },
      ],
    },
  },

  furniture: {
    slug: 'furniture',
    name: 'Furniture 🛋️',
    hero: {
      headline: 'From Showroom Visits to Confirmed Orders 🏡',
      subheadline: 'We help furniture brands turn online interest into in-home visualization and purchase decisions ✨',
      accentColor: '#8B4513',
      bgGradient: 'linear-gradient(135deg, #1F1F1F 0%, #2A1F1A 100%)',
      bgImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&q=90',
    },
    insights: {
      title: 'We Understand This Business',
      items: [
        'Furniture sales happen when buyers can visualize the product in their home — not just see it',
        'High-value purchases require trust, reassurance, and multiple touchpoints',
        'AR visualization increases conversion by 40%+',
        'Delivery, assembly, and after-sales service are part of the purchase decision',
        'Style matching and space planning content drives qualified enquiries',
        'Instagram + Pinterest dominate furniture discovery',
      ],
    },
    framework: {
      title: 'The 2X Growth Framework for Furniture',
      steps: [
        {
          name: 'Attention Engine',
          whatMostDo: 'Post product catalog images with basic descriptions and pricing',
          what2XGDoes: 'Create immersive room setups, styling guides, and AR-enabled content that helps customers visualize products in their space',
        },
        {
          name: 'Demand Capture',
          whatMostDo: 'List phone numbers and hope customers call with measurements',
          what2XGDoes: 'Deploy virtual consultation booking, AR try-before-you-buy tools, and space planning assistance with clear CTAs',
        },
        {
          name: 'Trust Proof',
          whatMostDo: 'Show finished products without context or customer validation',
          what2XGDoes: 'Showcase real homes, customer testimonials, delivery videos, and quality craftsmanship content that builds confidence',
        },
        {
          name: 'Conversion Layer',
          whatMostDo: 'Wait for walk-ins with no digital nurture or retargeting',
          what2XGDoes: 'Implement WhatsApp consultations, retargeting with room-specific products, and limited-time design packages',
        },
      ],
    },
    metrics: {
      title: 'Metrics That Matter for Furniture',
      kpis: [
        {
          label: 'Showroom Visits',
          description: 'Scheduled appointments from online leads',
        },
        {
          label: 'AR Tool Engagement',
          description: 'Users who try virtual placement',
        },
        {
          label: 'Consultation Bookings',
          description: 'Free design consultation requests',
        },
        {
          label: 'Average Order Value',
          description: 'Revenue per completed sale',
        },
        {
          label: 'Lead Quality Score',
          description: 'Percentage with confirmed budget and timeline',
        },
        {
          label: 'Post-Purchase Referrals',
          description: 'New customers from existing customers',
        },
      ],
    },
    services: {
      title: 'What We Actually Do For You',
      mappedServices: [
        {
          service: 'Content Marketing',
          industrySpecific: 'Room inspiration content, styling guides, and AR-enabled product showcases',
        },
        {
          service: 'Performance Marketing',
          industrySpecific: 'Targeted campaigns reaching homeowners actively furnishing or renovating',
        },
        {
          service: 'AR/VR Solutions',
          industrySpecific: 'Virtual room planning and product visualization tools',
        },
        {
          service: 'Consultation Funnel',
          industrySpecific: 'Design consultation booking system with automated follow-up',
        },
        {
          service: 'Referral Programs',
          industrySpecific: 'Customer loyalty and referral incentive systems',
        },
      ],
    },
  },

  'pet-shop': {
    slug: 'pet-shop',
    name: 'Pet Shop 🐾',
    hero: {
      headline: 'From Pet Owners to Brand Loyalists 🐶🐱',
      subheadline: 'We help pet businesses turn emotional connections into recurring revenue and community growth 💕',
      accentColor: '#FF69B4',
      bgGradient: 'linear-gradient(135deg, #1F1F1F 0%, #2A1520 100%)',
      bgImage: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1920&q=90',
    },
    insights: {
      title: 'We Understand This Business 🎯',
      items: [
        '🐕 Pet owners buy with emotion — not logic',
        '💰 Subscriptions drive 3x more revenue than one-time sales',
        '📸 UGC beats professional shots by 5x engagement',
        '👥 Community = lifetime customers',
        '📱 Reels and TikTok own pet discovery',
      ],
      sideImage: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&q=90',
    },
    framework: {
      title: 'The 2X Growth Framework 🚀',
      steps: [
        {
          name: '🎬 Attention Engine',
          whatMostDo: 'Random cute pet photos + generic promos',
          what2XGDoes: 'Pet care education + emotional stories + community features 💕',
        },
        {
          name: '🎯 Demand Capture',
          whatMostDo: 'Hope they remember to reorder',
          what2XGDoes: 'Auto-subscriptions + WhatsApp reminders + one-click reorder 📦',
        },
        {
          name: '⭐ Trust Proof',
          whatMostDo: 'List product features',
          what2XGDoes: 'Pet transformations + vet endorsements + ingredient transparency 🏆',
        },
        {
          name: '💎 Conversion Layer',
          whatMostDo: 'Discount wars',
          what2XGDoes: 'Loyalty rewards + community perks + lifetime value focus 🎁',
        },
      ],
    },
    metrics: {
      title: 'Metrics That Matter for Pet Shops 📊',
      kpis: [
        {
          label: '📦 Subscription Sign-ups',
          description: 'Monthly recurring revenue customers',
        },
        {
          label: '💰 Customer Lifetime Value',
          description: 'Total revenue per customer over time',
        },
        {
          label: '🔄 Repeat Purchase Rate',
          description: 'Percentage of customers who buy again',
        },
        {
          label: '👥 Community Engagement',
          description: 'UGC submissions and brand mentions',
        },
        {
          label: '🛒 Average Cart Value',
          description: 'Revenue per transaction',
        },
        {
          label: '🌟 Referral Rate',
          description: 'New customers from word-of-mouth',
        },
      ],
    },
    services: {
      title: 'What We Actually Do For You 🎯',
      mappedServices: [
        {
          service: '📱 Content Marketing',
          industrySpecific: 'Pet care education, customer pet features, and emotional storytelling content',
        },
        {
          service: '👥 Community Building',
          industrySpecific: 'Pet parent communities, UGC campaigns, and engagement programs',
        },
        {
          service: '📦 Subscription Systems',
          industrySpecific: 'Auto-replenishment and loyalty program setup',
        },
        {
          service: '⭐ Influencer Marketing',
          industrySpecific: 'Pet influencer collaborations and customer advocacy programs',
        },
        {
          service: '💕 Retention Marketing',
          industrySpecific: 'WhatsApp reminders, email sequences, and lifecycle campaigns',
        },
      ],
    },
  },

  'car-wash-detailing': {
    slug: 'car-wash-detailing',
    name: 'Car Wash & Detailing',
    hero: {
      headline: 'From One-Time Washes to Monthly Memberships',
      subheadline: 'We help car care businesses turn visible transformations into recurring customers and predictable revenue.',
      accentColor: '#4169E1',
      bgGradient: 'linear-gradient(135deg, #1F1F1F 0%, #1A1F2A 100%)',
    },
    insights: {
      title: 'We Understand This Business',
      items: [
        'Car owners don\'t want a service — they want visible transformation and peace of mind',
        'Before/after content drives 10x more engagement than service descriptions',
        'Membership models create predictable revenue and customer loyalty',
        'Convenience and location trump price for premium detailing',
        'Trust in product quality and technique is critical for high-ticket services',
        'Instagram and Google My Business drive local discovery',
      ],
    },
    framework: {
      title: 'The 2X Growth Framework for Car Wash & Detailing',
      steps: [
        {
          name: 'Attention Engine',
          whatMostDo: 'Post generic service packages with pricing and wait for calls',
          what2XGDoes: 'Create addictive before/after transformations, detailing process videos, and technique breakdowns that showcase expertise',
        },
        {
          name: 'Demand Capture',
          whatMostDo: 'List phone numbers and hope customers call to book',
          what2XGDoes: 'Implement online booking systems, membership sign-ups, and WhatsApp quick-book options with instant confirmation',
        },
        {
          name: 'Trust Proof',
          whatMostDo: 'Claim "best quality" without showing the work or results',
          what2XGDoes: 'Document every transformation, showcase products used, share customer testimonials, and demonstrate professional techniques',
        },
        {
          name: 'Conversion Layer',
          whatMostDo: 'Offer discounts to attract one-time customers who never return',
          what2XGDoes: 'Build membership tiers, package deals, and loyalty rewards that maximize customer lifetime value',
        },
      ],
    },
    metrics: {
      title: 'Metrics That Matter for Car Wash & Detailing',
      kpis: [
        {
          label: 'Membership Sign-ups',
          description: 'Monthly recurring revenue customers',
        },
        {
          label: 'Booking Conversion Rate',
          description: 'Website/social visitors to bookings',
        },
        {
          label: 'Average Service Value',
          description: 'Revenue per visit or package',
        },
        {
          label: 'Customer Retention Rate',
          description: 'Percentage who return within 60 days',
        },
        {
          label: 'Online Booking %',
          description: 'Bookings made via digital channels',
        },
        {
          label: 'Google Reviews',
          description: 'Monthly new 5-star reviews',
        },
      ],
    },
    services: {
      title: 'What We Actually Do For You',
      mappedServices: [
        {
          service: 'Content Marketing',
          industrySpecific: 'Before/after transformations, detailing process content, and expertise demonstrations',
        },
        {
          service: 'Local SEO',
          industrySpecific: 'Google My Business optimization for "[city] car detailing" searches',
        },
        {
          service: 'Booking Systems',
          industrySpecific: 'Online appointment booking and membership management platforms',
        },
        {
          service: 'Performance Marketing',
          industrySpecific: 'Geo-targeted campaigns reaching car owners within service radius',
        },
        {
          service: 'Loyalty Programs',
          industrySpecific: 'Membership tier design and retention automation',
        },
      ],
    },
  },

  'electronics-store': {
    slug: 'electronics-store',
    name: 'Electronics Store',
    hero: {
      headline: 'From Window Shoppers to Confident Buyers',
      subheadline: 'We help electronics retailers turn research-heavy buyers into customers through education and trust.',
      accentColor: '#00CED1',
      bgGradient: 'linear-gradient(135deg, #1F1F1F 0%, #1A2328 100%)',
    },
    insights: {
      title: 'We Understand This Business',
      items: [
        'Electronics buyers research endlessly — trust signals and demonstrations beat price wars',
        'Spec comparison content and unboxing videos drive purchase confidence',
        'Post-purchase support and warranty messaging reduces buying anxiety',
        'Local pickup and same-day service create competitive advantage',
        'YouTube and Instagram are the primary research channels',
        'Trade-in and upgrade programs drive repeat business',
      ],
    },
    framework: {
      title: 'The 2X Growth Framework for Electronics Stores',
      steps: [
        {
          name: 'Attention Engine',
          whatMostDo: 'Post product specs with prices and hope buyers choose you over competitors',
          what2XGDoes: 'Create product comparison guides, unboxing content, feature demonstrations, and expert recommendations',
        },
        {
          name: 'Demand Capture',
          whatMostDo: 'List contact info and wait for research-paralyzed buyers to reach out',
          what2XGDoes: 'Build product quiz funnels, instant chat support, stock availability alerts, and reserve-online systems',
        },
        {
          name: 'Trust Proof',
          whatMostDo: 'Claim authorized dealer status without showing customer satisfaction',
          what2XGDoes: 'Showcase customer reviews, warranty guarantees, setup support, and real unboxing experiences',
        },
        {
          name: 'Conversion Layer',
          whatMostDo: 'Compete on price alone and watch margins disappear',
          what2XGDoes: 'Offer value bundles, extended warranties, trade-in programs, and financing that emphasize total value',
        },
      ],
    },
    metrics: {
      title: 'Metrics That Matter for Electronics Stores',
      kpis: [
        {
          label: 'Product Page Visits',
          description: 'Traffic to high-margin electronics',
        },
        {
          label: 'Comparison Tool Usage',
          description: 'Engagement with product comparison features',
        },
        {
          label: 'Chat-to-Purchase Rate',
          description: 'Sales from live chat interactions',
        },
        {
          label: 'Trade-In Conversions',
          description: 'Upgrades through trade-in programs',
        },
        {
          label: 'Warranty Attach Rate',
          description: 'Extended warranty purchases per sale',
        },
        {
          label: 'Customer Return Rate',
          description: 'Repeat purchases within 12 months',
        },
      ],
    },
    services: {
      title: 'What We Actually Do For You',
      mappedServices: [
        {
          service: 'Content Marketing',
          industrySpecific: 'Product comparisons, unboxing videos, and expert buying guides',
        },
        {
          service: 'Performance Marketing',
          industrySpecific: 'Search campaigns targeting product research queries and comparison keywords',
        },
        {
          service: 'Trust Building',
          industrySpecific: 'Review collection, warranty highlight campaigns, and support showcases',
        },
        {
          service: 'Chat & Support',
          industrySpecific: 'Real-time product consultation and technical question handling',
        },
        {
          service: 'Loyalty Programs',
          industrySpecific: 'Trade-in systems and upgrade notification campaigns',
        },
      ],
    },
  },

  'dry-fruit-shop': {
    slug: 'dry-fruit-shop',
    name: 'Dry Fruit Shop',
    hero: {
      headline: 'From Commodity Products to Premium Brand',
      subheadline: 'We help dry fruit retailers build trust in quality, freshness, and health benefits that command premium pricing.',
      accentColor: '#D2691E',
      bgGradient: 'linear-gradient(135deg, #1F1F1F 0%, #2A1F15 100%)',
    },
    insights: {
      title: 'We Understand This Business',
      items: [
        'Premium dry fruits sell on freshness, purity, and health benefits — not just pricing',
        'Gifting occasions (festivals, weddings) drive 40% of annual sales',
        'Visual content showing quality indicators builds purchase confidence',
        'Health-conscious audiences respond to nutritional education content',
        'Packaging and presentation matter as much as the product',
        'WhatsApp ordering and personal service create customer loyalty',
      ],
    },
    framework: {
      title: 'The 2X Growth Framework for Dry Fruit Shops',
      steps: [
        {
          name: 'Attention Engine',
          whatMostDo: 'Post product photos with per-kg pricing and compete on cost',
          what2XGDoes: 'Create quality comparison content, health benefit education, recipe inspiration, and gifting ideas',
        },
        {
          name: 'Demand Capture',
          whatMostDo: 'List phone numbers and hope customers visit the shop',
          what2XGDoes: 'Enable WhatsApp ordering, build gift package selectors, and create occasion-based bundles',
        },
        {
          name: 'Trust Proof',
          whatMostDo: 'Claim "best quality" without showing sourcing or freshness',
          what2XGDoes: 'Document sourcing stories, show quality checks, share customer testimonials, and highlight certifications',
        },
        {
          name: 'Conversion Layer',
          whatMostDo: 'Wait for festival seasons with no year-round nurture',
          what2XGDoes: 'Build subscription boxes, occasion reminders, loyalty programs, and corporate gifting partnerships',
        },
      ],
    },
    metrics: {
      title: 'Metrics That Matter for Dry Fruit Shops',
      kpis: [
        {
          label: 'Average Order Value',
          description: 'Revenue per purchase transaction',
        },
        {
          label: 'Gift Package Sales',
          description: 'Premium bundle purchases',
        },
        {
          label: 'WhatsApp Order Volume',
          description: 'Orders via direct messaging',
        },
        {
          label: 'Repeat Customer Rate',
          description: 'Customers who purchase multiple times',
        },
        {
          label: 'Festival Season Revenue',
          description: 'Sales during peak gifting periods',
        },
        {
          label: 'Subscription Customers',
          description: 'Monthly auto-delivery sign-ups',
        },
      ],
    },
    services: {
      title: 'What We Actually Do For You',
      mappedServices: [
        {
          service: 'Content Marketing',
          industrySpecific: 'Quality education, health benefits, recipe content, and gifting inspiration',
        },
        {
          service: 'WhatsApp Commerce',
          industrySpecific: 'Catalog setup, order management, and customer service automation',
        },
        {
          service: 'Seasonal Campaigns',
          industrySpecific: 'Festival-timed promotions and corporate gifting outreach',
        },
        {
          service: 'Packaging Design',
          industrySpecific: 'Premium gift packaging and brand identity',
        },
        {
          service: 'Subscription Systems',
          industrySpecific: 'Monthly health boxes and auto-replenishment programs',
        },
      ],
    },
  },

  pharmacy: {
    slug: 'pharmacy',
    name: 'Pharmacy',
    hero: {
      headline: 'From Search Results to Trusted Healthcare Partner',
      subheadline: 'We help pharmacies dominate local search and build lasting relationships with patients.',
      accentColor: '#228B22',
      bgGradient: 'linear-gradient(135deg, #1F1F1F 0%, #1A251F 100%)',
    },
    insights: {
      title: 'We Understand This Business',
      items: [
        'Healthcare purchases require credibility, accessibility, and consistent visibility in local search',
        'Google My Business and local SEO drive 70% of new pharmacy customers',
        'Prescription refill reminders create recurring revenue and loyalty',
        'Health education content builds authority and trust',
        'Home delivery and digital ordering are no longer optional',
        'Customer service and personal touch differentiate you from chains',
      ],
    },
    framework: {
      title: 'The 2X Growth Framework for Pharmacies',
      steps: [
        {
          name: 'Attention Engine',
          whatMostDo: 'Hope people find you when they need medicines urgently',
          what2XGDoes: 'Dominate "[city] pharmacy" searches, create health tip content, and maintain active Google My Business presence',
        },
        {
          name: 'Demand Capture',
          whatMostDo: 'Wait for walk-ins with no digital ordering system',
          what2XGDoes: 'Build prescription upload systems, WhatsApp ordering, home delivery scheduling, and refill reminders',
        },
        {
          name: 'Trust Proof',
          whatMostDo: 'Rely on pharmacist credentials without customer validation',
          what2XGDoes: 'Showcase Google reviews, patient testimonials, health certifications, and community health initiatives',
        },
        {
          name: 'Conversion Layer',
          whatMostDo: 'Provide medicines reactively without building relationships',
          what2XGDoes: 'Implement loyalty programs, health checkup reminders, chronic care management, and personalized wellness plans',
        },
      ],
    },
    metrics: {
      title: 'Metrics That Matter for Pharmacies',
      kpis: [
        {
          label: 'Local Search Ranking',
          description: 'Position for "[city] pharmacy" searches',
        },
        {
          label: 'Digital Order Volume',
          description: 'Orders via app/WhatsApp/website',
        },
        {
          label: 'Prescription Refills',
          description: 'Recurring medication customers',
        },
        {
          label: 'Google Review Score',
          description: 'Average rating and review count',
        },
        {
          label: 'Customer Retention Rate',
          description: 'Percentage returning within 90 days',
        },
        {
          label: 'Home Delivery Requests',
          description: 'Convenience-driven order growth',
        },
      ],
    },
    services: {
      title: 'What We Actually Do For You',
      mappedServices: [
        {
          service: 'Local SEO',
          industrySpecific: 'Google My Business optimization and local search dominance',
        },
        {
          service: 'Digital Ordering',
          industrySpecific: 'Prescription upload systems and WhatsApp commerce setup',
        },
        {
          service: 'Health Content',
          industrySpecific: 'Educational content that builds authority and trust',
        },
        {
          service: 'Review Management',
          industrySpecific: 'Systematic Google review collection and response',
        },
        {
          service: 'Patient Retention',
          industrySpecific: 'Refill reminders, loyalty programs, and wellness campaigns',
        },
      ],
    },
  },

  'mobile-sales': {
    slug: 'mobile-sales',
    name: 'Mobile Sales',
    hero: {
      headline: 'From Price Comparisons to Purchase Confidence',
      subheadline: 'We help mobile retailers win buyers through value demonstration and trust in the complete ownership experience.',
      accentColor: '#FF4500',
      bgGradient: 'linear-gradient(135deg, #1F1F1F 0%, #2A1510 100%)',
    },
    insights: {
      title: 'We Understand This Business',
      items: [
        'Mobile buyers compare obsessively — win by showing value, trust, and post-purchase support',
        'Spec breakdowns and real-world performance content drive decisions',
        'Trade-in value transparency builds immediate trust',
        'Launch hype and pre-order campaigns create urgency',
        'Warranty, accessories, and service packages increase transaction value',
        'YouTube reviews and Instagram influence 80% of purchase decisions',
      ],
    },
    framework: {
      title: 'The 2X Growth Framework for Mobile Sales',
      steps: [
        {
          name: 'Attention Engine',
          whatMostDo: 'Post new model announcements with pricing and wait for buyers',
          what2XGDoes: 'Create comparison content, real-world tests, camera samples, and trade-in value calculators',
        },
        {
          name: 'Demand Capture',
          whatMostDo: 'List store locations and hope buyers visit to check the phone',
          what2XGDoes: 'Enable online pre-orders, reserve-and-pickup systems, trade-in quotes, and instant EMI calculators',
        },
        {
          name: 'Trust Proof',
          whatMostDo: 'Claim authorized dealer status without showing customer satisfaction',
          what2XGDoes: 'Showcase unboxing videos, customer reviews, warranty coverage, and post-purchase support experiences',
        },
        {
          name: 'Conversion Layer',
          whatMostDo: 'Compete solely on price and watch margins erode',
          what2XGDoes: 'Bundle accessories, offer extended warranties, provide trade-in bonuses, and create no-cost EMI options',
        },
      ],
    },
    metrics: {
      title: 'Metrics That Matter for Mobile Sales',
      kpis: [
        {
          label: 'Pre-Order Conversions',
          description: 'Confirmed bookings for new launches',
        },
        {
          label: 'Trade-In Volume',
          description: 'Upgrade sales through exchange programs',
        },
        {
          label: 'Accessory Attach Rate',
          description: 'Additional items sold per phone',
        },
        {
          label: 'Online-to-Store Visits',
          description: 'Digital reservations to in-store pickups',
        },
        {
          label: 'Warranty Sales',
          description: 'Extended coverage purchases',
        },
        {
          label: 'Customer Return Rate',
          description: 'Repeat purchases for upgrades',
        },
      ],
    },
    services: {
      title: 'What We Actually Do For You',
      mappedServices: [
        {
          service: 'Content Marketing',
          industrySpecific: 'Phone comparisons, camera tests, performance reviews, and feature breakdowns',
        },
        {
          service: 'Launch Campaigns',
          industrySpecific: 'Pre-order hype, early-bird offers, and launch day coverage',
        },
        {
          service: 'Trade-In Systems',
          industrySpecific: 'Online valuation tools and exchange program marketing',
        },
        {
          service: 'Performance Marketing',
          industrySpecific: 'Search campaigns for "[phone model] price" and comparison queries',
        },
        {
          service: 'Influencer Partnerships',
          industrySpecific: 'Tech reviewer collaborations and unboxing campaigns',
        },
      ],
    },
  },

  'car-bike-sales': {
    slug: 'car-bike-sales',
    name: 'Car & Bike Sales',
    hero: {
      headline: 'From Online Research to Showroom Visits',
      subheadline: 'We help automotive dealerships turn digital interest into test drives and confirmed bookings.',
      accentColor: '#DC143C',
      bgGradient: 'linear-gradient(135deg, #1F1F1F 0%, #2A1015 100%)',
    },
    insights: {
      title: 'We Understand This Business',
      items: [
        'Vehicle sales are high-involvement — content must educate, inspire, and build showroom footfall',
        'Test drive bookings are the critical conversion metric, not just leads',
        'Feature walkthroughs and owner reviews build purchase confidence',
        'Financing clarity reduces buying friction significantly',
        'YouTube and Instagram drive initial interest, Google drives intent',
        'Post-purchase service reputation influences 60% of buying decisions',
      ],
    },
    framework: {
      title: 'The 2X Growth Framework for Car & Bike Sales',
      steps: [
        {
          name: 'Attention Engine',
          whatMostDo: 'Post vehicle specs and promotional offers hoping someone bites',
          what2XGDoes: 'Create immersive walkarounds, owner testimonials, performance demos, and lifestyle content that triggers aspiration',
        },
        {
          name: 'Demand Capture',
          whatMostDo: 'Collect random phone numbers with no qualification or follow-up',
          what2XGDoes: 'Build test drive booking funnels, EMI calculators, trade-in estimators, and showroom appointment systems',
        },
        {
          name: 'Trust Proof',
          whatMostDo: 'Rely on brand reputation without local credibility signals',
          what2XGDoes: 'Showcase delivery experiences, customer reviews, service quality, and real ownership stories',
        },
        {
          name: 'Conversion Layer',
          whatMostDo: 'Push for immediate purchase decisions creating buyer resistance',
          what2XGDoes: 'Nurture with financing options, comparison guides, limited-time offers, and personalized follow-ups',
        },
      ],
    },
    metrics: {
      title: 'Metrics That Matter for Car & Bike Sales',
      kpis: [
        {
          label: 'Test Drive Bookings',
          description: 'Scheduled showroom appointments',
        },
        {
          label: 'Qualified Lead Rate',
          description: 'Prospects with verified budget and timeline',
        },
        {
          label: 'Showroom Visit Rate',
          description: 'Digital leads who actually visit',
        },
        {
          label: 'Finance Pre-Approvals',
          description: 'Customers with confirmed financing',
        },
        {
          label: 'Trade-In Evaluations',
          description: 'Exchange program engagement',
        },
        {
          label: 'Booking Conversion',
          description: 'Test drives to confirmed sales',
        },
      ],
    },
    services: {
      title: 'What We Actually Do For You',
      mappedServices: [
        {
          service: 'Content Marketing',
          industrySpecific: 'Vehicle walkarounds, feature demos, and owner lifestyle content',
        },
        {
          service: 'Performance Marketing',
          industrySpecific: 'Search campaigns for "[model] price" and "[city] dealership" queries',
        },
        {
          service: 'Booking Funnels',
          industrySpecific: 'Test drive scheduling and showroom appointment systems',
        },
        {
          service: 'Finance Education',
          industrySpecific: 'EMI calculators, loan comparison tools, and approval assistance',
        },
        {
          service: 'CRM Integration',
          industrySpecific: 'Lead nurturing, sales team coordination, and follow-up automation',
        },
      ],
    },
  },

  'car-bike-service': {
    slug: 'car-bike-service',
    name: 'Car & Bike Home Service',
    hero: {
      headline: 'From Service Hassle to Doorstep Convenience',
      subheadline: 'We help home service providers turn convenience into recurring bookings and customer loyalty.',
      accentColor: '#4B0082',
      bgGradient: 'linear-gradient(135deg, #1F1F1F 0%, #1F1025 100%)',
    },
    insights: {
      title: 'We Understand This Business',
      items: [
        'Convenience beats price — show reliability, speed, and professional execution to win bookings',
        'Before/after service videos build trust in quality and expertise',
        'Subscription packages create predictable revenue and customer retention',
        'Real-time tracking and transparency reduce service anxiety',
        'Google reviews and local visibility drive 70% of new bookings',
        'WhatsApp is the primary communication and booking channel',
      ],
    },
    framework: {
      title: 'The 2X Growth Framework for Car & Bike Home Service',
      steps: [
        {
          name: 'Attention Engine',
          whatMostDo: 'List services and prices hoping people call when they need help',
          what2XGDoes: 'Create service process videos, before/after transformations, technician introductions, and maintenance education',
        },
        {
          name: 'Demand Capture',
          whatMostDo: 'Take calls manually and struggle with scheduling coordination',
          what2XGDoes: 'Build online booking calendars, WhatsApp quick-book, instant quotes, and service package selectors',
        },
        {
          name: 'Trust Proof',
          whatMostDo: 'Claim professional service without showing work quality or customer satisfaction',
          what2XGDoes: 'Document every service, share customer testimonials, showcase certified technicians, and highlight quality guarantees',
        },
        {
          name: 'Conversion Layer',
          whatMostDo: 'Provide one-off services with no retention strategy',
          what2XGDoes: 'Deploy subscription plans, maintenance reminders, loyalty discounts, and annual service packages',
        },
      ],
    },
    metrics: {
      title: 'Metrics That Matter for Car & Bike Home Service',
      kpis: [
        {
          label: 'Booking Conversion Rate',
          description: 'Website/WhatsApp visitors to confirmed bookings',
        },
        {
          label: 'Subscription Sign-ups',
          description: 'Monthly recurring service customers',
        },
        {
          label: 'Average Job Value',
          description: 'Revenue per service call',
        },
        {
          label: 'Customer Retention',
          description: 'Repeat bookings within 90 days',
        },
        {
          label: 'Online Booking %',
          description: 'Digital vs phone bookings',
        },
        {
          label: 'Google Review Score',
          description: 'Average rating and monthly reviews',
        },
      ],
    },
    services: {
      title: 'What We Actually Do For You',
      mappedServices: [
        {
          service: 'Content Marketing',
          industrySpecific: 'Service process videos, technician profiles, and maintenance education',
        },
        {
          service: 'Booking Systems',
          industrySpecific: 'Online scheduling, WhatsApp booking, and service package selection',
        },
        {
          service: 'Local SEO',
          industrySpecific: 'Google My Business for "[city] car service at home" searches',
        },
        {
          service: 'Subscription Programs',
          industrySpecific: 'Monthly service plans and maintenance package design',
        },
        {
          service: 'Customer Retention',
          industrySpecific: 'Service reminders, loyalty programs, and referral incentives',
        },
      ],
    },
  },

  'wedding-decor': {
    slug: 'wedding-decor',
    name: 'Wedding Decor',
    hero: {
      headline: 'From Pinterest Dreams to Perfect Execution',
      subheadline: 'We help wedding decorators turn visual portfolios into confirmed bookings and flawless delivery.',
      accentColor: '#FFD700',
      bgGradient: 'linear-gradient(135deg, #1F1F1F 0%, #2A2510 100%)',
    },
    insights: {
      title: 'We Understand This Business',
      items: [
        'Wedding decor is visual trust — your portfolio must show dream execution and flawless delivery',
        'Couples make decisions emotionally based on past work quality',
        'Instagram and Pinterest drive 90% of decor discovery',
        'Budget transparency and package clarity reduce friction',
        'Real wedding documentation outperforms staged shoots by 5x',
        'Vendor network and venue relationships are hidden competitive advantages',
      ],
    },
    framework: {
      title: 'The 2X Growth Framework for Wedding Decor',
      steps: [
        {
          name: 'Attention Engine',
          whatMostDo: 'Post random decoration photos hoping couples contact you',
          what2XGDoes: 'Build a stunning portfolio organized by theme, venue, and budget with storytelling around each execution',
        },
        {
          name: 'Demand Capture',
          whatMostDo: 'Wait for couples to DM with vague requirements and no budget clarity',
          what2XGDoes: 'Create theme-based package selectors, budget estimators, and consultation booking systems',
        },
        {
          name: 'Trust Proof',
          whatMostDo: 'Show finished setups without client testimonials or execution stories',
          what2XGDoes: 'Document setup processes, share couple testimonials, showcase vendor partnerships, and highlight problem-solving',
        },
        {
          name: 'Conversion Layer',
          whatMostDo: 'Send quotes and hope couples remember you among 20 other vendors',
          what2XGDoes: 'Nurture with inspiration boards, limited-date availability, early-booking incentives, and personalized mood boards',
        },
      ],
    },
    metrics: {
      title: 'Metrics That Matter for Wedding Decor',
      kpis: [
        {
          label: 'Consultation Bookings',
          description: 'Scheduled meetings with couples',
        },
        {
          label: 'Quote-to-Booking Rate',
          description: 'Proposals that convert to confirmed weddings',
        },
        {
          label: 'Average Project Value',
          description: 'Revenue per wedding booking',
        },
        {
          label: 'Portfolio Engagement',
          description: 'Saves and shares of past work',
        },
        {
          label: 'Referral Rate',
          description: 'Bookings from vendor and client referrals',
        },
        {
          label: 'Booking Lead Time',
          description: 'Months in advance couples book',
        },
      ],
    },
    services: {
      title: 'What We Actually Do For You',
      mappedServices: [
        {
          service: 'Portfolio Marketing',
          industrySpecific: 'Instagram-optimized real wedding documentation and theme showcases',
        },
        {
          service: 'Package Design',
          industrySpecific: 'Theme-based packages with transparent pricing and inclusions',
        },
        {
          service: 'Consultation Funnels',
          industrySpecific: 'Booking systems for couple consultations and venue visits',
        },
        {
          service: 'Pinterest Strategy',
          industrySpecific: 'Pin-optimized content for wedding planning searches',
        },
        {
          service: 'Vendor Partnerships',
          industrySpecific: 'Collaboration marketing with venues, photographers, and planners',
        },
      ],
    },
  },

  'ice-cream': {
    slug: 'ice-cream',
    name: 'Premium Ice Cream 🍦',
    hero: {
      headline: 'From Impulse Treats to Brand Obsession 😍',
      subheadline: 'We help premium ice cream brands turn indulgence moments into social buzz and loyal communities 🎉',
      accentColor: '#FF1493',
      bgGradient: 'linear-gradient(135deg, #1F1F1F 0%, #2A1020 100%)',
      bgImage: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=1920&q=90',
    },
    insights: {
      title: 'We Understand This Business',
      items: [
        'Premium ice cream isn\'t food — it\'s an experience that must trigger indulgence and desire',
        'Social shareability drives discovery and footfall more than traditional advertising',
        'Flavor innovation and limited editions create urgency and FOMO',
        'Instagram and TikTok are primary discovery channels for younger audiences',
        'Store ambiance and Instagrammable moments are part of the product',
        'Community building turns first-timers into brand evangelists',
      ],
    },
    framework: {
      title: 'The 2X Growth Framework for Premium Ice Cream',
      steps: [
        {
          name: 'Attention Engine',
          whatMostDo: 'Post flavor announcements and hope people walk in to try',
          what2XGDoes: 'Create drool-worthy visuals, behind-the-scenes flavor creation, customer reactions, and shareable moment content',
        },
        {
          name: 'Demand Capture',
          whatMostDo: 'Wait for walk-ins with no online ordering or delivery',
          what2XGDoes: 'Enable delivery partnerships, build flavor subscription boxes, and create online pre-order for limited editions',
        },
        {
          name: 'Trust Proof',
          whatMostDo: 'Claim premium quality without showing ingredients or process',
          what2XGDoes: 'Showcase ingredient sourcing, flavor development stories, customer testimonials, and quality certifications',
        },
        {
          name: 'Conversion Layer',
          whatMostDo: 'Rely on spontaneous visits with no retention strategy',
          what2XGDoes: 'Build loyalty programs, limited-edition drops, flavor voting, and community events that create belonging',
        },
      ],
    },
    metrics: {
      title: 'Metrics That Matter for Premium Ice Cream',
      kpis: [
        {
          label: 'Social Shares per Visit',
          description: 'User-generated content volume',
        },
        {
          label: 'New Flavor Launch Buzz',
          description: 'Pre-orders and first-week sales',
        },
        {
          label: 'Repeat Customer Rate',
          description: 'Percentage visiting multiple times monthly',
        },
        {
          label: 'Average Transaction Value',
          description: 'Revenue per customer visit',
        },
        {
          label: 'Delivery Order Growth',
          description: 'Online ordering trend',
        },
        {
          label: 'Brand Mentions',
          description: 'Organic social media coverage',
        },
      ],
    },
    services: {
      title: 'What We Actually Do For You',
      mappedServices: [
        {
          service: 'Content Marketing',
          industrySpecific: 'Drool-worthy visuals, flavor stories, and customer experience content',
        },
        {
          service: 'Influencer Marketing',
          industrySpecific: 'Food blogger partnerships and UGC campaigns',
        },
        {
          service: 'Launch Campaigns',
          industrySpecific: 'Limited-edition flavor drops with FOMO-driven marketing',
        },
        {
          service: 'Community Building',
          industrySpecific: 'Flavor voting, tasting events, and brand ambassador programs',
        },
        {
          service: 'Delivery Optimization',
          industrySpecific: 'Partnership setup with Swiggy/Zomato and direct ordering systems',
        },
      ],
    },
  },
};

export function getIndustryData(slug: string): IndustryData | null {
  return industriesData[slug] || null;
}

export function getAllIndustrySlugs(): string[] {
  return Object.keys(industriesData);
}
