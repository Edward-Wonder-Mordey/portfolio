import { useState } from 'react';
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Cloud,
  Cpu,
  ExternalLink,
  GitBranch,
  Globe,
  GraduationCap,
  Mail,
  Menu,
  Network,
  Quote,
  Server,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';

type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  icon: typeof Cloud;
  featured?: boolean;
};

const projects: Project[] = [
  {
    number: '01',
    title: 'PromisedLand Data Center',
    category: 'Cloud architecture',
    description: 'A hybrid deployment proposal connecting Azure and AWS into a resilient, scalable operating environment.',
    tags: ['Azure', 'AWS', 'Hybrid cloud'],
    icon: Cloud,
    featured: true,
  },
  {
    number: '02',
    title: 'Eragonova Enterprise',
    category: 'Digital enterprise',
    description: 'A future-facing enterprise platform designed to make technical services clear, accessible, and scalable.',
    tags: ['Strategy', 'Systems', 'Web'],
    icon: Sparkles,
    featured: true,
  },
  {
    number: '03',
    title: 'Linux Deployment Proposal',
    category: 'Infrastructure',
    description: 'A permissions-led Linux server architecture with scalable storage and a clear operational path.',
    tags: ['Linux', 'Security', 'Storage'],
    icon: Server,
  },
  {
    number: '04',
    title: 'Customer Support Mini-Suite',
    category: 'Operations & data',
    description: 'A practical support system bringing ticket triage, CSAT visibility, and troubleshooting into one flow.',
    tags: ['Workflows', 'Analytics', 'Support'],
    icon: Network,
  },
];

const skills = [
  { label: 'Systems & networking', value: 'Windows Server · Active Directory · Linux · DHCP / DNS', icon: Server },
  { label: 'Cloud technologies', value: 'AWS · Azure · Hybrid deployment · Terraform exposure', icon: Cloud },
  { label: 'Security operations', value: 'Security foundations · Monitoring · Scripting', icon: ShieldCheck },
  { label: 'Engineering & automation', value: 'Python · PowerShell · Bash · SQL · Embedded systems', icon: Cpu },
];

const experience = [
  { year: '2026 — now', role: 'Founder & Lead Consultant', company: 'Eragonova Enterprise', detail: 'Building practical technology and engineering solutions for people, teams, and growing enterprises.' },
  { year: '2025', role: 'Auditor · Data Analyst Specialist', company: 'Springboard · Remote', detail: 'Protected data quality, strengthened reporting workflows, and supported program compliance.' },
  { year: '2023', role: 'Graphic Designer · Teacher', company: 'Shalom.Net · Achievers Preparatory School', detail: 'Connected creative communication with learning, collaboration, and stakeholder care.' },
  { year: '2021 — 2023', role: 'Missionary Service', company: 'LDS Church · Cape Coast, Ghana', detail: 'Led training, outreach, conflict resolution, and compassionate community service.' },
];

const diplomaSemesters = [
  {
    title: 'Year 1 · Semester 1 · 2023/2024',
    summary: 'GPA / CGPA: 4.53',
    courses: [
      'DEE101 Electronics I — A (80)',
      'DEE121 Network Analysis I — B+ (77)',
      'DEE143 Electrical Engineering Lab I — A+ (85)',
      'MCE111 Thermodynamics (Heat & Cooling) — A (81)',
      'MATH111 Engineering Mathematics I — A (81)',
      'COS101 Communication Skills I — A (80)',
      'CLT101 Computer Literacy I — A+ (86)',
      'MCE115 Engineering Drawing — A (83)',
    ],
  },
  {
    title: 'Year 1 · Semester 2 · 2023/2024',
    summary: 'GPA: 3.95 · CGPA: 4.23',
    courses: [
      'DEE102 Electronics II — B (74)',
      'DEE132 Electrical Machines I — B (70)',
      'CLT102 Computer Literacy II — A (81)',
      'AFS102 African Studies — A (84)',
      'COS102 Communication Skills II — C+ (67)',
      'MAT112 Engineering Mathematics II — B+ (78)',
      'DMCE132 Mechanics of Fluids — A+ (87)',
      'DEE122 Network Analysis II — B+ (77)',
      'DEE144 Electrical Engineering Lab II — B+ (77)',
    ],
  },
  {
    title: 'Year 2 · Semester 1 · 2024/2025',
    summary: 'GPA: 3.78 · CGPA: 4.08',
    courses: [
      'DEE211 Telecommunication I — B+ (77)',
      'DEE225 Measurement & Instruments I — D+ (56)',
      'DEE231 Electrical Machines II — A (82)',
      'DEE241 Power Systems I — C (60)',
      'DEE243 Electrical Engineering Lab II — B (70)',
      'DEE245 Electrical Engineering Lab IV — B (70)',
      'MAT211 Engineering Mathematics III — A+ (86)',
      'STA247 Research Methods — A+ (87)',
      'DEE227 Intro to Computer Technology — B+ (79)',
    ],
  },
  {
    title: 'Year 2 · Semester 2 · 2024/2025',
    summary: 'GPA: 3.13 · CGPA: 3.84',
    courses: [
      'DEE208 Digital Electronics — B (74)',
      'DEE222 Control Systems — B+ (76)',
      'DEE232 Electrical Machines III — C (60)',
      'DEE244 Electrical Engineering Lab V — C (63)',
      'DEE246 Electrical Engineering Lab VI — C (60)',
      'MAT212 Engineering Mathematics IV — B (70)',
      'ETP202 Entrepreneurship — A+ (88)',
      'DEE242 Power Systems II — D (52)',
    ],
  },
];

