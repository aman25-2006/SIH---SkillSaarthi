export const demoProfile = {
  name: 'Aman Kumar',
  educationLevel: 'BCA',
  currentCourse: 'BCA Student',
  currentSkills: ['Python', 'C', 'Java Basics', 'SQL Basics', 'Git'],
  interests: ['Software Development', 'Problem Solving', 'Projects'],
  careerGoal: 'Software Developer',
  experienceLevel: 'Beginner-Intermediate',
  weeklyLearningTime: '10-12 hrs',
  location: 'Lucknow, Uttar Pradesh',
  projectsCompleted: 1,
  certifications: 2,
  applications: 5,
  learningStreak: 12,
}

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Roadmap', path: '/student/roadmap' },
  { label: 'Opportunity Radar', path: '/student/internships' },
  { label: 'Saarthi AI', path: '/student/mentor' },
]

export const studentNav = [
  { label: 'Dashboard', path: '/student/dashboard' },
  { label: 'My Skills', path: '/student/skill-gap' },
  { label: 'Career Roadmap', path: '/student/roadmap' },
  { label: 'Learning Hub', path: '/student/assessment' },
  { label: 'Opportunity Radar', path: '/student/internships' },
  { label: 'Apprenticeships', path: '/student/internships' },
  { label: 'Projects', path: '/student/resume' },
  { label: 'Resume & Interview', path: '/student/resume' },
  { label: 'Saarthi AI', path: '/student/mentor' },
  { label: 'College Insights', path: '/college/dashboard' },
  { label: 'Settings', path: '/settings' },
]

export const stats = [
  { label: 'Personalized learner journeys', value: 285000, suffix: '+' },
  { label: 'Districts mapped', value: 612, suffix: '' },
  { label: 'Opportunity matches', value: 48000, suffix: '+' },
  { label: 'Partner colleges', value: 1260, suffix: '+' },
]

export const testimonials = [
  {
    name: 'Ritika Verma',
    role: 'B.Sc Student, Rewa',
    quote: 'Mujhe pehli baar samajh aaya ki TCS ke liye kaunse skills chahiye. Platform ne mera confidence badhaya.',
  },
  {
    name: 'Aman Khan',
    role: 'Diploma Student, Gaya',
    quote: 'Hindi me AI mentor se baat karna easy tha. Ab weekly roadmap follow karke internship ke liye ready ho raha hoon.',
  },
  {
    name: 'Placement Cell, Govt College',
    role: 'College Admin',
    quote: 'College dashboard se stream-wise gap clear hua. Hamne targeted training batches launch kiye.',
  },
]

export const publicJourney = [
  'Current Skills',
  'AI Skill Analysis',
  'Personalized Roadmap',
  'Learning + Projects',
  'Apprenticeships & Internships',
  'Career Ready',
]

export const faq = [
  {
    q: 'Kya yeh platform Hindi-medium students ke liye hai?',
    a: 'Bilkul. English, Hindi, aur Hinglish guidance available hai.',
  },
  {
    q: 'Kya isme free career assessment hai?',
    a: 'Haan, core readiness assessment and skill-gap report student dashboard me included hai.',
  },
  {
    q: 'Kya local internships bhi milengi?',
    a: 'Remote, district-level, apprenticeship, aur government-linked opportunities sab dikhte hain.',
  },
]

