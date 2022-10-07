export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(url);
  const arrayCategories = await response.json();
  // console.log(arrayCategories);
  return arrayCategories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (categoryId === undefined) {
    categoryId = '';
  }
  if (query === undefined) {
    query = '';
  }
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const response = await fetch(url);
  const arrayProdutos = await response.json();
  return arrayProdutos;
}

export async function getProductById() {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
