import { Model } from 'sequelize-typescript';
interface MessageAttr {
    fullname: string;
    email: string;
    message: string;
    subject: string;
}
export declare class Message extends Model<Message, MessageAttr> {
    id: number;
    fullname: string;
    email: string;
    message: string;
    subject: string;
}
export {};
