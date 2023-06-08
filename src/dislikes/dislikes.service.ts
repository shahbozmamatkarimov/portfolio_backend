import { Injectable } from '@nestjs/common';
import { CreateDislikeDto } from './dto/create-dislike.dto';
import { UpdateDislikeDto } from './dto/update-dislike.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Dislike } from './models/dislike.model';

@Injectable()
export class DislikesService {
  constructor(@InjectModel(Dislike) private dislikeRepo: typeof Dislike) {}

  create(createDislikeDto: CreateDislikeDto) {
    return this.dislikeRepo.create(createDislikeDto);
  }

  findAll() {
    return this.dislikeRepo.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.dislikeRepo.findOne({ where: { id }, include: { all: true } });
  }

  update(id: number, updateDislikeDto: UpdateDislikeDto) {
    const dislike = this.dislikeRepo.findOne({
      where: { id },
      include: { all: true },
    });
    console.log(dislike);

    return this.dislikeRepo.update(updateDislikeDto, { where: { id } });
  }

  remove(id: number) {
    return this.dislikeRepo.destroy({ where: { id } });
  }
}
