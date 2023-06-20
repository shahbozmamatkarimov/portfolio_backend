import { Model } from 'sequelize-typescript';
interface SkillAttr {
    name: string;
    image: string;
    link: string;
}
export declare class Skill extends Model<Skill, SkillAttr> {
    id: number;
    name: string;
    image: string;
    link: string;
}
export {};
