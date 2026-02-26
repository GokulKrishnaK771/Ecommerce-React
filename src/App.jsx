import HomePage from "./Pages/Home/HomePage";
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import CheckoutPage from "./Pages/Checkout/CheckoutPage";
import OrdersPage from "./Pages/Order/OrdersPage";  
import TrackingPage from "./Pages/Tracking/TrackingPage";

function App() {
  const [cart, setCart] = useState([]);

  const loadCart = async()=>{
    let response = await axios.get('/api/cart-items?expand=product');
           setCart(response.data);
    };

  useEffect(()=>{
    loadCart();
  },[])
   
  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} loadCart={loadCart} />} />
      <Route path="orders" element={<OrdersPage cart={cart} />} />
      <Route path="tracking" element={<TrackingPage />} />
    </Routes>
  );
}

export default App;