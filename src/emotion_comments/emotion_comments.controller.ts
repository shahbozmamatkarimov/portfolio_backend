import { Controller } from '@nestjs/common';
import { EmotionCommentsService } from './emotion_comments.service';

@Controller('emotion-comments')
export class EmotionCommentsController {
  constructor(private readonly emotionCommentsService: EmotionCommentsService) {}
}
