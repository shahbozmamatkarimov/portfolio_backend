import { Injectable } from '@nestjs/common';
import { CreateDislikeCommentDto } from './dto/create-dislike_comment.dto';
import { UpdateDislikeCommentDto } from './dto/update-dislike_comment.dto';

@Injectable()
export class DislikeCommentsService {
  create(createDislikeCommentDto: CreateDislikeCommentDto) {
    return 'This action adds a new dislikeComment';
  }

  findAll() {
    return `This action returns all dislikeComments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dislikeComment`;
  }

  update(id: number, updateDislikeCommentDto: UpdateDislikeCommentDto) {
    return `This action updates a #${id} dislikeComment`;
  }

  remove(id: number) {
    return `This action removes a #${id} dislikeComment`;
  }
}
