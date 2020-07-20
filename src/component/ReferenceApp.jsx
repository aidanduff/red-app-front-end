import React, { Component } from 'react';
import ListItemComponent from './ListItemComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ItemComponent from './ItemComponent';
import CreateItemComponent from './CreateItemComponent';

class ReferenceApp extends Component {
    render(){
        return (
            <Router>
                <>
                    <h1>Reference Application</h1>
                    <Switch>
                        <Route path="/" exact component={ListItemComponent} />
                        <Route path="/items" exact component={ListItemComponent} />
                        <Route path="/item/:id" component={ItemComponent} />
                        <Route path="/items/create" component={CreateItemComponent} />
                    </Switch>
                </>
            </Router>
        )
    }
}

export default ReferenceApp