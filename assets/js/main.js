// Inner-page heroes fade themselves in (inline loader); this only guarantees they are never left hidden.
window.addEventListener('load', function () {
  document.querySelectorAll('.page-hero img.hero-bg').forEach(function (img) { img.classList.add('is-loaded'); });
});

// Reveal only after the image has decoded; timeout is a safety net for stalled loads.
function revealLoadedImage(img) {
  function show() { img.classList.add('is-in'); }
  if (img.tagName !== 'IMG' || img.closest('.page-hero')) { show(); return; }
  if (img.complete) {
    if (img.decode && img.naturalWidth) img.decode().then(show, show);
    else show();
  } else {
    img.addEventListener('load', show, { once: true });
    img.addEventListener('error', show, { once: true });
    window.setTimeout(show, 4500);
  }
}

(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav-mobile');
  var lastScroll = 0;

  function menuFocusables() {
    var list = [];
    if (toggle) list.push(toggle);
    if (nav) nav.querySelectorAll('a').forEach(function (a) { list.push(a); });
    return list;
  }

  function setOpen(open) {
    open = !!open;
    document.body.classList.toggle('menu-open', open);
    if (toggle) {
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }
    if (nav) {
      nav.setAttribute('aria-hidden', open ? 'false' : 'true');
      if ('inert' in nav) nav.inert = !open;
    }
    if (open) {
      lastScroll = window.scrollY || 0;
      document.body.style.position = 'fixed';
      document.body.style.top = '-' + lastScroll + 'px';
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
      var first = nav && nav.querySelector('a');
      if (first) window.setTimeout(function () { first.focus(); }, 50);
    } else {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      window.scrollTo(0, lastScroll);
      if (toggle && document.activeElement && nav && nav.contains(document.activeElement)) {
        toggle.focus();
      }
    }
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      setOpen(!document.body.classList.contains('menu-open'));
    });
  }
  if (nav) {
    nav.addEventListener('click', function (e) {
      if (e.target === nav) setOpen(false);
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { setOpen(false); });
    });
  }
  document.addEventListener('keydown', function (e) {
    if (!document.body.classList.contains('menu-open')) return;
    if (e.key === 'Tab') {
      var items = menuFocusables();
      if (!items.length) return;
      var i = items.indexOf(document.activeElement);
      if (e.shiftKey) {
        if (i <= 0) { e.preventDefault(); items[items.length - 1].focus(); }
      } else if (i === items.length - 1) {
        e.preventDefault();
        items[0].focus();
      }
    }
  });

  // FormSubmit: point the thank-you redirect at this host (works on GitHub Pages and the live domain)
  var form = document.querySelector('form#enquiry-form, form[action*="formsubmit.co"]');
  if (form) {
    var next = form.querySelector('input[name="_next"]');
    if (next) {
      var base = window.location.href.replace(/[#?].*$/, '').replace(/[^/]+$/, '');
      next.value = base + 'thank-you.html';
    }
  }

  // Lightbox for project / portfolio photographs
  var lbImgs = Array.prototype.slice.call(
    document.querySelectorAll('.gallery-2x2 img, .gallery-wide img, .project-hero img.hero-bg')
  );
  if (lbImgs.length) {
    var lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.setAttribute('hidden', '');
    lb.setAttribute('role', 'dialog');
    lb.setAttribute('aria-modal', 'true');
    lb.setAttribute('aria-label', 'Photograph');
    lb.innerHTML =
      '<button type="button" class="lightbox-close" aria-label="Close">&times;</button>' +
      '<button type="button" class="lightbox-prev" aria-label="Previous photograph">&#10094;</button>' +
      '<figure class="lightbox-stage"><img alt=""><figcaption class="lightbox-caption"></figcaption></figure>' +
      '<button type="button" class="lightbox-next" aria-label="Next photograph">&#10095;</button>';
    document.body.appendChild(lb);
    var lbImg = lb.querySelector('img');
    var lbCap = lb.querySelector('.lightbox-caption');
    var btnClose = lb.querySelector('.lightbox-close');
    var btnPrev = lb.querySelector('.lightbox-prev');
    var btnNext = lb.querySelector('.lightbox-next');
    var index = 0;
    var lastFocus = null;

    lbImgs.forEach(function (img, i) {
      img.classList.add('is-zoomable');
      img.setAttribute('tabindex', '0');
      img.setAttribute('role', 'button');
      if (!img.getAttribute('aria-label')) {
        img.setAttribute('aria-label', (img.getAttribute('alt') || 'Photograph') + ' (open full screen)');
      }
      function openFrom() { open(i); }
      img.addEventListener('click', openFrom);
      img.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openFrom(); }
      });
    });

    function show(i) {
      index = (i + lbImgs.length) % lbImgs.length;
      var srcImg = lbImgs[index];
      lbImg.src = srcImg.currentSrc || srcImg.src;
      var alt = srcImg.getAttribute('alt') || '';
      lbImg.alt = alt;
      lbCap.textContent = alt;
      lbCap.hidden = !alt;
      btnPrev.style.visibility = lbImgs.length > 1 ? '' : 'hidden';
      btnNext.style.visibility = lbImgs.length > 1 ? '' : 'hidden';
    }
    function open(i) {
      lastFocus = document.activeElement;
      show(i);
      lb.removeAttribute('hidden');
      document.body.classList.add('lightbox-open');
      btnClose.focus();
    }
    function close() {
      lb.setAttribute('hidden', '');
      document.body.classList.remove('lightbox-open');
      lbImg.removeAttribute('src');
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }
    btnClose.addEventListener('click', close);
    btnPrev.addEventListener('click', function () { show(index - 1); });
    btnNext.addEventListener('click', function () { show(index + 1); });
    lb.addEventListener('click', function (e) {
      if (e.target === lb) close();
    });
    document.addEventListener('keydown', function (e) {
      if (lb.hasAttribute('hidden')) {
        if (e.key === 'Escape') setOpen(false);
        return;
      }
      if (e.key === 'Escape') { e.preventDefault(); close(); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); show(index - 1); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); show(index + 1); }
    });
    // swipe
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
  } else {
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setOpen(false);
    });
  }
})();

