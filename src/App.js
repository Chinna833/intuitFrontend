
import './App.css';
import React from 'react';
import Login from './components/Login';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import CreateBid from './components/CreateBid'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ForgotPass from './components/ForgotPass';
import BidDetails from './components/BidDetails';

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
            <Route path="/forgotPass" element={<ForgotPass/>}/>
            <Route path="/bidDetails" element={<BidDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
