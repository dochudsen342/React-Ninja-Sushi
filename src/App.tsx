import {lazy, Suspense, useId} from 'react';
import './styles/App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes} from 'react-router';
import productData from './ProductData/productData';
const DetalCategoryProduct = lazy(() => import('./pages/DetailCategoryProduct')) 


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      {productData.map((category) =>
      <Route 
      path={`/${category[0].categoryId}`}
      key={category[0].categoryId} 
      element={<Suspense><DetalCategoryProduct category={category}/></Suspense>}/>)}
    </Routes>
    </BrowserRouter>
  )   
}

export default App;
