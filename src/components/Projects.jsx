import useFadeIn from '../hooks/useFadeIn'

const projects = [
  {
    label: 'E-Commerce',
    title: 'Local Shop — Business Website',
    desc: 'A clean, mobile-first business website for a local shop. Includes product showcase, contact form, and location map.',
    tech: ['React', 'CSS', 'Firebase'],
    gradient: 'linear-gradient(135deg, #E6D3B322, #C9B18A22)',
    image: '/ecommerce.jpg',
  },
  {
    label: 'Beauty',
    title: 'Salon Booking — Landing Page',
    desc: 'A high-converting landing page for a local salon with online booking, services list, pricing, and gallery.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    gradient: 'linear-gradient(135deg, #C89B5E22, #E6D3B322)',
    image: '/beauty.png',
  },
  {
    label: 'Food & Dining',
    title: 'Restaurant Menu — Web App',
    desc: 'Digital menu and ordering page for a restaurant. Customers browse the menu, add items, and place orders online.',
    tech: ['React', 'Firebase', 'Firestore'],
    gradient: 'linear-gradient(135deg, #A67C5222, #C9B18A22)',
    image: '/dining.jpg',
  },
  {
    label: 'Creative',
    title: 'Photographer — Portfolio Site',
    desc: 'Elegant portfolio site for a freelance photographer with full-screen gallery, about section, and booking form.',
    tech: ['React', 'CSS', 'EmailJS'],
    gradient: 'linear-gradient(135deg, #E6D3B322, #A67C5222)',
    image: '/creative.jpg',
  },
]

export default function Projects() {
  const ref = useFadeIn()

  return (
    <section id="projects" ref={ref}>
      <div className="section-container">
        <div className="fade-in">
          <span className="section-tag">My Work</span>
          <h2 className="section-title">
            Websites I&apos;ve<br /><span className="gradient-text">Built for Clients</span>
          </h2>
          <p className="section-subtitle">
            Real-world projects — clean, responsive, and business-ready.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div
              className={`project-card glass-card fade-in fade-in-delay-${Math.min(i % 3 + 1, 4)}`}
              key={p.title}
            >
              <div className="project-card-visual">
                <div className="project-card-visual-glow" style={{ background: p.gradient }} />
                {p.image ? (
                  <img src={p.image} alt={p.title} className="project-card-img" />
                ) : (
                  <span className="project-emoji" style={{
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    color: 'var(--accent-deep)',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    background: 'rgba(166,124,82,0.12)',
                    padding: '8px 20px',
                    borderRadius: '50px',
                    border: '1px solid rgba(166,124,82,0.2)',
                    filter: 'none',
                  }}>{p.label}</span>
                )}
              </div>
              <div className="project-card-body">
                <div className="project-card-title">{p.title}</div>
                <p className="project-card-desc">{p.desc}</p>
                <div className="project-card-footer">
                  <div className="project-tech-badges">
                    {p.tech.map((t) => (
                      <span key={t} className="project-badge">{t}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <span className="project-link" title="View">→</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
