/* Test page: the Portfolio book (3D page turns) and a shared lightbox.
   Desktop (>= 900px): an open two-page spread; each leaf carries two pages.
   Phone: one page at a time; each leaf carries one page and a plain back.
   Reduced motion: pages change with a short crossfade instead of a flip. */
(function () {
  var reduce = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
  var wide = window.matchMedia ? window.matchMedia('(min-width: 900px)') : null;

  function reduced() {
    return !!(reduce && reduce.matches);
  }

  function book() {
    var root = document.querySelector('[data-book]');
    if (!root) return;
    var bookEl = root.querySelector('[data-bk-book]');
    var store = root.querySelector('[data-bk-pages]');
    var faces = Array.prototype.slice.call(store.querySelectorAll('.bk-page'));
    var btnPrev = root.querySelector('[data-bk-prev]');
    var btnNext = root.querySelector('[data-bk-next]');
    var btnClose = root.querySelector('[data-bk-close]');
    var dotsEl = root.querySelector('[data-bk-dots]');
    var countEl = root.querySelector('[data-bk-count]');
    var live = root.querySelector('[data-bk-live]');
    var DUR = 950;
    var mode = '';
    var leaves = [];
    var k = 0;          // leaves turned
    var maxK = 0;
    var seq = 0;
    var hinted = false;
    var turnedOnce = false;
    var announce = false;

    var tag = document.createElement('span');
    tag.className = 'bk-hint-tag';
    tag.setAttribute('aria-hidden', 'true');
    tag.textContent = 'Turn the page';
    bookEl.appendChild(tag);

    function isDesk() { return !wide || wide.matches; }

    function blankBack() {
      var b = document.createElement('div');
      b.className = 'bk-page bk-paper bk-blank';
      b.setAttribute('aria-hidden', 'true');
      return b;
    }

    function side(cls, face) {
      var d = document.createElement('div');
      d.className = 'bk-side ' + cls;
      if (face) d.appendChild(face);
      return d;
    }

    function build() {
      var want = isDesk() ? 'desk' : 'phone';
      if (want === mode) return;
      // keep the reader on roughly the same page across the switch
      var facePos = mode === 'desk' ? Math.max(0, 2 * k - 1) : (mode === 'phone' ? k : 0);
      leaves.forEach(function (l) { l.remove(); });
      leaves = [];
      faces.forEach(function (f) { store.appendChild(f); });
      mode = want;
      root.classList.toggle('bk-desk', mode === 'desk');
      root.classList.toggle('bk-phone', mode === 'phone');
      if (mode === 'desk') {
        for (var i = 0; i < faces.length; i += 2) {
          var leaf = document.createElement('div');
          leaf.className = 'bk-leaf';
          leaf.appendChild(side('bk-front', faces[i]));
          leaf.appendChild(side('bk-back', faces[i + 1] || blankBack()));
          leaves.push(leaf);
        }
        maxK = leaves.length;
        k = Math.min(maxK, Math.ceil(facePos / 2));
      } else {
        faces.forEach(function (f) {
          var leaf = document.createElement('div');
          leaf.className = 'bk-leaf';
          leaf.appendChild(side('bk-front', f));
          leaf.appendChild(side('bk-back', blankBack()));
          leaves.push(leaf);
        });
        maxK = leaves.length - 1;
        k = Math.min(maxK, facePos);
      }
      leaves.forEach(function (l, i) {
        if (i < k) l.classList.add('is-flipped');
        bookEl.insertBefore(l, store);
      });
      root.classList.add('bk-ready');
      buildDots();
      settle();
    }

    function stops() { return maxK + 1; }

    function stopLabel(i) {
      if (mode === 'phone') return faces[i].getAttribute('data-bk-label');
      if (i === 0) return 'Cover';
      if (i === maxK) return 'Back cover';
      var l = faces[2 * i - 1], r = faces[2 * i];
      return (r && r.getAttribute('data-bk-spread')) || l.getAttribute('data-bk-label');
    }

    function countText() {
      if (mode === 'phone') {
        if (k === 0) return 'Cover';
        if (k === maxK) return 'Back cover';
        return 'Page ' + k + ' of ' + (maxK - 1);
      }
      if (k === 0) return 'Cover';
      if (k === maxK) return 'Back cover';
      return 'Pages ' + (2 * k - 1) + '\u2013' + (2 * k) + ' of ' + (faces.length - 2);
    }

    function buildDots() {
      dotsEl.innerHTML = '';
      for (var i = 0; i < stops(); i++) {
        var d = document.createElement('button');
        d.type = 'button';
        d.className = 'bk-dot';
        d.setAttribute('aria-label', 'Go to ' + stopLabel(i).replace(/&rsquo;/g, '\u2019'));
        (function (n) { d.addEventListener('click', function () { goTo(n); }); })(i);
        dotsEl.appendChild(d);
      }
    }

    function visibleFaces() {
      if (mode === 'phone') return [k];
      return [2 * k - 1, 2 * k];
    }

    function loadAround() {
      var lo, hi;
      if (mode === 'phone') { lo = k - 1; hi = k + 2; }
      else { lo = 2 * k - 3; hi = 2 * k + 4; }
      for (var i = Math.max(0, lo); i <= Math.min(faces.length - 1, hi); i++) {
        faces[i].querySelectorAll('img[data-src]').forEach(function (img) {
          if (img.getAttribute('data-srcset')) img.srcset = img.getAttribute('data-srcset');
          img.src = img.getAttribute('data-src');
          img.removeAttribute('data-src');
          img.removeAttribute('data-srcset');
        });
      }
    }

    function restack() {
      leaves.forEach(function (l, i) {
        if (l.classList.contains('is-turning')) return;
        l.style.zIndex = l.classList.contains('is-flipped') ? (i + 1) : (leaves.length - i + 1);
      });
    }

    function settle() {
      var vis = visibleFaces();
      faces.forEach(function (f, i) {
        var on = vis.indexOf(i) !== -1;
        f.toggleAttribute('inert', !on);
        if (on) f.removeAttribute('aria-hidden'); else f.setAttribute('aria-hidden', 'true');
      });
      restack();
      var state = mode === 'desk' ? (k === 0 ? 'closed-front' : (k === maxK ? 'closed-back' : 'open')) : (k === 0 ? 'closed-front' : (k === maxK ? 'end' : 'open'));
      root.setAttribute('data-bk-state', state);
      var flipped = k, remain = leaves.length - k;
      bookEl.style.setProperty('--ls', String(mode === 'desk' ? Math.max(0, flipped - 1) : 0));
      bookEl.style.setProperty('--rs', String(mode === 'desk' ? Math.max(0, remain - 1) : Math.max(0, maxK - k)));
      btnPrev.disabled = k === 0;
      btnNext.disabled = k === maxK;
      if (btnClose) {
        var shut = k === 0;
        btnClose.classList.toggle('is-hidden', shut);
        btnClose.setAttribute('aria-hidden', shut ? 'true' : 'false');
        btnClose.tabIndex = shut ? -1 : 0;
      }
      Array.prototype.forEach.call(dotsEl.children, function (d, i) {
        if (i === k) d.setAttribute('aria-current', 'page'); else d.removeAttribute('aria-current');
      });
      countEl.textContent = countText();
      root.style.setProperty('--prog', maxK ? (k / maxK).toFixed(3) : '0');
      if (announce) live.textContent = countText() + ': ' + stopLabel(k).replace(/&rsquo;/g, '\u2019');
      loadAround();
    }

    function turn(leaf, forward) {
      seq += 1;
      leaf.classList.remove('turn-fwd', 'turn-back');
      void leaf.offsetWidth;
      leaf.classList.add('is-turning', forward ? 'turn-fwd' : 'turn-back');
      leaf.style.zIndex = String(leaves.length + 10 + seq);
      leaf.classList.toggle('is-flipped', forward);
      if (reduced()) {
        root.classList.remove('bk-fade');
        void root.offsetWidth;
        root.classList.add('bk-fade');
      }
      window.clearTimeout(leaf._t);
      leaf._t = window.setTimeout(function () {
        leaf.classList.remove('is-turning', 'turn-fwd', 'turn-back');
        restack();
      }, reduced() ? 20 : DUR + 60);
    }

    // Idle sway on the closed cover (technique after a CSS 3D shelf book): freeze the
    // swaying angle before opening so the cover turns from where it is, then sway again
    // only once the book has settled closed.
    var idleTimer = null;
    function idleOff() {
      window.clearTimeout(idleTimer);
      if (!root.classList.contains('bk-idle')) return;
      var t = window.getComputedStyle(bookEl).transform;
      bookEl.style.transform = t === 'none' ? '' : t;
      root.classList.remove('bk-idle');
      void bookEl.offsetWidth;
      bookEl.style.transform = '';
    }
    function idleOnLater() {
      window.clearTimeout(idleTimer);
      if (reduced()) return;
      idleTimer = window.setTimeout(function () {
        if (k === 0) root.classList.add('bk-idle');
      }, DUR + 150);
    }

    function step(dir) {
      if (k === 0) idleOff();
      if (dir > 0 && k < maxK) { turn(leaves[k], true); k += 1; }
      else if (dir < 0 && k > 0) { k -= 1; turn(leaves[k], false); }
      else return false;
      announce = true;
      if (k === 0) idleOnLater();
      if (!turnedOnce) { turnedOnce = true; root.classList.remove('bk-hint'); root.classList.add('bk-turned'); }
      settle();
      return true;
    }

    var jumpTimer = null;
    function goTo(target, gap) {
      window.clearTimeout(jumpTimer);
      gap = gap == null ? 130 : gap;
      target = Math.max(0, Math.min(maxK, target));
      (function next() {
        if (k === target) return;
        step(target > k ? 1 : -1);
        jumpTimer = window.setTimeout(next, reduced() ? 0 : gap);
      })();
    }

    function faceIndexToStop(fi) {
      return mode === 'phone' ? fi : Math.ceil(fi / 2);
    }

    btnPrev.addEventListener('click', function () { step(-1); });
    btnNext.addEventListener('click', function () { step(1); });
    if (btnClose) btnClose.addEventListener('click', function () {
      if (k === 0) return;
      var hadFocus = document.activeElement === btnClose;
      goTo(0, mode === 'phone' ? 60 : 110);
      if (hadFocus) root.focus({ preventScroll: true });
    });

    root.addEventListener('click', function (e) {
      var go = e.target.closest('[data-bk-goto]');
      if (go) { goTo(faceIndexToStop(parseInt(go.getAttribute('data-bk-goto'), 10))); return; }
      if (e.target.closest('button, a, .bk-controls')) return;
      var pg = e.target.closest('.bk-leaf');
      if (!pg) return;
      if (mode === 'desk') {
        step(pg.classList.contains('is-flipped') ? -1 : 1);
      } else {
        var r = bookEl.getBoundingClientRect();
        step(e.clientX - r.left < r.width * 0.35 ? -1 : 1);
      }
    });

    root.addEventListener('keydown', function (e) {
      if (e.target.closest && e.target.closest('.mood-lightbox')) return;
      if (e.key === 'ArrowRight' || e.key === 'PageDown') { e.preventDefault(); step(1); }
      else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); step(-1); }
      else if (e.key === 'Home' && e.target === root) { e.preventDefault(); goTo(0); }
      else if (e.key === 'End' && e.target === root) { e.preventDefault(); goTo(maxK); }
    });

    var sx = 0, sy = 0, tracking = false;
    bookEl.addEventListener('touchstart', function (e) {
      if (!e.changedTouches[0]) return;
      tracking = true; sx = e.changedTouches[0].clientX; sy = e.changedTouches[0].clientY;
    }, { passive: true });
    bookEl.addEventListener('touchend', function (e) {
      if (!tracking || !e.changedTouches[0]) return;
      tracking = false;
      var dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.2) step(dx < 0 ? 1 : -1);
    }, { passive: true });

    if (wide && wide.addEventListener) wide.addEventListener('change', function () { announce = false; idleOff(); build(); if (k === 0) idleOnLater(); });
    ['bk-3d-fore', 'bk-3d-bottom', 'bk-3d-back'].forEach(function (c) {
      var f = document.createElement('span');
      f.className = 'bk-3d ' + c;
      f.setAttribute('aria-hidden', 'true');
      bookEl.appendChild(f);
    });
    build();
    if (!reduced()) root.classList.add('bk-idle');
    if (reduce && reduce.addEventListener) reduce.addEventListener('change', function () { if (reduced()) idleOff(); else if (k === 0) root.classList.add('bk-idle'); });

    // first view: a gentle corner peel says "turn me"
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting || hinted) return;
          hinted = true;
          io.disconnect();
          if (!turnedOnce && !reduced()) window.setTimeout(function () { if (!turnedOnce) root.classList.add('bk-hint'); }, 700);
        });
      }, { threshold: 0.55 });
      io.observe(bookEl);
    }
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

  book();
  moodLightbox();
})();
