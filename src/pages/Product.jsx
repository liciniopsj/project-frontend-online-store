import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductById } from '../services/api';

class Product extends Component {
  state = {
    product: {},
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const product = await getProductById(id);

    this.setState({
      product,
    });
  }

  render() {
    const { product } = this.state;
    return (
      <div>
        <h2 data-testid="product-detail-name">{ product.title }</h2>
        <h2 data-testid="product-detail-price">{ `R$: ${product.price}` }</h2>
        <img
          data-testid="product-detail-image"
          src={ product.thumbnail }
          alt={ product.title }
        />

        {/* Ideia de melhoria, ao invés de renderizar a thumbnail, renderizar as imagens
        { pictures.map((pic) => (
          <img
            key={ pic.id }
            data-testid="product-detail-image"
            src={ pic.url }
            alt={ product.title }
          />
        )) } */}
        <Link to="/shoppingCart" data-testid="shopping-cart-button">
          <button type="submit">
            Adicionar ao carrinho
          </button>
        </Link>
      </div>
    );
  }
}

Product.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;

export default Product;
