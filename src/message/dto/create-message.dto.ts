import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateMessageDto {
  @ApiProperty({ example: 'John Doe', description: 'fullname' })
  @IsNotEmpty()
  @IsString()
  fullname: string;

  @ApiProperty({
    example: 'example@gmail.com',
    description: 'user email',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'user message',
    description: 'message',
  })
  @IsNotEmpty()
  @IsString()
  message: string;

  @ApiProperty({
    example: 'about your experience',
    description: 'user message subject',
  })
  @IsNotEmpty()
  @IsString()
  subject: string;
}
