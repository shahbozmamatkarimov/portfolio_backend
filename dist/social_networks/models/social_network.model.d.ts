import { Model } from 'sequelize-typescript';
interface SocialNetworkAttr {
    name: string;
    link: string;
    icon: string;
}
export declare class SocialNetwork extends Model<SocialNetwork, SocialNetworkAttr> {
    id: number;
    name: string;
    link: string;
    icon: string;
}
export {};
