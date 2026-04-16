'use client';

import { useState } from 'react';

const SERVICES = [
  {
    name: 'Tax Planning',
    desc: 'Strategic tax planning and optimization for individuals and businesses. We identify opportunities to minimize liability while ensuring full compliance.',
    details: ['Federal & State Tax Strategy', 'Tax-Deferred Investments', 'Multi-Year Planning'],
  },
  {
    name: 'Audit & Assurance',
    desc: 'Independent audit services that strengthen stakeholder confidence and provide actionable insights into financial performance.',
    details: ['Financial Statement Audits', 'Internal Controls Review', 'Compliance Audits'],
  },
  {
    name: 'Bookkeeping',
    desc: 'Meticulous bookkeeping that keeps your financials pristine and your decision-making data-driven.',
    details: ['Monthly Reconciliation', 'Financial Reporting', 'Cloud Accounting Setup'],
  },
  {
    name: 'CFO Advisory',
    desc: 'Fractional CFO services delivering executive-level financial strategy without the full-time overhead.',
    details: ['Cash Flow Management', 'Budgeting & Forecasting', 'KPI Development'],
  },
  {
    name: 'Payroll Services',
    desc: 'Comprehensive payroll management that ensures accuracy, compliance, and peace of mind for every pay cycle.',
    details: ['Payroll Processing', 'Tax Withholding', 'Benefits Administration'],
  },
  {
    name: 'Estate Tax',
    desc: 'Preserve generational wealth with sophisticated estate tax strategies tailored to your legacy goals.',
    details: ['Estate Tax Returns', 'Trust Tax Planning', 'Wealth Transfer Strategy'],
  },
];

const TEAM = [
  { name: 'Richard Whitfield', title: 'Managing Partner', focus: 'Tax Strategy & CFO Advisory', education: 'CPA, MBA — Wharton', years: 30 },
  { name: 'Diana Mercer', title: 'Partner, Audit', focus: 'Audit & Assurance', education: 'CPA — NYU Stern', years: 22 },
  { name: 'Jonathan Hale', title: 'Partner, Tax', focus: 'Estate & Corporate Tax', education: 'CPA, JD — Georgetown', years: 18 },
  { name: 'Sarah Nakamura', title: 'Director', focus: 'Bookkeeping & Payroll', education: 'CPA — Columbia', years: 12 },
];

