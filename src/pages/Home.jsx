import React, { Component } from 'react';
import { getProductFromQuery } from '../services/api';

class Home extends Component {
  state = {
    inputQuery: '',
  };

  handleQueryButton = async (query) => {
    const queryResult = await getProductFromQuery(query);
    this.setState({
      queryResult,
    });
  };

  render() {
    const { inputQuery, queryResult } = this.state;
    return (
      <div>
        <input data-testid="query-input" type="text" />
        <button
          data-testid="query-button"
          type="submit"
          onClick={ () => this.handleQueryButton(inputQuery) }
        >
          Buscar
        </button>
      </div>
    );
  }
}

export default Home;
