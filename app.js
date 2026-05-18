// Hidro Pró — landing interactions

(function () {
  // ---- FAQ accordion ----
  document.querySelectorAll('.faq-item').forEach((item) => {
    const btn = item.querySelector('.faq-q');
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach((o) => {
        o.classList.remove('open');
        o.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ---- Phone mask (Brazilian) ----
  const phoneInputs = document.querySelectorAll('input[type="tel"]');
  phoneInputs.forEach((inp) => {
    inp.addEventListener('input', (e) => {
      let v = e.target.value.replace(/\D/g, '').slice(0, 11);
      if (v.length > 10) {
        v = v.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, '($1) $2-$3');
      } else if (v.length > 6) {
        v = v.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
      } else if (v.length > 2) {
        v = v.replace(/^(\d{2})(\d{0,5}).*/, '($1) $2');
      } else if (v.length > 0) {
        v = v.replace(/^(\d{0,2}).*/, '($1');
      }
      e.target.value = v;
    });
  });

  // ---- Form submit → WhatsApp ----
  document.querySelectorAll('form[data-leadform]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = (data.get('name') || '').toString().trim();
      const phone = (data.get('phone') || '').toString().trim();
      const service = (data.get('service') || '').toString().trim();
      const message = (data.get('message') || '').toString().trim();

      if (!name || !phone) {
        const errEl = form.querySelector('.form-error');
        if (errEl) {
          errEl.textContent = 'Por favor, preencha nome e telefone.';
          errEl.style.display = 'block';
        }
        return;
      }

      const lines = [
        `Olá! Sou ${name}.`,
        service ? `Preciso de: ${service}.` : null,
        message ? `Detalhes: ${message}` : null,
        `Meu telefone: ${phone}.`,
        `Pode me passar um orçamento, por favor? (vi no site)`,
      ].filter(Boolean);
      const text = encodeURIComponent(lines.join('\n'));
      const phoneWA = '5514991542415';
      window.open(`https://wa.me/${phoneWA}?text=${text}`, '_blank');
    });
  });

  // ---- Smooth-scroll anchors ----
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
  // ---- Photo mosaic rotation ----
  const mosaic = document.querySelector('.photo-mosaic');
  if (mosaic) {
    const allImages = Array.from(mosaic.querySelectorAll('img'));
    const visibleSlots = allImages.filter(img => !img.classList.contains('mosaic-6') && !img.classList.contains('mosaic-7') && !img.classList.contains('mosaic-8'));
    const hiddenImages = allImages.filter(img => img.classList.contains('mosaic-6') || img.classList.contains('mosaic-7') || img.classList.contains('mosaic-8'));

    let pool = [...hiddenImages];

    function rotateSlot() {
      if (pool.length === 0) return;
      // Pick a random visible slot (not center)
      const slotIndex = Math.floor(Math.random() * visibleSlots.length);
      const currentImg = visibleSlots[slotIndex];
      // Pick a random hidden image
      const poolIndex = Math.floor(Math.random() * pool.length);
      const newImg = pool[poolIndex];

      // Fade out current
      currentImg.style.opacity = '0';

      setTimeout(() => {
        // Swap src and alt
        const tempSrc = currentImg.src;
        const tempAlt = currentImg.alt;
        currentImg.src = newImg.src;
        currentImg.alt = newImg.alt;
        newImg.src = tempSrc;
        newImg.alt = tempAlt;

        // Fade in
        currentImg.style.opacity = '1';
      }, 800);
    }

    setInterval(rotateSlot, 3500);
  }
})();
