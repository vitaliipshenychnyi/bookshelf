import refs from './refs';

// перевіряємо, чи була вже встановлена попередня тема
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.body.classList.add(savedTheme);
  refs.checkboxEl.checked = savedTheme === 'dark'; // відмічаємо чекбокс, якщо вибрана темна тема
}

// функція змін теми
export function changeTheme() {
  if (refs.checkboxEl.checked) {
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}
