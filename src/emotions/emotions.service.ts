import { Injectable } from '@nestjs/common';
import { CreateEmotionDto } from './dto/create-emotion.dto';
import { UpdateEmotionDto } from './dto/update-emotion.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Emotion } from './models/emotion.model';

@Injectable()
export class EmotionsService {
  constructor(@InjectModel(Emotion) private emotionsRepo: typeof Emotion) {}

  create(createEmotionDto: CreateEmotionDto) {
    return this.emotionsRepo.create(createEmotionDto);
  }

  findAll() {
    return this.emotionsRepo.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.emotionsRepo.findOne({ where: { id }, include: { all: true } });
  }

  update(id: number, updateEmotionDto: UpdateEmotionDto) {
    return this.emotionsRepo.update(updateEmotionDto, { where: { id } });
  }

  remove(id: number) {
    return this.emotionsRepo.destroy({ where: { id } });
  }
}
