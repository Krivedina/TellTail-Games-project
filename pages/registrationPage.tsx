import { Promise } from 'es6-promise';
import Router from 'next/router';
import React, { Component } from 'react';
import LoginFormCreate from '../components/loginFormCreate';
import { IQuery, IUserSubmit } from '../server/types';

export default class RegistrationPage extends Component<IQuery> {
    state = {
        error: null
    };

    register = async ({ login, password, avatar }: IUserSubmit) => {
        const response: Response = await fetch('/api/registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login,
                password,
                ...(avatar && { avatar: await this.getFileFromDisk(avatar) })
            })
        });

        if (response.ok) {
            Router.push('/');
        } else {
            const error = `${response.status} ${response.statusText}: ${await response.text()}`;

            this.setState({ error });
        }
    };

    getFileFromDisk = async (fileRef: Blob) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.readAsDataURL(fileRef);
            reader.onload = () => resolve(reader.result || '');
            reader.onerror = (error) => reject(error);
        });
    };

    render() {
        return (
            <main className="content form">
                <LoginFormCreate fileInput header="Регистрация" buttonText="Зарегистрироваться и войти"
                                 submitCallback={this.register}/>
                {this.state.error && <div className="error">{this.state.error}</div>}
            </main>
        );
    }
}
