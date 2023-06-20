import { Model } from 'sequelize-typescript';
import { Comment } from '../../comment/models/comment.model';
interface EmotionAttr {
    like: number;
    comment_id: number;
}
export declare class Emotion extends Model<Emotion, EmotionAttr> {
    id: number;
    like: number;
    comment_id: number;
    comments: Comment[];
}
export {};
