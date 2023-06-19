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
import { CommentPostsService } from './comment_posts.service';
import { CreateCommentPostDto } from './dto/create-comment_post.dto';
import { UpdateCommentPostDto } from './dto/update-comment_post.dto';
import { JwtGuard } from 'src/guards/jwt.guard';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('CommentPosts')
@Controller('comment-posts')
export class CommentPostsController {
  constructor(private readonly commentPostsService: CommentPostsService) {}

  @ApiOperation({ summary: 'create a new comment' })
  @UseGuards(JwtGuard)
  @Post('/create')
  create(@Body() createCommentPostDto: CreateCommentPostDto) {
    return this.commentPostsService.create(createCommentPostDto);
  }

  @ApiOperation({ summary: 'get all comments' })
  @Get()
  findAll() {
    return this.commentPostsService.findAll();
  }

  @ApiOperation({ summary: 'get comments by id' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentPostsService.findOne(+id);
  }

  @ApiOperation({ summary: 'update comment by id' })
  @UseGuards(JwtGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCommentPostDto: UpdateCommentPostDto,
  ) {
    return this.commentPostsService.update(+id, updateCommentPostDto);
  }

  @ApiOperation({ summary: 'delete comment by id' })
  @UseGuards(JwtGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentPostsService.remove(+id);
  }
}
