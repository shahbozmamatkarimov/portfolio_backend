import { Module } from '@nestjs/common';
import { DislikesService } from './dislikes.service';
import { DislikesController } from './dislikes.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Dislike } from './models/dislike.model';
import { Project } from '../projects/models/project.model';

@Module({
  imports: [SequelizeModule.forFeature([Dislike, Project])],
  controllers: [DislikesController],
  providers: [DislikesService],
})
export class DislikesModule {}
