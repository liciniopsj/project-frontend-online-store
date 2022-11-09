import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import ShoppinCart from './pages/ShoppinCart';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={ Home } />
      <Route exact path="/shoppinCart" component={ ShoppinCart } />
    </div>
  );
}

export default App;
