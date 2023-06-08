import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DislikeCommentsService } from './dislike_comments.service';
import { CreateDislikeCommentDto } from './dto/create-dislike_comment.dto';
import { UpdateDislikeCommentDto } from './dto/update-dislike_comment.dto';

@Controller('dislike-comments')
export class DislikeCommentsController {
  constructor(private readonly dislikeCommentsService: DislikeCommentsService) {}

  @Post()
  create(@Body() createDislikeCommentDto: CreateDislikeCommentDto) {
    return this.dislikeCommentsService.create(createDislikeCommentDto);
  }

  @Get()
  findAll() {
    return this.dislikeCommentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dislikeCommentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDislikeCommentDto: UpdateDislikeCommentDto) {
    return this.dislikeCommentsService.update(+id, updateDislikeCommentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dislikeCommentsService.remove(+id);
  }
}
