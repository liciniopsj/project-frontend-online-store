import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Shipping from './Shipping';

class ProductCard extends Component {
  render() {
    const { id, title, price, thumbnail, shipping } = this.props;
    return (
      <Link
        to={ `/product/${id}` }
        data-testid="product-detail-link"
        key={ id }
      >
        <div data-testid="product">
          <h3>{title}</h3>
          <img src={ thumbnail } alt={ title } />
          <h2>{ `R$${+price}` }</h2>
          { shipping ? <Shipping /> : null }
        </div>
      </Link>
    );
  }
}

export default ProductCard;
ProductCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  thumbnail: PropTypes.string,
}.isRequired;
