// ============================================================
//  EDIT YOUR CONTENT HERE
//  This is the only file you need to touch to update the site.
// ============================================================

import {
  Profile,
  LanguageIcon,
  CareerEntry,
  SkillGroup,
  BeyondWorkEntry,
  EducationEntry,
} from "./types";

export const profile: Profile = {
  name: "Ashley Hebard",
  title: "Software Engineer",
  // One clean sentence for the hero/intro. Keep it short.
  tagline:
    "Experienced software engineer who loves building clean, reliable products with Python, Django, and React",
  // Path to your resume file. Drop your real file into the /public folder
  // (e.g. public/resume.pdf) and update this path. Currently wired to a
  // placeholder so the download button already works.
  resumeUrl: "resume.pdf",
  email: "ash.hebard@gmail.com",
  github: "https://github.com/ahebard/",
  linkedin: "https://linkedin.com/in/ahebard/",
};

// Language icons shown under the intro (like the reference site).
// Each `icon` points to an SVG in /public/icons. Add/remove freely.
export const languageIcons: LanguageIcon[] = [
  { name: "Python", icon: "icons/python.svg" },
  { name: "Django", icon: "icons/django.svg" },
  { name: "JavaScript", icon: "icons/javascript.svg" },
  { name: "React", icon: "icons/react.svg" },
];

export const about: string[] = [
  "I'm a software engineer with 8+ years of experience building full-stack applications with Python, Django, React, and AWS. I enjoy learning new technologies, tackling unfamiliar technical challenges, and building reliable systems that scale. My work has spanned healthcare analytics platforms, studio production tools, and customer-facing SaaS products.",
];

// Each entry is one company in your career timeline.
// - `logo` points to an SVG/PNG in /public/icons. Drop in a real company
//   logo and update the path. Defaults to a placeholder.
// - `positions` is an array of roles you held at that company.
// - `tools` are little pills under the company name to highlight what you
//   worked with at that job. Add/remove freely.
export const career: CareerEntry[] = [
  {
    company: "Mangomint",
    logo: "icons/mangomint_logo.jpg",
    tools: [
      "React",
      "TypeScript",
      "Kotlin",
      "Swift",
      "PostgreSQL",
      "AWS",
      "Twilio",
      "Stripe",
      "Datadog",
    ],
    positions: [
      {
        period: "June 2025 - Present",
        role: "Senior Software Developer",
        points: [
          "Building customer-facing communication and business-management software for the beauty and wellness industry.",
          "Key Project: Helped launch Mangomint Connect, a communications platform used by more than 2,000 businesses. Contributed features across web, iOS, Android, and backend systems, including VoIP calling, phone-number porting workflows, onboarding improvements, and international calling billing integrations as adoption grew from roughly 9,000 to more than 100,000 monthly calls.",
        ],
      },
    ],
  },
  {
    company: "The Walt Disney Company",
    logo: "icons/dtva2.jpg",
    tools: [
      "Python",
      "Django",
      "React",
      "TypeScript",
      "MySQL",
      "AWS S3",
      "Docker",
      "GraphQL",
      "Nginx",
    ],
    positions: [
      {
        period: "March 2024 - June 2025",
        role: "Senior Software Developer",
        points: [
          "Built internal software supporting animation studio production workflows.",
          "Key Project: Designed and built the initial React and Django platform used to apply and manage visual and forensic watermarks on large video assets. Developed media-upload workflows backed by AWS S3 and built administrative tooling for user and permission management.",
        ],
      },

      {
        period: "November 2021 - March 2024",
        role: "Software Developer",
        points: [
          "Developed internal web applications, APIs, and shared platform services.",
          "Key Project: Led a major redesign of a studio-tracking application used by production teams. Reworked frontend and backend architecture, improving page-load performance by more than 200% while adding advanced filtering, search, and reporting capabilities.",
        ],
      },
      {
        period: "September 2019 - November 2021",
        role: "Associate Software Developer",
        points: [
          "Contributed to internal applications and engineering tooling across multiple teams.",
          "Key Project: Created and maintained a reusable Django project template containing Docker, Nginx, deployment, and CI/CD infrastructure. The framework became the starting point for new applications and helped standardize development practices across the team.",
        ],
      },
    ],
  },
  {
    company: "First Job Inc.",
    logo: "icons/radial_v3.png",
    tools: [
      "Python",
      "Django",
      "PostgreSQL",
      "React",
      "AWS",
      "Scikit-learn",
      "Lambda",
      "CloudWatch",
    ],
    positions: [
      {
        period: "September 2018 - September 2019",
        role: "Software Developer",
        points: [
          "Built software for a HIPAA-compliant healthcare analytics platform used by hospitals and care-management teams.",
          "Key Project: Built Django models and ETL pipelines that transformed Medicare claims data into clinically meaningful patient events. The resulting datasets powered analytics and operational workflows focused on discharge planning and post-acute care management.",
        ],
      },
      {
        period: "September 2017 - September 2018",
        role: "Junior Developer",
        points: [
          "Worked on predictive analytics, reporting systems, and backend APIs for healthcare customers.",
          "Key Project: Contributed to machine-learning models designed to identify patients who could safely transition to lower-acuity care settings. Built supporting Django APIs and reporting tools used by healthcare organizations to evaluate patient eligibility.",
        ],
      },
      {
        period: "June 2017 - September 2017",
        role: "Software Development Intern",
        points: [
          "Learned healthcare analytics and backend software development in a production environment.",
          "Key Project: Developed data-processing logic used to generate patient journey analyses, utilization reports, and ROI projections for prospective healthcare customers.",
        ],
      },
    ],
  },
];

