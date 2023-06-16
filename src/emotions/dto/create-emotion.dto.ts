import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateEmotionDto {
  @ApiProperty({ example: 'content title...', description: 'like count' })
  @IsNotEmpty()
  @IsNumber()
  likes: number;

  @ApiProperty({ example: '1', description: 'comment id' })
  @IsNotEmpty()
  @IsNumber()
  comment_id: number;
}
