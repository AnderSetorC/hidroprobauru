// Tweaks panel for Hidro Pró landing
const { useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#F25C1F",
  "heroStyle": "form",
  "primaryCta": "whatsapp",
  "showMobileBar": true
}/*EDITMODE-END*/;

function hexToSoft(hex) {
  const h = hex.replace('#', '');
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  const mix = (c) => Math.round(c + (255 - c) * 0.88);
  return `rgb(${mix(r)}, ${mix(g)}, ${mix(b)})`;
}

function HidroProTweaks() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', t.accent);
    document.documentElement.style.setProperty('--accent-soft', hexToSoft(t.accent));
  }, [t.accent]);

  useEffect(() => {
    const heroContainer = document.querySelector('.hero .container');
    const leadCard = document.querySelector('.lead-card');
    if (!heroContainer || !leadCard) return;
    if (t.heroStyle === 'simple') {
      heroContainer.style.gridTemplateColumns = '1fr';
      heroContainer.style.maxWidth = '900px';
      leadCard.style.display = 'none';
    } else {
      heroContainer.style.gridTemplateColumns = '';
      heroContainer.style.maxWidth = '';
      leadCard.style.display = '';
    }
  }, [t.heroStyle]);

  useEffect(() => {
    const waBtn = document.querySelector('.hero .hero-cta-row a:first-child');
    const callBtn = document.querySelector('.hero .hero-cta-row a:nth-child(2)');
    if (!waBtn || !callBtn) return;
    // Reset
    waBtn.classList.remove('btn-wa', 'btn-ghost-white', 'btn-accent');
    callBtn.classList.remove('btn-wa', 'btn-ghost-white', 'btn-accent');
    if (t.primaryCta === 'call') {
      waBtn.classList.add('btn-ghost-white');
      callBtn.classList.add('btn-accent');
    } else {
      waBtn.classList.add('btn-wa');
      callBtn.classList.add('btn-ghost-white');
    }
  }, [t.primaryCta]);

  useEffect(() => {
    const bar = document.querySelector('.mobile-bar');
    if (bar) bar.style.display = t.showMobileBar ? '' : 'none';
  }, [t.showMobileBar]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Acento de urgência" />
      <TweakColor
        label="Cor de destaque"
        value={t.accent}
        options={['#F25C1F', '#E63946', '#1E7BD6', '#25D366']}
        onChange={(v) => setTweak('accent', v)}
      />

      <TweakSection label="Hero" />
      <TweakRadio
        label="Layout"
        value={t.heroStyle}
        options={[
          { value: 'form', label: 'Com form' },
          { value: 'simple', label: 'Sem form' },
        ]}
        onChange={(v) => setTweak('heroStyle', v)}
      />
      <TweakRadio
        label="CTA principal"
        value={t.primaryCta}
        options={[
          { value: 'whatsapp', label: 'WhatsApp' },
          { value: 'call', label: 'Ligar' },
        ]}
        onChange={(v) => setTweak('primaryCta', v)}
      />

      <TweakSection label="Mobile" />
      <TweakToggle
        label="Barra fixa mobile"
        value={t.showMobileBar}
        onChange={(v) => setTweak('showMobileBar', v)}
      />
    </TweaksPanel>
  );
}

const tweaksRoot = document.createElement('div');
document.body.appendChild(tweaksRoot);
ReactDOM.createRoot(tweaksRoot).render(<HidroProTweaks />);
