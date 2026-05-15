// Hidro Pró — Carrossel Instagram (6 slides educacionais)
// Tema: "5 sinais de que você tem um vazamento escondido"

const PagesDot = ({ active, total = 6 }) => (
  <div className="pages">
    {Array.from({ length: total }, (_, i) => <span key={i} className={i === active ? 'on' : ''}/>)}
  </div>
);

const SwipeArrow = () => (
  <div style={{ position: 'absolute', right: 56, top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.85)' }}>
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
    <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>Arraste</div>
  </div>
);

// ─── Slide 0: Cover ───
function Carr_0_Cover() {
  return (
    <div className="ig bg-navy tex-grid">
      <div className="mega-q">?</div>
      <div className="pad" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Brand />
          <span className="eyebrow"><span className="dot"></span>Salve este post</span>
        </div>

        <div>
          <div style={{ fontSize: 32, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--blue-2)' }}>Vazamento escondido</div>
          <h1 style={{ fontSize: 130, marginTop: 18, lineHeight: 0.98 }}>
            5 sinais que <span className="hl-blue">você precisa</span> conhecer
          </h1>
          <p style={{ fontSize: 32, marginTop: 26, opacity: 0.85, maxWidth: 840 }}>
            Conta de água subindo do nada? Pode ser um vazamento que ninguém vê. Veja os sinais que entregam o problema.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <Handle/>
          <SwipeArrow/>
        </div>
      </div>
      <PagesDot active={0}/>
    </div>
  );
}

// ─── Slide 1-4: Generic signal card ───
function SignalSlide({ n, title, body, Icon, active, accent = false }) {
  return (
    <div className={`ig ${accent ? 'bg-accent' : 'bg-navy'} ${accent ? '' : 'tex-grid'}`}>
      <div className="slide-num">{n}</div>
      <div className="pad" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
        <Brand small/>

        <div>
          <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: accent ? 'rgba(255,255,255,0.85)' : 'var(--blue-2)' }}>
            Sinal {n} de 4
          </div>
          <h2 style={{ marginTop: 20, fontSize: 92, lineHeight: 1.02, maxWidth: 880 }}>
            {title}
          </h2>
          <p style={{ fontSize: 32, marginTop: 28, opacity: 0.9, maxWidth: 820, lineHeight: 1.4 }}>
            {body}
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div className="icon-tile" style={{ background: accent ? 'rgba(255,255,255,0.18)' : 'rgba(125,211,252,0.18)', borderColor: accent ? 'rgba(255,255,255,0.32)' : 'rgba(125,211,252,0.45)' }}>
            <Icon s={84}/>
          </div>
          <Handle children="@hidroprobauru"/>
        </div>
      </div>
      <PagesDot active={active}/>
    </div>
  );
}

const ChartUp = ({ s = 84 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17l6-6 4 4 8-8"/><polyline points="14 7 21 7 21 14"/></svg>
);
const Mold = ({ s = 84 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 14c2-3 4-2 6 0s5 1 6-2"/><circle cx="9" cy="8" r="1.5"/><circle cx="16" cy="10" r="1"/></svg>
);
const Sound = ({ s = 84 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
);
const Gauge = ({ s = 84 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 14l4-4"/><circle cx="12" cy="14" r="1.5" fill="currentColor"/><path d="M3 17a9 9 0 0 1 18 0"/><path d="M3 17h18"/></svg>
);

function Carr_1() { return <SignalSlide n={1} active={1} Icon={ChartUp}
  title="Conta de água subiu sem motivo"
  body="Se o consumo dobrou e a rotina é a mesma, é o primeiro sinal de vazamento escondido na tubulação ou no reservatório." />; }

function Carr_2() { return <SignalSlide n={2} active={2} Icon={Mold}
  title="Manchas ou mofo na parede"
  body="Áreas úmidas, tinta descascando, mofo perto de paredes ou tetos quase sempre indicam água escapando por dentro do encanamento." />; }

function Carr_3() { return <SignalSlide n={3} active={3} Icon={Sound}
  title="Som de água correndo"
  body="Com todas as torneiras fechadas, ainda escuta o barulhinho de água? É vazamento até prova em contrário — e o tempo só piora." />; }

function Carr_4() { return <SignalSlide n={4} active={4} Icon={Gauge} accent
  title="Pressão da água caiu"
  body="Banho fraco do nada? Pode ser um vazamento na linha de pressão. Ignorar agora vira reforma grande depois." />; }

// ─── Slide 5: CTA final ───
function Carr_5_CTA() {
  return (
    <div className="ig bg-dark tex-dots">
      <div className="pad" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
        <Brand/>

        <div style={{ textAlign: 'center', marginTop: 'auto', marginBottom: 'auto' }}>
          <div className="tick" style={{ margin: '0 auto 32px' }}>
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#0B2A4A" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <h2 style={{ fontSize: 86, lineHeight: 1.05 }}>
            Identificou algum <br/>sinal? <span className="hl-blue">A gente resolve.</span>
          </h2>
          <p style={{ fontSize: 30, marginTop: 28, opacity: 0.85, maxWidth: 760, marginLeft: 'auto', marginRight: 'auto' }}>
            Detecção sem quebrar parede, orçamento gratuito e garantia em todo serviço.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 44, flexWrap: 'wrap' }}>
            <span className="cta-pill wa"><WAIcon s={30}/>WhatsApp 24h</span>
            <span className="cta-pill" style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', border: '2px solid rgba(255,255,255,0.22)' }}>
              <Phone s={26}/>(14) 99154-2415
            </span>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 22, opacity: 0.65, letterSpacing: '0.18em', textTransform: 'uppercase' }}>Bauru e região · 24h, inclusive feriados</div>
          <div style={{ marginTop: 12 }}><Handle/></div>
        </div>
      </div>
      <PagesDot active={5}/>
    </div>
  );
}

Object.assign(window, { Carr_0_Cover, Carr_1, Carr_2, Carr_3, Carr_4, Carr_5_CTA });
