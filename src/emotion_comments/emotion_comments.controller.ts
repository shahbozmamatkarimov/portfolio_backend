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
import { EmotionCommentsService } from './emotion_comments.service';
import { CreateEmotionCommentDto } from './dto/create-emotion_comment.dto';
import { UpdateEmotionCommentDto } from './dto/update-emotion_comment.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/guards/jwt.guard';
import { UserSelfGuard } from 'src/guards/user-self.guard';

@ApiTags('Emotion comments')
@Controller('emotion-comments')
export class EmotionCommentsController {
  constructor(
    private readonly emotionCommentsService: EmotionCommentsService,
  ) {}

  @ApiOperation({ summary: 'create emotion comment' })
  @UseGuards(UserSelfGuard)
  @UseGuards(JwtGuard)
  @Post('/create')
  create(@Body() createEmotionCommentDto: CreateEmotionCommentDto) {
    return this.emotionCommentsService.create(createEmotionCommentDto);
  }

  @ApiOperation({ summary: 'find all emotion comments' })
  @Get('findall')
  findAll() {
    return this.emotionCommentsService.findAll();
  }

  @ApiOperation({ summary: 'find emotion comment by id' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.emotionCommentsService.findOne(+id);
  }

  @ApiOperation({ summary: 'update emotion comment' })
  @UseGuards(UserSelfGuard)
  @UseGuards(JwtGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmotionCommentDto: UpdateEmotionCommentDto,
  ) {
    return this.emotionCommentsService.update(+id, updateEmotionCommentDto);
  }

  @ApiOperation({ summary: 'delete emotion comment' })
  @Delete(':id')
  @UseGuards(UserSelfGuard)
  @UseGuards(JwtGuard)
  remove(@Param('id') id: string) {
    return this.emotionCommentsService.remove(+id);
  }
}
