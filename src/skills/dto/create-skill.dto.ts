import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSkillDto {
  @ApiProperty({ example: 'html', description: 'portfolio' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 'https://image_url', description: 'image url' })
  @IsNotEmpty()
  @IsString()
  image: string;

  @ApiProperty({
    example: 'https://url',
    description: 'project link',
  })
  @IsNotEmpty()
  @IsString()
  link: string;
}