export const careerCatalog = {
  'Software Developer': {
    title: 'Software Developer',
    summary: 'Build web, mobile, and product engineering skills for entry-level software roles.',
    requiredSkills: [
      { name: 'Python', weight: 12, aliases: ['python'] },
      { name: 'Data Structures', weight: 18, aliases: ['data structures', 'dsa', 'algorithms'] },
      { name: 'SQL', weight: 15, aliases: ['sql', 'database'] },
      { name: 'REST APIs', weight: 15, aliases: ['api', 'apis', 'rest api', 'rest apis'] },
      { name: 'Testing', weight: 12, aliases: ['testing', 'unit testing', 'qa'] },
      { name: 'Git', weight: 8, aliases: ['git', 'github'] },
      { name: 'JavaScript Basics', weight: 10, aliases: ['javascript', 'js'] },
      { name: 'Project Building', weight: 10, aliases: ['project', 'projects'] },
    ],
    project: 'Student Productivity and Career Dashboard',
    projectOutcome: 'A polished demo app that proves problem solving, APIs, state handling, and UI thinking.',
  },
  'Data Analyst': {
    title: 'Data Analyst',
    summary: 'Turn data into business insights with spreadsheets, SQL, dashboards and storytelling.',
    requiredSkills: [
      { name: 'SQL', weight: 18, aliases: ['sql', 'database'] },
      { name: 'Excel', weight: 15, aliases: ['excel', 'spreadsheets'] },
      { name: 'Python', weight: 12, aliases: ['python'] },
      { name: 'Dashboards', weight: 15, aliases: ['dashboard', 'visualization', 'power bi'] },
      { name: 'Statistics', weight: 12, aliases: ['statistics', 'stats'] },
      { name: 'Communication', weight: 10, aliases: ['communication', 'presentation'] },
      { name: 'Problem Solving', weight: 10, aliases: ['problem solving', 'analysis'] },
      { name: 'Projects', weight: 8, aliases: ['project', 'projects'] },
    ],
    project: 'Campus Placement Insights Dashboard',
    projectOutcome: 'A decision dashboard that helps a college understand placements, skills and training gaps.',
  },
  'Digital Marketing': {
    title: 'Digital Marketing',
    summary: 'Create content, run campaigns, and analyze growth across social and search channels.',
    requiredSkills: [
      { name: 'Content Writing', weight: 15, aliases: ['content', 'writing'] },
      { name: 'SEO', weight: 18, aliases: ['seo', 'search'] },
      { name: 'Analytics', weight: 15, aliases: ['analytics', 'reporting'] },
      { name: 'Social Media', weight: 15, aliases: ['social media', 'instagram', 'campaigns'] },
      { name: 'Creativity', weight: 12, aliases: ['creative', 'design thinking'] },
      { name: 'Communication', weight: 12, aliases: ['communication', 'presentation'] },
      { name: 'Project Building', weight: 13, aliases: ['project', 'projects'] },
    ],
    project: 'Campus Brand Growth Sprint',
    projectOutcome: 'A campaign plan, content calendar and result tracker for a real or mock local brand.',
  },
  'UI/UX Designer': {
    title: 'UI/UX Designer',
    summary: 'Design usable, accessible digital experiences with research, wireframes and prototypes.',
    requiredSkills: [
      { name: 'Figma', weight: 18, aliases: ['figma'] },
      { name: 'User Research', weight: 15, aliases: ['research', 'user research'] },
      { name: 'Prototyping', weight: 15, aliases: ['prototype', 'prototyping'] },
      { name: 'Accessibility', weight: 12, aliases: ['accessibility', 'a11y'] },
      { name: 'Visual Design', weight: 15, aliases: ['visual', 'design'] },
      { name: 'Communication', weight: 10, aliases: ['communication', 'presentation'] },
      { name: 'Projects', weight: 15, aliases: ['project', 'projects'] },
    ],
    project: 'Accessible Career Journey Prototype',
    projectOutcome: 'A clickable prototype showing journey mapping, accessibility, and user-focused flows.',
  },
}

