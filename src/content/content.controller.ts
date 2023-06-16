import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ContentService } from './content.service';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/guards/jwt.guard';
import { IsAdminGuard } from '../guards/isAdmin.guard';

@ApiTags('Contents')
@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @ApiOperation({ summary: 'create a new post' })
  @Post('create')
  @UseGuards(IsAdminGuard)
  @UseGuards(JwtGuard)
  create(@Body() createContentDto: CreateContentDto) {
    return this.contentService.create(createContentDto);
  }

  @ApiOperation({ summary: 'get all posts' })
  @Get('findall')
  findAll() {
    return this.contentService.findAll();
  }

  @ApiOperation({ summary: 'get one content by id' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contentService.findOne(+id);
  }

  @ApiOperation({ summary: 'update content by id' })
  @Put(':id')
  @UseGuards(IsAdminGuard)
  @UseGuards(JwtGuard)
  update(@Param('id') id: string, @Body() updateContentDto: UpdateContentDto) {
    return this.contentService.update(+id, updateContentDto);
  }

  @ApiOperation({ summary: 'delete content by id' })
  @Delete(':id')
  @UseGuards(IsAdminGuard)
  @UseGuards(JwtGuard)
  remove(@Param('id') id: string) {
    return this.contentService.remove(+id);
  }
}