const topUpSemester = [
  'MATH213 Transform and Boundary Values Problem — C (64)',
  'BEEE223 Analog Communication Systems — B+ (79)',
  'BEEE215 Electrical Wiring Design — B+ (78)',
  'BEEE227 Programming With C++ — B (72)',
  'BEEE217 Electromagnetic Fields Theory — A+ (88)',
  'BEEE231 DC Machines — B+ (76)',
  'BEEE243 Analog Communication and DC Machines Lab — B+ (77)',
  'BEEE245 Engineering Economics — C+ (68)',
  'BSTA247 Research Methodology for Engineers — B (72)',
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All work');
  const filters = ['All work', 'Cloud', 'Infrastructure', 'Operations'];
  const visibleProjects = activeFilter === 'All work'
    ? projects
    : projects.filter((project) => project.category.toLowerCase().includes(activeFilter.toLowerCase()));

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Edward Wonder Mordey home">
          <img src="./images/image_1780825279152.jpeg" alt="Eragonova Enterprise crest" />
          <span>Edward Wonder<br /><b>Mordey</b></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#journey" onClick={closeMenu}>Journey</a>
          <a href="#academics" onClick={closeMenu}>Academics</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href="mailto:edwardwondermordey@gmail.com" onClick={closeMenu}>Let&apos;s talk <ArrowUpRight size={16} /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> IT · Engineering · Service</p>
            <h1>Building systems<br /><em>with purpose.</em></h1>
            <p className="hero-intro">I&apos;m Edward — an IT and Engineering professional in Kumasi, Ghana, turning complex systems into dependable tools that help people move forward.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">Explore my work <ArrowUpRight size={17} /></a>
              <a className="text-link" href="mailto:edwardwondermordey@gmail.com">Start a conversation <span>↗</span></a>
            </div>
            <div className="hero-note"><span className="pulse-dot" /> Available for thoughtful collaborations</div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame"><img src="./images/IMG-20260626-WA0013.jpg.jpeg" alt="Edward Wonder Mordey" /></div>
            <div className="hero-card hero-card-top"><span>Based in</span><strong>Kumasi, Ghana</strong></div>
            <div className="hero-card hero-card-bottom"><strong>4.0 / 4.0</strong><span>Ensign College GPA</span></div>
            <div className="hero-stamp">EWM<br /><small>EST. 2026</small></div>
          </div>
        </section>

        <section className="marquee-band" aria-label="Areas of practice">
          <div className="marquee-content"><span>Systems that serve</span><i>✦</i><span>Engineering with empathy</span><i>✦</i><span>Always learning</span><i>✦</i><span>Systems that serve</span><i>✦</i><span>Engineering with empathy</span><i>✦</i></div>
        </section>

        <section className="about-section section-wrap" id="about">
          <div className="section-label"><span>01</span><span>About me</span></div>
          <div className="about-grid">
            <div><h2>Technical depth.<br /><em>Human direction.</em></h2></div>
            <div className="about-copy"><p className="lead">Resourceful by nature, I work across system administration, cloud technologies, electrical engineering, and community development.</p><p>My best work sits at the intersection of reliable infrastructure and meaningful service. Whether I&apos;m mapping a hybrid cloud environment, auditing a workflow, or supporting a local initiative, I bring curiosity, clarity, and a commitment to doing things the right way.</p><a className="text-link" href="#journey">Read my journey <span>↗</span></a></div>
          </div>
          <div className="skill-grid">{skills.map(({ label, value, icon: Icon }) => <div className="skill-card" key={label}><Icon size={21} /><div><h3>{label}</h3><p>{value}</p></div></div>)}</div>
        </section>

        <section className="work-section section-wrap" id="work">
          <div className="section-heading"><div><div className="section-label"><span>02</span><span>Selected work</span></div><h2>Ideas made <em>useful.</em></h2></div><p>Projects shaped by a belief that good technology should feel clear, considered, and built to last.</p></div>
          <div className="filter-row">{filters.map((filter) => <button key={filter} className={activeFilter === filter ? 'filter active' : 'filter'} onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div>
          <div className="project-grid">{visibleProjects.map((project) => { const Icon = project.icon; return <article className={`project-card ${project.featured ? 'featured' : ''}`} key={project.title}><div className="project-top"><span className="project-number">{project.number}</span><span className="project-icon"><Icon size={20} /></span></div><div className="project-body"><p className="project-category">{project.category}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><a className="project-link" href="#contact" aria-label={`Discuss ${project.title}`}><ArrowUpRight size={18} /></a></article>; })}</div>
        </section>

        <section className="journey-section" id="journey">
          <div className="section-wrap"><div className="section-label light"><span>03</span><span>My journey</span></div><div className="journey-grid"><div><h2>A work in<br /><em>progress.</em></h2><p className="journey-intro">From electrical circuits to cloud infrastructure, every chapter has added a new way to serve.</p><div className="quote-card"><Quote size={22} /><p>“Spiritual values guide my professional ethics, ensuring solutions are technically sound and morally responsible.”</p></div></div><div className="timeline">{experience.map((item) => <div className="timeline-item" key={item.role}><div className="timeline-year">{item.year}</div><div className="timeline-marker"><span /></div><div className="timeline-detail"><h3>{item.role}</h3><p className="company">{item.company}</p><p>{item.detail}</p></div></div>)}</div></div></div>
        </section>

        <section className="education-section section-wrap" id="academics">
          <div className="section-label"><span>04</span><span>Academic profile</span></div>
          <div className="education-grid">
            <div><h2>Study with<br /><em>purpose.</em></h2><p>A concise academic profile on the front page, with deeper transcript history available for anyone who wants to verify the journey behind the credentials.</p></div>
            <div className="credential-list">
              <div className="credential-item"><GraduationCap size={25} /><div><span>Current · 4.0 / 4.0</span><h3>Bachelor of Applied Science in System Administration</h3><p>Ensign College · Final Year</p><a className="text-link" href="#ensign-transcript">View academic details <span>↗</span></a></div><ChevronDown size={18} /></div>
              <div className="credential-item"><Award size={25} /><div><span>Completed · December 2025</span><h3>Diploma in Electrical & Electronic Engineering</h3><p>Kumasi Technical University · Final CGPA 3.84 · Second Class Upper Division</p><a className="text-link" href="#diploma-transcript">View transcript history <span>↗</span></a></div><ChevronDown size={18} /></div>
              <div className="credential-item"><Cpu size={25} /><div><span>Current · Top-up degree</span><h3>Bachelor of Engineering in Electrical & Electronics Engineering</h3><p>Kumasi Technical University · Level 2 · Current CGPA 3.6750</p><a className="text-link" href="#topup-transcript">View current transcript <span>↗</span></a></div><ChevronDown size={18} /></div>
              <div className="credential-item"><Check size={25} /><div><span>Certificates</span><h3>IT Professional · Technical Support Engineer · PathwayConnect</h3><p>TestOut Network Pro · Hybrid Server Pro · Client Pro</p></div><ChevronDown size={18} /></div>
            </div>
          </div>
        </section>

        <section className="education-section section-wrap" id="ensign-transcript">
          <div className="section-label"><span>05</span><span>Ensign College · Transcript history</span></div>
          <div className="education-grid">
            <div><h2>Ensign<br /><em>College.</em></h2><p><strong>Bachelor of Applied Science in System Administration</strong><br />Final Year · 4.0 / 4.0 GPA</p><p>This section is intentionally kept concise until the official transcript is uploaded. The verified document can be added here later without changing the public academic layout.</p></div>
            <div className="credential-list">
              <div className="credential-item"><GraduationCap size={25} /><div><span>Academic standing</span><h3>4.0 / 4.0</h3><p>Current cumulative GPA as provided. Full semester-by-semester transcript will be added when the official document is available.</p></div></div>
              <div className="credential-item"><Award size={25} /><div><span>Programme</span><h3>Bachelor of Applied Science in System Administration</h3><p>Ensign College · Final Year</p></div></div>
            </div>
          </div>
        </section>

        <section className="education-section section-wrap" id="diploma-transcript">
          <div className="section-label"><span>06</span><span>KsTU · Diploma transcript history</span></div>
          <div className="education-grid">
            <div><h2>Diploma in<br /><em>Electrical & Electronic Engineering.</em></h2><p><strong>Completed December 2025</strong><br />Final CGPA: 3.84 · Second Class Upper Division</p><p>Strengths included Mathematics, Research Methods, Thermodynamics, Computer Literacy, Entrepreneurship, and Mechanics of Fluids. The record also reflects resilience across practical laboratory work and challenging engineering subjects.</p></div>
            <div className="credential-list">{diplomaSemesters.map((semester) => <details className="credential-item" key={semester.title}><summary><GraduationCap size={25} /><div><span>{semester.title}</span><h3>{semester.summary}</h3><p>Open to view semester courses and grades</p></div><ChevronDown size={18} /></summary><div className="transcript-courses">{semester.courses.map(course => <p key={course}>{course}</p>)}</div></details>)}</div>
          </div>
        </section>

        <section className="education-section section-wrap" id="topup-transcript">
          <div className="section-label"><span>07</span><span>KsTU · Current top-up transcript</span></div>
          <div className="education-grid">
            <div><h2>B.Eng. in<br /><em>Electrical & Electronics Engineering.</em></h2><p><strong>Session: Regular · Level 2</strong><br />Current CGPA: 3.6750 · Current GPA: 3.6750</p><p>This is the current semester record provided for the top-up degree. It will be updated as additional semesters are completed.</p></div>
            <div className="credential-list">
              <details className="credential-item" open><summary><Cpu size={25} /><div><span>2025/2026 · Level 2 · Semester 1</span><h3>9 courses · 20 credits · 73.5 grade points</h3><p>Open to view the current course record</p></div><ChevronDown size={18} /></summary><div className="transcript-courses">{topUpSemester.map(course => <p key={course}>{course}</p>)}</div></details>
              <div className="credential-item"><GraduationCap size={25} /><div><span>Programme record</span><h3>Bachelor of Engineering (B.Eng.) in Electrical and Electronics Engineering</h3><p>Kumasi Technical University · Regular session · Level 2</p></div></div>
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact"><div className="contact-panel"><div className="contact-copy"><p className="eyebrow"><span className="eyebrow-line" /> Open to what&apos;s next</p><h2>Let&apos;s make something<br /><em>worth building.</em></h2><p>Have a systems challenge, a community idea, or a thoughtful project in mind? I&apos;d like to hear about it.</p></div><div className="contact-actions"><a href="mailto:edwardwondermordey@gmail.com" className="contact-link"><Mail size={18} /> edwardwondermordey@gmail.com <ArrowUpRight size={16} /></a><a href="tel:+233505374537" className="contact-link"><BriefcaseBusiness size={18} /> +233 50 537 4537 <ArrowUpRight size={16} /></a><a href="https://linkedin.com/in/edward-wonder-mordey-0532822b7" target="_blank" rel="noreferrer" className="contact-link"><Globe size={18} /> LinkedIn profile <ExternalLink size={15} /></a></div></div></section>
      </main>

      <footer className="site-footer section-wrap"><div className="footer-brand"><img src="./images/image_1780825279152.jpeg" alt="Eragonova Enterprise crest" /><span>Edward Wonder Mordey</span></div><p>IT · Engineering · Service</p><div className="footer-social"><a href="https://linkedin.com/in/edward-wonder-mordey-0532822b" aria-label="LinkedIn"><Globe size={17} /></a><a href="mailto:edwardwondermordey@gmail.com" aria-label="Email"><Mail size={17} /></a><a href="https://github.com/Edward-Wonder-Mordey" aria-label="GitHub"><GitBranch size={17} /></a></div><small>© 2026 Edward Wonder Mordey. Built with purpose.</small></footer>
    </div>
  );
}

export default App;
