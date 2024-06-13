import React, { useEffect, useState } from 'react';
import { BrowserRouter , Route, Routes , Link } from "react-router-dom";
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Layout from './components/Layout';
import Medications from './pages/Medications';




const App : React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
      <Routes>
      <Route path="/"  >
        <Route index element ={<Home/>} />
        <Route path="medications/:date" element={<Medications />} />
        <Route path='signin' element ={<Signin/>} />
        <Route path='signup'  element ={<Signup/>} />
      </Route>
      <Route path="*" element={<h1>page not found error 404 !!</h1>} />
      </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App;