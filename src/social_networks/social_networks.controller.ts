import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { SocialNetworksService } from './social_networks.service';
import { CreateSocialNetworkDto } from './dto/create-social_network.dto';
import { UpdateSocialNetworkDto } from './dto/update-social_network.dto';

@Controller('socialnetworks')
export class SocialNetworksController {
  constructor(private readonly socialNetworksService: SocialNetworksService) {}

  @Post('/create')
  create(@Body() createSocialNetworkDto: CreateSocialNetworkDto) {
    return this.socialNetworksService.create(createSocialNetworkDto);
  }

  @Get('/findall')
  findAll() {
    return this.socialNetworksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.socialNetworksService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateSocialNetworkDto: UpdateSocialNetworkDto,
  ) {
    return this.socialNetworksService.update(+id, updateSocialNetworkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.socialNetworksService.remove(+id);
  }
}
