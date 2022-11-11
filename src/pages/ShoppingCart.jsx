import React, { Component } from 'react';

class ShoppingCart extends Component {
  state = {
    emptyCart: true,
    cartItems: [],
  };

  componentDidMount() {
    this.getItemsFromLocalStorage();
  }

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
              <div key={ index }>
                <span data-testid="shopping-cart-product-name">{item.title}</span>
                {' '}
                <span>{`R$ ${item.price}`}</span>
                {'  '}
                <span>Quantidade: </span>
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
