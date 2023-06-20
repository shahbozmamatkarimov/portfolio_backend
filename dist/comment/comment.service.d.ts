import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './models/comment.model';
export declare class CommentService {
    private commentRepo;
    constructor(commentRepo: typeof Comment);
    create(createCommentDto: CreateCommentDto): Promise<Comment>;
    findAll(): Promise<Comment[]>;
    findOne(id: number): Promise<Comment>;
    update(id: number, updateCommentDto: UpdateCommentDto): Promise<[affectedCount: number]>;
    remove(id: number): Promise<number>;
}
