import { Injectable } from '@nestjs/common';
import { CreateEmotionCommentDto } from './dto/create-emotion_comment.dto';
import { UpdateEmotionCommentDto } from './dto/update-emotion_comment.dto';
import { InjectModel } from '@nestjs/sequelize';
import { EmotionComment } from './models/emotion_comment.model';

@Injectable()
export class EmotionCommentsService {
  constructor(
    @InjectModel(EmotionComment)
    private emotionCommentRepo: typeof EmotionComment,
  ) {}

  create(createEmotionCommentDto: CreateEmotionCommentDto) {
    return this.emotionCommentRepo.create(createEmotionCommentDto);
  }

  findAll() {
    return this.emotionCommentRepo.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.emotionCommentRepo.findOne({
      where: { id },
      include: { all: true },
    });
  }

  update(id: number, updateEmotionCommentDto: UpdateEmotionCommentDto) {
    return this.emotionCommentRepo.update(updateEmotionCommentDto, {
      where: { id },
    });
  }

  remove(id: number) {
    return this.emotionCommentRepo.destroy({ where: { id } });
  }
}
