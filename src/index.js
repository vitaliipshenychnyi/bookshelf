import {
  mainGallery,
  mainGalleryCategory,
  getCategoriesList,
} from './js/API-main-gallary';
import { createMarkupCategoriesList } from './js/categories-list';
import refs from './js/refs';
import debounce from 'lodash.debounce';
import { onBookCardClick } from './js/modal';
import { onScrollUpClick } from './js/scroll-up';
import { renderRowGallery } from './js/support';
import { icons } from './js/support';
import { changeTheme } from './js/togle-theme';
import { onRollingOutClick } from './js/render-photo-card-footer';
import { onOpenMobileMenu } from './js/mobile-menu';

const listFillingError =
  '<li class="category-list-item"><p class="categories-err">The list of categories is empty</p></li>';

refs.mainGalleryEl.addEventListener('click', onBtnSeeMore);
refs.categoriesList.addEventListener('click', onCategoryClick);
refs.mainGalleryEl.addEventListener('click', onBookCardClick);
refs.scrollUpBtnEl.addEventListener('click', onScrollUpClick);
refs.checkboxEl.addEventListener('change', changeTheme);
refs.groupBtnEl.addEventListener('click', onRollingOutClick);
refs.burgerBtnEl.addEventListener('click', onOpenMobileMenu);

// функціонал зміни теми
changeTheme();

// функціонал, який відслідковує зміни розмірів екрану
mainGallery();
refs.mainGalleryEl.addEventListener('click', onBtnSeeMoreCategory);
window.addEventListener(
  'resize',
  debounce(() => {
    mainGallery();
  }, 200)
);

// функція, яка відслідковує за вибором категорії з переліку категорій
function onBtnSeeMoreCategory(evt) {
  if (evt.target.dataset.cat) {
    mainGalleryCategory(evt.target.dataset.cat);
  }
}

// функція вибору категорії зі списку
function onCategoryClick(evt) {
  const categoryName = evt.target;
  const listOfCategories = [...evt.currentTarget.children];
  if (categoryName.classList.contains('category')) {
    if (categoryName.textContent === 'All categories') {
      removeActive(listOfCategories);
      activateCategory(categoryName);
      mainGallery();
      return;
    } else {
      refs.mainGalleryEl.innerHTML = '';
      mainGalleryCategory(categoryName.textContent);
    }
  }
  if (categoryName.classList.contains('category')) {
    removeActive(listOfCategories);
    activateCategory(categoryName);
  }
}

// функція зміни категорії при натисканні кнопки SeeMore
function onBtnSeeMore(evt) {
  const categName = evt.target.dataset.cat;
  const categList = [...refs.categoriesList.children];
  if (categName) {
    for (let i = 0; i < categList.length; i++) {
      if (categList[i].firstChild.textContent === categName) {
        removeActive(categList);
        activateCategory(categList[i].firstChild);
      }
    }
  }
}

// функція активації категорії
function activateCategory(nameOfCategory) {
  nameOfCategory.parentNode.classList.add('active');
  nameOfCategory.classList.add('category-active');
}

// функція деактивації категорії
function removeActive(categories) {
  for (let i = 0; i < categories.length; i++) {
    if (categories[i].classList.contains('active')) {
      categories[i].classList.remove('active');
      categories[i].firstChild.classList.remove('category-active');
    }
  }
}

// функція відтворення списку категорій
getCategoriesList()
  .then(async resp => {
    const categories = resp.data;
    if (categories.length === 0) {
      refs.categoriesList.innerHTML = listFillingError;
      return;
    }
    const markup =
      `<li class="category-list-item active"><button type="button" aria-label="button all categories" class="category category-active">All categories</button></li>` +
      createMarkupCategoriesList(categories);
    refs.categoriesList.innerHTML = markup;
  })
  .catch(err => {
    refs.categoriesList.innerHTML = listFillingError;
  });

//   функція відтворення посилань в секції Support Ukraine
renderRowGallery(icons);

// !!! функціонал відкриття вікна регістрації
import './js/authentication-service/auth-service';
import './js/authentication-service/auth-form-toggle';
import './js/authentication-service/auth-formdata';
import './js/firebase-service/firebase-service';
