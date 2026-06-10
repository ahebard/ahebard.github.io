import React, { useState, useEffect } from "react";
import {
  profile,
  languageIcons,
  about,
  career,
  education,
  skills,
  beyondWork,
} from "./content";
import { 
  BeyondWorkEntry, 
  CareerEntry, 
  LanguageIcon, 
  SkillGroup,
  Position,
  EducationEntry
} from "./types";

export default function App() {
  const [developerMode, setDeveloperMode] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (developerMode) {
      document.body.classList.add("developer-mode");
    } else {
      document.body.classList.remove("developer-mode");
    }
  }, [developerMode]);

  const toggleDeveloper = () => setDeveloperMode(!developerMode);

  return (
    <div className="page">
      {!developerMode && <SparkleCursor />}
      <TopBar />
      <Hero onToggleDeveloper={toggleDeveloper} />
      <main>
        <About />
        <Career />
        <Education />
        <Skills />
        <BeyondWork />
        <Contact />
      </main>
      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
      </footer>
      <button
        className="developer-toggle"
        onClick={toggleDeveloper}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        title="Toggle Developer Mode"
      >
        {developerMode ? "back to normal ★" : isHovered ? "click me!" : "Developer Mode"}
      </button>
    </div>
  );
}

function SparkleCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [sparkles, setSparkles] = useState<{ id: number; x: number; y: number }[]>(
    []
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (Math.random() > 0.85) {
        setSparkles((prev) => [
          ...prev.slice(-20),
          { id: Date.now(), x: e.clientX, y: e.clientY },
        ]);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setSparkles((prev) => prev.filter((s) => Date.now() - s.id < 600));
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div
        className="custom-cursor"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="sparkle"
          style={{
            left: `${s.x + (Math.random() - 0.5) * 20}px`,
            top: `${s.y + (Math.random() - 0.5) * 20}px`,
          }}
        />
      ))}
    </>
  );
}

function TopBar() {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <a href="#top" className="brand">
          <span className="brand-text">{profile.name}</span>
        </a>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#career">Career</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#beyond">Beyond Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

function Hero({ onToggleDeveloper }: { onToggleDeveloper: () => void }) {
  return (
    <section id="top" className="hero">
      <button
        className="hero-star-button"
        onClick={onToggleDeveloper}
        title="Toggle Developer Mode"
      >
        ★
      </button>
      <p className="hero-intro">{profile.tagline}</p>
      <div className="hero-icons">
        {languageIcons.map((lang: LanguageIcon) => (
          <img
            key={lang.name}
            src={lang.icon}
            alt={lang.name}
            className="hero-icon"
            width={48}
            height={48}
          />
        ))}
      </div>
      <a className="resume-button" href={profile.resumeUrl} download>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ marginRight: "8px", verticalAlign: "middle" }}
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        Download Resume
      </a>
    </section>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="section">
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  );
}

function About() {
  return (
    <Section id="about" title="About">
      {about.map((paragraph: string, i: number) => (
        <p key={i} className="about-text">
          {paragraph}
        </p>
      ))}
    </Section>
  );
}

function Career() {
  return (
    <Section id="career" title="Career">
      <div className="timeline">
        {career.map((entry: CareerEntry, i: number) => (
          <div key={i} className="timeline-item">
            <div className="timeline-logo-node">
              <img src={entry.logo} alt={`${entry.company} logo`} />
            </div>
            <div className="job">
              <div className="job-info">
                <h3 className="job-company">{entry.company}</h3>
                <ul className="job-tools">
                  {entry.tools.map((tool: string, k: number) => (
                    <li key={k} className="job-tool">
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={`job-positions ${
                  entry.positions.length > 1 ? "has-multiple" : ""
                }`}
              >
                {entry.positions.map((pos: Position, j: number) => (
                  <div key={j} className="position-item">
                    {entry.positions.length > 1 && (
                      <span className="position-dot" aria-hidden="true" />
                    )}
                    <div className="job-header">
                      <h4 className="job-role">{pos.role}</h4>
                      <span className="job-period">{pos.period}</span>
                    </div>
                    <ul className="job-points">
                      {pos.points.map((point: string, k: number) => (
                        <li key={k}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education" title="Education">
      <div>
        {education.map((edu: EducationEntry, i: number) => (
          <div key={i} className="education-card">
            <div className="education-logo">
              <img src={edu.logo} alt={`${edu.school} logo`} />
            </div>
            <div className="education-info">
              <h3 className="education-school">{edu.school}</h3>
              <p className="education-degree">{edu.degree}</p>
              <div className="education-meta">
                <span className="education-period">
                  {edu.period}
                  {edu.gpa && ` | GPA: ${edu.gpa}`}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="skills-grid">
        {skills.map((group: SkillGroup, i: number) => (
          <div key={i} className="skill-group">
            <h3 className="skill-category">{group.category}</h3>
            <ul className="skill-list">
              {group.items.map((item: string, j: number) => (
                <li key={j} className="skill-tag">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

function BeyondWork() {
  return (
    <Section id="beyond" title="Beyond Work">
      <div className="beyond-grid">
        {beyondWork.map((item: BeyondWorkEntry, i: number) => (
          <div key={i} className="beyond-card">
            <h3 className="beyond-title">{item.title}</h3>
            <p className="beyond-description">{item.description}</p>
            {item.marathons && (
              <div className="hobby-extras">
                {item.marathons.map((m, j) => (
                  <div key={j} className="hobby-icon-wrapper" title={m.name}>
                    <img
                      src={m.icon}
                      alt={m.name}
                      className={`hobby-icon ${m.completed ? "completed" : "not-completed"}`}
                    />
                    {m.completed && <span className="checkmark">✓</span>}
                  </div>
                ))}
              </div>
            )}
            {item.cats && (
              <div className="hobby-extras">
                {item.cats.map((c, j) => (
                  <div key={j} className="cat-avatar">
                    <img src={c.icon} alt={c.name} className="hobby-icon" />
                    <p className="cat-name">{c.name}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="about-text">Feel free to reach out.</p>
      <div className="contact-links">
        <a href={`mailto:${profile.email}`} className="contact-link">
          <svg
            className="contact-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          {profile.email}
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="contact-link"
        >
          <svg
            className="contact-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
          GitHub
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="contact-link"
        >
          <svg
            className="contact-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
          LinkedIn
        </a>
      </div>
    </Section>
  );
}
