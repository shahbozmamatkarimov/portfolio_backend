import { Module } from '@nestjs/common';
import { EmotionsService } from './emotions.service';
import { EmotionsController } from './emotions.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Emotion } from './models/emotion.model';
import { Comment } from '../comment/models/comment.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    SequelizeModule.forFeature([Emotion, Comment]),
    JwtModule.register({}),
  ],
  controllers: [EmotionsController],
  providers: [EmotionsService],
})
export class EmotionsModule {}
