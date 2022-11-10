// função que pega as categorias da api.

export async function getCategories() {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const result = await response.json();
  return result;
}

// função que busca itens dentro de uma categoria específica.
export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const response = await fetch(url);
  const result = await response.json();
  return result;
}

// função que busca um produto na API através de um id.
export async function getProductById(productId) {
  const url = `https://api.mercadolibre.com/items/${productId}`;
  const response = await fetch(url);
  const result = await response.json();
  return result;
}

// função que busca todos os produtos da API atravpesde um termo.
export async function getProductFromQuery(query) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const response = await fetch(url);
  const result = await response.json();
  return result;
}

//  função que busca itens por categoria.
export async function getProductsFromCategory(categoryId) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  const response = await fetch(url);
  const result = await response.json();
  return result;
}
