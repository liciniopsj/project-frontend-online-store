import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Clientform from '../components/Clientform';
import ProductReview from '../components/ProductReview';

class Checkout extends Component {
  state = {
    checkoutFullName: '',
    // enableButton: false,
    checkoutEmail: '',
    checkoutCpf: '',
    checkoutTelephone: '',
    checkoutCep: '',
    paymentMethod: '',
    checkoutAddress: '',
    checkoutErrorMsg: false,
  };

  onValueChange = (event) => {
    this.setState({
      paymentMethod: event.target.value,
    }, this.inputLenghtVerification);
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    const targetValue = value;
    this.setState({
      [name]: targetValue,
    // });
    }, this.inputLenghtVerification);
  };

  inputLenghtVerification = () => {
    const {
      checkoutFullName,
      checkoutEmail,
      checkoutCpf,
      checkoutTelephone,
      checkoutCep,
      paymentMethod,
      checkoutAddress } = this.state;

    const fullNameCheck = checkoutFullName.length !== 0;
    const emailCheck = checkoutEmail.length !== 0;
    const checkoutCpfCheck = checkoutCpf.length !== 0;
    const checkoutTelephoneCheck = checkoutTelephone.length !== 0;
    const checkoutCepCheck = checkoutCep.length !== 0;
    const checkoutAddressCheck = checkoutAddress.length !== 0;
    const paymentMethodCheck = paymentMethod.length !== 0;
    const inputsFlag = fullNameCheck
    && emailCheck
    && paymentMethodCheck
    && checkoutCpfCheck
    && checkoutTelephoneCheck
    && checkoutCepCheck
    && checkoutAddressCheck;

    // console.log('inputsflag', inputsFlag);
    // console.log('paymentMethodCheck', paymentMethodCheck);
    // console.log('paymentMethod', paymentMethod);

    if (inputsFlag) {
      this.setState({
        // enableButton: true,
        checkoutErrorMsg: false,
      });
    } else {
      this.setState({
        // enableButton: false,
        checkoutErrorMsg: true,
      });
    }

    return inputsFlag;
  };

  handleCheckoutFormButton = () => {
    const { history } = this.props;
    const isValid = this.inputLenghtVerification();
    if (isValid) {
      this.setState({
        checkoutFullName: '',
        enableButton: false,
        checkoutEmail: '',
        checkoutCpf: '',
        checkoutTelephone: '',
        checkoutCep: '',
        checkoutAddress: '',
        paymentMethod: '',
      });
      localStorage.setItem('cartItems', '[]');
      history.push('/');
    }
  };

  render() {
    const { checkoutFullName,
      checkoutEmail,
      checkoutCpf,
      checkoutTelephone,
      checkoutCep,
      enableButton,
      checkoutErrorMsg,
      paymentMethod,
      checkoutAddress } = this.state;
    return (
      <div>
        <ProductReview />
        <Clientform
          handleChange={ this.handleChange }
          checkoutFullName={ checkoutFullName }
          checkoutEmail={ checkoutEmail }
          checkoutCpf={ checkoutCpf }
          checkoutTelephone={ checkoutTelephone }
          checkoutCep={ checkoutCep }
          checkoutAddress={ checkoutAddress }
          handleCheckoutFormButton={ this.handleCheckoutFormButton }
          enableButton={ enableButton }
          checkoutErrorMsg={ checkoutErrorMsg }
          onValueChange={ this.onValueChange }
          paymentMethod={ paymentMethod }
        />
      </div>

    );
  }
}

export default Checkout;

Checkout.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;
