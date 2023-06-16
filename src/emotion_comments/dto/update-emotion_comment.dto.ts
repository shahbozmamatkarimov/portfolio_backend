import { PartialType } from '@nestjs/swagger';
import { CreateEmotionCommentDto } from './create-emotion_comment.dto';

export class UpdateEmotionCommentDto extends PartialType(CreateEmotionCommentDto) {}
