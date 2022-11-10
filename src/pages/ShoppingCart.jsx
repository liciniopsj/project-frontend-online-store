import React, { Component } from 'react';
// import { getProductById } from '../services/api';

class ShoppingCart extends Component {
  state = {
    emptyCart: true,
  };

getStorage = () => {
  const storage = localStorage.getItem('cartItems');
  console.log(storage);
};

  render() {
    const { emptyCart } = this.state;
    return (
      <div>
        {
          emptyCart
            ? (
              <p
                data-testid="shopping-cart-empty-message"
              >
                Seu carrinho está vazio
              </p>) : null
        }
      </div>
    );
  }
}

export default ShoppingCart;

// tela carrinho de compras.
