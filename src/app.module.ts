import { Admin } from './admin/models/admin.model';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import { resolve } from 'path';
import { SequelizeModule } from '@nestjs/sequelize';

import { AdminModule } from './admin/admin.module';
import { CommentModule } from './comment/comment.module';
import { ProjectsModule } from './projects/projects.module';
import { SkillsModule } from './skills/skills.module';
import { ContentModule } from './content/content.module';
import { SocialNetworksModule } from './social_networks/social_networks.module';
import { ExperienceModule } from './experience/experience.module';
import { MessageModule } from './message/message.module';
import { UserModule } from './user/user.module';
import { Comment } from './comment/models/comment.model';
import { Project } from './projects/models/project.model';
import { Skill } from './skills/models/skill.model';
import { Content } from './content/models/content.model';
import { SocialNetwork } from './social_networks/models/social_network.model';
import { Experience } from './experience/models/experience.model';
import { Message } from './message/models/message.model';
import { User } from './user/models/user.model';
import { EmotionsModule } from './emotions/emotions.module';
import { DislikesModule } from './dislikes/dislikes.module';
import { DislikeCommentsModule } from './dislike_comments/dislike_comments.module';
import { EmotionCommentsModule } from './emotion_comments/emotion_comments.module';
import { Dislike } from './dislikes/models/dislike.model';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: resolve(__dirname, 'static'),
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),
      database: process.env.POSTGRES_DB,
      models: [
        Admin,
        Comment,
        Project,
        Skill,
        Content,
        SocialNetwork,
        Experience,
        Message,
        User,
        Dislike,
      ],
      autoLoadModels: true,
      logging: true,
    }),
    AdminModule,
    CommentModule,
    ProjectsModule,
    SkillsModule,
    ContentModule,
    SocialNetworksModule,
    ExperienceModule,
    MessageModule,
    UserModule,
    EmotionsModule,
    DislikesModule,
    DislikeCommentsModule,
    EmotionCommentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
