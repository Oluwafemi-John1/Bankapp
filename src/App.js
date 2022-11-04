import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Error404 from './components/Error404';
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
            <Route path='/*' element={<Error404/>}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;
