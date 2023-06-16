import { Module } from '@nestjs/common';
import { EmotionCommentsService } from './emotion_comments.service';
import { EmotionCommentsController } from './emotion_comments.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { EmotionComment } from './models/emotion_comment.model';
import { Project } from '../projects/models/project.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    SequelizeModule.forFeature([EmotionComment, Project]),
    JwtModule.register({}),
  ],
  controllers: [EmotionCommentsController],
  providers: [EmotionCommentsService],
})
export class EmotionCommentsModule {}
