import HomePage from "./Pages/Home/HomePage";
import { Routes, Route } from "react-router";
import CheckoutPage from "./Pages/Checkout/CheckoutPage";
import OrdersPage from "./Pages/Order/OrdersPage";  
import TrackingPage from "./Pages/Tracking/TrackingPage";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="orders" element={<OrdersPage />} />
      <Route path="tracking" element={<TrackingPage />} />
    </Routes>
  );
}

export default App;