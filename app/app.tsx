import * as ReactDOM from 'react-dom';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { HomeComponent } from './components/home/home.component';
import reducer from './reducer';

const isProduction = process.env.NODE_ENV === 'production';
const store = isProduction && createStore(reducer, applyMiddleware(thunk)) || createStore(reducer, compose(applyMiddleware(thunk), (window as any).__REDUX_DEVTOOLS_EXTENSION__ ? (window as any).__REDUX_DEVTOOLS_EXTENSION__() : f => f));

const isLoggedIn = () => true;
const PrivateRoute = ({ ...props }) => isLoggedIn() && <Route {...props} /> || <div>Please login!</div>

ReactDOM.render(<Provider store={store}>
    <Router>
        <Switch>
            <PrivateRoute path='/home' component={HomeComponent} />
            <Route path="**"><Redirect to='/home' /></Route>
        </Switch>
    </Router>
</Provider>, document.getElementById('app'));