
import './App.css';
import React from 'react';
import Login from './components/Login';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import CreateBid from './components/CreateBid'
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route index element={<Login/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/loginForm" element={<LoginForm/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/createBid" element={<CreateBid/>}/>
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
