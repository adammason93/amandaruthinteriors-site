/* Preview pages only: short silent films of Ruth's own work.
   <video data-reel data-src="…mp4" poster="…webp" muted loop playsinline autoplay preload="none">
   The file is fetched only when the film nears the screen, plays only while it is on screen,
   and pauses when scrolled away or the tab is hidden. Reduced motion or Save-Data: poster only. */
(function () {
  var vids = Array.prototype.slice.call(document.querySelectorAll('video[data-reel]'));
  if (!vids.length) return;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');
  var conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  function still() { return (reduce && reduce.matches) || !!(conn && conn.saveData); }

  vids.forEach(function (v) {
    v.muted = true;
    v.setAttribute('playsinline', '');
    v._on = false;
    v.addEventListener('play', function () { if (!v._on || still() || document.hidden) v.pause(); });
    v.addEventListener('playing', function () { v.classList.add('is-playing'); });
    if (still()) { v.removeAttribute('autoplay'); v.autoplay = false; }
  });

  function load(v) {
    if (still() || !v.hasAttribute('data-src')) return;
    v.src = v.getAttribute('data-src');
    v.removeAttribute('data-src');
    v.load();
  }
  function sync(v) {
    if (v._on && !still() && !document.hidden) {
      load(v);
      var pr = v.play();
      if (pr && pr.catch) pr.catch(function () {});
    } else if (!v.paused) {
      v.pause();
    }
  }

  if ('IntersectionObserver' in window) {
    var near = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { load(en.target); near.unobserve(en.target); } });
    }, { rootMargin: '300px 0px' });
    var seen = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { en.target._on = en.isIntersecting; sync(en.target); });
    }, { threshold: 0.2 });
    vids.forEach(function (v) { near.observe(v); seen.observe(v); });
  } else {
    vids.forEach(function (v) { v._on = true; sync(v); });
  }
  document.addEventListener('visibilitychange', function () { vids.forEach(sync); });
  if (reduce && reduce.addEventListener) reduce.addEventListener('change', function () { vids.forEach(sync); });
})();
