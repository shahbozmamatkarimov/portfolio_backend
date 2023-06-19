import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';

export class CreateProfileDto {
  @ApiProperty({ example: 'http://url', description: 'admin photo' })
  @IsString()
  image: string;

  @ApiProperty({ example: "Najot ta'lim", description: 'company name' })
  @IsString()
  company: string;

  @ApiProperty({ example: 'example@gmail.com', description: 'admin email' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'http://url', description: 'admin phone number' })
  @IsPhoneNumber()
  phone: string;

  @ApiProperty({ example: 'John', description: 'name' })
  @IsNotEmpty()
  @IsString()
  first_name: string;

  @ApiProperty({ example: 'Doe', description: 'surname' })
  @IsNotEmpty()
  @IsString()
  last_name: string;

  @ApiProperty({
    example: 'Tashkent',
    description: 'city',
  })
  @IsNotEmpty()
  @IsString()
  city: string;

  @ApiProperty({
    example: 'Kattakhurgan',
    description: 'district',
  })
  @IsNotEmpty()
  @IsString()
  district: string;

  @ApiProperty({
    example: '5 street 96-home',
    description: 'address',
  })
  @IsNotEmpty()
  @IsString()
  address: string;

  @ApiProperty({
    example: 'I am a full stack web developer',
    description: 'description',
  })
  @IsNotEmpty()
  @IsString()
  description: string;
}
