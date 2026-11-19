/* Home: From Design to Reality crossfade, and Mood Boards lightbox.
   Reduced motion: no auto-crossfade; both images stay visible on small screens. */
(function () {
  var reduce = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;

  function reduced() {
    return !!(reduce && reduce.matches);
  }

  function designReality() {
    var section = document.querySelector('.section-design');
    var cards = Array.prototype.slice.call(document.querySelectorAll('[data-reality-card]'));
    if (!section || !cards.length) return;

    section.classList.add('is-ready');

    cards.forEach(function (card) {
      var buttons = Array.prototype.slice.call(card.querySelectorAll('[data-reality-switch] button'));
      var pair = card.querySelector('.reality-pair');
      var userTouched = false;
      var revealed = false;

      function showFinished(on) {
        card.classList.toggle('is-finished', on);
        buttons.forEach(function (btn, i) {
          var pressed = (i === 1) === on;
          btn.setAttribute('aria-pressed', pressed ? 'true' : 'false');
        });
      }

      showFinished(false);

      buttons.forEach(function (btn, i) {
        btn.addEventListener('click', function () {
          userTouched = true;
          showFinished(i === 1);
        });
      });

      if (pair) {
        pair.addEventListener('click', function (e) {
          if (e.target.closest('[data-reality-switch]')) return;
          if (window.matchMedia && !window.matchMedia('(max-width: 800px)').matches) return;
          if (reduced()) return;
          userTouched = true;
          showFinished(!card.classList.contains('is-finished'));
        });
      }

      if (reduced() || !('IntersectionObserver' in window)) return;

      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting || revealed || userTouched) return;
          revealed = true;
          io.unobserve(card);
          window.setTimeout(function () {
            if (!userTouched && !reduced()) showFinished(true);
          }, 650);
        });
      }, { threshold: 0.4, rootMargin: '0px 0px -8% 0px' });
      io.observe(card);
    });
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

    function item(i) {
      return triggers[(i + triggers.length) % triggers.length];
    }

    function show(i) {
      index = (i + triggers.length) % triggers.length;
      var t = item(index);
      var img = t.querySelector('img');
      lbImg.src = t.getAttribute('data-full') || (img && (img.currentSrc || img.src)) || '';
      var caption = t.getAttribute('data-caption') || (img && img.getAttribute('alt')) || '';
      lbImg.alt = (img && img.getAttribute('alt')) || caption;
      lbCap.textContent = caption;
      lbCap.hidden = !caption;
    }

    function open(i) {
      lastFocus = document.activeElement;
      show(i);
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

    triggers.forEach(function (t, i) {
      t.addEventListener('click', function () { open(i); });
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
        var first = focusables[0];
        var last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        } else if (focusables.indexOf(document.activeElement) === -1) {
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
  moodLightbox();
})();
