import { useEffect, useState } from 'react';
import {
  ArrowUpRight, Award, Check, ChevronDown, Cloud, Cpu, GraduationCap,
  Github, Linkedin, Mail, Menu, Network, Quote, Server, ShieldCheck,
  Sparkles, X,
} from 'lucide-react';
import './index.css';

type Project = {
  number: string; title: string; category: string; description: string;
  tags: string[]; icon: typeof Cloud; featured?: boolean; caseStudy: string;
};

const projects: Project[] = [
  { number:'01', title:'PromisedLand Data Center', category:'Cloud architecture', description:'A hybrid deployment proposal connecting Azure and AWS into a resilient, scalable operating environment.', tags:['Azure','AWS','Hybrid cloud'], icon:Cloud, featured:true, caseStudy:'#cloud' },
  { number:'02', title:'Eragonova Enterprise', category:'Digital enterprise', description:'A future-facing enterprise platform designed to make technical services clear, accessible, and scalable.', tags:['Strategy','Systems','Web'], icon:Sparkles, featured:true, caseStudy:'#enterprise' },
  { number:'03', title:'Linux Deployment Proposal', category:'Infrastructure', description:'A permissions-led Linux server architecture with scalable storage and a clear operational path.', tags:['Linux','Security','Storage'], icon:Server, caseStudy:'#linux' },
  { number:'04', title:'Customer Support Mini-Suite', category:'Operations & data', description:'A practical support and analytics workflow bringing ticket triage, customer satisfaction visibility, troubleshooting, and reporting into one flow.', tags:['SQL','Power BI','Tableau','Data analysis','Support operations'], icon:Network, caseStudy:'#support' },
  { number:'05', title:'Network Fingerprinting & Security Assessment', category:'Networking & security', description:'A controlled Zenmap/Nmap exercise covering network discovery, OS fingerprinting, exposed services, and security analysis.', tags:['Zenmap','Nmap','Network discovery','Security'], icon:ShieldCheck, caseStudy:'#network' },
  { number:'06', title:'Stake Welfare & Self-Reliance Plan · 2026', category:'Planning & leadership', description:'A structured annual program plan demonstrating strategic planning, stakeholder coordination, measurable goals, and progress tracking.', tags:['Strategic planning','Coordination','Goal setting','Reporting'], icon:Check, caseStudy:'#planning' },
];

const skills = [
  { label:'Systems & networking', value:'Windows Server · Active Directory · Linux · DHCP / DNS', icon:Server },
  { label:'Cloud technologies', value:'AWS · Azure · Hybrid deployment · Terraform exposure', icon:Cloud },
  { label:'Security operations', value:'Security foundations · Monitoring · Scripting', icon:ShieldCheck },
  { label:'Engineering & automation', value:'Python · PowerShell · Bash · SQL · Embedded systems', icon:Cpu },
];

const experience = [
  { year:'2026 — now', role:'Founder & Lead Consultant', company:'Eragonova Enterprise', detail:'Building practical technology and engineering solutions for people, teams, and growing enterprises.' },
  { year:'2025', role:'Auditor · Data Analyst Specialist', company:'Springboard · Remote', detail:'Protected data quality, strengthened reporting workflows, and supported program compliance.' },
  { year:'2023', role:'Graphic Designer · Teacher', company:'Shalom.Net · Achievers Preparatory School', detail:'Connected creative communication with learning, collaboration, and stakeholder care.' },
  { year:'2021 — 2023', role:'Missionary Service', company:'The Church of Jesus Christ of Latter-day Saints · Ghana', detail:'Led training, outreach, conflict resolution, teaching, and compassionate community service.' },
];

