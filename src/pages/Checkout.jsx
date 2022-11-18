import React, { Component } from 'react';
import Clientform from '../components/Clientform';
import ProductReview from '../components/ProductReview';

class Checkout extends Component {
  state = {
    checkoutFullName: '',
    checkoutEmail: '',
    checkoutCpf: '',
    checkoutTelephone: '',
    checkoutCep: '',
    checkoutAddress: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    const targetValue = value;
    this.setState({
      [name]: targetValue,
    });
  };

  render() {
    const { checkoutFullName,
      checkoutEmail,
      checkoutCpf,
      checkoutTelephone,
      checkoutCep,
      checkoutAddress } = this.state;
    return (
      <div>
        <Clientform
          handleChange={ this.handleChange }
          checkoutFullName={ checkoutFullName }
          checkoutEmail={ checkoutEmail }
          checkoutCpf={ checkoutCpf }
          checkoutTelephone={ checkoutTelephone }
          checkoutCep={ checkoutCep }
          checkoutAddress={ checkoutAddress }
        />
        <ProductReview />
      </div>

    );
  }
}

export default Checkout;
