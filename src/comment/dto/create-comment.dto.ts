import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCommentDto {
  @ApiProperty({ example: 'your comment...', description: 'comment' })
  @IsNotEmpty()
  @IsString()
  comment: string;

  @ApiProperty({ example: 'comment reply...', description: 'reply' })
  @IsString()
  reply: string;

  @ApiProperty({ example: '1', description: 'user id' })
  @IsNotEmpty()
  @IsNumber()
  user_id: number;

  @ApiProperty({ example: '1', description: 'project id' })
  @IsNotEmpty()
  @IsNumber()
  project_id: number;
}
