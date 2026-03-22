import useFadeIn from '../hooks/useFadeIn'

const skills = [
  {
    num: '01',
    name: 'Web Development',
    desc: 'Building responsive, fast-loading websites from scratch — landing pages to full business sites.',
    tags: [
      { label: 'HTML & CSS', color: 'sandal' },
      { label: 'JavaScript', color: 'sandal' },
      { label: 'React', color: 'green' },
      { label: 'Responsive', color: 'sandal' },
    ],
    glowColor: '#C9B18A',
  },
  {
    num: '02',
    name: 'Firebase & Backend',
    desc: 'Integrating databases, authentication, and real-time features using Firebase and cloud tools.',
    tags: [
      { label: 'Firebase', color: 'green' },
      { label: 'Firestore', color: 'sandal' },
      { label: 'Auth', color: 'sandal' },
      { label: 'Hosting', color: 'sandal' },
    ],
    glowColor: '#E6D3B3',
  },
  {
    num: '03',
    name: 'UI Design',
    desc: 'Designing clean, minimal interfaces that look premium and are easy for customers to navigate.',
    tags: [
      { label: 'Figma', color: 'sandal' },
      { label: 'Glassmorphism', color: 'green' },
      { label: 'Animations', color: 'sandal' },
      { label: 'Dark & Light', color: 'sandal' },
    ],
    glowColor: '#C89B5E',
  },
  {
    num: '04',
    name: 'Landing Pages',
    desc: 'High-converting landing pages built to grow your customer base and make a strong first impression.',
    tags: [
      { label: 'SEO-friendly', color: 'sandal' },
      { label: 'Fast Load', color: 'green' },
      { label: 'CTA Focused', color: 'sandal' },
      { label: 'Mobile First', color: 'sandal' },
    ],
    glowColor: '#A67C52',
  },
]

export default function Skills() {
  const ref = useFadeIn()

  return (
    <section id="skills" ref={ref}>
      <div className="section-container">
        <div className="fade-in">
          <span className="section-tag">What I Do</span>
          <h2 className="section-title">
            Skills I Use to<br /><span className="gradient-text">Grow Your Business</span>
          </h2>
          <p className="section-subtitle">
            Focused, practical skills applied to real projects — built for businesses that want results.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="skill-card fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="skill-watermark">{skill.num}</div>
              <div className="skill-card-glow" style={{ background: skill.glowColor }} />
              
              <div className="skill-content">
                <div className="skill-header-line" style={{ background: skill.glowColor }}></div>
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-desc">{skill.desc}</p>
                
                <div className="skill-tags">
                  {skill.tags.map((tag, j) => (
                    <span key={j} className={`skill-tag ${tag.color}`}>
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
