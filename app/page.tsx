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
  const [submitted, setSubmitted] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-ivory text-navy">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-navy text-ivory px-4 py-2 rounded z-[100] font-bold">
        Skip to main content
      </a>

      <header>
        <nav role="navigation" aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-ivory/95 backdrop-blur-md border-b border-rule">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <div>
              <h1 className="text-xl tracking-[0.15em] uppercase font-bold">
                Whitfield <span className="text-gold">&</span> Associates
              </h1>
              <p className="text-[10px] tracking-[0.3em] text-slate uppercase">Certified Public Accountants — Est. 1992</p>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {['services', 'team', 'results', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="text-sm text-charcoal hover:text-gold transition-colors tracking-wider uppercase"
                >
                  {item === 'services' ? 'Services' : item === 'results' ? 'Results' : item}
                </button>
              ))}
              <button
                onClick={() => scrollTo('contact')}
                className="bg-navy text-ivory px-6 py-2.5 text-sm tracking-wider uppercase hover:bg-navy-light transition-colors"
              >
                Free Consultation
              </button>
            </div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-navy"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          {menuOpen && (
            <div className="md:hidden bg-ivory border-t border-rule px-6 py-4 space-y-1">
              {['services', 'team', 'results', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="block w-full text-left px-4 py-3 text-charcoal hover:text-gold tracking-wider uppercase"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </nav>
      </header>

      
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Accounting Firm",
            "url": "https://accounting-firm.com",
            "description": "Professional accounting firm services.",
          })}}
        />

        <main id="main" role="main">
        {/* Hero */}
        <section className="pt-28 pb-20 md:pb-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-8 items-end">
              <div className="md:col-span-8">
                <p className="text-gold text-sm tracking-[0.3em] uppercase mb-6">Chicago &middot; Established 1992</p>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight mb-8">
                  Numbers tell
                  <br />
                  the <span className="text-gold">story.</span>
                </h2>
                <p className="text-xl text-slate max-w-lg leading-relaxed mb-10 drop-cap">
                  Three decades of precision accounting and strategic financial counsel. We transform complex numbers into clear paths forward for businesses and individuals.
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={() => scrollTo('contact')}
                    className="bg-navy text-ivory px-8 py-4 text-lg tracking-wider uppercase hover:bg-navy-light transition-colors"
                  >
                    Free Consultation
                  </button>
                  <button
                    onClick={() => scrollTo('services')}
                    className="border-2 border-navy text-navy px-8 py-4 text-lg tracking-wider uppercase hover:bg-navy hover:text-ivory transition-colors"
                  >
                    Our Services
                  </button>
                </div>
              </div>
              <div className="md:col-span-4 flex flex-col items-end gap-6 text-right">
                <div className="seal w-28 h-28 flex flex-col items-center justify-center">
                  <span className="text-gold text-2xl font-bold">30+</span>
                  <span className="text-slate text-xs tracking-wider uppercase">Years</span>
                </div>
                <div>
                  <div className="text-4xl font-bold text-navy">$847M</div>
                  <div className="text-sm text-slate tracking-wider uppercase">Tax savings delivered</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-navy">2,400+</div>
                  <div className="text-sm text-slate tracking-wider uppercase">Clients served</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="ornament-rule text-gold text-lg">&#x2696;</div>
        </div>

        {/* Services */}
        <section id="services" className="py-24" aria-labelledby="services-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-8 mb-16">
              <div className="md:col-span-4">
                <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3">What We Do</p>
                <h2 id="services-heading" className="text-4xl md:text-5xl font-bold">
                  Our
                  <br />
                  Services
                </h2>
              </div>
              <div className="md:col-span-8 flex items-end">
                <p className="text-slate text-lg leading-relaxed">
                  From tax optimization to comprehensive audit services, we deliver the financial clarity and compliance your business demands.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold">{svc.name}</h3>
                    <span className="text-gold text-xl">{activeService === i ? '\u2212' : '\u002B'}</span>
                  </div>
                  <p className="text-slate leading-relaxed mb-4 text-sm">{svc.desc}</p>
                  {activeService === i && (
                    <div className="border-t border-rule pt-4 mt-4">
                      <p className="text-xs tracking-wider uppercase text-gold mb-3">Key Offerings</p>
                      <ul className="space-y-2">
                        {svc.details.map((d, j) => (
                          <li key={j} className="text-sm text-charcoal flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-gold" />
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
        <section id="team" className="py-24 bg-navy text-ivory" aria-labelledby="team-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-8 mb-16">
              <div className="md:col-span-5">
                <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3">Our Team</p>
                <h2 id="team-heading" className="text-4xl md:text-5xl font-bold">
                  The partners behind
                  <br />
                  your financial success.
                </h2>
              </div>
              <div className="md:col-span-7 flex items-end">
                <p className="text-slate text-lg leading-relaxed">
                  Our partners combine deep technical expertise with strategic vision, delivering results that protect and grow your wealth.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TEAM.map((member, i) => (
                <div key={i} className="border border-gold-muted p-6 hover:border-gold/40 transition-all">
                  <div className="w-full aspect-square bg-navy-light mb-6 flex items-center justify-center text-5xl text-gold/30">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="text-gold text-xs tracking-wider uppercase mb-1">{member.title}</div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <div className="text-slate text-sm space-y-1">
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
        <section id="results" className="py-24" aria-labelledby="results-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3">Proven Results</p>
              <h2 id="results-heading" className="text-4xl md:text-5xl font-bold">
                What our clients say
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {TESTIMONIALS.map((t, i) => (
                <blockquote key={i} className="pull-quote">
                  <p className="text-xl leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                  <footer>
                    <cite className="not-italic">
                      <span className="font-bold">{t.name}</span>
                      <br />
                      <span className="text-slate text-sm">{t.role}</span>
                    </cite>
                  </footer>
                </blockquote>
              ))}
            </div>

            {/* Awards */}
            <div className="mt-20 grid md:grid-cols-4 gap-6 text-center">
              {[
                { label: 'AICPA Member', sub: 'Peer Reviewed' },
                { label: 'Top 100 Firms', sub: 'Accounting Today' },
                { label: 'QuickBooks ProAdvisor', sub: 'Elite Partner' },
                { label: 'BBB A+ Rating', sub: 'Accredited Business' },
              ].map((award, i) => (
                <div key={i} className="border border-rule p-6">
                  <div className="text-lg font-bold mb-1">{award.label}</div>
                  <div className="text-slate text-sm">{award.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 bg-parchment" aria-labelledby="contact-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-5">
                <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3">Get In Touch</p>
                <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold mb-6">
                  Schedule a
                  <br />
                  consultation.
                </h2>
                <p className="text-slate leading-relaxed mb-8">
                  Your first consultation is complimentary. We will review your financial situation and outline a clear strategy for savings and compliance.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="text-gold text-lg mt-0.5">&#x1F4CD;</span>
                    <div>
                      <div className="font-bold">Office</div>
                      <div className="text-slate text-sm">233 S. Wacker Drive, Suite 4200<br />Chicago, IL 60606</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-gold text-lg mt-0.5">&#x1F4DE;</span>
                    <div>
                      <div className="font-bold">Phone</div>
                      <div className="text-slate text-sm"><a href="tel:(312) 555-0187" className="hover:underline">(312) 555-0187</a></div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-gold text-lg mt-0.5">&#x23F0;</span>
                    <div>
                      <div className="font-bold">Hours</div>
                      <div className="text-slate text-sm">Monday &ndash; Friday, 8:00 AM &ndash; 6:00 PM<br />Extended hours during tax season</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-7">
                <form className="bg-white border border-rule p-8 space-y-5" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 3000); }}>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                      <input
                        id="name"
                        type="text"
                        placeholder="John Smith"
                        className="w-full border border-rule px-4 py-3 text-navy bg-ivory placeholder:text-slate/50 focus:border-gold focus:ring-1 focus:ring-gold/30 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                      <input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="w-full border border-rule px-4 py-3 text-navy bg-ivory placeholder:text-slate/50 focus:border-gold focus:ring-1 focus:ring-gold/30 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">Service Needed</label>
                    <select
                      id="service"
                      className="w-full border border-rule px-4 py-3 text-navy bg-ivory focus:border-gold focus:ring-1 focus:ring-gold/30 focus:outline-none"
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
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Brief Description</label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us about your accounting needs..."
                      className="w-full border border-rule px-4 py-3 text-navy bg-ivory placeholder:text-slate/50 focus:border-gold focus:ring-1 focus:ring-gold/30 focus:outline-none resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-navy text-ivory py-4 text-lg tracking-wider uppercase hover:bg-navy-light transition-colors"
                  >
                    Request Consultation
                  </button>
              {submitted && <p className="text-center text-green-500 text-sm mt-2 animate-pulse">Sent! We will be in touch soon.</p>}
                  <p className="text-center text-slate text-xs">
                    All information is kept strictly confidential.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      
        
        {/* Gallery Section */}
        <section className="py-24" aria-labelledby="gallery-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 id="gallery-heading" className="text-3xl md:text-4xl font-bold mb-4">Our Work</h2>
              <p className="text-current/60">A selection of recent projects.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
          {title: 'Before & After', img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80', desc: 'Complete renovation project'},
          {title: 'Residential Job', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=80', desc: 'Professional service delivery'},
          {title: 'Commercial Project', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80', desc: 'Large-scale commercial work'},
          {title: 'Emergency Call', img: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&q=80', desc: 'Same-day emergency response'},
          {title: 'Custom Solution', img: 'https://images.unsplash.com/photo-1585128792020-803d29415281?w=400&q=80', desc: 'Tailored to client needs'},
          {title: 'Team in Action', img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80', desc: 'Our expert team at work'}
              ].map((item, i) => (
                <div key={i} className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end">
                    <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="font-bold text-sm">{item.title}</div>
                      <div className="text-xs text-white/70">{item.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24" aria-labelledby="faq-heading">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-current/60">Everything you need to know.</p>
            </div>
            <div className="space-y-4">
              {[
          {question: 'How do I schedule an appointment?', answer: 'Call us, text us, or fill out the contact form. We typically respond within 1 hour during business hours.'},
          {question: 'Are you licensed and insured?', answer: 'Yes. We are fully licensed, bonded, and carry comprehensive liability insurance.'},
          {question: 'Do you offer free estimates?', answer: 'Yes. We provide free, no-obligation estimates for all services. Call or fill out our form to get started.'},
          {question: 'What areas do you serve?', answer: 'We serve the entire metro area. Contact us to confirm service availability in your specific location.'}
              ].map((faq, i) => (
                <details key={i} className="group border border-current/10 rounded-xl p-5 [&_summary]:cursor-pointer">
                  <summary className="font-medium flex justify-between items-center list-none">
                    {faq.question}
                    <span className="ml-4 text-current/40 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-3 text-current/60 text-sm leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-navy text-ivory py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <div className="text-lg tracking-[0.15em] uppercase font-bold">
                Whitfield <span className="text-gold">&</span> Associates
              </div>
              <div className="text-slate text-xs tracking-wider mt-1">Certified Public Accountants</div>
            </div>
            <div className="flex gap-6 text-sm text-slate">
              <span>233 S. Wacker Drive, Chicago</span>
              <span><a href="tel:(312) 555-0187" className="hover:underline">(312) 555-0187</a></span>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-navy-light flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate">
            <span>&copy; 2026 Whitfield &amp; Associates LLP. All rights reserved.</span>
            <div className="flex gap-6">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>IRS Circular 230 Disclosure</span>
            </div>
          </div>
        
            <div className="flex gap-4 text-sm">
              <a href="#" className="hover:underline">Twitter</a>
              <a href="#" className="hover:underline">LinkedIn</a>
              <a href="#" className="hover:underline">Instagram</a>
            </div>
          </div>
      </footer>
    </div>
  );
}
