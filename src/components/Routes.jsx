import React, { Component } from 'react';
import Pokedex from './pokedex';
import Wiki from './wiki';
import About from './About';
import { Switch, Route } from 'react-router-dom';

class Routes extends Component {
    render() {
        return(
            <Switch>
                <Route exact path={'/'} component={Pokedex} />
                <Route exact path={'/wiki/:id'} render={(props) => <Wiki {...props} />} />
                <Route exact path={'/About'} component={About} />
            </Switch>
        )
    }
}

export default Routes;