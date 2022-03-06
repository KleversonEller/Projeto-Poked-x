import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/Routes';
import pokemons from './data';
import Navbar from './components/nav-bar';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      favorite: pokemons.map((objeto) => ({[objeto.id]: false, id: objeto.id}))
    }
  }

  favoritarPokemon = (event) => {
    const name = event.target.name
    this.setState((favotiteNew) => ({
      favorite: favotiteNew.favorite.map((objeto) => +objeto.id === +name 
      ? {[objeto.id]: !objeto[name], id: objeto.id} 
      : objeto)
    }))
  }

  render() {
    return (
      <main>
        <h1>POKEDEX</h1>
        <BrowserRouter>
          <Navbar />
          <Routes favorite={this.state.favorite} eventoClick={this.favoritarPokemon}/>
        </BrowserRouter>
      </main>
    );
  }
}

export default App;
