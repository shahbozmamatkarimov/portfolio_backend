"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmotionCommentsModule = void 0;
const common_1 = require("@nestjs/common");
const emotion_comments_service_1 = require("./emotion_comments.service");
const emotion_comments_controller_1 = require("./emotion_comments.controller");
const sequelize_1 = require("@nestjs/sequelize");
const emotion_comment_model_1 = require("./models/emotion_comment.model");
const project_model_1 = require("../projects/models/project.model");
const jwt_1 = require("@nestjs/jwt");
let EmotionCommentsModule = class EmotionCommentsModule {
};
EmotionCommentsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forFeature([emotion_comment_model_1.EmotionComment, project_model_1.Project]),
            jwt_1.JwtModule.register({}),
        ],
        controllers: [emotion_comments_controller_1.EmotionCommentsController],
        providers: [emotion_comments_service_1.EmotionCommentsService],
    })
], EmotionCommentsModule);
exports.EmotionCommentsModule = EmotionCommentsModule;
//# sourceMappingURL=emotion_comments.module.js.map