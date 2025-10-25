export interface AIResponse {
    id: string;
    question: string;
    answer: string;
    followUpSuggestions: string[];
    category: 'about' | 'services' | 'technology' | 'contact' | 'general' | 'careers' | 'portfolio';
}

export const aiResponses: AIResponse[] = [
    {
        id: '1',
        question: 'What is HaiIntel?',
        answer: 'HaiIntel partners with CIOs to embed human-rooted AI into enterprise transformation — accelerating outcomes through domain-aware, intelligence-first systems. We build human-centered AI experiences that merge design, performance, and intelligence, creating solutions that prioritize user experience while delivering powerful AI capabilities.',
        followUpSuggestions: [
            'What are HaiProducts?',
            'Tell me about HaiPODs',
            'What is HaiIntel\'s mission?',
            'How does HaiIntel work with CIOs?'
        ],
        category: 'about'
    },
    {
        id: '2',
        question: 'What services does HaiIntel offer?',
        answer: 'HaiIntel specializes in developing AI-powered applications and experiences. Our services include custom AI solution development, user experience design for AI interfaces, performance optimization, intelligent system integration, AI consulting, and end-to-end AI product development. We work with organizations to implement AI that truly serves their users.',
        followUpSuggestions: [
            'What technologies does HaiIntel use?',
            'How can I work with HaiIntel?',
            'Does HaiIntel offer consulting?',
            'What industries does HaiIntel serve?'
        ],
        category: 'services'
    },
    {
        id: '3',
        question: 'How does HaiIntel approach AI development?',
        answer: 'Our approach is human-centered, focusing on creating AI experiences that are intuitive, performant, and meaningful. We believe in merging cutting-edge AI technology with thoughtful design to create solutions that truly serve users. Every project starts with understanding user needs and ends with solutions that enhance human capabilities rather than replace them.',
        followUpSuggestions: [
            'What technologies does HaiIntel use?',
            'Can you give me an example of HaiIntel\'s work?',
            'How does HaiIntel ensure AI safety?',
            'What is HaiIntel\'s development philosophy?'
        ],
        category: 'technology'
    },
    {
        id: '4',
        question: 'What technologies does HaiIntel use?',
        answer: 'HaiIntel leverages modern AI frameworks, machine learning models, and cutting-edge development tools. We work with technologies like React, Next.js, Python, TensorFlow, PyTorch, various cloud platforms (AWS, Azure, GCP), and custom AI model development. Our tech stack is chosen for performance, scalability, and developer experience.',
        followUpSuggestions: [
            'How can I work with HaiIntel?',
            'Does HaiIntel offer consulting?',
            'What industries does HaiIntel serve?',
            'What is HaiIntel\'s tech stack philosophy?'
        ],
        category: 'technology'
    },
    {
        id: '5',
        question: 'How can I work with HaiIntel?',
        answer: 'We\'re always looking for talented developers who can code, design, and effectively leverage AI tools. Visit our website to learn about current opportunities or reach out to discuss potential collaborations. We value developers who understand both technical excellence and user experience, and who can work effectively with AI tools to accelerate development.',
        followUpSuggestions: [
            'What positions are available?',
            'How can I contact HaiIntel?',
            'What skills does HaiIntel look for?',
            'What is HaiIntel\'s hiring process?'
        ],
        category: 'contact'
    },
    {
        id: '6',
        question: 'Tell me about Vibrant Capital',
        answer: 'Vibrant Capital is the parent organization of HaiIntel, providing strategic support and resources for building innovative AI experiences. Together, we focus on creating value through human-centered technology solutions. Vibrant Capital enables HaiIntel to pursue ambitious AI projects while maintaining our focus on user experience and technical excellence.',
        followUpSuggestions: [
            'What is HaiIntel\'s mission?',
            'How does Vibrant Capital support HaiIntel?',
            'What other companies are part of Vibrant Capital?',
            'What is Vibrant Capital\'s investment philosophy?'
        ],
        category: 'about'
    },
    {
        id: '7',
        question: 'What makes HaiIntel different?',
        answer: 'HaiIntel stands out by prioritizing the human element in AI development. We don\'t just build powerful AI systems - we create experiences that are intuitive, accessible, and genuinely useful for real-world applications. Our focus on design, performance, and intelligence creates solutions that users actually want to use.',
        followUpSuggestions: [
            'Can you give me an example of HaiIntel\'s work?',
            'What is HaiIntel\'s development philosophy?',
            'How does HaiIntel measure success?',
            'What industries does HaiIntel serve?'
        ],
        category: 'about'
    },
    {
        id: '8',
        question: 'Does HaiIntel offer consulting?',
        answer: 'Yes, HaiIntel provides consulting services for organizations looking to integrate AI into their operations. We help with strategy, implementation, and optimization of AI solutions tailored to specific business needs. Our consulting focuses on creating AI that enhances human capabilities and delivers real business value.',
        followUpSuggestions: [
            'How can I contact HaiIntel for consulting?',
            'What industries does HaiIntel serve?',
            'What is HaiIntel\'s consulting process?',
            'What are HaiIntel\'s consulting specialties?'
        ],
        category: 'services'
    },
    {
        id: '9',
        question: 'What industries does HaiIntel serve?',
        answer: 'HaiIntel works across various industries including healthcare, finance, education, e-commerce, and enterprise software. We focus on sectors where AI can make a meaningful difference in user experience and operational efficiency. Our human-centered approach makes us particularly effective in industries where user trust and intuitive interfaces are critical.',
        followUpSuggestions: [
            'Can you give me an example of HaiIntel\'s work?',
            'How does HaiIntel approach different industries?',
            'What are HaiIntel\'s industry specialties?',
            'Does HaiIntel work with startups?'
        ],
        category: 'services'
    },
    {
        id: '10',
        question: 'What skills does HaiIntel look for?',
        answer: 'We look for developers who can code, design, and effectively leverage AI tools. Key skills include React/Next.js, Python, AI/ML frameworks, user experience design, and the ability to work with AI tools to accelerate development. We value technical excellence, user empathy, and the ability to create solutions that are both powerful and intuitive.',
        followUpSuggestions: [
            'What positions are available?',
            'What is HaiIntel\'s hiring process?',
            'How can I apply to HaiIntel?',
            'What is HaiIntel\'s company culture like?'
        ],
        category: 'careers'
    },
    {
        id: '11',
        question: 'Can you give me an example of HaiIntel\'s work?',
        answer: 'This chat companion itself is a perfect example of HaiIntel\'s work! It demonstrates our approach to human-centered AI design - intuitive interface, smooth animations, contextual responses, and a focus on user experience. We build similar AI-powered solutions for our clients, always prioritizing usability and performance.',
        followUpSuggestions: [
            'What other projects has HaiIntel completed?',
            'How does HaiIntel approach project development?',
            'What is HaiIntel\'s portfolio like?',
            'Can I see more examples of HaiIntel\'s work?'
        ],
        category: 'portfolio'
    },
    {
        id: '12',
        question: 'What is HaiIntel\'s development philosophy?',
        answer: 'Our development philosophy centers on three pillars: Design, Performance, and Intelligence. We believe AI should be beautifully designed, performant, and intelligent. Every solution we build puts human needs first, uses the best available technology, and delivers exceptional performance. We\'re not just building AI - we\'re crafting experiences.',
        followUpSuggestions: [
            'How does HaiIntel ensure quality?',
            'What is HaiIntel\'s approach to testing?',
            'How does HaiIntel handle project management?',
            'What methodologies does HaiIntel use?'
        ],
        category: 'technology'
    },
    {
        id: '13',
        question: 'How can I contact HaiIntel?',
        answer: 'You can reach HaiIntel through our website at haiintel.com. We\'re always interested in hearing about new opportunities, potential collaborations, and interesting AI challenges. Whether you\'re looking for AI solutions, consulting, or career opportunities, we\'d love to hear from you.',
        followUpSuggestions: [
            'What is HaiIntel\'s response time?',
            'Does HaiIntel offer free consultations?',
            'How can I schedule a meeting?',
            'What information should I include when contacting HaiIntel?'
        ],
        category: 'contact'
    },
    {
        id: '14',
        question: 'What is HaiIntel\'s company culture like?',
        answer: 'HaiIntel fosters a culture of innovation, collaboration, and continuous learning. We value developers who can work effectively with AI tools, think creatively about user experience, and are passionate about building technology that serves people. Our culture emphasizes both technical excellence and human-centered design.',
        followUpSuggestions: [
            'What benefits does HaiIntel offer?',
            'How does HaiIntel support professional development?',
            'What is HaiIntel\'s remote work policy?',
            'What is HaiIntel\'s team structure like?'
        ],
        category: 'careers'
    },
    {
        id: '15',
        question: 'What is HaiIntel\'s mission?',
        answer: 'HaiIntel\'s mission is to build human-centered AI experiences that merge design, performance, and intelligence. We believe AI should enhance human capabilities, not replace them. Our goal is to create AI solutions that are intuitive, accessible, and genuinely useful for real-world applications across various industries.',
        followUpSuggestions: [
            'How does HaiIntel measure success?',
            'What are HaiIntel\'s long-term goals?',
            'How does HaiIntel contribute to the AI community?',
            'What impact does HaiIntel want to make?'
        ],
        category: 'about'
    },
    // New HaiProducts responses
    {
        id: '16',
        question: 'What are HaiProducts?',
        answer: 'HaiProducts are AI accelerators that deliver outcomes, not just tools. Each HaiProduct is modular, intelligence-powered, and built to drive measurable business results. They include HaiIntel-Recode (legacy system modernization), HaiReach (smart discovery intelligence), HaiOnboarding (AI-powered customer journeys), HaiResolve (co-pilot agents for ticketing), and HaiModels (fine-tuned LLMs).',
        followUpSuggestions: [
            'Tell me about HaiIntel-Recode',
            'What is HaiReach?',
            'How does HaiOnboarding work?',
            'What is the Unified Intelligence Platform?'
        ],
        category: 'services'
    },
    {
        id: '17',
        question: 'Tell me about HaiIntel-Recode',
        answer: 'HaiIntel-Recode modernizes legacy systems with intelligence-first code transformation. It uses AI-powered agents to analyze and restructure legacy codebases, aligns with TM Forum standards and future-ready microservices, includes human-in-loop architecture validation workflows, and offers outcome pricing based on APIs migrated, rules extracted, and code modularized.',
        followUpSuggestions: [
            'What is HaiReach?',
            'Tell me about HaiOnboarding',
            'What is HaiResolve?',
            'How does HaiModels work?'
        ],
        category: 'services'
    },
    {
        id: '18',
        question: 'What is HaiReach?',
        answer: 'HaiReach discovers, qualifies, and activates relationships with smart discovery intelligence. It crawls external and internal data sources (LinkedIn, CAC, CRM), provides intelligent lead scoring, targeting, and enrichment, serves B2B growth teams, field sales, and outreach, and offers outcome pricing based on qualified leads, time-to-contact, and campaign ROI.',
        followUpSuggestions: [
            'Tell me about HaiOnboarding',
            'What is HaiResolve?',
            'How does HaiModels work?',
            'What is the Unified Intelligence Platform?'
        ],
        category: 'services'
    },
    {
        id: '19',
        question: 'Tell me about HaiOnboarding',
        answer: 'HaiOnboarding accelerates customer journeys with AI-powered onboarding. It orchestrates onboarding journeys with AI prompts and validations, includes KYC, document understanding, and risk scoring built-in, plugs into core banking, telecom stacks, and ID tools, and offers outcome pricing based on faster onboarding, lower drop-offs, and higher NPS.',
        followUpSuggestions: [
            'What is HaiResolve?',
            'How does HaiModels work?',
            'What is the Unified Intelligence Platform?',
            'Tell me about HaiIntel-Recode'
        ],
        category: 'services'
    },
    {
        id: '20',
        question: 'What is HaiResolve?',
        answer: 'HaiResolve provides co-pilot agents for smarter ticketing and resolution. It offers AI classification, triage, and resolution suggestions, integrates with ITSM, CRM, and contact centers, learns from agent feedback and closed tickets, and provides outcome pricing based on MTTR reduction, FCR improvement, and ticket auto-resolution.',
        followUpSuggestions: [
            'How does HaiModels work?',
            'What is the Unified Intelligence Platform?',
            'Tell me about HaiIntel-Recode',
            'What is HaiReach?'
        ],
        category: 'services'
    },
    {
        id: '21',
        question: 'How does HaiModels work?',
        answer: 'HaiModels provides fine-tuned LLMs tailored to your industry context. They are enterprise-hosted, privacy-compliant, and domain-aware, offer APIs for summarization, co-pilot functions, and semantic search, are embedded across other HaiProducts, and provide outcome pricing based on value-per-usage, not just tokens.',
        followUpSuggestions: [
            'What is the Unified Intelligence Platform?',
            'Tell me about HaiIntel-Recode',
            'What is HaiReach?',
            'Tell me about HaiOnboarding'
        ],
        category: 'services'
    },
    {
        id: '22',
        question: 'What is the Unified Intelligence Platform?',
        answer: 'The Unified Intelligence Platform ensures all HaiProducts share a unified memory, governance layer, and interface design — ready for fast adoption and responsible scaling across your enterprise. This creates consistency and seamless integration between different AI solutions.',
        followUpSuggestions: [
            'Tell me about HaiIntel-Recode',
            'What is HaiReach?',
            'Tell me about HaiOnboarding',
            'What is HaiResolve?'
        ],
        category: 'services'
    },
    // New HaiPODs responses
    {
        id: '23',
        question: 'Tell me about HaiPODs',
        answer: 'HaiPODs are Intelligence HaiPODs where domain meets delivery. HaiIntel deploys domain-agnostic Intelligence HaiPODs that pair AI engineers with business leaders to rapidly deliver value. These HaiPODs specialize in industry-specific transformation challenges and follow our proven framework: Business Discovery → AI Architecture → Rapid Prototyping → Production Deployment → Continuous Intelligence.',
        followUpSuggestions: [
            'What are the different HaiPODs?',
            'Tell me about Customer Onboarding AI POD',
            'What is Rewards AI POD?',
            'How does the Domain-Agnostic Methodology work?'
        ],
        category: 'services'
    },
    {
        id: '24',
        question: 'What are the different HaiPODs?',
        answer: 'HaiIntel offers five specialized HaiPODs: Customer Onboarding AI POD (streamlines customer acquisition with AI-powered verification), Rewards AI POD (designs intelligent loyalty systems), Modernization AI POD (transforms legacy systems with AI-first architecture), Citizen Services AI POD (enhances public service delivery), and Experience AI POD (creates human-centered AI experiences).',
        followUpSuggestions: [
            'Tell me about Customer Onboarding AI POD',
            'What is Rewards AI POD?',
            'Tell me about Modernization AI POD',
            'What industries do HaiPODs serve?'
        ],
        category: 'services'
    },
    {
        id: '25',
        question: 'Tell me about Customer Onboarding AI POD',
        answer: 'Customer Onboarding AI POD streamlines customer acquisition with AI-powered verification, risk assessment, and journey orchestration. It serves Banking and Government sectors, providing intelligent automation for customer onboarding processes.',
        followUpSuggestions: [
            'What is Rewards AI POD?',
            'Tell me about Modernization AI POD',
            'What is Citizen Services AI POD?',
            'What is Experience AI POD?'
        ],
        category: 'services'
    },
    {
        id: '26',
        question: 'What is Rewards AI POD?',
        answer: 'Rewards AI POD designs intelligent loyalty systems that personalize rewards and predict customer behavior. It serves Retail and Telecom sectors, creating sophisticated reward programs that adapt to customer preferences and behaviors.',
        followUpSuggestions: [
            'Tell me about Modernization AI POD',
            'What is Citizen Services AI POD?',
            'What is Experience AI POD?',
            'What industries do HaiPODs serve?'
        ],
        category: 'services'
    },
    {
        id: '27',
        question: 'What industries do HaiPODs serve?',
        answer: 'HaiPODs serve multiple industries including Banking, Retail, Government, Telecom, Healthcare, and Manufacturing. Each HaiPOD is designed to address industry-specific transformation challenges while maintaining domain-agnostic methodology.',
        followUpSuggestions: [
            'Tell me about Modernization AI POD',
            'What is Citizen Services AI POD?',
            'What is Experience AI POD?',
            'How does the Domain-Agnostic Methodology work?'
        ],
        category: 'services'
    },
    // New Leadership responses
    {
        id: '28',
        question: 'Who leads HaiIntel?',
        answer: 'HaiIntel is guided by visionaries in technology and transformation. Our leadership team includes a Chairman (seasoned technologist and transformation strategist with global CIO leadership experience), CEO (business builder and enterprise innovator focused on scaling human-centered AI solutions), and CTO (AI engineering and systems expert shaping HaiIntel\'s core intelligence platform). Leadership details are coming soon.',
        followUpSuggestions: [
            'What is the Chairman\'s background?',
            'Tell me about the CEO',
            'What is the CTO\'s expertise?',
            'What is the collective experience?'
        ],
        category: 'about'
    },
    {
        id: '29',
        question: 'What is the collective experience?',
        answer: 'HaiIntel\'s leadership team brings together 50+ years of combined experience in enterprise transformation, AI architecture, and business strategy across Fortune 500 companies and high-growth startups. This deep expertise enables us to deliver sophisticated AI solutions that meet enterprise requirements.',
        followUpSuggestions: [
            'Who leads HaiIntel?',
            'What is HaiIntel\'s mission?',
            'How does HaiIntel work with CIOs?',
            'What makes HaiIntel different?'
        ],
        category: 'about'
    },
    // New Tech Stack responses
    {
        id: '30',
        question: 'What is HaiIntel\'s tech stack?',
        answer: 'HaiIntel leverages an ecosystem of best-in-class AI tools and platforms including LLMs & Agent Platforms (ChatGPT, Claude, Gemini, LLaMA, DeepSeek, Grok, AutoGen, LangChain, CrewAI), Speech & Vision (ElevenLabs, Google TTS, Midjourney, Sora, Runway), Collaboration & Search (Slack AI, Notion, Confluence AI, Grammarly, Amazon Kendra, Coveo), AI Integration & Automation (n8n, Zapier, Appian, UiPath, Workato), Enterprise Platforms (ServiceNow, Microsoft Copilot Studio, SAP AI Core, Agentforce), and Dev Tools (Cursor, GitHub Copilot, Replit, Windsurf, Manus, Bolt.new).',
        followUpSuggestions: [
            'What is the Technology-Agnostic Approach?',
            'How does HaiIntel ensure Enterprise-Grade solutions?',
            'What makes HaiIntel\'s tech stack Best-in-Class?',
            'How does HaiIntel ensure Integration-Ready solutions?'
        ],
        category: 'technology'
    },
    {
        id: '31',
        question: 'What is the Technology-Agnostic Approach?',
        answer: 'HaiIntel follows a Technology-Agnostic Approach, selecting the right tool for each use case to ensure vendor independence while maintaining consistency across AI initiatives. Our platform abstracts complexity while preserving flexibility, allowing us to deliver optimal solutions regardless of existing technology constraints.',
        followUpSuggestions: [
            'What is HaiIntel\'s tech stack?',
            'How does HaiIntel ensure Enterprise-Grade solutions?',
            'What makes HaiIntel\'s tech stack Best-in-Class?',
            'How does HaiIntel ensure Integration-Ready solutions?'
        ],
        category: 'technology'
    },
    {
        id: '32',
        question: 'How does HaiIntel ensure Enterprise-Grade solutions?',
        answer: 'HaiIntel ensures Enterprise-Grade solutions by selecting all tools for security, compliance, and enterprise scalability requirements. Every technology in our stack is evaluated for enterprise readiness, security standards, and compliance capabilities.',
        followUpSuggestions: [
            'What makes HaiIntel\'s tech stack Best-in-Class?',
            'How does HaiIntel ensure Integration-Ready solutions?',
            'What is the Technology-Agnostic Approach?',
            'What is HaiIntel\'s tech stack?'
        ],
        category: 'technology'
    },
    {
        id: '33',
        question: 'What makes HaiIntel\'s tech stack Best-in-Class?',
        answer: 'HaiIntel\'s tech stack is Best-in-Class because we use leading platforms and models to ensure optimal performance and cutting-edge capabilities. We continuously evaluate and integrate the most advanced AI tools and technologies available.',
        followUpSuggestions: [
            'How does HaiIntel ensure Integration-Ready solutions?',
            'What is the Technology-Agnostic Approach?',
            'What is HaiIntel\'s tech stack?',
            'How does HaiIntel ensure Enterprise-Grade solutions?'
        ],
        category: 'technology'
    },
    {
        id: '34',
        question: 'How does HaiIntel ensure Integration-Ready solutions?',
        answer: 'HaiIntel ensures Integration-Ready solutions by using APIs and connectors designed for seamless integration with existing enterprise systems. Our technology choices prioritize compatibility and ease of integration with current infrastructure.',
        followUpSuggestions: [
            'What is the Technology-Agnostic Approach?',
            'What is HaiIntel\'s tech stack?',
            'How does HaiIntel ensure Enterprise-Grade solutions?',
            'What makes HaiIntel\'s tech stack Best-in-Class?'
        ],
        category: 'technology'
    },
    // New Mission and Approach responses
    {
        id: '35',
        question: 'What is HaiIntel\'s mission?',
        answer: 'HaiIntel\'s mission is to embed human-rooted AI into enterprise transformation, accelerating outcomes through domain-aware, intelligence-first systems. We partner with CIOs to create AI solutions that enhance human capabilities rather than replace them, focusing on measurable business results and user-centered design.',
        followUpSuggestions: [
            'How does HaiIntel work with CIOs?',
            'What is HaiIntel\'s approach to enterprise transformation?',
            'What are HaiIntel\'s key transformation areas?',
            'How does HaiIntel measure success?'
        ],
        category: 'about'
    },
    {
        id: '36',
        question: 'How does HaiIntel work with CIOs?',
        answer: 'HaiIntel works with CIOs as transformation co-pilots, moving from traditional delivery management to strategic AI transformation partnerships. We help CIOs navigate the evolution from legacy systems to intelligence-first architectures, providing domain-aware solutions that accelerate enterprise outcomes.',
        followUpSuggestions: [
            'What are HaiIntel\'s key transformation areas?',
            'What is HaiIntel\'s approach to enterprise transformation?',
            'How does HaiIntel measure success?',
            'What is HaiIntel\'s mission?'
        ],
        category: 'about'
    },
    {
        id: '37',
        question: 'What are HaiIntel\'s key transformation areas?',
        answer: 'HaiIntel focuses on six key transformation areas: Legacy Modernization (transforming outdated systems), Customer Experience (enhancing user interactions), Operational Efficiency (streamlining processes), Data Intelligence (leveraging data for insights), Compliance & Security (ensuring regulatory adherence), and Innovation Acceleration (driving continuous improvement).',
        followUpSuggestions: [
            'What is HaiIntel\'s approach to enterprise transformation?',
            'How does HaiIntel measure success?',
            'What is HaiIntel\'s mission?',
            'How does HaiIntel work with CIOs?'
        ],
        category: 'services'
    },
    {
        id: '38',
        question: 'What is HaiIntel\'s approach to enterprise transformation?',
        answer: 'HaiIntel\'s approach to enterprise transformation focuses on human-rooted AI that accelerates outcomes through domain-aware, intelligence-first systems. We partner with CIOs to embed AI into existing processes while maintaining business continuity and ensuring measurable results.',
        followUpSuggestions: [
            'How does HaiIntel measure success?',
            'What is HaiIntel\'s mission?',
            'How does HaiIntel work with CIOs?',
            'What are HaiIntel\'s key transformation areas?'
        ],
        category: 'services'
    },
    // New Contact and Engagement responses
    {
        id: '39',
        question: 'How can I engage with HaiIntel?',
        answer: 'You can engage with HaiIntel through three main options: Schedule a Strategy Session (free 60-minute consultation with CIO Partners), Request a Demo (see HaiProducts in action), or Start a Pilot Project (begin with a focused AI implementation). All engagements are designed to explore your AI transformation roadmap and accelerate outcomes.',
        followUpSuggestions: [
            'How do I schedule a strategy session?',
            'What happens in a demo?',
            'How do pilot projects work?',
            'What can I expect from HaiIntel?'
        ],
        category: 'contact'
    },
    {
        id: '40',
        question: 'What can I expect from HaiIntel?',
        answer: 'From HaiIntel, you can expect: Clear AI transformation roadmap, Measurable business outcomes, Domain-aware solutions, Human-centered design, Enterprise-grade security, Continuous intelligence improvement, and Partnership approach to implementation. We focus on delivering intelligence that enhances your capabilities.',
        followUpSuggestions: [
            'What are the next steps?',
            'How long do implementations take?',
            'What support does HaiIntel provide?',
            'How can I engage with HaiIntel?'
        ],
        category: 'contact'
    },
    {
        id: '41',
        question: 'What are the next steps?',
        answer: 'The next steps with HaiIntel are: 1) Schedule a Strategy Session to explore your AI transformation roadmap, 2) Define specific use cases and outcomes, 3) Select appropriate HaiProducts or HaiPODs, 4) Begin pilot implementation, 5) Scale successful solutions across your enterprise. We guide you through each step with measurable outcomes.',
        followUpSuggestions: [
            'How can I engage with HaiIntel?',
            'What can I expect from HaiIntel?',
            'How long do implementations take?',
            'What support does HaiIntel provide?'
        ],
        category: 'contact'
    }
];

