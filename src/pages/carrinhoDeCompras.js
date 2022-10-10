import React from 'react';

class carrinhoDeCompras extends React.Component {
  constructor() {
    super();
    this.state = {
      cartList: [],
      length: false,
    };
  }

  componentDidMount() {
    this.getCartItems();
  }

  getCartItems = async () => {
    if (localStorage.getItem('cartItems')) {
      const getLocal = localStorage.getItem('cartItems');
      const cartLista = await JSON.parse(getLocal);
      this.setState({
        cartList: cartLista,
        length: true,
      });
    }
  };

  render() {
    const { cartList, length } = this.state;
    return (
      <div>
        {length === false
          ? (<p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>)
          : (
            <div>
              {
                cartList.map((item) => (
                  <div key={ item.id }>
                    <p data-testid="shopping-cart-product-name">{item.title}</p>
                    <img src={ item.thumbnail } alt={ item.title } />
                    <p>{item.price}</p>
                    <p
                      data-testid="shopping-cart-product-quantity"
                    >
                      { `Quantidade: ${item.quantity}` }
                    </p>
                  </div>
                ))
              }
            </div>
          )}
      </div>
    );
  }
}

export default carrinhoDeCompras;
