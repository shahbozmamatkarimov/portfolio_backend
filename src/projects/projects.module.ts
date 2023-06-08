import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Project } from './models/project.model';
import { Comment } from '../comment/models/comment.model';

@Module({
  imports: [SequelizeModule.forFeature([Project, Comment])],
  controllers: [ProjectsController],
  providers: [ProjectsService],
})
export class ProjectsModule {}
