'use client';

import { useState, FormEvent } from 'react';

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
 { name: 'Richard Whitfield', title: 'Managing Partner', focus: 'Tax Strategy & CFO Advisory', education: 'CPA, MBA \u2014 Wharton', years: 30 },
 { name: 'Diana Mercer', title: 'Partner, Audit', focus: 'Audit & Assurance', education: 'CPA \u2014 NYU Stern', years: 22 },
 { name: 'Jonathan Hale', title: 'Partner, Tax', focus: 'Estate & Corporate Tax', education: 'CPA, JD \u2014 Georgetown', years: 18 },
 { name: 'Sarah Nakamura', title: 'Director', focus: 'Bookkeeping & Payroll', education: 'CPA \u2014 Columbia', years: 12 },
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
 const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

 const scrollToSection = (id: string) => {
 document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
 setMenuOpen(false);
 };

 const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
 e.preventDefault();
 setFormStatus('sending');
 const form = e.currentTarget;
 const formData = new FormData(form);

 try {
 const res = await fetch('https://api.web3forms.com/submit', {
 method: 'POST',
 body: formData,
 });
 const data = await res.json();
 if (data.success) {
 setFormStatus('success');
 form.reset();
 } else {
 setFormStatus('error');
 }
 } catch {
 setFormStatus('error');
 }
 };

 return (
 <div className="min-h-screen bg-ivory text-navy px-4 md:px-8">
 <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-navy text-ivory px-4 py-2 rounded z-[100] font-bold">
 Skip to main content
 </a>

 <header>
 <nav role="navigation" aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-ivory/95 backdrop-blur-md border-b border-rule px-4 md:px-8">
 <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
 <div>
 <h1 className="text-xl tracking-[0.15em] uppercase font-bold">
 Whitfield <span className="text-gold">&amp;</span> Associates
 </h1>
 <p className="text-[10px] tracking-[0.3em] text-slate uppercase">Certified Public Accountants &mdash; Est. 1992</p>
 </div>
        <div className="hidden md:flex items-center gap-6">
          {['services', 'team', 'results', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-sm text-charcoal hover:text-gold transition-colors tracking-wider uppercase px-3 py-2"
              aria-label={`Navigate to ${item}`}
            >
              {item === 'services' ? 'Services' : item === 'results' ? 'Results' : item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-navy text-ivory px-6 py-3 text-sm tracking-wider uppercase hover:bg-navy-light transition-colors min-h-[48px]"
          >
            Free Consultation
          </button>
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-navy p-2 min-h-[48px] min-w-[48px] flex items-center justify-center"
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
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-4 py-4 text-charcoal hover:text-gold tracking-wider uppercase min-h-[48px]"
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
 <section className="pt-28 pb-20 md:pb-32">
 <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-8 md:items-end">
 <div className="md:col-span-8">
 <p className="text-gold text-sm tracking-[0.3em] uppercase mb-6">Chicago &middot; Established 1992</p>
 <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight mb-8">
 Numbers tell
 <br />
 the <span className="text-gold">story.</span>
 </h2>
 <p className="text-xl text-slate max-w-lg leading-relaxed mb-10">
 Three decades of precision accounting and strategic financial counsel. We transform complex numbers into clear paths forward for businesses and individuals.
 </p>
              <div className="flex gap-4 flex-wrap">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-navy text-ivory px-8 py-4 text-lg tracking-wider uppercase hover:bg-navy-light transition-colors min-h-[52px]"
                >
                  Free Consultation
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="border-2 border-navy text-navy px-8 py-4 text-lg tracking-wider uppercase hover:bg-navy hover:text-ivory transition-colors min-h-[52px]"
                >
                  Our Services
                </button>
              </div>
 </div>
            <div className="md:col-span-4 flex flex-col items-start md:items-end gap-6 text-left md:text-right">
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
              className={`card-editorial bg-white border border-rule p-8 cursor-pointer transition-all ${
                activeService === i ? 'border-gold shadow-lg' : ''
              }`}
              onClick={() => setActiveService(activeService === i ? null : i)}
              role="button"
              tabIndex={0}
              aria-expanded={activeService === i}
              aria-label={`${svc.name} service`}
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
 <span className="w-1 h-1 rounded-full bg-gold inline-block" />
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
 <p className="text-xl leading-relaxed mb-6 italic text-slate">&ldquo;{t.text}&rdquo;</p>
 <footer>
 <cite className="not-italic">
 <span className="font-bold text-navy">{t.name}</span>
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
 <a
 href="https://maps.google.com/?q=233+S+Wacker+Drive+Suite+4200+Chicago+IL+60606"
 target="_blank"
 rel="noopener noreferrer"
 className="text-slate text-sm hover:text-gold transition-colors"
 >
 233 S. Wacker Drive, Suite 4200<br />Chicago, IL 60606
 </a>
 </div>
 </div>
 <div className="flex items-start gap-4">
 <span className="text-gold text-lg mt-0.5">&#x1F4DE;</span>
 <div>
 <div className="font-bold">Phone</div>
 <a href="tel:+13125550187" className="text-slate text-sm hover:text-gold transition-colors">
 (312) 555-0187
 </a>
 </div>
 </div>
 <div className="flex items-start gap-4">
 <span className="text-gold text-lg mt-0.5">&#x2709;</span>
 <div>
 <div className="font-bold">Email</div>
 <a href="mailto:info@whitfieldcpa.com" className="text-slate text-sm hover:text-gold transition-colors">
 info@whitfieldcpa.com
 </a>
 </div>
 </div>
 <div className="flex items-start gap-4">
 <span className="text-gold text-lg mt-0.5">&#x23F0;</span>
 <div>
 <div className="font-bold">Hours</div>
 <div className="text-slate text-sm">
 Monday &ndash; Friday: 8:00 AM &ndash; 6:00 PM<br />
 Saturday: 9:00 AM &ndash; 1:00 PM (Tax Season)<br />
 Sunday: Closed
 </div>
 </div>
 </div>
 {/* Social Links */}
 <div className="flex items-start gap-4">
 <span className="text-gold text-lg mt-0.5">&#x1F310;</span>
 <div>
 <div className="font-bold mb-2">Follow Us</div>
 <div className="flex gap-4">
 <a
 href="https://www.linkedin.com/company/whitfield-associates"
 target="_blank"
 rel="noopener noreferrer"
 aria-label="LinkedIn"
 className="text-slate hover:text-gold transition-colors"
 >
 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
 <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
 </svg>
 </a>
 <a
 href="https://www.facebook.com/whitfieldassociates"
 target="_blank"
 rel="noopener noreferrer"
 aria-label="Facebook"
 className="text-slate hover:text-gold transition-colors"
 >
 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
 <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
 </svg>
 </a>
 </div>
 </div>
 </div>
 </div>

 {/* Google Maps Embed */}
 <div className="mt-8">
 <iframe
 title="Office Location"
 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2973.6!2d-87.6355!3d41.8789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2cb04d7683dd%3A0x1b111b111b111b11!2s233+S+Wacker+Dr%2C+Chicago%2C+IL+60606!5e0!3m2!1sen!2sus!4v1"
 width="100%"
 height="200"

 allowFullScreen
 loading="lazy"
 referrerPolicy="no-referrer-when-downgrade"
 className="rounded"
 />
 </div>
 </div>

 <div className="md:col-span-7">
 <form
 className="bg-white border border-rule p-8 space-y-5"
 onSubmit={handleFormSubmit}
 >
 {/* Web3Forms hidden fields */}
 <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />
 <input type="hidden" name="subject" value="New Consultation Request - Whitfield & Associates" />
 <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

 <div className="grid md:grid-cols-2 gap-5">
 <div>
 <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
 <input
 id="name"
 name="name"
 type="text"
 required
 placeholder="John Smith"
 className="w-full border border-rule px-4 py-3 text-navy bg-ivory placeholder:text-slate/50 focus:border-gold focus:ring-1 focus:ring-gold/30 focus:outline-none"
 />
 </div>
 <div>
 <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
 <input
 id="email"
 name="email"
 type="email"
 required
 placeholder="john@example.com"
 className="w-full border border-rule px-4 py-3 text-navy bg-ivory placeholder:text-slate/50 focus:border-gold focus:ring-1 focus:ring-gold/30 focus:outline-none"
 />
 </div>
 </div>
 <div>
 <label htmlFor="service" className="block text-sm font-medium mb-2">Service Needed</label>
 <select
 id="service"
 name="service"
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
 name="message"
 rows={4}
 required
 placeholder="Tell us about your accounting needs..."
 className="w-full border border-rule px-4 py-3 text-navy bg-ivory placeholder:text-slate/50 focus:border-gold focus:ring-1 focus:ring-gold/30 focus:outline-none resize-none"
 />
 </div>

 {formStatus === 'success' && (
 <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded text-center">
 Thank you! Your consultation request has been received. We will contact you within 24 hours.
 </div>
 )}
 {formStatus === 'error' && (
 <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded text-center">
 Something went wrong. Please try again or call us directly at (312) 555-0187.
 </div>
 )}

          <button
            type="submit"
            disabled={formStatus === 'sending'}
            className="w-full bg-navy text-ivory py-4 text-lg tracking-wider uppercase hover:bg-navy-light transition-colors disabled:opacity-60 min-h-[52px]"
          >
            {formStatus === 'sending' ? 'Sending...' : 'Request Consultation'}
          </button>
 <p className="text-center text-slate text-xs">
 All information is kept strictly confidential.
 </p>
 </form>

 {/* WhatsApp CTA */}
 <div className="mt-6 text-center">
            <a
              href="https://wa.me/13125550187?text=Hello%2C%20I%27d%20like%20to%20schedule%20a%20consultation%20with%20Whitfield%20%26%20Associates."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-4 rounded-lg hover:bg-green-700 transition-colors font-semibold min-h-[52px]"
              aria-label="Contact us on WhatsApp"
            >
 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
 </svg>
 Chat on WhatsApp
 </a>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* CTA Section */}
 <section className="py-20 bg-navy text-ivory text-center">
 <div className="max-w-6xl mx-auto px-6">
 <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Get Started?</h2>
 <p className="text-xl mb-8 opacity-90">Contact us today to discuss your financial goals and get a free consultation.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="mailto:info@whitfieldcpa.com"
              className="bg-gold text-navy px-8 py-4 text-lg tracking-wider uppercase hover:bg-gold/90 transition-colors font-bold min-h-[52px] inline-flex items-center"
            >
              Get Free Quote
            </a>
            <a
              href="tel:+131****0187"
              className="border-2 border-ivory text-ivory px-8 py-4 text-lg tracking-wider uppercase hover:bg-ivory hover:text-navy transition-colors font-bold min-h-[52px] inline-flex items-center"
            >
              Schedule a Call
            </a>
          </div>
 </div>
 </section>
 </main>

 <footer className="bg-navy text-ivory py-12 px-4 md:px-8">
 <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <div className="text-lg tracking-[0.15em] uppercase font-bold">
              Whitfield <span className="text-gold">&amp;</span> Associates
            </div>
            <div className="text-slate text-xs tracking-wider mt-1">Certified Public Accountants</div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-slate">
            <a href="https://maps.google.com/?q=233+S+Wacker+Drive+Suite+4200+Chicago+IL+60606" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors py-2">
              233 S. Wacker Drive, Chicago
            </a>
            <a href="tel:+13125550187" className="hover:text-gold transition-colors py-2">(312) 555-0187</a>
            <a href="mailto:info@whitfieldcpa.com" className="hover:text-gold transition-colors py-2">info@whitfieldcpa.com</a>
          </div>
        </div>
        <div className="flex justify-center gap-6 mt-6">
          <a href="https://www.linkedin.com/company/whitfield-associates" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate hover:text-gold transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center">
 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
 <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
 </svg>
 </a>
          <a href="https://www.facebook.com/whitfieldassociates" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-slate hover:text-gold transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center">
 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
 <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
 </svg>
 </a>
 </div>
        <div className="mt-8 pt-8 border-t border-navy-light flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate">
          <span>&copy; 2026 Whitfield &amp; Associates LLP. All rights reserved.</span>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <span className="py-1">Privacy Policy</span>
            <span className="py-1">Terms of Service</span>
            <span className="py-1">IRS Circular 230 Disclosure</span>
          </div>
        </div>
 </div>
 </footer>
 </div>
 );
}
