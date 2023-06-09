import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, IsDate } from 'class-validator';

export class CreateProjectDto {
  @ApiProperty({ example: 'https://image_url', description: 'image url' })
  @IsNotEmpty()
  @IsString()
  image: string;

  @ApiProperty({ example: 'Portfolio', description: 'project title' })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    example: 'this is a project description',
    description: 'poject description',
  })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({
    example: '01/01/2023',
    description: 'poject start date',
  })
  @IsNotEmpty()
  @IsDate()
  start_time: string;

  @ApiProperty({
    example: '01/01/2023',
    description: 'poject end date',
  })
  @IsNotEmpty()
  @IsDate()
  end_time: string;

  @ApiProperty({
    example: 'https://url',
    description: 'project link',
  })
  @IsNotEmpty()
  @IsString()
  link: string;

  @ApiProperty({
    example: 'https://github_url',
    description: 'project github_link',
  })
  @IsNotEmpty()
  @IsString()
  github_link: string;

  @ApiProperty({
    example: 'Html, CSS, Bootstrap, JavaScript, VueJS',
    description: 'project languages',
  })
  @IsNotEmpty()
  @IsString()
  languages: string;
}
