'use client';

import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-stone-100">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-amber-400 text-black px-4 py-2 rounded z-[100] font-bold">
        Skip to main content
      </a>

      <header>
        <nav role="navigation" aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-current/10">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <div>
              <h1 className="text-xl tracking-tight font-bold">Whitfield & Associates</h1>
              <p className="text-xs text-stone-400 tracking-wider uppercase">CPA — Est. 1992</p>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollTo('services')} className="text-sm text-stone-400 hover:text-amber-400 transition-colors">Services</button>
              <button onClick={() => scrollTo('team')} className="text-sm text-stone-400 hover:text-amber-400 transition-colors">Team</button>
              <button onClick={() => scrollTo('faq')} className="text-sm text-stone-400 hover:text-amber-400 transition-colors">FAQ</button>
              <button onClick={() => scrollTo('contact')} className="text-sm text-stone-400 hover:text-amber-400 transition-colors">Contact</button>
              <button onClick={() => scrollTo('contact')} className="bg-amber-400 text-black px-6 py-2.5 text-sm font-medium rounded-full hover:opacity-90 transition-opacity">
                Free Consultation
              </button>
            </div>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
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
            <div className="md:hidden bg-slate-950 border-t border-current/10 px-6 py-4 space-y-1">
              <button onClick={() => scrollTo('services')} className="block w-full text-left px-4 py-3 text-stone-400 hover:text-amber-400">Services</button>
              <button onClick={() => scrollTo('team')} className="block w-full text-left px-4 py-3 text-stone-400 hover:text-amber-400">Team</button>
              <button onClick={() => scrollTo('faq')} className="block w-full text-left px-4 py-3 text-stone-400 hover:text-amber-400">FAQ</button>
              <button onClick={() => scrollTo('contact')} className="block w-full text-left px-4 py-3 text-stone-400 hover:text-amber-400">Contact</button>
            </div>
          )}
        </nav>
      </header>

      <main id="main" role="main">
        <section className="pt-28 pb-20 md:pb-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-amber-400 text-sm tracking-widest uppercase mb-6">CPA — Est. 1992</p>
              <h2 className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tight mb-8 whitespace-pre-line">
                Numbers tell
