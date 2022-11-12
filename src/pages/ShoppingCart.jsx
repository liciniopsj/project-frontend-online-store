import React, { Component } from 'react';
import CartItemListCard from '../components/CartItem';
import { bttClickIncrement, bttClickDecremented } from '../services/CounterBtt';

class ShoppingCart extends Component {
  state = {
    emptyCart: true,
    cartItems: [],
    counter: 1,
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

  bttCounterInc = () => {
    const { counter } = this.state;
    const counterInc = bttClickIncrement(counter);
    this.setState({
      counter: counterInc,
    });
    if (counter === 0) this.setState({ counter: 1 });
  };

  bttCounterDec = () => {
    const { counter } = this.state;
    const isOne = counter === 1;
    if (!isOne) {
      const counterDec = bttClickDecremented(counter);
      this.setState({
        counter: counterDec,
      });
    }
    // if (counter === 0) this.setState({ counter: 1 });
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
            : cartItems.map((item) => (
              <CartItemListCard
                key={ item.id }
                id={ item.id }
                title={ item.title }
                price={ item.price }
                handleRemoveItemButton={ this.handleRemoveItemButton }
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
