import React, { Component } from 'react';
import CartItemListCard from '../components/CartItemListCard';

class ShoppingCart extends Component {
  state = {
    emptyCart: true,
    cartItems: [],
  };

  componentDidMount() {
    this.getItemsFromLocalStorage();
  }

  handleRemoveItemButton = (event) => {
    // const { cartItems } = this.state;
    const storage = JSON.parse(localStorage.getItem('cartItems'));
    const itemId = event.target.id;
    // console.log(storage);
    // console.log(itemId);
    const filteredStorage = storage.filter((item) => item.id !== itemId);
    localStorage.setItem('cartItems', JSON.stringify(filteredStorage));
    // console.log('filtrado', filteredStorage);
    this.setState({
      cartItems: filteredStorage,
    });
    const isEmpty = filteredStorage.length === 0;
    // console.log(filteredStorage);
    // console.log(filteredStorage.length);
    // console.log(isEmpty);
    if (isEmpty) {
      this.setState({
        emptyCart: true,
      });
    }
  };

  getItemsFromLocalStorage = () => {
    const recoveredCartItems = JSON.parse(localStorage.getItem('cartItems'));
    const isEmpty = recoveredCartItems === null || recoveredCartItems.length === 0;
    if (isEmpty) {
      this.setState({
        emptyCart: true,
      });
    }
    if (!isEmpty) {
      // console.log('bang');
      this.setState((prevState) => ({
        emptyCart: false,
        cartItems: [...prevState.cartItems, ...recoveredCartItems],
      }));
    }
    // console.log(isEmpty);
    // console.log('const cartItems =', recoveredCartItems);
  };

  render() {
    const { emptyCart, cartItems } = this.state;
    // console.log(cartItems);
    return (
      <div>
        {
          emptyCart
            ? (
              <p
                data-testid="shopping-cart-empty-message"
              >
                Seu carrinho está vazio
              </p>)
            : cartItems.map((item, index) => (
              <CartItemListCard
                key={ index }
                id={ item.id }
                title={ item.title }
                price={ item.price }
                handleRemoveItemButton={ this.handleRemoveItemButton }
              />
            ))
        }
      </div>
    );
  }
}

export default ShoppingCart;

// tela carrinho de compras.
