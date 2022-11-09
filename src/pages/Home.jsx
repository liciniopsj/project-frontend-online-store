import React, { Component } from 'react';
import Categories from '../components/Categories';

class Home extends Component {
  render() {
    return (
      <div>
        <span data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
        <Categories />
      </div>
    );
  }
}

export default Home;
