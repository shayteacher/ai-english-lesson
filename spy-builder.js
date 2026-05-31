// ============================================================
// SPY BUILDER
// Reads dropdowns, looks up combo, picks random variation
// Depends on: spy-responses.js loaded before this file
// ============================================================

function initSpyBuilder() {

  const animalSelect      = document.getElementById('spy-animal');
  const distractSelect    = document.getElementById('spy-distraction');
  const submitBtn         = document.getElementById('spy-submit');
  const resultBox         = document.getElementById('spy-result');
  const resultText        = document.getElementById('spy-result-text');
  const promptDisplay     = document.getElementById('spy-prompt-display');

  // Build the assembled prompt display as options change
  function updatePromptPreview() {
    const animalLabel    = animalSelect.options[animalSelect.selectedIndex].text;
    const distractLabel  = distractSelect.options[distractSelect.selectedIndex].text;

    if (animalSelect.value === '' || distractSelect.value === '') {
      promptDisplay.textContent = 'Your mission briefing will appear here...';
      promptDisplay.classList.add('placeholder');
      submitBtn.disabled = true;
      return;
    }

    promptDisplay.textContent =
      `"You are a spy mission AI assistant. A secret agent's animal partner must help them sneak past a guard. ` +
      `The animal partner is a ${animalLabel}. The distraction strategy is ${distractLabel}. ` +
      `Write ONE funny sentence describing exactly how this works."`;
    promptDisplay.classList.remove('placeholder');
    submitBtn.disabled = false;
  }

  animalSelect.addEventListener('change', updatePromptPreview);
  distractSelect.addEventListener('change', updatePromptPreview);

  submitBtn.addEventListener('click', function () {
    const animalIdx    = animalSelect.value;
    const distractIdx  = distractSelect.value;

    if (animalIdx === '' || distractIdx === '') return;

    const key          = `${animalIdx}-${distractIdx}`;
    const variations   = SPY_RESPONSES[key];

    if (!variations || variations.length === 0) {
      resultText.textContent = 'No response found for this combination.';
      resultBox.style.display = 'block';
      return;
    }

    // Filter out placeholder responses
    const valid = variations.filter(v => v !== 'RESPONSE NEEDED');
    if (valid.length === 0) {
      resultText.textContent = 'This combination is coming soon. Try another one!';
      resultBox.style.display = 'block';
      return;
    }

    // Pick a random variation
    const picked = valid[Math.floor(Math.random() * valid.length)];

    // Animate out if already visible
    resultBox.classList.remove('visible');
    setTimeout(() => {
      resultText.textContent = picked;
      resultBox.style.display = 'block';
      // Force reflow then animate in
      void resultBox.offsetWidth;
      resultBox.classList.add('visible');
    }, 200);

    // Scroll result into view on tablet
    setTimeout(() => {
      resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 350);
  });

  // Initialize
  updatePromptPreview();
}

document.addEventListener('DOMContentLoaded', initSpyBuilder);
