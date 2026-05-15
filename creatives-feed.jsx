// Hidro Pró — Instagram creatives (feed posts)

const LOGO = 'assets/hidropro-logo.webp';

const Check = ({ s = 22 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
);
const Star = ({ s = 36 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.1 8.6 22 9.3 17 14 18.2 21 12 17.8 5.8 21 7 14 2 9.3 8.9 8.6 12 2"/></svg>
);
const WAIcon = ({ s = 36 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.6.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.4ZM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.5.8 3.1 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2Z"/></svg>
);
const Phone = ({ s = 32 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z"/></svg>
);
const Clock = ({ s = 76 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);
const Pipe = ({ s = 76 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h18M5 12V8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4"/><path d="M7 16v3M17 16v3M12 12v8"/></svg>
);
const Drop = ({ s = 76 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0L12 2.69Z"/></svg>
);
const Shield = ({ s = 76 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-4Z"/><polyline points="9 12 11 14 15 10"/></svg>
);
const Wrench = ({ s = 76 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76Z"/></svg>
);

const Brand = ({ small = false, white = true }) => (
  <div className="brand-row">
    <img src={LOGO} alt="Hidro Pró" style={{ height: small ? 56 : 80 }} />
    <div>
      <div className="b1" style={{ fontSize: small ? 26 : 34 }}>Hidro Pró</div>
      <div className="b2" style={{ fontSize: small ? 14 : 18 }}>Bauru · 24h</div>
    </div>
  </div>
);

const Stars = ({ n = 5, s = 36 }) => (
  <span className="stars-row">{Array.from({ length: n }, (_, i) => <Star key={i} s={s}/>)}</span>
);

const Handle = ({ children = '@hidroprobauru · (14) 99154-2415' }) => (
  <div className="handle">{children}</div>
);

// ─────────────────────────────────────────────────────────
// FEED 1 — Big hook "VAZAMENTO?"
// ─────────────────────────────────────────────────────────
function Feed_Hook() {
  return (
    <div className="ig bg-navy tex-grid">
      <div className="pad" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Brand />
          <span className="eyebrow"><span className="dot"></span>24h</span>
        </div>

        <div style={{ marginTop: 'auto' }}>
          <h1 style={{ fontSize: 150, lineHeight: 0.95 }}>
            Vazamento? <br/><span className="hl-blue">Entupiu?</span>
          </h1>
          <p style={{ fontSize: 38, marginTop: 28, maxWidth: 800, opacity: 0.9 }}>
            A gente resolve <strong style={{ color: '#fff' }}>hoje mesmo</strong>, sem quebrar parede e com garantia.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 50 }}>
          <span className="cta-pill wa"><WAIcon s={32}/>Chamar agora</span>
          <Handle />
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// FEED 2 — 24h emphasis with clock
// ─────────────────────────────────────────────────────────
function Feed_24h() {
  return (
    <div className="ig bg-blue">
      <div className="pad" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
        <Brand />

        <div style={{ display: 'flex', alignItems: 'center', gap: 50 }}>
          <div style={{ flexShrink: 0 }}>
            <div style={{ width: 320, height: 320, borderRadius: '50%', border: '8px solid rgba(255,255,255,0.4)', display: 'grid', placeItems: 'center', background: 'rgba(255,255,255,0.06)' }}>
              <Clock s={180}/>
            </div>
          </div>
          <div>
            <span className="eyebrow solid" style={{ background: '#fff', color: 'var(--accent)', borderColor: '#fff' }}>Emergência</span>
            <h1 style={{ fontSize: 130, marginTop: 24 }}>24h</h1>
            <p style={{ fontSize: 36, marginTop: 12, fontWeight: 700 }}>Inclusive feriados</p>
          </div>
        </div>

        <div>
          <p style={{ fontSize: 38, maxWidth: 760, lineHeight: 1.3, fontWeight: 600 }}>
            Plantão hidráulico em Bauru e região. <span className="hl-white" style={{ background: 'rgba(0,0,0,0.18)', padding: '6px 18px', borderRadius: 14, display: 'inline-block', marginTop: 6 }}>Chegamos em até 60 min.</span>
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 48 }}>
            <div className="phone-pill"><span className="ic"><Phone s={28}/></span>(14) 99154-2415</div>
            <Handle children="@hidroprobauru" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// FEED 3 — Services grid on white
// ─────────────────────────────────────────────────────────
function Feed_Services() {
  const items = [
    { Ic: Pipe, t: 'Desentupimento' },
    { Ic: Drop, t: 'Vazamentos' },
    { Ic: Wrench, t: 'Instalação' },
    { Ic: Shield, t: 'Manutenção' },
  ];
  return (
    <div className="ig bg-white">
      <div className="pad" style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Brand />
          <span className="eyebrow">Bauru · Região</span>
        </div>

        <h2 style={{ marginTop: 42, color: 'var(--navy)' }}>
          Tudo que sua hidráulica precisa <span style={{ color: 'var(--blue)' }}>em um só lugar.</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 48 }}>
          {items.map(({ Ic, t }) => (
            <div key={t} style={{ background: '#fff', border: '1px solid #E4EAF2', borderRadius: 24, padding: 32, display: 'flex', alignItems: 'center', gap: 22, boxShadow: '0 8px 24px rgba(11,42,74,0.04)' }}>
              <div style={{ width: 88, height: 88, borderRadius: 20, background: 'var(--blue-soft)', color: 'var(--blue)', display: 'grid', placeItems: 'center' }}>
                <Ic s={50}/>
              </div>
              <div style={{ fontSize: 32, fontWeight: 800, color: 'var(--navy)' }}>{t}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 40 }}>
          <span className="cta-pill" style={{ background: 'var(--navy)', color: '#fff' }}><WAIcon s={28}/>Peça seu orçamento</span>
          <Handle />
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// FEED 4 — Testimonial / social proof
// ─────────────────────────────────────────────────────────
function Feed_Testimonial() {
  return (
    <div className="ig bg-dark tex-grid">
      <div className="pad" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Brand />
          <div style={{ textAlign: 'right' }}>
            <Stars s={32}/>
            <div style={{ fontSize: 20, opacity: 0.7, marginTop: 6, letterSpacing: '0.04em' }}>320+ avaliações Google</div>
          </div>
        </div>

        <div>
          <div style={{ fontSize: 200, fontFamily: 'Georgia, serif', lineHeight: 0.5, color: 'var(--blue-2)', opacity: 0.6 }}>"</div>
          <h3 style={{ fontWeight: 700, fontSize: 52, lineHeight: 1.2, marginTop: 16, maxWidth: 880 }}>
            Vazamento de madrugada e atenderam em 40 min. Resolveram tudo <span className="hl-blue">sem quebrar parede.</span>
          </h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginTop: 40 }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'linear-gradient(135deg, var(--blue), var(--navy))', display: 'grid', placeItems: 'center', fontSize: 22, fontWeight: 800 }}>MR</div>
            <div>
              <div style={{ fontSize: 26, fontWeight: 700 }}>Mariana R.</div>
              <div style={{ fontSize: 20, opacity: 0.7 }}>Cliente em Jardim Estoril, Bauru</div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="cta-pill wa"><WAIcon s={28}/>Fale com a gente</span>
          <Handle />
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// FEED 5 — Promo / orçamento grátis
// ─────────────────────────────────────────────────────────
function Feed_Promo() {
  return (
    <div className="ig bg-accent">
      <div className="pad" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Brand />
          <span className="eyebrow" style={{ background: '#fff', color: 'var(--accent)', borderColor: '#fff' }}>Bauru · 24h</span>
        </div>

        <div>
          <div style={{ fontSize: 34, fontWeight: 700, opacity: 0.92, letterSpacing: '0.04em', textTransform: 'uppercase' }}>Orçamento</div>
          <div style={{ fontSize: 260, fontWeight: 800, lineHeight: 0.85, letterSpacing: '-0.06em', marginTop: 8 }}>GRÁTIS</div>
          <div style={{ fontSize: 38, marginTop: 22, maxWidth: 780, fontWeight: 600 }}>
            Sem compromisso. Em até <span style={{ background: '#fff', color: 'var(--accent)', padding: '4px 14px', borderRadius: 14 }}>15 minutos</span> pelo WhatsApp.
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="cta-pill" style={{ background: '#fff', color: 'var(--navy)' }}><WAIcon s={28}/>Quero meu orçamento</span>
          <Handle />
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Feed_Hook, Feed_24h, Feed_Services, Feed_Testimonial, Feed_Promo, Brand, Check, Star, WAIcon, Phone, Clock, Pipe, Drop, Shield, Wrench, Stars, Handle, LOGO });
