import { EmotionCommentsService } from './emotion_comments.service';
import { CreateEmotionCommentDto } from './dto/create-emotion_comment.dto';
import { UpdateEmotionCommentDto } from './dto/update-emotion_comment.dto';
export declare class EmotionCommentsController {
    private readonly emotionCommentsService;
    constructor(emotionCommentsService: EmotionCommentsService);
    create(createEmotionCommentDto: CreateEmotionCommentDto): Promise<import("./models/emotion_comment.model").EmotionComment>;
    findAll(): Promise<import("./models/emotion_comment.model").EmotionComment[]>;
    findOne(id: string): Promise<import("./models/emotion_comment.model").EmotionComment>;
    update(id: string, updateEmotionCommentDto: UpdateEmotionCommentDto): Promise<[affectedCount: number]>;
    remove(id: string): Promise<number>;
}
