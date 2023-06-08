import { Module } from '@nestjs/common';
import { DislikeCommentsService } from './dislike_comments.service';
import { DislikeCommentsController } from './dislike_comments.controller';

@Module({
  controllers: [DislikeCommentsController],
  providers: [DislikeCommentsService]
})
export class DislikeCommentsModule {}
