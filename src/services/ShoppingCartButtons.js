export function handleShoppingCartButton() {
  const { history } = this.props;
  history.push('/shoppingCart');
}

export function handleButtonAddCart(state) {
  const { product: { title, price, id } } = state;
  const productObj = {
    id,
    title,
    price,
  };
  // Verifica se o conteudo dentro de localstorage cartItems é nulo, se sim, isEmpty é true.
  // localStorage.length me causou problemas, se houver qualquer outro valor lá ele acusa como
  // não zero, e a key randid costuma ser gerada lá pelo browser. Zoando a logica anterior.
  const isEmpty = JSON.parse(localStorage.getItem('cartItems')) === null;
  // console.log(isEmpty);
  // Fiz com dois ifs pra ficar melhor a leitura
  if (isEmpty) { // Se isEmpty é true esse bloco executa
    localStorage.setItem('cartItems', JSON.stringify([productObj]));
  }
  if (!isEmpty) { // Se isEmpty for false este bloco excuta
    const prevLocalStorage = JSON.parse(localStorage.getItem('cartItems'));
    const arrayOfProductObj = [...prevLocalStorage, productObj];
    localStorage.setItem('cartItems', JSON.stringify(arrayOfProductObj));
  }
}

export function handleRemoveItemButton(event) {
  const storage = JSON.parse(localStorage.getItem('cartItems'));
  console.log(event);
}
