import React from "react";
import { Route, Routes } from 'react-router-dom'
import ViewProduct from "./views/ViewProduct";
import ProductForm from "./views/ProductForm";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<ProductForm />} />
        <Route path="/:product_id" element={<ViewProduct />} />
      </Routes>
    </>
  );
}

export default App;
