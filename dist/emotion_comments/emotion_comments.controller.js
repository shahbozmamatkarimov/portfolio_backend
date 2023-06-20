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
exports.EmotionCommentsController = void 0;
const common_1 = require("@nestjs/common");
const emotion_comments_service_1 = require("./emotion_comments.service");
const create_emotion_comment_dto_1 = require("./dto/create-emotion_comment.dto");
const update_emotion_comment_dto_1 = require("./dto/update-emotion_comment.dto");
const swagger_1 = require("@nestjs/swagger");
const jwt_guard_1 = require("../guards/jwt.guard");
const user_self_guard_1 = require("../guards/user-self.guard");
let EmotionCommentsController = class EmotionCommentsController {
    constructor(emotionCommentsService) {
        this.emotionCommentsService = emotionCommentsService;
    }
    create(createEmotionCommentDto) {
        return this.emotionCommentsService.create(createEmotionCommentDto);
    }
    findAll() {
        return this.emotionCommentsService.findAll();
    }
    findOne(id) {
        return this.emotionCommentsService.findOne(+id);
    }
    update(id, updateEmotionCommentDto) {
        return this.emotionCommentsService.update(+id, updateEmotionCommentDto);
    }
    remove(id) {
        return this.emotionCommentsService.remove(+id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'create emotion comment' }),
    (0, common_1.UseGuards)(user_self_guard_1.UserSelfGuard),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_emotion_comment_dto_1.CreateEmotionCommentDto]),
    __metadata("design:returntype", void 0)
], EmotionCommentsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'find all emotion comments' }),
    (0, common_1.Get)('findall'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EmotionCommentsController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'find emotion comment by id' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmotionCommentsController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'update emotion comment' }),
    (0, common_1.UseGuards)(user_self_guard_1.UserSelfGuard),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_emotion_comment_dto_1.UpdateEmotionCommentDto]),
    __metadata("design:returntype", void 0)
], EmotionCommentsController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'delete emotion comment' }),
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(user_self_guard_1.UserSelfGuard),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmotionCommentsController.prototype, "remove", null);
EmotionCommentsController = __decorate([
    (0, swagger_1.ApiTags)('Emotion comments'),
    (0, common_1.Controller)('emotion-comments'),
    __metadata("design:paramtypes", [emotion_comments_service_1.EmotionCommentsService])
], EmotionCommentsController);
exports.EmotionCommentsController = EmotionCommentsController;
//# sourceMappingURL=emotion_comments.controller.js.map