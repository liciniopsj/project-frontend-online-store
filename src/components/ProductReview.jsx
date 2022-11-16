import React, { Component } from 'react';

class ProductReview extends Component {
  state = {
    cartItems: [],
    totalPrice: 0,
  };

  componentDidMount() {
    this.getItemsFromLocalStorage();
    this.getTotalPrice();
  }

  getTotalPrice = () => {
    const recoveredCartItems = JSON.parse(localStorage.getItem('cartItems'));
    const total = recoveredCartItems.reduce((acum, item) => {
      acum += item.price;
      return acum;
    }, 0);
    this.setState({
      totalPrice: total,
    });
  };

  getItemsFromLocalStorage = () => {
    const recoveredCartItems = JSON.parse(localStorage.getItem('cartItems'));
    this.setState({
      cartItems: recoveredCartItems,
    });
  };

  render() {
    const { cartItems, totalPrice } = this.state;
    return (
      <div>
        <h4>Revise seus produtos</h4>
        <br />
        {cartItems.map((item) => (
          <p key={ item.id }>{`${item.title} R$ ${item.price}`}</p>
        ))}
        <span>{`Total à Pagar: R$ ${totalPrice}`}</span>
      </div>
    );
  }
}

export default ProductReview;
