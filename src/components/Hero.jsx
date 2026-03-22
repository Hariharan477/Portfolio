import useFadeIn from '../hooks/useFadeIn'

export default function Hero() {
  const ref = useFadeIn()

  return (
    <section className="hero" id="hero" ref={ref}>
      <div className="hero-content">
        {/* Left */}
        <div>
          <h1 className="hero-title fade-in">
            Turning your business into a<br />
            <span className="hero-highlight">powerful online presence</span>
          </h1>
          <p className="hero-subtitle fade-in fade-in-delay-1">
            Modern, clean, and high-performing websites built for small businesses — 
            designed to attract customers and drive real results online.
          </p>
          <div className="hero-actions fade-in fade-in-delay-2">
            <a href="#contact" className="btn-primary">
              Let&apos;s Build Your Website →
            </a>
            <a href="#projects" className="btn-secondary">
              See My Work
            </a>
          </div>
          <div className="hero-stats fade-in fade-in-delay-3">
            <div className="hero-stat">
              <span className="hero-stat-num">10+</span>
              <span className="hero-stat-label">Sites Delivered</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num">5★</span>
              <span className="hero-stat-label">Client Rating</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num">Fast</span>
              <span className="hero-stat-label">Delivery</span>
            </div>
          </div>
        </div>

        {/* Right – Floating Card */}
        <div className="hero-card glass-card fade-in fade-in-delay-2">
          <div className="hero-card-avatar" style={{ overflow: 'hidden', padding: 0 }}>
            <img
              src="/hari-photo.jpg"
              alt="Hariharan"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '35% 20%', borderRadius: '50%' }}
            />
          </div>
          <div className="hero-card-name">Hariharan</div>
          <div className="hero-card-role">Engineering Student · Web Developer</div>
          <div className="hero-card-tags">
            {['React', 'Firebase', 'UI Design', 'Landing Pages', 'Business Sites'].map((t) => (
              <span key={t} className="hero-tag">{t}</span>
            ))}
          </div>
          <div className="hero-card-glow" />
        </div>
      </div>
    </section>
  )
}
