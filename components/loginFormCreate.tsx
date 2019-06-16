import React, { ChangeEvent, Component, FormEvent } from 'react';
import '../pages/mainPage.css';

import { IUserSubmit } from '../server/types';

interface IUserFormProps {
    header: string;
    fileInput?: boolean;
    buttonText: string;

    submitCallback(userSubmit: IUserSubmit): void;
}

export default class LoginFormCreate extends Component<IUserFormProps, IUserSubmit> {
    state = {
        login: '',
        password: '',
        avatar: null
    };

    submit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        this.props.submitCallback(this.state);
    };

    onLoginChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ login: event.target.value });
    };

    onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ password: event.target.value });
    };

    onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ avatar: event.target.files && event.target.files[0] });
    };

    render() {
        return (
            <form id="authorization-page__block" className="authorization-page__block" onSubmit={this.submit}>
                <p className="word-on-top-page">{this.props.header}</p>
                <input required name="username" type="text"
                       pattern="^[A-Za-z0-9-]+" className="user-input"
                       placeholder="Логин" onChange={this.onLoginChange}/>
                <input required name="password" type="password"
                       className="user-input"
                       placeholder="Пароль" onChange={this.onPasswordChange}/>
                {this.props.fileInput && <input name="userpic" type="file" className="choose-file"
                                                placeholder="No file chosen" onChange={this.onFileChange}/>}
                <div className="enter-wrapper">
                    <button type="submit" className="authorization__button button-color-pink">{this.props.buttonText}
                    </button>
                </div>
            </form>
        );
    }
}
