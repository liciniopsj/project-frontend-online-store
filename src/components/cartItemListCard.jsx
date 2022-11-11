import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItemListCard extends Component {
  render() {
    const { title, price } = this.props;
    return (
      <div>
        <button type="button">Excluir Item</button>
        <span>{title}</span>
        {' '}
        <span>{`R$${price}`}</span>
        {'  '}
        <span>Quantidade: </span>
        <span data-testid="shopping-cart-product-quantity">1</span>
      </div>
    );
  }
}

export default CartItemListCard;

CartItemListCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
}.isRequired;
