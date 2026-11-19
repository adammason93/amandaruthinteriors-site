/* Home client reviews: a gentle crossfade between quotes.
   Advances every 7 seconds, pauses on hover or focus, supports swipe and dots.
   Reduced motion: no auto-advance and no fade. */
(function () {
  var root = document.querySelector('[data-reviews]');
  if (!root) return;
  var slides = Array.prototype.slice.call(root.querySelectorAll('[data-review-slide]'));
  if (slides.length < 2) return;

  var dotsWrap = root.querySelector('[data-reviews-dots]');
  var reduce = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
  var INTERVAL = 7000;
  var index = 0;
  var timer = null;
  var hovering = false;
  var focused = false;
  var touchX = null;
  var touchY = null;

  function reduced() {
    return !!(reduce && reduce.matches);
  }

  function setSlideState(i, on) {
    var slide = slides[i];
    var dot = dotsWrap && dotsWrap.children[i];
    if (on) {
      slide.classList.add('is-active');
      slide.removeAttribute('aria-hidden');
      if (dot) {
        dot.classList.add('is-active');
        dot.setAttribute('aria-current', 'true');
      }
    } else {
      slide.classList.remove('is-active');
      slide.setAttribute('aria-hidden', 'true');
      if (dot) {
        dot.classList.remove('is-active');
        dot.removeAttribute('aria-current');
      }
    }
  }

  function show(next, fromUser) {
    next = (next + slides.length) % slides.length;
    if (next === index) return;
    setSlideState(index, false);
    setSlideState(next, true);
    index = next;
    if (fromUser) start();
  }

  function stop() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  function start() {
    stop();
    if (reduced() || hovering || focused || document.hidden) return;
    timer = setInterval(function () { show(index + 1, false); }, INTERVAL);
  }

  if (dotsWrap && !dotsWrap.children.length) {
    slides.forEach(function (_, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'reviews-dot' + (i === 0 ? ' is-active' : '');
      b.setAttribute('aria-label', 'Show review ' + (i + 1) + ' of ' + slides.length);
      if (i === 0) b.setAttribute('aria-current', 'true');
      b.addEventListener('click', function () { show(i, true); });
      dotsWrap.appendChild(b);
    });
  }

  slides.forEach(function (_, i) { setSlideState(i, i === 0); });
  root.classList.add('is-ready');
  root.setAttribute('tabindex', '0');

  root.addEventListener('mouseenter', function () { hovering = true; stop(); });
  root.addEventListener('mouseleave', function () { hovering = false; start(); });
  root.addEventListener('focusin', function () { focused = true; stop(); });
  root.addEventListener('focusout', function (e) {
    if (root.contains(e.relatedTarget)) return;
    focused = false;
    start();
  });

  root.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      show(index + 1, true);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      show(index - 1, true);
    } else if (e.key === 'Home') {
      e.preventDefault();
      show(0, true);
    } else if (e.key === 'End') {
      e.preventDefault();
      show(slides.length - 1, true);
    }
  });

  function swipeFrom(x, y, x2, y2) {
    var dx = x2 - x;
    var dy = y2 - y;
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;
    show(index + (dx < 0 ? 1 : -1), true);
  }

  root.addEventListener('pointerdown', function (e) {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    if (e.target && e.target.closest && e.target.closest('.reviews-dot')) return;
    touchX = e.clientX;
    touchY = e.clientY;
  });

  root.addEventListener('pointerup', function (e) {
    if (touchX == null) return;
    var x = touchX, y = touchY;
    touchX = null;
    touchY = null;
    swipeFrom(x, y, e.clientX, e.clientY);
  });

  root.addEventListener('pointercancel', function () {
    touchX = null;
    touchY = null;
  });

  document.addEventListener('visibilitychange', function () {
    if (document.hidden) stop();
    else start();
  });

  if (reduce) {
    if (reduce.addEventListener) reduce.addEventListener('change', start);
    else if (reduce.addListener) reduce.addListener(start);
  }

  start();
})();
