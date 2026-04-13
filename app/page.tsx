'use client';

import { useState, useEffect, useRef } from 'react';

const SERVICES = [
  {
    name: 'Tax Planning & Preparation',
    desc: 'We don\'t just file returns — we architect year-round tax strategies that minimize your liability while keeping you fully compliant. Our team stays ahead of tax code changes so you never miss an opportunity to save.',
    details: ['Federal & multi-state tax strategy', 'Tax-deferred investment planning', 'R&D tax credit identification', 'Quarterly estimated tax planning'],
    icon: '📊',
  },
  {
    name: 'Audit & Assurance',
    desc: 'Independent audits that go beyond compliance. We identify operational inefficiencies, strengthen internal controls, and give stakeholders the confidence to invest, lend, and partner with you.',
    details: ['Financial statement audits (GAAP/IFRS)', 'Internal controls assessment (SOX)', 'Compliance and regulatory audits', 'Agreed-upon procedures'],
    icon: '🔍',
  },
  {
    name: 'Bookkeeping & Accounting',
    desc: 'Meticulous, cloud-based bookkeeping that keeps your financials pristine and your decision-making data-driven. Monthly closes, reconciliations, and reports delivered on time, every time.',
    details: ['Monthly bank & credit reconciliation', 'Accrual-basis financial reporting', 'Cloud accounting setup (QBO, Xero)', 'Accounts payable & receivable management'],
    icon: '📒',
  },
  {
    name: 'CFO Advisory',
    desc: 'Fractional CFO services delivering executive-level financial strategy without the full-time overhead. We sit at the table with you to drive growth, manage risk, and build enterprise value.',
    details: ['Cash flow forecasting & management', 'Annual budgeting & forecasting', 'KPI dashboard development', 'Board-ready financial presentations'],
    icon: '💼',
  },
  {
    name: 'Payroll Services',
    desc: 'End-to-end payroll management that ensures accuracy, tax compliance, and peace of mind for every pay cycle. From small teams to 500+ employees, we handle it all.',
    details: ['Bi-weekly & semi-monthly processing', 'Multi-state tax withholding & filing', 'Benefits administration & 401(k)', 'W-2 and 1099 preparation'],
    icon: '💰',
  },
  {
    name: 'Estate & Trust Tax',
    desc: 'Preserve generational wealth with sophisticated estate and trust tax strategies. We coordinate with your attorneys and financial advisors to create a seamless wealth transfer plan.',
    details: ['Estate & gift tax returns (Form 706)', 'Irrevocable trust tax planning', 'Charitable giving strategies', 'Family limited partnership structuring'],
    icon: '🏛️',
  },
];

const TEAM = [
  { name: 'Richard Whitfield', title: 'Managing Partner', focus: 'Tax Strategy & CFO Advisory', education: 'CPA, MBA — The Wharton School', years: 30, bio: 'Founded the firm in 1992 after a decade at Arthur Andersen. Specializes in complex tax planning for mid-market companies and high-net-worth families.' },
  { name: 'Diana Mercer', title: 'Partner, Audit & Assurance', focus: 'Audit & Assurance', education: 'CPA — NYU Stern School of Business', years: 22, bio: 'Leads our audit practice with deep expertise in GAAP, IFRS, and SOX compliance. Former Deloitte senior manager.' },
  { name: 'Jonathan Hale', title: 'Partner, Tax', focus: 'Estate & Corporate Tax', education: 'CPA, JD — Georgetown University', years: 18, bio: 'Dual-qualified CPA and attorney. Uniquely positioned to handle complex tax disputes and estate planning with legal precision.' },
  { name: 'Sarah Nakamura', title: 'Director, Client Services', focus: 'Bookkeeping & Payroll', education: 'CPA — Columbia Business School', years: 12, bio: 'Manages our bookkeeping and payroll teams. Known for building scalable accounting systems for fast-growing startups.' },
];

