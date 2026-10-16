(function () {
  // nav backdrop on scroll
  var nav = document.getElementById('nav');
  function onScrollNav() {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }
  onScrollNav();

  // hamburger toggle
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('navMenu');
  toggle.addEventListener('click', function () {
    toggle.classList.toggle('open');
    menu.classList.toggle('open');
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
  });
  // close menu when a nav link is clicked
  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      toggle.classList.remove('open');
      menu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // hero parallax
  var media = document.getElementById('heroMedia');
  var ticking = false;
  function parallax() {
    if (window.scrollY < window.innerHeight * 1.2) {
      media.style.transform = 'translate3d(0,' + (window.scrollY * 0.28) + 'px,0)';
    }
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    onScrollNav();
    if (!ticking) { requestAnimationFrame(parallax); ticking = true; }
  }, { passive: true });

  // reveal on intersection
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: .12, rootMargin: '0px 0px -6% 0px' });
  document.querySelectorAll('.reveal,.reveal-img').forEach(function (el) { io.observe(el); });

  // year
  var y = new Date().getFullYear();
  var f = document.querySelector('.footer span');
  if (f) f.textContent = '© ' + y + ' Atharv Bhosale';

  // project showcase modal
  var overlay = document.getElementById('projectModal');
  if (overlay) {
    var closeBtn = overlay.querySelector('.modal-close');

    // open modal from showcase button
    document.querySelectorAll('[data-modal="projectModal"]').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    // close modal
    function closeModal() {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeModal();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('active')) closeModal();
    });
  }
})();
