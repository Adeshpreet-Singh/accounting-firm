'use client';

import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: 'How quickly can you onboard our business?',
      a: 'We typically complete onboarding within 5 business days. This includes a comprehensive review of your current books, setting up our cloud-based accounting systems, and creating a customized reporting schedule tailored to your business needs.',
    },
    {
      q: 'Do you work with businesses outside of New York?',
      a: 'Absolutely. While our offices are based in Manhattan, we serve clients across all 50 states. Our cloud-first infrastructure allows us to provide the same level of attentive service whether you are in New York or Nebraska.',
    },
    {
      q: 'What industries do you specialize in?',
      a: 'We have deep expertise in technology startups, real estate investment, healthcare practices, professional services, and manufacturing. Each industry has unique accounting challenges, and our team includes specialists who understand the nuances of your sector.',
    },
    {
      q: 'How do your fees work?',
      a: 'We offer transparent, fixed-fee monthly plans so you always know what to expect. No hourly surprises, no hidden charges. During our initial consultation, we will recommend a service tier based on your transaction volume, complexity, and growth trajectory.',
    },
  ];

  return (
    <>
      {/* Navigation */}
      <nav className="nav-stripe">
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 64 }>>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }>>
            <div style={{ width: 32, height: 32, background: 'var(--accent)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }>>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
            </div>
            <span style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--heading)', letterSpacing: '-0.02em' }>>Meridian</span>
          </div>
          <div className="nav-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }>>
            <a href="#services" className="nav-link">Services</a>
            <a href="#team" className="nav-link">Team</a>
            <a href="#results" className="nav-link">Results</a>
            <a href="#contact" className="project-btn-primary">Free Consultation</a>
          </div>
        </div>
      </nav>

      {/* Hero — Editorial Split Layout */}
      <section style={{ paddingTop: 120, paddingBottom: 80, background: 'var(--bg)' }>>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }>>
          <div className="reveal">
            <div className="label-text" style={{ marginBottom: 16 }>>Award-Winning Accounting</div>
            <h1 style={{ marginBottom: 24 }>>
              Financial clarity for businesses that think <span style={{ color: 'var(--accent)' }>>bigger</span>.
            </h1>
            <p style={{ fontSize: '1.1rem', marginBottom: 32, maxWidth: 500 }>>
              Meridian is a modern accounting firm built for ambitious companies. We combine deep financial expertise with cloud-native tools to give you real-time visibility into your business health.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }>>
              <a href="#contact" className="btn-primary project-btn-primary-lg">Start a Conversation</a>
              <a href="#results" className="btn-ghost project-btn-ghost-lg">See Our Results</a>
            </div>
          </div>
          <div className="reveal reveal-delay-1" style={{ position: 'relative' }>>
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80"
              alt="Financial planning workspace with calculator and charts"
              style={{ width: '100%', borderRadius: 8, boxShadow: 'var(--shadow-card)' }>
            />
            <div style={{ position: 'absolute', bottom: -20, left: -20, background: 'var(--accent)', color: '#fff', padding: '1rem 1.5rem', borderRadius: 8, boxShadow: 'var(--shadow-card)' }>>
              <div style={{ fontSize: '1.75rem', fontWeight: 700 }>>$2.4B+</div>
              <div style={{ fontSize: '0.85rem', opacity: 0.9 }>>Client Revenue Managed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '2.5rem 0', background: 'var(--border-light)' }>>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }>>
          {[
            { num: '18+', label: 'Years Experience' },
            { num: '420', label: 'Clients Served' },
            { num: '99.2%', label: 'Client Retention' },
            { num: '$847M', label: 'Tax Savings Delivered' },
          ].map((stat, i) => (
            <div key={i} className="reveal" style={{ textAlign: 'center' }>>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--heading)', letterSpacing: '-0.02em' }>>{stat.num}</div>
              <div className="label-text" style={{ marginTop: 4 }>>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services — Diagonal Grid */}
      <section id="services" style={{ padding: '6rem 0' }>>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }>>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }>>
            <div className="label-text" style={{ marginBottom: 12 }>>What We Do</div>
            <h2 style={{ marginBottom: 16 }>>Comprehensive financial services, tailored to your stage</h2>
            <p style={{ maxWidth: 600, margin: '0 auto' }>>From early-stage startups to established enterprises, our service tiers adapt to your complexity and growth ambitions.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }>>
            {[
              {
                icon: '📊',
                title: 'Financial Reporting',
                desc: 'Monthly, quarterly, and annual financial statements prepared with precision. GAAP-compliant reporting that investors and lenders trust.',
                img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
              },
              {
                icon: '🧾',
                title: 'Tax Strategy & Compliance',
                desc: 'Proactive tax planning that minimizes your burden while keeping you fully compliant. Federal, state, and international tax expertise under one roof.',
                img: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=600&q=80',
              },
              {
                icon: '💡',
                title: 'CFO Advisory',
                desc: 'Fractional CFO services for companies that need strategic financial leadership without the full-time cost. Fundraising, M&A, and board-ready insights.',
                img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80',
              },
              {
                icon: '☁️',
                title: 'Cloud Bookkeeping',
                desc: 'Real-time bookkeeping powered by modern cloud platforms. Automated categorization, receipt capture, and reconciliation so your books are always current.',
                img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80',
              },
              {
                icon: '🎯',
                title: 'Audit & Assurance',
                desc: 'Independent audit services that satisfy regulatory requirements and build stakeholder confidence. Efficient processes that minimize disruption to your team.',
                img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
              },
              {
                icon: '🌐',
                title: 'International Accounting',
                desc: 'Cross-border tax planning, transfer pricing, and multi-currency reporting for businesses operating across jurisdictions. Navigate complexity with confidence.',
                img: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&q=80',
              },
            ].map((service, i) => (
              <div key={i} className={`card reveal reveal-delay-${(i % 4)  + 1}`>>
                <div style={{ aspectRatio: '16/10', overflow: 'hidden', borderRadius: '6px 6px 0 0', marginTop: '-1.5rem', marginLeft: '-1.5rem', marginRight: '-1.5rem', marginBottom: '1.25rem' }>>
                  <img src={service.img} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }> />
                </div>
                <div style={{ fontSize: '1.5rem', marginBottom: 12 }>>{service.icon}</div>
                <h3 style={{ marginBottom: 8, fontWeight: 600 }>>{service.title}</h3>
                <p style={{ fontSize: '0.9rem' }>>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" style={{ padding: '6rem 0', background: 'var(--dark-section-bg, #1c1e54)' }> className="dark-section">
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }>>
          <div className="reveal" style={{ marginBottom: '4rem' }>>
            <div className="label-text" style={{ marginBottom: 12 }>>Leadership</div>
            <h2 style={{ marginBottom: 16 }>>The people behind the numbers</h2>
            <p style={{ maxWidth: 600, opacity: 0.7 }>>Our team combines Big Four experience with startup energy. Every partner is personally invested in your success.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }>>
            {[
              { name: 'Sarah Chen', role: 'Managing Partner', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80', bio: 'Former Deloitte. 20 years in corporate finance and M&A advisory.' },
              { name: 'Marcus Rivera', role: 'Tax Partner', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80', bio: 'IRS enrolled agent. Specializes in international tax structures.' },
              { name: 'Priya Kapoor', role: 'Advisory Partner', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80', bio: 'CPA and CFA. Led financial due diligence on $3B in transactions.' },
              { name: 'James Okonkwo', role: 'Technology Partner', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80', bio: 'Built automated reporting systems for 150+ SaaS companies.' },
            ].map((member, i) => (
              <div key={i} className="reveal" style={{ textAlign: 'center' }>>
                <div style={{ width: '100%', aspectRatio: '3/4', borderRadius: 8, overflow: 'hidden', marginBottom: '1.25rem' }>>
                  <img src={member.img} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(20%)', transition: 'filter 0.5s ease' }> />
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 4, color: '#fff' }>>{member.name}</h3>
                <div className="label-text" style={{ color: 'var(--purple-200)', marginBottom: 8 }>>{member.role}</div>
                <p style={{ fontSize: '0.85rem', opacity: '0.9' }>>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results — Case Studies */}
      <section id="results" style={{ padding: '6rem 0' }>>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }>>
          <div className="reveal" style={{ marginBottom: '4rem' }>>
            <div className="label-text" style={{ marginBottom: 12 }>>Client Success</div>
            <h2 style={{ marginBottom: 16 }>>Real results, real businesses</h2>
            <p style={{ maxWidth: 600 }>>We measure our success by the financial clarity and growth our clients achieve. Here are a few recent wins.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }>>
            {[
              {
                company: 'TechVault Series B',
                result: '$4.2M tax savings identified',
                desc: 'Restructured R&D credits and identified qualifying expenditures that TechVault previous firm had missed. The savings directly funded their Series B growth plan.',
                metric: '340% ROI',
                img: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80',
              },
              {
                company: 'GreenLeaf Properties',
                result: 'Full audit in 3 weeks',
                desc: 'Completed a comprehensive audit of GreenLeaf portfolio of 47 properties ahead of schedule, enabling them to close a $120M refinancing deal on time.',
                metric: '47 properties',
                img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
              },
              {
                company: 'MedBridge Health',
                result: '50% reduction in close time',
                desc: 'Implemented automated reconciliation workflows that cut monthly close from 12 days to 5. The finance team now spends more time on strategy, less on spreadsheets.',
                metric: '5 days to close',
                img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
              },
              {
                company: 'Artisan Coffee Co.',
                result: 'Multi-state compliance resolved',
                desc: 'Untangled sales tax obligations across 23 states and set up automated filing systems. Artisan went from penalty risk to full compliance in under 90 days.',
                metric: '23 states',
                img: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&q=80',
              },
            ].map((study, i) => (
              <div key={i} className="card reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 0 }>>
                <div style={{ aspectRatio: '16/9', overflow: 'hidden', marginTop: '-1.5rem', marginLeft: '-1.5rem', marginRight: '-1.5rem' }>>
                  <img src={study.img} alt={study.company} style={{ width: '100%', height: '100%', objectFit: 'cover' }> />
                </div>
                <div style={{ padding: '1.5rem 0' }>>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }>>
                    <h3 style={{ fontWeight: 600, fontSize: '1.15rem' }>>{study.company}</h3>
                    <span className="badge">{study.metric}</span>
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--accent)', marginBottom: 8 }>>{study.result}</div>
                  <p style={{ fontSize: '0.9rem' }>>{study.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process — Vertical Timeline */}
      <section style={{ padding: '6rem 0', background: 'var(--border-light)' }>>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 1.5rem' }>>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }>>
            <div className="label-text" style={{ marginBottom: 12 }>>How It Works</div>
            <h2>From first call to full clarity</h2>
          </div>
          {[
            { step: '01', title: 'Discovery Call', desc: 'We learn about your business, current pain points, and financial goals. This 30-minute call helps us understand if we are the right fit for each other.' },
            { step: '02', title: 'Financial Health Assessment', desc: 'Our team conducts a complimentary review of your existing books, tax returns, and financial processes. We identify immediate opportunities and risk areas.' },
            { step: '03', title: 'Custom Service Design', desc: 'Based on the assessment, we design a service package tailored to your needs. You will receive a clear proposal with fixed monthly fees and defined deliverables.' },
            { step: '04', title: 'Onboarding & Integration', desc: 'We connect to your existing systems, migrate historical data, and set up real-time dashboards. Most clients are fully onboarded within one week.' },
            { step: '05', title: 'Ongoing Partnership', desc: 'Monthly reporting, quarterly strategy reviews, and annual tax planning become your new normal. We proactively surface insights so you can make confident decisions.' },
          ].map((item, i) => (
            <div key={i} className="reveal" style={{ display: 'flex', gap: '2rem', marginBottom: '2.5rem', alignItems: 'flex-start' }>>
              <div style={{ flexShrink: 0, width: 56, height: 56, background: i === 0 ? 'var(--accent)' : 'var(--bg)', border: i === 0 ? 'none' : '2px solid var(--border)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: i === 0 ? '#fff' : 'var(--heading)', fontSize: '0.85rem' }>>
                {item.step}
              </div>
              <div>
                <h3 style={{ fontWeight: 600, marginBottom: 6 }>>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', maxWidth: 500 }>>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '6rem 0' }>>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }>>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }>>
            <div className="label-text" style={{ marginBottom: 12 }>>Testimonials</div>
            <h2>What our clients say</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }>>
            {[
              {
                quote: 'Meridian transformed our financial operations. We went from reactive bookkeeping to proactive financial strategy. The ROI has been extraordinary.',
                name: 'Rachel Torres',
                title: 'CEO, TechVault',
                img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80',
              },
              {
                quote: 'Their tax team found savings we had no idea existed. It is like they see the tax code differently than everyone else. We saved over $400K in year one.',
                name: 'David Park',
                title: 'Founder, Artisan Coffee',
                img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
              },
              {
                quote: 'The monthly close went from our biggest headache to a non-event. The automated dashboards give me real-time visibility I never had before.',
                name: 'Amanda Liu',
                title: 'CFO, MedBridge Health',
                img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80',
              },
            ].map((t, i) => (
              <div key={i> className="testimonial-card reveal">
                <div className="testimonial-quote" style={{ marginBottom: 16 }>>&quot;</div>
                <p style={{ fontSize: '0.95rem', marginBottom: '1.5rem', fontStyle: 'italic', lineHeight: 1.6 }>>{t.quote}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }>>
                  <img src={t.img} alt={t.name} style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover' }> />
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--heading)', fontSize: '0.9rem' }>>{t.name}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--body)' }>>{t.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '6rem 0', background: 'var(--border-light)' }>>
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '0 1.5rem' }>>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }>>
            <div className="label-text" style={{ marginBottom: 12 }>>Common Questions</div>
            <h2>Everything you need to know</h2>
          </div>
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item reveal" style={{ marginBottom: 12 }>>
              <button
                onClick={() => toggleFaq(i)}
                style={{
                  width: '100%', padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font)', fontSize: '1rem', fontWeight: 600, color: 'var(--heading)', textAlign: 'left',
                }}
              >
                {faq.q}
                <span style={{ fontSize: '1.25rem', color: 'var(--accent)', transition: 'transform 0.3s', transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)' }>>+</span>
              </button>
              <div className={`faq-answer ${openFaq === i ? 'open' : '}'}`>>
                <div style={{ padding: '0 2rem 1.5rem' }>>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.6 }>>{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: '6rem 0' }>>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }>>
          <div className="reveal">
            <div className="label-text" style={{ marginBottom: 12 }>>Get Started</div>
            <h2 style={{ marginBottom: 16 }>>Let us talk about your numbers</h2>
            <p style={{ marginBottom: 32, maxWidth: 450, fontSize: '1.05rem' }>>
              Schedule a free 30-minute consultation. We will review your current financial situation and outline a clear path forward. No pressure, no obligation.
            </p>
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
              alt="Meridian office"
              style={{ width: '100%', borderRadius: 8, boxShadow: 'var(--shadow-card)' }>
            />
          </div>
          <div className="reveal reveal-delay-1">
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }>>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }>>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>
              <input type="email" placeholder="Work Email" />
              <input type="text" placeholder="Company Name" />
              <select defaultValue="">
                <option value="" disabled>Company Size</option>
                <option>1-10 employees</option>
                <option>11-50 employees</option>
                <option>51-200 employees</option>
                <option>200+ employees</option>
              </select>
              <select defaultValue="">
                <option value="" disabled>Primary Need</option>
                <option>Bookkeeping</option>
                <option>Tax Strategy</option>
                <option>CFO Advisory</option>
                <option>Audit</option>
                <option>Full-Service</option>
              </select>
              <textarea rows={4> placeholder="Tell us about your business..." />
              <button type="submit" className="btn-primary project-btn-primary-lg" style={{ width: '100%' }>>
                Book Free Consultation
              </button>
              <p style={{ fontSize: '0.8rem', textAlign: 'center', color: 'var(--body)' }>>
                We typically respond within 2 business hours.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-stripe" style={{ padding: '3rem 0' }>>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }>>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }>>
            <div style={{ width: 28, height: 28, background: 'var(--accent)', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }>>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
            </div>
            <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--dark-text)' }>>Meridian Accounting</span>
          </div>
          <div style={{ display: 'flex', gap: '2rem' }>>
            <a href="#" className="footer-link">Privacy</a>
            <a href="#" className="footer-link">Terms</a>
            <a href="#" className="footer-link">Careers</a>
          </div>
          <div style={{ fontSize: '0.85rem' }>>© 2025 Meridian. All rights reserved.</div>
        </div>
      </footer>
    </>
  );
}
