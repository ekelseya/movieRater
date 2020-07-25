import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "./Home";
import Movies from "./Movies";
import Auth from "./Auth"

const Content = () => {

    return(
        <main>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/movies' component={Movies} />
                <Route path='/signin' component={Auth} />
                <Route path='/register' component={Auth} />
            </Switch>
        </main>
    )
}

export default Content;