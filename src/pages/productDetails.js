import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductById } from '../services/api';

class productDetails extends React.Component {
  state = {
    productObject: {},
  };

  componentDidMount() {
    const { match } = this.props;
    const { productId } = match.params;
    getProductById(productId)
      .then((productObject) => {
        this.setState({
          productObject,
        });
      });
  }

  render() {
    const { productObject } = this.state;
    const { title, thumbnail, price } = productObject;
    return (
      <div>
        <p data-testid="product-detail-name">{ title }</p>
        <p data-testid="product-detail-price">{ `R$ ${price}` }</p>
        <img data-testid="product-detail-image" src={ thumbnail } alt={ title } />
        <Link to="/carrinho" data-testid="shopping-cart-button">Carrinho de compras</Link>
      </div>
    );
  }
}

productDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      productId: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default productDetails;
