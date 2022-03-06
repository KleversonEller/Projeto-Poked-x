import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/Routes';
import Navbar from './components/nav-bar';
import './App.css';

class App extends Component {
  render() {
    return (
      <main>
        <h1>POKEDEX</h1>
        <BrowserRouter>
          <Navbar />
          <Routes />
        </BrowserRouter>
      </main>
    );
  }
}

export default App;
