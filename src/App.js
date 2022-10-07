import React from 'react';
import './App.css';
import productList from './pages/productList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Switch>
        <Route path="/" component={ productList } exact />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
