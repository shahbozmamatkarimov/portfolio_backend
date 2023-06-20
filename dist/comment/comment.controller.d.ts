import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    create(createCommentDto: CreateCommentDto): Promise<import("./models/comment.model").Comment>;
    findAll(): Promise<import("./models/comment.model").Comment[]>;
    findOne(id: string): Promise<import("./models/comment.model").Comment>;
    update(id: string, updateCommentDto: UpdateCommentDto): Promise<[affectedCount: number]>;
    remove(id: string): Promise<number>;
}
