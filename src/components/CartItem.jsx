import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItemListCard extends Component {
  render() {
    const {
      title,
      price,
      counterInc,
      counterDec,
      counter,
      id,
      handleRemoveItemButton } = this.props;
    return (
      <>
        <div>
          <button
            type="button"
            id={ id }
            onClick={ handleRemoveItemButton }
            data-testid="remove-product"
          >
            Excluir Item
          </button>
          {' '}
          <span data-testid="shopping-cart-product-name">{title}</span>
          {' '}
          <span>{`R$${price}`}</span>
          {'  '}
          <span>Quantidade: </span>
          <span data-testid="shopping-cart-product-quantity">
            { counter }
          </span>
        </div>
        <div>
          <button
            type="button"
            onClick={ counterInc }
            data-testid="product-increase-quantity"
          >
            +
          </button>
          <button
            type="button"
            onClick={ counterDec }
            data-testid="product-decrease-quantity"
          >
            -
          </button>
        </div>
      </>
    );
  }
}
export default CartItemListCard;

CartItemListCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  counterInc: PropTypes.number,
  counterDec: PropTypes.number,
}.isRequired;
