// Hidro Pró — Instagram Stories (1080×1920)

// ─── Story 1: Big "24h" hook with arrow up ───
function Story_24h() {
  return (
    <div className="ig story bg-navy tex-grid">
      <div className="pad" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
        <Brand/>

        <div style={{ textAlign: 'center', marginTop: 'auto', marginBottom: 'auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 14, padding: '16px 28px', background: 'var(--accent)', borderRadius: 999, fontSize: 32, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 32 }}>
            <span className="dot" style={{ background: '#fff' }}></span>Emergência
          </div>
          <h1 style={{ fontSize: 360, fontWeight: 800, lineHeight: 0.85, letterSpacing: '-0.06em' }}>24h</h1>
          <div style={{ fontSize: 56, fontWeight: 800, marginTop: 26 }}>
            Vazou? <span className="hl-blue">Resolvemos.</span>
          </div>
          <p style={{ fontSize: 32, opacity: 0.85, marginTop: 22, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
            Atendimento hidráulico em Bauru a qualquer hora. Chegamos em até 60 min.
          </p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <div className="swipe-up" style={{ background: 'var(--wa)', borderColor: 'var(--wa)', fontSize: 32 }}>
            <WAIcon s={32}/>Chamar no WhatsApp
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>
          </div>
          <div style={{ marginTop: 24, fontSize: 26, opacity: 0.8, letterSpacing: '0.04em' }}>
            (14) 99154-2415 · @hidroprobauru
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Story 2: Social proof (4.9 stars) ───
function Story_SocialProof() {
  return (
    <div className="ig story bg-white">
      <div className="pad" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
        <Brand/>

        <div style={{ marginTop: 'auto', marginBottom: 'auto' }}>
          <span className="eyebrow">Avaliação Google</span>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 24, marginTop: 28 }}>
            <div style={{ fontSize: 380, fontWeight: 800, color: 'var(--navy)', letterSpacing: '-0.05em', lineHeight: 0.85 }}>4,9</div>
            <div style={{ paddingBottom: 30 }}>
              <div style={{ color: '#FFC53D', display: 'inline-flex', gap: 4 }}>
                <Star s={54}/><Star s={54}/><Star s={54}/><Star s={54}/><Star s={54}/>
              </div>
              <div style={{ color: 'var(--muted)', fontSize: 26, marginTop: 8 }}>320+ avaliações</div>
            </div>
          </div>

          <h2 style={{ color: 'var(--navy)', fontSize: 76, marginTop: 40, lineHeight: 1.05 }}>
            Quem chama, <span style={{ color: 'var(--blue)' }}>recomenda.</span>
          </h2>

          <div style={{ background: '#fff', border: '1px solid #E4EAF2', borderRadius: 28, padding: 36, marginTop: 36, boxShadow: '0 10px 30px rgba(11,42,74,0.06)' }}>
            <div style={{ color: '#FFC53D', display: 'inline-flex', gap: 2 }}>
              <Star s={24}/><Star s={24}/><Star s={24}/><Star s={24}/><Star s={24}/>
            </div>
            <p style={{ fontSize: 28, color: 'var(--ink)', marginTop: 16, lineHeight: 1.45, fontWeight: 500 }}>
              "Resolveram um vazamento que vinha me incomodando há meses. Trabalho rápido e limpo."
            </p>
            <div style={{ fontSize: 22, color: 'var(--muted)', marginTop: 16, fontWeight: 600 }}>
              — Aline S., Vila Aviação
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <div className="swipe-up" style={{ background: 'var(--navy)', color: '#fff', borderColor: 'var(--navy)', fontSize: 32 }}>
            <WAIcon s={32}/>Falar com a Hidro Pró
          </div>
          <div style={{ marginTop: 22, fontSize: 24, color: 'var(--muted)', letterSpacing: '0.04em' }}>
            @hidroprobauru · (14) 99154-2415
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Story 3: Promo "Orçamento grátis" ───
function Story_Promo() {
  return (
    <div className="ig story bg-accent">
      <div className="pad" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
        <Brand/>

        <div style={{ marginTop: 'auto', marginBottom: 'auto' }}>
          <span className="eyebrow" style={{ background: '#fff', color: 'var(--accent)', borderColor: '#fff' }}>
            <span className="dot"></span>Sem compromisso
          </span>

          <div style={{ fontSize: 56, fontWeight: 800, marginTop: 32, lineHeight: 1.05 }}>Orçamento</div>
          <div style={{ fontSize: 280, fontWeight: 800, lineHeight: 0.85, letterSpacing: '-0.06em', marginTop: 8 }}>GRÁTIS</div>

          <p style={{ fontSize: 38, marginTop: 32, fontWeight: 600, maxWidth: 800 }}>
            Em até <span style={{ background: '#fff', color: 'var(--accent)', padding: '4px 16px', borderRadius: 14 }}>15 min</span> pelo WhatsApp.
          </p>

          <ul className="bullets" style={{ marginTop: 38 }}>
            <li><span className="chk" style={{ background: 'rgba(255,255,255,0.22)', borderColor: 'rgba(255,255,255,0.55)', color: '#fff' }}><Check s={26}/></span> Desentupimento, vazamento e instalação</li>
            <li><span className="chk" style={{ background: 'rgba(255,255,255,0.22)', borderColor: 'rgba(255,255,255,0.55)', color: '#fff' }}><Check s={26}/></span> Garantia em todos os serviços</li>
            <li><span className="chk" style={{ background: 'rgba(255,255,255,0.22)', borderColor: 'rgba(255,255,255,0.55)', color: '#fff' }}><Check s={26}/></span> Pix, cartão ou dinheiro</li>
          </ul>
        </div>

        <div style={{ textAlign: 'center' }}>
          <div className="swipe-up" style={{ background: '#fff', color: 'var(--accent)', borderColor: '#fff', fontSize: 32, fontWeight: 800 }}>
            <WAIcon s={32}/>Pedir agora
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>
          </div>
          <div style={{ marginTop: 22, fontSize: 26, opacity: 0.85, letterSpacing: '0.04em' }}>
            @hidroprobauru · (14) 99154-2415
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Story_24h, Story_SocialProof, Story_Promo });
