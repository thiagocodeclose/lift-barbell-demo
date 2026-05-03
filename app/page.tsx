// @ts-nocheck
'use client';

import { useEffect, useRef, useState } from 'react';
import { Bebas_Neue, DM_Sans } from 'next/font/google';
import siteData from '@/lib/site-data';

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--lf-font-head',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--lf-font-body',
});

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function Home() {
  useReveal();
  const [navActive, setNavActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setNavActive(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const css = `
    :root {
      --lf-primary: #9FE870;
      --lf-primary-dark: #7BC84A;
      --lf-bg: #0D0D0D;
      --lf-surface: #141414;
      --lf-surface2: #1C1C1C;
      --lf-text: #F2F2F2;
      --lf-text-muted: #7A7A7A;
      --lf-border: rgba(159,232,112,0.15);
    }

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      background: var(--lf-bg);
      color: var(--lf-text);
      font-family: var(--lf-font-body), 'DM Sans', sans-serif;
      overflow-x: hidden;
    }
    .lf-head { font-family: var(--lf-font-head), 'Bebas Neue', cursive; letter-spacing: 0.04em; }

    /* ── NAV ── */
    .lf-nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 100;
      padding: 0 48px; height: 68px;
      display: flex; align-items: center; justify-content: space-between;
      transition: background 0.3s, border-color 0.3s;
      border-bottom: 1px solid transparent;
    }
    .lf-nav.active {
      background: rgba(13,13,13,0.95);
      backdrop-filter: blur(14px);
      border-bottom: 1px solid var(--lf-border);
    }
    .lf-logo { font-size: 28px; letter-spacing: 0.1em; color: var(--lf-text); }
    .lf-logo span { color: var(--lf-primary); }
    .lf-nav-links { display: flex; gap: 36px; list-style: none; }
    .lf-nav-links a {
      font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;
      color: rgba(242,242,242,0.7); text-decoration: none; transition: color 0.2s;
    }
    .lf-nav-links a:hover { color: var(--lf-primary); }
    .lf-nav-cta {
      background: var(--lf-primary); color: #0D0D0D;
      padding: 10px 24px; font-size: 12px; font-weight: 800;
      letter-spacing: 0.1em; text-transform: uppercase; text-decoration: none;
      transition: background 0.2s;
    }
    .lf-nav-cta:hover { background: var(--lf-primary-dark); }
    .lf-hamburger {
      display: none; flex-direction: column; gap: 5px; cursor: pointer;
      background: none; border: none; padding: 4px;
    }
    .lf-hamburger span { display: block; width: 24px; height: 2px; background: var(--lf-text); }

    /* ── HERO — SPLIT LAYOUT ── */
    .lf-hero {
      display: grid;
      grid-template-columns: 55fr 45fr;
      min-height: 100vh;
    }
    .lf-hero-video { position: relative; overflow: hidden; }
    .lf-hero-video video {
      position: absolute; inset: 0;
      width: 100%; height: 100%; object-fit: cover;
    }
    .lf-hero-video::after {
      content: ''; position: absolute; inset: 0;
      background: linear-gradient(135deg, rgba(13,13,13,0.25) 0%, rgba(13,13,13,0.05) 100%);
    }
    .lf-video-seam {
      position: absolute; right: 0; top: 0; bottom: 0; width: 4px;
      background: var(--lf-primary); z-index: 2;
      box-shadow: 0 0 24px var(--lf-primary), 0 0 48px rgba(159,232,112,0.35);
    }
    .lf-hero-copy {
      background: var(--lf-bg);
      display: flex; flex-direction: column; justify-content: center;
      padding: 104px 56px 56px;
    }
    .lf-hero-eyebrow {
      font-size: 11px; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase;
      color: var(--lf-primary); margin-bottom: 20px;
    }
    .lf-hero-h1 {
      font-size: clamp(60px, 5.8vw, 88px);
      line-height: 0.93; color: var(--lf-text); margin-bottom: 28px;
    }
    .lf-hero-h1 em { color: var(--lf-primary); font-style: normal; }
    .lf-hero-sub {
      font-size: 17px; line-height: 1.65; color: rgba(242,242,242,0.62);
      max-width: 390px; margin-bottom: 40px;
    }
    .lf-hero-actions { display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 52px; }
    .lf-btn-primary {
      background: var(--lf-primary); color: #0D0D0D;
      padding: 16px 36px; font-size: 13px; font-weight: 800;
      letter-spacing: 0.1em; text-transform: uppercase; text-decoration: none;
      transition: background 0.2s, transform 0.2s;
    }
    .lf-btn-primary:hover { background: var(--lf-primary-dark); transform: translateY(-2px); }
    .lf-btn-outline {
      border: 2px solid rgba(159,232,112,0.35); color: var(--lf-text);
      padding: 14px 32px; font-size: 13px; font-weight: 600;
      letter-spacing: 0.1em; text-transform: uppercase; text-decoration: none;
      transition: border-color 0.2s, color 0.2s;
    }
    .lf-btn-outline:hover { border-color: var(--lf-primary); color: var(--lf-primary); }
    .lf-hero-stats {
      display: grid; grid-template-columns: repeat(4, 1fr);
      border-top: 1px solid var(--lf-border); padding-top: 32px;
      gap: 8px;
    }
    .lf-stat-num {
      font-size: 34px; color: var(--lf-primary); display: block; margin-bottom: 4px;
    }
    .lf-stat-label {
      font-size: 10px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
      color: var(--lf-text-muted);
    }

    /* ── SECTIONS ── */
    .lf-section { padding: 96px 48px; }
    .lf-section-inner { max-width: 1200px; margin: 0 auto; }
    .lf-section-label {
      font-size: 11px; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase;
      color: var(--lf-primary); margin-bottom: 16px;
    }
    .lf-section-title {
      font-size: clamp(36px, 3.5vw, 52px); line-height: 1.05;
      color: var(--lf-text); margin-bottom: 20px;
    }
    .lf-section-sub {
      font-size: 17px; line-height: 1.65; color: rgba(242,242,242,0.6); max-width: 520px;
    }

    /* ── METHOD ── */
    .lf-method { background: var(--lf-surface); }
    .lf-method-grid {
      display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px;
      background: var(--lf-border); margin-top: 56px;
    }
    .lf-method-card {
      background: var(--lf-surface); padding: 40px 32px;
      transition: background 0.3s;
    }
    .lf-method-card:hover { background: var(--lf-surface2); }
    .lf-method-num {
      font-size: 52px; color: var(--lf-primary); display: block; margin-bottom: 16px;
    }
    .lf-method-title {
      font-size: 16px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase;
      color: var(--lf-text); margin-bottom: 12px;
    }
    .lf-method-desc { font-size: 14px; line-height: 1.7; color: var(--lf-text-muted); }

    /* ── CLASSES ── */
    .lf-classes-grid {
      display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px;
      background: var(--lf-border); margin-top: 56px;
    }
    .lf-class-card {
      background: var(--lf-bg); padding: 36px 32px;
      border-left: 3px solid transparent;
      transition: border-color 0.3s, background 0.3s;
    }
    .lf-class-card:hover { border-color: var(--lf-primary); background: var(--lf-surface); }
    .lf-class-tag {
      font-size: 10px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase;
      color: var(--lf-primary); margin-bottom: 12px; display: block;
    }
    .lf-class-title {
      font-size: 20px; font-weight: 800; color: var(--lf-text); margin-bottom: 10px;
    }
    .lf-class-desc {
      font-size: 14px; line-height: 1.65; color: var(--lf-text-muted); margin-bottom: 20px;
    }
    .lf-class-meta {
      display: flex; gap: 16px; font-size: 11px; font-weight: 700;
      letter-spacing: 0.08em; text-transform: uppercase; color: rgba(242,242,242,0.35);
    }

    /* ── PRICING ── */
    .lf-pricing { background: var(--lf-surface); }
    .lf-pricing-grid {
      display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px;
      background: var(--lf-border); margin-top: 56px;
    }
    .lf-price-card {
      background: var(--lf-surface); padding: 44px 36px;
      position: relative;
    }
    .lf-price-card.featured { background: var(--lf-surface2); }
    .lf-price-badge {
      position: absolute; top: -1px; left: 50%; transform: translateX(-50%);
      background: var(--lf-primary); color: #0D0D0D;
      font-size: 10px; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase;
      padding: 4px 20px; white-space: nowrap;
    }
    .lf-price-name {
      font-size: 12px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase;
      color: var(--lf-text-muted); margin-bottom: 16px;
    }
    .lf-price-amount {
      font-size: 56px; font-weight: 800; color: var(--lf-text); line-height: 1; margin-bottom: 4px;
    }
    .lf-price-amount span { font-size: 18px; font-weight: 400; color: var(--lf-text-muted); }
    .lf-price-desc { font-size: 13px; color: var(--lf-text-muted); margin-bottom: 28px; }
    .lf-price-features { list-style: none; margin-bottom: 32px; }
    .lf-price-features li {
      font-size: 14px; color: rgba(242,242,242,0.75); padding: 9px 0;
      border-bottom: 1px solid var(--lf-border);
      display: flex; align-items: center; gap: 10px;
    }
    .lf-price-features li::before { content: '—'; color: var(--lf-primary); font-weight: 700; }
    .lf-price-cta {
      display: block; text-align: center; text-decoration: none;
      padding: 14px; font-size: 13px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase;
      border: 2px solid rgba(159,232,112,0.3); color: var(--lf-text);
      transition: all 0.2s;
    }
    .lf-price-cta:hover, .lf-price-card.featured .lf-price-cta {
      background: var(--lf-primary); border-color: var(--lf-primary); color: #0D0D0D;
    }

    /* ── CTA ── */
    .lf-cta {
      background: var(--lf-bg); border-top: 1px solid var(--lf-border);
      padding: 100px 48px; text-align: center;
    }
    .lf-cta-title { font-size: clamp(40px, 4.5vw, 68px); line-height: 1; margin-bottom: 24px; }
    .lf-cta-sub {
      font-size: 18px; line-height: 1.65; color: rgba(242,242,242,0.6);
      max-width: 480px; margin: 0 auto 44px;
    }

    /* ── FOOTER ── */
    .lf-footer {
      background: var(--lf-surface); border-top: 1px solid var(--lf-border);
      padding: 48px 48px 32px;
    }
    .lf-footer-inner {
      max-width: 1200px; margin: 0 auto;
      display: flex; justify-content: space-between; align-items: center;
      flex-wrap: wrap; gap: 24px;
    }
    .lf-footer-logo { font-size: 24px; letter-spacing: 0.1em; color: var(--lf-text); }
    .lf-footer-logo span { color: var(--lf-primary); }
    .lf-footer-links { display: flex; gap: 24px; list-style: none; }
    .lf-footer-links a {
      font-size: 12px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;
      color: var(--lf-text-muted); text-decoration: none; transition: color 0.2s;
    }
    .lf-footer-links a:hover { color: var(--lf-primary); }
    .lf-footer-copy {
      font-size: 12px; color: var(--lf-text-muted); text-align: center;
      max-width: 1200px; margin: 24px auto 0;
      padding-top: 24px; border-top: 1px solid var(--lf-border);
    }

    /* ── REVEAL ── */
    .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
    .reveal.visible { opacity: 1; transform: translateY(0); }

    /* ── MOBILE ── */
    @media (max-width: 900px) {
      .lf-nav { padding: 0 24px; }
      .lf-nav-links, .lf-nav-cta { display: none; }
      .lf-hamburger { display: flex; }
      .lf-hero { grid-template-columns: 1fr; }
      .lf-hero-video { min-height: 56vh; }
      .lf-hero-copy { padding: 52px 24px; }
      .lf-hero-stats { grid-template-columns: repeat(2, 1fr); gap: 20px; }
      .lf-method-grid { grid-template-columns: 1fr; }
      .lf-classes-grid { grid-template-columns: 1fr; }
      .lf-pricing-grid { grid-template-columns: 1fr; }
      .lf-section { padding: 64px 24px; }
      .lf-cta { padding: 64px 24px; }
      .lf-footer { padding: 40px 24px 24px; }
      .lf-footer-inner { flex-direction: column; align-items: flex-start; }
    }
  `;

  return (
    <main className={`${bebas.variable} ${dmSans.variable}`}>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* ── NAV ── */}
      <nav className={`lf-nav${navActive ? ' active' : ''}`}>
        <div className="lf-logo lf-head">LIFT<span>.</span></div>
        <ul className="lf-nav-links">
          <li><a href="#method">Method</a></li>
          <li><a href="#classes">Classes</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#trial" className="lf-nav-cta">Free Trial</a>
        <button
          className="lf-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* ── HERO — SPLIT LAYOUT ── */}
      <section className="lf-hero">
        {/* Left: Video */}
        <div className="lf-hero-video">
          <video ref={videoRef} autoPlay muted loop playsInline>
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          </video>
          <div className="lf-video-seam" />
        </div>

        {/* Right: Copy */}
        <div className="lf-hero-copy">
          <p className="lf-hero-eyebrow">Denver, CO · Women's Barbell Studio</p>
          <h1 data-cg-el="hero_headline_1" className="lf-hero-h1 lf-head">
            BUILT<br />FOR<br /><em>STRONG</em><br />WOMEN
          </h1>
          <p className="lf-hero-sub">{siteData.hero.subtitle}</p>
          <div className="lf-hero-actions">
            <a href="#trial" className="lf-btn-primary">Start Free Trial</a>
            <a href="#classes" className="lf-btn-outline">View Classes</a>
          </div>
          <div className="lf-hero-stats">
            {siteData.stats.map((s, i) => (
              <div key={i}>
                <span className="lf-stat-num lf-head">{s.value}</span>
                <span className="lf-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── METHOD ── */}
      <section className="lf-section lf-method" id="method">
        <div className="lf-section-inner">
          <p className="lf-section-label reveal">The LIFT Method</p>
          <h2 className="lf-section-title lf-head reveal">FOUR PILLARS.<br />ENDLESS PROGRESS.</h2>
          <p className="lf-section-sub reveal">
            Built on science-backed programming designed specifically for women who want to lift heavy and get stronger every week.
          </p>
          <div className="lf-method-grid">
            {siteData.pillars.map((p, i) => (
              <div
                className="lf-method-card reveal"
                key={i}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <span className="lf-method-num lf-head">0{i + 1}</span>
                <div className="lf-method-title">{p.title}</div>
                <p className="lf-method-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLASSES ── */}
      <section className="lf-section" id="classes">
        <div className="lf-section-inner">
          <p className="lf-section-label reveal">Class Schedule</p>
          <h2 className="lf-section-title lf-head reveal">TRAIN WITH PURPOSE</h2>
          <div className="lf-classes-grid">
            {siteData.classes.map((c, i) => (
              <div
                className="lf-class-card reveal"
                key={i}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <span className="lf-class-tag">{c.level}</span>
                <div className="lf-class-title">{c.name}</div>
                <p className="lf-class-desc">{c.desc}</p>
                <div className="lf-class-meta">
                  <span>{c.duration}</span>
                  <span>{c.capacity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="lf-section lf-pricing" id="pricing">
        <div className="lf-section-inner">
          <p className="lf-section-label reveal">Membership</p>
          <h2 className="lf-section-title lf-head reveal">INVEST IN YOUR STRENGTH</h2>
          <div className="lf-pricing-grid">
            {siteData.pricing.map((p, i) => (
              <div
                className={`lf-price-card reveal${p.featured ? ' featured' : ''}`}
                key={i}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {p.featured && <div className="lf-price-badge">Most Popular</div>}
                <div className="lf-price-name">{p.name}</div>
                <div className="lf-price-amount lf-head">
                  ${p.price}<span>/mo</span>
                </div>
                <p className="lf-price-desc">{p.desc}</p>
                <ul className="lf-price-features">
                  {p.features.map((f, j) => <li key={j}>{f}</li>)}
                </ul>
                <a href="#trial" className="lf-price-cta">Get Started</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="lf-cta" id="trial">
        <p className="lf-section-label reveal">Ready to Lift?</p>
        <h2 className="lf-cta-title lf-head reveal">
          YOUR FIRST WEEK<br />IS ON{' '}
          <em style={{ color: 'var(--lf-primary)', fontStyle: 'normal' }}>US</em>
        </h2>
        <p className="lf-cta-sub reveal">{siteData.cta.subtitle}</p>
        <a href="#contact" className="lf-btn-primary reveal">Claim Free Trial</a>
      </section>

      {/* ── FOOTER ── */}
      <footer className="lf-footer" id="contact">
        <div className="lf-footer-inner">
          <div className="lf-footer-logo lf-head">LIFT<span>.</span></div>
          <ul className="lf-footer-links">
            <li><a href="#method">Method</a></li>
            <li><a href="#classes">Classes</a></li>
            <li><a href="#pricing">Pricing</a></li>
          </ul>
          <div style={{ fontSize: '13px', color: 'var(--lf-text-muted)' }}>
            {siteData.contact.address} · {siteData.contact.phone}
          </div>
        </div>
        <p className="lf-footer-copy">© 2026 LIFT Barbell Co. All rights reserved.</p>
      </footer>
    </main>
  );
}
