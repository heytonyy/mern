import React from "react";
import { Route, Routes } from 'react-router-dom'
import ViewProduct from "./views/ViewProduct";
import EditProduct from "./views/EditProduct";
import Dashboard from "./views/Dashboard";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/:product_id" element={<ViewProduct />} />
        <Route path="/edit/:product_id" element={<EditProduct />} />
      </Routes>
    </>
  );
}

export default App;
