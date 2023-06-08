import { Module } from '@nestjs/common';
import { EmotionCommentsService } from './emotion_comments.service';
import { EmotionCommentsController } from './emotion_comments.controller';

@Module({
  controllers: [EmotionCommentsController],
  providers: [EmotionCommentsService]
})
export class EmotionCommentsModule {}
