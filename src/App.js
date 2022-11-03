import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import Signin from './components/Signin';
import Signup from './components/Signup';

function App() {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/signin' element={<Signin/>}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;
