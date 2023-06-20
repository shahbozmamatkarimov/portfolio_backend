import { Model } from 'sequelize-typescript';
interface ExperienceAttr {
    title: string;
    description: string;
}
export declare class Experience extends Model<Experience, ExperienceAttr> {
    id: number;
    time: string;
    title: string;
    description: string;
    languages: string;
}
export {};
