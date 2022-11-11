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
    const storage = JSON.parse(localStorage.getItem('cartItems'));
    this.setState({
      productId: storage,
      emptyCart: false,
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
              </p>) : productId.map((muria) => (
              <div
              key={ muria.id }
              >
                <p data-testid="shopping-cart-product-name">{ muria.title }</p>
                <span data-testid="shopping-cart-product-quantity">1</span>
              </div>
              ))
        }
      </div>
    );
  }
}

export default ShoppingCart;

// tela carrinho de compras.
