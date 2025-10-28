document.addEventListener('DOMContentLoaded', () => {
  const categoryPills = document.querySelectorAll('.category-pill');
  const menuToggle = document.querySelector('.menu-toggle');
  const navbar = document.querySelector('.navbar');
  const menuOverlay = document.querySelector('.menu-overlay');
  const menuClose = document.querySelector('.menu-close');
  const navLinks = document.querySelectorAll('.navbar .nav-link');

  const openMenu = () => {
    navbar?.classList.add('open');
    menuOverlay?.classList.add('show');
    document.body.classList.add('menu-open');
    menuToggle?.setAttribute('aria-expanded', 'true');
  };

  const closeMenu = () => {
    navbar?.classList.remove('open');
    menuOverlay?.classList.remove('show');
    document.body.classList.remove('menu-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  };

  menuToggle?.addEventListener('click', () => {
    if (navbar?.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  menuClose?.addEventListener('click', closeMenu);
  menuOverlay?.addEventListener('click', closeMenu);

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 992) {
        closeMenu();
      }
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 992) {
      closeMenu();
    }
  });

  categoryPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      categoryPills.forEach((item) => item.classList.remove('active'));
      pill.classList.add('active');
    });
  });
});
