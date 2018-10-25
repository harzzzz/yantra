import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import AuthService from './auth';
import Login from './Login';

const RouteExample  = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to='/'>Public Page</Link></li>
                    <li><Link to='/protected'>Protected Page</Link></li>
                </ul>
                <hr/>
                <Route path='/' exact
                    render={() => (<div>This is public page</div>)}
                />
                <Route path='/login' component={ Login } />
                <PrivateRoute path='/protected' component={Protected}/>
            </div>
        </Router>
    );
};

class Protected extends Component {
    render() {
        const { history } = this.props;
        return (
            <div>
                This is Protected Page 
                <button onClick={ () => {
                    AuthService.signOut(() => {
                        history.push('/');
                    })
                }}>
                    Logout
                </button>
            </div>
        );
    }
};

export default RouteExample;
