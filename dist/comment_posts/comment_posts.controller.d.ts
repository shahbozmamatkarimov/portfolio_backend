import { CommentPostsService } from './comment_posts.service';
import { CreateCommentPostDto } from './dto/create-comment_post.dto';
import { UpdateCommentPostDto } from './dto/update-comment_post.dto';
export declare class CommentPostsController {
    private readonly commentPostsService;
    constructor(commentPostsService: CommentPostsService);
    create(createCommentPostDto: CreateCommentPostDto): Promise<import("./models/comment_post.model").CommentPost>;
    findAll(): Promise<import("./models/comment_post.model").CommentPost[]>;
    findOne(id: string): Promise<import("./models/comment_post.model").CommentPost>;
    update(id: string, updateCommentPostDto: UpdateCommentPostDto): Promise<[affectedCount: number]>;
    remove(id: string): Promise<number>;
}