export const opportunityCatalog = [
  {
    title: 'Software Development Apprenticeship',
    organization: 'NSDC Partner Network',
    type: 'Apprenticeship',
    location: 'Remote + Hybrid',
    deadline: '12 Sep 2026',
    eligibility: 'BCA, BSc, Diploma, graduates',
    skills: ['Python', 'Git', 'SQL', 'Projects'],
    careerTags: ['Software Developer'],
    demoNote: 'Demo opportunity for product presentation.',
  },
  {
    title: 'Product Engineering Internship',
    organization: 'SkillGrid Labs',
    type: 'Internship',
    location: 'Remote',
    deadline: '30 Aug 2026',
    eligibility: 'Students with one project',
    skills: ['Python', 'REST APIs', 'Git'],
    careerTags: ['Software Developer', 'Data Analyst'],
    demoNote: 'Mock internship aligned to the demo career path.',
  },
  {
    title: 'Campus Data Challenge',
    organization: 'National Data Mission',
    type: 'Hackathon',
    location: 'Hybrid',
    deadline: '18 Sep 2026',
    eligibility: 'Teams of 1-4',
    skills: ['SQL', 'Dashboards', 'Projects'],
    careerTags: ['Data Analyst'],
    demoNote: 'Use for SIH presentation and ecosystem storytelling.',
  },
  {
    title: 'Job Readiness Certification',
    organization: 'Skill India Learning Hub',
    type: 'Certification',
    location: 'Online',
    deadline: 'Rolling',
    eligibility: 'Open enrollment',
    skills: ['Communication', 'Testing', 'Git'],
    careerTags: ['Software Developer', 'UI/UX Designer'],
    demoNote: 'Fast-track confidence and interview preparation.',
  },
  {
    title: 'Regional Apprenticeship Drive',
    organization: 'District Skill Office',
    type: 'Government Program',
    location: 'Lucknow',
    deadline: '05 Oct 2026',
    eligibility: 'Freshers and early career learners',
    skills: ['Communication', 'Projects', 'SQL'],
    careerTags: ['Software Developer', 'Data Analyst'],
    demoNote: 'Helps show local and government-linked discovery.',
  },
  {
    title: 'Scholarship for Digital Careers',
    organization: 'Future Bharat Foundation',
    type: 'Scholarship',
    location: 'Online',
    deadline: '21 Sep 2026',
    eligibility: 'Students from low-income backgrounds',
    skills: ['Learning streak', 'Projects'],
    careerTags: ['Software Developer', 'Digital Marketing', 'UI/UX Designer'],
    demoNote: 'Lightweight scholarship card for the demo radar.',
  },
]

function normalize(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim()
}

function matchCoverage(skill, currentSkills) {
  const normalizedCurrent = currentSkills.map((item) => normalize(item))
  const aliases = [skill.name, ...(skill.aliases || [])].map((item) => normalize(item))
  if (aliases.some((alias) => normalizedCurrent.includes(alias))) return 1
  if (aliases.some((alias) => normalizedCurrent.some((item) => item.includes(alias) || alias.includes(item)))) return 0.55
  return 0
}

export function getCareerAnalysis(profile = demoProfile, goal = profile.careerGoal) {
  const career = careerCatalog[goal] || careerCatalog['Software Developer']
  const currentSkills = profile.currentSkills || []

  const evaluatedSkills = career.requiredSkills.map((skill) => {
    const coverage = matchCoverage(skill, currentSkills)
    const status = coverage >= 0.9 ? 'strong' : coverage >= 0.4 ? 'improve' : 'missing'
    return { ...skill, coverage, status }
  })

  const strongSkills = evaluatedSkills.filter((skill) => skill.status === 'strong').map((skill) => skill.name)
  const improvingSkills = evaluatedSkills.filter((skill) => skill.status === 'improve').map((skill) => skill.name)
  const missingSkills = evaluatedSkills.filter((skill) => skill.status === 'missing').map((skill) => skill.name)

  const readiness = Math.min(96, Math.max(28, Math.round(42 + strongSkills.length * 10 + improvingSkills.length * 4 - missingSkills.length * 2)))
  const skillGapPercent = Math.max(0, 100 - readiness)
  const topPrioritySkills = [...missingSkills, ...improvingSkills].slice(0, 3)
  const apprenticeshipReadiness = Math.min(95, readiness + Math.max(3, strongSkills.length * 3 - missingSkills.length))
  const gapLabel = skillGapPercent > 50 ? 'High gap' : skillGapPercent > 30 ? 'Moderate gap' : 'Low gap'

  return {
    goal,
    career,
    evaluatedSkills,
    strongSkills,
    improvingSkills,
    missingSkills,
    readiness,
    skillGapPercent,
    topPrioritySkills,
    apprenticeshipReadiness,
    gapLabel,
    nextAction: topPrioritySkills[0] ? `Start with ${topPrioritySkills[0]} this week.` : `Build your project and prepare for applications.`,
  }
}

