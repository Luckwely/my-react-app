import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Navigation from "../components/navigation";
import ProductList from "../pages/productList";
import ProductDetails from "../pages/productDetails";

export default function AppRouter() {
    return (
        <div>
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route index element={<ProductList />} />
                    <Route path="/products/:id" element={<ProductDetails />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
