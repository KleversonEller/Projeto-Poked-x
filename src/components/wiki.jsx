import React,{Component} from 'react';
import pokemons from '../data';

class Wiki extends Component {
    render() {
        const {id} = this.props.match.params;
        const pokemon = pokemons.find((objeto) => objeto.id === +id);
        return(
            <div className='container'>
                <div className='flex-container'>
                        <div>
                            <p> {pokemon.name} </p>
                            <p> {pokemon.type} </p>
                            <p> {pokemon.averageWeight.value}{pokemon.averageWeight.measurementUnit}</p>
                        </div>
                        <img src={pokemon.image} alt={`Essa é uma ilustração do ${pokemon.name}`} />
                    </div>
                    <div className='flex-container-colum'>
                        <h2>Summary</h2>
                        <p> {pokemon.summary} </p>
                        <h2>Game locations of Ekans</h2>
                        <div className='flex-container-ori'>
                            {pokemon.foundAt.map((objeto) =>
                            <img src={objeto.map} alt={`Essa é uma ilustração do habitat do ${pokemon.name}`} />)}
                        </div>
                    </div>
            </div>
        )
    }
}

export default Wiki;