const TESTIMONIALS = [
  {
    text: 'Whitfield & Associates saved our company over $2.3M in tax liability last year alone. Their strategic approach is unmatched.',
    name: 'Michael Thornton',
    role: 'CEO, Thornton Industries',
  },
  {
    text: 'The audit process was seamless. They identified control weaknesses we had overlooked for years and helped us implement lasting solutions.',
    name: 'Linda Park',
    role: 'CFO, Atlas Corp',
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-ivory text-navy px-4 md:px-8">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-navy text-ivory px-4 py-2 rounded z-[100] font-bold px-4 md:px-8">
        Skip to main content
      </a>

      <header>
        <nav role="navigation" aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-ivory/95 backdrop-blur-md border-b border-rule px-4 md:px-8">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center px-4 md:px-8">
            <div>
              <h1 className="text-xl tracking-[0.15em] uppercase font-bold px-4 md:px-8" style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1.5rem", lineHeight: "1.2" }}>
                Whitfield <span className="text-gold px-4 md:px-8">&</span> Associates
              </h1>
              <p className="text-[10px] tracking-[0.3em] text-slate uppercase px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>Certified Public Accountants — Est. 1992</p>
            </div>
            <div className="hidden md:flex items-center gap-8 px-4 md:px-8">
              {['services', 'team', 'results', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() = style={{ padding: "1rem 2rem", fontSize: "1.125rem", fontWeight: "600", borderRadius: "0.5rem", background: "var(--primary)", color: "white", border: "none", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" }}> scrollTo(item)}
                  className="text-sm text-charcoal hover:text-gold transition-colors tracking-wider uppercase px-4 md:px-8"
                >
                  {item === 'services' ? 'Services' : item === 'results' ? 'Results' : item}
                </button>
              ))}
              <button
                onClick={() = style={{ padding: "1rem 2rem", fontSize: "1.125rem", fontWeight: "600", borderRadius: "0.5rem", background: "var(--primary)", color: "white", border: "none", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" }}> scrollTo('contact')}
                className="bg-navy text-ivory px-6 py-2.5 text-sm tracking-wider uppercase hover:bg-navy-light transition-colors px-4 md:px-8"
              >
                Free Consultation
              </button>
            </div>
            <button
              onClick={() = style={{ padding: "1rem 2rem", fontSize: "1.125rem", fontWeight: "600", borderRadius: "0.5rem", background: "var(--primary)", color: "white", border: "none", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" }}> setMenuOpen(!menuOpen)}
              className="md:hidden text-navy px-4 md:px-8"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <svg className="w-6 h-6 px-4 md:px-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" / style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" / style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
                )}
              </svg>
            </button>
          </div>
          {menuOpen && (
            <div className="md:hidden bg-ivory border-t border-rule px-6 py-4 space-y-1 px-4 md:px-8">
              {['services', 'team', 'results', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() = style={{ padding: "1rem 2rem", fontSize: "1.125rem", fontWeight: "600", borderRadius: "0.5rem", background: "var(--primary)", color: "white", border: "none", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" }}> scrollTo(item)}
                  className="block w-full text-left px-4 py-3 text-charcoal hover:text-gold tracking-wider uppercase px-4 md:px-8"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </nav>
      </header>

      <main id="main" role="main">
        {/* Hero */}
        <section className="pt-28 pb-20 md:pb-32 px-4 md:px-8" style={{ padding: "5rem 1rem", marginBottom: "2rem" }}>
          <div className="max-w-6xl mx-auto px-6 px-4 md:px-8">
            <div className="grid md:grid-cols-12 gap-8 items-end px-4 md:px-8">
              <div className="md:col-span-8 px-4 md:px-8">
                <p className="text-gold text-sm tracking-[0.3em] uppercase mb-6 px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>Chicago &middot; Established 1992</p>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight mb-8 px-4 md:px-8" style={{ fontSize: "2.25rem", fontWeight: "bold", marginBottom: "1.25rem", lineHeight: "1.3" }}>
                  Numbers tell
                  <br />
                  the <span className="text-gold px-4 md:px-8">story.</span>
                </h2>
                <p className="text-xl text-slate max-w-lg leading-relaxed mb-10 drop-cap px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
                  Three decades of precision accounting and strategic financial counsel. We transform complex numbers into clear paths forward for businesses and individuals.
                </p>
                <div className="flex gap-4 px-4 md:px-8">
                  <button
                    onClick={() = style={{ padding: "1rem 2rem", fontSize: "1.125rem", fontWeight: "600", borderRadius: "0.5rem", background: "var(--primary)", color: "white", border: "none", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" }}> scrollTo('contact')}
                    className="bg-navy text-ivory px-8 py-4 text-lg tracking-wider uppercase hover:bg-navy-light transition-colors px-4 md:px-8"
                  >
                    Free Consultation
                  </button>
                  <button
                    onClick={() = style={{ padding: "1rem 2rem", fontSize: "1.125rem", fontWeight: "600", borderRadius: "0.5rem", background: "var(--primary)", color: "white", border: "none", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" }}> scrollTo('services')}
                    className="border-2 border-navy text-navy px-8 py-4 text-lg tracking-wider uppercase hover:bg-navy hover:text-ivory transition-colors px-4 md:px-8"
                  >
                    Our Services
                  </button>
                </div>
              </div>
              <div className="md:col-span-4 flex flex-col items-end gap-6 text-right px-4 md:px-8">
                <div className="seal w-28 h-28 flex flex-col items-center justify-center px-4 md:px-8">
                  <span className="text-gold text-2xl font-bold px-4 md:px-8">30+</span>
                  <span className="text-slate text-xs tracking-wider uppercase px-4 md:px-8">Years</span>
                </div>
                <div>
                  <div className="text-4xl font-bold text-navy px-4 md:px-8">$847M</div>
                  <div className="text-sm text-slate tracking-wider uppercase px-4 md:px-8">Tax savings delivered</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-navy px-4 md:px-8">2,400+</div>
                  <div className="text-sm text-slate tracking-wider uppercase px-4 md:px-8">Clients served</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-6xl mx-auto px-6 px-4 md:px-8">
          <div className="ornament-rule text-gold text-lg px-4 md:px-8">&#x2696;</div>
        </div>

        {/* Services */}
        <section id="services" className="py-24 px-4 md:px-8" aria-labelledby="services-heading" style={{ padding: "5rem 1rem", marginBottom: "2rem" }}>
          <div className="max-w-6xl mx-auto px-6 px-4 md:px-8">
            <div className="grid md:grid-cols-12 gap-8 mb-16 px-4 md:px-8">
              <div className="md:col-span-4 px-4 md:px-8">
                <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>What We Do</p>
                <h2 id="services-heading" className="text-4xl md:text-5xl font-bold px-4 md:px-8" style={{ fontSize: "2.25rem", fontWeight: "bold", marginBottom: "1.25rem", lineHeight: "1.3" }}>
                  Our
                  <br />
                  Services
                </h2>
              </div>
              <div className="md:col-span-8 flex items-end px-4 md:px-8">
                <p className="text-slate text-lg leading-relaxed px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
                  From tax optimization to comprehensive audit services, we deliver the financial clarity and compliance your business demands.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8">
              {SERVICES.map((svc, i) => (
                <article
                  key={i}
                  className={`card-editorial bg-white border border-rule p-8 cursor-pointer ${
                    activeService === i ? 'border-gold shadow-lg' : ''
                  }`}
                  onClick={() => setActiveService(activeService === i ? null : i)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={activeService === i}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveService(activeService === i ? null : i);
                    }
                  }}
                >
                  <div className="flex items-start justify-between mb-4 px-4 md:px-8">
                    <h3 className="text-xl font-bold px-4 md:px-8" style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", lineHeight: "1.4" }}>{svc.name}</h3>
                    <span className="text-gold text-xl px-4 md:px-8">{activeService === i ? '\u2212' : '\u002B'}</span>
                  </div>
                  <p className="text-slate leading-relaxed mb-4 text-sm px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>{svc.desc}</p>
                  {activeService === i && (
                    <div className="border-t border-rule pt-4 mt-4 px-4 md:px-8">
                      <p className="text-xs tracking-wider uppercase text-gold mb-3 px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>Key Offerings</p>
                      <ul className="space-y-2 px-4 md:px-8">
                        {svc.details.map((d, j) => (
                          <li key={j} className="text-sm text-charcoal flex items-center gap-2 px-4 md:px-8">
                            <span className="w-1 h-1 rounded-full bg-gold px-4 md:px-8" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="py-24 bg-navy text-ivory px-4 md:px-8" aria-labelledby="team-heading" style={{ padding: "5rem 1rem", marginBottom: "2rem" }}>
          <div className="max-w-6xl mx-auto px-6 px-4 md:px-8">
            <div className="grid md:grid-cols-12 gap-8 mb-16 px-4 md:px-8">
              <div className="md:col-span-5 px-4 md:px-8">
                <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>Our Team</p>
                <h2 id="team-heading" className="text-4xl md:text-5xl font-bold px-4 md:px-8" style={{ fontSize: "2.25rem", fontWeight: "bold", marginBottom: "1.25rem", lineHeight: "1.3" }}>
                  The partners behind
                  <br />
                  your financial success.
                </h2>
              </div>
              <div className="md:col-span-7 flex items-end px-4 md:px-8">
                <p className="text-slate text-lg leading-relaxed px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
                  Our partners combine deep technical expertise with strategic vision, delivering results that protect and grow your wealth.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-8">
              {TEAM.map((member, i) => (
                <div key={i} className="border border-gold-muted p-6 hover:border-gold/40 transition-all px-4 md:px-8">
                  <div className="w-full aspect-square bg-navy-light mb-6 flex items-center justify-center text-5xl text-gold/30 px-4 md:px-8">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="text-gold text-xs tracking-wider uppercase mb-1 px-4 md:px-8">{member.title}</div>
                  <h3 className="text-xl font-bold mb-2 px-4 md:px-8" style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", lineHeight: "1.4" }}>{member.name}</h3>
                  <div className="text-slate text-sm space-y-1 px-4 md:px-8">
                    <div>{member.focus}</div>
                    <div>{member.education}</div>
                    <div>{member.years} years of practice</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results / Testimonials */}
        <section id="results" className="py-24 px-4 md:px-8" aria-labelledby="results-heading" style={{ padding: "5rem 1rem", marginBottom: "2rem" }}>
          <div className="max-w-6xl mx-auto px-6 px-4 md:px-8">
            <div className="text-center mb-16 px-4 md:px-8">
              <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>Proven Results</p>
              <h2 id="results-heading" className="text-4xl md:text-5xl font-bold px-4 md:px-8" style={{ fontSize: "2.25rem", fontWeight: "bold", marginBottom: "1.25rem", lineHeight: "1.3" }}>
                What our clients say
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 px-4 md:px-8">
              {TESTIMONIALS.map((t, i) => (
                <blockquote key={i} className="pull-quote px-4 md:px-8">
                  <p className="text-xl leading-relaxed mb-6 italic px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>&ldquo;{t.text}&rdquo;</p>
                  <footer>
                    <cite className="not-italic px-4 md:px-8">
                      <span className="font-bold px-4 md:px-8">{t.name}</span>
                      <br />
                      <span className="text-slate text-sm px-4 md:px-8">{t.role}</span>
                    </cite>
                  </footer>
                </blockquote>
              ))}
            </div>

            {/* Awards */}
            <div className="mt-20 grid md:grid-cols-4 gap-6 text-center px-4 md:px-8">
              {[
                { label: 'AICPA Member', sub: 'Peer Reviewed' },
                { label: 'Top 100 Firms', sub: 'Accounting Today' },
                { label: 'QuickBooks ProAdvisor', sub: 'Elite Partner' },
                { label: 'BBB A+ Rating', sub: 'Accredited Business' },
              ].map((award, i) => (
                <div key={i} className="border border-rule p-6 px-4 md:px-8">
                  <div className="text-lg font-bold mb-1 px-4 md:px-8">{award.label}</div>
                  <div className="text-slate text-sm px-4 md:px-8">{award.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 bg-parchment px-4 md:px-8" aria-labelledby="contact-heading" style={{ padding: "5rem 1rem", marginBottom: "2rem" }}>
          <div className="max-w-6xl mx-auto px-6 px-4 md:px-8">
            <div className="grid md:grid-cols-12 gap-12 px-4 md:px-8">
              <div className="md:col-span-5 px-4 md:px-8">
                <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>Get In Touch</p>
                <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold mb-6 px-4 md:px-8" style={{ fontSize: "2.25rem", fontWeight: "bold", marginBottom: "1.25rem", lineHeight: "1.3" }}>
                  Schedule a
                  <br />
                  consultation.
                </h2>
                <p className="text-slate leading-relaxed mb-8 px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
                  Your first consultation is complimentary. We will review your financial situation and outline a clear strategy for savings and compliance.
                </p>
                <div className="space-y-4 px-4 md:px-8">
                  <div className="flex items-start gap-4 px-4 md:px-8">
                    <span className="text-gold text-lg mt-0.5 px-4 md:px-8">&#x1F4CD;</span>
                    <div>
                      <div className="font-bold px-4 md:px-8">Office</div>
                      <div className="text-slate text-sm px-4 md:px-8">233 S. Wacker Drive, Suite 4200<br />Chicago, IL 60606</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 px-4 md:px-8">
                    <span className="text-gold text-lg mt-0.5 px-4 md:px-8">&#x1F4DE;</span>
                    <div>
                      <div className="font-bold px-4 md:px-8">Phone</div>
                      <div className="text-slate text-sm px-4 md:px-8">(312) 555-0187</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 px-4 md:px-8">
                    <span className="text-gold text-lg mt-0.5 px-4 md:px-8">&#x23F0;</span>
                    <div>
                      <div className="font-bold px-4 md:px-8">Hours</div>
                      <div className="text-slate text-sm px-4 md:px-8">Monday &ndash; Friday, 8:00 AM &ndash; 6:00 PM<br />Extended hours during tax season</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-7 px-4 md:px-8">
                <form className="bg-white border border-rule p-8 space-y-5 px-4 md:px-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-5 px-4 md:px-8">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 px-4 md:px-8">Full Name</label>
                      <input
                        id="name"
                        type="text"
                        placeholder="John Smith"
                        className="w-full border border-rule px-4 py-3 text-navy bg-ivory placeholder:text-slate/50 focus:border-gold focus:ring-1 focus:ring-gold/30 focus:outline-none px-4 md:px-8"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 px-4 md:px-8">Email</label>
                      <input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="w-full border border-rule px-4 py-3 text-navy bg-ivory placeholder:text-slate/50 focus:border-gold focus:ring-1 focus:ring-gold/30 focus:outline-none px-4 md:px-8"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2 px-4 md:px-8">Service Needed</label>
                    <select
                      id="service"
                      className="w-full border border-rule px-4 py-3 text-navy bg-ivory focus:border-gold focus:ring-1 focus:ring-gold/30 focus:outline-none px-4 md:px-8"
                    >
                      <option value="">Select a service</option>
                      <option value="tax">Tax Planning</option>
                      <option value="audit">Audit &amp; Assurance</option>
                      <option value="bookkeeping">Bookkeeping</option>
                      <option value="cfo">CFO Advisory</option>
                      <option value="payroll">Payroll</option>
                      <option value="estate">Estate Tax</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 px-4 md:px-8">Brief Description</label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us about your accounting needs..."
                      className="w-full border border-rule px-4 py-3 text-navy bg-ivory placeholder:text-slate/50 focus:border-gold focus:ring-1 focus:ring-gold/30 focus:outline-none resize-none px-4 md:px-8"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-navy text-ivory py-4 text-lg tracking-wider uppercase hover:bg-navy-light transition-colors px-4 md:px-8"
                   style={{ padding: "1rem 2rem", fontSize: "1.125rem", fontWeight: "600", borderRadius: "0.5rem", background: "var(--primary)", color: "white", border: "none", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" }}>
                    Request Consultation
                  </button>
                  <p className="text-center text-slate text-xs px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
                    All information is kept strictly confidential.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      
      <section style={{ padding: "5rem 1rem", background: "var(--primary)", color: "white", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Ready to Get Started?</h2>
          <p style={{ fontSize: "1.25rem", marginBottom: "2rem", opacity: 0.9 }}>Contact us today to discuss your project and get a free consultation.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <button style={{ padding: "1rem 2rem", fontSize: "1.125rem", fontWeight: "600", borderRadius: "0.5rem", background: "white", color: "var(--primary)", border: "none", cursor: "pointer" }}>Get Free Quote</button>
            <button style={{ padding: "1rem 2rem", fontSize: "1.125rem", fontWeight: "600", borderRadius: "0.5rem", background: "transparent", color: "white", border: "2px solid white", cursor: "pointer" }}>Schedule a Call</button>
          </div>
        </div>
      </section>

  </main>

      <footer className="bg-navy text-ivory py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto px-6 px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-4 md:px-8">
            <div>
              <div className="text-lg tracking-[0.15em] uppercase font-bold px-4 md:px-8">
                Whitfield <span className="text-gold px-4 md:px-8">&</span> Associates
              </div>
              <div className="text-slate text-xs tracking-wider mt-1 px-4 md:px-8">Certified Public Accountants</div>
            </div>
            <div className="flex gap-6 text-sm text-slate px-4 md:px-8">
              <span>233 S. Wacker Drive, Chicago</span>
              <span>(312) 555-0187</span>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-navy-light flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate px-4 md:px-8">
            <span>&copy; 2026 Whitfield &amp; Associates LLP. All rights reserved.</span>
            <div className="flex gap-6 px-4 md:px-8">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>IRS Circular 230 Disclosure</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
