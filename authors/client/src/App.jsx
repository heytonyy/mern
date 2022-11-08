import React from "react"
import { Route, Routes } from 'react-router-dom'
import Dashboard from "./views/Dashboard";
import NewAuthorForm from "./views/NewAuthorForm";
import EditAuthorForm from "./views/EditAuthorForm";

function App() {
  return (
    <>
      <h1 className="ml-20">Favorite Authors</h1>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/new' element={<NewAuthorForm />} />
        <Route path='/edit/:author_id' element={<EditAuthorForm />} />
      </Routes>
    </>
  );
}

export default App;
