(function () {
  var header = document.querySelector('header');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Auto-tag reveal targets: individual items in grids/lists get their own
  // stagger, long-form article wrappers reveal as one block.
  document.querySelectorAll('.gallery-grid, .gallery-card-grid, .staff-grid, .doc-grid, .program-grid, .stats-grid, .activities-section ul, .news-list').forEach(function (group) {
    Array.prototype.forEach.call(group.children, function (el) {
      el.classList.add('reveal');
    });
  });
  document.querySelectorAll('.content-inner > ul, .page-content > ul').forEach(function (list) {
    Array.prototype.forEach.call(list.children, function (el) {
      el.classList.add('reveal');
    });
  });
  document.querySelectorAll('.hero, .content-inner, .page-content').forEach(function (el) {
    if (!el.querySelector('.reveal')) el.classList.add('reveal');
  });
  document.querySelectorAll('.content-main > section:not(.hero)').forEach(function (el) {
    if (!el.querySelector('.reveal')) el.classList.add('reveal');
  });

  var targets = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && targets.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    targets.forEach(function (el) { io.observe(el); });
  } else {
    targets.forEach(function (el) { el.classList.add('is-visible'); });
  }
})();
