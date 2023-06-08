import { PartialType } from '@nestjs/swagger';
import { CreateDislikeCommentDto } from './create-dislike_comment.dto';

export class UpdateDislikeCommentDto extends PartialType(CreateDislikeCommentDto) {}
