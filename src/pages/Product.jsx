import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductById } from '../services/api';
import { handleButtonAddCart } from '../services/ShoppingCartButtons';
import Loading from '../components/Loading';

class Product extends Component {
  state = {
    product: {},
    isLoading: true,
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const product = await getProductById(id);

    this.setState({
      product,
    }, () => {
      this.setState({
        isLoading: false,
      });
    });
  }

  render() {
    const { product, isLoading } = this.state;
    const { pictures, price, attributes } = product;
    const priceBr = String(price).replace('.', ',');
    console.log(product);
    return (
      <div>
        { isLoading ? <Loading /> : (
          <div>
            <div>
              <h2 data-testid="product-detail-name">{ product.title }</h2>
              <h2 data-testid="product-detail-price">{ `R$: ${priceBr}` }</h2>
              <div>
                { pictures.map((pic) => (
                  <img
                    key={ pic.id }
                    data-testid="product-detail-image"
                    src={ pic.url }
                    alt={ product.title }
                  />
                )) }
              </div>
              <div>
                <ul>
                  { attributes.map((atributte) => (
                    <li key={ atributte.id }>
                      { `${atributte.name}: ${atributte.value_name}` }
                    </li>
                  )) }
                </ul>
              </div>
            </div>
            <Link to="/shoppingCart">
              <button
                type="submit"
                data-testid="shopping-cart-button"
              >
                Meu carrinho
              </button>
            </Link>
            <button
              data-testid="product-detail-add-to-cart"
              type="button"
              onClick={ () => handleButtonAddCart(this.state) }
            >
              Adicionar ao carrinho
            </button>
          </div>
        ) }
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
