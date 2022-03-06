import React, { Component } from 'react';
import Pokedex from './components/pokedex';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <main>
        <h1>POKEDEX</h1>
        <BrowserRouter>
          <Switch>
            <Route path={'/'} component={Pokedex} />
          </Switch>
        </BrowserRouter>
      </main>
    );
  }
}

export default App;
