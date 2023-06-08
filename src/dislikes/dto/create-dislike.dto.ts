import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateDislikeDto {
  @ApiProperty({ example: '123', description: 'dislikes' })
  @IsNotEmpty()
  @IsNumber()
  dislikes: number;
  @ApiProperty({ example: '1', description: 'project id' })
  @IsNotEmpty()
  @IsNumber()
  project_id: number;
}
