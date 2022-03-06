import React, { Component } from 'react';
import Pokedex from './pokedex';
import Wiki from './wiki';
import { Switch, Route } from 'react-router-dom';

class Routes extends Component {
    render() {
        return(
            <Switch>
                <Route exact path={'/'} component={Pokedex} />
                <Route exact path={'/wiki/:id'} render={(props) => <Wiki {...props} />} />
            </Switch>
        )
    }
}

export default Routes;