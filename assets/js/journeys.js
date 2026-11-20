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


  function boardSrc(folder, file) {
    return ROOT + folder + "/" + file + "-1200.webp";
  }
  function boardSrcset(folder, file) {
    var base = ROOT + folder + "/" + file;
    return base + "-1200.webp 1200w, " + base + "-1800.webp 1800w";
  }

  function pageEl(html, label, spread) {
    var d = document.createElement("div");
    d.className = "bk-page bk-bleed";
    d.setAttribute("data-bk-label", label);
    if (spread) d.setAttribute("data-bk-spread", spread);
    d.innerHTML = html;
    return d;
  }

  function spreadFaces(j, page) {
    var src = boardSrc(j.folder, page.file);
    var srcset = boardSrcset(j.folder, page.file);
    var sizes = "(max-width: 899px) 92vw, 920px";
    var img = function (alt) {
      return '<img data-src="' + src + '" data-srcset="' + srcset + '" sizes="' + sizes +
        '" width="1800" height="1273" alt="' + escapeHtml(alt || "") + '" decoding="async">';
    };
    var left = pageEl(
      '<div class="bk-pg"><div class="bk-half bk-half-l">' + img(page.alt) + "</div></div>",
      page.label
    );
    var right = pageEl(
      '<div class="bk-pg"><div class="bk-half bk-half-r">' + img("") + "</div></div>",
      page.label,
      page.label
    );
    return [left, right];
  }

  function coverFace(j) {
    var d = document.createElement("div");
    d.className = "bk-page bk-cover";
    d.setAttribute("data-bk-label", "Cover");
    d.innerHTML =
      '<div class="bk-pg">' +
        '<div class="bk-cv-photo"><img data-src="' + ROOT + j.folder + '/cover-hero.webp" width="900" height="1200" alt="" decoding="async"></div>' +
        '<span class="bk-cv-scrim" aria-hidden="true"></span>' +
        '<span class="bk-cv-sheen" aria-hidden="true"></span>' +
        '<span class="bk-cv-spine" aria-hidden="true"></span>' +
        '<div class="bk-cv-logo">' +
          '<img class="bk-cv-mono" src="assets/images/brand/ar-cream-480.webp" srcset="assets/images/brand/ar-cream-240.webp 240w, assets/images/brand/ar-cream-480.webp 480w, assets/images/brand/ar-cream-880.webp 880w" sizes="(max-width: 899px) 30vw, 150px" width="883" height="738" alt="Amanda Ruth Interiors" decoding="async">' +
          '<img class="bk-cv-word" src="assets/images/logo-header-desktop-a.webp" width="2400" height="622" alt="" decoding="async">' +
        "</div>" +
      "</div>";
    return d;
  }

  function backFace() {
    var d = document.createElement("div");
    d.className = "bk-page bk-backcover";
    d.setAttribute("data-bk-label", "Back cover");
    d.innerHTML =
      '<div class="bk-pg">' +
        '<span class="bk-cv-spine bk-cv-spine-r" aria-hidden="true"></span>' +
        '<span class="bk-cv-sheen" aria-hidden="true"></span>' +
        '<img class="bk-bc-mono" src="assets/images/brand/ar-cream-taupe-480.webp" srcset="assets/images/brand/ar-cream-taupe-240.webp 240w, assets/images/brand/ar-cream-taupe-480.webp 480w, assets/images/brand/ar-cream-taupe-880.webp 880w" sizes="(max-width: 899px) 28vw, 140px" width="886" height="738" alt="" decoding="async">' +
        '<p class="bk-bc-name">Amanda Ruth</p>' +
        '<p class="bk-bc-sub">Interiors</p>' +
        '<span class="bk-bc-rule" aria-hidden="true"></span>' +
        '<p class="bk-bc-line">Based in Yorkshire &amp; the North East,<br>working throughout the UK</p>' +
        '<a class="bk-cta" href="contact.html">Start your project</a>' +
        '<p class="bk-bc-contact"><a href="tel:+441423209027">+44 (0) 1423 209027</a><span aria-hidden="true">&middot;</span><a href="mailto:info@amandaruthinteriors.co.uk">info@amandaruthinteriors.co.uk</a></p>' +
        '<p class="bk-bc-url">amandaruthinteriors.co.uk</p>' +
      "</div>";
    return d;
  }

  function bookShell(j) {
    var introCopy = j.place
      ? "From the first scheme to the finished space, in " + j.place + "."
      : "A design proposal, from the first scheme through to the drawings.";
    var project = j.projectUrl
      ? '<p class="bk-intro-copy"><a class="jn-book-project" href="' + j.projectUrl + '">View the finished room</a></p>'
      : "";
    return (
      '<section class="section-book section-book--sand section-book--v2 jn-book-section">' +
        '<div class="bk" data-book data-book-v2 tabindex="0" role="region" aria-roledescription="book" aria-label="' +
          escapeHtml(j.title + (j.place ? " in " + j.place : "") + ". While the book is closed, the left and right arrow keys turn it round and Enter opens it. Once open, the arrow keys turn the pages.") + '">' +
          '<div class="bk-intro">' +
            '<p class="bk-headkick">' + escapeHtml(j.tag) + "</p>" +
            '<h2 class="bk-heading" id="jn-book-title">' + escapeHtml(j.title) + "</h2>" +
            '<span class="bk-intro-rule" aria-hidden="true"></span>' +
            '<p class="bk-intro-copy">' + escapeHtml(introCopy) + "</p>" +
            project +
            '<div class="bk-opener"><button type="button" class="btn bk-open" data-bk-open>Open the book</button>' +
              '<p class="bk-drag-hint" aria-hidden="true"><span class="bk-dh-fine">Drag to turn &middot; Click to open</span><span class="bk-dh-touch">Drag to turn &middot; Tap to open</span></p></div>' +
          "</div>" +
          '<div class="bk-stage">' +
            '<div class="bk-book" data-bk-book>' +
              '<div class="bk-pages" data-bk-pages></div>' +
              '<span class="bk-cast" aria-hidden="true"></span>' +
              '<span class="bk-peel" aria-hidden="true"></span>' +
            "</div>" +
          "</div>" +
          '<div class="bk-controls">' +
            '<span class="bk-close-spacer" aria-hidden="true"></span>' +
            '<button type="button" class="bk-arrow-btn bk-prev" data-bk-prev aria-label="Previous page"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></button>' +
            '<div class="bk-progress"><p class="bk-count" data-bk-count>Cover</p><div class="bk-dots" data-bk-dots role="group" aria-label="Go to a page"></div><span class="bk-bar" aria-hidden="true"><span></span></span></div>' +
            '<button type="button" class="bk-arrow-btn bk-next" data-bk-next aria-label="Next page"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></button>' +
            '<button type="button" class="bk-close" data-bk-close aria-label="Close the book" title="Close the book"><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false"><path d="M6 4.5h10.5a1.5 1.5 0 0 1 1.5 1.5v13.5H7.5A1.5 1.5 0 0 1 6 18z" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><path d="M6 18a1.5 1.5 0 0 1 1.5-1.5H18" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M10 8.5h5" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/></svg><span class="bk-close-label">Close</span></button>' +
          "</div>" +
          '<p class="visually-hidden" aria-live="polite" data-bk-live></p>' +
        "</div>" +
      "</section>"
    );
  }

  var host = overlay.querySelector("[data-jn-book-host]");
  var btnDismiss = overlay.querySelector("[data-jn-dismiss]");
  var lastFocus = null;
  var activeBook = null;

  function closeJourney() {
    if (activeBook && activeBook.destroy) activeBook.destroy();
    activeBook = null;
    if (host) host.innerHTML = "";
    overlay.setAttribute("hidden", "");
    overlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("jn-open");
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function openJourney(i) {
    if (!window.initAmandaRuthBook) return;
    var j = JOURNEYS[i];
    lastFocus = document.activeElement;
    if (activeBook && activeBook.destroy) activeBook.destroy();
    host.innerHTML = bookShell(j);
    var store = host.querySelector("[data-bk-pages]");
    store.appendChild(coverFace(j));
    j.pages.forEach(function (p) {
      var pair = spreadFaces(j, p);
      store.appendChild(pair[0]);
      store.appendChild(pair[1]);
    });
    store.appendChild(backFace());
    var root = host.querySelector("[data-book]");
    activeBook = window.initAmandaRuthBook(root, { mergeSpreadFaces: true, nudgeOnStart: true });
    overlay.removeAttribute("hidden");
    overlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("jn-open");
    if (root && root.focus) root.focus({ preventScroll: true });
  }

  if (btnDismiss) btnDismiss.addEventListener("click", closeJourney);
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) closeJourney();
  });
  document.addEventListener("keydown", function (e) {
    if (overlay.hasAttribute("hidden")) return;
    if (e.key === "Escape") { e.preventDefault(); closeJourney(); }
  });

  buildGrid();
})();
