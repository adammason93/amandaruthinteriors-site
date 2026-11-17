(function () {
  var toggle = document.querySelector('.nav-toggle');
  function setOpen(open) {
    document.body.classList.toggle('menu-open', open);
    if (toggle) {
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }
  }
  if (toggle) {
    toggle.addEventListener('click', function () {
      setOpen(!document.body.classList.contains('menu-open'));
    });
  }
  document.querySelectorAll('.nav-mobile a').forEach(function (a) {
    a.addEventListener('click', function () { setOpen(false); });
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
    '.section-services h2', '.section-services .lede', '.section-services li',
    '.project-intro .display', '.project-intro .body', '.project-intro .body p',
    '.ig-intro h2', '.ig-intro p',
    '.contact-card', '.contact-form-card h2', '.contact-form-card .help',
    '.form-field', '.book-card', '.footer-col', '.copyright',
    '.stage h3', '.stage p', '.split .display',
    '.page-hero .hero-content h1', '.page-hero .hero-content h2',
    '.page-hero .hero-content .hero-sub', '.page-hero .hero-content .hero-lead',
    '.page-hero .hero-content .btn', '.cta-banner .inner',
    'a.btn', 'button.btn'
  ].join(',');

  var skip = function (el) {
    if (!el || el.closest('.site-header, .lightbox, .honeypot')) return true;
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
    '.page-hero:not(.home-hero) img.hero-bg',
    '.book-card img',
    '.section-services img'
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
      entry.target.classList.add('is-in');
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

  function altFrom(post) {
    var cap = (post.prunedCaption || post.caption || '').replace(/\s+/g, ' ').trim();
    if (!cap) return 'Amanda Ruth Interiors on Instagram';
    if (cap.length > 140) cap = cap.slice(0, 137) + '...';
    return cap;
  }

  function imageUrl(post) {
    var type = (post.mediaType || '').toUpperCase();
    if (type.indexOf('VIDEO') !== -1 && post.thumbnailUrl) return post.thumbnailUrl;
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
        entry.target.classList.add('is-in');
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
      var posts = (data && data.posts) || [];
      if (!posts.length) return;
      var frag = document.createDocumentFragment();
      posts.forEach(function (post) {
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
        a.appendChild(img);
        frag.appendChild(a);
      });
      if (!frag.childNodes.length) return;
      grid.innerHTML = '';
      grid.appendChild(frag);
      applyMotion(grid);
    })
    .catch(function () {
      /* Keep the static project-photo grid */
    });
})();
