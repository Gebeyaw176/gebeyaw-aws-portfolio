import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight, Github, Linkedin, Mail, MapPin, ExternalLink,
  Download, Code2, Cloud, Database, Server, Menu, X, Moon, Sun, Copy, Check, ShieldCheck, Network, Terminal, Sparkles, BriefcaseBusiness
} from "lucide-react";
import "./styles.css";

const projects = [
  {
    title: "Amazon Full Stack Clone",
    description: "A full-stack e-commerce experience with authentication, shopping cart, checkout flow, and responsive UI.",
    stack: ["React", "Node.js", "Express", "Firebase", "Stripe"],
    live: "https://gebeyaw176.github.io/Amazon-Clone-2025",
    code: "https://github.com/Gebeyaw176/Amazon-Clone-2025",
    label: "Full Stack"
  },
  {
    title: "Netflix Clone",
    description: "A polished streaming-style interface built with React and Vite, designed for fast browsing across devices.",
    stack: ["React", "Vite", "JavaScript", "CSS"],
    live: "https://gebeyaw176.github.io/Netflix-Clone-2025",
    code: "https://github.com/Gebeyaw176/Netflix-Clone-2025",
    label: "Frontend"
  },
  {
    title: "Evangadi Forum",
    description: "A community question-and-answer platform featuring user authentication, REST APIs, and database-backed content.",
    stack: ["React", "Node.js", "Express", "MySQL"],
    live: "https://gebeyaw176.github.io/Evangadi-Forum-Frontend",
    code: "https://github.com/Gebeyaw176",
    label: "Full Stack"
  },
  {
    title: "Apple Homepage Clone",
    description: "A carefully crafted, responsive recreation of Apple's homepage interface with clean component structure.",
    stack: ["React", "JavaScript", "CSS"],
    live: "https://gebeyaw176.github.io/Apple-project",
    code: "https://github.com/Gebeyaw176/Apple-project",
    label: "UI Engineering"
  }
];

