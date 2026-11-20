/* Design Journeys — preview only. Loaded solely by portfolio-preview.html.
   To add another brochure: put cropped plates in assets/images/journeys/<id>/plates/
   (name-1200.webp and name-1800.webp, plus cover-hero.webp) and push a
   new object, with chapters, onto JOURNEYS below. */
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
      chapters: [
        { title: "Design Concept", kind: "ink", plates: [{ file: "concept", alt: "Mood board for a living room in Alwoodley" }] },
        { title: "Floor Plan", line: "Living Room Floor Plan", kind: "ink", plates: [{ file: "plan", alt: "Furniture floor plan of the Alwoodley living room" }] },
        { title: "Furniture and finishes", line: "FF&E Proposal", kind: "ink", plates: [{ file: "ffe", alt: "Furniture and finishes proposal for the Alwoodley living room" }] },
        { title: "Elevations", kind: "photo", plates: [
          { file: "elevations-2d-1", alt: "Chair elevation of the Alwoodley living room", caption: "Chair Elevation" },
          { file: "elevations-2d-2", alt: "Television wall elevation of the Alwoodley living room", caption: "TV Wall Elevation" },
          { file: "elevations-2d-3", alt: "Sofa elevation of the Alwoodley living room", caption: "Sofa Elevation" },
          { file: "elevations-2d-4", alt: "Window elevation of the Alwoodley living room", caption: "Window Elevation" }
        ] },
        { title: "3D Visuals", line: "3D Elevations", kind: "photo", plates: [
          { file: "visuals-3d-1", alt: "Three-dimensional view of the Alwoodley living room" },
          { file: "visuals-3d-2", alt: "Three-dimensional view of the television wall" },
          { file: "visuals-3d-3", alt: "Three-dimensional view of the seating" },
          { file: "visuals-3d-4", alt: "Three-dimensional view of the window wall" }
        ] }
      ]
    },
    {
      id: "alwoodley-master-bedroom",
      title: "Master Bedroom",
      place: "Alwoodley, West Yorkshire",
      tag: "Concept to completion",
      projectUrl: "project-master-bedroom-alwoodley.html",
      folder: "alwoodley-master-bedroom",
      chapters: [
        { title: "Design Concept", kind: "ink", plates: [{ file: "concept", alt: "Mood board for a master bedroom in Alwoodley" }] },
        { title: "Floor Plan", line: "Floor Plan", kind: "ink", plates: [{ file: "plan", alt: "Furniture floor plan of the Alwoodley master bedroom" }] },
        { title: "Elevation for Headboard", kind: "ink", plates: [{ file: "headboard-elevation", alt: "Technical elevation of the headboard wall", caption: "Master Bedroom — Headboard Wall" }] },
        { title: "Furniture and finishes", line: "FF&E Proposal", kind: "ink", plates: [{ file: "ffe", alt: "Furniture and finishes proposal for the Alwoodley master bedroom" }] },
        { title: "Elevations", kind: "photo", plates: [
          { file: "elevations-2d-1", alt: "Headboard elevation of the Alwoodley master bedroom", caption: "Headboard Elevation" },
          { file: "elevations-2d-2", alt: "Window elevation of the Alwoodley master bedroom", caption: "Window Elevation" },
          { file: "elevations-2d-3", alt: "Door elevation of the Alwoodley master bedroom", caption: "Door Elevation" },
          { file: "elevations-2d-4", alt: "Wardrobe door elevation of the Alwoodley master bedroom", caption: "Wardrobe Door Elevation" }
        ] },
        { title: "3D Visuals", line: "3D Elevations", kind: "photo", plates: [
          { file: "visuals-3d-1", alt: "Three-dimensional view of the Alwoodley master bedroom" },
          { file: "visuals-3d-2", alt: "Three-dimensional view of the window wall" },
          { file: "visuals-3d-3", alt: "Three-dimensional view of the dressing wall" },
          { file: "visuals-3d-4", alt: "Three-dimensional view of the doorway" }
        ] },
        { title: "Final Images", kind: "photo", plates: [
          { file: "finished-1-1", alt: "The finished master bedroom in Alwoodley" },
          { file: "finished-1-2", alt: "The finished master bedroom in Alwoodley" },
          { file: "finished-2-1", alt: "Details of the finished Alwoodley master bedroom" },
          { file: "finished-2-2", alt: "Details of the finished Alwoodley master bedroom" },
          { file: "finished-2-3", alt: "Details of the finished Alwoodley master bedroom" },
          { file: "finished-3-1", alt: "The dressing table in the finished Alwoodley master bedroom" },
          { file: "finished-3-2", alt: "The dressing table in the finished Alwoodley master bedroom" },
          { file: "finished-3-3", alt: "The dressing table in the finished Alwoodley master bedroom" },
          { file: "finished-4-1", alt: "Close details from the finished Alwoodley master bedroom" },
          { file: "finished-4-2", alt: "Close details from the finished Alwoodley master bedroom" },
          { file: "finished-4-3", alt: "Close details from the finished Alwoodley master bedroom" }
        ] }
      ]
    },
    {
      id: "ripponden-ensuite",
      title: "Master En-suite",
      place: "Ripponden, West Yorkshire",
      tag: "Concept to completion",
      projectUrl: "project-master-ensuite.html",
      folder: "ripponden-ensuite",
      chapters: [
        { title: "Design Concept", kind: "ink", plates: [{ file: "concept", alt: "Mood board for a master en-suite in Ripponden" }] },
        { title: "Floor Plans and Moodboard", plates: [
          { file: "plan-samples-1", kind: "ink", alt: "Floor plans for the Ripponden en-suite" },
          { file: "plan-samples-2", kind: "photo", alt: "A sample board for the Ripponden en-suite" }
        ] },
        { title: "Elevations", kind: "photo", plates: [
          { file: "elevations-2d-1", alt: "Shower elevation of the Ripponden en-suite", caption: "Shower Elevation" },
          { file: "elevations-2d-2", alt: "Sink elevation of the Ripponden en-suite", caption: "Sink Elevation" },
          { file: "elevations-2d-3", alt: "Bath elevation of the Ripponden en-suite", caption: "Bath Elevation" },
          { file: "elevations-2d-4", alt: "Door elevation of the Ripponden en-suite", caption: "Door Elevation" }
        ] },
        { title: "3D Visuals", line: "3D Elevations", kind: "photo", plates: [
          { file: "visuals-3d-1", alt: "Three-dimensional view of the Ripponden en-suite" },
          { file: "visuals-3d-2", alt: "Three-dimensional view of the vanity" },
          { file: "visuals-3d-3", alt: "Three-dimensional view of the shower" },
          { file: "visuals-3d-4", alt: "Three-dimensional view of the door" }
        ] },
        { title: "Final Images", kind: "photo", plates: [
          { file: "finished-1-1", alt: "The finished master en-suite in Ripponden" },
          { file: "finished-1-2", alt: "The finished master en-suite in Ripponden" },
          { file: "finished-1-3", alt: "The finished master en-suite in Ripponden" },
          { file: "finished-2-1", alt: "Details of the finished Ripponden en-suite" },
          { file: "finished-2-2", alt: "Details of the finished Ripponden en-suite" },
          { file: "finished-2-3", alt: "Details of the finished Ripponden en-suite" }
        ] }
      ]
    },
    {
      id: "ripponden-master-bedroom",
      title: "Master Bedroom",
      place: "Ripponden, West Yorkshire",
      tag: "Concept to completion",
      projectUrl: "project-master-bedroom.html",
      folder: "ripponden-master-bedroom",
      chapters: [
        { title: "Design Concept", kind: "ink", plates: [{ file: "concept", alt: "Mood board for a master bedroom in Ripponden" }] },
        { title: "Floor Plans and Moodboard", plates: [
          { file: "plan-samples-1", kind: "ink", alt: "Floor plan for the Ripponden master bedroom" },
          { file: "plan-samples-2", kind: "photo", alt: "A sample board for the Ripponden master bedroom" }
        ] },
        { title: "Furniture and finishes", line: "FF&E Proposal", kind: "ink", plates: [{ file: "ffe", alt: "Furniture and finishes proposal for the Ripponden master bedroom" }] },
        { title: "Elevations", kind: "photo", plates: [
          { file: "elevations-2d-1", alt: "Elevation of the Ripponden master bedroom", caption: "Dressing Table Elevation" },
          { file: "elevations-2d-2", alt: "Elevation of the Ripponden master bedroom", caption: "Headboard Elevation" },
          { file: "elevations-2d-3", alt: "Elevation of the Ripponden master bedroom", caption: "Door Elevation" },
          { file: "elevations-2d-4", alt: "Elevation of the Ripponden master bedroom", caption: "Window Elevation" }
        ] },
        { title: "Final Images", kind: "photo", plates: [
          { file: "finished-1-1", alt: "The finished master bedroom in Ripponden" },
          { file: "finished-1-2", alt: "The finished master bedroom in Ripponden" },
          { file: "finished-2-1", alt: "The dressing table in the finished Ripponden master bedroom" },
          { file: "finished-2-2", alt: "The dressing table in the finished Ripponden master bedroom" },
          { file: "finished-2-3", alt: "The dressing table in the finished Ripponden master bedroom" },
          { file: "finished-3-1", alt: "Details of the finished Ripponden master bedroom" },
          { file: "finished-3-2", alt: "Details of the finished Ripponden master bedroom" },
          { file: "finished-3-3", alt: "Details of the finished Ripponden master bedroom" }
        ] }
      ]
    },
    {
      id: "kitchen-dining",
      title: "Kitchen & Dining",
      place: "",
      tag: "Design proposal",
      projectUrl: "",
      folder: "kitchen-dining",
      chapters: [
        { title: "Design Concept", kind: "ink", plates: [{ file: "concept", alt: "Mood board for a kitchen and dining proposal" }] },
        { title: "To Scale Elevations", kind: "ink", plates: [
          { file: "elevations-scale-1", alt: "To-scale elevations of the kitchen", caption: "Kitchen" },
          { file: "elevations-scale-2", alt: "To-scale elevations of the picture wall", caption: "Picture Wall & Temple Elevations" }
        ] },
        { title: "Furniture and finishes", line: "FF&E Proposal", kind: "ink", plates: [{ file: "ffe", alt: "Furniture and finishes proposal for the kitchen and dining" }] },
        { title: "2D Elevations", kind: "photo", plates: [
          { file: "elevations-2d-1", alt: "Two-dimensional elevations of the kitchen and dining proposal", caption: "Kitchen, Kitchen Island, Dining Table & Bi-fold Window Elevation" },
          { file: "elevations-2d-2", alt: "Two-dimensional elevations of the kitchen and dining proposal" }
        ] },
        { title: "3D Visuals", line: "3D Elevations", kind: "photo", plates: [
          { file: "visuals-3d-kitchen-1", alt: "Three-dimensional view of the proposed kitchen and dining space" },
          { file: "visuals-3d-kitchen-2", alt: "Three-dimensional view of the proposed kitchen and dining space" },
          { file: "visuals-3d-dining-1", alt: "Three-dimensional view of the proposed dining area" },
          { file: "visuals-3d-dining-2", alt: "Three-dimensional view of the proposed dining area" }
        ] }
      ]
    },
    {
      id: "living-room-proposal",
      title: "Living Room",
      place: "",
      tag: "Design proposal",
      projectUrl: "",
      folder: "living-room-proposal",
      chapters: [
        { title: "Design Concept", kind: "ink", plates: [{ file: "concept", alt: "Mood board for a living room proposal" }] },
        { title: "Moodboard", kind: "photo", plates: [
          { file: "samples-1", alt: "A sample board of fabrics and finishes for the living room proposal" },
          { file: "samples-2", alt: "A sample board of fabrics and finishes for the living room proposal" }
        ] },
        { title: "Furniture and finishes", line: "FF&E Moodboard", kind: "ink", plates: [{ file: "ffe", alt: "Furniture and finishes proposal for the living room" }] },
        { title: "2D Elevations", kind: "photo", plates: [
          { file: "elevations-2d-1", alt: "Two-dimensional elevation of the proposed living room" },
          { file: "elevations-2d-2", alt: "Two-dimensional elevation of the proposed living room" },
          { file: "elevations-2d-3", alt: "Two-dimensional elevation of the proposed living room" },
          { file: "elevations-2d-4", alt: "Two-dimensional elevation of the proposed living room" }
        ] },
        { title: "3D Visuals", line: "3D Elevations", kind: "photo", plates: [
          { file: "visuals-3d-1", alt: "Three-dimensional view of the proposed living room" },
          { file: "visuals-3d-2", alt: "Three-dimensional view of the proposed living room" },
          { file: "visuals-3d-3", alt: "Three-dimensional view of the proposed living room" },
          { file: "visuals-3d-4", alt: "Three-dimensional view of the proposed living room" }
        ] }
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
      card.setAttribute("data-jn-index", String(i));

      var hit = document.createElement("button");
      hit.type = "button";
      hit.className = "jn-card-hit";
      hit.setAttribute("data-jn-open", String(i));
      hit.setAttribute("aria-label", "Open the " + j.title + (j.place ? " in " + j.place : "") + " brochure");

      var stage = document.createElement("span");
      stage.className = "jn-mini-stage";
      stage.innerHTML =
        '<span class="jn-mini-idle"><span class="jn-mini-book" aria-hidden="true">' +
          '<span class="bk-page bk-cover jn-mini-cover">' +
            '<span class="bk-pg">' +
              '<span class="bk-cv-photo"><img src="' + ROOT + j.folder + '/cover-hero.webp" width="900" height="1200" alt="" decoding="async" loading="eager"></span>' +
              '<span class="bk-cv-scrim"></span>' +
              '<span class="bk-cv-sheen"></span>' +
              '<span class="bk-cv-spine"></span>' +
              '<span class="bk-cv-logo">' +
                '<img class="bk-cv-mono" src="assets/images/brand/ar-cream-480.webp" srcset="assets/images/brand/ar-cream-240.webp 240w, assets/images/brand/ar-cream-480.webp 480w" sizes="80px" width="883" height="738" alt="">' +
                '<img class="bk-cv-word" src="assets/images/logo-header-desktop-a.webp" width="2400" height="622" alt="">' +
              "</span>" +
            "</span>" +
          "</span>" +
          '<span class="jn-mini-spine"></span>' +
          '<span class="jn-mini-fore"></span>' +
          '<span class="jn-mini-bottom"></span>' +
          '<span class="jn-mini-back"></span>' +
        "</span></span>";
      hit.appendChild(stage);

      var meta = document.createElement("span");
      meta.className = "jn-card-meta";
      meta.innerHTML = '<span class="jn-tag">' + escapeHtml(j.tag) + "</span>" +
        '<span class="jn-card-title">' + escapeHtml(j.title) + "</span>" +
        (j.place ? '<span class="jn-card-place">' + escapeHtml(j.place) + "</span>" : "");
      hit.appendChild(meta);
      hit.addEventListener("click", function () { openJourney(i); });

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


  function plateSrc(folder, file) {
    return ROOT + folder + "/plates/" + file + "-1200.webp";
  }
  function plateSrcset(folder, file) {
    var base = ROOT + folder + "/plates/" + file;
    return base + "-1200.webp 1200w, " + base + "-1800.webp 1800w";
  }

  function runLabel(j) {
    if (!j.place) return j.title;
    return j.title + " · " + j.place.split(",")[0];
  }

  function pad2(n) {
    return (n < 10 ? "0" : "") + n;
  }

  function pageEl(className, html, label) {
    var d = document.createElement("div");
    d.className = className;
    d.setAttribute("data-bk-label", label);
    d.innerHTML = html;
    return d;
  }

  function folioHtml(j, folio) {
    return '<p class="bk-folio" aria-hidden="true"><b>' + pad2(folio) + "</b><span>" +
      escapeHtml(runLabel(j)) + "</span></p>";
  }

  function plateImg(j, plate) {
    var src = plateSrc(j.folder, plate.file);
    var srcset = plateSrcset(j.folder, plate.file);
    var sizes = "(max-width: 899px) 86vw, min(42vw, 520px)";
    return '<img data-src="' + src + '" data-srcset="' + srcset + '" sizes="' + sizes +
      '" alt="' + escapeHtml(plate.alt || "") + '" decoding="async">';
  }

  function plateKind(ch, plate) {
    return plate.kind || ch.kind || "photo";
  }

  function titlePage(j, ch, num, folio) {
    var line = ch.line
      ? '<p class="bk-deck">' + escapeHtml(ch.line) + "</p>"
      : "";
    return pageEl(
      "bk-page bk-paper bk-room-text jn-chapter",
      '<div class="bk-pg">' +
        '<p class="bk-run">' + escapeHtml(runLabel(j)) + "</p>" +
        '<span class="bk-bignum" aria-hidden="true">' + num + "</span>" +
        '<p class="bk-display">' + escapeHtml(ch.title) + "</p>" +
        line +
        '<span class="bk-hair" aria-hidden="true"></span>' +
      "</div>" +
      folioHtml(j, folio),
      ch.title
    );
  }

  function platePage(j, ch, plate, folio, withHeading, num) {
    var kind = plateKind(ch, plate);
    var figClass = kind === "ink" ? "jn-print" : "bk-mount jn-mount";
    var heading = "";
    if (withHeading) {
      heading = '<p class="bk-sc">' + escapeHtml(num + " · " + ch.title) + "</p>";
    }
    var cap = plate.caption
      ? '<p class="bk-cap bk-cap-rule">' + escapeHtml(plate.caption) + "</p>"
      : "";
    return pageEl(
      "bk-page bk-paper bk-plate-page jn-plate-page",
      '<div class="bk-pg">' +
        '<p class="bk-run">' + escapeHtml(runLabel(j)) + "</p>" +
        heading +
        '<figure class="' + figClass + '">' + plateImg(j, plate) + "</figure>" +
        cap +
      "</div>" +
      folioHtml(j, folio),
      plate.caption || ch.title
    );
  }

  function chapterFaces(j, ch, chIndex, folio) {
    var faces = [];
    var plates = ch.plates || [];
    var num = pad2(chIndex);
    if (!plates.length) return { faces: faces, folio: folio };
    if (plates.length % 2 === 1) {
      faces.push(titlePage(j, ch, num, folio++));
      plates.forEach(function (plate) {
        faces.push(platePage(j, ch, plate, folio++, false, num));
      });
    } else {
      faces.push(platePage(j, ch, plates[0], folio++, true, num));
      plates.slice(1).forEach(function (plate) {
        faces.push(platePage(j, ch, plate, folio++, false, num));
      });
    }
    return { faces: faces, folio: folio };
  }

  function innerFaces(j) {
    var faces = [];
    var folio = 1;
    (j.chapters || []).forEach(function (ch, i) {
      var out = chapterFaces(j, ch, i + 1, folio);
      faces = faces.concat(out.faces);
      folio = out.folio;
    });
    return faces;
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
  var activeIndex = -1;
  var animating = false;
  var flyEl = null;
  var reduceMq = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;

  function reduced() {
    return !!(reduceMq && reduceMq.matches);
  }

  function cardEl(i) {
    return grid.querySelector('.jn-card[data-jn-index="' + i + '"]');
  }
  function miniBook(i) {
    var c = cardEl(i);
    return c ? c.querySelector(".jn-mini-book") : null;
  }
  function idleWrap(i) {
    var book = miniBook(i);
    return book && book.parentElement && book.parentElement.classList.contains("jn-mini-idle")
      ? book.parentElement
      : book;
  }
  function coverEl(root) {
    return root.querySelector(".bk-cover") || root.querySelector("[data-bk-book]");
  }
  function setPhase(name) {
    document.body.classList.toggle("jn-open", name !== "idle");
    document.body.classList.toggle("jn-animating", name === "opening" || name === "closing");
    document.body.classList.toggle("jn-book-open", name === "open");
    if (name === "idle") {
      document.body.classList.remove("jn-open", "jn-animating", "jn-book-open");
    }
    if (overlay) overlay.setAttribute("data-jn-phase", name);
  }
  function recedeOthers(i, on) {
    Array.prototype.forEach.call(grid.querySelectorAll(".jn-card"), function (c) {
      var idx = c.getAttribute("data-jn-index");
      c.classList.toggle("jn-chosen", on && idx === String(i));
      c.classList.toggle("jn-recede", on && idx !== String(i));
    });
  }
  function freezeIdle(i) {
    var idle = idleWrap(i);
    if (!idle) return;
    var tr = window.getComputedStyle(idle).transform;
    idle.style.animation = "none";
    idle.style.transform = tr === "none" ? "" : tr;
  }
  function unfreezeIdle(i) {
    var idle = idleWrap(i);
    if (!idle) return;
    idle.style.animation = "";
    idle.style.transform = "";
  }
  function removeFlyer() {
    if (flyEl && flyEl.parentNode) flyEl.parentNode.removeChild(flyEl);
    flyEl = null;
  }
  function makeFlyer(book, rect) {
    var wrap = document.createElement("span");
    wrap.className = "jn-flyer";
    var clone = book.cloneNode(true);
    clone.classList.remove("jn-slot-hidden");
    clone.style.width = "100%";
    clone.style.height = "100%";
    clone.style.margin = "0";
    clone.style.animation = "none";
    wrap.appendChild(clone);
    wrap.style.position = "fixed";
    wrap.style.left = rect.left + "px";
    wrap.style.top = rect.top + "px";
    wrap.style.width = rect.width + "px";
    wrap.style.height = rect.height + "px";
    wrap.style.margin = "0";
    wrap.style.zIndex = "230";
    wrap.style.transformOrigin = "top left";
    wrap.style.pointerEvents = "none";
    document.body.appendChild(wrap);
    return wrap;
  }
  function flyTo(flyer, fromRect, toRect, ms, done) {
    var dx = toRect.left - fromRect.left;
    var dy = toRect.top - fromRect.top;
    var sx = toRect.width / Math.max(1, fromRect.width);
    var sy = toRect.height / Math.max(1, fromRect.height);
    flyer.style.left = fromRect.left + "px";
    flyer.style.top = fromRect.top + "px";
    flyer.style.width = fromRect.width + "px";
    flyer.style.height = fromRect.height + "px";
    flyer.style.transition = "none";
    flyer.style.transform = "translate(0,0) scale(1)";
    void flyer.offsetWidth;
    flyer.style.transition = "transform " + ms + "ms cubic-bezier(0.22, 0.82, 0.24, 1)";
    flyer.style.transform = "translate(" + dx + "px," + dy + "px) scale(" + sx + "," + sy + ")";
    var settled = false;
    function finish() {
      if (settled) return;
      settled = true;
      flyer.removeEventListener("transitionend", onEnd);
      window.clearTimeout(fallback);
      done();
    }
    function onEnd(e) {
      if (e.target === flyer && e.propertyName === "transform") finish();
    }
    flyer.addEventListener("transitionend", onEnd);
    var fallback = window.setTimeout(finish, ms + 60);
  }
  function mountBook(j) {
    if (activeBook && activeBook.destroy) activeBook.destroy();
    host.innerHTML = bookShell(j);
    var store = host.querySelector("[data-bk-pages]");
    store.appendChild(coverFace(j));
    innerFaces(j).forEach(function (face) { store.appendChild(face); });
    store.appendChild(backFace());
    var root = host.querySelector("[data-book]");
    activeBook = window.initAmandaRuthBook(root, { mergeSpreadFaces: false, nudgeOnStart: false });
    var btnClose = root.querySelector("[data-bk-close]");
    if (btnClose) {
      btnClose.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        closeJourney();
      }, true);
    }
    return root;
  }
  function teardownOverlay() {
    removeFlyer();
    if (activeIndex >= 0) {
      var source = miniBook(activeIndex);
      if (source) source.classList.remove("jn-slot-hidden");
      unfreezeIdle(activeIndex);
    }
    if (activeBook && activeBook.destroy) activeBook.destroy();
    activeBook = null;
    if (host) host.innerHTML = "";
    overlay.setAttribute("hidden", "");
    overlay.setAttribute("aria-hidden", "true");
    recedeOthers(0, false);
    Array.prototype.forEach.call(grid.querySelectorAll(".jn-card"), function (c) {
      c.classList.remove("jn-chosen", "jn-recede", "jn-slot-empty");
    });
    setPhase("idle");
    animating = false;
    activeIndex = -1;
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function closeJourney() {
    if (overlay.hasAttribute("hidden") && !animating) return;
    if (animating && overlay.getAttribute("data-jn-phase") === "closing") return;
    var i = activeIndex;
    var source = miniBook(i);
    if (reduced() || !source) {
      teardownOverlay();
      return;
    }
    animating = true;
    setPhase("closing");
    recedeOthers(i, true);
    var root = host && host.querySelector("[data-book]");

    function flyBack(fromRect) {
      var last = fromRect;
      if (!last || last.width < 8) {
        var cover = root && coverEl(root);
        last = cover ? cover.getBoundingClientRect() : null;
      }
      if (!last || last.width < 8) {
        last = { left: window.innerWidth / 2 - 90, top: window.innerHeight / 2 - 120, width: 180, height: 240 };
      }
      var first = source.getBoundingClientRect();
      removeFlyer();
      flyEl = makeFlyer(source, last);
      if (root) root.classList.add("jn-book-waiting");
      flyTo(flyEl, last, first, 560, function () {
        teardownOverlay();
      });
    }

    var state = root && root.getAttribute("data-bk-state");
    var count = root && root.querySelector("[data-bk-count]");
    var txt = count ? (count.textContent || "") : "";
    var nearStart = /Cover/.test(txt) || /Pages 1/.test(txt) || /Page 1 /.test(txt);
    if (state && state !== "closed-front" && activeBook && activeBook.goTo && nearStart) {
      activeBook.goTo(0, 0);
      var t0 = Date.now();
      (function wait() {
        if ((root.getAttribute("data-bk-state") === "closed-front") || Date.now() - t0 > 1200) flyBack();
        else window.setTimeout(wait, 40);
      })();
      return;
    }
    // Mid-book: start the cover from the open spread's box so the book never blanks out.
    var spreadBox = root && root.querySelector(".bk-stage");
    var from = spreadBox ? spreadBox.getBoundingClientRect() : null;
    if (from && from.width > 8 && state !== "closed-front") {
      // Use the cover's aspect (3:4) centred on the spread, so it doesn't stretch.
      var h = from.height;
      var w = h * 0.75;
      from = { left: from.left + (from.width - w) / 2, top: from.top, width: w, height: h };
    }
    flyBack(from);
  }

  function openJourney(i) {
    if (!window.initAmandaRuthBook || animating) return;
    var j = JOURNEYS[i];
    var source = miniBook(i);
    lastFocus = document.activeElement;
    activeIndex = i;

    if (reduced() || !source) {
      setPhase("open");
      recedeOthers(i, true);
      overlay.removeAttribute("hidden");
      overlay.setAttribute("aria-hidden", "false");
      var root = mountBook(j);
      if (activeBook && activeBook.step) activeBook.step(1);
      if (root && root.focus) root.focus({ preventScroll: true });
      return;
    }

    animating = true;
    freezeIdle(i);
    setPhase("opening");
    recedeOthers(i, true);
    var first = source.getBoundingClientRect();
    source.classList.add("jn-slot-hidden");
    var card = cardEl(i);
    if (card) card.classList.add("jn-slot-empty");
    flyEl = makeFlyer(source, first);

    overlay.removeAttribute("hidden");
    overlay.setAttribute("aria-hidden", "false");
    var root = mountBook(j);
    root.classList.add("jn-book-waiting");

    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        var cover = coverEl(root);
        var last = cover ? cover.getBoundingClientRect() : first;
        flyTo(flyEl, first, last, 640, function () {
          root.classList.remove("jn-book-waiting");
          removeFlyer();
          setPhase("open");
          if (activeBook && activeBook.step) activeBook.step(1);
          animating = false;
          if (root && root.focus) root.focus({ preventScroll: true });
        });
      });
    });
  }

  if (btnDismiss) btnDismiss.addEventListener("click", function () { closeJourney(); });
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) closeJourney();
  });
  document.addEventListener("keydown", function (e) {
    if (overlay.hasAttribute("hidden") && !animating) return;
    if (e.key === "Escape") { e.preventDefault(); closeJourney(); }
  });

  buildGrid();
})();
