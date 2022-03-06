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
      favorite: pokemons.map((objeto) => ({[objeto.id]: false, id: objeto.id})),
      favoriteList: [],
    }
  }

  componentDidMount () {
    JSON.parse(localStorage.getItem('favoriteListPokemon')) !== null 
      && this.setState({
      favorite: JSON.parse(localStorage.getItem('favoriteListPokemon'))
    }, this.listFavorite)
  }

  favoritarPokemon = (event) => {
    const name = event.target.name
    this.setState((favotiteNew) => ({
      favorite: favotiteNew.favorite.map((objeto) => +objeto.id === +name 
      ? {[objeto.id]: !objeto[name], id: objeto.id} 
      : objeto)
    }), this.listFavorite)
  }

listFavorite = () => {
  const pokemonsFavoritados = this.state.favorite.filter((objeto) => objeto[objeto.id.toString()])
  this.setState({ 
  favoriteList: pokemons.filter((objeto) =>
  pokemonsFavoritados.some((idSalvo) => idSalvo.id === objeto.id))
  }, this.save)
};

save = () => {
  localStorage.setItem('favoriteListPokemon', JSON.stringify(this.state.favorite))
}

  render() {
    return (
      <main>
        <h1>POKEDEX</h1>
        <BrowserRouter>
          <Navbar />
          <Routes favorite={this.state.favorite}
          eventoClick={this.favoritarPokemon}
          favoriteList={this.state.favoriteList}
          />
        </BrowserRouter>
      </main>
    );
  }
}

export default App;
