/* =============================================
   CrowdSense AI — Multi-Agent Logic
   ============================================= */

// Simulation data
const crowdLevels = ["Low", "Medium", "High"];

/**
 * Handle the optimization request from the UI
 */
function handleGenerate() {
  const input = document.getElementById("userInput").value;
  if (!input) return;

  const outputContainer = document.getElementById("output");
  
  // Show a "Processing" state for premium feel
  outputContainer.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px;">Optimizing experience pipeline...</p>`;

  setTimeout(() => {
    const level = crowdLevels[Math.floor(Math.random() * crowdLevels.length)];
    const wait = level === "Low" ? "3 min" : level === "Medium" ? "7 min" : "12 min";

    const results = [
      { icon: "📍", title: "Optimal Route", value: "Gate A → Section B" },
      { icon: "⏱", title: "Est. Wait Time", value: wait },
      { icon: "🔥", title: "Crowd Density", value: level },
      { icon: "💡", title: "Smart Suggestion", value: "Move now to avoid rush" }
    ];

    renderCards(results);
    
    // Smooth scroll to results
    outputContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 800);
}

/**
 * Render premium glass cards
 */
function renderCards(results) {
  const outputContainer = document.getElementById("output");
  outputContainer.innerHTML = '';

  results.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'result-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
      <div class="card-header">
        <span class="card-icon">${item.icon}</span>
        <span>${item.title}</span>
      </div>
      <div class="card-value">${item.value}</div>
    `;
    
    outputContainer.appendChild(card);
  });
}

// Add a helper for the quick CTA button
document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  if (window.location.hash === '#demo') {
    document.getElementById('userInput').focus();
  }
});