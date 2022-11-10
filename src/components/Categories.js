import React, { Component } from 'react';
import { getCategories } from '../services/api';
// componente criado para listar as categorias na home
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
    const { onClickCategories } = this.props;
    return (
      <div>
        {categories.map(({ id, name }) => (
          <button
            data-testid="category"
            type="button"
            key={ id }
            onClick={ onClickCategories }
            id={ id }
          >

            {name}

          </button>
        ))}
      </div>
    );
  }
}

export default Categories;
