import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class cartItemListCard extends Component {
  render() {
    const { tittle, price } = this.props;
    return (
      <div>
        <button type="button">Excluir Item</button>
        <span>{tittle}</span>
        {' '}
        <span>{`R$${price}`}</span>
      </div>
    );
  }
}

cartItemListCard.propTypes = {
  tittle: PropTypes.string,
  price: PropTypes.string,
}.isRequired;
