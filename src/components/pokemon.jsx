import React,{Component} from 'react';
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
                        <a href={catchPokemon.moreInfo} target='_blank'> {catchPokemon.name} Wiki</a>
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
        value: PropTypes.number,
        }),
        image: PropTypes.string,
    }).isRequired,
};

export default Pokemon;