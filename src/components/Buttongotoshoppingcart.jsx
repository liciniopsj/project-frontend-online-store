import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Buttongotoshoppingcart extends Component {
  handleShoppingCartButton = () => {
    const { history } = this.props;
    history.push('/shoppingCart');
    console.log(history);
  };

  render() {
    return (
      <button
        type="submit"
        onClick={ this.handleShoppingCartButton }
      >
        Carrinho de Compras
      </button>

    );
  }
}

Buttongotoshoppingcart.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Buttongotoshoppingcart;
