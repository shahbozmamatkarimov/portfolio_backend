"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmotionCommentsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const emotion_comment_model_1 = require("./models/emotion_comment.model");
let EmotionCommentsService = class EmotionCommentsService {
    constructor(emotionCommentRepo) {
        this.emotionCommentRepo = emotionCommentRepo;
    }
    create(createEmotionCommentDto) {
        return this.emotionCommentRepo.create(createEmotionCommentDto);
    }
    findAll() {
        return this.emotionCommentRepo.findAll({ include: { all: true } });
    }
    findOne(id) {
        return this.emotionCommentRepo.findOne({
            where: { id },
            include: { all: true },
        });
    }
    update(id, updateEmotionCommentDto) {
        return this.emotionCommentRepo.update(updateEmotionCommentDto, {
            where: { id },
        });
    }
    remove(id) {
        return this.emotionCommentRepo.destroy({ where: { id } });
    }
};
EmotionCommentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(emotion_comment_model_1.EmotionComment)),
    __metadata("design:paramtypes", [Object])
], EmotionCommentsService);
exports.EmotionCommentsService = EmotionCommentsService;
//# sourceMappingURL=emotion_comments.service.js.map