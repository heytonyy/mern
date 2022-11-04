import ProductForm from "./views/ProductForm";
import React from "react";
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductForm />} />
      </Routes>
    </>
  );
}

export default App;
