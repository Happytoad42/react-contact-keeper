import React from 'react';
import { BrowserRouter as Router, route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      My app
    </div>
  );
};

export default App;