(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.documentElement.classList.add('has-motion');

  var heroBits = document.querySelectorAll('.home-hero .ar-mark, .home-hero h1, .home-hero .hero-tag, .home-hero .btn');
  heroBits.forEach(function (el) {
    el.addEventListener('animationend', function () {
      el.classList.add('hero-anim-done');
    });
  });

  var textSel = [
    'main h1', 'main h2', 'main h3',
    '.display', '.eyebrow', '.hero-sub', '.hero-lead', '.hero-tag',
    '.prose p', '.about-copy p', '.about-copy h3', '.about-grid p', '.about-grid h2',
    '.section-services h2', '.section-services .lede', '.section-services li', '.services-copy p',
    '.project-intro .display', '.project-intro .body', '.project-intro .body p',
    '.ig-intro h2', '.ig-intro p',
    '.contact-card', '.contact-form-card h2', '.contact-form-card .help',
    '.form-field', '.book-card', '.footer-col', '.copyright',
    '.stage h3', '.stage p', '.split .display',
    '.page-hero .hero-content h1', '.page-hero .hero-content h2',
    '.page-hero .hero-content .hero-sub', '.page-hero .hero-content .hero-lead',
    '.page-hero .hero-content .btn', '.cta-banner .inner',
    '.quote-figure', '.section-cta .eyebrow', '.section-cta h2',
    '.section-process h2', '.section-process .lede', '.process-step',
    '.where-inner > *', '.faq-head > *', '.faq-item',
    'a.btn', 'button.btn'
  ].join(',');

  var skip = function (el) {
    if (!el || el.closest('.site-header, .lightbox, .honeypot, .site-footer')) return true;
    if (el.classList.contains('about-signature')) return true;
    if (el.closest('.home-hero')) return true; // load animation handles these
    return false;
  };

  var texts = Array.prototype.filter.call(document.querySelectorAll(textSel), function (el) {
    return !skip(el);
  });

  // Stagger siblings that share a parent
  var groups = new Map();
  texts.forEach(function (el) {
    el.classList.add('reveal');
    var parent = el.parentElement;
    if (!groups.has(parent)) groups.set(parent, []);
    groups.get(parent).push(el);
  });
  groups.forEach(function (els) {
    els.forEach(function (el, i) {
      el.style.transitionDelay = Math.min(i * 90, 360) + 'ms';
    });
  });

  var imgSel = [
    '.project-card img',
    '.folio-grid img',
    '.gallery-2x2 img',
    '.gallery-wide img',
    '.stage img',
    '.pair-photos img',
    '.about-visual img',
    '.ig-grid img',
    '.book-card img',
    '.section-services img', '.about-portrait img', 'img.about-portrait', '.notfound-photo img'
  ].join(',');

  var images = document.querySelectorAll(imgSel);
  images.forEach(function (img) {
    if (img.closest('.home-hero, .site-header, .lightbox, .footer-brand, .logo')) return;
    img.classList.add('reveal-img');
  });

  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal, .reveal-img').forEach(function (el) {
      el.classList.add('is-in');
    });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      revealLoadedImage(entry.target);
      // release will-change after the transition
      window.setTimeout(function () { entry.target.style.willChange = 'auto'; }, 900);
      io.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  document.querySelectorAll('.reveal, .reveal-img').forEach(function (el) { io.observe(el); });
})();