export const education: EducationEntry[] = [
  {
    school: "Boston University",
    degree: "B.S. Health Science, B.A. Economics",
    period: "2013 - 2017",
    logo: "icons/bu_logo2.png",
    gpa: "3.9/4.0 (Summa Cum Laude)",
  },
];

// Group your skills however you like.
export const skills: SkillGroup[] = [
  {
    category: "Backend",
    items: [
      "Python",
      "Django",
      "FastAPI",
      "Flask",
      "REST APIs",
      "PostgreSQL",
      "MySQL",
    ],
  },
  {
    category: "Frontend",
    items: [
      "React",
      "TypeScript",
      "Redux",
      "TanStack Query",
      "HTML",
      "CSS",
    ],
  },
  {
    category: "Mobile",
    items: [
      "Android (Kotlin)",
      "iOS (Swift)",
    ],
  },
  {
    category: "Cloud & Infrastructure",
    items: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Redis",
      "Nginx",
      "Gunicorn",
      "CI/CD",
    ],
  },
  {
    category: "Integrations",
    items: [
      "Twilio",
      "Stripe",
      "GraphQL",
    ],
  },
  {
    category: "Tools",
    items: [
      "GitHub",
      "GitLab",
      "Datadog",
      "Bugsnag",
      "Jira",
      "Linear",
      "Claude",
      "Cursor",
      "GitHub Copilot",
    ],
  },
];

// "Beyond Work" — hobbies, interests, anything outside your career.
export const beyondWork: BeyondWorkEntry[] = [
  {
    title: "Running 🏃‍♀️",
    description: "Training for the 6 World Marathon Majors.",
    marathons: [
      { name: "Boston", icon: "icons/boston_marathon.jpeg", completed: true },
      { name: "Chicago", icon: "icons/chicago_v3.jpeg", completed: true },
      { name: "London", icon: "icons/london_marathon.png", completed: true },
      { name: "Berlin", icon: "icons/berlin.svg", completed: false },
      { name: "New York", icon: "icons/newyork.svg", completed: false },
      { name: "Tokyo", icon: "icons/tokyo.svg", completed: false },
    ],
  },
  {
    title: "My Cats 🐈",
    description: "Meet my two companions, Smudgy and Sparky.",
    cats: [
      { name: "Smudgy", icon: "icons/pixel-cat.svg" },
      { name: "Sparky", icon: "icons/pixel-cat.svg" },
    ],
  },
  {
    title: "Beach 🏖️",
    description: "Enjoying the sun and the palm trees.",
  },
];

