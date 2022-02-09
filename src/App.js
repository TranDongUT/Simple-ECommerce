import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './container/Header';
import ProductList from './container/ProductList';
import ProductDetail from './container/ProductDetail';

function App() {
  return (
    <div className="App">
        <Header/>
        <ProductList/>
        <Routes>
            <Route path='https://trandongut.github.io/Simple-ECommerce/' element={<ProductList/>}/>
            <Route path="/product/:productId" element={<ProductDetail/>} />
        </Routes>
    </div>
  );
}

export default App;