(function () {
  var grid = document.querySelector('[data-instagram-feed], .section-instagram .ig-grid');
  if (!grid) return;
  var FEED = 'https://feeds.behold.so/zqerimg2uGGnb2QIHjU0';
  var TILES = 6;

  function altFrom(post) {
    var cap = (post.prunedCaption || post.caption || '').replace(/\s+/g, ' ').trim();
    if (!cap) return 'Amanda Ruth Interiors on Instagram';
    if (cap.length > 140) cap = cap.slice(0, 137) + '...';
    return cap;
  }

  function imageUrl(post) {
    // Behold's resized copies do not expire, so prefer them (videos too)
    var sizes = post.sizes || {};
    if (sizes.medium && sizes.medium.mediaUrl) return sizes.medium.mediaUrl;
    if (sizes.large && sizes.large.mediaUrl) return sizes.large.mediaUrl;
    return post.thumbnailUrl || post.mediaUrl;
  }

  function applyMotion(root) {
    if (!document.documentElement.classList.contains('has-motion')) return;
    if (!('IntersectionObserver' in window)) {
      root.querySelectorAll('img').forEach(function (img) { img.classList.add('is-in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        revealLoadedImage(entry.target);
        io.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    root.querySelectorAll('img').forEach(function (img, i) {
      img.classList.add('reveal-img');
      img.style.transitionDelay = Math.min(i * 90, 360) + 'ms';
      io.observe(img);
    });
  }

  fetch(FEED, { mode: 'cors' })
    .then(function (res) {
      if (!res.ok) throw new Error('feed ' + res.status);
      return res.json();
    })
    .then(function (data) {
      var posts = ((data && data.posts) || []).slice(0, TILES);
      if (!posts.length) return;
      var fallbacks = Array.prototype.slice.call(grid.querySelectorAll('img')).map(function (i) { return i.getAttribute('src'); });
      var frag = document.createDocumentFragment();
      posts.forEach(function (post, n) {
        var src = imageUrl(post);
        var href = post.permalink;
        if (!src || !href) return;
        var a = document.createElement('a');
        a.href = href;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        var img = document.createElement('img');
        img.src = src;
        img.alt = altFrom(post);
        img.loading = 'eager';
        img.decoding = 'async';
        var spare = fallbacks[n % (fallbacks.length || 1)];
        img.addEventListener('error', function () {
          if (spare && img.getAttribute('src') !== spare) img.src = spare;
        });
        a.appendChild(img);
        frag.appendChild(a);
      });
      // Keep the row full: top up with our own photos if the feed is short
      var k = 0;
      while (frag.childNodes.length < TILES && k < fallbacks.length) {
        var fa = document.createElement('a');
        fa.href = 'https://www.instagram.com/amandaruthinteriors';
        fa.target = '_blank';
        fa.rel = 'noopener noreferrer';
        var fi = document.createElement('img');
        fi.src = fallbacks[fallbacks.length - 1 - k];
        fi.alt = 'Amanda Ruth Interiors on Instagram';
        fa.appendChild(fi);
        frag.appendChild(fa);
        k++;
      }
      if (!frag.childNodes.length) return;
      grid.innerHTML = '';
      grid.appendChild(frag);
      applyMotion(grid);
    })
    .catch(function () {
      /* Keep the static project-photo grid */
    });
})();

(function () {
  var root = document.querySelector('.home-hero .hero-slides');
  if (!root) return;
  var slides = Array.prototype.slice.call(root.querySelectorAll('.hero-slide'));
  if (slides.length < 2) return;

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var HOLD = 6000;
  var FADE = 1500;
  var index = 0;
  var timer = null;
  var fading = false;
  var loaded = false;

  function loadRest() {
    if (loaded) return;
    loaded = true;
    slides.forEach(function (slide, i) {
      if (i === 0) return;
      if (slide.tagName === 'IMG' && slide.dataset.src && !slide.getAttribute('src')) {
        slide.src = slide.dataset.src;
      }
      slide.querySelectorAll('img[data-src]').forEach(function (img) {
        if (!img.getAttribute('src')) img.src = img.dataset.src;
      });
    });
  }

  if (reduce) return; // bathroom only; do not fetch the rest

  function show(next) {
    if (fading || next === index) return;
    fading = true;
    var current = slides[index];
    var incoming = slides[next];
    incoming.classList.add('is-active');
    current.classList.add('is-leaving');
    current.classList.remove('is-active');
    window.setTimeout(function () {
      current.classList.remove('is-leaving');
      index = next;
      fading = false;
      schedule();
    }, FADE);
  }

  function schedule() {
    clearTimeout(timer);
    if (document.hidden) return;
    timer = window.setTimeout(function () {
      show((index + 1) % slides.length);
    }, HOLD);
  }

  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      clearTimeout(timer);
    } else {
      schedule();
    }
  });

  function start() {
    loadRest();
    schedule();
  }
  if (document.readyState === 'complete') start();
  else window.addEventListener('load', start);
})();

(function () {
  var ticking = false;
  function update() {
    ticking = false;
    document.body.classList.toggle('header-compact', window.scrollY > 80);
  }
  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(update);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  update();
})();

/* Hero: typewriter tagline, then a gently changing word */
(function () {
  var tag = document.querySelector('.home-hero [data-typewriter]');
  var rot = document.querySelector('.home-hero [data-rotator]');
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var START = 1050, TYPE = 34, HOLD = 2500, DEL = 55, RETYPE = 95, GAP = 380;

  function startRotator() {
    if (!rot) return;
    var words = rot.getAttribute('data-rotator').split(',');
    var slot = rot.querySelector('.rot-slot');
    var word = rot.querySelector('.rot-word');
    if (!slot || !word || words.length < 2) return;
    // Reserve the widest word so the line never shifts
    var widest = 0;
    words.forEach(function (w) {
      word.textContent = w;
      widest = Math.max(widest, word.getBoundingClientRect().width);
    });
    slot.style.minWidth = Math.ceil(widest + 4) + 'px';
    word.textContent = words[0];
    var cursor = document.createElement('span');
    cursor.className = 'rot-cursor';
    slot.appendChild(cursor);
    rot.classList.add('is-on');

    var i = 0;
    function del() {
      var t = word.textContent;
      if (!t.length) { i = (i + 1) % words.length; return setTimeout(type, GAP); }
      word.textContent = t.slice(0, -1);
      setTimeout(del, DEL);
    }
    function type() {
      var target = words[i], t = word.textContent;
      if (t.length === target.length) return setTimeout(del, HOLD);
      word.textContent = target.slice(0, t.length + 1);
      setTimeout(type, RETYPE);
    }
    setTimeout(del, HOLD);
  }

  function prepTagline() {
    if (!tag) return null;
    var text = tag.textContent.replace(/\s+/g, ' ').trim();
    var sr = document.createElement('span');
    sr.className = 'visually-hidden';
    sr.textContent = text;
    var vis = document.createElement('span');
    vis.setAttribute('aria-hidden', 'true');
    var chars = [];
    text.split('').forEach(function (ch) {
      var s = document.createElement('span');
      s.className = 'tw-c';
      s.textContent = ch;
      vis.appendChild(s);
      chars.push(s);
    });
    tag.textContent = '';
    tag.appendChild(sr);
    tag.appendChild(vis);
    tag.classList.add('tw');
    return chars;
  }

  if (rot) rot.classList.add('rot-js');
  var chars = prepTagline();
  var ready = (document.fonts && document.fonts.ready) ? document.fonts.ready : Promise.resolve();
  ready.then(function () {
    if (!chars) { setTimeout(startRotator, START); return; }
    var cursor = document.createElement('span');
    cursor.className = 'tw-cursor';
    var n = 0;
    function step() {
      if (n < chars.length) {
        chars[n].classList.add('on');
        chars[n].after(cursor);
        n++;
        setTimeout(step, TYPE);
      } else {
        cursor.classList.add('is-done');
        setTimeout(startRotator, 500);
      }
    }
    setTimeout(function () { chars[0].before(cursor); step(); }, START);
  });
})();

/* Page fades: native cross-document View Transitions where available;
   a short exit fade elsewhere, without intercepting browser behaviours. */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  var nativeTransitions = 'onpagereveal' in window;
  var leaving = false, navTimer, recoveryTimer;

  function resetPage() {
    clearTimeout(navTimer);
    clearTimeout(recoveryTimer);
    leaving = false;
    document.body.classList.remove('page-leaving');
  }
  window.addEventListener('pageshow', function (e) {
    resetPage();
    if (e.persisted) {
      // A restored page must not keep an unfinished reveal/fade from before navigation.
      document.querySelectorAll('.reveal, .reveal-img').forEach(function (el) { el.classList.add('is-in'); });
    }
  });

  document.addEventListener('click', function (e) {
    if (reduce.matches || nativeTransitions || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a || a.hasAttribute('download') || a.hasAttribute('ping') || (a.target && a.target.toLowerCase() !== '_self') || a.closest('.lightbox') || a.dataset.noTransition !== undefined) return;
    var url;
    try { url = new URL(a.href, location.href); } catch (_) { return; }
    if (url.origin !== location.origin || !/^https?:$/.test(url.protocol)) return;
    // Leave in-page anchors, hash links, same-page URLs and non-page files alone.
    if (url.hash || (url.pathname === location.pathname && url.search === location.search)) return;
    if (!/\/$|\.html?$/i.test(url.pathname)) return;
    if (leaving) return;
    e.preventDefault();
    leaving = true;
    document.body.classList.add('page-leaving');
    navTimer = setTimeout(function () { window.location.assign(url.href); }, 280);
    // Slow/failed navigations must never strand the visitor on a blank page.
    recoveryTimer = setTimeout(resetPage, 1800);
  });
})();

