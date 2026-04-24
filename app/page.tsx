'use client';

import { useState, useEffect, useRef, FormEvent } from 'react';

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

const PROCESS = [
 { title: 'Discovery', desc: 'We begin with a comprehensive review of your financial landscape, goals, and pain points.' },
 { title: 'Strategy', desc: 'Our partners design a tailored plan addressing tax optimization, compliance, and growth.' },
 { title: 'Execution', desc: 'We implement with precision\u2014handling filings, reports, and ongoing financial management.' },
 { title: 'Ongoing Review', desc: 'Quarterly check-ins ensure your strategy evolves with your business and the regulatory landscape.' },
];

/* Animated Counter */
function AnimatedCounter({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) {
 const [count, setCount] = useState(0);
 const ref = useRef<HTMLSpanElement>(null);
 const counted = useRef(false);

 useEffect(() => {
 const el = ref.current;
 if (!el) return;
 const obs = new IntersectionObserver(
 ([entry]) => {
 if (entry.isIntersecting && !counted.current) {
 counted.current = true;
 const duration = 1800;
 const steps = 60;
 const increment = target / steps;
 let current = 0;
 const timer = setInterval(() => {
 current += increment;
 if (current >= target) {
 setCount(target);
 clearInterval(timer);
 } else {
 setCount(Math.floor(current));
 }
 }, duration / steps);
 }
 },
 { threshold: 0.3 }
 );
 obs.observe(el);
 return () => obs.disconnect();
 }, [target]);

 return (
 <span ref={ref}>
 {prefix}{count.toLocaleString()}{suffix}
 </span>
 );
}

/* SVG Icons */
const ArrowRight = () => (
 <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
 <path d="M5 12h14M12 5l7 7-7 7" />
 </svg>
);

const ChevronDown = () => (
 <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
 <path d="M6 9l6 6 6-6" />
 </svg>
);

export default function Home() {
 const [menuOpen, setMenuOpen] = useState(false);
 const [activeService, setActiveService] = useState<number | null>(null);
 const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
 const [navSolid, setNavSolid] = useState(false);

 useEffect(() => {
 const handleScroll = () => setNavSolid(window.scrollY > 60);
 window.addEventListener('scroll', handleScroll, { passive: true });
 return () => window.removeEventListener('scroll', handleScroll);
 }, []);

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
 const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
 const data = await res.json();
 if (data.success) { setFormStatus('success'); form.reset(); }
 else setFormStatus('error');
 } catch {
 setFormStatus('error');
 }
 };

 return (
 <div className="min-h-screen bg-ivory">
 <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-navy text-ivory px-4 py-2 rounded z-[100] font-bold">
 Skip to main content
 </a>

 {/* NAVIGATION */}
 <nav
 role="navigation"
 aria-label="Main navigation"
 className={`nav-fixed ${navSolid ? 'nav-solid' : 'nav-transparent'}`}
 >
 <div className=" section-container">
 <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex flex-col group">
 <span className="text-lg tracking-[0.18em] uppercase font-bold text-navy font-[family-name:var(--font-display)]">
 Whitfield <span className="text-[color:var(--gold)]">&amp;</span> Associates
 </span>
 <span className="text-[10px] tracking-[0.25em] text-slate uppercase">
 Certified Public Accountants &mdash; Est. 1992
 </span>
 </button>

 <div className="hidden lg:flex items-center gap-8">
 {['Services', 'Process', 'Team', 'Results', 'Contact'].map((item) => (
 <button
 key={item}
 onClick={() => scrollToSection(item.toLowerCase())}
 className="nav-link"
 aria-label={`Navigate to ${item}`}
 >
 {item}
 </button>
 ))}
 <button
 onClick={() => scrollToSection('contact')}
 className="btn-luxury-primary text-[13px] px-6 py-3"
 >
 Free Consultation
 </button>
 </div>

 <button
 onClick={() => setMenuOpen(!menuOpen)}
 className="lg:hidden text-navy p-2 min-h-[48px] min-w-[48px] flex items-center justify-center"
 aria-label={menuOpen ? 'Close menu' : 'Open menu'}
 aria-expanded={menuOpen}
 >
 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 {menuOpen ? (
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
 ) : (
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
 )}
 </svg>
 </button>
 </div>

 {menuOpen && (
 <div className="lg:hidden bg-ivory/98 backdrop-blur-lg border-t border-[rgba(11,17,32,0.05)] px-6 py-6 space-y-1">
 {['Services', 'Process', 'Team', 'Results', 'Contact'].map((item) => (
 <button
 key={item}
 onClick={() => scrollToSection(item.toLowerCase())}
 className="block w-full text-left px-4 py-4 text-navy tracking-wider uppercase text-sm font-medium min-h-[48px] hover:text-[color:var(--gold)] transition-colors"
 >
 {item}
 </button>
 ))}
 </div>
 )}
 </nav>

 <main id="main" role="main">

 {/* HERO */}
 <section className="relative pt-32 pb-16 md:pt-44 md:pb-24 overflow-hidden">
 {/* Decorative elements */}
 <div className="geo-line geo-line-h absolute top-32 right-[15%]" />
 <div className="geo-line geo-line-v absolute top-20 left-[8%]" />
 <div className="geo-circle absolute w-[300px] h-[300px] top-[-50px] right-[-100px]" />
 <div className="geo-dot absolute top-48 right-[25%]" />
 <div className="geo-dot absolute bottom-20 left-[12%]" />

 <div className=" section-container">
 <div className="grid lg:grid-cols-1 gap-60 gap-12 lg:gap-8 items-end">
 <div className="lg:col-span-7">
 <div className="prg-reveal">
 <span className="hero-badge mb-8 inline-block">
 <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--gold)]" />
 Chicago &middot; Since 1992
 </span>
 </div>

 <h1 className="text-[clamp(2.75rem,6vw,5.5rem)] font-bold leading-[0.95] tracking-tight mb-8 prg-reveal reveal-delay-1">
 Precision in
 <br />
 every <span className="italic text-[color:var(--gold)]">figure.</span>
 </h1>

 <p className="text-lg md:text-xl text-slate max-w-xl leading-relaxed mb-10 prg-reveal reveal-delay-2">
 Three decades of transforming complex financial landscapes into strategic clarity. We serve businesses and individuals who demand excellence.
 </p>

 <div className="flex gap-4 flex-wrap prg-reveal reveal-delay-3">
 <button onClick={() => scrollToSection('contact')} className="btn-luxury-primary">
 Schedule Consultation <ArrowRight />
 </button>
 <button onClick={() => scrollToSection('services')} className="btn-luxury-outline">
 Explore Services
 </button>
 </div>
 </div>

 {/* Right-side stats column */}
 <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-10 items-start lg:items-end text-left lg:text-right prg-reveal reveal-delay-4">
 <div className="flex flex-col items-start lg:items-end gap-10 w-full">
 <div className="relative">
 <div className="w-24 h-24 border border-[color:var(--gold)]/30 rounded-full flex items-center justify-center mb-3 lg:ml-auto">
 <span className="text-[color:var(--gold)] text-3xl font-bold font-[family-name:var(--font-display)]">30+</span>
 </div>
 <span className="hero-number-label">Years of Excellence</span>
 </div>

 <div className="w-full h-px bg-gradient-to-r from-transparent via-[color:var(--gold)]/20 to-transparent" />

 <div>
 <div className="hero-number"><AnimatedCounter target={847} prefix="$" suffix="M" /></div>
 <div className="hero-number-label">Tax Savings Delivered</div>
 </div>

 <div>
 <div className="hero-number"><AnimatedCounter target={2400} suffix="+" /></div>
 <div className="hero-number-label">Clients Served</div>
 </div>

 <div>
 <div className="hero-number">98<span className="text-[color:var(--gold)]">%</span></div>
 <div className="hero-number-label">Client Retention Rate</div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* DIVIDER */}
 <div className="ornament-divider section-container">
 <span className="ornament-icon">&#x2696;</span>
 </div>

 {/* SERVICES */}
 <section id="services" className="py-20 md:py-28" aria-labelledby="services-heading">
 <div className=" section-container">
 <div className="grid lg:grid-cols-1 gap-60 gap-8 mb-16">
 <div className="lg:col-span-5">
 <p className="text-[color:var(--gold)] text-xs font-semibold tracking-[0.25em] uppercase mb-4 prg-reveal">What We Do</p>
 <h2 id="services-heading" className="text-[clamp(2rem,3.5vw,3.25rem)] font-bold prg-reveal reveal-delay-1">
 A full spectrum of
 <br />
 financial <span className="italic text-[color:var(--gold)]">expertise.</span>
 </h2>
 </div>
 <div className="lg:col-span-6 lg:col-start-7 flex items-end">
 <p className="text-slate text-lg leading-relaxed prg-reveal reveal-delay-2">
 From tax optimization to comprehensive audit services, we deliver the financial clarity and compliance your business demands.
 </p>
 </div>
 </div>

 <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3 gap-6">
 {SERVICES.map((svc, i) => (
 <article
 key={i}
 className={`svc-card prg-reveal reveal-delay-${i + 1} ${activeService === i ? 'active' : ''}`}
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
 <div className="svc-number">{String(i + 1).padStart(2, '0')}</div>
 <div className="flex items-start justify-between mb-3">
 <h3 className="text-xl font-bold font-[family-name:var(--font-display)]">{svc.name}</h3>
 <span className="text-[color:var(--gold)] ml-2 mt-1 transition-transform duration-300" style={{ transform: activeService === i ? 'rotate(180deg)' : 'none' }}>
 <ChevronDown />
 </span>
 </div>
 <p className="text-slate leading-relaxed text-sm mb-0">{svc.desc}</p>
 {activeService === i && (
 <div className="mt-5 pt-5 border-t border-[rgba(11,17,32,0.06)]">
 <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[color:var(--gold)] mb-3">Key Offerings</p>
 <ul className="svc-detail-list">
 {svc.details.map((d, j) => (
 <li key={j}>{d}</li>
 ))}
 </ul>
 </div>
 )}
 </article>
 ))}
 </div>
 </div>
 </section>

 {/* PROCESS / TIMELINE */}
 <section id="process" className="py-20 md:py-28 bg-[color:var(--ivory-warm)]" aria-labelledby="process-heading">
 <div className=" section-container">
 <div className="grid lg:grid-cols-1 gap-60 gap-12">
 <div className="lg:col-span-5">
 <p className="text-[color:var(--gold)] text-xs font-semibold tracking-[0.25em] uppercase mb-4 prg-reveal">Our Approach</p>
 <h2 id="process-heading" className="text-[clamp(2rem,3.5vw,3.25rem)] font-bold mb-6 prg-reveal reveal-delay-1">
 How we deliver
 <br />
 <span className="italic text-[color:var(--gold)]">measurable</span> results.
 </h2>
 <p className="text-slate text-lg leading-relaxed prg-reveal reveal-delay-2">
 Every engagement follows our proven four-step methodology, ensuring nothing falls through the cracks.
 </p>
 </div>
 <div className="lg:col-span-6 lg:col-start-7">
 {PROCESS.map((step, i) => (
 <div key={i} className={`process-step prg-reveal reveal-delay-${i + 1}`}>
 <div className="process-dot" />
 <div className="process-num">Phase {String(i + 1).padStart(2, '0')}</div>
 <h3 className="text-xl font-bold font-[family-name:var(--font-display)] mb-2">{step.title}</h3>
 <p className="text-slate text-sm leading-relaxed">{step.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </div>
 </section>

 {/* STATS BAR */}
 <section className="py-12 bg-[color:var(--navy)]" aria-label="Key statistics">
 <div className=" section-container">
 <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
 <div className="stat-block prg-reveal">
 <div className="stat-value"><AnimatedCounter target={847} prefix="$" suffix="M" /></div>
 <div className="stat-label">Tax Savings</div>
 </div>
 <div className="stat-block prg-reveal reveal-delay-1">
 <div className="stat-value"><AnimatedCounter target={2400} suffix="+" /></div>
 <div className="stat-label">Clients</div>
 </div>
 <div className="stat-block prg-reveal reveal-delay-2">
 <div className="stat-value"><AnimatedCounter target={30} suffix="+" /></div>
 <div className="stat-label">Years</div>
 </div>
 <div className="stat-block prg-reveal reveal-delay-3">
 <div className="stat-value"><AnimatedCounter target={98} suffix="%" /></div>
 <div className="stat-label">Retention</div>
 </div>
 </div>
 </div>
 </section>

 {/* TEAM */}
 <section id="team" className="py-20 md:py-28" aria-labelledby="team-heading">
 <div className=" section-container">
 <div className="grid lg:grid-cols-1 gap-60 gap-8 mb-16">
 <div className="lg:col-span-5">
 <p className="text-[color:var(--gold)] text-xs font-semibold tracking-[0.25em] uppercase mb-4 prg-reveal">Our Team</p>
 <h2 id="team-heading" className="text-[clamp(2rem,3.5vw,3.25rem)] font-bold prg-reveal reveal-delay-1">
 The partners behind
 <br />
 your financial <span className="italic text-[color:var(--gold)]">success.</span>
 </h2>
 </div>
 <div className="lg:col-span-6 lg:col-start-7 flex items-end">
 <p className="text-slate text-lg leading-relaxed prg-reveal reveal-delay-2">
 Our partners combine deep technical expertise with strategic vision, delivering results that protect and grow your wealth.
 </p>
 </div>
 </div>

 <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-4 gap-6">
 {TEAM.map((member, i) => (
 <div key={i} className={`team-card bg-[color:var(--navy)] p-6 prg-reveal reveal-delay-${i + 1}`}>
 <div className="w-full aspect-square bg-[color:var(--navy-mid)] mb-6 flex items-center justify-center">
 <span className="team-initials">
 {member.name.split(' ').map(n => n[0]).join('')}
 </span>
 </div>
 <div className="text-[color:var(--gold)] text-[10px] font-semibold tracking-[0.2em] uppercase mb-1">{member.title}</div>
 <h3 className="text-lg font-bold text-white font-[family-name:var(--font-display)] mb-3">{member.name}</h3>
 <div className="text-slate text-sm space-y-1.5">
 <div>{member.focus}</div>
 <div className="text-[color:var(--gold)]/60">{member.education}</div>
 <div>{member.years} years of practice</div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* TESTIMONIALS */}
 <section id="results" className="py-20 md:py-28 bg-[color:var(--ivory-warm)]" aria-labelledby="results-heading">
 <div className=" section-container">
 <div className="text-center mb-16">
 <p className="text-[color:var(--gold)] text-xs font-semibold tracking-[0.25em] uppercase mb-4 prg-reveal">Client Voices</p>
 <h2 id="results-heading" className="text-[clamp(2rem,3.5vw,3.25rem)] font-bold prg-reveal reveal-delay-1">
 Trusted by those who <span className="italic text-[color:var(--gold)]">demand</span> the best.
 </h2>
 </div>

 <div className="grid md:grid-cols-2 gap-8 section-container">
 {TESTIMONIALS.map((t, i) => (
 <div key={i} className={`testimonial-card prg-reveal reveal-delay-${i + 1}`}>
 <p className="text-lg leading-relaxed mb-8 text-[#3d4a5c] relative z-10">&ldquo;{t.text}&rdquo;</p>
 <footer className="flex items-center gap-4">
 <div className="w-10 h-10 rounded-full bg-[color:var(--navy)] flex items-center justify-center">
 <span className="text-[color:var(--gold)] text-xs font-bold">
 {t.name.split(' ').map(n => n[0]).join('')}
 </span>
 </div>
 <cite className="not-italic">
 <span className="font-bold text-navy block text-sm">{t.name}</span>
 <span className="text-slate text-xs">{t.role}</span>
 </cite>
 </footer>
 </div>
 ))}
 </div>

 {/* Awards */}
 <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4 gap-4 section-container">
 {[
 { label: 'AICPA Member', sub: 'Peer Reviewed' },
 { label: 'Top 100 Firms', sub: 'Accounting Today' },
 { label: 'QuickBooks ProAdvisor', sub: 'Elite Partner' },
 { label: 'BBB A+ Rating', sub: 'Accredited Business' },
 ].map((award, i) => (
 <div key={i} className="text-center py-6 px-4 border border-[rgba(11,17,32,0.06)] bg-white prg-reveal reveal-delay-1">
 <div className="text-sm font-bold mb-1 font-[family-name:var(--font-display)]">{award.label}</div>
 <div className="text-slate text-xs">{award.sub}</div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* CONTACT */}
 <section id="contact" className="py-20 md:py-28" aria-labelledby="contact-heading">
 <div className=" section-container">
 <div className="grid lg:grid-cols-1 gap-60 gap-12">
 <div className="lg:col-span-5">
 <p className="text-[color:var(--gold)] text-xs font-semibold tracking-[0.25em] uppercase mb-4 prg-reveal">Get In Touch</p>
 <h2 id="contact-heading" className="text-[clamp(2rem,3.5vw,3.25rem)] font-bold mb-6 prg-reveal reveal-delay-1">
 Schedule a<br />
 <span className="italic text-[color:var(--gold)]">consultation.</span>
 </h2>
 <p className="text-slate leading-relaxed mb-10 prg-reveal reveal-delay-2">
 Your first consultation is complimentary. We will review your financial situation and outline a clear strategy for savings and compliance.
 </p>

 <div className="space-y-6 prg-reveal reveal-delay-3">
 {[
 { icon: '\u{1F4CD}', label: 'Office', value: '233 S. Wacker Drive, Suite 4200\nChicago, IL 60606', href: '[GOOGLE_MAPS_URL]' },
 { icon: '\u{1F4DE}', label: 'Phone', value: '+91 98765 43210', href: 'tel:+91 98765 43210' },
 { icon: '\u2709', label: 'Email', value: 'contact@example.com', href: 'mailto:contact@example.com' },
 ].map((item, i) => (
 <div key={i} className="flex items-start gap-4">
 <span className="text-lg mt-0.5 opacity-60">{item.icon}</span>
 <div>
 <div className="font-semibold text-sm text-navy mb-0.5">{item.label}</div>
 <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="text-slate text-sm hover:text-[color:var(--gold)] transition-colors whitespace-pre-line">
 {item.value}
 </a>
 </div>
 </div>
 ))}
 </div>
 </div>

 <div className="lg:col-span-6 lg:col-start-7">
 <form className="bg-white border border-[rgba(11,17,32,0.06)] p-8 md:p-10 space-y-5 prg-reveal" onSubmit={handleFormSubmit}>
 <input type="hidden" name="access_key" value="[WEB3FORMS_KEY]" />
 <input type="hidden" name="subject" value="New Consultation Request - Whitfield & Associates" />
 <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

 <div className="grid md:grid-cols-2 gap-5">
 <div>
 <label htmlFor="name" className="block text-xs font-semibold tracking-[0.1em] uppercase mb-2 text-navy">Full Name</label>
 <input id="name" name="name" type="text" required placeholder="John Smith" className="contact-input" />
 </div>
 <div>
 <label htmlFor="email" className="block text-xs font-semibold tracking-[0.1em] uppercase mb-2 text-navy">Email</label>
 <input id="email" name="email" type="email" required placeholder="john@example.com" className="contact-input" />
 </div>
 </div>
 <div>
 <label htmlFor="service" className="block text-xs font-semibold tracking-[0.1em] uppercase mb-2 text-navy">Service Needed</label>
 <select id="service" name="service" className="contact-input">
 <option value="">Select a service</option>
 {SERVICES.map((s, i) => (
 <option key={i} value={s.name.toLowerCase().replace(/\s+/g, '-')}>{s.name}</option>
 ))}
 </select>
 </div>
 <div>
 <label htmlFor="message" className="block text-xs font-semibold tracking-[0.1em] uppercase mb-2 text-navy">Brief Description</label>
 <textarea id="message" name="message" rows={4} required placeholder="Tell us about your accounting needs..." className="contact-input resize-none" />
 </div>

 {formStatus === 'success' && (
 <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 text-center text-sm">
 Thank you! Your consultation request has been received. We will contact you within 24 hours.
 </div>
 )}
 {formStatus === 'error' && (
 <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 text-center text-sm">
 Something went wrong. Please try again or call us directly at +91 98765 43210.
 </div>
 )}

 <button type="submit" disabled={formStatus === 'sending'} className="btn-luxury-primary w-full">
 {formStatus === 'sending' ? 'Sending...' : 'Request Consultation'} <ArrowRight />
 </button>
 <p className="text-center text-slate text-xs">All information is kept strictly confidential.</p>
 </form>
 </div>
 </div>
 </div>
 </section>

 {/* FINAL CTA */}
 <section className="py-20 md:py-28 bg-[color:var(--navy)] text-center relative overflow-hidden">
 <div className="geo-circle absolute w-[400px] h-[400px] top-[-100px] left-[-100px]" style={{ opacity: 0.05 }} />
 <div className="geo-circle absolute w-[250px] h-[250px] bottom-[-50px] right-[-50px]" style={{ opacity: 0.05 }} />
 <div className=" section-container">
 <p className="text-[color:var(--gold)] text-xs font-semibold tracking-[0.25em] uppercase mb-6 prg-reveal">Ready?</p>
 <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-white mb-6 prg-reveal reveal-delay-1 font-[family-name:var(--font-display)]">
 Let us build your financial <span className="italic text-[color:var(--gold)]">future.</span>
 </h2>
 <p className="text-xl mb-10 text-slate prg-reveal reveal-delay-2">
 Contact us today to discuss your goals and receive a complimentary consultation.
 </p>
 <div className="flex gap-4 justify-center flex-wrap prg-reveal reveal-delay-3">
 <a href="mailto:contact@example.com" className="btn-gold">
 Get Free Quote <ArrowRight />
 </a>
 <a href="tel:+91 98765 43210" className="btn-luxury-outline border-white/30 text-white hover:bg-white hover:text-navy">
 Schedule a Call
 </a>
 </div>
 </div>
 </section>
 </main>

 {/* FOOTER */}
 <footer className="footer-luxury py-14 px-4 md:px-8">
 <div className=" section-container">
 <div className="flex flex-col md:flex-row justify-between items-center gap-6">
 <div>
 <div className="text-lg tracking-[0.15em] uppercase font-bold text-white font-[family-name:var(--font-display)]">
 Whitfield <span className="text-[color:var(--gold)]">&amp;</span> Associates
 </div>
 <div className="text-slate text-xs tracking-wider mt-1">Certified Public Accountants</div>
 </div>
 <div className="flex flex-wrap gap-4 justify-center gap-4 md:gap-6 text-sm">
 <a href="[GOOGLE_MAPS_URL]" target="_blank" rel="noopener noreferrer" className="footer-link">
 233 S. Wacker Drive, Chicago
 </a>
 <a href="tel:+91 98765 43210" className="footer-link">+91 98765 43210</a>
 <a href="mailto:contact@example.com" className="footer-link">contact@example.com</a>
 </div>
 </div>
 <div className="flex justify-center gap-6 mt-8">
 <a href="[LINKEDIN_URL]/whitfield-associates" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-link p-2 min-h-[44px] min-w-[44px] flex items-center justify-center">
 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
 <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
 </svg>
 </a>
 <a href="[FACEBOOK_URL]" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer-link p-2 min-h-[44px] min-w-[44px] flex items-center justify-center">
 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
 <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
 </svg>
 </a>
 </div>
 <div className="mt-10 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
 <span>&copy; 2026 Whitfield &amp; Associates LLP. All rights reserved.</span>
 <div className="flex flex-wrap gap-4 justify-center gap-4 md:gap-6">
 <span className="footer-link py-1">Privacy Policy</span>
 <span className="footer-link py-1">Terms of Service</span>
 <span className="footer-link py-1">IRS Circular 230 Disclosure</span>
 </div>
 </div>
 </div>
 
<div className="text-center py-3 text-xs opacity-50 hover:opacity-80 transition-opacity"><span>Designed by </span><a href="https://adeshpreet.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline">Adeshpreet Singh</a></div>
</footer>
 </div>
 );
}
