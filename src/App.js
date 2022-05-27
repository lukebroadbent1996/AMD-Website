import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages';
import ContactPage from './pages/contactus'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} exact />
        <Route path='/contactus' element={<ContactPage/>} exact />
      </Routes>
    </Router>
  );
}

export default App;
