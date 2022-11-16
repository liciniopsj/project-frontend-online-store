import React, { Component } from 'react';
import ProductReview from '../components/ProductReview';

class Checkout extends Component {
  // handleChange({ target }) {
  //   const { name, value } = target;
  //   const targetValue = value;
  //   this.setState({
  //     [name]: targetValue,
  //   });
  // }

  render() {
    return (
      <div>
        <ProductReview />
      </div>
    );
  }
}

export default Checkout;
