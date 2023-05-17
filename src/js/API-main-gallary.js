import axios from 'axios';
import { renderGallery, renderGalleryCat } from './render-main-gallery';
import refs from './refs';

const BASE_URL = 'https://books-backend.p.goit.global/books/';

// функція отримання даних по топовим книгам
export async function mainGallery() {
  try {
    const response = await axios.get(`${BASE_URL}top-books`);
    renderGallery(response.data);
    refs.spinnerEl.setAttribute('hidden', true); // вимикає spiner
  } catch (error) {
    console.log(error);
  }
}

// функція отримання даних по книгам певної категорії
export async function mainGalleryCategory(cat) {
  try {
    refs.spinnerEl.removeAttribute('hidden'); // вмикає spiner
    const response = await axios.get(`${BASE_URL}category?category=${cat}`);
    renderGalleryCat(response.data, cat);
    refs.spinnerEl.setAttribute('hidden', true); // вимикає spiner
  } catch (error) {
    console.log(error);
  }
}

// функція отримання списку категорій
export async function getCategoriesList() {
  return await axios.get(`${BASE_URL}category-list`);
}

// функція отримання розширених даних книги
async function getDataBook(idBook) {
  try {
    const response = await axios.get(
      `https://books-backend.p.goit.global/books/${idBook}`
    );
    renderBookCard(response.data);
    objectBook(response.data);
  } catch (error) {
    console.log(error);
  }
}
