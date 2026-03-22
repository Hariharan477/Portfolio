import useFadeIn from '../hooks/useFadeIn'

const highlights = [
  { text: 'Engineering student who applies real skills on real projects' },
  { text: 'Delivered websites for small businesses and local entrepreneurs' },
  { text: 'Focused on clean designs that attract more customers' },
  { text: 'Every site I build is mobile-responsive and business-ready' },
]

const infoCards = [
  {
    title: 'What I Build',
    body: 'Landing pages, business websites, and custom web apps using React, Firebase, and modern UI frameworks — built to load fast and look great.',
  },
  {
    title: 'My Mindset',
    body: 'I\'m not just learning — I\'m applying. Every project makes me sharper. I treat every client\'s website like it\'s my own business.',
  },
  {
    title: 'Why Work With Me',
    body: 'You get a dedicated developer who genuinely wants your business to grow online. No fluff — just clean, effective websites delivered on time.',
  },
]

export default function About() {
  const ref = useFadeIn()

  return (
    <section id="about" ref={ref}>
      <div className="section-container">
        <div className="fade-in">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">
            Hi, I&apos;m Hari —<br /><span className="gradient-text">I Build Websites That Work</span>
          </h2>
          <p className="section-subtitle">
            An engineering student who builds modern, clean, and practical websites 
            for small businesses that want to grow online.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card glass-card fade-in fade-in-delay-1">
            <p className="about-text">
              Hi, I&apos;m Hari — an engineering student who builds modern, clean, and practical 
              websites. I focus on creating simple but effective websites that help small 
              businesses grow and attract more customers.
            </p>
            <p className="about-text">
              I&apos;m not just learning… I&apos;m applying my skills in real-world projects and 
              continuously improving every day. If you&apos;re looking for a website that actually 
              works for your business, I can help.
            </p>
            <div className="about-highlights">
              {highlights.map((h) => (
                <div className="about-highlight-item" key={h.text}>
                  <span className="about-highlight-icon">→</span>
                  <span className="about-highlight-text">{h.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-right fade-in fade-in-delay-2">
            {infoCards.map((card, i) => (
              <div className="about-info-card glass-card" key={i}>
                <div className="about-info-header">
                  <div className="about-info-icon" style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="about-info-title">{card.title}</div>
                </div>
                <p className="about-info-body">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
