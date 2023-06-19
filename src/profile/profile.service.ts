import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Profile } from './models/profile.model';

@Injectable()
export class ProfileService {
  constructor(@InjectModel(Profile) private profileRepo: typeof Profile) {}

  create(createProfileDto: CreateProfileDto) {
    return this.profileRepo.create(createProfileDto);
  }

  findAll() {
    return this.profileRepo.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.profileRepo.findOne({ where: { id }, include: { all: true } });
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    return this.profileRepo.update(updateProfileDto, { where: { id } });
  }

  remove(id: number) {
    return this.profileRepo.destroy({ where: { id } });
  }
}