export function buildRoadmap(profile = demoProfile, analysis = getCareerAnalysis(profile)) {
  const weeks = analysis.readiness >= 80 ? 8 : 10
  const projectName = careerCatalog[analysis.goal]?.project || 'Career Impact Project'

  return [
    {
      phase: 'Phase 1',
      title: 'Programming foundation refresh',
      duration: '2 weeks',
      progress: 85,
      tasks: ['Revisit Python basics', 'Clean up Git workflow', 'Set a weekly learning routine'],
      resources: ['Practice notes', 'GitHub mini-workflow', 'Short coding exercises'],
    },
    {
      phase: 'Phase 2',
      title: 'Close the core skill gaps',
      duration: '2 weeks',
      progress: 60,
      tasks: ['Strengthen SQL fundamentals', 'Learn REST API concepts', 'Complete one guided lab'],
      resources: ['SQL drills', 'API examples', 'Recorded walkthroughs'],
    },
    {
      phase: 'Phase 3',
      title: 'Data structures sprint',
      duration: '3 weeks',
      progress: 25,
      tasks: ['Arrays and strings', 'Stacks and queues', '2-3 weekly problems'],
      resources: ['Problem bank', 'Revision cheatsheet', 'Mock test'],
    },
    {
      phase: 'Phase 4',
      title: 'Build the proof project',
      duration: '2 weeks',
      progress: 15,
      tasks: [projectName, 'Add dashboards and polished UI', 'Write a short case study'],
      resources: ['Figma sketch', 'Starter repo', 'Project checklist'],
    },
    {
      phase: 'Phase 5',
      title: 'Apprenticeship readiness',
      duration: '1 week',
      progress: 10,
      tasks: ['Resume tune-up', 'Interview prep', 'Apply to best match opportunities'],
      resources: ['ATS resume', 'Mock interview questions', 'Opportunity shortlist'],
    },
  ].slice(0, weeks === 8 ? 4 : 5)
}

export function getOpportunityMatches(profile = demoProfile, analysis = getCareerAnalysis(profile)) {
  const currentSkills = profile.currentSkills || []
  const goal = analysis.goal

  return opportunityCatalog
    .map((item) => {
      const overlap = item.skills.filter((skill) => {
        const normalizedSkill = normalize(skill)
        return currentSkills.some((current) => normalize(current).includes(normalizedSkill) || normalizedSkill.includes(normalize(current)))
      })
      const careerBoost = item.careerTags.includes(goal) ? 16 : 4
      const missingPenalty = Math.max(0, 12 - overlap.length * 4)
      const matchPercent = Math.min(98, Math.max(46, Math.round(analysis.readiness + careerBoost + overlap.length * 5 - missingPenalty)))
      return {
        ...item,
        matchPercent,
        overlap,
        whyMatch: overlap.length
          ? `You already match ${overlap.join(', ')}. Strengthening ${analysis.topPrioritySkills[0] || 'your project'} will improve the fit.`
          : `This is aligned with your target career and is a good next-step opportunity.`,
      }
    })
    .sort((left, right) => right.matchPercent - left.matchPercent)
}

