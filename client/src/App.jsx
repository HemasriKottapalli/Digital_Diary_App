import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home, About, Dashboard, SignIn, SignUp, Header, Footer} from './Links';

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App
