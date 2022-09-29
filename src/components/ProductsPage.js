// src/components/ProductsPage.js

import { useState } from 'react';
import jsonData from '../data.json';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import SearchBar from './SearchBar';
import ProductsTable from './ProductTable';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  console.log(jsonData);
  const [myFilteredProducts, setMyFilteredProducts] = useState(jsonData);

  const [checked, setChecked] = useState(false);

  const handleSearch = (event) => {
    const filtered = products.filter(element => {
        return element.name.includes(event.target.value) || element.name.includes(event.target.value.toUpperCase());
    })
    setMyFilteredProducts(filtered);
}
    const updateChecked = () => setChecked(prev => !prev);
  
  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar handleSearch = {handleSearch}/>
        <input type="checkbox" id="checkbox" onChange={updateChecked}></input>
        <label for="checkbox">Only show products in stock</label>
        <ProductsTable productsToShow = {myFilteredProducts} checked = {checked}/>
      </div>    
  )
}

export default ProductsPage;

