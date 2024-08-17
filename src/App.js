import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import BlogDetails from './pages/BlogDetails';
import Home from './pages/Home';

function App() {
  return (
       <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts/:id" element={<BlogDetails />} />
          </Routes>
       </Router>
  );
}

export default App;
