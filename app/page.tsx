"use client";

import { useState, useEffect } from "react";

const services = [
  { name: "Tax Services", icon: "📊", desc: "Tax preparation & planning" },
  { name: "Bookkeeping", icon: "📚", desc: "Monthly financial records" },
  { name: "Payroll", icon: "💰", desc: "Employee payment processing" },
  { name: "Advisory", icon: "💡", desc: "Business consulting" },
];

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({ name: "", email: "", company: "", service: "", message: "" });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll contact you within 24 hours.");
  };

  return (
    <div className="min-h-screen bg-[#faf9f7] overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg">📊</span>
            </div>
            <span className="text-xl font-bold text-slate-800 tracking-wider">CLARITY</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {["Services", "About", "Team", "Contact"].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())} 
                className="text-gray-600 hover:text-slate-800 transition-colors text-sm font-medium"
              >
                {item}
              </button>
            ))}
          </div>
          <button 
            onClick={() => scrollToSection("contact")} 
            className="bg-slate-800 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-slate-700 transition-all"
          >
            Free Consultation
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-stone-50" />
        
        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 1px 1px, #64748b 1px, transparent 0)', 
            backgroundSize: '40px 40px' 
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full mb-8">
              <span className="text-slate-600">✓</span>
              <span className="text-slate-700 text-sm font-medium">Trusted by 500+ Businesses</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Numbers<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-500">That Matter</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
              Expert accounting services that help your business thrive. 
              Clear insights, accurate numbers, trusted advice.
            </p>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection("contact")} 
                className="bg-slate-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-700 transition-all hover:scale-105"
              >
                Free Consultation
              </button>
              <button 
                onClick={() => scrollToSection("services")} 
                className="border-2 border-slate-800 text-slate-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-50 transition-all"
              >
                Our Services
              </button>
            </div>

            <div className="flex gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-800">500+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-800">25+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-800">$2B+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Managed</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80" 
                alt="Accounting" 
                className="w-full h-[450px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <div>
                  <div className="font-bold text-gray-800">Trusted Partner</div>
                  <div className="text-sm text-gray-500">25+ years experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-slate-500 text-sm tracking-[0.3em] uppercase mb-4 block">What We Do</span>
            <h2 className="text-5xl font-bold text-gray-900">Our Services</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-slate-50 to-stone-50 rounded-2xl p-8 hover:shadow-xl transition-all border border-slate-100 hover:border-slate-300"
              >
                <span className="text-5xl mb-6 block">{service.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-slate-700 transition-colors">{service.name}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-slate-300 text-sm tracking-[0.3em] uppercase mb-4 block">Our Story</span>
            <h2 className="text-5xl font-bold mb-8">Clarity in Numbers</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              For over 25 years, Clarity Accounting has been helping businesses navigate their finances 
              with confidence. Our team of certified professionals delivers accurate, timely, and 
              strategic financial services.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-2xl p-6">
                <div className="text-3xl font-bold">CPA</div>
                <div className="text-slate-300 text-sm">Certified</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-6">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-slate-300 text-sm">Support</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80" 
              alt="Team" 
              className="rounded-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-slate-500 text-sm tracking-[0.3em] uppercase mb-4 block">Our Team</span>
            <h2 className="text-5xl font-bold text-gray-900">Expert Accountants</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "John Smith", role: "Managing Partner", exp: "25 years" },
              { name: "Sarah Chen", role: "Tax Director", exp: "18 years" },
              { name: "Michael Brown", role: "Audit Manager", exp: "12 years" },
            ].map((member, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 text-center border border-slate-100">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-slate-700 to-slate-900 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-4">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <div className="text-slate-600 text-sm mb-2">{member.role}</div>
                <div className="text-gray-500 text-sm">{member.exp} experience</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-slate-500 text-sm tracking-[0.3em] uppercase mb-4 block">Get Started</span>
            <h2 className="text-5xl font-bold text-gray-900">Free Consultation</h2>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 transition-all"
                  placeholder="Your name"
                  required
                />
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 transition-all"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 transition-all"
                  placeholder="Company name"
                />
                <select 
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 transition-all"
                >
                  <option value="">Service needed</option>
                  {services.map((s, i) => (
                    <option key={i} value={s.name}>{s.name}</option>
                  ))}
                </select>
              </div>
              <textarea 
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 transition-all resize-none"
                placeholder="Tell us about your business..."
              />
              <button 
                type="submit" 
                className="w-full bg-slate-800 text-white py-5 rounded-2xl font-bold text-lg hover:bg-slate-700 transition-all"
              >
                Request Consultation
              </button>
            </form>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <span className="text-3xl mb-3 block">📍</span>
              <p className="text-gray-600">456 Finance Street<br />Business District, NY 10005</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <span className="text-3xl mb-3 block">📞</span>
              <p className="text-gray-600">+1 (555) 678-9012</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <span className="text-3xl mb-3 block">🕐</span>
              <p className="text-gray-600">Mon-Fri: 9AM - 6PM<br />By Appointment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg flex items-center justify-center">
                <span className="text-white">📊</span>
              </div>
              <span className="text-xl font-bold tracking-wider">CLARITY ACCOUNTING</span>
            </div>
            <div className="flex gap-6">
              {["LinkedIn", "Twitter", "Facebook"].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="text-gray-400 hover:text-slate-300 transition-colors text-sm"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-gray-500 text-sm">© 2026 Clarity Accounting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}