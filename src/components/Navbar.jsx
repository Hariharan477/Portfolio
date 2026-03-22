const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">Hariharan</div>

      <ul className="nav-links">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>

      <button className="nav-cta" onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}>
        Contact Me
      </button>

      <div className="nav-mobile-btn" onClick={() => {
        const menu = document.getElementById('mobile-menu')
        if (menu) menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex'
      }} aria-label="menu">
        <span />
        <span />
        <span />
      </div>

      <div id="mobile-menu" style={{
        display: 'none',
        position: 'absolute',
        top: 60, left: 0, right: 0,
        background: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(24px)',
        border: '1px solid rgba(230,211,179,0.5)',
        borderRadius: '20px',
        padding: '20px 24px',
        flexDirection: 'column',
        gap: '12px',
        boxShadow: '0 8px 40px rgba(62,47,28,0.12)',
      }}>
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            style={{ color: 'rgba(62,47,28,0.7)', textDecoration: 'none', fontSize: '1rem', fontWeight: 500, padding: '10px 0', borderBottom: '1px solid rgba(230,211,179,0.4)' }}
            onClick={() => { document.getElementById('mobile-menu').style.display = 'none' }}
          >
            {l.label}
          </a>
        ))}
        <button className="nav-cta" style={{ marginTop: '8px' }} onClick={() => { document.getElementById('mobile-menu').style.display = 'none'; document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }) }}>
          Contact Me
        </button>
      </div>
    </nav>
  )
}
