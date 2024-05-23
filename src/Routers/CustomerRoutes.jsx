import React from 'react'
import { Route,Routes } from 'react-router-dom'
import HomePage from "../custom/pages/HomePage/HomePage"
import Cart from "../custom/components/Cart/Cart"
import Product from '../custom/components/Product/Product'
import Navbar from '../custom/components/Navbar/Navbar'
import Footer from '../custom/components/Footer/Footer'
import ProductDetails from '../custom/components/ProductDetails/ProductDetails'
import Checkout from '../custom/components/Checkout/Checkout'
import Order from '../custom/components/Order/Order'
import OrderDetail from '../custom/components/Order/OrderDetail'
function CustomerRoutes() {
  return (
    <div>
        <div>
<Navbar/>
        </div>
        <Routes>
        <Route path='/login' element={<HomePage/>}></Route>
        <Route path='/register' element={<HomePage/>}></Route>

            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product/>}></Route>
            <Route path='/product/:productId' element={<ProductDetails/>}></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
            <Route path='/account/order' element={<Order/>}></Route>
            <Route path='/account/order/:orderId' element={<OrderDetail/>}></Route>




        </Routes>
        <div>
        <Footer/>
        </div>
    </div>
  )
}

export default CustomerRoutes