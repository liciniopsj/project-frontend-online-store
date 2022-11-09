import React, { Component } from 'react';

class ShoppinCart extends Component {
  state = {
    emptyCart: true,
  };

  render() {
    const { emptyCart } = this.state;
    return (
      <div>
        {
          emptyCart
          && <p data-testid="shopping-cart-empty-message"> Seu carrinho está vazio </p>
        }
      </div>
    );
  }
}

export default ShoppinCart;

// tela carrinho de compras.
