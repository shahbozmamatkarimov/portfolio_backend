import { Injectable } from '@nestjs/common';
import { CreateCommentPostDto } from './dto/create-comment_post.dto';
import { UpdateCommentPostDto } from './dto/update-comment_post.dto';
import { CommentPost } from './models/comment_post.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CommentPostsService {
  constructor(
    @InjectModel(CommentPost) private commentPostsRepo: typeof CommentPost,
  ) {}

  create(createCommentPostDto: CreateCommentPostDto) {
    return this.commentPostsRepo.create(createCommentPostDto);
  }

  findAll() {
    return this.commentPostsRepo.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.commentPostsRepo.findOne({
      where: { id },
      include: { all: true },
    });
  }

  update(id: number, updateCommentPostDto: UpdateCommentPostDto) {
    return this.commentPostsRepo.update(updateCommentPostDto, {
      where: { id },
    });
  }

  remove(id: number) {
    return this.commentPostsRepo.destroy({ where: { id } });
  }
}
