import useFadeIn from '../hooks/useFadeIn'

const plans = [
  {
    name: 'Landing Page',
    price: '2,499',
    currency: '₹',
    desc: 'Perfect for small businesses that need a professional web presence to attract more customers.',
    features: [
      { label: 'Modern, clean design', yes: true },
      { label: 'Mobile responsive', yes: true },
      { label: 'Fast delivery (3–5 days)', yes: true },
      { label: 'Contact form', yes: true },
      { label: 'SEO-ready', yes: true },
      { label: 'Multi-page site', yes: false },
      { label: 'Firebase integration', yes: false },
    ],
    popular: false,
    glowColor: '#C9B18A',
    btnClass: 'outline',
  },
  {
    name: '3-Page Website',
    price: '5,999',
    currency: '₹',
    desc: 'A complete business website to grow your brand and help you stand out from competitors.',
    features: [
      { label: 'Home + About + Contact', yes: true },
      { label: 'Mobile responsive', yes: true },
      { label: 'Clean, premium UI', yes: true },
      { label: 'Business-focused layout', yes: true },
      { label: 'Fast delivery (5–7 days)', yes: true },
      { label: 'SEO-ready', yes: true },
      { label: 'Firebase integration', yes: false },
    ],
    popular: true,
    glowColor: '#A67C52',
    btnClass: 'primary',
  },
  {
    name: 'Custom Website',
    price: "Let's talk",
    currency: '',
    desc: 'Got a bigger idea? Let\'s discuss your needs and build something that\'s truly yours.',
    features: [
      { label: 'Built around your needs', yes: true },
      { label: 'Firebase / database', yes: true },
      { label: 'Custom features', yes: true },
      { label: 'Fully responsive', yes: true },
      { label: 'Dedicated support', yes: true },
      { label: 'Scalable architecture', yes: true },
      { label: 'Timeline based on scope', yes: true },
    ],
    popular: false,
    glowColor: '#E6D3B3',
    btnClass: 'outline',
  },
]

export default function Pricing() {
  const ref = useFadeIn()

  return (
    <section id="pricing" ref={ref}>
      <div className="section-container">
        <div className="fade-in">
          <span className="section-tag">Pricing</span>
          <h2 className="section-title">
            Simple, Honest<br /><span className="gradient-text">Pricing</span>
          </h2>
          <p className="section-subtitle">
            No hidden charges. No confusion. Just a great website at a fair price — 
            focused on growing your business.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <div
              className={`pricing-card glass-card fade-in fade-in-delay-${i + 1}${plan.popular ? ' popular' : ''}`}
              key={plan.name}
            >
              {plan.popular && <div className="pricing-popular-badge">Most Popular</div>}
              <div className="pricing-glow" style={{ background: plan.glowColor }} />
              <div className="pricing-plan-name">{plan.name}</div>
              <div className="pricing-price">
                {plan.currency && <span className="pricing-currency">{plan.currency}</span>}
                <span className="pricing-amount" style={{ fontSize: plan.popular ? '3.5rem' : '2.8rem' }}>
                  {plan.price}
                </span>
              </div>
              <p className="pricing-desc">{plan.desc}</p>
              <div className="pricing-divider" />
              <ul className="pricing-features">
                {plan.features.map((f) => (
                  <li className="pricing-feature" key={f.label}>
                    <span className={`pricing-check ${f.yes ? 'yes' : 'no'}`}>
                      {f.yes ? '✓' : '—'}
                    </span>
                    <span style={{ color: f.yes ? 'rgba(62,47,28,0.75)' : 'rgba(62,47,28,0.3)' }}>
                      {f.label}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className={`pricing-btn ${plan.btnClass}`}
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              >
                {plan.currency ? 'Get Started →' : 'Let\'s Discuss →'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