const TESTIMONIALS = [
  { text: 'Whitfield & Associates saved our company over $2.3M in tax liability last year alone. Their strategic approach to multi-state planning is unmatched. They don\'t just file — they think three moves ahead.', name: 'Michael Thornton', role: 'CEO, Thornton Industries', industry: 'Manufacturing' },
  { text: 'The audit process was seamless. Diana\'s team identified control weaknesses we had overlooked for years and helped us implement lasting solutions. Our board now has complete confidence in our financials.', name: 'Linda Park', role: 'CFO, Atlas Corp', industry: 'Technology' },
  { text: 'As a startup founder, I needed more than a bookkeeper — I needed a financial partner. Sarah built us a cloud accounting system that scales with us. Best decision we made.', name: 'James Rivera', role: 'Founder, NovaTech', industry: 'SaaS' },
];

const FAQS = [
  { q: 'How much does a CPA consultation cost?', a: 'Your initial consultation with Whitfield & Associates is completely complimentary. We use this meeting to understand your financial situation, identify opportunities for savings, and outline a clear strategy. There is no obligation and no pressure — just expert guidance to help you make an informed decision about your accounting needs.' },
  { q: 'What industries do you specialize in?', a: 'We serve a diverse client base across manufacturing, technology, professional services, real estate, healthcare, and high-net-worth individuals. Our partners bring deep vertical expertise — Diana Mercer leads our technology audit practice, Sarah Nakamura specializes in startup accounting systems, and Jonathan Hale focuses on estate planning for families with complex wealth structures.' },
  { q: 'How quickly can you handle my tax filing?', a: 'Standard individual returns are typically completed within 2-3 weeks of receiving all documents. Business returns take 3-6 weeks depending on complexity. During tax season (January-April), we recommend engaging us early to avoid the rush. For urgent filings, we offer expedited processing. We file extensions automatically when additional time is needed to ensure accuracy.' },
  { q: 'Do you work with clients outside of Chicago?', a: 'Yes. While our headquarters is in Chicago, we serve clients nationwide through offices in New York and Boston, and remotely across all 50 states. We handle multi-state tax filings, coordinate with local counsel when needed, and use secure cloud-based tools for document exchange and communication. Geography is never a barrier to our service.' },
  { q: 'What accounting software do you support?', a: 'We are certified partners and Elite ProAdvisors for QuickBooks Online and Xero. We also support Sage, FreshBooks, NetSuite, and custom ERP implementations. Our team will recommend the best platform for your business size and complexity, handle migration from legacy systems, and train your staff. We stay current on all major platforms so you do not have to.' },
  { q: 'How do you protect my financial data?', a: 'Security is non-negotiable. We use bank-level 256-bit encryption for all data transmission and storage, SOC 2 Type II compliant infrastructure, multi-factor authentication for all client portals, and strict access controls with audit logging. Our systems undergo annual third-party security audits. All employees complete cybersecurity training and sign confidentiality agreements. Your data is safer with us than in most bank vaults.' },
];

const AWARDS = [
  { label: 'AICPA Member', sub: 'Peer Reviewed — Top Rating' },
  { label: 'Top 100 Firms', sub: 'Accounting Today — 2024' },
  { label: 'QuickBooks ProAdvisor', sub: 'Elite Partner Status' },
  { label: 'BBB A+ Rating', sub: 'Accredited Since 2001' },
];

