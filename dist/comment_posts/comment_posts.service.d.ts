import { CreateCommentPostDto } from './dto/create-comment_post.dto';
import { UpdateCommentPostDto } from './dto/update-comment_post.dto';
import { CommentPost } from './models/comment_post.model';
export declare class CommentPostsService {
    private commentPostsRepo;
    constructor(commentPostsRepo: typeof CommentPost);
    create(createCommentPostDto: CreateCommentPostDto): Promise<CommentPost>;
    findAll(): Promise<CommentPost[]>;
    findOne(id: number): Promise<CommentPost>;
    update(id: number, updateCommentPostDto: UpdateCommentPostDto): Promise<[affectedCount: number]>;
    remove(id: number): Promise<number>;
}
