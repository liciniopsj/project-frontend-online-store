import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    const { returnProduct } = this.props;
    return (
      <div>
        {categories.map(({ id, name }) => (
          <button
            data-testid="category"
            type="button"
            key={ id }
            onClick={ returnProduct }
            id={ id }
          >

            {name}

          </button>
        ))}
      </div>
    );
  }
}

Categories.propTypes = {
  returnProduct: PropTypes.func.isRequired,
};
export default Categories;