export function getDashboardMetrics(profile = demoProfile, analysis = getCareerAnalysis(profile), roadmap = buildRoadmap(profile, analysis)) {
  const skillProgress = Math.round((analysis.strongSkills.length * 100 + analysis.improvingSkills.length * 55) / Math.max(1, analysis.evaluatedSkills.length))

  return {
    careerReadiness: analysis.readiness,
    skillProgress: Math.min(100, skillProgress),
    roadmapCompletion: roadmap[0]?.progress ? Math.round((roadmap[0].progress + roadmap[1]?.progress + 25) / 3) : 0,
    projectsCompleted: profile.projectsCompleted || 0,
    certifications: profile.certifications || 0,
    applications: profile.applications || 0,
    learningStreak: profile.learningStreak || 0,
    xp: 1460 + analysis.readiness * 8,
    badges: [analysis.readiness >= 60 ? 'Career Builder' : 'Getting Started', analysis.strongSkills.length >= 2 ? 'Skill Anchor' : 'Momentum Seeker', roadmap.length >= 4 ? 'Roadmap Runner' : 'Focus Sprint'],
  }
}

export function getResumeGuidance(profile = demoProfile, analysis = getCareerAnalysis(profile)) {
  const career = careerCatalog[analysis.goal] || careerCatalog['Software Developer']

  return {
    summary: `${profile.name} is a ${profile.educationLevel} learner targeting ${analysis.goal}. Strong on ${analysis.strongSkills.join(', ')} with clear work needed on ${analysis.topPrioritySkills.join(', ')}.`,
    suggestions: [
      `Lead with a project around ${career.project}.`,
      `Add measurable outcomes for ${analysis.strongSkills[0] || 'your strongest skill'}.`,
      'Keep the resume to one page with ATS-friendly keywords.',
    ],
    interviewQuestions: [
      `Tell me about the ${career.project} project.`,
      `How would you improve your weakest skill: ${analysis.topPrioritySkills[0] || 'SQL'}?`,
      `Explain a time you used ${analysis.strongSkills[0] || 'Python'} to solve a problem.`,
    ],
    readiness: Math.min(95, analysis.readiness + 6),
  }
}

export function getAIReply(profile = demoProfile, prompt = '', analysis = getCareerAnalysis(profile)) {
  const text = prompt.toLowerCase()
  const career = careerCatalog[analysis.goal] || careerCatalog['Software Developer']

  if (text.includes('learn next') || text.includes('priority') || text.includes('what should i learn')) {
    return {
      title: 'Learn next',
      message: `Focus on ${analysis.topPrioritySkills.join(', ')} first. That will move your ${analysis.goal} readiness from ${analysis.readiness}% upward quickly.`,
      chips: analysis.topPrioritySkills,
    }
  }

  if (text.includes('apprentice') || text.includes('internship') || text.includes('ready')) {
    return {
      title: 'Opportunity readiness',
      message: `You are ${analysis.apprenticeshipReadiness}% apprenticeship-ready. Complete ${analysis.topPrioritySkills[0] || 'your project'} and apply to the top match opportunities next.`,
      chips: ['Apprenticeship', 'Internship', 'Project'],
    }
  }

  if (text.includes('project')) {
    return {
      title: 'Project recommendation',
      message: `Build ${career.project}. It is aligned to ${analysis.goal} and will strengthen your resume, roadmap, and match score.`,
      chips: [career.project, 'Resume', 'Demo'],
    }
  }

  if (text.includes('resume') || text.includes('interview')) {
    return {
      title: 'Resume and interview prep',
      message: 'Keep your resume compact, place skills first, and prepare 3 project stories plus 3 technical answers for interviews.',
      chips: ['ATS resume', 'Mock interview', 'Project story'],
    }
  }

  return {
    title: 'Saarthi AI',
    message: `For ${profile.name}, the best next step is ${analysis.nextAction} Your current target is ${analysis.goal} and the fastest win is to close the top gap, then ship the project.`,
    chips: analysis.topPrioritySkills.length ? analysis.topPrioritySkills : ['Roadmap', 'Project', 'Opportunity'],
  }
}
