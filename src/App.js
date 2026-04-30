/* eslint-disable no-sequences */
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import "./components/Home"
import Home from './components/Home'
import Form from './components/Form'
import Login from './components/Login';
import Payment from './components/Payment';
import CardDetails from './components/CardDetails';
import WalletDetails from './components/WalletDetails';
import Success from './components/Success';
import About from './components/About';
import Profile from './components/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Form />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/carddetails" element={<CardDetails/>}/>
        <Route path="/walletdetails" element={<WalletDetails/>}/>
        <Route path="/success" element={<Success/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