const skills = [
  ["Frontend", "HTML5, CSS3, JavaScript, React, Bootstrap, Responsive Design", Code2],
  ["Backend", "Node.js, Express, REST APIs, Authentication, JSON", Server],
  ["Data", "MySQL, Firebase, Database Design", Database],
  ["Cloud & Tools", "AWS, Linux, Git, GitHub, VS Code, Nginx", Cloud]
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  const closeMenu = () => setMenuOpen(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("gebeyawyesigat349@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.prompt("Copy this email address:", "gebeyawyesigat349@gmail.com");
    }
  };

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <nav className="container nav">
          <a className="brand" href="#home" onClick={closeMenu}>
            <span className="brand-mark">GY</span>
            <span>Gebeyaw Yesigat</span>
          </a>

          <div className={menuOpen ? "nav-links open" : "nav-links"}>
            {["About", "Skills", "Projects", "Cloud", "Experience", "Contact"].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
            ))}
            <a className="nav-cta hire-link" href="#contact" onClick={closeMenu}>Hire Me</a>
          </div>

          <div className="nav-actions">
            <button className="icon-btn" onClick={() => setDark(v => !v)} aria-label="Toggle theme">
              {dark ? <Sun size={19}/> : <Moon size={19}/>}
            </button>
            <button className="icon-btn menu-btn" onClick={() => setMenuOpen(v => !v)} aria-label="Open menu">
              {menuOpen ? <X size={22}/> : <Menu size={22}/>}
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero container">
          <div className="hero-copy">
            <div className="eyebrow"><span></span> Available for software, cloud, and IT opportunities</div>
            <h1>I build dependable digital products and cloud-ready solutions.</h1>
            <p className="hero-text">
              I'm <strong>Gebeyaw Yesigat</strong>, a software developer with a background in
              computer science and mathematics. I create responsive web applications and continue
              expanding my skills in AWS, Linux, IT support, and cloud engineering.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#projects">View my work <ArrowRight size={18}/></a>
              <a className="btn secondary" href="#contact">Contact me <Mail size={18}/></a>
            </div>
            <div className="trust-row">
              <span><Sparkles size={17}/> React & Node.js</span>
              <span><Cloud size={17}/> AWS & Linux</span>
              <span><BriefcaseBusiness size={17}/> Open to work</span>
            </div>
            <div className="social-row">
              <a href="https://github.com/Gebeyaw176" target="_blank" rel="noreferrer"><Github size={20}/> GitHub</a>
              <a href="https://www.linkedin.com/in/GebeyawYesigat" target="_blank" rel="noreferrer"><Linkedin size={20}/> LinkedIn</a>
              <span><MapPin size={20}/> Silver Spring, Maryland</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="profile-card">
              <div className="avatar">GY</div>
              <h3>Software Developer</h3>
              <p>React · Node.js · AWS · Linux</p>
              <div className="status"><span></span> Open to opportunities</div>
            </div>
            <div className="floating-card card-code">&lt;/&gt;<span>Clean code</span></div>
            <div className="floating-card card-cloud">☁<span>Cloud ready</span></div>
          </div>
        </section>

        <section className="stats-strip">
          <div className="container stats">
            <div><strong>4+</strong><span>Featured projects</span></div>
            <div><strong>10+</strong><span>Core technologies</span></div>
            <div><strong>2</strong><span>Academic disciplines</span></div>
            <div><strong>100%</strong><span>Committed to growth</span></div>
          </div>
        </section>

        <section id="about" className="section container two-col">
          <div>
            <p className="section-kicker">About me</p>
            <h2>Technical ability backed by teaching, analysis, and communication.</h2>
          </div>
          <div className="about-copy">
            <p>
              My path combines software development, mathematics, and education. That mix helps me
              approach technical problems logically, explain ideas clearly, and stay persistent when
              solving difficult challenges.
            </p>
            <p>
              I have built frontend and full-stack applications using React, Node.js, Express,
              MySQL, Firebase, and REST APIs. I am also developing practical skills in AWS, Linux,
              networking, deployment, and cloud infrastructure.
            </p>
            <a className="text-link" href="#contact">
              Let's work together <ArrowRight size={17}/>
            </a>
          </div>
        </section>

        <section id="skills" className="section section-alt">
          <div className="container">
            <p className="section-kicker">Technical skills</p>
            <div className="section-heading-row">
              <h2>A practical toolkit for modern web and cloud work.</h2>
              <p>From interfaces and APIs to databases, deployment, and infrastructure fundamentals.</p>
            </div>
            <div className="skill-grid">
              {skills.map(([title, text, Icon]) => (
                <article className="skill-card" key={title}>
                  <div className="skill-icon"><Icon size={25}/></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section container">
          <p className="section-kicker">Selected projects</p>
          <div className="section-heading-row">
            <h2>Projects built to learn, solve, and demonstrate.</h2>
            <p>Each project reflects hands-on work with real development tools and workflows.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className={`project-image project-${index + 1}`}>
                  <span>{project.label}</span>
                  <div className="mock-window">
                    <div className="mock-dots"><i></i><i></i><i></i></div>
                    <div className="mock-lines"><b></b><b></b><b></b><b></b></div>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">{project.stack.map(s => <span key={s}>{s}</span>)}</div>
                  <div className="project-links">
                    <a href={project.live} target="_blank" rel="noreferrer">Live demo <ExternalLink size={16}/></a>
                    <a href={project.code} target="_blank" rel="noreferrer">Source <Github size={16}/></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>


        <section id="cloud" className="section cloud-section">
          <div className="container">
            <p className="section-kicker">Cloud engineering journey</p>
            <div className="section-heading-row">
              <h2>Building practical AWS, Linux, and deployment knowledge.</h2>
              <p>This portfolio itself is prepared for AWS Amplify, GitHub-based deployment, HTTPS, and a custom domain.</p>
            </div>
            <div className="architecture">
              <div className="arch-node">Users</div><ArrowRight size={23}/><div className="arch-node">Route 53</div><ArrowRight size={23}/><div className="arch-node">CloudFront</div><ArrowRight size={23}/><div className="arch-node main-node">AWS Amplify</div>
            </div>
            <div className="cloud-grid">
              <article><Server size={24}/><h3>Amazon EC2</h3><p>Linux servers, Nginx hosting, networking, and deployment fundamentals.</p></article>
              <article><Database size={24}/><h3>Amazon S3</h3><p>Static files, storage, access logs, and website hosting concepts.</p></article>
              <article><ShieldCheck size={24}/><h3>AWS IAM</h3><p>Users, roles, permissions, policies, and least-privilege access.</p></article>
              <article><Network size={24}/><h3>Route 53</h3><p>DNS records, custom domains, and routing traffic to cloud services.</p></article>
              <article><Cloud size={24}/><h3>CloudFront</h3><p>Content delivery, HTTPS, caching, and global performance concepts.</p></article>
              <article><Terminal size={24}/><h3>Linux & CLI</h3><p>Navigation, packages, permissions, processes, and troubleshooting.</p></article>
            </div>
          </div>
        </section>

        <section id="experience" className="section section-alt">
          <div className="container">
            <p className="section-kicker">Background</p>
            <div className="timeline">
              <div className="timeline-item">
                <span>2025 — Present</span>
                <div><h3>Software Development & Cloud Learning</h3><p>Building full-stack projects while expanding AWS, Linux, networking, deployment, and IT support skills.</p></div>
              </div>
              <div className="timeline-item">
                <span>2025</span>
                <div><h3>Full Stack Web Development Certificate</h3><p>Evangadi Tech — practical development with React, Node.js, Express, databases, APIs, authentication, and deployment.</p></div>
              </div>
              <div className="timeline-item">
                <span>2018 — 2021</span>
                <div><h3>Associate of Science in Computer Science</h3><p>Prince George's Community College.</p></div>
              </div>
              <div className="timeline-item">
                <span>2005 — 2010</span>
                <div><h3>Bachelor's Degree in Mathematics</h3><p>Wollo University, Ethiopia.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section container">
          <div className="contact-card contact-highlight">
            <div>
              <p className="section-kicker">Hire me / Contact me</p>
              <h2>Have a role, project, or technical challenge in mind?</h2>
              <p>
                I'm open to software development, web development, IT support, and cloud-focused opportunities.
              </p>

              <div className="contact-email-box">
                <span className="contact-email-label">Email me directly</span>
                <a
                  className="contact-email-address"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=gebeyawyesigat349@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  gebeyawyesigat349@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-actions">
              <a
                className="btn primary"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=gebeyawyesigat349@gmail.com&su=Portfolio%20Contact"
                target="_blank"
                rel="noreferrer"
              >
                Open Gmail <Mail size={18}/>
              </a>

              <button className="btn secondary copy-btn" type="button" onClick={copyEmail}>
                {copied ? <>Copied <Check size={18}/></> : <>Copy email <Copy size={18}/></>}
              </button>

              <a
                className="btn secondary"
                href="https://www.linkedin.com/in/GebeyawYesigat"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <Linkedin size={18}/>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Gebeyaw Yesigat</span>
          <span>Built with React · Ready for AWS Amplify</span>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