const diplomaSemesters = [
  ['Year 1 · Semester 1 · 2023/2024','GPA / CGPA: 4.53',['DEE101 Electronics I — A (80)','DEE121 Network Analysis I — B+ (77)','DEE143 Electrical Engineering Lab I — A+ (85)','MCE111 Thermodynamics (Heat & Cooling) — A (81)','MATH111 Engineering Mathematics I — A (81)','COS101 Communication Skills I — A (80)','CLT101 Computer Literacy I — A+ (86)','MCE115 Engineering Drawing — A (83)']],
  ['Year 1 · Semester 2 · 2023/2024','GPA: 3.95 · CGPA: 4.23',['DEE102 Electronics II — B (74)','DEE132 Electrical Machines I — B (70)','CLT102 Computer Literacy II — A (81)','AFS102 African Studies — A (84)','COS102 Communication Skills II — C+ (67)','MAT112 Engineering Mathematics II — B+ (78)','DMCE132 Mechanics of Fluids — A+ (87)','DEE122 Network Analysis II — B+ (77)','DEE144 Electrical Engineering Lab II — B+ (77)']],
  ['Year 2 · Semester 1 · 2024/2025','GPA: 3.78 · CGPA: 4.08',['DEE211 Telecommunication I — B+ (77)','DEE225 Measurement & Instruments I — D+ (56)','DEE231 Electrical Machines II — A (82)','DEE241 Power Systems I — C (60)','DEE243 Electrical Engineering Lab II — B (70)','DEE245 Electrical Engineering Lab IV — B (70)','MAT211 Engineering Mathematics III — A+ (86)','STA247 Research Methods — A+ (87)','DEE227 Intro to Computer Technology — B+ (79)']],
  ['Year 2 · Semester 2 · 2024/2025','GPA: 3.13 · CGPA: 3.84',['DEE208 Digital Electronics — B (74)','DEE222 Control Systems — B+ (76)','DEE232 Electrical Machines III — C (60)','DEE244 Electrical Engineering Lab V — C (63)','DEE246 Electrical Engineering Lab VI — C (60)','MAT212 Engineering Mathematics IV — B (70)','ETP202 Entrepreneurship — A+ (88)','DEE242 Power Systems II — D (52)']],
];

const ensignSemesters = [
  ['Spring 2024','4/22/2024 – 7/24/2024','4.000','4.000',[
    ['CS104','Python Scripting','3.00','A','12.00'],
    ['IT125','Introduction to Information Technology','3.00','A','12.00'],
  ]],
  ['Fall 2024','9/16/2024 – 12/18/2024','4.000','4.000',[
    ['IT235','Cloud Server Administration','3.00','A','12.00'],
    ['IT255','Networking Fundamentals','3.00','A','12.00'],
  ]],
  ['2025 · Term 1','1/06/2025 – 2/22/2025','4.000','4.000',[
    ['IT143','Database Design and Analysis','3.00','A','12.00'],
  ]],
  ['2025 · Term 3','5/05/2025 – 6/21/2025','4.000','4.000',[
    ['IT210','Linux Fundamentals','3.00','A','12.00'],
  ]],
  ['2025 · Term 4','6/30/2025 – 8/16/2025','4.000','4.000',[
    ['IT350','Network Configuration & Design','3.00','A','12.00'],
  ]],
  ['2025 · Term 5','9/01/2025 – 10/18/2025','4.000','4.000',[
    ['IT312','Cybersecurity Foundations','3.00','A','12.00'],
  ]],
  ['2025 · Term 6','10/27/2025 – 12/13/2025','4.000','4.000',[
    ['IT316','Scripting for Security Operations','3.00','A','12.00'],
  ]],
  ['2026 · Block 1','1/05/2026 – 2/21/2026','4.000','4.000',[
    ['IT160','Cloud Computing Essentials','3.00','A','12.00'],
  ]],
  ['2026 · Block 2','3/02/2026 – 4/18/2026','4.000','4.000',[
    ['IT330','Azure Technologies','3.00','A','12.00'],
  ]],
  ['2026 · Block 3','5/04/2026 – 6/20/2026','4.000','4.000',[
    ['ENG101','Introduction to College Writing','3.00','A','12.00'],
    ['GS170','Career Development','1.00','A','4.00'],
    ['IT335','AWS Cloud Practitioner','3.00','A','12.00'],
  ]],
  ['2026 · Block 4','6/29/2026 – 8/15/2026','4.000','4.000',[
    ['BAP115','Excel and Introduction to Technology','1.00','A','4.00'],
    ['COMM122','Interpersonal Communications','3.00','A','12.00'],
    ['ENG301','Technical Writing','3.00','A','12.00'],
    ['IT340','Business Intelligence Systems','3.00','A','12.00'],
    ['IT497','IT Capstone','1.50','A','6.00'],
  ]],
];

