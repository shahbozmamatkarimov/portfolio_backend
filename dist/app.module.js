"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const admin_model_1 = require("./admin/models/admin.model");
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const serve_static_1 = require("@nestjs/serve-static");
const config_1 = require("@nestjs/config");
const path_1 = require("path");
const sequelize_1 = require("@nestjs/sequelize");
const admin_module_1 = require("./admin/admin.module");
const comment_module_1 = require("./comment/comment.module");
const projects_module_1 = require("./projects/projects.module");
const skills_module_1 = require("./skills/skills.module");
const content_module_1 = require("./content/content.module");
const social_networks_module_1 = require("./social_networks/social_networks.module");
const experience_module_1 = require("./experience/experience.module");
const message_module_1 = require("./message/message.module");
const comment_model_1 = require("./comment/models/comment.model");
const project_model_1 = require("./projects/models/project.model");
const skill_model_1 = require("./skills/models/skill.model");
const content_model_1 = require("./content/models/content.model");
const social_network_model_1 = require("./social_networks/models/social_network.model");
const experience_model_1 = require("./experience/models/experience.model");
const message_model_1 = require("./message/models/message.model");
const emotions_module_1 = require("./emotions/emotions.module");
const emotion_comments_module_1 = require("./emotion_comments/emotion_comments.module");
const user_model_1 = require("./user/models/user.model");
const user_module_1 = require("./user/user.module");
const emotion_model_1 = require("./emotions/models/emotion.model");
const emotion_comment_model_1 = require("./emotion_comments/models/emotion_comment.model");
const profile_module_1 = require("./profile/profile.module");
const comment_posts_module_1 = require("./comment_posts/comment_posts.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.resolve)(__dirname, 'static'),
            }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'postgres',
                host: process.env.POSTGRES_HOST,
                port: Number(process.env.POSTGRES_PORT),
                username: process.env.POSTGRES_USER,
                password: String(process.env.POSTGRES_PASSWORD),
                database: process.env.POSTGRES_DB,
                models: [
                    admin_model_1.Admin,
                    comment_model_1.Comment,
                    project_model_1.Project,
                    skill_model_1.Skill,
                    content_model_1.Content,
                    social_network_model_1.SocialNetwork,
                    experience_model_1.Experience,
                    message_model_1.Message,
                    emotion_model_1.Emotion,
                    emotion_comment_model_1.EmotionComment,
                    user_model_1.User,
                ],
                autoLoadModels: true,
                logging: true,
            }),
            admin_module_1.AdminModule,
            comment_module_1.CommentModule,
            projects_module_1.ProjectsModule,
            skills_module_1.SkillsModule,
            content_module_1.ContentModule,
            social_networks_module_1.SocialNetworksModule,
            experience_module_1.ExperienceModule,
            message_module_1.MessageModule,
            user_module_1.UserModule,
            emotions_module_1.EmotionsModule,
            emotion_comments_module_1.EmotionCommentsModule,
            profile_module_1.ProfileModule,
            comment_posts_module_1.CommentPostsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map