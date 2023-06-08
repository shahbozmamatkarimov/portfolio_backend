import { Module } from '@nestjs/common';
import { ContentService } from './content.service';
import { ContentController } from './content.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Content } from './models/content.model';
import { Comment } from '../comment/models/comment.model';

@Module({
  imports: [SequelizeModule.forFeature([Content, Comment])],
  controllers: [ContentController],
  providers: [ContentService],
})
export class ContentModule {}
