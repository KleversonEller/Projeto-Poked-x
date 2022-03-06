import React,{Component} from 'react';

class Wiki extends Component {
    render() {
        const {id} = this.props.match.params;
        return(
            <div>
                <p>ola eu sou o pokemon {id}</p>
            </div>
        )
    }
}

export default Wiki;
