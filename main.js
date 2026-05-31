// ============================================================
// MAIN.JS
// Nav, QR modal, copy functions, dress compare toggle, poll
// ============================================================

document.addEventListener('DOMContentLoaded', function () {

  // ── QR MODAL ─────────────────────────────────────────────

  const qrBtn   = document.getElementById('qr-btn');
  const qrModal = document.getElementById('qr-modal');
  const qrClose = document.getElementById('qr-close');

  if (qrBtn) {
    qrBtn.addEventListener('click', function (e) {
      e.preventDefault();
      qrModal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  }

  if (qrClose) {
    qrClose.addEventListener('click', closeQR);
  }

  if (qrModal) {
    qrModal.addEventListener('click', function (e) {
      if (e.target === qrModal) closeQR();
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeQR();
  });

  function closeQR() {
    qrModal.style.display = 'none';
    document.body.style.overflow = '';
  }

  // ── COPY TO CLIPBOARD ─────────────────────────────────────

  window.copyText = function (text, btn) {
    navigator.clipboard.writeText(text).then(() => {
      const original = btn.textContent;
      btn.textContent = 'Copied!';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.textContent = original;
        btn.classList.remove('copied');
      }, 2000);
    });
  };

  window.copyAssembled = function (id, btn) {
    const el = document.getElementById(id);
    if (!el) return;
    copyText(el.textContent, btn);
  };

  // ── DRESS COMPARE SLIDER ──────────────────────────────────

  const slider    = document.getElementById('dress-slider');
  const overlay   = document.getElementById('dress-overlay');
  const handle    = document.getElementById('dress-handle');

  if (slider && overlay && handle) {
    let dragging = false;

    function setSliderPos(clientX) {
      const rect = slider.getBoundingClientRect();
      let pct = (clientX - rect.left) / rect.width;
      pct = Math.max(0.02, Math.min(0.98, pct));
      overlay.style.width = (pct * 100) + '%';
      handle.style.left   = (pct * 100) + '%';
      // Stretch the overlay image to always fill the container width
      const overlayImg = document.getElementById('dress-img-left');
      if (overlayImg) overlayImg.style.width = slider.offsetWidth + 'px';
      const dimmer = document.getElementById('dress-dimmer');
if (dimmer) dimmer.style.width = ((1 - pct) * 100) + '%';
    }

    // Mouse
    slider.addEventListener('mousedown', function (e) {
      dragging = true;
      setSliderPos(e.clientX);
    });
    window.addEventListener('mousemove', function (e) {
      if (dragging) setSliderPos(e.clientX);
    });
    window.addEventListener('mouseup', function () { dragging = false; });

    // Touch
    slider.addEventListener('touchstart', function (e) {
      dragging = true;
      setSliderPos(e.touches[0].clientX);
    }, { passive: true });
    window.addEventListener('touchmove', function (e) {
      if (dragging) setSliderPos(e.touches[0].clientX);
    }, { passive: true });
    window.addEventListener('touchend', function () { dragging = false; });

    // Init overlay image width on load
    window.addEventListener('load', function () {
      const overlayImg = document.getElementById('dress-img-left');
      if (overlayImg) overlayImg.style.width = slider.offsetWidth + 'px';
    });
  }

  // ── POLL LOGIC ────────────────────────────────────────────
  // Pre-loaded Pew Research stats. No tallying. Visual only.

  const pollData = [
    {
      question: "How often do you use AI?",
      options: ["Every day", "Sometimes", "Rarely", "Never"],
      stats: [
        { label: "Teens who use AI daily", pct: 30 },
        { label: "Teens who use AI chatbots", pct: 64 }
      ],
      statLabel: "According to Pew Research Center"
    },
    {
      question: "What do you mostly use AI for?",
      options: ["Homework help", "Creative stuff", "Just curious / boredom", "Translation"],
      stats: [
        { label: "Use AI for homework", pct: 56 },
        { label: "Use AI for creative expression", pct: 43 }
      ],
      statLabel: "According to Pew Research Center"
    },
    {
      question: "Have you ever used AI just because you were bored?",
      options: ["Yes, definitely", "Maybe once or twice", "No", "I don't use AI"],
      stats: [
        { label: "Teens use AI for fun or curiosity", pct: 47 },
        { label: "Use it for roleplay and storytelling", pct: 40 }
      ],
      statLabel: "According to Pew Research Center"
    }
  ];

  let currentPoll = 0;

  const pollContainer = document.getElementById('poll-container');

  function renderPoll(index) {
    if (!pollContainer) return;
    const poll = pollData[index];

    pollContainer.innerHTML = `
      <div class="poll-card">
        <div class="poll-progress">${index + 1} / ${pollData.length}</div>
        <h3 class="poll-question">${poll.question}</h3>
        <div class="poll-options">
          ${poll.options.map((opt, i) => `
            <button class="poll-option" onclick="selectPollOption(this, ${index})">
              ${opt}
            </button>
          `).join('')}
        </div>
        <div class="poll-stats" id="poll-stats-${index}" style="display:none;">
          <p class="poll-stat-label">${poll.statLabel}</p>
          ${poll.stats.map(s => `
            <div class="poll-stat-row">
              <span class="poll-stat-text">${s.label}</span>
              <div class="poll-bar-wrap">
                <div class="poll-bar" style="width:0%" data-pct="${s.pct}"></div>
                <span class="poll-pct">${s.pct}%</span>
              </div>
            </div>
          `).join('')}
          ${index < pollData.length - 1 ? `
            <button class="poll-next-btn" onclick="nextPoll()">Next Question &rarr;</button>
          ` : `
            <div class="poll-done">That is where YOU fit in. Now let's do something with it.</div>
          `}
        </div>
      </div>
    `;
  }

  window.selectPollOption = function (btn, index) {
    // Disable all options
    const options = btn.closest('.poll-options').querySelectorAll('.poll-option');
    options.forEach(o => {
      o.disabled = true;
      o.classList.remove('selected');
    });
    btn.classList.add('selected');

    // Show stats
    const statsDiv = document.getElementById(`poll-stats-${index}`);
    if (statsDiv) {
      statsDiv.style.display = 'block';
      // Animate bars
      setTimeout(() => {
        statsDiv.querySelectorAll('.poll-bar').forEach(bar => {
          bar.style.width = bar.dataset.pct + '%';
        });
      }, 100);
    }
  };

  window.nextPoll = function () {
    currentPoll++;
    if (currentPoll < pollData.length) {
      renderPoll(currentPoll);
    }
  };

  renderPoll(0);

});