the story.
              </h2>
              <p className="text-xl text-stone-400 max-w-xl leading-relaxed mb-10">
                Three decades of precision accounting and strategic financial counsel.
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => scrollTo('contact')} className="bg-amber-400 text-black px-8 py-4 text-lg font-medium rounded-full hover:opacity-90 transition-opacity">
                  Free Consultation
                </button>
                <button onClick={() => scrollTo('services')} className="border-2 border-current/20 px-8 py-4 text-lg font-medium rounded-full hover:bg-current/5 transition-colors">
                  Our Services
                </button>
              </div>
            </div>
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-400">$847M</div>
              <div className="text-sm text-stone-400 mt-1">Tax savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-400">2,400+</div>
              <div className="text-sm text-stone-400 mt-1">Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-400">30+</div>
              <div className="text-sm text-stone-400 mt-1">Years</div>
            </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-24" aria-labelledby="services-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-amber-400 text-sm tracking-widest uppercase mb-3">What We Offer</p>
              <h2 id="services-heading" className="text-4xl md:text-5xl font-bold">Our Services</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="text-4xl mb-4" aria-hidden="true">📊</div>
              <h3 className="text-xl font-bold mb-3 text-stone-100">Tax Planning</h3>
              <p className="text-stone-400 leading-relaxed">Strategic tax optimization.</p>
            </article>
            <article className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="text-4xl mb-4" aria-hidden="true">🔍</div>
              <h3 className="text-xl font-bold mb-3 text-stone-100">Audit & Assurance</h3>
              <p className="text-stone-400 leading-relaxed">Independent audits.</p>
            </article>
            <article className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="text-4xl mb-4" aria-hidden="true">📒</div>
              <h3 className="text-xl font-bold mb-3 text-stone-100">Bookkeeping</h3>
              <p className="text-stone-400 leading-relaxed">Meticulous bookkeeping.</p>
            </article>
            <article className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="text-4xl mb-4" aria-hidden="true">💼</div>
              <h3 className="text-xl font-bold mb-3 text-stone-100">CFO Advisory</h3>
              <p className="text-stone-400 leading-relaxed">Executive-level strategy.</p>
            </article>
            <article className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="text-4xl mb-4" aria-hidden="true">💰</div>
              <h3 className="text-xl font-bold mb-3 text-stone-100">Payroll</h3>
              <p className="text-stone-400 leading-relaxed">Full payroll management.</p>
            </article>
            <article className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="text-4xl mb-4" aria-hidden="true">🏛️</div>
              <h3 className="text-xl font-bold mb-3 text-stone-100">Estate Tax</h3>
              <p className="text-stone-400 leading-relaxed">Wealth preservation.</p>
            </article>
            </div>
          </div>
        </section>

        <section id="team" className="py-24 bg-slate-900" aria-labelledby="team-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-amber-400 text-sm tracking-widest uppercase mb-3">Our Team</p>
              <h2 id="team-heading" className="text-4xl md:text-5xl font-bold">Meet the experts</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-amber-400/20 flex items-center justify-center text-2xl font-bold text-amber-400">RW</div>
              <h3 className="font-bold text-stone-100">Richard Whitfield</h3>
              <p className="text-sm text-amber-400">Managing Partner</p>
              <p className="text-sm text-stone-400 mt-1">CPA, MBA</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-amber-400/20 flex items-center justify-center text-2xl font-bold text-amber-400">DM</div>
              <h3 className="font-bold text-stone-100">Diana Mercer</h3>
              <p className="text-sm text-amber-400">Partner, Audit</p>
              <p className="text-sm text-stone-400 mt-1">CPA</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-amber-400/20 flex items-center justify-center text-2xl font-bold text-amber-400">JH</div>
              <h3 className="font-bold text-stone-100">Jonathan Hale</h3>
              <p className="text-sm text-amber-400">Partner, Tax</p>
              <p className="text-sm text-stone-400 mt-1">CPA, JD</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-amber-400/20 flex items-center justify-center text-2xl font-bold text-amber-400">SN</div>
              <h3 className="font-bold text-stone-100">Sarah Nakamura</h3>
              <p className="text-sm text-amber-400">Director</p>
              <p className="text-sm text-stone-400 mt-1">CPA</p>
            </div>
            </div>
          </div>
        </section>

        <section id="faq" className="py-24" aria-labelledby="faq-heading">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-amber-400 text-sm tracking-widest uppercase mb-3">Questions</p>
              <h2 id="faq-heading" className="text-4xl md:text-5xl font-bold">FAQ</h2>
            </div>
            <div className="space-y-4">
            <details className="group border border-current/10 rounded-xl p-5 cursor-pointer">
              <summary className="font-medium flex justify-between items-center list-none text-stone-100">
                When is tax season?
                <span className="ml-4 text-stone-400 group-open:rotate-45 transition-transform text-xl">+</span>
              </summary>
              <p className="mt-3 text-stone-400 text-sm leading-relaxed">Federal returns due April 15.</p>
            </details>
            <details className="group border border-current/10 rounded-xl p-5 cursor-pointer">
              <summary className="font-medium flex justify-between items-center list-none text-stone-100">
                Do you handle IRS audits?
                <span className="ml-4 text-stone-400 group-open:rotate-45 transition-transform text-xl">+</span>
              </summary>
              <p className="mt-3 text-stone-400 text-sm leading-relaxed">Yes, full representation.</p>
            </details>
            <details className="group border border-current/10 rounded-xl p-5 cursor-pointer">
              <summary className="font-medium flex justify-between items-center list-none text-stone-100">
                What industries?
                <span className="ml-4 text-stone-400 group-open:rotate-45 transition-transform text-xl">+</span>
              </summary>
              <p className="mt-3 text-stone-400 text-sm leading-relaxed">Healthcare, tech, manufacturing.</p>
            </details>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 bg-slate-900" aria-labelledby="contact-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-amber-400 text-sm tracking-widest uppercase mb-3">Get In Touch</p>
                <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold mb-6">Free Consultation</h2>
                <div className="space-y-6 text-stone-400">
                  <div>
                    <div className="font-bold text-stone-100">Phone</div>
                    <a href="tel:(312) 555-0187" className="hover:text-amber-400 transition-colors">(312) 555-0187</a>
                  </div>
                  <div>
                    <div className="font-bold text-stone-100">Address</div>
                    <p className="whitespace-pre-line">233 S Wacker Dr, Chicago, IL</p>
                  </div>
                  <div>
                    <div className="font-bold text-stone-100">Hours</div>
                    <p>Mon–Fri 8 AM – 6 PM</p>
                  </div>
                </div>
              </div>
              <div>
                <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 3000); }} aria-label="Contact form">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                      <input id="name" type="text" placeholder="John Smith" required className="w-full border border-current/20 rounded-xl px-4 py-3 bg-transparent placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-current/20" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                      <input id="email" type="email" placeholder="john@example.com" required className="w-full border border-current/20 rounded-xl px-4 py-3 bg-transparent placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-current/20" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea id="message" rows={4} placeholder="How can we help?" required className="w-full border border-current/20 rounded-xl px-4 py-3 bg-transparent placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-current/20 resize-none" />
                  </div>
                  <button type="submit" className="w-full bg-amber-400 text-black py-4 rounded-xl font-medium hover:opacity-90 transition-opacity">
                    {submitted ? "Sent! We'll be in touch." : "Free Consultation"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 border-t border-current/10 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="font-bold text-lg">Whitfield & Associates</div>
            <p className="text-sm text-stone-400">CPA — Est. 1992</p>
          </div>
          <p className="text-sm text-stone-400">&copy; 2026 Whitfield & Associates. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
