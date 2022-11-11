import React, { Component } from 'react';
import CartItemListCard from '../components/CartItemListCard';
import { bttClickIncrement, bttClickDecremented } from '../services/CounterBtt';

class ShoppingCart extends Component {
  state = {
    emptyCart: true,
    cartItems: [],
    counter: 0,
  };

  componentDidMount() {
    this.getItemsFromLocalStorage();
  }

  bttCounterInc = () => {
    const { counter } = this.state;
    const counterInc = bttClickIncrement(counter);
    this.setState({
      counter: counterInc,
    });
    // const counterDec = bttClickDecremented(counter);
  };

  bttCounterDec = () => {
    const { counter } = this.state;
    const counterDec = bttClickDecremented(counter);
    this.setState({
      counter: counterDec,
    });
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
    const { emptyCart, cartItems, counter } = this.state;
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
                title={ item.title }
                price={ item.price }
                counterInc={ this.bttCounterInc }
                counterDec={ this.bttCounterDec }
                counter={ counter }
              />
            ))
        }
      </div>
    );
  }
}

export default ShoppingCart;

// tela carrinho de compras.
