import React from "react";
import { Route, Routes } from 'react-router-dom'
import ViewProduct from "./views/ViewProduct";
import ProductForm from "./views/ProductForm";
import EditProduct from "./views/EditProduct";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<ProductForm />} />
        <Route path="/:product_id" element={<ViewProduct />} />
        <Route path="/edit/:product_id" element={<EditProduct />} />
      </Routes>
    </>
  );
}

export default App;
