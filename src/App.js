import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ChangePassword from "./components/forms/ChangePassword";
import Login from "./components/forms/Login";
import Register from "./components/forms/Register";
import ListProducts from "./components/product/ListProducts";
import "./grid.css";
import UserLayout from "./layouts/UserLayout";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import Home from "./pages/home/Home";
import ProductDetail from "./pages/productDetail/ProductDetail";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<UserLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route
                        path="/change-password"
                        element={<ChangePassword />}
                    />
                    <Route path="/products" element={<ListProducts />} />
                    <Route path="/product-detail" element={<ProductDetail />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
