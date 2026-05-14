// Portfolio Data - Adarsh Sindhu Prabhan

export const PORTFOLIO_DATA = {
  name: 'Adarsh Sindhu Prabhan',
  title: 'Software Engineer | AI & Full Stack Developer | Cloud & Mobile App Enthusiast',
  description:
    'Software Engineering graduate specializing in Artificial Intelligence from Centennial College. I have experience in full-stack development, Android development, cloud computing, AI-based systems, and software solutions using modern technologies. Previously worked as a Junior Technical Analyst at the Ministry of Transportation. I enjoy building scalable applications, AI-driven solutions, cloud-based systems, and polished user experiences.',
  email: 'aadi.aadi621@gmail.com',
  phone: '+1 437-599-5737',
  location: 'Toronto, Ontario, Canada',
  github: 'https://github.com/adarshsprabhan',
  linkedin: 'https://www.linkedin.com/in/adarsh-s-prabhan-532871296',
  website: 'https://adarshprabhan.dev',
  resume: '/resume.pdf',
};

export const SKILLS = [
  {
    category: 'Programming Languages',
    items: ['Python', 'Java', 'Kotlin', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS'],
  },
  {
    category: 'Frameworks & Technologies',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Jetpack Compose', 'Node.js', 'Firebase', 'AWS', 'Chalice', 'REST APIs', 'Room Database'],
  },
  {
    category: 'Tools & Platforms',
    items: ['GitHub', 'GitHub Copilot', 'Power BI', 'VS Code', 'Android Studio', 'IntelliJ IDEA', 'Jira', 'Git'],
  },
  {
    category: 'Concepts & Specializations',
    items: ['Artificial Intelligence', 'Machine Learning', 'Cloud Computing', 'Full Stack Development', 'MVVM Architecture', 'Agile/SCRUM', 'Responsive Design', 'Accessibility', 'UI/UX Design'],
  },
];

export const EXPERIENCE = [
  {
    role: 'Junior Technical Analyst (Co-op / Contract)',
    company: 'Ministry of Transportation (OPS)',
    duration: 'Jan. 2026 – May 2026',
    description: 'Actively working on AI/NLP-driven projects leveraging advanced NLP techniques.',
    highlights: [
      'Actively working on an AI/NLP-driven project using BERT, spaCy, and Stanza to extract, analyze, and structure unstructured text data for business insights',
      'Applying NLP preprocessing, tokenization, entity recognition, and model fine-tuning to improve accuracy and usability of analytical outputs',
      'Retrieve, preprocess, and analyze SQL database data to support backend and analytical functionality',
      'Preparing meeting notes, summaries, and communication materials to support coordination across technical and business teams',
      'Participate in Agile sprints, architectural discussions, daily stand-ups, and documentation using Git, Azure DevOps, and Jira',
      'Assisting teams with organizing and updating documentation, file structures, and internal records to support information management activities within the division',
    ],
  },
  {
    role: 'Junior Technical Analyst (Co-op / Contract)',
    company: 'Ministry of Transportation (OPS)',
    duration: 'Sept. 2024 – Dec. 2024',
    description: 'Contributed to enterprise application modernization and backend reporting services.',
    highlights: [
      'Contributed to enterprise application modernization within OPS by converting legacy reporting logic into maintainable Java modules',
      'Developed UI components using HTML/CSS and deploy web applications via Apache Tomcat',
      'Extracted and reviewed SQL data to support reporting, data validation, and basic analysis for backend processes',
      'Designed and implemented backend reporting services, ensuring scalability, performance, and compliance with OPS standards',
      'Created workflow diagrams and process documentation to improve clarity of systems and support modernization efforts',
      'Logged and tracked technical issues/tickets, ensuring thorough follow-up and accurate documentation aligned with service expectations',
    ],
  },
  {
    role: 'Developer (Co-op)',
    company: 'Scriptics',
    duration: 'May 2024 - Aug. 2024',
    description: 'Assisted in documenting workflows and supporting process improvement initiatives.',
    highlights: [
      'Assisted in documenting workflows, operational guides, and process diagrams to support process clarity and knowledge sharing',
      'Reviewed data and workflows to identify gaps and support reporting improvement initiatives',
      'Prepared onboarding documentation, organized files, and supported client teams through clear instructions and structured materials',
      'Tracked issues and updates in Jira, helping maintain accurate documentation and version control',
      'Coordinated Agile activities, ensuring project documentation remained up to date and accessible',
    ],
  },
  {
    role: 'Front Desk Associate',
    company: 'Athletic & Wellness Centre, Centennial College',
    duration: 'Aug 2024 – Jan 2026',
    description: 'Provided customer service and managed operations at the wellness center.',
    highlights: [
      'Respond to in-person, phone, and email inquiries, providing accurate information and resolving issues professionally',
      'Book appointments and sessions, coordinate schedules, and support daily operations',
      'Process payments, memberships, and transactions using POS systems, ensuring accuracy',
      'Maintain organized records and ensure facilities meet cleanliness and safety standards',
      'Work collaboratively with staff to support a welcoming and efficient service environment',
    ],
  },
];

export const PROJECTS = [
  {
    title: 'AI Tutor (Conversational Learning Assistant)',
    description:
      'AI-powered tutoring system using LangGraph and LangChain to manage multi-step reasoning and conversational workflows.',
    tech: ['LangGraph', 'LangChain', 'PostgreSQL', 'Python', 'AI/ML'],
    highlights: [
      'Designed and developed an AI-powered tutoring system using LangGraph and LangChain to manage multi-step reasoning and conversational workflows',
      'Implemented prompt scaffolding techniques to guide users through structured learning and problem-solving',
      'Managed data storage structures using PostgreSQL for conversation history and metadata organization',
    ],
    featured: true,
  },
  {
    title: 'Virtual Assistant (NLP & Speech Processing)',
    description:
      'Python-based voice and text assistant using PyTorch for natural language understanding and speech recognition.',
    tech: ['PyTorch', 'Python', 'NLP', 'Speech Recognition', 'APIs'],
    highlights: [
      'Developed a Python-based voice and text assistant using PyTorch for natural language understanding and speech recognition',
      'Collected and organized training data, applying preprocessing and documentation practices',
      'Integrated external APIs for real-time weather and news, delivering a conversational AI interface',
    ],
    featured: true,
  },
  {
    title: 'AI Cover Letter Generator (MERN Stack)',
    description:
      'Full-stack web application using MongoDB, Express, React, and Node.js to generate AI-tailored cover letters.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'REST APIs'],
    highlights: [
      'Built a full-stack web application using MongoDB, Express, React, and Node.js to generate AI-tailored cover letters',
      'Designed and tested REST APIs, optimized frontend responsiveness, and performed manual QA testing',
      'Supported frontend and backend integration through clear records of requirements and system behavior',
    ],
    featured: true,
  },
  {
    title: 'Personal Finance Tracker (C# ASP.NET)',
    description:
      'Secure financial management system using C# ASP.NET and SQL Server for income/expense tracking.',
    tech: ['C#', 'ASP.NET', 'SQL Server', 'Unit Testing'],
    highlights: [
      'Created a secure financial management system using C# ASP.NET and SQL Server',
      'Implemented income/expense tracking, unit testing, and query optimization for scalability',
    ],
  },
  {
    title: 'Med-Hub Healthcare System (Team Lead)',
    description:
      'Healthcare management software for underserved Ontario communities, developed collaboratively in an Agile SCRUM team.',
    tech: ['Agile/SCRUM', 'UML', 'ERD', 'Jira', 'System Design'],
    highlights: [
      'Led an Agile SCRUM team to develop healthcare management software for underserved Ontario communities',
      'Designed system architecture, UML diagrams, ERDs, and coordinated sprint execution using Jira',
    ],
  },
];

export const EDUCATION = [
  {
    school: 'Centennial College',
    program: 'Software Engineering Technology — Artificial Intelligence',
    type: 'Advanced Diploma',
    year: 2024,
    areas: [
      'Artificial Intelligence',
      'Software Development',
      'Mobile App Development',
      'Cloud Computing',
      'Database Systems',
      'Machine Learning',
      'Web Development',
    ],
  },
];

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    icon: 'github',
    url: 'https://github.com/adarshsprabhan',
    color: 'hover:text-gray-400',
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    url: 'https://www.linkedin.com/in/adarsh-s-prabhan-532871296',
    color: 'hover:text-blue-400',
  },
  {
    name: 'Email',
    icon: 'mail',
    url: 'mailto:aadi.aadi621@gmail.com',
    color: 'hover:text-red-400',
  },
];
