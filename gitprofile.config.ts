// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'PRBN65', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
            {
              title: 'PICASSO CONSULTANT PVT. LTD.',
              description: 'Volunteer for Lalitpur transport master plan survey (2017).',
              imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
              link: '#',
            },
            {
              title: 'MV DUGAR GROUP',
              description: 'Site engineer for multiple hydropower projects (2017–2018).',
              imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
              link: '#',
            },
            {
              title: 'Lila Gauri Engineering Consultancy',
              description: 'Senior engineer for DPR, valuation, and supervision (2019–Present).',
              imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
              link: '#',
            },
            {
              title: 'Opportunity Village Nepal',
              description: 'Project manager for building and water supply systems (2020–2021).',
              imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
              link: '#',
            },
            {
              title: 'AAC ITTA UDHYOG PVT. LTD.',
              description: 'Part-time project engineer for AAC block sites (2022–Present).',
              imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
              link: '#',
            },
            {
              title: 'Pokhara University',
              description: 'Assistant Professor, Civil Engineering (2022–2024).',
              imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
              link: '#',
            },
            {
              title: 'Informatics College Pokhara',
              description: 'Senior lecturer, BSc (Hons) Computing (2024–Present).',
              imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
              link: '#',
            },
            {
              title: 'Tribhuvan University (TU)',
              description: 'Part-time lecturer, Civil & Geomatics Engineering (2025–Present).',
              imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
              link: '#',
            },
          ],
    },
  },
  seo: { title: 'Portfolio of Parbin Banstola', description: '', imageURL: '' },
  social: {
    linkedin: '',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', 
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'arifszn',
    dev: 'arifszn',
    stackoverflow: '', 
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Autocad 2016 (Certified)',
    'SAP 2000 v15(Certified)',
    'Civil 3D (Certified)',
    'ArcGIS (Certified)',
    'Smart Road (Certified)',
    'MS Excel',
    'MS Word',
    'HTML',

  ],
  experiences: [
    {
      company: 'Civil co-ordinator',
      position: 'Worked as a civil co-ordinator in Advanced College of Engineering and Management organized by PACE (Project Association for Computer and Electronics) at Tech Bihani 3.0 (2016)',
      from: 'September 2016',
      to: 'Present',
      // companyLink: 'https://example.com',
    },
       {
      company: 'leader in Civil Modelling Competition',
      position: 'Worked as active participant and selected as leader in Civil Modelling Competition organized by CESS-NEPAL (Civil Engineering Students Society Nepal) in Pulchowk Campus (2016)',
      from: 'September 2016',
      to: 'Present',
      // companyLink: 'https://example.com',
    },
      {
      company: 'Worked as active participant ',
      position: 'Worked as active participant in BE Model Competition organized by CESS- NEPAL (Civil Engineering Students Society Nepal) in Pulchowk Campus (2017)',
      from: 'September 2017',
      to: 'Present',
      // companyLink: 'https://example.com',
    },
  ],
  certifications: [
    {
      name: 'Design and Estimate of Water Supply Project',
      body: 'Participated in three days training program on “Design and Estimate of Water Supply Project” organized by ACEM (Advanced College of Engineering and Management) (2016)',
    },
    {
      name: 'Fundamental of Valuation',
      body: 'Participated in one day training program on “Fundamental of Valuation” organized by KK Engineering and Construction (2020)',
    },
    {
      name: 'First Prize in inter-college civil project',
      body: 'Awarded as First Prize in inter-college civil project demonstration in Advanced College of Engineering and Management (ACEM) organized by PACE (Project Association for Computer and Electronics) on topic “Bubble Deck Technology” (2017)',
    },
    {
      name: 'Second prize in inter-college civil modelling competition',
      body:'Awarded as second prize in inter-college civil modelling competition Organized by PACE(Project Association for Computer and Electronics) on topic “Cable Car Ropeway System” (2016)'
    },
    {
      name:'Assessment of Household Cement Consumption Pattern in Pokhara Metropolitan City',
      body:'“Assessment of Household Cement Consumption Pattern in Pokhara Metropolitan City”, 1st International Conference on Latest Innovations in Sustainable Engineering and Technology Management 26th February 2021'
    },
    {
      name:'Assessment of Cement Consumption and Its Impacts on Soil Environment',
      body: "M.Sc. Dissertation on “Assessment of Cement Consumption and Its Impacts on Soil Environment” under supervision of Assoc. Prof. Kishor Kumar Shrestha",
    },

  ],
  educations: [
    {
      institution: 'Institute of engineering,Pashchimanchal Campus, Pokhara, Kaski',
      degree: 'MSc in Infrastructure Engineering and Management',
      from: '2020',
      to: '2022',
    },
    {
      institution: 'Bachelor in Civil Engineering (TU) ',
      degree: 'Advanced College of Engineering and Management (ACEM)',
      from: '2013',
      to: '2018',
    },
    {
      institution: '+2 Science (HSEB)',
      degree: 'Amarsingh Higher Secondary School (AHSS), Amarsinghchowk, Pokhara',
      from: '2013',
      to: '2018',
    },
        {
      institution: 'Bachelor in Civil Engineering (TU) ',
      degree: 'Advanced College of Engineering and Management (ACEM)',
      from: '2013',
      to: '2011',
    },
  ],
  publications: [
      {
        title: 'Assessment of Household Cement Consumption Pattern in Pokhara Metropolitan City',
        conferenceName: '',
        journalName: 'Journal of Advanced Research in Construction and Urban Architecture, 2021; 6(1): 12-20',
        authors: 'Banstola P, Bhandari BR, Mishra AK',
        link: '#',
        description: 'Study analyzing household cement consumption patterns in Pokhara Metropolitan City.',
      },
      {
        title: 'Assessment of Cement Consumption Pattern: A Case from Pokhara, Nepal',
        conferenceName: '',
        journalName: 'International Journal of Applied Engineering and Management Letters (IJAEML), 2021; 5(2): 26-37',
        authors: 'Prabin Banstola, Kishor Kumar Shrestha, Ishwor Thapa, A. K. Mishra',
        link: 'http://doi.org/10.5281/zenodo.5210930',
        description: 'Research assessing cement consumption trends and influencing factors in Pokhara, Nepal.',
      },
      {
        title: 'Environmental Impacts of Concrete in Chemical Parameters of Soil',
        conferenceName: '',
        journalName: 'Journal of Advanced Research in Civil and Environmental Engineering, 2021; 8(3&4): 9-17',
        authors: 'Banstola P, Shrestha KK, Thapa I, et al.',
        link: '#',
        description: 'Study on chemical impacts of concrete on soil quality and environmental parameters.',
      },
      {
        title: 'An Experimental Study on Strength of Concrete Due To Cold Joints',
        conferenceName: '',
        journalName: 'Journal of Advanced Research in Geoscience and Remote Sensing, 2021; 8(3&4): 1-7',
        authors: 'Ligal D, Baral NP, Timalsina HR, et al.',
        link: '#',
        description: 'Experimental evaluation of concrete strength variations caused by cold joints.',
      },
  ],

  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with ❤️`,

  enablePWA: true,
};

export default CONFIG;
