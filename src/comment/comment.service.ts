import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Comment } from './models/comment.model';

@Injectable()
export class CommentService {
  constructor(@InjectModel(Comment) private commentRepo: typeof Comment) {}

  create(createCommentDto: CreateCommentDto) {
    return this.commentRepo.create(createCommentDto);
  }

  findAll() {
    return this.commentRepo.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.commentRepo.findOne({ where: { id }, include: { all: true } });
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return this.commentRepo.update(updateCommentDto, { where: { id } });
  }

  remove(id: number) {
    return this.commentRepo.destroy({ where: { id } });
  }
}
