import React, { Component } from 'react';
import Pokedex from './pokedex';
import Wiki from './wiki';
import About from './About';
import NotFound from './not-found';
import { Switch, Route } from 'react-router-dom';

class Routes extends Component {
    render() {
        const {favorite, eventoClick} = this.props;
        return(
            <Switch>
                <Route exact path={'/'} render={() => <Pokedex favorite={favorite} />} />
                <Route exact path={'/wiki/:id'} render={(props) => <Wiki {...props}
                favorite={favorite}
                eventoClick={eventoClick}
                />} />
                <Route exact path={'/About'} component={About} />
                <Route exact path='*' component={NotFound} />
            </Switch>
        )
    }
}

export default Routes;