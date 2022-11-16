import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductById } from '../services/api';
import { handleButtonAddCart } from '../services/ShoppingCartButtons';
import './Product.css';
import Star from '../components/Star';

const starGrey = { color: 'lightgrey' };
const starYellow = { color: 'yellow' };

class Product extends Component {
  state = {
    product: {},
    email: '',
    hating: 0,
    text: '',
    star1: starGrey,
    star2: starGrey,
    star3: starGrey,
    star4: starGrey,
    star5: starGrey,
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const product = await getProductById(id);
    // console.log(product);

    this.setState({
      product,
    });
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  colorStar = ({ target }) => {
    const { id } = target;
    for (let i = 1; i <= id; i += 1) {
      this.setState({
        [`star${i}`]: starYellow,
      });
    }
  };

  uncolorStar = ({ target }) => {
    const { id } = target;
    for (let i = 1; i <= id; i += 1) {
      this.setState({
        [`star${i}`]: starGrey,
      });
    }
  };

  setHatingStars = ({ target }) => {
    const { id } = target;
    for (let i = 1; i <= id; i += 1) {
      this.setState({
        [`star${i}`]: starYellow,
        hating: i,
      });
    }
  };

  render() {
    const { product, email, text, star1, star2, star3, star4, star5 } = this.state;
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
        <section>
          <h3>Avaliações:</h3>
          <form>
            <input
              type="text"
              name="email"
              placeholder="email"
              data-testid="product-detail-email"
              onChange={ this.onInputChange }
              value={ email }
            />

            <div>
              <Star
                id="1"
                style={ star1 }
                onMouseOver={ this.colorStar }
                onMouseOut={ this.uncolorStar }
                onClick={ this.setHatingStars }
              />
              <Star
                id="2"
                style={ star2 }
                onMouseOver={ this.colorStar }
                onMouseOut={ this.uncolorStar }
                onClick={ this.setHatingStars }
              />
              <Star
                id="3"
                style={ star3 }
                onMouseOver={ this.colorStar }
                onMouseOut={ this.uncolorStar }
                onClick={ this.setHatingStars }
              />
              <Star
                id="4"
                style={ star4 }
                onMouseOver={ this.colorStar }
                onMouseOut={ this.uncolorStar }
                onClick={ this.setHatingStars }
              />
              <Star
                id="5"
                style={ star5 }
                onMouseOver={ this.colorStar }
                onMouseOut={ this.uncolorStar }
                onClick={ this.setHatingStars }
              />
            </div>

            <input
              type="textarea"
              name="text"
              placeholder="Mensagem (opcional)"
              data-testid="product-detail-evaluation"
              onChange={ this.onInputChange }
              value={ text }
            />

            <button
              type="submit"
              data-testid="submit-review-btn"
            >
              Avaliar produto!
            </button>

          </form>

        </section>
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
