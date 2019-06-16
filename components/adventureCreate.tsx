import React from 'react';

import getConfig from 'next/config';

import Link from 'next/link';
import '../pages/mainPage.css';
import { IAdventure, IUser } from '../server/types';

function renderTags(tags: any) {
    if (!tags) {
        return;
    }

    return tags.map((tag: any) => {
        return (
            <Link key={tag.id} href="/pages/hashTagPage.tsx" as={`/tag${tag.nameAddress}`}>
                <a className="adventure__tag-reference">
                    {`#${tag.name}`}
                </a>
            </Link>
        );
    });
}

function checkAdventureImage(image: string, defaultImage: string) {
    const { basePath } = getConfig().publicRuntimeConfig;

    if (image) {
        return `${basePath}static/${image}`;
    }

    return `${basePath}static/${defaultImage}`;
}

function checkAvatarImage(image: string) {
    const { basePath } = getConfig().publicRuntimeConfig;

    if (image) {
        return `${image}`;
    }

    return `${basePath}static/defaultAvatar.jpg`;
}

function renderUsers(users: IUser[]) {
    if (users.length) {
        const usersLog = users.map((user) => {
            return (
                <div key={`${user.id}`} className="avatar-wrapper">
                    <img className="user-avatar" src={checkAvatarImage(user.userAvatar)}
                         alt={`${user.userLogin}_avatar`} title={`${user.userLogin}`}/>
                    {user.AdventureUsers!.passCount > 1 &&
                    <span className="pass-counter">{`${user.AdventureUsers!.passCount}`}</span>}
                </div>
            );
        });

        return (
            <div className="avatar-block">
                {usersLog}
            </div>
        );
    }
}

export default function AdventureCreate({
    image, name, description,
    firstSceneNumber, tripName, tags, defaultImage, users
}: IAdventure) {
    return (
        <article className="adventure">
            <div className="adventure-list__wrapper">
                <div className="adventure__image-container">
                    <Link href="/pages/scenePage.tsx" as={`/${tripName}/${firstSceneNumber}`}>
                        <a>
                            <img src={checkAdventureImage(image, defaultImage)}
                                 alt={`${name}_image`}
                                 className="adventure__image"/>
                        </a>
                    </Link>
                </div>
                <div className="adventure__info">
                    <Link href="/pages/scenePage.tsx" as={`/${tripName}/${firstSceneNumber}`}>
                        <a className="adventure__name">
                            {`${name}`}
                        </a>
                    </Link>
                    <p className="adventure__description">
                        {`${description}`}
                    </p>
                    {renderUsers(users)}
                    <div className="adventure__tags">
                        {renderTags(tags)}
                    </div>
                </div>
            </div>
        </article>
    );
}
