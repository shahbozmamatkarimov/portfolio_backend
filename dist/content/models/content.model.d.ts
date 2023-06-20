import { Model } from 'sequelize-typescript';
interface ContentAttr {
    title: string;
    description: string;
    comment_id: number;
}
export declare class Content extends Model<Content, ContentAttr> {
    id: number;
    content: string;
}
export {};
