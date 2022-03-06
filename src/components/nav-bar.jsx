import React,{Component} from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav>
            <div>
                <Link to='/'>Home</Link>
            </div>
            <div>
                <Link to='/About'>About</Link>
            </div>
            </nav>
        )
    }
}

export default Navbar;