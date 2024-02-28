import { Navbar, Footer } from './components/index.js';
import { BagContainer, Modal, SimilarProductsContainer } from './containers/index.js';
import { HomePage, ProductPage, BagPage } from './pages/index.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Page404 } from './components/index.js';
import Shops from './pages/Shop.js';
function App() {
  const { modals, similarProducts } = useSelector(state => ({
    modals: state.modalsStore,
    similarProducts: state.similarProductsStore
  }));
  return (
    <div className="App" >
      <BrowserRouter>
        {similarProducts.isActive && <SimilarProductsContainer />}
        {modals.isActive && <Modal />}
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shops />} />
          <Route path="/:productID" element={<ProductPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
export default App;
