import React, { ChangeEvent, Component, FormEvent } from 'react';
import { ValueType } from 'react-select/lib/types';
import { Tags } from '../server/models/tags';

import Select from 'react-select';
import '../pages/mainPage.css';
import { IHashtag, IQuery } from '../server/types';

interface ISearchState {
    search: any;
    hashtags: any;
    allHashtags: any;
}

export default class SearchBlock extends Component<{ handleQuery({ search, hashtags }: IQuery): void }, ISearchState> {
    state = {
        search: '',
        hashtags: [],
        allHashtags: []
    };

    componentDidMount = async () => {
        const res = await fetch('/api/hashTag');
        const hashtags = await res.json();
        const allHashtags = hashtags.arrayHashTags.map((hashtag: IHashtag) => {
            return {
                value: hashtag.nameAddress,
                label: hashtag.name
            };
        });

        this.setState({ allHashtags });
    };

    submitQuery = (event: FormEvent<HTMLFormElement>) => {
        const { search, hashtags } = this.state;

        event.preventDefault();
        this.props.handleQuery({ search, hashtags });
    };

    handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ search: event.target.value });
    };

    handleHashtagChange = (hashtags: ValueType<Tags>) => {
        if (!hashtags || !Array.isArray(hashtags)) {
            return;
        }

        this.setState({
            hashtags: hashtags.map((hashtag) => {
                return { name: (hashtag.label) };
            })
        });
    };

    render() {
        return (
            <div className="search__block">
                <form className="find-name__block" id="find-name__block" onSubmit={this.submitQuery}>
                    <input id="find-name__input"
                           type="search"
                           placeholder="Текст запроса"
                           className="find-name__input"
                           onChange={this.handleSearchChange}/>
                    <button id="find-name__button" type="submit" className="find-name__button">Найти</button>
                </form>
                <div className="hashTag__block">
                    <div className="hashTag__input-block">
                        <Select
                            isMulti
                            instanceId="1"
                            className="hashTag__input"
                            closeMenuOnSelect={false}
                            placeholder="Хештег"
                            options={this.state.allHashtags}
                            onChange={this.handleHashtagChange}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
