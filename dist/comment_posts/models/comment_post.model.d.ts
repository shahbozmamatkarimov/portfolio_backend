import { Model } from 'sequelize-typescript';
import { User } from '../../user/models/user.model';
import { Content } from '../../content/models/content.model';
interface CommentPostAttr {
    comment: string;
}
export declare class CommentPost extends Model<CommentPost, CommentPostAttr> {
    id: number;
    comment: string;
    user_id: number;
    users: User[];
    content_id: number;
    contents: Content[];
}
export {};
