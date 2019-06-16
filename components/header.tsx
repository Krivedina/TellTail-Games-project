import React, { Component } from 'react';

import Title from '../components/title';
import UserLogin from '../components/userLogin';
import '../pages/mainPage.css';
import { IUserData } from '../server/types';

export default class Header extends Component<{}, IUserData & { loaded: boolean }> {
    state = {
        loaded: false,
        login: '',
        avatar: ''
    };

    async componentDidMount() {
        try {
            const res = await fetch('/api/getUserEntry');
            let userLogin;

            if (res) {
                userLogin = await res.json();
            }

            if (res.ok) {
                this.setState({
                    login: userLogin.userLogin,
                    avatar: userLogin.userAvatar
                });
            }
        } catch (error) {
            console.error(error);
        }

        this.setState({ loaded: true });
    }

    render() {
        return (
            <header className="header-block">
                <Title/>
                <UserLogin login={this.state.login}
                           avatar={this.state.avatar}/>
            </header>
        );
    }
}
