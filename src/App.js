import {Route, Routes} from "react-router-dom";
import './App.css';
import { Dashboard } from "./Pages/Dashboard";
import { Login } from "./Pages/Login";
import { Signup } from "./Pages/Signup";
import { CreateProduct } from "./Pages/Product/CreateProduct";
import { ProductsList } from "./Pages/Product/GetAllProducts";
import { UpdateProduct } from "./Pages/Product/EditProduct";
import { DeleteProduct } from "./Pages/Product/DeleteProduct";
import { ProductsByCategory } from "./Pages/Product/GetProductCategory";
import { AddToCart } from "./Pages/Cart/AddToCart";
import { MyCart } from "./Pages/Cart/UserCart";
import { DeleteFromCart } from "./Pages/Cart/DeleteFromCart";
import { PlaceOrder } from "./Pages/Order/PlaceOrder";
import {  ProductDetails } from "./Pages/Product/GetProduct";
import { AllOrders } from "./Pages/Order/AllOrders";
import { UpdateOrderStatus } from "./Pages/Order/UpdateStatus";






function App() 
{
  return (
        
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Dashboard/>} />
          <Route exact path="/user/login" element={<Login/>} />
          <Route exact path="/user/signup" element={<Signup/>} />
          <Route exact path="/products/add" element={<CreateProduct/>} />
          <Route exact path="/products/all" element={<ProductsList/>} />
          <Route exact path="/products/:id" element={<ProductDetails/>} />
          <Route exact path="/products/edit/:id" element={<UpdateProduct/>} />
          <Route exact path="/products/delete/:id" element={<DeleteProduct/>} />
          <Route exact path="/cart/add/:productId" element={<AddToCart/>} />
          <Route exact path="/cart/user/my-cart" element={<MyCart/>} />
          <Route exact path="/cart/delete/:itemId" element={<DeleteFromCart/>} />
          <Route exact path="/order/place-order/:productId" element={<PlaceOrder/>} />
          <Route exact path="/order/my-orders" element={<AllOrders/>} />
          <Route exact path="/order/update-status/:orderId" element={<UpdateOrderStatus/>} />
        </Routes>
      </div>
  ); 
}


export default App;







