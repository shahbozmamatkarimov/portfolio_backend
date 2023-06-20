import { Model } from 'sequelize-typescript';
interface ProjectAttr {
    image: string;
    title: string;
    description: string;
    start_time: string;
    end_time: string;
    link: string;
    github_link: string;
    languages: string;
}
export declare class Project extends Model<Project, ProjectAttr> {
    id: number;
    image: string;
    start_time: string;
    end_time: string;
    title: string;
    description: string;
    link: string;
    github_link: string;
    languages: string;
}
export {};
