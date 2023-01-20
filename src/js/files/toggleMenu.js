const menuArrow = document.querySelector('.avatar-arrow');

if (menuArrow) {
  const menuArrowUse = menuArrow.querySelector('use');
  const menuNav = document.querySelector('.menu-nav');
  const headerAvatarBlur = document.querySelector('.header__avatar-blur');
  const headerAvatar = document.querySelector('.header__avatar');
  document.body.addEventListener('click', (e) => {
    if (
      (e.target === menuArrow || e.target === menuArrowUse || e.target === headerAvatarBlur) &&
      !menuArrow.classList.contains('menu-active')
    ) {
      menuArrow.classList.add('menu-active');
      menuNav.classList.add('menu-active');
    } else {
      menuArrow.classList.remove('menu-active');
      menuNav.classList.remove('menu-active');
    }
  });

  headerAvatar.addEventListener('mouseover', (e) => {
    menuArrow.classList.add('menu-active');
    menuNav.classList.add('menu-active');
  });
  headerAvatar.addEventListener('mouseout', (e) => {
    menuArrow.classList.remove('menu-active');
    menuNav.classList.remove('menu-active');
  });
}
