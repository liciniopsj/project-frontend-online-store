import React, { Component } from 'react';
import { getCategories } from '../services/api';

class Categories extends Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    this.fecth();
  }

  fecth = async () => {
    const categoriesApi = await getCategories();
    this.setState({
      categories: categoriesApi,
    });
    return categoriesApi;
  };

  render() {
    const { categories } = this.state;
    return (
      <div>
        {categories.map(({ id, name }) => (
          <button
            data-testid="category"
            type="button"
            key={ id }
          >

            {name}

          </button>
        ))}
      </div>
    );
  }
}

export default Categories;
