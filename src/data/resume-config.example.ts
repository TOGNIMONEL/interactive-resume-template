import type { ResumeConfig } from './types'

/**
 * This is an example configuration file.
 * Copy this file to `resume-config.ts` and fill in your own information.
 *
 * All text fields that support multiple languages use the `LocalizedString` format:
 * { en: "English text", fr: "Texte français" }
 *
 * Add as many languages as you need — just make sure to list them in `languages.available`.
 */
export const resumeConfig: ResumeConfig = {
  // ===== PERSONAL INFO =====
  personal: {
    name: 'Léonnel Monel TOGNI',
    // Auto-detected: just drop your photo or profile image in public/images/ (any .jpg, .png, .webp)
    // You can also set a specific path here to override auto-detection:
    photo: '/images/photo.jpg',
    photoBackEmoji: '👩‍💻', // Shown when clicking the photo (3D flip)
    title: {
      en: 'UI/UX Designer & Gestionnaire de projet digital',
      fr: 'UI/UX Designer & Gestionnaire de projet digital',
    },
    subtitle: {
      en: '3 years of experience',
      fr: '3 ans d\'expériences',
    },
    location: 'Cotonou, Bénin',
  },

  // ===== SEO (used in <head> meta tags) =====
  seo: {
    title: 'Léonnel Monel TOGNI — UI/UX Designer',
    description: 'Interactive resume of Monel Léonnel TOGNI, UI/UX Designer specializing in React and TypeScript.',
  },

  // ===== LANGUAGES =====
  languages: {
    default: 'en',
    available: ['en', 'fr'],
    labels: {
      en: 'EN',
      fr: 'FR',
    },
  },

  // ===== CONTACT =====
  contact: [
    { type: 'github', label: 'leonneltogni', href: 'https://github.com/TOGNIMONEL' },
    { type: 'linkedin', label: 'leonneltogni', href: 'https://www.linkedin.com/in/l%C3%A9onnel-monel-togni-79a661187?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { type: 'email', label: 'leonnel.togni@epitech.eu' },
    { type: 'phone', label: '+229 01 40 59 62 62' },
    { type: 'location', label: 'Cotonou, Bénin' },
  ],

  // ===== SKILLS =====
  skills: [
    {
      title: { en: 'Languages', fr: 'Langues' },
      type: 'languages',
      items: [
        { name: { en: 'French', fr: 'Français' }, level: { en: 'Native', fr: 'Natif' } },
        { name: { en: 'English', fr: 'Anglais' }, level: { en: 'Intermediate', fr: 'Intermédiaire' }, details: 'B2' },
      ],
    },
    {
      title: { en: 'Design', fr: 'Design' },
      type: 'badges',
      items: [
        { name: 'FIgma' },
        { name: 'Adobe XD' },
        { name: 'Photoshop' },
        { name: 'UX/UI' },
        { name: 'Userflow' },
        { name: 'Wireframes' },
        { name: 'Pixel Perfect' },
      ],
    },
    {
      title: { en: 'Frontend', fr: 'Frontend' },
      type: 'badges',
      items: [
        { name: 'Vue.JS' },
        { name: 'TypeScript' },
        { name: 'Angular' },
        { name: 'React' },
      ],
    },
    {
      title: { en: 'Methodologies', fr: 'Méthodologies' },
      type: 'text',
      items: [
        { name: { en: 'Agile/Scrum, Design Thinking, User-Centered Design (UCD), Design sprint', fr: 'Certifié Agile/Scrum, Design Thinking,User-Centered Design (UCD), Design sprint' } },
      ],
    },
  ],
  // ===== PROFESSIONAL EXPERIENCES =====
  experiences: [
    {
      id: 'company-a',
      company: { en: 'ADELABS', fr: 'ADELABS' },
      role: { en: 'Designer UI/UX • Digital project manager ', fr: 'Designer UI/UX • Chef de projet digital ' },
      type: { en: 'Permanent', fr: 'CDD' },
      period: { en: '2025 - 2026', fr: '2025 - 2026' },
      description: {
        en: 'Led the development of a SaaS platform used by 10k+ users. Built microservices architecture and modern React frontend.',
        fr: 'Coordination des équipes design et développement, avec une approche orientée performance, scalabilité et expérience utilisateur.',
      },
      techs: ['Figma', 'Photoshop', 'Pixel Perfect', 'Adobe XD'],
      isHighlighted: true,
      details: {
        context: {
          en: 'Designing interfaces in Figma using a pixel-perfect approach, ensuring complete fidelity between mockups and final implementation while respecting technical constraints.',
          fr: 'Conception d\'interfaces sur Figma avec une approche pixel-perfect, garantissant une fidélité absolue entre la maquette et l\'implémentation finale, tout en respectant les contraintes techniques.',
        },
        tasks: {
          en: [
            'High-Fidelity Design: Creation of Figma mockups using a pixel-perfect approach, ensuring seamless consistency between design and frontend implementation.',
            'Web Performance: Auditing and optimization of Google PageSpeed scores to ensure a smooth user experience and minimize bounce rate.',
            'Visibility & SEO: Implementation of SEO strategies, management of Google Business Profile listings, and deployment of structured data to maximize search engine ranking.',
            'Design System: Development of a reusable component library to ensure visual consistency across all platforms.',
            'Agile Management: End-to-end workflow management using Trello, from benchmark analysis to KPI validation.',
          ],
          fr: [
            'Conception haute fidélité : création de maquettes Figma avec une approche "Pixel Perfect", assurant une transition sans perte entre le design et l\'intégration.',
            '​Performance web : audit et optimisation des scores Google PageSpeed pour garantir une expérience fluide et un taux de rebond minimal.',
            '​Visibilité & SEO : mise en œuvre de stratégies de référencement naturel, gestion des fiches Google Business Profile et déploiement de données structurées pour maximiser le ranking.',
            '​Design system : élaboration d\'une bibliothèque de composants réutilisables pour une cohérence visuelle sur tous les supports.',
            '​Pilotage agile : gestion complète du workflow sous Trello, de l\'analyse du benchmark à la validation des KPI.',
          ],
        },
        env: {
          en: 'Figma / Photoshop / Adobe XD / Prototypage / SEO / Trello / Slack / Google Pagespeed / Google entreprise',
          fr: 'Figma / Photoshop / Adobe XD / Prototypage / SEO / Trello / Slack / Google Pagespeed / Google entreprise',
        },
      },
    },
    {
      id: 'company-b',
      company: { en: 'Ministry of Labour and Public Service', fr: 'Ministère du Travail et de la Fonction publique' },
       role: { en: 'Designer UI/UX • Digital project manager ', fr: 'Designer UI/UX • Chef de projet digital ' },
      type: { en: 'Internship', fr: 'Stage professionnel' },
      period: { en: '2024 - 2025', fr: '2024 - 2025' },
      description: {
        en: 'Strategic leadership and UX/UI design of institutional digital platforms within the IT Department of the Ministry of Labour and Public Service. Led the redesign of the administrative e-services portal and the official ministry website, adopting a user-centered, performance-driven, and accessibility-focused approach to public digital transformation.',
        fr: 'Pilotage stratégique et conception UX/UI des plateformes numériques institutionnelles au sein de la Direction des Services Informatiques. Coordination de la refonte du portail des démarches administratives et du site web ministériel, avec une approche centrée utilisateur, orientée performance, accessibilité et modernisation des services publics digitaux.',
      },
      techs: ['Figma', 'Photoshop', 'Pixel Perfect', 'Adobe XD'],
      details: {
        context: {
          en: 'As part of the public sector digital transformation initiative, I played a cross-functional role combining project management, product design, and technical coordination. The mission aimed to modernize access to administrative services, improve transparency, and optimize the performance of public digital platforms.',
          fr: 'Dans un contexte de transformation digitale du secteur public, j\'ai assuré un rôle transversal combinant gestion de projet, design produit et coordination technique. Cette mission visait à moderniser l\'accès aux services administratifs, améliorer la transparence et optimiser les performances des plateformes publiques.',
        },
        tasks: {
          en: [
            'Built 15+ client-facing web applications from scratch',
            'Created and maintained a shared design system used across all agency projects',
            'Implemented complex form workflows with multi-step validation',
            'Optimized web performance achieving 90+ scores on Core Web Vitals',
            'Integrated third-party APIs (payment, CRM, analytics)',
            'Set up Storybook documentation for reusable components',
            'Collaborated closely with UX designers to translate Figma mockups into pixel-perfect UIs',
          ],
          fr: [
            'Pilotage de Projet Digital : Coordination du cycle de vie des solutions e-services, de l\'analyse des besoins métiers à la mise en production des plateformes.',
            '​Gestion d\'Équipe & Agilité : Collaboration étroite avec le DSI et les équipes de développement en mode Scrum, assurant le suivi des sprints, la levée des points de blocage et le respect des délais ministériels.',
            'Conception & Vision Produit : Création de maquettes et prototypes interactifs pour valider les parcours utilisateur​s avec les directions métiers avant le développement.Conception & Vision Produit : Création de maquettes et prototypes interactifs pour valider les parcours utilisateur​s avec les directions métiers avant le développement.',
            '​Ingénierie de Données : Développement de tableaux de bord dynamiques pour la visualisation de données en temps réel, incluant des systèmes de filtres complexes pour l\'analyse par région/département.',
            'Optimisation Technique : Supervision des performances des bases de données SQL et des API REST,CRM, analytics',
            'Mise en place de la documentation Storybook pour les composants réutilisables',
            'Collaboration étroite avec les developpeurs pour traduire les maquettes Figma en interfaces pixel-perfect',
          ],
        },
        
       env: {
          en: 'Figma / Photoshop / Adobe XD / Prototypage / SEO / Trello / Slack / Google Pagespeed / Google entreprise',
          fr: 'Figma / Photoshop / Adobe XD / Prototypage / SEO / Trello / Slack / Google Pagespeed / Google entreprise',
        },
      },
    },
    {
      id: 'internship',
      company: { en: 'Future Studio', fr: 'Future Studio' },
      role: { en: 'Designer UI/UX', fr: 'Designer UI/UX' },
      type: { en: '', fr: 'Freelance' },
      period: { en: '2023 - 2024', fr: '2023 - 2024' },
      description: {
        en: 'Contributed to the development of a digital platform for sports communities, streamlining the organization, promotion, and management of online sporting events.',
        fr: 'Participation au développement d\'une plateforme digitale destinée aux communautés sportives, permettant l\'organisation, la promotion et la gestion d\'événements sportifs en ligne.',
      },
      techs: ['Figma', 'Photoshop', 'Pixel Perfect', 'Adobe XD'],
      details: {
        context: {
          en: 'Seed-stage startup driven by a cross-functional team of 5 contributors, building an innovative digital platform designed to streamline the organization, promotion, and management of online sporting events.',
          fr: 'Startup en phase d\'amorçage (seed stage), portée par une équipe restreinte et agile de 5 collaborateurs, concevant une plateforme digitale innovante dédiée à l\'organisation, la promotion et la gestion d\'événements sportifs en ligne.',
        },
        tasks: {
          en: [
            'Co-defined the product vision and strategic roadmap in close collaboration with the founders.',
            'Led end-to-end UX/UI design, delivering wireframes, high-fidelity mockups, and interactive prototypes to validate user experience.',
            'Developed and integrated core features enabling the organization, promotion, and management of online sporting events.',
            'Built a scalable Design System to ensure visual consistency and long-term product growth.',
            'Optimized performance and user experience to drive engagement and improve retention metrics.',
            'Implemented rapid Agile iterations, prioritizing features based on business impact and user feedback.',
            'Contributed to key architectural and technical decisions to ensure platform scalability.',
          ],
          fr: [
            'Co-conception de la vision produit et définition de la roadmap stratégique en collaboration avec les fondateurs.',
            'Conception UX/UI complète : wireframes, maquettes haute fidélité et prototypes interactifs pour valider l\'expérience utilisateur.',
            'Développement et intégration de fonctionnalités clés pour l\'organisation, la promotion et la gestion d\'événements sportifs.',
            'Structuration d\'un Design System évolutif pour garantir cohérence visuelle et scalabilité.',
            'Optimisation des performances et de l\'expérience utilisateur afin d\'augmenter l\'engagement et la rétention.',
            'Mise en place d\'itérations rapides en méthodologie Agile, avec priorisation des fonctionnalités selon l\'impact business.',
            'Participation aux décisions techniques structurantes pour assurer la scalabilité de la plateforme.',  
          ],
        },
        env: {
          en: 'Figma / Photoshop / Adobe XD / Prototypage / SEO / Trello / Slack / Google Pagespeed / Google entreprise',
          fr: 'Figma / Photoshop / Adobe XD / Prototypage / SEO / Trello / Slack / Google Pagespeed / Google entreprise',
        },
      },
    },
        {
      id: 'internship',
      company: { en: 'Sèmè City Open Park', fr: 'Sèmè City Open Park' },
      role: { en: 'Web Designer', fr: 'Web Designer' },
      type: { en: 'Freelance', fr: 'Freelance' },
      period: { en: '2022 - 2023', fr: '2022 - 2023' },
      description: {
        en: 'Digital transformation project aimed at optimizing user flow management and space utilization within Sèmè Two Open Innovation Park by redesigning the user experience of an open-source space management platform (Fab Manager).',
        fr: 'Projet de transformation digitale visant à optimiser la gestion des flux d\'usagers et l\'utilisation des espaces au sein du Sèmè Two Open Innovation Park, en repensant l\'expérience utilisateur d\'un logiciel open-source de gestion (Fab Manager).',
      },
      techs: ['Figma', 'Photoshop', 'Pixel Perfect', 'Adobe XD'],
      details: {
        context: {
          en: 'Contributed to UX/UI design and product experience enhancement within a Scrum framework (2-week sprints).',
          fr: 'Contribution à la conception UX/UI et à l\'amélioration de l\'expérience produit dans un environnement structuré en méthodologie Scrum (sprints de 2 semaines).',
        },
        tasks: {
          en: [
            'Contributed to the UX redesign of the platform to improve usability and user adoption',
            'Designed user-focused interfaces and interaction flows',
            'Collaborated within a Scrum framework (2-week sprints) alongside developers, Product Owner, and Scrum Master',
            'Participated in Sprint Planning, Daily Scrums, Reviews, and Retrospectives',
            'Contributed to KPI definition and sprint performance evaluation',
            'Supported structured Agile workflows using collaborative tools (Slack, iceScrum, Klaxoon, Google Workspace)',
          ],
          fr: [
            'Participation à la refonte de l\'expérience utilisateur du Fab Manager',
            'Conception de maquettes et supports UX pour améliorer l\'accessibilité et la compréhension des services',
            'Collaboration avec développeurs, Product Owner et Scrum Master en environnement Agile',
            'Contribution à la définition des KPIs de sprint et aux revues produit',
            'Participation aux cérémonies Scrum : Sprint Planning, Daily Scrum, Review et Rétrospective',
            'Structuration des workflows collaboratifs (Slack, iceScrum, Klaxoon, Google Workspace)',
          ],
        },
        env: {
          en: 'Figma / Photoshop / Adobe XD / Prototypage / SEO / Trello / Slack / Google Pagespeed / Google entreprise',
          fr: 'Figma / Photoshop / Adobe XD / Prototypage / SEO / Trello / Slack / Google Pagespeed / Google entreprise',
        },
      },
    },
  ],

  // ===== PROJECTS (optional) =====
  projects: [
    {
      id: 'project-a',
      title: { en: 'Asekkey', fr: 'Asekkey' },
      description: {
        en: 'Platform for subscribing to multi-risk home insurance, professional liability insurance, cyber insurance, and insurance for places of worship.',
        fr: 'Plateforme de souscription d\'assurance multirisque habitation, la responsabilité civile professionnelle, la cyber-assurance et l\'assurance des lieux de culte. ',
      },
      techs: ['Figma', 'Pixel Perfect'],
      url: 'https://asekkey.fr/',
    },
    {
      id: 'project-b',
      title: { en: 'AK PETROLEUM', fr: 'AK PETROLEUM' },
      description: {
        en: 'A website and an internal tool for managing and tracking sales at the stations.',
        fr: 'Un site et un outil interne de gestion et de suivies des ventes sur les stations',
      },
      techs: ['Figma', 'Pixel Perfect', 'Données structurées'],
      url: 'https://www.akpetroleumsa.com/',
    },
    {
      id: 'project-c',
      title: { en: 'La Cave du Bénin', fr: 'La Cave du Bénin' },
      description: {
        en: 'An e-commerce website for a company\'s wines and spirits.',
        fr: 'Un site de vente de vins et spiritueux pour une entreprise',
      },
      techs: ['Figma', 'Pixel Perfect', 'Données structurées'],
      url: 'https://www.lacavedubenin.bj/',
    },
    {
      id: 'project-d',
      title: { en: 'Association for Risk Management of Places of Worship', fr: 'Association du Risk Management des Lieux de Culte' },
      description: {
        en: 'The platform aims to support religious communities in France by helping them anticipate, prevent, and manage various safety and security risks — such as fire hazards, vandalism, and accidents — to protect worshippers, property, and the continuity of religious activities.',
        fr: 'Plateforme qui vise à accompagner les communautés religieuses en France pour anticiper, prévenir et gérer différents risques liés à la sécurité et à la protection des biens et des personnes, tels que les incendies, les actes de vandalisme ou les accidents, afin d\'assurer la sécurité des fidèles et la continuité des activités religieuses.',
      },
      techs: ['Figma', 'Pixel Perfect', 'Données structurées'],
      url: 'https://www.armlc.fr/',
    },
    {
      id: 'project-e',
      title: { en: 'Anonymous', fr: 'Anonyme' },
      description: {
        en: 'Dashboard for tracking and managing the escalation process of user needs.',
        fr: 'Tableau de bord de suivi et de traitement en escalade des besoins usagers',
      },
      techs: ['Figma', 'Pixel Perfect', 'Données structurées'],
      url: 'https://www.figma.com/design/UY5OQaQE834fpqW8We8Yu3/Refonte?node-id=0-1&t=8uSQZNc8bTzzwE9a-1',
    },
  ],

  // ===== EDUCATION =====
  education: [
    {
      school: { en: 'Coding Academy by EPITECH', fr: 'Coding Academy by EPITECH' },
      degree: { en: 'Frontend Developer', fr: 'Développeur Front-End' },
      specialty: { en: 'Web & Mobile Development', fr: 'Développement Web & Mobile' },
      period: '2024 - 2025',
    },
    {
      school: { en: 'ScrumStudy', fr: 'ScrumStudy' },
      degree: { en: 'Scrum Fundamentals Certificate', fr: 'Certification aux Fondamentaux de Scrum' },
      period: '2024 - 2025',
    },
     {
      school: { en: 'SEME CITY/PMI FRANCE', fr: 'SEME CITY/PMI FRANCE' },
      degree: { en: 'Agile Methodology Certification', fr: 'Certification maitrise Approche Agile ' },
      period: '2022 - 2023',
    },
     {
      school: { en: 'ESAE', fr: 'ESAE' },
      degree: { en: 'Bachelor of Arts in International Relations', fr: 'Licence en Relations Internationales' },
      period: '2014 - 2017',
    },
  ],

  // ===== HOBBIES (optional) =====
  hobbies: [
    {
      title: { en: 'PMI Volunteer', fr: 'PMI Bénévole' },
    },
    {
      title: { en: 'Travel', fr: 'Voyager' },
    },
    {
      title: { en: 'Service club', fr: 'Club service' },
      details: [
        { en: '10 years', fr: '10 ans' },
      ],
    },
    {
      title: { en: 'Basketball', fr: 'Basketball' },
      details: [
        { en: '15 years', fr: '15 ans' },
      ],
    },
  ],

  // ===== PDF (optional) =====
  // Auto-detected: just drop your PDF files in public/cv/fr/ and public/cv/en/
  // The download button will appear automatically — no config needed!
  // Uncomment below only if you need to override the auto-detection:
  // pdf: {
  //label: { en: 'Download PDF', fr: 'Télécharger le PDF' },
 // path: { en: '/cv/en/resume-en.pdf', fr: '/cv/fr/resume-fr.pdf' },
  //},

  // ===== THEME =====
  theme: {
    preset: 'warm', // 'minimal' | 'warm' | 'ocean' | 'forest' | 'slate' | 'lilac'
    // You can override individual colors:
    // colors: {
    //   primary: '#8B5A2B',
    //   primaryLight: '#D4A574',
    // },
  },

  // ===== UI LABELS =====
  labels: {
    sections: {
      contact: { en: 'CONTACT', fr: 'CONTACT' },
      skills: { en: 'SKILLS', fr: 'COMPÉTENCES' },
      experience: { en: 'PROFESSIONAL EXPERIENCE', fr: 'EXPÉRIENCES PROFESSIONNELLES' },
      education: { en: 'EDUCATION', fr: 'FORMATION' },
      projects: { en: 'PROJECTS', fr: 'PROJETS' },
      hobbies: { en: 'HOBBIES', fr: 'LOISIRS' },
    },
    experience: {
      mainTasks: { en: 'Main tasks:', fr: 'Tâches principales :' },
      moreTasks: { en: 'more tasks...', fr: 'autres tâches...' },
      training: { en: 'Training:', fr: 'Formations :' },
      techEnv: { en: 'Tech environment:', fr: 'Env. technique :' },
      technologies: { en: 'Technologies', fr: 'Technologies' },
    },
    actions: {
      clickHint: { en: 'Click on experiences to see more details', fr: 'Cliquez sur les expériences pour voir plus de détails' },
      switchTheme: { en: 'Toggle dark mode', fr: 'Changer le thème' },
      downloadPdf: { en: 'Download PDF', fr: 'Télécharger le PDF' },
    },
  },
}
