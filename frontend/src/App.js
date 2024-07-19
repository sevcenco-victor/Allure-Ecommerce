import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainLayout from './Layouts/MainLayout';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import NotFound from './Pages/NotFound';
import Shop from './Pages/Shop/Shop';
import ProductDisplay from './Pages/ProductDisplay';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Authenticate from './Pages/Authenticate';
import Cart from './Pages/Cart/Cart';
import Confirmation from './Pages/Cart/Confirmation';
import MyAccount from './Pages/MyAccount';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="shop/" element={<Shop />} />
            <Route path="shop/:category" element={<Shop />} />
            <Route path="shop/:category/:id" element={<ProductDisplay />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="login" element={<Authenticate isLogin={true} />} />
            <Route path="signup" element={<Authenticate />} />
            <Route path="personal-account" element={<MyAccount />} />
            <Route path="cart/" element={<Cart />} />
            <Route path="cart/confirmation" element={<Confirmation />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
