import React, { Component } from 'react';
// import { getProductById } from '../services/api';

class ShoppingCart extends Component {
  state = {
    emptyCart: true,
    productId: '',
  };

  componentDidMount() {
    this.getStorage();
  }

  getStorage = () => {
    const storage = localStorage.getItem('cartItems');
    // const product = JSON.parse(storage);
    this.setState({
      productId: storage,
    });
  };

  render() {
    const { emptyCart, productId } = this.state;
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
        {
          productId ? <p data-testid="shopping-cart-product-name">{ productId }</p> : null
        }
      </div>
    );
  }
}

export default ShoppingCart;

// tela carrinho de compras.
