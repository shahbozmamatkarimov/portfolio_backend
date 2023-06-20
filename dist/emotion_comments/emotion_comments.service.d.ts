import { CreateEmotionCommentDto } from './dto/create-emotion_comment.dto';
import { UpdateEmotionCommentDto } from './dto/update-emotion_comment.dto';
import { EmotionComment } from './models/emotion_comment.model';
export declare class EmotionCommentsService {
    private emotionCommentRepo;
    constructor(emotionCommentRepo: typeof EmotionComment);
    create(createEmotionCommentDto: CreateEmotionCommentDto): Promise<EmotionComment>;
    findAll(): Promise<EmotionComment[]>;
    findOne(id: number): Promise<EmotionComment>;
    update(id: number, updateEmotionCommentDto: UpdateEmotionCommentDto): Promise<[affectedCount: number]>;
    remove(id: number): Promise<number>;
}
