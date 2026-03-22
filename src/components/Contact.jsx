import { useState } from 'react'
import useFadeIn from '../hooks/useFadeIn'

const details = [
  { label: 'Email', value: 'hariharan477hr@gmail.com' },
  { label: 'WhatsApp', value: '+91 98841 67457' },
  { label: 'GitHub', value: 'github.com/Hariharan477' },
  { label: 'Location', value: 'Tamil Nadu, India (Remote)' },
]

export default function Contact() {
  const ref = useFadeIn()
  const [form, setForm] = useState({ name: '', email: '', plan: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Construct WhatsApp message
    const planText = form.plan === 'landing' ? 'Landing Page (₹2,499)' :
                     form.plan === '3page' ? '3-Page Website (₹5,999)' :
                     form.plan === 'custom' ? 'Custom Website' : 'Other'

    const text = `Hi Hariharan, I'm reaching out from your portfolio!
    
*Name:* ${form.name}
*Contact:* ${form.email}
*Plan:* ${planText}

*Message:*
${form.message}`

    const whatsappUrl = `https://wa.me/919884167457?text=${encodeURIComponent(text)}`
    window.open(whatsappUrl, '_blank')

    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', plan: '', message: '' })
  }

  return (
    <section id="contact" ref={ref}>
      <div className="section-container">
        <div className="fade-in">
          <span className="section-tag">Contact</span>
          <h2 className="section-title">
            Let&apos;s Build Your<br /><span className="gradient-text">Website Together</span>
          </h2>
          <p className="section-subtitle">
            Tell me about your business and what you need — I&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info fade-in fade-in-delay-1">
            <div>
              <div className="contact-info-title">Let&apos;s Get Started</div>
              <p className="contact-info-text">
                Whether you need a simple landing page or a complete business website — 
                I&apos;m ready to help you grow your online presence.
              </p>
              <p className="contact-info-text">
                I respond within 24 hours and I&apos;ll make sure you&apos;re happy with 
                the result before we&apos;re done.
              </p>
            </div>

            {details.map((d, i) => (
              <div className="contact-detail glass-card" key={d.label}>
                <div className="contact-detail-icon" style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <div className="contact-detail-label">{d.label}</div>
                  <div className="contact-detail-value">{d.value}</div>
                </div>
              </div>
            ))}
          </div>

          <form className="contact-form glass-card fade-in fade-in-delay-2" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name" name="name" type="text"
                  placeholder="Your name"
                  value={form.name} onChange={handleChange} required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email or WhatsApp</label>
                <input
                  id="email" name="email" type="text"
                  placeholder="email or phone number"
                  value={form.email} onChange={handleChange} required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="plan">What do you need?</label>
              <select id="plan" name="plan" value={form.plan} onChange={handleChange} required>
                <option value="">Select a package...</option>
                <option value="landing">Landing Page — ₹2,499</option>
                <option value="3page">3-Page Website — ₹5,999</option>
                <option value="custom">Custom Website — Let&apos;s discuss</option>
                <option value="other">Something else</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Tell me about your business</label>
              <textarea
                id="message" name="message"
                rows={5}
                placeholder="What's your business? What do you want the website to do for you?"
                value={form.message} onChange={handleChange} required
              />
            </div>
            <button type="submit" className={`form-submit${sent ? ' sent' : ''}`}>
              {sent ? 'Message Sent — I\'ll reply within 24 hours' : 'Send Message →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
