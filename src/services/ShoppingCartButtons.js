export function handleShoppingCartButton() {
  const { history } = this.props;
  history.push('/shoppingCart');
}

export function handleButtonAddCart() {
  const { product: { title, price } } = this.state;
  if (localStorage.length > 0) {
    const prevLocalStorage = JSON.parse(localStorage.getItem('cartItems'));
    const productObj = {
      title,
      price,
    };
    const arrayOfProductObj = [...prevLocalStorage, productObj];
    localStorage.setItem('cart', JSON.stringify(arrayOfProductObj));
  }
}
