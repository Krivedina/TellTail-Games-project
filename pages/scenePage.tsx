import fetch from 'isomorphic-fetch';
import React, { Component } from 'react';
import { IAchievement, IAction, IScene } from '../server/types';

import getConfig from 'next/config';
import Link from 'next/link';

interface ISceneWrapper {
    scene: IScene;
}

export default class ScenePage extends Component<ISceneWrapper> {
    static async getInitialProps({ asPath, req }: any) {
        const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
        const [, tripName, sceneNumber] = asPath.split('/');
        const res = await fetch(`${baseUrl}/api/scene/${tripName}/${sceneNumber}`);

        return res.json();
    }

    async componentDidUpdate() {
        await this.checkSceneForAchievement();
    }

    async componentDidMount() {
        await this.checkSceneForAchievement();
    }

    async checkSceneForAchievement() {
        if (this.props.scene.achievement.length) {
            const params = new URLSearchParams({ adventureName: this.props.scene.tripName });

            await fetch('/api/userCountPass?' + params);
        }
    }

    checkImage(scene: IScene, basePath: string) {
        if (scene.image) {
            return (
                <div className="scene-image__wrapper">
                    <img src={`${basePath}static/${scene.image}`} alt={`${scene.image}_image`}
                         className="scene__image"/>
                    <p className={`scene__text text__position_${scene.textPosition}`}>
                        {scene.description}
                    </p>
                </div>
            );
        }

        return (
            <div className="scene-text__default">
                <p className="scene__text-default">
                    {scene.description}
                </p>
            </div>
        );
    }

    createAchievementView(scene: IScene, basePath: string) {
        return scene.achievement.map((achievement: IAchievement) => {
            return (
                <div key={achievement.id} className="achievement__wrapper">
                    <img src={`${basePath}static/${achievement.image}`}
                         alt={`${achievement.name}_image`}
                         className="achievement__image"/>
                    <div className="achievement__description">
                        <p className="achievement__description-get">Достижение получено</p>
                        <p className="achievement__description-title">{achievement.name}</p>
                    </div>
                </div>
            );
        });
    }

    createActionsView(scene: IScene) {
        return scene.action.map((action: IAction) => {
            return (
                <Link key={action.id} href="/pages/scenePage.tsx" as={`${action.nextSceneNumber}`}>
                    <a>{action.name}</a>
                </Link>
            );
        });
    }

    render() {
        const scene = this.props.scene;
        const { basePath } = getConfig().publicRuntimeConfig;

        return (
            <section className="scene">
                <article className="scene__wrapper">
                    <div>
                        {this.checkImage(scene, basePath)}
                        <div className="achievement">
                            {this.createAchievementView(scene, basePath)}
                        </div>
                        <div className="tags__wrapper">
                            {this.createActionsView(scene)}
                        </div>
                    </div>
                </article>
            </section>
        );
    }
}
