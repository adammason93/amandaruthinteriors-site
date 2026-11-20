/* Design Journeys — preview only. Loaded solely by portfolio-preview.html.
   To add another brochure: put WebP files in assets/images/journeys/<id>/
   (name-1200.webp and name-1800.webp, plus cover-hero.webp) and push a
   new object onto JOURNEYS below. */
(function () {
  var ROOT = "assets/images/journeys/";

  var JOURNEYS = [
    {
      id: "alwoodley-living-room",
      title: "Living Room",
      place: "Alwoodley, West Yorkshire",
      tag: "Concept to completion",
      projectUrl: "project-living-room-alwoodley.html",
      folder: "alwoodley-living-room",
      pages: [
        { file: "concept", label: "Design concept", alt: "Mood board for a living room in Alwoodley" },
        { file: "plan", label: "Floor plan", alt: "Furniture floor plan of the Alwoodley living room" },
        { file: "ffe", label: "Furniture and finishes", alt: "Furniture and finishes proposal for the Alwoodley living room" },
        { file: "elevations-2d", label: "Elevations", alt: "Two-dimensional elevations of the Alwoodley living room" },
        { file: "visuals-3d", label: "Three-dimensional visuals", alt: "Three-dimensional visuals of the Alwoodley living room" }
      ]
    },
    {
      id: "alwoodley-master-bedroom",
      title: "Master Bedroom",
      place: "Alwoodley, West Yorkshire",
      tag: "Concept to completion",
      projectUrl: "project-master-bedroom-alwoodley.html",
      folder: "alwoodley-master-bedroom",
      pages: [
        { file: "concept", label: "Design concept", alt: "Mood board for a master bedroom in Alwoodley" },
        { file: "plan", label: "Floor plan", alt: "Furniture floor plan of the Alwoodley master bedroom" },
        { file: "headboard-elevation", label: "Headboard elevation", alt: "Technical elevation of the headboard wall" },
        { file: "ffe", label: "Furniture and finishes", alt: "Furniture and finishes proposal for the Alwoodley master bedroom" },
        { file: "elevations-2d", label: "Elevations", alt: "Two-dimensional elevations of the Alwoodley master bedroom" },
        { file: "visuals-3d", label: "Three-dimensional visuals", alt: "Three-dimensional visuals of the Alwoodley master bedroom" },
        { file: "finished-1", label: "The finished room", alt: "The finished master bedroom in Alwoodley" },
        { file: "finished-2", label: "The finished room", alt: "Details of the finished Alwoodley master bedroom" },
        { file: "finished-3", label: "The finished room", alt: "The dressing table in the finished Alwoodley master bedroom" },
        { file: "finished-4", label: "The finished room", alt: "Close details from the finished Alwoodley master bedroom" }
      ]
    },
    {
      id: "ripponden-ensuite",
      title: "Master En-suite",
      place: "Ripponden, West Yorkshire",
      tag: "Concept to completion",
      projectUrl: "project-master-ensuite.html",
      folder: "ripponden-ensuite",
      pages: [
        { file: "concept", label: "Design concept", alt: "Mood board for a master en-suite in Ripponden" },
        { file: "plan-samples", label: "Plans and sample board", alt: "Elevations and a sample board for the Ripponden en-suite" },
        { file: "elevations-2d", label: "Elevations", alt: "Two-dimensional elevations of the Ripponden en-suite" },
        { file: "visuals-3d", label: "Three-dimensional visuals", alt: "Three-dimensional visuals of the Ripponden en-suite" },
        { file: "finished-1", label: "The finished room", alt: "The finished master en-suite in Ripponden" },
        { file: "finished-2", label: "The finished room", alt: "Details of the finished Ripponden en-suite" }
      ]
    },
    {
      id: "ripponden-master-bedroom",
      title: "Master Bedroom",
      place: "Ripponden, West Yorkshire",
      tag: "Concept to completion",
      projectUrl: "project-master-bedroom.html",
      folder: "ripponden-master-bedroom",
      pages: [
        { file: "concept", label: "Design concept", alt: "Mood board for a master bedroom in Ripponden" },
        { file: "plan-samples", label: "Plans and sample board", alt: "Floor plan and a sample board for the Ripponden master bedroom" },
        { file: "ffe", label: "Furniture and finishes", alt: "Furniture and finishes proposal for the Ripponden master bedroom" },
        { file: "elevations-2d", label: "Elevations", alt: "Two-dimensional elevations of the Ripponden master bedroom" },
        { file: "finished-1", label: "The finished room", alt: "The finished master bedroom in Ripponden" },
        { file: "finished-2", label: "The finished room", alt: "The dressing table in the finished Ripponden master bedroom" },
        { file: "finished-3", label: "The finished room", alt: "Details of the finished Ripponden master bedroom" }
      ]
    },
    {
      id: "kitchen-dining",
      title: "Kitchen & Dining",
      place: "",
      tag: "Design proposal",
      projectUrl: "",
      folder: "kitchen-dining",
      pages: [
        { file: "concept", label: "Design concept", alt: "Mood board for a kitchen and dining proposal" },
        { file: "elevations-scale", label: "To-scale elevations", alt: "To-scale elevations for the kitchen and dining proposal" },
        { file: "ffe", label: "Furniture and finishes", alt: "Furniture and finishes proposal for the kitchen and dining" },
        { file: "elevations-2d", label: "Elevations", alt: "Two-dimensional elevations of the kitchen and dining proposal" },
        { file: "visuals-3d-kitchen", label: "Three-dimensional visuals", alt: "Three-dimensional visuals of the proposed kitchen and dining space" },
        { file: "visuals-3d-dining", label: "Three-dimensional visuals", alt: "Three-dimensional visuals of the proposed dining area" }
      ]
    },
    {
      id: "living-room-proposal",
      title: "Living Room",
      place: "",
      tag: "Design proposal",
      projectUrl: "",
      folder: "living-room-proposal",
      pages: [
        { file: "concept", label: "Design concept", alt: "Mood board for a living room proposal" },
        { file: "samples", label: "Sample board", alt: "A sample board of fabrics and finishes for the living room proposal" },
        { file: "ffe", label: "Furniture and finishes", alt: "Furniture and finishes proposal for the living room" },
        { file: "elevations-2d", label: "Elevations", alt: "Two-dimensional elevations of the living room proposal" },
        { file: "visuals-3d", label: "Three-dimensional visuals", alt: "Three-dimensional visuals of the proposed living room" }
      ]
    }
  ];

  var grid = document.getElementById("jn-grid");
  var overlay = document.getElementById("jn-overlay");
  if (!grid || !overlay) return;

  var stage = overlay.querySelector("[data-jn-stage]");
  var countEl = overlay.querySelector("[data-jn-count]");
  var dotsEl = overlay.querySelector("[data-jn-dots]");
  var titleEl = overlay.querySelector("[data-jn-title]");
  var btnPrev = overlay.querySelector("[data-jn-prev]");
  var btnNext = overlay.querySelector("[data-jn-next]");
  var btnClose = overlay.querySelector("[data-jn-close]");
  var live = overlay.querySelector("[data-jn-live]");

  var current = null;
  var index = 0; // 0 = our cover
  var pages = [];
  var lastFocus = null;
  var touchX = 0;

  function srcset(folder, file) {
    var base = ROOT + folder + "/" + file;
    return base + "-1200.webp 1200w, " + base + "-1800.webp 1800w";
  }
  function src(folder, file) {
    return ROOT + folder + "/" + file + "-1200.webp";
  }

  function buildGrid() {
    grid.innerHTML = "";
    JOURNEYS.forEach(function (j, i) {
      var card = document.createElement("article");
      card.className = "jn-card";

      var hit = document.createElement("button");
      hit.type = "button";
      hit.className = "jn-card-hit";
      hit.setAttribute("data-jn-open", String(i));
      hit.setAttribute("aria-label", "Open the " + j.title + (j.place ? " in " + j.place : "") + " brochure");

      var cover = document.createElement("span");
      cover.className = "jn-card-cover";
      var img = document.createElement("img");
      img.src = ROOT + j.folder + "/cover-hero.webp";
      img.alt = "";
      img.width = 900;
      img.height = 1200;
      img.loading = i > 2 ? "lazy" : "eager";
      img.decoding = "async";
      var scrim = document.createElement("span");
      scrim.className = "jn-card-scrim";
      scrim.setAttribute("aria-hidden", "true");
      var logo = document.createElement("img");
      logo.className = "jn-card-logo";
      logo.src = "assets/images/brand/ar-cream-240.webp";
      logo.srcset = "assets/images/brand/ar-cream-240.webp 240w, assets/images/brand/ar-cream-480.webp 480w";
      logo.sizes = "56px";
      logo.alt = "";
      logo.width = 240;
      logo.height = 200;
      var meta = document.createElement("span");
      meta.className = "jn-card-meta";
      meta.innerHTML = '<span class="jn-tag">' + escapeHtml(j.tag) + "</span>" +
        "<span class=\"jn-card-title\">" + escapeHtml(j.title) + "</span>" +
        (j.place ? '<span class="jn-card-place">' + escapeHtml(j.place) + "</span>" : "");
      cover.appendChild(img);
      cover.appendChild(scrim);
      cover.appendChild(logo);
      cover.appendChild(meta);
      hit.appendChild(cover);

      var foot = document.createElement("div");
      foot.className = "jn-card-foot";
      var openBtn = document.createElement("button");
      openBtn.type = "button";
      openBtn.className = "jn-open-btn jn-open-label";
      openBtn.textContent = "Open";
      openBtn.setAttribute("aria-label", "Open the " + j.title + (j.place ? " in " + j.place : "") + " brochure");
      openBtn.addEventListener("click", function () { openJourney(i); });
      foot.appendChild(openBtn);
      if (j.projectUrl) {
        var a = document.createElement("a");
        a.className = "jn-project-link";
        a.href = j.projectUrl;
        a.textContent = "View the finished room";
        foot.appendChild(a);
      }
      hit.addEventListener("click", function () { openJourney(i); });
      card.appendChild(hit);
      card.appendChild(foot);
      grid.appendChild(card);
    });
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c];
    });
  }

  function buildPages(j) {
    var list = [{ type: "cover" }];
    j.pages.forEach(function (p) { list.push({ type: "image", page: p }); });
    list.push({ type: "back" });
    return list;
  }

  function pageLabel(n) {
    if (n === 0) return "Cover";
    if (n === pages.length - 1) return "Back cover";
    return pages[n].page.label;
  }

  function renderLeaf(n) {
    var leaf = document.createElement("div");
    leaf.className = "jn-leaf";
    leaf.setAttribute("data-jn-leaf", String(n));
    var item = pages[n];
    if (item.type === "cover") {
      var j = current;
      leaf.innerHTML =
        '<div class="jn-cover">' +
          '<img class="jn-cover-hero" alt="" width="900" height="1200">' +
          '<span class="jn-cover-scrim" aria-hidden="true"></span>' +
          '<img class="jn-cover-logo" src="assets/images/brand/ar-cream-480.webp" srcset="assets/images/brand/ar-cream-240.webp 240w, assets/images/brand/ar-cream-480.webp 480w, assets/images/brand/ar-cream-880.webp 880w" sizes="110px" alt="Amanda Ruth Interiors monogram" width="883" height="738">' +
          '<div class="jn-cover-copy">' +
            '<span class="jn-tag">' + escapeHtml(j.tag) + "</span>" +
            "<h2>" + escapeHtml(j.title) + "</h2>" +
            (j.place ? '<span class="jn-card-place">' + escapeHtml(j.place) + "</span>" : "") +
          "</div>" +
        "</div>";
      leaf.querySelector(".jn-cover-hero").src = ROOT + j.folder + "/cover-hero.webp";
    } else if (item.type === "back") {
      leaf.innerHTML =
        '<div class="jn-back">' +
          '<img src="assets/images/brand/ar-taupe-480.webp" srcset="assets/images/brand/ar-taupe-240.webp 240w, assets/images/brand/ar-taupe-480.webp 480w" sizes="140px" alt="" width="480" height="400">' +
          '<p class="jn-bc-name">Amanda Ruth</p>' +
          '<p class="jn-bc-sub">Interiors</p>' +
          '<p class="jn-bc-line">Based in Yorkshire &amp; the North East,<br>working throughout the UK</p>' +
          '<a class="jn-cta" href="contact.html">Start your project</a>' +
          '<p class="jn-bc-contact"><a href="tel:+441423209027">+44 (0) 1423 209027</a> · <a href="mailto:info@amandaruthinteriors.co.uk">info@amandaruthinteriors.co.uk</a></p>' +
        "</div>";
    } else {
      var img = document.createElement("img");
      img.alt = item.page.alt;
      img.width = 1800;
      img.height = 1273;
      img.decoding = "async";
      img.sizes = "(max-width: 900px) 96vw, 1100px";
      leaf.appendChild(img);
    }
    return leaf;
  }

  function loadAround(n) {
    pages.forEach(function (item, i) {
      if (item.type !== "image") return;
      var leaf = stage.querySelector('[data-jn-leaf="' + i + '"]');
      if (!leaf) return;
      var img = leaf.querySelector("img");
      if (!img) return;
      if (Math.abs(i - n) <= 1) {
        if (!img.getAttribute("src")) {
          img.srcset = srcset(current.folder, item.page.file);
          img.src = src(current.folder, item.page.file);
        }
      }
    });
  }

  function show(n, animate) {
    if (n < 0 || n >= pages.length) return;
    var prev = index;
    index = n;
    var existing = stage.querySelector(".jn-leaf.is-current");
    var next = stage.querySelector('[data-jn-leaf="' + n + '"]');
    if (!next) {
      next = renderLeaf(n);
      stage.appendChild(next);
    }
    if (existing && existing !== next && animate !== false) {
      existing.classList.remove("is-current", "is-in");
      existing.classList.add("is-out");
      window.setTimeout(function () { existing.classList.remove("is-out"); existing.hidden = true; }, 560);
    } else if (existing && existing !== next) {
      existing.classList.remove("is-current", "is-in");
      existing.hidden = true;
    }
    next.hidden = false;
    next.classList.remove("is-out");
    next.classList.add("is-current");
    if (animate !== false && existing && existing !== next) next.classList.add("is-in");
    loadAround(n);
    countEl.textContent = pageLabel(n) + " · " + (n + 1) + " of " + pages.length;
    Array.prototype.forEach.call(dotsEl.children, function (d, i) {
      d.classList.toggle("is-on", i === n);
      d.setAttribute("aria-current", i === n ? "true" : "false");
    });
    btnPrev.disabled = n === 0;
    btnNext.disabled = n === pages.length - 1;
    if (live) live.textContent = pageLabel(n);
    titleEl.textContent = current.title + (current.place ? " · " + current.place : "");
  }

  function buildDots() {
    dotsEl.innerHTML = "";
    pages.forEach(function (_, i) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "jn-dot";
      b.setAttribute("aria-label", "Go to " + pageLabel(i));
      b.addEventListener("click", function () { show(i); });
      dotsEl.appendChild(b);
    });
  }

  function openJourney(i) {
    current = JOURNEYS[i];
    pages = buildPages(current);
    index = 0;
    lastFocus = document.activeElement;
    stage.innerHTML = "";
    buildDots();
    show(0, false);
    overlay.removeAttribute("hidden");
    document.body.classList.add("jn-open");
    btnClose.focus();
  }

  function close() {
    overlay.setAttribute("hidden", "");
    document.body.classList.remove("jn-open");
    stage.innerHTML = "";
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  btnPrev.addEventListener("click", function () { show(index - 1); });
  btnNext.addEventListener("click", function () { show(index + 1); });
  btnClose.addEventListener("click", close);

  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) close();
  });

  function focusables() {
    return Array.prototype.filter.call(
      overlay.querySelectorAll("button:not([disabled]), a[href]"),
      function (el) { return el.offsetParent !== null && !el.closest("[hidden]"); }
    );
  }

  document.addEventListener("keydown", function (e) {
    if (overlay.hasAttribute("hidden")) return;
    if (e.key === "Escape") { e.preventDefault(); close(); }
    else if (e.key === "ArrowRight") { e.preventDefault(); show(index + 1); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); show(index - 1); }
    else if (e.key === "Tab") {
      var list = focusables();
      if (!list.length) return;
      var first = list[0];
      var last = list[list.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  stage.addEventListener("touchstart", function (e) {
    if (e.changedTouches && e.changedTouches[0]) touchX = e.changedTouches[0].clientX;
  }, { passive: true });
  stage.addEventListener("touchend", function (e) {
    if (!(e.changedTouches && e.changedTouches[0])) return;
    var dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) show(index + (dx < 0 ? 1 : -1));
  }, { passive: true });

  buildGrid();
})();
