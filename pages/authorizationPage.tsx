import Router from 'next/router';
import React, { Component } from 'react';
import LoginFormCreate from '../components/loginFormCreate';
import { IQuery, IUserSubmit } from '../server/types';

export default class AuthorizationPage extends Component<IQuery> {
    state = {
        error: null
    };

    login = async ({ login, password }: IUserSubmit) => {
        const response: Response = await fetch('/api/authorization', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login,
                password
            })
        });

        if (response.ok) {
            Router.push('/');
        } else {
            const error = `${response.status} ${response.statusText}: ${await response.text()}`;

            this.setState({ error });
        }
    };

    render() {
        return (
            <main className="content form">
                <LoginFormCreate header="Логин" buttonText="Войти" submitCallback={this.login}/>
                {this.state.error && <div className="error">{this.state.error}</div>}
            </main>
        );
    }
}
