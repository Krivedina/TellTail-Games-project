import React, { Component } from 'react';

import Link from 'next/link';
import '../pages/mainPage.css';

import getConfig from 'next/config';

interface UserValuesProps {
    login: string;
    avatar: string;
}

export default class UserLogin extends Component<UserValuesProps> {
    checkAvatar(avatar: string, basePath: string) {
        if (avatar) {
            return `${avatar}`;
        }

        return `${basePath}static/defaultAvatar.jpg`;
    }

    checkUser(login: string, avatar: string, basePath: string) {
        if (login) {
            return (
                <div className="user-block">
                    <div className="user-card">
                        <img
                            src={this.checkAvatar(avatar, basePath)}
                            className="user-avatar"
                            alt="user_avatar"
                            title={`${login}`}/>
                        <span className="user-login">{`${login}`}</span>
                    </div>
                    <Link href={"/logout"}>
                        <a className="authorization__button button-color-grey">
                            Выйти
                        </a>
                    </Link>
                </div>
            );
        }

        return (
            <div className="authorization-block">
                <Link href={"/registration"}>
                    <a className="authorization__button button-color-grey">
                            Зарегистрироваться
                    </a>
                </Link>
                <Link href={"/authorization"}>
                    <a className="authorization__button button-color-pink">
                            Войти
                    </a>
                </Link>
            </div>
        );
    }

    render() {
        const { login, avatar } = this.props;
        const { basePath } = getConfig().publicRuntimeConfig;

        return (
            this.checkUser(login, avatar, basePath)
        );
    }
}
