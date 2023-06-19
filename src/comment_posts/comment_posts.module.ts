import { Module } from '@nestjs/common';
import { CommentPostsService } from './comment_posts.service';
import { CommentPostsController } from './comment_posts.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { User } from '../user/models/user.model';
import { Content } from '../content/models/content.model';
import { CommentPost } from './models/comment_post.model';

@Module({
  imports: [
    SequelizeModule.forFeature([CommentPost, User, Content]),
    JwtModule.register({}),
  ],
  controllers: [CommentPostsController],
  providers: [CommentPostsService],
})
export class CommentPostsModule {}
