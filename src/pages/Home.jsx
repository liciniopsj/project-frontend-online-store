import React, { Component } from 'react';

class Home extends Component {
  state = {

  };

  render() {
    return (
      <div>
        <input data-testid="query-input" type="text" />
        <button data-testid="query-button" type="submit">Buscar</button>
      </div>
    );
  }
}

export default Home;
