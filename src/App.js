import './App.css';
import Navbar from "./custom/components/Navbar/Navbar.jsx"
import HomePage from './custom/pages/HomePage/HomePage.jsx';
import Footer from './custom/components/Footer/Footer.jsx';
import Product from './custom/components/Product/Product.jsx';
import ProductDetails from './custom/components/ProductDetails/ProductDetails.jsx';
import Cart from './custom/components/Cart/Cart.jsx';
import Checkout from './custom/components/Checkout/Checkout.jsx';
import Order from './custom/components/Order/Order.jsx';
import OrderDetail from './custom/components/Order/OrderDetail.jsx';
import { Route,Routes } from 'react-router-dom';
import CustomerRoutes from './Routers/CustomerRoutes.jsx';

function App() {
  return (
    
<div>

<Routes>
  <Route path='/*' element={<CustomerRoutes/>}></Route>
</Routes>


</div>


  );
}

export default App;
