import React from 'react';
import { Link } from 'react-router-dom';
import CategoryList from '../components/CategoryList';
import { getCategories } from '../services/api';

class productList extends React.Component {
  constructor() {
    super();
    this.state = {
      categoryList: [],
    };
  }

  componentDidMount() {
    this.getProductsCategories();
  }

  getProductsCategories = async () => {
    const categoryArray = await getCategories();
    this.setState({
      categoryList: categoryArray,
    });
  };

  render() {
    const { categoryList } = this.state;
    return (
      <div>
        <Link to="/carrinho" data-testid="shopping-cart-button">Carrinho de compras</Link>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CategoryList categoryList={ categoryList } />
      </div>
    );
  }
}

export default productList;
