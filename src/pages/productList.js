import React from 'react';
import { Link } from 'react-router-dom';
import CategoryList from '../components/CategoryList';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class productList extends React.Component {
  constructor() {
    super();
    this.state = {
      categoryList: [],
      // categoryId: '',
      querry: '',
      productResults: [],
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

  handleChange = async ({ target: { value } }) => {
    this.setState({
      querry: value,
    });
  };

  handleClick = async () => {
    const { querry } = this.state;
    const productArray = await getProductsFromCategoryAndQuery('', querry);
    const productResults = productArray.results;
    console.log(productResults);
    this.setState({
      productResults,
    });
  };

  handleClickCategory = async (categoryId) => {
    // const { categoryId } = this.state;
    const productArray = await getProductsFromCategoryAndQuery(categoryId, '');
    const productResults = productArray.results;
    this.setState({
      productResults,
    });
  };

  render() {
    const { categoryList, querry, productResults } = this.state;
    return (
      <div>
        <Link to="/carrinho" data-testid="shopping-cart-button">Carrinho de compras</Link>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CategoryList
          categoryList={ categoryList }
          handleClickCategory={ this.handleClickCategory }
        />

        <label htmlFor="query-input">
          <input
            data-testid="query-input"
            id="query-input"
            type="text"
            value={ querry }
            onChange={ (event) => this.handleChange(event) }
          />
        </label>
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleClick }
        >
          Buscar

        </button>
        <div>
          {productResults.length === 0 && <p>Nenhum produto foi encontrado</p>}
          {
            productResults.map((item) => (
              <div data-testid="product" key={ item.id }>
                <p>{item.title}</p>
                <img src={ item.thumbnail } alt={ item.title } />
                <p>
                  R$:
                  {item.price}
                </p>
                <Link
                  to={ `detalhes/${item.id}` }
                  data-testid="product-detail-link"
                >
                  Detalhes
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default productList;