/* Home hero: ambient candle loop over a matching still.
   Nothing is downloaded for reduced motion or Save-Data; the still stays. */
(function () {
  var video = document.querySelector('.home-hero .hero-video');
  if (!video) return;
  var conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (conn && (conn.saveData || /(^|-)2g$/.test(conn.effectiveType || ''))) return;

  var mobileMq = window.matchMedia(video.getAttribute('data-mobile-media'));
  var slide = video.closest('.hero-slide');
  var heroVisible = true;

  function base() {
    return video.getAttribute(mobileMq.matches ? 'data-src-mobile' : 'data-src-desktop');
  }
  function load() {
    var b = base();
    if (video.dataset.loaded === b) return;
    video.dataset.loaded = b;
    video.classList.remove('is-playing');
    video.innerHTML = '';
    var q = video.getAttribute('data-v') ? '?v=' + video.getAttribute('data-v') : '';
    var canWebm = video.canPlayType('video/webm; codecs="vp9"');
    if (canWebm) {
      var w = document.createElement('source');
      w.src = b + '.webm' + q; w.type = 'video/webm';
      video.appendChild(w);
    }
    var m = document.createElement('source');
    m.src = b + '.mp4' + q; m.type = 'video/mp4';
    video.appendChild(m);
    var poster = mobileMq.matches ? 'assets/images/hero-candle-poster-mobile.webp' + q : 'assets/images/hero-candle-poster.webp' + q;
    video.setAttribute('poster', poster);
    video.muted = true;
    video.preload = 'metadata';
    video.load();
    sync();
  }
  function shouldPlay() {
    return heroVisible && !document.hidden && (!slide || slide.classList.contains('is-active') || slide.classList.contains('is-leaving'));
  }
  function sync() {
    if (shouldPlay()) {
      var pr = video.play();
      if (pr && pr.catch) pr.catch(function () { /* autoplay refused: the still remains */ });
    } else if (!video.paused) {
      video.pause();
    }
  }
  video.addEventListener('playing', function () { video.classList.add('is-playing'); });

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      heroVisible = entries[0].isIntersecting;
      sync();
    }, { threshold: 0.01 }).observe(document.querySelector('.home-hero'));
  }
  document.addEventListener('visibilitychange', sync);
  if (slide && 'MutationObserver' in window) {
    new MutationObserver(sync).observe(slide, { attributes: true, attributeFilter: ['class'] });
  }
  if (mobileMq.addEventListener) mobileMq.addEventListener('change', load);

  // Let the still paint first, then fetch the loop
  if (document.readyState === 'complete') load();
  else window.addEventListener('load', load);
})();
