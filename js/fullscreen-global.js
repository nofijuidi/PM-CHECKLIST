// js/fullscreen-global.js

function enableGlobalFullScreen() {
  const doc = document.documentElement;

  // Don't re-trigger if the document is ALREADY in full-screen mode
  if (document.fullscreenElement || document.webkitFullscreenElement) return;

  try {
    if (doc.requestFullscreen) {
      doc.requestFullscreen().catch(() => {});
    } else if (doc.webkitRequestFullscreen) {
      doc.webkitRequestFullscreen();
    } else if (doc.msRequestFullscreen) {
      doc.msRequestFullscreen();
    }
  } catch (err) {
    // Suppress console errors on page transitions
  }
}

// Request full-screen mode on the first tap/touch on ANY loaded page
document.addEventListener('touchstart', enableGlobalFullScreen, { once: true });
document.addEventListener('click', enableGlobalFullScreen, { once: true });
