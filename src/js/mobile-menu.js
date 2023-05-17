import refs from './refs';
export function onOpenMobileMenu(evt) {
  if (refs.iconCloseMobileMenuEl.classList.contains('is-hidden')) {
    showMobileMenu();
    refs.iconOpenMobileMenuEl.classList.add('is-hidden');
    refs.iconCloseMobileMenuEl.classList.remove('is-hidden');
  } else {
    hideMobileMenu();
    refs.iconOpenMobileMenuEl.classList.remove('is-hidden');
    refs.iconCloseMobileMenuEl.classList.add('is-hidden');
  }
}

function showMobileMenu() {
  refs.mobileDivEl.classList.remove('is-hidden-modal');
}
function hideMobileMenu() {
  refs.mobileDivEl.classList.add('is-hidden-modal');
}
