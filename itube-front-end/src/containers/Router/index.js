import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/';
import Login from '../Login/';
import SignUp from '../SignUp/';
import ChangePassword from '../ChangePassword/';
import AddVideo from '../AddVideo/';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/change/password" component={ChangePassword} />
            <Route path="/add/video" component={AddVideo} />
        </Switch>
    );
}