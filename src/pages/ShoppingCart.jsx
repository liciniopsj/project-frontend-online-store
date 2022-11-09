import React, { Component } from 'react';

class ShoppingCart extends Component {
  state = {
    emptyCart: true,
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
