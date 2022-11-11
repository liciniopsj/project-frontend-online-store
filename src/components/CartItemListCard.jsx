import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItemListCard extends Component {
  render() {
    const { tittle, price, counterInc, counterDec, counter } = this.props;
    return (
      <>
        <div>
          <button type="button">Excluir Item</button>
          <span>{tittle}</span>
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
          >
            +
          </button>
          <button
            type="button"
            onClick={ counterDec }
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
  tittle: PropTypes.string,
  price: PropTypes.string,
  counterInc: PropTypes.number,
  counterDec: PropTypes.number,
}.isRequired;
