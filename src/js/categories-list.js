// функція створення списку категорій у сайдбарі
export function createMarkupCategoriesList(categories) {
  return categories
    .map(
      ({ list_name }) =>
        `<li class="category-list-item"><button type="button" class="category" aria-label="button categories book">${list_name}</button></li>`
    )
    .join('');
}
