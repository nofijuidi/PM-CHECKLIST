// js/fullscreen-global.js

function enableGlobalFullScreen() {
  // Check if running as Installed PWA / Standalone Home Screen App
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || 
                       window.navigator.standalone || 
                       document.referrer.includes('android-app://');

  // If already running standalone PWA, browser status bars are automatically hidden!
  if (isStandalone) return;

  // Otherwise, if running inside standard web browser tab, request fullscreen on tap
  const doc = document.documentElement;
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
    // Suppress console errors on navigation
  }
}

// Trigger only on first user touch per page load
document.addEventListener('touchstart', enableGlobalFullScreen, { once: true });
document.addEventListener('click', enableGlobalFullScreen, { once: true });
