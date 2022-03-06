import React,{Component} from 'react';
import Pokemon from './pokemon';
import pokemons from '../data';
import { Link } from 'react-router-dom';
import './pokedex.css'

class Pokedex extends Component {
    constructor(){
        super()
        this.state = {
            pokemonIndex: 0,
            pokemonType: 'all'
        }
        this.pokemonSelect = this.pokemonSelect.bind(this)
        this.pokemonList = this.pokemonList.bind(this)
        this.pokemonFilter = this.pokemonFilter.bind(this)
        this.pokemonTypes = this.pokemonTypes.bind(this)
    }

    pokemonFilter (event) {
        this.setState((atual, _props) => ({
            pokemonType: atual.pokemonType = event.target.value,
            pokemonIndex: atual.pokemonIndex = 0
        }))
    }

    pokemonList () {
        return pokemons.filter((filtraObjeto) => this.state.pokemonType !== 'all' ? filtraObjeto.type === this.state.pokemonType : filtraObjeto).map((objeto) => <Pokemon key={objeto.id} catchPokemon={ objeto} />)
    }

    pokemonSelect () {
        this.setState((atual, _props) => ({
            pokemonIndex: (atual.pokemonIndex +=1) % this.pokemonList().length,
        }))
    }

    pokemonTypes () {
        return [...new Set(pokemons.map(({ type }) => type))]
    }

    render(){
        return(
            <div>
                <nav>
                    <Link to='/'>Home</Link>
                </nav>
                <section className='container'>
                    {this.pokemonList()[this.state.pokemonIndex]}
                </section>
                <button onClick={this.pokemonFilter} value="all" className='all' >All</button>
                    {this.pokemonTypes().map((type) => {
                        return <button key={type} onClick={this.pokemonFilter} value={type} className={type} >{type}</button>
                    })}
                    <br />
                    <button onClick={this.pokemonSelect}  disabled={this.pokemonList().length <= 1} className='next' >Next</button>
            </div>
        )
    }
}

export default Pokedex;