const socials = [
  { label: 'GH', title: 'GitHub', href: 'https://github.com/Hariharan477' },
  { label: 'IG', title: 'Instagram', href: '#' },
  { label: 'LI', title: 'LinkedIn', href: '#' },
  { label: 'YT', title: 'YouTube', href: '#' },
]

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-logo">Hariharan</div>
        <div className="footer-socials">
          {socials.map((s) => (
            <a key={s.title} href={s.href} className="footer-social" title={s.title} aria-label={s.title}
               style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.5px' }}>
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
