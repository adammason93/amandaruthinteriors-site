(function () {
  var toggle = document.querySelector('.nav-toggle');
  var header = document.querySelector('.site-header');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var open = document.body.classList.toggle('menu-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  document.querySelectorAll('.nav-mobile a').forEach(function (a) {
    a.addEventListener('click', function () {
      document.body.classList.remove('menu-open');
    });
  });

  var form = document.querySelector('form[data-mailto="true"]');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var fd = new FormData(form);
      var first = (fd.get('first-name') || '').toString().trim();
      var last = (fd.get('last-name') || '').toString().trim();
      var email = (fd.get('email') || '').toString().trim();
      var message = (fd.get('message') || '').toString().trim();
      var subject = 'Website enquiry from ' + [first, last].filter(Boolean).join(' ');
      var body = 'Name: ' + first + ' ' + last + '\nEmail: ' + email + '\n\n' + message;
      window.location.href = 'mailto:info@amandaruthinteriors.co.uk'
        + '?subject=' + encodeURIComponent(subject)
        + '&body=' + encodeURIComponent(body);
    });
  }
})();
