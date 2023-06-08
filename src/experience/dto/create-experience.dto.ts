import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateExperienceDto {
  @ApiProperty({ example: 'Aprel - 2022', description: 'experience time' })
  @IsNotEmpty()
  @IsString()
  time: string;

  @ApiProperty({
    example: 'experience title...',
    description: 'experience title',
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    example: 'this is description...',
    description: 'experience description',
  })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({
    example: 'html, css, javascript, vue',
    description: 'experience languages',
  })
  @IsNotEmpty()
  @IsString()
  languages: string;
}
