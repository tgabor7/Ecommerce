import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.min.css'
import { ProductsPage } from './components/ProductsPage';
import { SearchBar } from './components/SearchBar';
import 'font-awesome/css/font-awesome.min.css'

function App() {
  return (
    <>
    <div className='navbar'>
      <div className='navbar-item'>
        asd 
      </div>
      <div className='navbar-end'>
        <i className='fa fa-shopping-cart fa-4x'></i>
      </div>
    </div>
    <ProductsPage />
    <SearchBar />
    </>
  );
}

export default App;
