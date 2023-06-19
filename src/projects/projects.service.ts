import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Project } from './models/project.model';

@Injectable()
export class ProjectsService {
  constructor(@InjectModel(Project) private projectRepo: typeof Project) {}

  create(createProjectDto: CreateProjectDto) {
    return this.projectRepo.create(createProjectDto);
  }

  findAll() {
    return this.projectRepo.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.projectRepo.findOne({ where: { id }, include: { all: true } });
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return this.projectRepo.update(updateProjectDto, { where: { id } });
  }

  remove(id: number) {
    return this.projectRepo.destroy({ where: { id } });
  }
}
