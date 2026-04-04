'use client';

import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) { element.scrollIntoView({ behavior: 'smooth' }); element.focus(); }
    setMenuOpen(false);
  };

  const services = [
    { title: 'Tax Planning & Prep', desc: 'Individual and business tax optimization', icon: '\uD83D\uDCCB' },
    { title: 'Bookkeeping', desc: 'Monthly financial statements and reconciliation', icon: '\uD83D\uDCCA' },
    { title: 'Audit & Assurance', desc: 'Independent audits and compliance reviews', icon: '\u2705' },
    { title: 'CFO Services', desc: 'Strategic financial leadership for growing companies', icon: '\uD83E\uDDD1\u200D\uD83D\uDCBC' },
  ];

  return (
    <div className="bg-navy-50 text-gray-900 min-h-screen" style={{'--tw-bg-opacity': '1', backgroundColor: '#f0f4f8'}}>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-900 text-white px-4 py-2 rounded-lg z-[100] focus-visible:outline-2 focus-visible:outline-white font-bold">Skip to main content</a>
      <header>
        <nav role="navigation" aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-900 rounded-xl flex items-center justify-center text-white font-bold text-lg" aria-hidden="true">S</div>
              <div><h1 className="text-lg font-bold text-blue-900">Sterling</h1><p className="text-[9px] text-blue-700 tracking-wider">CPA & ASSOCIATES</p></div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {['Services','About','Resources','Contact'].map(item => (<button key={item} onClick={() => scrollToSection(item.toLowerCase())} aria-label={`Navigate to ${item} section`} className="text-sm text-gray-600 hover:text-blue-900 transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 rounded">{item}</button>))}
              <button aria-label="Schedule a free consultation" className="bg-blue-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-blue-800 transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2">Free Consult</button>
            </div>
            <button aria-label={menuOpen?"Close menu":"Open menu"} aria-expanded={menuOpen} className="md:hidden text-blue-900 focus-visible:outline-2 focus-visible:outline-blue-500 rounded" onClick={() => setMenuOpen(!menuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">{menuOpen?<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>:<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}</svg>
            </button>
          </div>
        </nav>
      </header>
      <main id="main-content" role="main">
        <section aria-labelledby="hero-heading" className="pt-24 pb-16 relative overflow-hidden" style={{backgroundColor: '#1e3a5f'}}>
          <div className="absolute inset-0" aria-hidden="true"><div className="absolute top-20 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"/></div>
          <div className="relative max-w-7xl mx-auto px-6 py-20">
            <div className="max-w-3xl">
              <p className="text-blue-300 text-sm font-medium mb-4">TRUSTED BY 500+ BUSINESSES</p>
              <h2 id="hero-heading" className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">Financial<br/><span className="text-yellow-400">Excellence</span></h2>
              <p className="text-xl text-blue-200 mb-8 max-w-lg">Expert CPA services that save you money and give you peace of mind. We handle the numbers so you can focus on growth.</p>
              <div className="flex flex-wrap gap-4 mb-10">
                <button aria-label="Schedule your free financial consultation" className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-400 transition-all hover:scale-105 focus-visible:outline-2 focus-visible:outline-yellow-400 focus-visible:outline-offset-2">Free Consultation</button>
                <button aria-label="Learn about our services" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-all hover:scale-105 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2">Our Services</button>
              </div>
              <div className="flex items-center gap-8">
                {[{num:'$2.4M',label:'Saved for Clients'},{num:'25+',label:'Years Experience'},{num:'500+',label:'Business Clients'}].map((s,i) => (<div key={i}><div className="text-2xl font-bold text-yellow-400">{s.num}</div><div className="text-sm text-blue-300">{s.label}</div></div>))}
              </div>
            </div>
          </div>
        </section>
        <section id="services" aria-labelledby="services-heading" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16"><p className="text-blue-700 text-sm font-medium mb-4">WHAT WE DO</p><h2 id="services-heading" className="text-4xl font-bold text-blue-900 mb-4">Accounting Services</h2></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s,i) => (<article key={i} className="rounded-2xl p-6 hover:shadow-lg transition-all hover:scale-105" style={{backgroundColor: '#f0f4f8'}}><div className="text-4xl mb-4" aria-hidden="true">{s.icon}</div><h3 className="text-xl font-bold text-blue-900 mb-2">{s.title}</h3><p className="text-gray-600 text-sm">{s.desc}</p></article>))}
            </div>
          </div>
        </section>
        <section id="contact" aria-labelledby="contact-heading" className="py-24">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
            <div><p className="text-blue-700 text-sm font-medium mb-4">GET STARTED</p><h2 id="contact-heading" className="text-4xl font-bold text-blue-900 mb-6">Let&#39;s Talk Numbers</h2><p className="text-gray-600 mb-8">Schedule a free 30-minute consultation to discuss your tax and accounting needs.</p></div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form noValidate className="space-y-6">
                <div><label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label><input id="name" type="text" aria-required="true" placeholder="Chris Sterling" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-colors"/></div>
                <div><label htmlFor="business-type" className="block text-sm font-medium text-gray-700 mb-2">Business Type</label><select id="business-type" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-colors"><option value="">Select type</option><option value="individual">Individual</option><option value="small-biz">Small Business</option><option value="corporation">Corporation</option><option value="nonprofit">Non-Profit</option></select></div>
                <button type="submit" aria-label="Request your free consultation" className="w-full bg-blue-900 text-white py-4 rounded-xl font-bold hover:bg-blue-800 transition-all hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2">Request Consultation</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer role="contentinfo" className="py-12 bg-blue-900"><div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6"><div className="flex items-center gap-3"><div className="w-8 h-8 bg-blue-800 rounded-lg flex items-center justify-center text-white font-bold" aria-hidden="true">S</div><span className="text-white font-bold">Sterling CPA & Associates</span></div><p className="text-blue-300 text-sm">Licensed CPAs | Since 1998</p></div></footer>
    </div>
  );
}