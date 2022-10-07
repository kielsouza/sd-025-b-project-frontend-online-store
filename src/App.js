import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import carrinhoDeCompras from './pages/carrinhoDeCompras';
import productList from './pages/productList';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/carrinho" component={ carrinhoDeCompras } />
        <Route path="/" component={ productList } exact />
      </Switch>

      <Link to="/carrinho" data-testid="shopping-cart-button">Carrinho de compras</Link>
    </BrowserRouter>
  );
}

export default App;

// mudança aleatória
