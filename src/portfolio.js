const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://bastiencherel.github.io',
  title: 'Bastien Cherel.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Bastien Cherel',
  role: '',
  pp: './assets/1692916852292.jpeg',
  description:
    'Enthusiastic about literature, letter games, classic cinematography, and music. I am a meticulous person who values rigor, precision and quick decision making. I constantly seek to expand my understanding of various subjects, I value Wikipedia as a key source of knowledge, for research and general culture purposes. I also program applications in my free time, and I keep track of financial markets, I manage my own portfolio, CAC40 and Cryptocurrency.',
    
  resume: 'cleanfolio/Resume_Cherel.pdf',
  social: {
    linkedin: 'https://linkedin.com/in/bastiencherel',
    github: 'https://github.com/BastienCherel',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Sentiment analysis',
    description:
      'Trip advisor commentary analysis, scrapping commentaries and sentiment analysis toxicity',
    stack: ['Python', 'OpenAI API'],
    sourceCode: 'https://github.com/BastienCherel/Web-scraping',
  },
  {
    name: 'Financial tracker',
    description:
      'Scrapping CAC40 components and monitor stock price and metrics embbedded in in a cloud cluster',
    stack: ['Bash', 'Python', 'Django'],
  },
  {
    name: 'Retirement simulator',
    description:
      'Simulation of retirement plans (PERECO, PERO,...) Synthesis generation of final outcomes per plan and expected revenue',
    stack: ['Python','Django', 'PostgreSQL'],
  },
  {
    name: 'Wealth management',
    description:
      'Track family movable immovable assets, ultimate aim to optimize investments',
    stack: ['Python','Django', 'PostgreSQL'],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'JPMorgan Hackathon',
    description:
      'Data science and analytics challenge to bring solutions to help nonprofit organizations',
    stack: ['R', 'Python'],
    sourceCode: '',
    livePreview: '',
  },
]

const educations = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    logo : './assets/logo_esilv_png_couleur.png',
    name: 'Ecole Supérieure d’Ingénieurs Léonard de Vinci',
    major: ['Master in Financial Engineering (1 year)','Master in Computer Science'],
    attachment: '',
    website: 'https://www.esilv.fr/en/',
    description:
      '',
  }
]
const professionnalexperiences = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    logo : './assets/bnp_paribas_arval_logo.jpeg',
    name: 'Arval BNP Paribas Group',
    role: 'Data Engineer',
    team: 'Corporate Asset Valuation',
    description:
      'Ad-hoc project to uniformize international vehicle models. Benchmark to compare vehicle prices and residual values at maturity of the contracts for ready for cotation vehicles',
    stack: ['Python', 'Dataiku', 'Tableau'],
  },
  {
    logo : './assets/boehringer_ingelheim_logo.jpeg',
    name: 'Boehringer Ingelheim GmbH',
    role: 'Data Analyst',
    team: 'Global Biostatistics and Data Science',
    description:
      'Workflow simulation with work-in-progress constraints, using queuing theory to compare and analyze the performance of different scenarios',
    stack: ['R'],
  },
  {
    logo : './assets/smsgroup_gmbh_logo-removebg-preview.png',
    name: 'Paul Wurth S.A.',
    role: 'Data Scientist',
    team: 'Asset Optimization',
    description:
      'Developed tailored solutions including steel structure weight modeling and a scalable dashboard designed for future data enhancement and time efficiency',
    stack: ['R', 'autoCAD', 'Excel'],
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'R',
  'PostgreSQL',
  'Django',
  'Dataiku',
  'Tableau',
  'Power BI',
  'Excel',
  'Bash',
  'LaTeX',
  'Git',
  'CI/CD',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'bastien.cherel@icloud.com',
}

export { header, about, projects, educations, professionnalexperiences, skills, contact }
