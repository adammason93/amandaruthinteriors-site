/* Test page: From Design to Reality (wipe-in reveal + scroll parallax),
   Mood Boards pin wall (staggered scroll-in) and a shared lightbox.
   Reduced motion: everything shows at rest, with no reveal or parallax. */
(function () {
  var reduce = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;

  function reduced() {
    return !!(reduce && reduce.matches);
  }

  function designReality() {
    var section = document.querySelector('[data-dr2]');
    var rooms = Array.prototype.slice.call(document.querySelectorAll('[data-dr-room]'));
    if (!section || !rooms.length) return;
    if (reduced() || !('IntersectionObserver' in window)) return;

    section.classList.add('dr-motion');

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { threshold: 0.22, rootMargin: '0px 0px -6% 0px' });
    rooms.forEach(function (room) { io.observe(room); });

    // Scroll parallax: --p runs 0 to 1 as each room travels up the screen.
    var ticking = false;
    function update() {
      ticking = false;
      var vh = window.innerHeight || document.documentElement.clientHeight;
      rooms.forEach(function (room) {
        var r = room.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) return;
        var p = (vh - r.top) / (vh + r.height);
        p = Math.max(0, Math.min(1, p));
        room.style.setProperty('--p', p.toFixed(3));
      });
    }
    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    update();
  }

  function moodWall() {
    var wall = document.querySelector('[data-mb-wall]');
    if (!wall) return;
    if (reduced() || !('IntersectionObserver' in window)) return;
    var section = wall.closest('.section-moods');
    if (section) section.classList.add('mb-motion');
    var items = Array.prototype.slice.call(wall.querySelectorAll('.mb-item'));
    var io = new IntersectionObserver(function (entries) {
      var batch = entries.filter(function (e) { return e.isIntersecting; });
      batch.forEach(function (entry, i) {
        entry.target.style.setProperty('--d', (i * 140) + 'ms');
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { threshold: 0.18, rootMargin: '0px 0px -6% 0px' });
    items.forEach(function (it) { io.observe(it); });
  }

  function moodLightbox() {
    var triggers = Array.prototype.slice.call(document.querySelectorAll('[data-mood-open]'));
    if (!triggers.length) return;

    var lb = document.createElement('div');
    lb.className = 'mood-lightbox';
    lb.setAttribute('hidden', '');
    lb.setAttribute('role', 'dialog');
    lb.setAttribute('aria-modal', 'true');
    lb.setAttribute('aria-label', 'Mood board');
    lb.innerHTML =
      '<button type="button" class="mood-lightbox-close" aria-label="Close">&times;</button>' +
      '<button type="button" class="mood-lightbox-prev" aria-label="Previous mood board">&#10094;</button>' +
      '<figure class="mood-lightbox-stage"><img alt=""><figcaption class="mood-lightbox-caption"></figcaption></figure>' +
      '<button type="button" class="mood-lightbox-next" aria-label="Next mood board">&#10095;</button>';
    document.body.appendChild(lb);

    var lbImg = lb.querySelector('img');
    var lbCap = lb.querySelector('.mood-lightbox-caption');
    var btnClose = lb.querySelector('.mood-lightbox-close');
    var btnPrev = lb.querySelector('.mood-lightbox-prev');
    var btnNext = lb.querySelector('.mood-lightbox-next');
    var focusables = [btnClose, btnPrev, btnNext];
    var index = 0;
    var lastFocus = null;

    var group = triggers;

    function show(i) {
      index = (i + group.length) % group.length;
      var t = group[index];
      var img = t.querySelector('img');
      lbImg.src = t.getAttribute('data-full') || (img && (img.currentSrc || img.src)) || '';
      var caption = t.getAttribute('data-caption') || (img && img.getAttribute('alt')) || '';
      lbImg.alt = (img && img.getAttribute('alt')) || caption;
      lbCap.textContent = caption;
      lbCap.hidden = !caption;
    }

    function open(trigger) {
      lastFocus = document.activeElement;
      var g = trigger.getAttribute('data-group') || '';
      group = triggers.filter(function (t) { return (t.getAttribute('data-group') || '') === g; });
      var many = group.length > 1;
      btnPrev.hidden = !many;
      btnNext.hidden = !many;
      lb.setAttribute('aria-label', g === 'design' ? 'Design drawing' : 'Mood board');
      btnPrev.setAttribute('aria-label', g === 'design' ? 'Previous drawing' : 'Previous mood board');
      btnNext.setAttribute('aria-label', g === 'design' ? 'Next drawing' : 'Next mood board');
      show(group.indexOf(trigger));
      lb.removeAttribute('hidden');
      document.body.classList.add('lightbox-open');
      btnClose.focus();
    }

    function close() {
      if (lb.hasAttribute('hidden')) return;
      lb.setAttribute('hidden', '');
      document.body.classList.remove('lightbox-open');
      lbImg.removeAttribute('src');
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    triggers.forEach(function (t) {
      t.addEventListener('click', function () { open(t); });
    });

    btnClose.addEventListener('click', close);
    btnPrev.addEventListener('click', function () { show(index - 1); });
    btnNext.addEventListener('click', function () { show(index + 1); });
    lb.addEventListener('click', function (e) {
      if (e.target === lb) close();
    });

    document.addEventListener('keydown', function (e) {
      if (lb.hasAttribute('hidden')) return;
      if (e.key === 'Escape') { e.preventDefault(); close(); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); show(index - 1); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); show(index + 1); }
      else if (e.key === 'Tab') {
        var live = focusables.filter(function (b) { return !b.hidden; });
        var first = live[0];
        var last = live[live.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        } else if (live.indexOf(document.activeElement) === -1) {
          e.preventDefault();
          first.focus();
        }
      }
    });

    var startX = 0, startY = 0, tracking = false;
    lb.addEventListener('touchstart', function (e) {
      if (!e.changedTouches[0]) return;
      tracking = true;
      startX = e.changedTouches[0].clientX;
      startY = e.changedTouches[0].clientY;
    }, { passive: true });
    lb.addEventListener('touchend', function (e) {
      if (!tracking || !e.changedTouches[0]) return;
      tracking = false;
      var dx = e.changedTouches[0].clientX - startX;
      var dy = e.changedTouches[0].clientY - startY;
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
        if (dx < 0) show(index + 1);
        else show(index - 1);
      }
    }, { passive: true });
  }

  designReality();
  moodWall();
  moodLightbox();
})();
