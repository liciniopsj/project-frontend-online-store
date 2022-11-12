import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonToGoCart extends Component {
  render() {
    const { handleShoppingCartButton } = this.props;
    return (
      <button
        type="button"
        onClick={ handleShoppingCartButton }
      >
        Carrinho de Compras
      </button>

    );
  }
}

ButtonToGoCart.propTypes = {
  handleShoppingCartButton: PropTypes.func.isRequired,
};

export default ButtonToGoCart;
