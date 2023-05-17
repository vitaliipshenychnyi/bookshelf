import refs from './refs';
import throttle from 'lodash.throttle';

window.addEventListener('scroll', throttle(showScrollUpButton, 1000));

// функція зчитування координат при скролі
export function onScrollUpClick() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}

// функція, яка відповідає за показування або скривання кнопки повернення на початок
function showScrollUpButton(evt) {
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  scrollY > 3000 ? showScrollUpBtn() : hideScrollUpBtn();
}

// функція, яка скриває кнопку повернення на початок
function hideScrollUpBtn() {
  refs.scrollUpBtnEl.classList.add('is-hidden');
}

// функція, яка показує кнопку повернення на початок
function showScrollUpBtn() {
  refs.scrollUpBtnEl.classList.remove('is-hidden');
}
