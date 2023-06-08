import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSocialNetworkDto {
  @ApiProperty({ example: 'github', description: 'social-media name' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    example: 'https://github.com/url',
    description: 'social-media link',
  })
  @IsNotEmpty()
  @IsString()
  link: string;

  @ApiProperty({
    example:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png',
    description: 'icon',
  })
  @IsNotEmpty()
  @IsString()
  icon: string;
}
