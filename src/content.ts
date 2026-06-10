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
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
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
    company: "Example Company",
    logo: "icons/mangomint_logo.jpg",
    tools: ["Python", "Django", "React", "PostgreSQL", "Docker"],
    positions: [
      {
        period: "March 2022 - Present",
        role: "Senior Software Engineer",
        points: [
          "Led development of a key feature that improved performance and usability.",
          "Mentored other engineers and helped shape technical direction.",
        ],
      },
    ],
  },
  {
    company: "Another Company",
    logo: "icons/dtva2.jpg",
    tools: ["Python", "JavaScript", "React", "AWS"],
    positions: [
      {
        period: "February 2021 - February 2022",
        role: "Mid-level Software Engineer",
        points: [
          "Promoted to mid-level after consistently delivering high-quality features.",
          "Built and maintained core web services used across the product.",
        ],
      },
      {
        period: "June 2019 - January 2021",
        role: "Software Engineer",
        points: [
          "Collaborated with cross-functional teams to deliver projects on time.",
          "Implemented responsive UI components using React and CSS.",
        ],
      },
    ],
  },
  {
    company: "First Job Inc.",
    logo: "icons/radial_v3.png",
    tools: ["JavaScript", "HTML", "CSS", "Git"],
    positions: [
      {
        period: "January 2018 - May 2019",
        role: "Software Developer",
        points: [
          "Learned the fundamentals of shipping software in a fast-paced environment.",
          "Contributed code to multiple client projects.",
        ],
      },
      {
        period: "January 2017 - December 2017",
        role: "Junior Developer",
        points: [
          "Fixed bugs and improved existing features across several web applications.",
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
    gpa: "3.7/4.0",
  },
];

// Group your skills however you like.
export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    category: "Frameworks",
    items: ["Django", "React", "Node.js"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "PostgreSQL", "Webpack"],
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

