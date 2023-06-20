import { Model } from 'sequelize-typescript';
import { User } from '../../user/models/user.model';
import { Project } from '../../projects/models/project.model';
interface CommentAttr {
    comment: string;
    reply: string;
}
export declare class Comment extends Model<Comment, CommentAttr> {
    id: number;
    comment: string;
    reply: string;
    user_id: number;
    users: User[];
    project_id: number;
    projects: Project[];
}
export {};
