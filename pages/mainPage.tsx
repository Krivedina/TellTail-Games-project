import React, { Component, Fragment } from 'react';

import AdventuresCreate from '../components/adventuresCreate';
import SearchBlock from '../components/searchBlock';
import { IQuery } from '../server/types';

export default class MainPage extends Component<void, IQuery> {
    state = {
        search: null,
        hashtags: []
    };

    handleQuery = ({ search, hashtags }: IQuery) => {
        this.setState({
            search, hashtags
        });
    };

    render() {
        return (
            <Fragment>
                <SearchBlock handleQuery={this.handleQuery}/>
                <AdventuresCreate {...this.state}/>
            </Fragment>
        );
    }
}
