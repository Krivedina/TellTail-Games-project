import React, { Component } from 'react';

import Link from 'next/link';
import '../pages/mainPage.css';

import getConfig from 'next/config';

export default class Title extends Component {
    render() {
        const { basePath } = getConfig().publicRuntimeConfig;

        return (
            <Link href={"/mainPage"} as="/">
                <a className="header-block__title">
                    <img className="header-block__logo"
                         src={`${basePath}static/logo.svg`}/>
                    <span className="header-block__name">Telltail</span>Games
                </a>
            </Link>
        );
    }
}
