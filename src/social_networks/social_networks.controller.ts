import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { SocialNetworksService } from './social_networks.service';
import { CreateSocialNetworkDto } from './dto/create-social_network.dto';
import { UpdateSocialNetworkDto } from './dto/update-social_network.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IsAdminGuard } from 'src/guards/isAdmin.guard';
import { JwtGuard } from 'src/guards/jwt.guard';

@ApiTags('socialnetworks')
@Controller('socialnetworks')
export class SocialNetworksController {
  constructor(private readonly socialNetworksService: SocialNetworksService) {}

  @ApiOperation({ summary: 'Create a new social network' })
  @Post('/create')
  @UseGuards(IsAdminGuard)
  @UseGuards(JwtGuard)
  create(@Body() createSocialNetworkDto: CreateSocialNetworkDto) {
    return this.socialNetworksService.create(createSocialNetworkDto);
  }

  @ApiOperation({ summary: 'get all social networks' })
  @Get('/findall')
  findAll() {
    return this.socialNetworksService.findAll();
  }

  @ApiOperation({ summary: 'get social network by id' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.socialNetworksService.findOne(+id);
  }

  @ApiOperation({ summary: 'update social network by id' })
  @Put(':id')
  @UseGuards(IsAdminGuard)
  @UseGuards(JwtGuard)
  update(
    @Param('id') id: string,
    @Body() updateSocialNetworkDto: UpdateSocialNetworkDto,
  ) {
    return this.socialNetworksService.update(+id, updateSocialNetworkDto);
  }

  @ApiOperation({ summary: 'delete social network by id' })
  @Delete(':id')
  @UseGuards(IsAdminGuard)
  @UseGuards(JwtGuard)
  remove(@Param('id') id: string) {
    return this.socialNetworksService.remove(+id);
  }
}
