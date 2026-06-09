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
} from "./types";

export const profile: Profile = {
  name: "Ashley Hebard",
  title: "Software Engineer",
  // One clean sentence for the hero/intro. Keep it short.
  tagline:
    "Experienced Software engineer who loves building clean, reliable web apps with Python and React.",
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
  "I'm a software developer who enjoys building clean, reliable web applications. I care about well-tested code, clear communication, and shipping things that genuinely help people.",
  "Replace this text with a short paragraph or two about who you are, what you do, and what you're interested in.",
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
    logo: "icons/placeholder-circle.svg",
    positions: [
      {
        period: "March 2022 - Present",
        role: "Senior Software Engineer",
        tools: ["Python", "Django", "React", "PostgreSQL", "Docker"],
        points: [
          "Led development of a key feature that improved performance and usability.",
          "Mentored other engineers and helped shape technical direction.",
        ],
      },
    ],
  },
  {
    company: "Another Company",
    logo: "icons/placeholder-circle-2.svg",
    positions: [
      {
        period: "February 2021 - February 2022",
        role: "Mid-level Software Engineer",
        tools: ["Python", "JavaScript", "React", "AWS"],
        points: [
          "Promoted to mid-level after consistently delivering high-quality features.",
          "Built and maintained core web services used across the product.",
        ],
      },
      {
        period: "June 2019 - January 2021",
        role: "Software Engineer",
        tools: ["Python", "JavaScript", "React"],
        points: [
          "Collaborated with cross-functional teams to deliver projects on time.",
          "Implemented responsive UI components using React and CSS.",
        ],
      },
    ],
  },
  {
    company: "First Job Inc.",
    logo: "icons/placeholder-circle-3.svg",
    positions: [
      {
        period: "January 2018 - May 2019",
        role: "Software Developer",
        tools: ["JavaScript", "HTML", "CSS", "Git"],
        points: [
          "Learned the fundamentals of shipping software in a fast-paced environment.",
          "Contributed code to multiple client projects.",
        ],
      },
      {
        period: "January 2017 - December 2017",
        role: "Junior Developer",
        tools: ["JavaScript", "HTML", "CSS"],
        points: [
          "Fixed bugs and improved existing features across several web applications.",
        ],
      },
    ],
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
      { name: "Boston", icon: "icons/boston.svg", completed: true },
      { name: "Chicago", icon: "icons/chicago.svg", completed: true },
      { name: "London", icon: "icons/london.svg", completed: true },
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

