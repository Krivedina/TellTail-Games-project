import React, { Component, Fragment } from 'react';
import AdventuresCreate from '../components/adventuresCreate';
import '../pages/mainPage.css';
import { IHashtag } from '../server/types';

export default class HashTagPage extends Component<IHashtag> {
    static async getInitialProps({ req, asPath }: any) {
        const nameAddressTag = asPath.slice(4);
        const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
        const nameQuery = new URLSearchParams({ name: nameAddressTag });
        const result = await fetch(`${baseUrl}/api/getNameHashTag?${nameQuery}`);
        const hashTag = await result.json();

        return { nameAddress: hashTag.arrayHashTags };
    }

    render() {
        const hashTag = this.props.nameAddress;

        return (
            <Fragment>
                <p id="adventure__tag-name">{`#${hashTag.nameAddress}`}</p>
                <AdventuresCreate hashtags={[{ nameAddress: hashTag.name }]}/>
            </Fragment>
        );
    }
}
