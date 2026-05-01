(function () {
  const chars = '01アイウエオカキクケコ{}[]<>|/\\*&#@!$%';

  function scramble(el, finalText, duration, finalColor) {
    if (!el) return;
    // Fjern sort boks — ingen overflow hidden, ingen width animation
    el.style.opacity = '1';
    el.style.color = '#00ff41';
    el.style.textShadow = '0 0 8px #00ff41';
    el.style.background = 'none';
    el.style.border = 'none';
    el.style.whiteSpace = 'normal';
    el.style.overflow = 'visible';
    el.style.width = 'auto';

    let iterations = 0;
    const totalSteps = duration / 80; // langsommere = mere flydende

    const interval = setInterval(() => {
      el.textContent = finalText
        .split('')
        .map((char, i) => {
          if (char === ' ') return ' ';
          const revealAt = Math.floor((i / finalText.length) * totalSteps * 0.65);
          if (iterations > revealAt) return char;
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');

      // Grøn hele vejen igennem, fade til finalColor til sidst
      const progress = iterations / totalSteps;
      if (progress > 0.85) {
        el.style.color = finalColor;
        el.style.textShadow = 'none';
      } else {
        el.style.color = '#00ff41';
        el.style.textShadow = '0 0 8px #00ff41, 0 0 2px #00ff41';
      }

      if (iterations >= totalSteps) {
        el.textContent = finalText;
        el.style.color = finalColor;
        el.style.textShadow = 'none';
        clearInterval(interval);
      }
      iterations++;
    }, 80);
  }

  document.addEventListener('DOMContentLoaded', function () {
    const h1 = document.querySelector('h1.text-4xl');
    const h2 = document.querySelector('h2.text-xl');

    if (h1) {
      // Fjern sort boks fra CSS
      h1.style.overflow = 'visible';
      h1.style.whiteSpace = 'normal';
      h1.style.width = 'auto';
      h1.style.border = 'none';
      h1.style.background = 'none';
      const name = h1.textContent.trim();
      setTimeout(() => scramble(h1, name, 2400, '#e6edf3'), 400);
    }

    if (h2) {
      h2.style.overflow = 'visible';
      h2.style.whiteSpace = 'normal';
      h2.style.width = 'auto';
      h2.style.border = 'none';
      h2.style.background = 'none';
      const tagline = h2.textContent.trim();
      setTimeout(() => scramble(h2, tagline, 1600, '#a0aec0'), 3000);
    }
  });
})();