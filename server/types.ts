export interface IHashtag {
    id: any;
    name?: any;
    nameAddress: any;
    adventures: any;
}

export interface IQuery {
    search?: any;
    hashtags?: any;
}

export interface IAction {
    id: number;
    name: any;
    nextSceneNumber: any;
    tripName: any;
}

export interface IAchievement {
    id: number;
    name: any;
    image: any;
    sceneId: number;
}

export interface IScene {
    id: number;
    description: string;
    image: string;
    achievement: any;
    action: any;
    textPosition: any;
    tripName: string;
}

export interface IAdventure {
    id: number;
    name: string;
    description: string;
    image: string;
    defaultImage: string;
    tripName: string;
    tags: any;
    users: any;
    scenes: any;
    firstSceneNumber: string;
}

export interface IUser {
    id: number;
    userLogin: any;
    userPassword: any;
    userAvatar?: any;
    AdventureUsers?: IAdventureUser;
}

export interface IAdventureUser {
    userId: any;
    adventureId: any;
    passCount: any;
}

export interface IUserSubmit {
    login: any;
    password: any;
    avatar: any;
}

export interface IUserData {
    login?: any;
    avatar?: any;
}
