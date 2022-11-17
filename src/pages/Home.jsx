import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Categories from '../components/Categories';
import { getProductFromQuery, getProductsFromCategory } from '../services/api';
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

  getSavedCartItems = (item) => {
    this.setState({
      product: item,
    }, () => handleButtonAddCart(this.state));
  };

  render() {
    const { inputQuery,
      queryResult, isButtonClick,
      notFound } = this.state;
    // const msgProductNotFound = 'Nenhum produto foi encontrado'; Uso dessa constante
    // no lugar de mensagem no span home-initial-message causou problemas no avaliador
    // do github, talvez seja o nome. De qualquer forma, coloquei uma string diretamente lá
    // na linha 84 e tornei essa variavel obsoleta.
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
                  ? 'Nenhum produto foi encontrado'
                  : 'Digite algum termo de pesquisa ou escolha uma categoria.' }
              </span>)
            : queryResult.map((item) => (
              <div key={ item.id }>
                <ProductCard
                  id={ item.id }
                  title={ item.title }
                  price={ item.price }
                  thumbnail={ item.thumbnail }
                  shipping={ item.shipping.free_shipping }
                />
                <button
                  type="button"
                  data-testid="product-add-to-cart"
                  onClick={ () => this.getSavedCartItems(item) }
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
