function enableGlobalFullScreen() {
  const doc = document.documentElement;
  
  if (document.fullscreenElement || document.webkitFullscreenElement) return;

  if (doc.requestFullscreen) {
    doc.requestFullscreen().catch(() => {});
  } else if (doc.webkitRequestFullscreen) {
    doc.webkitRequestFullscreen();
  } else if (doc.msRequestFullscreen) {
    doc.msRequestFullscreen();
  }
}

document.addEventListener('touchstart', enableGlobalFullScreen, { once: true });
document.addEventListener('click', enableGlobalFullScreen, { once: true });
