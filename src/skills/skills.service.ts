import { Injectable } from '@nestjs/common';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Skill } from './models/skill.model';

@Injectable()
export class SkillsService {
  constructor(@InjectModel(Skill) private SkillRepo: typeof Skill) {}

  create(createSkillDto: CreateSkillDto) {
    return this.SkillRepo.create(createSkillDto);
  }

  findAll() {
    return this.SkillRepo.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.SkillRepo.findOne({ where: { id }, include: { all: true } });
  }

  update(id: number, updateSkillDto: UpdateSkillDto) {
    return this.SkillRepo.update(updateSkillDto, { where: { id } });
  }

  remove(id: number) {
    return this.SkillRepo.destroy({ where: { id } });
  }
}
