import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Wish from "./pages/Wish";
import Profile from "./pages/Profile";
import Details from "./pages/Details";
import { Carousel } from "react-bootstrap";


const App = () => {
    return (
        <div>
             
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<Error404 />} />
                   
                    <Route path="/" element={<Layout />}>
                        <Route path="" element={<Home />} />
                        <Route path="cart" element={<Cart />} />
                        <Route path="Wish" element={<Wish />} />
                        <Route path="Wish" element={<Carousel />} />
                        <Route path="Profile" element={<Profile />} />
                        <Route path="product/:category/:name" element={<Details />} />
                        <Route path=":type/:product" element={<Product />} />
                       
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