const topUpSemester = [
  ['MATH213','Transform and Boundary Values Problem','C','64'],
  ['BEEE223','Analog Communication Systems','B+','79'],
  ['BEEE215','Electrical Wiring Design','B+','78'],
  ['BEEE227','Programming With C++','B','72'],
  ['BEEE217','Electromagnetic Fields Theory','A+','88'],
  ['BEEE231','DC Machines','B+','76'],
  ['BEEE243','Analog Communication and DC Machines Lab','B+','77'],
  ['BEEE245','Engineering Economics','C+','68'],
  ['BSTA247','Research Methodology for Engineers','B','72'],
];

const spiritualMilestones = [
  ['July 25, 2009','Baptism','At age nine, chose baptism as a personal commitment.'],
  ['July 26, 2009','Confirmation','Received the gift of the Holy Ghost.'],
  ['December 16, 2012','Ordained Deacon','Began formal priesthood service and learned responsibility.'],
  ['September 7, 2014','Ordained Teacher','Developed greater stewardship and service.'],
  ['May 21, 2017','Ordained Priest','Strengthened testimony through sacrament service.'],
  ['October 18, 2020','Ordained Elder','Prepared for missionary service and greater responsibility.'],
  ['March 20, 2021','Temple Endowment','Received the endowment at the Accra Ghana Temple.'],
  ['2021–2023','Missionary Service','Served in Ghana, developing resilience, leadership, teaching, and compassion.'],
  ['September–December 2023','Institute & District Callings','Served in teaching, missionary, auditing, and leadership responsibilities in Twifo Praso Ghana District.'],
  ['July 6, 2025','Ordained High Priest','Entered another stage of priesthood leadership and service.'],
  ['2025','Stake Leadership','Served as Stake High Councilor and Welfare & Self-Reliance Specialist in Kumasi.'],
  ['August 2, 2025','Father’s Passing','A profound trial that deepened faith and reliance on the plan of salvation.'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All work');
  const filters = ['All work','Cloud','Infrastructure','Data','Networking','Planning'];
  const visibleProjects = activeFilter === 'All work' ? projects : projects.filter(p => p.category.toLowerCase().includes(activeFilter.toLowerCase()) || (activeFilter === 'Data' && p.category.toLowerCase().includes('operations')));
  const closeMenu = () => setMenuOpen(false);
  useEffect(() => { document.title = 'Edward Wonder Mordey Portfolio'; }, []);

  return <div className="site-shell">
    <header className="site-header">
      <a className="brand" href="#top" onClick={closeMenu} aria-label="Edward Wonder Mordey home"><img src="./images/image_1780825279152.jpeg" alt="Eragonova Enterprise crest" /><span>Edward Wonder<br /><b>Mordey</b></span></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
      <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
        <a href="#about" onClick={closeMenu}>About</a><a href="#work" onClick={closeMenu}>Selected work</a><a href="#journey" onClick={closeMenu}>Journey</a><a href="#growth" onClick={closeMenu}>Faith & Growth</a><a href="#academics" onClick={closeMenu}>Academics</a><a href="#contact" onClick={closeMenu}>Contact</a><a className="nav-cta" href="mailto:edwardwondermordey@gmail.com" onClick={closeMenu}>Let's talk <ArrowUpRight size={16}/></a>
      </nav>
    </header>

    <main id="top">
      <section className="hero section-wrap"><div className="hero-copy"><p className="eyebrow"><span className="eyebrow-line"/> IT · Engineering · Service</p><h1>Building systems<br/><em>with purpose.</em></h1><p className="hero-intro">I'm Edward — an IT and Engineering professional in Kumasi, Ghana, turning complex systems into dependable tools that help people move forward.</p><div className="hero-actions"><a className="button button-dark" href="#work">Explore my work <ArrowUpRight size={17}/></a><a className="text-link" href="mailto:edwardwondermordey@gmail.com">Start a conversation <span>↗</span></a></div><div className="hero-note"><span className="pulse-dot"/> Available for thoughtful collaborations</div></div><div className="hero-visual"><div className="portrait-frame"><img src="./images/IMG-20260626-WA0013.jpg.jpeg" alt="Edward Wonder Mordey" fetchPriority="high"/></div><div className="hero-card hero-card-top"><span>Based in</span><strong>Kumasi, Ghana</strong></div><div className="hero-card hero-card-bottom"><strong>4.0 / 4.0</strong><span>Ensign College GPA</span></div><div className="hero-stamp">EWM<br/><small>EST. 2026</small></div></div></section>
      <section className="marquee-band" aria-label="Areas of practice"><div className="marquee-content"><span>Systems that serve</span><i>✦</i><span>Engineering with empathy</span><i>✦</i><span>Always learning</span><i>✦</i><span>Systems that serve</span><i>✦</i><span>Engineering with empathy</span><i>✦</i></div></section>
      <section className="about-section section-wrap" id="about"><div className="section-label"><span>01</span><span>About me</span></div><div className="about-grid"><div><h2>Technical depth.<br/><em>Human direction.</em></h2></div><div className="about-copy"><p className="lead">Resourceful by nature, I work across system administration, cloud technologies, electrical engineering, and community development.</p><p>My best work sits at the intersection of reliable infrastructure and meaningful service. Whether I'm mapping a hybrid cloud environment, auditing a workflow, or supporting a local initiative, I bring curiosity, clarity, and a commitment to doing things the right way.</p><a className="text-link" href="#journey">Read my journey <span>↗</span></a></div></div><div className="skill-grid">{skills.map(({label,value,icon:Icon})=><div className="skill-card" key={label}><Icon size={21}/><div><h3>{label}</h3><p>{value}</p></div></div>)}</div></section>
      <section className="work-section section-wrap" id="work"><div className="section-heading"><div><div className="section-label"><span>02</span><span>Selected work</span></div><h2>Ideas made <em>useful.</em></h2></div><p>Projects shaped by a belief that good technology should feel clear, considered, and built to last.</p></div><div className="filter-row">{filters.map(f=><button key={f} className={activeFilter===f?'filter active':'filter'} onClick={()=>setActiveFilter(f)}>{f}</button>)}</div><div className="project-grid">{visibleProjects.map(p=>{const Icon=p.icon;return <article className={`project-card ${p.featured?'featured':''}`} key={p.title}><div className="project-top"><span className="project-number">{p.number}</span><span className="project-icon"><Icon size={20}/></span></div><div className="project-body"><p className="project-category">{p.category}</p><h3>{p.title}</h3><p className="project-description">{p.description}</p><div className="tag-row">{p.tags.map(t=><span key={t}>{t}</span>)}</div><a className="project-case-link" href={`./case-studies.html${p.caseStudy}`}>View Case Study <span>→</span></a></div></article>})}</div></section>
      <section className="journey-section" id="journey"><div className="section-wrap"><div className="section-label light"><span>03</span><span>My journey</span></div><div className="journey-grid"><div><h2>A work in<br/><em>progress.</em></h2><p className="journey-intro">From electrical circuits to cloud infrastructure, every chapter has added a new way to serve.</p><div className="quote-card"><Quote size={22}/><p>“Spiritual values guide my professional ethics, ensuring solutions are technically sound and morally responsible.”</p></div></div><div className="timeline">{experience.map(item=><div className="timeline-item" key={item.role}><div className="timeline-year">{item.year}</div><div className="timeline-marker"><span/></div><div className="timeline-detail"><h3>{item.role}</h3><p className="company">{item.company}</p><p>{item.detail}</p></div></div>)}</div></div></div></section>
      <section className="growth-section section-wrap" id="growth"><div className="section-label"><span>04</span><span>Faith & Growth</span></div><div className="education-grid"><div><h2>Faith is the foundation.<br/><em>Growth is the journey.</em></h2><p>My professional journey is inseparably tied to my spiritual progression. Every certificate earned, every calling sustained, and every trial endured has shaped me into someone who values resilience, integrity, and service.</p><p>From choosing baptism at age nine to missionary service, priesthood progression, Church leadership, academic achievement, and some of life's most difficult trials, I have learned that growth is not simply about achievement. It is about becoming more capable of serving others with integrity, humility, resilience, and faith.</p><div className="quote-card"><Quote size={22}/><p>“My faith gives purpose to what I build, and my experiences continue to shape the person I am becoming.”</p></div></div><div className="about-copy"><p className="lead">My spiritual and professional identities are not competing paths. They are strands of the same journey.</p><p>My faith has taught me integrity. My service has taught me compassion. My education has taught me discipline. My trials have taught me resilience. My professional journey has taught me stewardship.</p><p>I believe technology should serve people, leadership should be grounded in compassion, and professional success should never come at the expense of integrity.</p></div></div>
        <div className="transcript-block"><h3>Professional Growth Portfolio</h3><details open><summary><strong>Read the full story</strong><span>Spiritual growth, education, leadership & resilience</span></summary><div className="about-copy"><h3>Introduction</h3><p>My professional journey is inseparably tied to my spiritual progression. Life has taught me that even when you are doing right by God, challenges still come. Yet, through faith and discipline, I have pressed forward. This story reflects my academic achievements, leadership experiences, and the lessons I have learned, showing how they prepare me for both professional excellence and lifelong discipleship.</p><h3>Academic and spiritual integration</h3><p>I began with BYU-Pathway Worldwide in 2023, building discipline, communication, university skills, and technical confidence. At Ensign College, my studies progressed into System Administration while I maintained a 4.0 GPA. My technical development has included Python, information technology, cloud server administration, networking, databases, Linux, network configuration, cybersecurity, cloud computing, Azure, AWS, college writing, and career development.</p><p>Alongside technical studies, religious courses through BYU-Idaho and Institutes of Religion strengthened my testimony of Jesus Christ and reminded me that education must be grounded in eternal values. Courses concerning the Savior, eternal families, the Book of Mormon, and forgiveness became spiritual anchors rather than simply academic requirements.</p><h3>Callings and leadership</h3><p>In Twifo Praso Ghana District, I served in Institute and Seminary responsibilities, taught, supported missionary work, participated in district leadership, audited, and represented Young Single Adults. After moving to Kumasi, I served as a Stake High Councilor and Stake Welfare & Self-Reliance Specialist. These callings taught me accountability, teaching, organization, stakeholder coordination, and the importance of supporting people in both spiritual and temporal matters.</p><h3>Life lessons and resilience</h3><p>On August 2, 2025, I experienced one of the hardest trials of my life with the passing of my father. The grief was real, but the plan of salvation, temple work, and the grace of Heavenly Father gave me comfort and hope. Even while grieving, I continued my studies and responsibilities. That season taught me that resilience is sometimes simply choosing to continue doing what is right when you do not feel strong enough to do it.</p><h3>Faith in professional practice</h3><p>My faith influences the way I approach technology. When I work with data, integrity matters. When I troubleshoot a difficult system, patience matters. When someone corrects my work, humility matters. When I design infrastructure that others will depend upon, stewardship matters. I want professional excellence to include technical competence, trustworthiness, security, responsibility, and service.</p><h3>Application of learning</h3><ul><li><strong>Technical skills:</strong> Applying IT knowledge to solve problems and prepare for future employment.</li><li><strong>Leadership:</strong> Using lessons from Church callings to manage responsibilities, teach, coordinate, and support others.</li><li><strong>Resilience:</strong> Balancing grief, discouragement, and academic rigor while remaining faithful.</li><li><strong>Integration of faith and work:</strong> Allowing eternal values to guide professional decisions and relationships.</li></ul><h3>Future orientation</h3><p>I am committed to completing my Bachelor of Applied Science in System Administration at Ensign College, continuing my B.Eng. Electrical & Electronics Engineering top-up at Kumasi Technical University, developing professionally in cloud, cybersecurity, networking, and system administration, supporting my family, serving faithfully, and building a career where technical excellence and spiritual character can exist together.</p><h3>Conclusion</h3><p>My professional growth has been shaped by both academic excellence and spiritual resilience. Certificates, coursework, callings, leadership, engineering study, and personal trials have prepared me for a career in IT and engineering, but more importantly, they have taught me that true success comes from combining technical skill with faith in God. Even when life is hard, I remain committed to pressing forward with steadfastness, knowing that both my professional and spiritual journeys are guided by the Savior.</p></div></details></div>
        <div className="transcript-block"><h3>Spiritual Milestones</h3>{spiritualMilestones.map(([date,event,note])=><details key={event}><summary><strong>{event}</strong><span>{date}</span></summary><p>{note}</p></details>)}</div>
      </section>

      <section className="education-section section-wrap academic-redesign" id="academics"><div className="section-label"><span>05</span><span>Academic profile</span></div><div className="academic-hero"><div><p className="academic-kicker">Education · Credentials · Transcript</p><h2>Study with <em>purpose.</em></h2><p>My academic record brings together my primary IT discipline, engineering foundation, professional certificates, and the semester results behind them.</p></div><div className="academic-gpa-card"><span>Primary discipline</span><strong>4.0 / 4.0</strong><b>Ensign College GPA</b><small>Bachelor of Applied Science in System Administration · Final Year</small></div></div>
        <div className="academic-stat-grid"><div><span>Primary degree</span><strong>BAS · System Administration</strong><small>Ensign College · Final Year</small></div><div><span>Engineering</span><strong>B.Eng. · Level 300</strong><small>KsTU · top-up on resumption</small></div><div><span>Completed</span><strong>3.84 CGPA</strong><small>Diploma · Second Class Upper</small></div><div><span>Current engineering record</span><strong>3.6750</strong><small>20 credits · 73.5 grade points</small></div></div>
        <div className="academic-credentials"><div className="academic-heading"><span>01</span><div><h3>Credentials at a glance</h3><p>The qualifications and records that define the academic foundation of my professional journey.</p></div></div><div className="credential-list"><div className="credential-item"><GraduationCap size={25}/><div><span>Current · 4.0 / 4.0</span><h3>Bachelor of Applied Science in System Administration</h3><p>Ensign College · Final Year</p></div><ChevronDown size={18}/></div><div className="credential-item"><Award size={25}/><div><span>Completed · December 2025</span><h3>Diploma in Electrical & Electronic Engineering</h3><p>Kumasi Technical University · Final CGPA 3.84 · Second Class Upper Division</p></div><ChevronDown size={18}/></div><div className="credential-item"><Cpu size={25}/><div><span>Current · Level 300 on resumption</span><h3>B.Eng. Electrical & Electronics Engineering top-up</h3><p>Kumasi Technical University · Progressing from Level 2 · Current recorded CGPA 3.6750</p></div><ChevronDown size={18}/></div><div className="credential-item"><Check size={25}/><div><span>Professional certificates</span><h3>IT Professional · Technical Support Engineer · PathwayConnect</h3><p>TestOut Network Pro · Hybrid Server Pro · Client Pro</p></div><ChevronDown size={18}/></div></div></div>
        <div className="academic-ensign"><div className="academic-heading"><span>02</span><div><h3>Ensign College · Transcript history</h3><p>Semester-by-semester record from the official transcript, including course codes, grades, credits, quality points, and term GPA. Cumulative credit totals are intentionally omitted from the portfolio summary.</p></div></div><div className="ensign-transcript-list">{ensignSemesters.map(([term,date,gpa,cum,courses])=><details key={term}><summary><div className="ensign-summary-main"><strong>{term}</strong><span>{date}</span></div><div className="ensign-summary-gpa"><b>{gpa}</b><small>Term GPA</small><span>{cum} cumulative GPA</span></div><span className="ensign-arrow" aria-hidden="true">›</span></summary><div className="ensign-table"><div className="ensign-table-head"><span>Course</span><span>Course description</span><span>Credits</span><span>Grade</span><span>Quality points</span></div>{courses.map(([code,description,credits,grade,points])=><div className="ensign-table-row" key={code}><strong>{code}</strong><span>{description}</span><span>{credits}</span><b>{grade}</b><span>{points}</span></div>)}</div></details>)}</div><div className="ensign-awards"><div><span>Awarded</span><strong>12/18/2024</strong><p>Certificate · Technical Support Engineer</p></div><div><span>Awarded</span><strong>2/21/2026</strong><p>Certificate · IT Professional</p></div></div></div>
        <div className="academic-transcripts"><div className="academic-heading"><span>03</span><div><h3>Diploma · semester-by-semester record</h3><p>Detailed grades from the completed Electrical & Electronic Engineering diploma.</p></div></div><div className="transcript-block academic-transcript-list">{diplomaSemesters.map(([title,summary,courses])=><details key={title}><summary><strong>{title}</strong><span>{summary}</span></summary><ul>{courses.map(c=><li key={c}>{c}</li>)}</ul></details>)}</div></div>
        <div className="academic-current"><div className="academic-heading"><span>04</span><div><h3>Current B.Eng. record</h3><p>The latest semester record remains clearly identified as the Level 2 Semester 1 results; the programme status now reflects Level 300 on resumption.</p></div></div><div className="current-record-card"><div className="record-header"><div><span>2025/2026 · Level 2 · Semester 1</span><h3>9 courses · 20 credits</h3></div><div className="record-metrics"><strong>3.6750</strong><small>GPA / CGPA</small><b>73.5</b><small>grade points</small></div></div><div className="grade-table"><div className="grade-table-head"><span>Course</span><span>Course title</span><span>Grade</span><span>Mark</span></div>{topUpSemester.map(([code,name,grade,mark])=><div className="grade-row" key={code}><strong>{code}</strong><span>{name}</span><b className={`grade-badge grade-${grade.replace('+','plus')}`}>{grade}</b><small>{mark}%</small></div>)}</div></div></div>
        <div className="academic-note"><Award size={20}/><div><strong>Academic direction</strong><p>System Administration is my primary professional discipline. Electrical & Electronic Engineering strengthens that path with an additional foundation in physical systems, electronics, power, and engineering problem-solving.</p></div></div>
      </section>

      <section className="contact-section section-wrap" id="contact"><div className="contact-panel"><div className="contact-copy"><p className="eyebrow">06 · Contact</p><h2>Let's build something<br/><em>worth documenting.</em></h2><p>Have a systems challenge, data problem, or thoughtful project in mind? I'd be glad to start a conversation.</p></div><div className="contact-actions"><a className="contact-link" href="mailto:edwardwondermordey@gmail.com"><Mail size={17}/> Email <ArrowUpRight size={16}/></a><a className="contact-link" href="https://github.com/Edward-Wonder-Mordey" target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={16}/></a><a className="contact-link" href="https://www.linkedin.com/in/Edward-Wonder-Mordey" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={16}/></a></div></div></section>
    </main>
    <footer className="site-footer section-wrap"><span>© 2026 Edward Wonder Mordey</span><span>Built with purpose.</span></footer>
  </div>;
}

export default App;
