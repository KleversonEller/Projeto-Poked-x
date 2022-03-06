import React,{Component} from 'react';
import { AiTwotoneStar } from "react-icons/ai";

class Favorite extends Component {
    render() {
        const {favoriteList} = this.props
        return(
            <div className='container2'>
                {favoriteList.map((objeto) => 
                <div key={objeto.id} className='flex-container'>
                    <div>
                        <p> {objeto.name} </p>
                        <p> {objeto.type} </p>
                        <p> {objeto.averageWeight.value}{objeto.averageWeight.measurementUnit}</p>
                    </div>
                    <img src={objeto.image} alt={`Essa é uma ilustração do ${objeto.name}`} />
                    {<AiTwotoneStar />}
                </div>)}
            </div>
        )
    }
}

export default Favorite;