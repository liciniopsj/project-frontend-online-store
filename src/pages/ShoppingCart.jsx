import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import CartItemListCard from '../components/CartItem';

class ShoppingCart extends Component {
  state = {
    isButtonClicked: false,
    emptyCart: true,
    cartItems: [],
    counter: 1,
  };

  componentDidMount() {
    this.getItemsFromLocalStorage();
  }

  handleRemoveItemButton = (event) => {
    const storage = JSON.parse(localStorage.getItem('cartItems'));
    const itemId = event.target.id;
    const filteredStorage = storage.filter((item) => item.id !== itemId);
    localStorage.setItem('cartItems', JSON.stringify(filteredStorage));
    this.setState({
      cartItems: filteredStorage,
    });
    const isEmpty = filteredStorage.length === 0;
    if (isEmpty) {
      this.setState({
        emptyCart: true,
      });
    }
  };

  bttCounterInc = (ID) => {
    const storage = JSON.parse(localStorage.getItem('cartItems'));
    const changedArry = storage.map((item) => {
      if (item.id === ID) {
        let xablau = item.quantity;
        xablau += 1;
        return { ...item, quantity: xablau };
      }
      return item;
    });
    localStorage.setItem('cartItems', JSON.stringify(changedArry));
    this.setState({
      cartItems: changedArry,
    });
  };

  bttCounterDec = (ID) => {
    const storage = JSON.parse(localStorage.getItem('cartItems'));
    const changedArry = storage.map((item) => {
      if (item.id === ID) {
        let xablau = item.quantity;
        if (xablau !== 1) xablau -= 1;
        return { ...item, quantity: xablau };
      }
      return item;
    });
    localStorage.setItem('cartItems', JSON.stringify(changedArry));
    this.setState({
      cartItems: changedArry,
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
      this.setState((prevState) => ({
        emptyCart: false,
        cartItems: [...prevState.cartItems, ...recoveredCartItems],
      }));
    }
  };

  redirectCheckoutButton = () => {
    this.setState({
      isButtonClicked: true,
    });
  };

  render() {
    const { emptyCart, cartItems, counter, isButtonClicked } = this.state;

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
                counterInc={ () => this.bttCounterInc(item.id) }
                counterDec={ () => this.bttCounterDec(item.id) }
                counter={ counter }
                quantity={ item.quantity }
              />
            ))
        }
        <button
          type="button"
          data-testid="checkout-products"
          onClick={ this.redirectCheckoutButton }
        >
          Finalizar Compra
        </button>
        {
          isButtonClicked ? <Redirect to="/checkout" /> : null
        }
      </div>
    );
  }
}

export default ShoppingCart;

// tela carrinho de compras.
