// gitprofile.config.js

const config = {
  github: {
    username: 'riteshf', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'riteshfirodiya',
    twitter: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // format: userid/username
    website: 'https://riteshf.github.io',
    phone: '',
    email: 'firodiya.ritesh@gmail.com',
  },
  resume: {
    fileUrl: 'resume.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Typescript',
    'React.js',
    'Node.js',
    'Deno',
    'MongoDB',
    'PostgreSQL',
    'Git',
    'ReactNative',
    'Chakra-UI',
    'CSS',
    'Antd',
    'Tailwind',
    'MUI',
  ],
  experiences: [
    {
      company: 'Masai School',
      position: 'SDE-3',
      from: 'October 2021',
      to: 'Present',
      companyLink: 'https://masaischool.com',
    },
    {
      company: 'Swiggy',
      position: 'Senior Software Engineer (contact employee by Recro)',
      from: 'November 2020',
      to: 'September 2021',
      companyLink: 'https://www.swiggy.com/',
    },
    {
      company: 'Globant',
      position: 'Senior Software  Engineer',
      from: 'September 2019',
      to: 'November 2020',
      companyLink: 'https://www.globant.com/',
    },
    {
      company: 'Confluxsys',
      position: 'Software  Engineer',
      from: 'June 2017',
      to: 'September 2019',
      companyLink: 'http://www.confluxsys.com/confluxsys/',
    },
  ],
  education: [
    {
      institution: 'P.V.G. College of Engineering and Technology',
      degree: 'Bachelor in Computer Engineering',
      from: '2013',
      to: '2017',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'riteshf', // to hide blog section, keep it empty
  //   limit: 3, // How many posts to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'business',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

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
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
