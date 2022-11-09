import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <span data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
        <button type="button" data-testid="shopping-cart-button"> Carrinho de Compras </button>
      </div>
    );
  }
}

export default Home;
