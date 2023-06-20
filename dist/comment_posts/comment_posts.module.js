"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentPostsModule = void 0;
const common_1 = require("@nestjs/common");
const comment_posts_service_1 = require("./comment_posts.service");
const comment_posts_controller_1 = require("./comment_posts.controller");
const sequelize_1 = require("@nestjs/sequelize");
const jwt_1 = require("@nestjs/jwt");
const user_model_1 = require("../user/models/user.model");
const content_model_1 = require("../content/models/content.model");
const comment_post_model_1 = require("./models/comment_post.model");
let CommentPostsModule = class CommentPostsModule {
};
CommentPostsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forFeature([comment_post_model_1.CommentPost, user_model_1.User, content_model_1.Content]),
            jwt_1.JwtModule.register({}),
        ],
        controllers: [comment_posts_controller_1.CommentPostsController],
        providers: [comment_posts_service_1.CommentPostsService],
    })
], CommentPostsModule);
exports.CommentPostsModule = CommentPostsModule;
//# sourceMappingURL=comment_posts.module.js.map