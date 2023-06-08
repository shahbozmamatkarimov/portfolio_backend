import { Injectable } from '@nestjs/common';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Content } from './models/content.model';

@Injectable()
export class ContentService {
  constructor(@InjectModel(Content) private contentRepo: typeof Content) {}

  create(createContentDto: CreateContentDto) {
    return this.contentRepo.create(createContentDto);
  }

  findAll() {
    return this.contentRepo.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.contentRepo.findOne({ where: { id }, include: { all: true } });
  }

  update(id: number, updateContentDto: UpdateContentDto) {
    return this.contentRepo.update(updateContentDto, { where: { id } });
  }

  remove(id: number) {
    return this.contentRepo.destroy({ where: { id } });
  }
}
