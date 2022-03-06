import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './pokemon.css';

class Pokemon extends Component {
    render () {
        const {catchPokemon} = this.props
        return (
            <section>
                <div className='flex-container'>
                    <div>
                        <p> {catchPokemon.name} </p>
                        <p> {catchPokemon.type} </p>
                        <p> {catchPokemon.averageWeight.value}{catchPokemon.averageWeight.measurementUnit}</p>
                        <Link to={`/wiki/${catchPokemon.id}`}> {catchPokemon.name} Wiki</Link>
                    </div>
                    <img src={catchPokemon.image} alt={`Essa é uma ilustração do ${catchPokemon.name}`} />
                </div>
            </section>
        )
    }
}

Pokemon.propTypes = {
    catchPokemon: PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string,
        averageWeight: PropTypes.shape({
        measurementUnit: PropTypes.string,
        value: PropTypes.string,
        }),
        image: PropTypes.string,
    }).isRequired,
};

export default Pokemon;