export const getAIResponse = (query: string): AIResponse | null => {
    const normalizedQuery = query.toLowerCase().trim();

    // Enhanced keyword matching for better responses
    const keywordMap: { [key: string]: string[] } = {
        'what': ['what is haiintel', 'what services', 'what technologies', 'what makes', 'what skills', 'what industries', 'what are haiproducts', 'what is haireach', 'what is haionboarding', 'what is hairesolve', 'what is haimodels', 'what is unified intelligence platform', 'what are haipods', 'what is tech stack', 'what is mission', 'what are key transformation areas', 'what can i expect', 'what are next steps'],
        'how': ['how does haiintel', 'how can i work', 'how can i contact', 'how does haionboarding work', 'how does haimodels work', 'how does domain-agnostic methodology work', 'how does haiintel work with cios', 'how does haiintel ensure enterprise-grade', 'how does haiintel ensure integration-ready', 'how can i engage', 'how do pilot projects work', 'how long do implementations take'],
        'who': ['who is haiintel', 'who works at haiintel', 'who leads haiintel'],
        'where': ['where is haiintel', 'where does haiintel work'],
        'when': ['when was haiintel founded', 'when can i contact'],
        'why': ['why choose haiintel', 'why haiintel'],
        'services': ['services', 'offerings', 'solutions', 'haiproducts', 'haipods'],
        'technology': ['technology', 'tech stack', 'tools', 'frameworks', 'llms', 'agent platforms', 'speech', 'vision', 'collaboration', 'search', 'ai integration', 'automation', 'enterprise platforms', 'dev tools'],
        'careers': ['careers', 'jobs', 'hiring', 'positions', 'work'],
        'contact': ['contact', 'reach', 'get in touch', 'email', 'engage', 'strategy session', 'demo', 'pilot project'],
        'about': ['about', 'company', 'mission', 'philosophy', 'leadership', 'collective experience'],
        'vibrant': ['vibrant capital', 'parent company'],
        'ai': ['ai', 'artificial intelligence', 'machine learning', 'intelligence', 'transformation'],
        'consulting': ['consulting', 'advisory', 'strategy'],
        'haiproducts': ['haiproducts', 'haiintel-recode', 'haireach', 'haionboarding', 'hairesolve', 'haimodels', 'unified intelligence platform'],
        'haipods': ['haipods', 'customer onboarding ai pod', 'rewards ai pod', 'modernization ai pod', 'citizen services ai pod', 'experience ai pod', 'domain-agnostic methodology'],
        'leadership': ['leadership', 'chairman', 'ceo', 'cto', 'collective experience'],
        'tech': ['tech stack', 'technology-agnostic approach', 'enterprise-grade', 'best-in-class', 'integration-ready'],
        'transformation': ['transformation', 'enterprise transformation', 'key transformation areas', 'legacy modernization', 'customer experience', 'operational efficiency', 'data intelligence', 'compliance', 'security', 'innovation acceleration'],
        'cios': ['cios', 'cio', 'transformation co-pilots', 'delivery manager']
    };

    // Check for direct question matches first
    for (const response of aiResponses) {
        const normalizedQuestion = response.question.toLowerCase();
        if (normalizedQuestion.includes(normalizedQuery) || normalizedQuery.includes(normalizedQuestion.split(' ')[0])) {
            return response;
        }
    }

    // Check for keyword-based matching
    for (const [keyword, questions] of Object.entries(keywordMap)) {
        if (normalizedQuery.includes(keyword)) {
            for (const question of questions) {
                for (const response of aiResponses) {
                    if (response.question.toLowerCase().includes(question.split(' ').slice(1).join(' '))) {
                        return response;
                    }
                }
            }
        }
    }

    // Fallback responses for unmatched queries
    const fallbackResponses: AIResponse[] = [
        {
            id: 'fallback-1',
            question: 'General inquiry',
            answer: 'I\'d be happy to help you learn more about HaiIntel! We build human-centered AI experiences that merge design, performance, and intelligence. What specific aspect of our work interests you?',
            followUpSuggestions: [
                'What is HaiIntel?',
                'What services does HaiIntel offer?',
                'How can I work with HaiIntel?',
                'What makes HaiIntel different?'
            ],
            category: 'general'
        },
        {
            id: 'fallback-2',
            question: 'AI and technology inquiry',
            answer: 'HaiIntel specializes in creating AI solutions that prioritize user experience and performance. We work with modern technologies and frameworks to build intelligent applications that are both powerful and intuitive.',
            followUpSuggestions: [
                'What technologies does HaiIntel use?',
                'How does HaiIntel approach AI development?',
                'Can you give me an example of HaiIntel\'s work?',
                'What is HaiIntel\'s development philosophy?'
            ],
            category: 'technology'
        }
    ];

    // Return appropriate fallback based on query content
    if (normalizedQuery.includes('ai') || normalizedQuery.includes('technology') || normalizedQuery.includes('tech')) {
        return fallbackResponses[1];
    }

    return fallbackResponses[0];
};
