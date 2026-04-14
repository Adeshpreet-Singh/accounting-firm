'use client';
import { useState, useEffect, useRef } from 'react';

const services = [
  { name: 'Tax Planning & Preparation', icon: '📊', desc: 'Year-round tax strategies that minimize liability while keeping you fully compliant. We stay ahead of code changes so you never miss an opportunity to save.', details: ['Federal & multi-state strategy', 'Tax-deferred investment planning', 'R&D tax credit identification', 'Quarterly estimated planning'] },
  { name: 'Audit & Assurance', icon: '🔍', desc: 'Independent audits that go beyond compliance — identifying inefficiencies, strengthening controls, and giving stakeholders confidence.', details: ['Financial statement audits', 'Internal controls (SOX)', 'Compliance audits', 'Agreed-upon procedures'] },
  { name: 'Bookkeeping & Accounting', icon: '📚', desc: 'Cloud-based bookkeeping that keeps financials pristine and decision-making data-driven. Monthly closes and reconciliations on time, every time.', details: ['Full-cycle bookkeeping', 'Monthly close & reporting', 'Bank reconciliation', 'AP/AR management'] },
  { name: 'CFO Advisory', icon: '👔', desc: 'Fractional CFO services for growing companies. Strategic financial leadership without the full-time cost.', details: ['Financial modeling', 'Cash flow forecasting', 'Board reporting', 'Capital raise support'] },
];

