import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './container/Header';
import ProductList from './container/ProductList';
import ProductDetail from './container/ProductDetail';

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path='/' element={<ProductList/>}/>
            <Route path="/product/:productId" element={<ProductDetail/>} />
        </Routes>
    </div>
  );
}

export default App;
