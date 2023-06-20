import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateContentDto {
  @ApiProperty({
    example: 'this is...',
    description: 'content description',
  })
  @IsNotEmpty()
  @IsString()
  content: string;

  @ApiProperty({
    example: 'https://url',
    description: 'image',
  })
  @IsString()
  image: string;
}
