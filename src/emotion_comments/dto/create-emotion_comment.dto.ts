import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateEmotionCommentDto {
  @ApiProperty({ example: 'content title...', description: 'like count' })
  @IsNotEmpty()
  @IsNumber()
  likes: number;

  @ApiProperty({ example: '1', description: 'project id' })
  @IsNotEmpty()
  @IsNumber()
  project_id: number;
}
