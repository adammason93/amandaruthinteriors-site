(function () {
  var root = document.querySelector(".ba-slider");
  if (!root) return;

  var range = root.querySelector(".ba-range");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var pos = 50;
  var dragging = false;
  var nudged = false;
  var interacting = false;

  function setPos(value, fromInput) {
    pos = Math.round(Math.min(100, Math.max(0, value)));
    root.style.setProperty("--pos", pos + "%");
    root.classList.toggle("is-before-hidden", pos < 10);
    root.classList.toggle("is-after-hidden", pos > 90);
    if (range) {
      if (!fromInput) range.value = String(pos);
      range.setAttribute("aria-valuenow", String(pos));
    }
  }

  function posFromPointer(event) {
    var rect = root.getBoundingClientRect();
    var clientX = event.clientX;
    if (clientX == null && event.touches && event.touches[0]) {
      clientX = event.touches[0].clientX;
    }
    if (rect.width <= 0) return pos;
    return ((clientX - rect.left) / rect.width) * 100;
  }

  function startDrag(event) {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    interacting = true;
    dragging = true;
    root.classList.add("is-dragging");
    if (root.setPointerCapture && event.pointerId != null) {
      try { root.setPointerCapture(event.pointerId); } catch (err) {}
    }
    setPos(posFromPointer(event));
    event.preventDefault();
  }

  function moveDrag(event) {
    if (!dragging) return;
    setPos(posFromPointer(event));
    event.preventDefault();
  }

  function endDrag(event) {
    if (!dragging) return;
    dragging = false;
    root.classList.remove("is-dragging");
    if (root.releasePointerCapture && event.pointerId != null) {
      try { root.releasePointerCapture(event.pointerId); } catch (err) {}
    }
  }

  root.addEventListener("pointerdown", startDrag);
  root.addEventListener("pointermove", moveDrag);
  root.addEventListener("pointerup", endDrag);
  root.addEventListener("pointercancel", endDrag);

  if (range) {
    range.addEventListener("pointerdown", function (event) {
      event.stopPropagation();
      interacting = true;
    });
    range.addEventListener("input", function () {
      interacting = true;
      setPos(Number(range.value), true);
    });
    range.addEventListener("change", function () {
      setPos(Number(range.value), true);
    });
  }

  function easeInOut(t) {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  }

  function nudge() {
    if (reduce || nudged || interacting) return;
    nudged = true;
    var start = 50;
    var peak = 68;
    var duration = 1400;
    var begin = performance.now();
    root.classList.add("is-nudging");

    function frame(now) {
      if (interacting) {
        root.classList.remove("is-nudging");
        return;
      }
      var t = Math.min(1, (now - begin) / duration);
      var trip = t < 0.5 ? easeInOut(t / 0.5) : easeInOut(1 - (t - 0.5) / 0.5);
      setPos(start + (peak - start) * trip);
      if (t < 1) {
        requestAnimationFrame(frame);
      } else {
        setPos(start);
        root.classList.remove("is-nudging");
      }
    }
    requestAnimationFrame(frame);
  }

  if (!reduce && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      if (entries[0] && entries[0].isIntersecting && entries[0].intersectionRatio >= 0.45) {
        io.disconnect();
        nudge();
      }
    }, { threshold: [0.45, 0.6] });
    io.observe(root);
  }

  setPos(50);
})();
