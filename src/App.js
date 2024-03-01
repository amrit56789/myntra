import { Navbar, Footer } from './components/index.js';
import { Modal, SimilarProductsContainer } from './containers/index.js';
import { HomePage, ProductPage, BagPage } from './pages/index.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Page404 } from './components/index.js';
import Shops from './pages/Shop.js';
import Wishlist from './pages/Wishlist.js';
import Checkout from './pages/Checkout.js';
import "./App.css"
function App() {
  const { modals, similarProducts } = useSelector(state => ({
    modals: state.modalsStore,
    similarProducts: state.similarProductsStore
  }));
  return (
    <div className="App" >
      <BrowserRouter>
        {/* {similarProducts.isActive && <SimilarProductsContainer />} */}
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shops />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout/cart" element={<Checkout />} />
          <Route path="/:productID" element={<ProductPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
export default App;
