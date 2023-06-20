"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmotionsModule = void 0;
const common_1 = require("@nestjs/common");
const emotions_service_1 = require("./emotions.service");
const emotions_controller_1 = require("./emotions.controller");
const sequelize_1 = require("@nestjs/sequelize");
const emotion_model_1 = require("./models/emotion.model");
const comment_model_1 = require("../comment/models/comment.model");
const jwt_1 = require("@nestjs/jwt");
let EmotionsModule = class EmotionsModule {
};
EmotionsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forFeature([emotion_model_1.Emotion, comment_model_1.Comment]),
            jwt_1.JwtModule.register({}),
        ],
        controllers: [emotions_controller_1.EmotionsController],
        providers: [emotions_service_1.EmotionsService],
    })
], EmotionsModule);
exports.EmotionsModule = EmotionsModule;
//# sourceMappingURL=emotions.module.js.map