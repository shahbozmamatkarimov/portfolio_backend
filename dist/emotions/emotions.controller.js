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
exports.EmotionsController = void 0;
const common_1 = require("@nestjs/common");
const emotions_service_1 = require("./emotions.service");
const create_emotion_dto_1 = require("./dto/create-emotion.dto");
const update_emotion_dto_1 = require("./dto/update-emotion.dto");
const user_self_guard_1 = require("../guards/user-self.guard");
const jwt_guard_1 = require("../guards/jwt.guard");
const swagger_1 = require("@nestjs/swagger");
let EmotionsController = class EmotionsController {
    constructor(emotionsService) {
        this.emotionsService = emotionsService;
    }
    create(createEmotionDto) {
        return this.emotionsService.create(createEmotionDto);
    }
    findAll() {
        return this.emotionsService.findAll();
    }
    findOne(id) {
        return this.emotionsService.findOne(+id);
    }
    update(id, updateEmotionDto) {
        return this.emotionsService.update(+id, updateEmotionDto);
    }
    remove(id) {
        return this.emotionsService.remove(+id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'create emotion' }),
    (0, common_1.UseGuards)(user_self_guard_1.UserSelfGuard),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_emotion_dto_1.CreateEmotionDto]),
    __metadata("design:returntype", void 0)
], EmotionsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'findall emotions' }),
    (0, common_1.Get)('/findall'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EmotionsController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'find emotion by id' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmotionsController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'update emotion' }),
    (0, common_1.UseGuards)(user_self_guard_1.UserSelfGuard),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_emotion_dto_1.UpdateEmotionDto]),
    __metadata("design:returntype", void 0)
], EmotionsController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'delete emotion' }),
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(user_self_guard_1.UserSelfGuard),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmotionsController.prototype, "remove", null);
EmotionsController = __decorate([
    (0, swagger_1.ApiTags)('Emotions'),
    (0, common_1.Controller)('emotions'),
    __metadata("design:paramtypes", [emotions_service_1.EmotionsService])
], EmotionsController);
exports.EmotionsController = EmotionsController;
//# sourceMappingURL=emotions.controller.js.map