import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { EmotionsService } from './emotions.service';
import { CreateEmotionDto } from './dto/create-emotion.dto';
import { UpdateEmotionDto } from './dto/update-emotion.dto';
import { UserSelfGuard } from 'src/guards/user-self.guard';
import { JwtGuard } from 'src/guards/jwt.guard';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Emotions')
@Controller('emotions')
export class EmotionsController {
  constructor(private readonly emotionsService: EmotionsService) {}

  @ApiOperation({ summary: 'create emotion' })
  @UseGuards(UserSelfGuard)
  @UseGuards(JwtGuard)
  @Post('/create')
  create(@Body() createEmotionDto: CreateEmotionDto) {
    return this.emotionsService.create(createEmotionDto);
  }

  @ApiOperation({ summary: 'findall emotions' })
  @Get('/findall')
  findAll() {
    return this.emotionsService.findAll();
  }

  @ApiOperation({ summary: 'find emotion by id' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.emotionsService.findOne(+id);
  }

  @ApiOperation({ summary: 'update emotion' })
  @UseGuards(UserSelfGuard)
  @UseGuards(JwtGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmotionDto: UpdateEmotionDto) {
    return this.emotionsService.update(+id, updateEmotionDto);
  }

  @ApiOperation({ summary: 'delete emotion' })
  @Delete(':id')
  @UseGuards(UserSelfGuard)
  @UseGuards(JwtGuard)
  remove(@Param('id') id: string) {
    return this.emotionsService.remove(+id);
  }
}
