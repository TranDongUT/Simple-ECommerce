import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./container/Header";
import ProductList from "./container/ProductList";
import ProductDetail from "./container/ProductDetail";
import Category from "./container/Category";
import Cart from "./container/Cart";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/Simple-ECommerce/" element={<ProductList />} />
        <Route path="/" element={<ProductList />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/product/category/:type" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
