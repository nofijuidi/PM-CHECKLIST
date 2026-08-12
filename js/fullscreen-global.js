// js/fullscreen-global.js

// Prevents standard web pinch-zoom on non-canvas elements and keeps layout fixed
document.addEventListener('gesturestart', function (e) {
  e.preventDefault();
});

// Suppress right-click / hold context menus globally for an app-like experience
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});
