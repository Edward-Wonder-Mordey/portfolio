import { useEffect, useState } from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import './index.css';

const projects = [
  { number: '01', category: 'Cloud & infrastructure', title: 'PromisedLand Data Center', description: 'A cloud and infrastructure concept focused on reliable, scalable systems and practical deployment planning.', tags: ['Cloud architecture', 'Infrastructure', 'Systems'], anchor: '#cloud' },
  { number: '02', category: 'Business & technology', title: 'Eragonova Enterprise', description: 'A business technology concept combining operational thinking, systems design, and technology strategy.', tags: ['Business systems', 'Technology', 'Strategy'], anchor: '#enterprise' },
  { number: '03', category: 'Linux administration', title: 'Linux Deployment Proposal', description: 'A Linux-focused deployment proposal covering administration, security, services, and implementation considerations.', tags: ['Linux', 'Administration', 'Security'], anchor: '#linux' },
  { number: '04', category: 'Data & analytics', title: 'Customer Support Mini-Suite', description: 'An analytics workflow combining SQL, Power BI, and Tableau to turn operational data into useful support insights.', tags: ['SQL', 'Power BI', 'Tableau', 'Data analysis', 'Support operations'], anchor: '#support' },
  { number: '05', category: 'Networking & security', title: 'Network Fingerprinting & Security Assessment', description: 'A controlled Zenmap/Nmap exercise covering network discovery, OS fingerprinting, exposed services, and security analysis.', tags: ['Zenmap', 'Nmap', 'Network discovery', 'Security'], anchor: '#network' },
  { number: '06', category: 'Planning & leadership', title: 'Stake Welfare & Self-Reliance Plan · 2026', description: 'A structured annual program plan demonstrating strategic planning, stakeholder coordination, measurable goals, and progress tracking.', tags: ['Strategic planning', 'Coordination', 'Goal setting', 'Reporting'], anchor: '#planning' }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.title = 'Edward Wonder Mordey Portfolio';
  }, []);

  return (
    <div className="app">
      <header className="site-header">
        <a className="brand" href="#top">EWM</a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? 'nav open' : 'nav'}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Electrical & Electronics Engineering · Technology</p>
            <h1>Edward Wonder<br /><span>Mordey</span></h1>
            <p className="hero-text">I build practical solutions across cloud infrastructure, networking, Linux administration, data analytics, and technology-driven planning.</p>
            <div className="hero-actions"><a className="button" href="#work">Explore my work <ArrowUpRight size={16} /></a><a className="text-link" href="#contact">Get in touch</a></div>
          </div>
          <div className="hero-image"><img src="./images/IMG-20260626-WA0013.jpg.jpeg" alt="Edward Wonder Mordey" fetchPriority="high" /></div>
        </section>

        <section id="about" className="section intro-section"><div><p className="section-label">01 · About</p></div><div><h2>Engineering mindset.<br /><em>Practical execution.</em></h2><p>I am an engineering student building a portfolio around the intersection of technology, systems, analysis, and service. My work ranges from infrastructure and networking to data visualization and structured planning.</p></div></section>

        <section id="work" className="section work-section"><div className="section-heading"><p className="section-label">02 · Selected work</p><h2>Projects that show<br /><em>how I think.</em></h2></div><div className="project-grid">{projects.map((project) => <article className="project-card" key={project.title}><div className="project-top"><span className="project-number">{project.number}</span><span className="project-icon">↗</span></div><div className="project-body"><p className="project-category">{project.category}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a className="project-case-link" href={`./case-studies.html${project.anchor}`}>View Case Study <span>→</span></a></div></article>)}</div></section>

        <section id="skills" className="section skills-section"><div><p className="section-label">03 · Capabilities</p></div><div className="skills-grid"><div><h3>Infrastructure</h3><p>Cloud architecture · Linux · Networking · Systems administration</p></div><div><h3>Data</h3><p>SQL · Power BI · Tableau · Data analysis · Visualization</p></div><div><h3>Security</h3><p>Network discovery · Nmap · OS fingerprinting · Security analysis</p></div><div><h3>Leadership</h3><p>Strategic planning · Coordination · Documentation · Reporting</p></div></div></section>

        <section id="contact" className="section contact-section"><p className="section-label">04 · Contact</p><h2>Let's build something<br /><em>useful.</em></h2><div className="contact-links"><a href="mailto:edwardwondermordey@gmail.com"><Mail size={18} /> Email</a><a href="https://github.com/Edward-Wonder-Mordey" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a><a href="https://www.linkedin.com/in/edward-wonder-mordey/" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a></div></section>
      </main>
      <footer><span>© 2026 Edward Wonder Mordey</span><span>Built with purpose.</span></footer>
    </div>
  );
}

export default App;