const team = [
  { name: 'Margaret Chen', role: 'Managing Partner, CPA', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80' },
  { name: 'Robert Kessler', role: 'Tax Partner, CPA', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80' },
  { name: 'Amara Williams', role: 'Audit Director, CPA', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80' },
  { name: 'Daniel Park', role: 'Advisory Partner, CFA', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
];

const testimonials = [
  { name: 'Jennifer Walsh', role: 'CEO, TechStart Inc', text: 'Kessler & Chen transformed our financial operations. Their tax strategy saved us over $400K last year, and their CFO advisory helped us raise our Series B.' },
  { name: 'Robert Huang', role: 'CFO, Pacific Retail', text: 'The audit team is exceptional. They identified control weaknesses we\'d missed for years and helped us build a world-class compliance framework.' },
  { name: 'Sarah Mitchell', role: 'Founder, GrowthLab', text: 'As a startup founder, I needed more than a bookkeeper — I needed a financial partner. Their fractional CFO service has been invaluable.' },
];

const faqs = [
  { q: 'What industries do you specialize in?', a: 'We serve clients across technology, healthcare, real estate, manufacturing, professional services, and nonprofit sectors. Our teams have deep domain expertise in each area.' },
  { q: 'How do your fees work?', a: 'We offer transparent, value-based pricing. Most engagements are structured as fixed monthly fees for ongoing services or project-based fees for one-time work. We provide detailed proposals before any engagement begins.' },
  { q: 'Do you work with small businesses?', a: 'Absolutely. We serve clients ranging from early-stage startups to established mid-market companies with $50M+ in revenue. Our service tiers are designed to scale with your business.' },
  { q: 'What accounting software do you support?', a: 'We are certified partners for QuickBooks, Xero, NetSuite, and Sage. We also support custom integrations with ERP systems including SAP and Oracle.' },
  { q: 'How quickly can you start?', a: 'For bookkeeping and basic tax services, we can typically onboard within 1-2 weeks. Audit engagements require more planning and usually begin within 4-6 weeks.' },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function AccountingFirm() {
  const [contactForm, setContactForm] = useState({ name: '', email: '', service: '', message: '' });
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const containerRef = useReveal();

  return (
    <div ref={containerRef} className="min-h-screen" style={{ background: '#fdfcfa' }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b" style={{ borderColor: 'rgba(184,155,94,0.15)' }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              <span className="text-2xl font-bold" style={{ color: '#b89b5e' }}>K</span>
              <span className="w-px h-6 mx-2" style={{ background: '#b89b5e' }}></span>
              <span className="text-2xl font-bold" style={{ color: '#b89b5e' }}>C</span>
            </div>
            <div>
              <span className="text-lg font-bold block" style={{ color: '#1a1f36' }}>Kessler & Chen</span>
              <span className="text-xs tracking-widest uppercase text-gray-400">Certified Public Accountants</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {['Services', 'Team', 'Testimonials', 'FAQ', 'Contact'].map((item) => (
              <a key={item} href="#" className="text-sm text-gray-500 hover:text-amber-700 transition-colors">{item}</a>
            ))}
          </div>
          <button className="btn-gold px-6 py-2.5 rounded-lg text-sm">Free Consultation</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative navy-bg pt-32 pb-24 px-6 overflow-hidden subtle-pattern">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="max-w-3xl">
            <div className="gold-line mb-6"></div>
            <h1 className="text-5xl md:text-6xl text-white leading-tight mb-6">
              Your finances,<br />
              <span style={{ color: '#b89b5e' }}>our expertise</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
              Full-service accounting, tax, and advisory firm serving ambitious businesses and individuals. We don't just report numbers — we help you make smarter financial decisions.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-gold px-8 py-4 rounded-lg font-semibold">Schedule Consultation</button>
              <button className="btn-outline-gold px-8 py-4 rounded-lg font-semibold">Our Services</button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-16">
            {[
              { num: '35+', label: 'Years of Experience' },
              { num: '1,200+', label: 'Clients Served' },
              { num: '$2.8B', label: 'Assets Managed' },
              { num: '99%', label: 'Client Satisfaction' },
            ].map((s) => (
              <div key={s.label} className="rounded-xl p-5 text-center" style={{ background: 'rgba(184,155,94,0.1)', border: '1px solid rgba(184,155,94,0.2)' }}>
                <div className="text-2xl font-bold" style={{ color: '#b89b5e' }}>{s.num}</div>
                <div className="text-gray-400 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6" style={{ background: '#fdfcfa' }}>
        <div className="max-w-7xl mx-auto">
          <div className="fade-up text-center mb-16">
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#b89b5e' }}>What We Offer</span>
            <h2 className="text-4xl font-bold mt-2" style={{ color: '#1a1f36' }}>Our Services</h2>
            <div className="gold-line-center mt-4"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <div key={s.name} className="fade-up card-gold rounded-2xl p-8" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{s.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#1a1f36' }}>{s.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{s.desc}</p>
                    <ul className="space-y-1">
                      {s.details.map((d) => (
                        <li key={d} className="text-sm text-gray-500 flex items-center gap-2">
                          <span style={{ color: '#b89b5e' }}>✓</span> {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 warm-bg subtle-pattern">
        <div className="max-w-7xl mx-auto">
          <div className="fade-up text-center mb-16">
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#b89b5e' }}>Our People</span>
            <h2 className="text-4xl font-bold mt-2" style={{ color: '#1a1f36' }}>Leadership Team</h2>
            <div className="gold-line-center mt-4"></div>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <div key={m.name} className="fade-up team-member card-gold rounded-2xl overflow-hidden text-center" style={{ transitionDelay: `${i * 100}ms` }}>
                <img src={m.img} alt={m.name} className="w-full aspect-square object-cover" />
                <div className="p-5">
                  <h3 className="font-bold" style={{ color: '#1a1f36' }}>{m.name}</h3>
                  <p className="text-sm" style={{ color: '#b89b5e' }}>{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6" style={{ background: '#fdfcfa' }}>
        <div className="max-w-7xl mx-auto">
          <div className="fade-up text-center mb-16">
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#b89b5e' }}>Testimonials</span>
            <h2 className="text-4xl font-bold mt-2" style={{ color: '#1a1f36' }}>Client Stories</h2>
            <div className="gold-line-center mt-4"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={t.name} className="fade-up card-gold rounded-2xl p-8" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="text-4xl mb-4" style={{ color: '#b89b5e' }}>"</div>
                <p className="text-gray-600 leading-relaxed mb-6 italic">{t.text}</p>
                <div className="border-t pt-4" style={{ borderColor: 'rgba(184,155,94,0.2)' }}>
                  <div className="font-bold text-sm" style={{ color: '#1a1f36' }}>{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 warm-bg subtle-pattern">
        <div className="max-w-3xl mx-auto">
          <div className="fade-up text-center mb-16">
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#b89b5e' }}>FAQ</span>
            <h2 className="text-4xl font-bold mt-2" style={{ color: '#1a1f36' }}>Common Questions</h2>
            <div className="gold-line-center mt-4"></div>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="fade-up card-gold rounded-xl overflow-hidden" style={{ transitionDelay: `${i * 60}ms` }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-semibold" style={{ color: '#1a1f36' }}>{faq.q}</span>
                  <span className="text-xl" style={{ color: '#b89b5e', transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s' }}>+</span>
                </button>
                <div className={`faq-answer px-6 ${openFaq === i ? 'open pb-4' : ''}`}>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6 navy-bg subtle-pattern">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-up">
              <div className="gold-line mb-6"></div>
              <h2 className="text-4xl text-white mb-4">Get in Touch</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">Schedule a complimentary consultation to discuss your tax, accounting, or advisory needs.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'rgba(184,155,94,0.15)' }}><span>📍</span></div>
                  <span className="text-gray-300 text-sm">550 California Street, Suite 400, San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'rgba(184,155,94,0.15)' }}><span>📧</span></div>
                  <span className="text-gray-300 text-sm">info@kesslerchen.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'rgba(184,155,94,0.15)' }}><span>📞</span></div>
                  <span className="text-gray-300 text-sm">(415) 555-0189</span>
                </div>
              </div>
            </div>
            <div className="fade-up card-gold rounded-2xl p-8">
              <div className="space-y-4">
                <input type="text" placeholder="Full Name" value={contactForm.name} onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  className="w-full px-5 py-3 rounded-lg border bg-white text-sm" />
                <input type="email" placeholder="Email Address" value={contactForm.email} onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  className="w-full px-5 py-3 rounded-lg border bg-white text-sm" />
                <select value={contactForm.service} onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                  className="w-full px-5 py-3 rounded-lg border bg-white text-sm text-gray-500">
                  <option value="">Select Service</option>
                  {services.map((s) => <option key={s.name} value={s.name}>{s.name}</option>)}
                </select>
                <textarea placeholder="How can we help?" rows={3} value={contactForm.message} onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  className="w-full px-5 py-3 rounded-lg border bg-white text-sm resize-none" />
                <button className="btn-gold w-full py-3 rounded-lg font-semibold">Request Consultation</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 navy-bg border-t" style={{ borderColor: 'rgba(184,155,94,0.1)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-bold" style={{ color: '#b89b5e' }}>K&C</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">Kessler & Chen LLP — trusted financial partners since 1991.</p>
            </div>
            {[
              { title: 'Services', links: ['Tax Planning', 'Audit', 'Bookkeeping', 'CFO Advisory', 'Payroll'] },
              { title: 'Firm', links: ['About Us', 'Team', 'Careers', 'News'] },
              { title: 'Resources', links: ['Blog', 'Tax Calendar', 'Client Portal', 'Webinars'] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="font-bold text-white mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}><a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: 'rgba(184,155,94,0.1)' }}>
            <p className="text-gray-600 text-sm">© 2026 Kessler & Chen LLP. All rights reserved.</p>
            <div className="flex gap-6">
              {['Privacy', 'Terms', 'Disclaimer'].map((link) => (
                <a key={link} href="#" className="text-gray-600 hover:text-white text-sm transition-colors">{link}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
