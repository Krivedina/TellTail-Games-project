import React, { Component } from 'react';

import fetch from 'isomorphic-fetch';
import '../pages/mainPage.css';
import AdventureCreate from './adventureCreate';

import InfiniteScroll from 'react-infinite-scroller';
import { IAdventure, IQuery } from '../server/types';

interface IAdventuresState {
    adventures: any;
    hasMoreItems: any;
    limit: any;
    offset: any;
}

export default class AdventuresCreate extends Component<IQuery, IAdventuresState> {
    state = {
        adventures: [],
        hasMoreItems: true,
        limit: 5,
        offset: 0
    };

    componentDidUpdate = (prevProps: IQuery) => {
        if (this.props.search !== prevProps.search || this.props.hashtags !== prevProps.hashtags) {
            this.setState({
                adventures: [],
                hasMoreItems: true,
                offset: 0
            });
        }
    };

    loadItems = async () => {
        const { limit, offset } = this.state;
        const paramsQuery = new URLSearchParams();
        let search = this.props.search;
        const hashtags = [] = this.props.hashtags;
        const tagsElements = hashtags.map((hashtag: any) => {
            return hashtag.name || hashtag.nameAddress;
        });

        if (!search) {
            search = '';
        }

        const query = { offset, limit, search, tagsElements };

        for (const [key, value] of Object.entries(query || {})) {
            if (typeof value !== 'undefined' && value !== null) {
                paramsQuery.append(key, value.toString());
            }
        }

        const res = await fetch(`/api/adventures?${paramsQuery}`);
        const adventures = await res.json();

        if (!adventures.arrayAdventures.length) {
            this.setState({ hasMoreItems: false });
        } else {
            this.setState((prevState: IAdventuresState) => {
                return {
                    adventures: prevState.adventures.concat(adventures.arrayAdventures),
                    offset: offset + limit
                };
            });
        }
    };

    render() {
        const loader = <h3 key={this.state.offset}>Загрузка</h3>;

        return (
            <InfiniteScroll
                loadMore={this.loadItems}
                hasMore={this.state.hasMoreItems}
                loader={loader}
            >

                <section id="adventure-list">
                    {this.state.adventures.map((adventure: IAdventure) => {
                        return <AdventureCreate {...adventure} key={adventure.id}/>;
                    })}
                </section>
            </InfiniteScroll>
        );
    }
}
