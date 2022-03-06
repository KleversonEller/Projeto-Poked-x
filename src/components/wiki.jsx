import React,{Component} from 'react';
import pokemons from '../data';
import { AiTwotoneStar } from "react-icons/ai";

class Wiki extends Component {
    render() {
        const {id} = this.props.match.params;
        const {favorite, eventoClick} = this.props;
        const pokemon = pokemons.find((objeto) => objeto.id === +id);
        const favoritePokemon = favorite.some((objeto) => objeto[id])
        return(
            <div className='container'>
                <div className='flex-container'>
                        <div>
                            <p> {pokemon.name} </p>
                            <p> {pokemon.type} </p>
                            <p> {pokemon.averageWeight.value}{pokemon.averageWeight.measurementUnit}</p>
                            <label htmlFor="favorite">Favorita Pokemon</label>
                            <input
                            name={id}
                            id='favorite'
                            type="checkbox"
                            checked={favoritePokemon}
                            onChange={eventoClick}
                            />
                        </div>
                        <img src={pokemon.image} alt={`Essa é uma ilustração do ${pokemon.name}`} />
                        {favoritePokemon && <AiTwotoneStar />}
                    </div>
                    <div className='flex-container-colum'>
                        <h2>Summary</h2>
                        <p> {pokemon.summary} </p>
                        <h2>Game locations of Ekans</h2>
                        <div className='flex-container-ori'>
                            {pokemon.foundAt.map((objeto) =>
                            <img key={objeto.location} src={objeto.map} alt={`Essa é uma ilustração do habitat do ${objeto.name}`} />)}
                        </div>
                    </div>
            </div>
        )
    }
}

export default Wiki;
