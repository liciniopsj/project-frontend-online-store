import React, { Component } from 'react';
import { getProductFromQuery } from '../services/api';

class Home extends Component {
  state = {
    inputQuery: '',
    queryResult: [],
  };

  handleQueryButton = async (query) => {
    const queryResultComplete = await getProductFromQuery(query);
    const queryResult = await queryResultComplete.results;
    console.log(queryResult);
    this.setState({
      queryResult,
    });
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { inputQuery, queryResult } = this.state;
    return (
      <div>
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
                Nenhum produto foi encontrado
              </span>)
            : queryResult.map((item) => (
              <div data-testid="product" key={ item.id }>
                <h3>{item.title}</h3>
                <img src={ item.thumbnail } alt={ item.title } />
                <h2>{ item.price }</h2>
              </div>
            )) }
        </section>
      </div>
    );
  }
}

export default Home;
