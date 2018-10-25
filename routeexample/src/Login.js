import React, { Component } from 'react';

import AuthService from './auth';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    state = {
        isLoggedIn: false
    }

    login = () => {
        AuthService.signIn(() => {
            this.setState({
                isLoggedIn: true
            });
        });
    }

    render() {
        const { from } = this.props.location.state;
        if (this.state.isLoggedIn) {
            return (<Redirect to={from}/>);
        }

        return (
            <div>
                To view protected page, please press Login
                <button onClick={this.login}>
                    Login
                </button>
            </div>
        )
    }
}

export default Login;
