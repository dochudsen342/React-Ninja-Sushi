import {React, useId} from 'react';
import './styles/App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes} from 'react-router';
import DetalCategoryProduct from './pages/DetailCategoryProduct';
import productData from './ProductData/productData.js';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      {productData.map((category) =>
      <Route 
      path={`/${category[0].categoryId}`}
      key={category} 
      element={<DetalCategoryProduct category={category}/>}/>)}
    </Routes>
    </BrowserRouter>
  )   
}

export default App;
