import { Model } from 'sequelize-typescript';
import { Project } from '../../projects/models/project.model';
interface EmotionCommentAttr {
    like: number;
    comment_id: number;
}
export declare class EmotionComment extends Model<EmotionComment, EmotionCommentAttr> {
    id: number;
    like: number;
    project_id: number;
    projects: Project[];
}
export {};
