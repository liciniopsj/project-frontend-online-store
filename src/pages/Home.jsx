import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import Categories from '../components/Categories';
import { getProductById, getProductFromQuery, getProductsFromCategory } from '../services/api';
import ProductCard from '../components/ProductCard';
import { handleButtonAddCart } from '../services/ShoppingCartButtons';

class Home extends Component {
  state = {
    isButtonClick: false,
    inputQuery: '',
    queryResult: [],
    notFound: false,
  };

  // Redireciona para shoppingcart
  buttonClick = () => {
    this.setState({
      isButtonClick: true,
    });
  };

  handleQueryButton = async (query) => {
    const queryResultComplete = await getProductFromQuery(query);
    const queryResult = await queryResultComplete.results;
    // console.log(queryResult);
    this.setState({
      queryResult,
      notFound: queryResult.length === 0,
    });
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  onClickCategories = async (event) => {
    const { id } = event.target;
    const { results } = await getProductsFromCategory(id);
    // console.log(results);
    this.setState({
      queryResult: results,
    });
    // console.log(queryResult);
  };

  getSavedCartItems = (event) => {
    const { id } = event.target;
    // console.log(event.target);
    const product = JSON.parse(id);
    this.setState({
      product,
    });
    handleButtonAddCart(this.state);
    const { history } = this.props;
    history.push('/shoppingCart');
  };

  render() {
    const { inputQuery,
      queryResult, isButtonClick,
      notFound } = this.state;
    const msgProductNotFound = 'Nenhum produto foi encontrado';
    return (
      <div>
        <Categories
          returnProduct={ this.onClickCategories }
        />
        <section>
          <input
            data-testid="query-input"
            name="inputQuery"
            type="text"
            onChange={ this.onInputChange }
            value={ inputQuery }
          />
          <button
            data-testid="query-button"
            type="submit"
            onClick={ () => this.handleQueryButton(inputQuery) }
          >
            Buscar
          </button>
        </section>

        <section>

          { queryResult.length === 0
            ? (
              <span data-testid="home-initial-message">
                { notFound
                  ? msgProductNotFound
                  : 'Digite algum termo de pesquisa ou escolha uma categoria.' }
              </span>)
            : queryResult.map((item) => (
              <div key={ item.id }>
                <ProductCard
                  id={ item.id }
                  title={ item.title }
                  price={ item.price }
                  thumbnail={ item.thumbnail }
                />
                <button
                  type="button"
                  data-testid="product-add-to-cart"
                  onClick={ this.getSavedCartItems }
                  id={ JSON.stringify(item) }
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            ))}
        </section>
        <button
          type="button"
          data-testid="shopping-cart-button"
          onClick={ this.buttonClick }
        >
          Carrinho de Compras
        </button>
        {
          isButtonClick ? <Redirect to="/shoppingCart" /> : null
        }
      </div>
    );
  }
}

export default Home;
