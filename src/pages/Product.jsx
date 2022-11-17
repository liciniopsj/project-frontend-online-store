import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductById } from '../services/api';
import { handleButtonAddCart } from '../services/ShoppingCartButtons';
import './Product.css';
import Star from '../components/Star';
import Error from '../components/Error';

const starGrey = { color: 'lightgrey' };
const starYellow = { color: 'yellow' };
const starMax = ['1', '2', '3', '4', '5'];

class Product extends Component {
  state = {
    product: {},
    email: '',
    rating: 0,
    text: '',
    starColored: [
      starGrey,
      starGrey,
      starGrey,
      starGrey,
      starGrey,
    ],
    starClick: false,
    markedStars: false,
    assessments: [],
    validadeForm: false,
    isError: false,
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const product = await getProductById(id);
    const assessments = JSON.parse(localStorage.getItem(id)) || [];
    this.setState({
      product,
      assessments,
    });
  }

  verifyForm = () => {
    this.setState({
    });
    const { email, rating, text } = this.state;
    const validadeForm = email.length > 0
      && rating > 0
      && text.length > 0;

    if (validadeForm) {
      this.setState({ validadeForm: true });
    } else {
      this.setState({ validadeForm: false });
    }
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.verifyForm);
  };

  setLocalStorage = () => {
    const { match: { params: { id } } } = this.props;
    const { email, rating, text, assessments, validadeForm } = this.state;
    const avaliate = {
      email,
      rating,
      text,
    };
    if (validadeForm) {
      localStorage.setItem(id, JSON.stringify([...assessments, avaliate]));
      this.setState((prevState) => ({
        assessments: [...prevState.assessments, avaliate],
        email: '',
        rating: 0,
        text: '',
        isError: false,
        validadeForm: false,
      }));
    } else {
      this.setState({
        isError: true,
        email: '',
        rating: 0,
        text: '',
      });
    }
  };

  colorStar = (index) => {
    this.setState((prevState) => ({
      starColored: prevState.starColored.map((_, indexStars) => (indexStars <= index
        ? starYellow
        : starGrey)),
    }));
  };

  uncolorStar = () => {
    const { rating } = this.state;
    this.setState((prevState) => ({
      starColored: prevState.starColored.map((_, indexStars) => (
        (indexStars + 1) <= rating ? starYellow : starGrey
      )),
    }));
  };

  setHatingStars = (index) => {
    this.setState({
      rating: index + 1,
    }, () => {
      this.setState(
        (prevState) => ({
          starColored: prevState.starColored.map((_, indexStars) => (
            (indexStars + 1) <= prevState.rating ? starYellow : starGrey
          )),
        }),
      );
    });
  };

  render() {
    const {
      product,
      email,
      text,
      starColored,
      rating,
      assessments,
      isError,
    } = this.state;

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
              { starMax.map((star, index) => (
                <Star
                  key={ star }
                  id={ star }
                  style={ starColored[index] }
                  onMouseOver={ () => this.colorStar(index) }
                  onMouseOut={ this.uncolorStar }
                  onClick={ () => this.setHatingStars(index) }
                />
              )) }
              <p>
                { rating }
              </p>
            </div>

            <input
              type="textarea"
              name="text"
              placeholder="Mensagem (opcional)"
              data-testid="product-detail-evaluation"
              onChange={ this.onInputChange }
              value={ text }
            />

            { isError ? <Error data-testid="error-msg" /> : null }

            <div>
              <button
                type="button"
                data-testid="submit-review-btn"
                onClick={ this.setLocalStorage }
              >
                Avaliar produto!
              </button>
            </div>
          </form>

        </section>
        <section>
          { assessments.map((avaliate) => (
            <div key={ avaliate.email }>
              <ul>
                <li data-testid="review-card-email">{ avaliate.email }</li>
                <li data-testid="review-card-rating">{ avaliate.rating }</li>
                <li data-testid="review-card-evaluation">{ avaliate.text }</li>
              </ul>
            </div>
          )) }
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
