import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Categories from '../components/Categories';

class Home extends Component {
  state = {
    isButtonClick: false,
  };

  buttonClick = () => {
    this.setState({
      isButtonClick: true,
    });
  };

  render() {
    const { isButtonClick } = this.state;
    return (
      <div>
        <span data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
        <Categories />
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