function AnimatedCounter({ target, suffix = '' }: { target: string; suffix?: string }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className={`stat-counter transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {target}{suffix}
    </span>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-ivory text-navy">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-navy text-ivory px-4 py-2 rounded z-[100] font-bold">
        Skip to main content
      </a>

      {/* Top bar */}
      <div className="bg-navy text-ivory py-2 text-xs tracking-[0.2em] uppercase">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <span>Chicago &middot; New York &middot; Boston</span>
          <a href="tel:(312) 555-0187" className="hover:text-gold transition-colors">(312) 555-0187</a>
        </div>
      </div>

      <header>
        <nav role="navigation" aria-label="Main navigation" className="sticky top-0 z-50 bg-ivory/95 backdrop-blur-md border-b border-rule">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <div>
              <h1 className="text-xl tracking-[0.15em] uppercase font-bold">
                Whitfield <span className="text-gold">&</span> Associates
              </h1>
              <p className="text-[10px] tracking-[0.3em] text-slate uppercase">Certified Public Accountants — Est. 1992</p>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {['services', 'team', 'results', 'faq', 'contact'].map((item) => (
                <button key={item} onClick={() => scrollTo(item)} className="text-sm text-charcoal hover:text-gold transition-colors tracking-wider uppercase">
                  {item}
                </button>
              ))}
              <button onClick={() => scrollTo('contact')} className="bg-navy text-ivory px-6 py-2.5 text-sm tracking-wider uppercase hover:bg-navy-light transition-colors">
                Free Consultation
              </button>
            </div>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-navy" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
          {menuOpen && (
            <div className="md:hidden bg-ivory border-t border-rule px-6 py-4 space-y-1">
              {['services', 'team', 'results', 'faq', 'contact'].map((item) => (
                <button key={item} onClick={() => scrollTo(item)} className="block w-full text-left px-4 py-3 text-charcoal hover:text-gold tracking-wider uppercase">
                  {item}
                </button>
              ))}
            </div>
          )}
        </nav>
      </header>

      <main id="main" role="main">
        {/* Hero - Editorial asymmetric layout */}
        <section className="pt-28 pb-20 md:pb-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-8 items-end">
              <div className="md:col-span-8">
                <p className="text-gold text-sm tracking-[0.3em] uppercase mb-6">Chicago &middot; Established 1992</p>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight mb-8">
                  Numbers tell<br />the <span className="text-gold">story.</span>
                </h2>
                <p className="text-xl text-slate max-w-lg leading-relaxed mb-10 drop-cap">
                  Three decades of precision accounting and strategic financial counsel. We transform complex numbers into clear paths forward for businesses and high-net-worth individuals.
                </p>
                <div className="flex gap-4">
                  <button onClick={() => scrollTo('contact')} className="bg-navy text-ivory px-8 py-4 text-lg tracking-wider uppercase hover:bg-navy-light transition-colors">
                    Free Consultation
                  </button>
                  <button onClick={() => scrollTo('services')} className="border-2 border-navy text-navy px-8 py-4 text-lg tracking-wider uppercase hover:bg-navy hover:text-ivory transition-colors">
                    Our Services
                  </button>
                </div>
              </div>
              <div className="md:col-span-4 flex flex-col items-end gap-6 text-right">
                <div className="seal w-28 h-28">
                  <span className="text-gold text-2xl font-bold"><AnimatedCounter target="30+" /></span>
                  <span className="text-slate text-xs tracking-wider uppercase">Years</span>
                </div>
                <div>
                  <div className="text-4xl font-bold text-navy"><AnimatedCounter target="$847M" /></div>
                  <div className="text-sm text-slate tracking-wider uppercase">Tax savings delivered</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-navy"><AnimatedCounter target="2,400+" /></div>
                  <div className="text-sm text-slate tracking-wider uppercase">Clients served</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ornament divider */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="ornament-rule text-lg">&#x2696;</div>
        </div>

        {/* Services - Expandable editorial cards */}
        <section id="services" className="reveal py-24" aria-labelledby="services-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-8 mb-16">
              <div className="md:col-span-4">
                <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3">What We Do</p>
                <h2 id="services-heading" className="text-4xl md:text-5xl font-bold">Our<br />Services</h2>
              </div>
              <div className="md:col-span-8 flex items-end">
                <p className="text-slate text-lg leading-relaxed">
                  From tax optimization to comprehensive audit services, we deliver the financial clarity and compliance your business demands. Click any service to learn more.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((svc, i) => (
                <article
                  key={i}
                  className={`card-editorial bg-white border border-rule p-8 cursor-pointer ${activeService === i ? 'border-gold shadow-lg' : ''}`}
                  onClick={() => setActiveService(activeService === i ? null : i)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={activeService === i}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActiveService(activeService === i ? null : i); } }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-2xl mb-2 block" aria-hidden="true">{svc.icon}</span>
                      <h3 className="text-xl font-bold">{svc.name}</h3>
                    </div>
                    <span className="text-gold text-xl flex-shrink-0">{activeService === i ? '\u2212' : '\u002B'}</span>
                  </div>
                  <p className="text-slate leading-relaxed text-sm">{svc.desc}</p>
                  {activeService === i && (
                    <div className="border-t border-rule pt-4 mt-4">
                      <p className="text-xs tracking-wider uppercase text-gold mb-3">Key Offerings</p>
                      <ul className="space-y-2">
                        {svc.details.map((d, j) => (
                          <li key={j} className="text-sm text-charcoal flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
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

        {/* Team - Dark section with bios */}
        <section id="team" className="reveal py-24 bg-navy text-ivory" aria-labelledby="team-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-8 mb-16">
              <div className="md:col-span-5">
                <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3">Our Team</p>
                <h2 id="team-heading" className="text-4xl md:text-5xl font-bold">
                  The partners behind<br />your financial success.
                </h2>
              </div>
              <div className="md:col-span-7 flex items-end">
                <p className="text-slate text-lg leading-relaxed">
                  Our partners combine deep technical expertise with strategic vision, delivering results that protect and grow your wealth across generations.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {TEAM.map((member, i) => (
                <div key={i} className="team-card border border-gold-muted p-6 hover:border-gold/40 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 flex-shrink-0 bg-navy-light rounded-full flex items-center justify-center text-2xl text-gold/50 font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <div className="text-gold text-xs tracking-wider uppercase mb-1">{member.title}</div>
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <div className="text-slate text-sm mb-3">
                        <span>{member.education}</span> &middot; <span>{member.years} years</span>
                      </div>
                      <p className="text-slate text-sm leading-relaxed">{member.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results / Testimonials - Rotating quotes */}
        <section id="results" className="reveal py-24" aria-labelledby="results-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3">Proven Results</p>
              <h2 id="results-heading" className="text-4xl md:text-5xl font-bold">What our clients say</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t, i) => (
                <blockquote key={i} className={`pull-quote transition-opacity duration-500 ${i === activeTestimonial ? 'opacity-100' : 'opacity-70'}`}>
                  <p className="text-lg leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                  <footer>
                    <cite className="not-italic">
                      <span className="font-bold block">{t.name}</span>
                      <span className="text-slate text-sm">{t.role}</span>
                      <span className="text-gold text-xs block mt-1">{t.industry}</span>
                    </cite>
                  </footer>
                </blockquote>
              ))}
            </div>

            {/* Awards */}
            <div className="mt-20">
              <div className="text-center mb-8">
                <p className="text-gold text-sm tracking-[0.3em] uppercase">Recognition</p>
              </div>
              <div className="grid md:grid-cols-4 gap-6">
                {AWARDS.map((award, i) => (
                  <div key={i} className="award-badge">
                    <div className="text-lg font-bold mb-1">{award.label}</div>
                    <div className="text-slate text-sm">{award.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="reveal py-24 bg-parchment" aria-labelledby="faq-heading">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3">Questions & Answers</p>
              <h2 id="faq-heading" className="text-4xl md:text-5xl font-bold">Frequently Asked Questions</h2>
              <p className="text-slate mt-4 max-w-xl mx-auto leading-relaxed">Have a question about our services? We have answered the most common ones below. If you do not see yours, reach out — we are happy to help.</p>
            </div>
            <div className="space-y-4">
              {FAQS.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white border border-rule overflow-hidden cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={openFaq === i}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpenFaq(openFaq === i ? null : i); } }}
                >
                  <div className="px-6 py-5 flex justify-between items-center">
                    <h3 className="font-semibold text-base pr-4">{faq.q}</h3>
                    <span className="text-gold text-xl flex-shrink-0 transition-transform" style={{ transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)' }}>+</span>
                  </div>
                  {openFaq === i && (
                    <div className="px-6 pb-5">
                      <p className="text-slate text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="reveal py-24 bg-parchment" aria-labelledby="contact-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-5">
                <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3">Get In Touch</p>
                <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold mb-6">
                  Schedule a<br />consultation.
                </h2>
                <p className="text-slate leading-relaxed mb-8">
                  Your first consultation is complimentary. We'll review your financial situation and outline a clear strategy for savings, compliance, and growth.
                </p>
                <div className="space-y-5">
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
                      <div className="text-slate text-sm"><a href="tel:(312) 555-0187" className="hover:text-gold transition-colors">(312) 555-0187</a></div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-gold text-lg mt-0.5">&#x1F4E7;</span>
                    <div>
                      <div className="font-bold">Email</div>
                      <div className="text-slate text-sm"><a href="mailto:info@whitfieldcpa.com" className="hover:text-gold transition-colors">info@whitfieldcpa.com</a></div>
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
                <form
                  className="bg-white border border-rule p-8 space-y-5"
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 4000); }}
                  aria-label="Contact form"
                >
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                      <input id="name" type="text" placeholder="John Smith" required className="w-full border border-rule px-4 py-3 text-navy bg-ivory placeholder:text-slate/50 focus:border-gold focus:ring-1 focus:ring-gold/30 focus:outline-none transition-colors" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                      <input id="email" type="email" placeholder="john@example.com" required className="w-full border border-rule px-4 py-3 text-navy bg-ivory placeholder:text-slate/50 focus:border-gold focus:ring-1 focus:ring-gold/30 focus:outline-none transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                    <input id="company" type="text" placeholder="Your company name" className="w-full border border-rule px-4 py-3 text-navy bg-ivory placeholder:text-slate/50 focus:border-gold focus:ring-1 focus:ring-gold/30 focus:outline-none transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">Service Needed</label>
                    <select id="service" className="w-full border border-rule px-4 py-3 text-navy bg-ivory focus:border-gold focus:ring-1 focus:ring-gold/30 focus:outline-none transition-colors">
                      <option value="">Select a service</option>
                      <option value="tax">Tax Planning & Preparation</option>
                      <option value="audit">Audit & Assurance</option>
                      <option value="bookkeeping">Bookkeeping & Accounting</option>
                      <option value="cfo">CFO Advisory</option>
                      <option value="payroll">Payroll Services</option>
                      <option value="estate">Estate & Trust Tax</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Tell us about your needs</label>
                    <textarea id="message" rows={4} placeholder="Describe your accounting needs, challenges, or goals..." className="w-full border border-rule px-4 py-3 text-navy bg-ivory placeholder:text-slate/50 focus:border-gold focus:ring-1 focus:ring-gold/30 focus:outline-none resize-none transition-colors" />
                  </div>
                  <button
                    type="submit"
                    disabled={submitted}
                    className="w-full bg-navy text-ivory py-4 text-lg tracking-wider uppercase hover:bg-navy-light transition-colors disabled:opacity-60"
                  >
                    {submitted ? '✓ Thank You — We\'ll Be In Touch' : 'Request Consultation'}
                  </button>
                  <p className="text-center text-slate text-xs">
                    All information is kept strictly confidential. No obligation.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-navy text-ivory py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-lg tracking-[0.15em] uppercase font-bold mb-3">
                Whitfield <span className="text-gold">&</span> Associates
              </div>
              <p className="text-slate text-sm">Certified Public Accountants serving businesses and individuals since 1992.</p>
            </div>
            <div>
              <div className="text-sm font-bold uppercase tracking-wider mb-3">Services</div>
              <div className="space-y-2 text-slate text-sm">
                <div>Tax Planning</div>
                <div>Audit & Assurance</div>
                <div>Bookkeeping</div>
                <div>CFO Advisory</div>
              </div>
            </div>
            <div>
              <div className="text-sm font-bold uppercase tracking-wider mb-3">Contact</div>
              <div className="space-y-2 text-slate text-sm">
                <div>233 S. Wacker Drive, Suite 4200</div>
                <div>Chicago, IL 60606</div>
                <div><a href="tel:(312) 555-0187" className="hover:text-gold transition-colors">(312) 555-0187</a></div>
              </div>
            </div>
          </div>
          <div className="border-t border-navy-light pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate text-sm">&copy; {new Date().getFullYear()} Whitfield & Associates. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-slate">
              <button onClick={() => scrollTo('services')} className="hover:text-gold transition-colors">Services</button>
              <button onClick={() => scrollTo('team')} className="hover:text-gold transition-colors">Team</button>
              <button onClick={() => scrollTo('contact')} className="hover:text-gold transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
