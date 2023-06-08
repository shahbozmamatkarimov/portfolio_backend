import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateContentDto {
  @ApiProperty({ example: 'content title...', description: 'content title' })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    example: 'this is description...',
    description: 'content description',
  })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({ example: '1', description: 'comment id' })
  @IsNotEmpty()
  @IsNumber()
  comment_id: number;
}
