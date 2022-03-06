import React,{Component} from 'react';

class About extends Component {
    render() {
        return(
            <div className='flex-container-colum'>
                <h2>About Pokedex</h2>
                <p>This application simulates a Pokedex, a digital encyclopedia containing all Pokemons</p>
                <p>One can filter Pokemons by type, and see more details for each one of them</p>
                <img src="https://archives.bulbagarden.net/media/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/120px-Gen_I_Pok%C3%A9dex.png"
                alt="Imagem ilustrativa de uma Pokedex"
                width='250px'/>
            </div>
        )
    }
}

export default About;