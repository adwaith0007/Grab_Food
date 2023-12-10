import React from 'react';
// import logo from './logo.svg';
import { Navbar } from './components';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './page/userPages/Login';
import Home from './page/userPages/Home';
import Signup from './page/userPages/Signup';

function App() {
  return (

    <Router>

      <Routes>
        <Route  path='/' element={<Home/>} ></Route>
        <Route  path='/login' element={<Login/>} ></Route>
        <Route  path='/signup' element={<Signup/>} ></Route>
      </Routes>

    </Router>
    // <div className="App bg-[#e5d9ca] h-screen ">
    //   <Navbar/>
    //   <h1 className="text-3xl font-bold underline">
    //   Hello world!
    // </h1>
    // </div>
  );
}

export default App;
