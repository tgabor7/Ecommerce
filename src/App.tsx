import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.min.css'
import { ProductsPage } from './components/ProductsPage';
import { SearchBar } from './components/SearchBar';
import 'font-awesome/css/font-awesome.min.css'
import { Helmet } from 'react-helmet';
import { ProductPage } from './components/ProductPage';
import { BrowserRouter, Route } from 'react-router-dom';
import { ShoppingCartPage } from './components/ShoppingCartPage';
import { Provider } from 'react-redux';
import { store } from './state/store';
import { PostProduct } from './components/PostProduct';

function App() {
  return (
    <div className='App'><Provider store={store}>
    <Helmet>
        <meta charSet="utf-8" />
        <title>{'Shop'}</title>
    </Helmet>
    <div className='navbar'>
      <div className='navbar-item'>
        <h1 className='is-size-1 has-text-weight-bold' onClick={()=>{window.location.href='/'}}>Shop</h1>
      </div>
      <div className='navbar-item'>
      <SearchBar />
      </div>
      <div className='navbar-end'>
        <i className='fa fa-shopping-cart fa-4x' onClick={()=>{
          window.location.href = '/cart'
        }}></i>
      </div>
    </div>
    <BrowserRouter>
    <Route exact path='/'>
      <ProductsPage />
    </Route>
    <Route exact path='/item/:id'>
      <ProductPage />
    </Route>
    <Route exact path='/cart'>
      <ShoppingCartPage />
    </Route>
    <Route exact path='/new'>
      <PostProduct />
    </Route>
    </BrowserRouter>
    </Provider>
    </div>
  );
}

export default App;
