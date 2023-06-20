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
exports.ContentController = void 0;
const common_1 = require("@nestjs/common");
const content_service_1 = require("./content.service");
const create_content_dto_1 = require("./dto/create-content.dto");
const update_content_dto_1 = require("./dto/update-content.dto");
const swagger_1 = require("@nestjs/swagger");
const jwt_guard_1 = require("../guards/jwt.guard");
const isAdmin_guard_1 = require("../guards/isAdmin.guard");
let ContentController = class ContentController {
    constructor(contentService) {
        this.contentService = contentService;
    }
    create(createContentDto) {
        return this.contentService.create(createContentDto);
    }
    findAll() {
        return this.contentService.findAll();
    }
    findOne(id) {
        return this.contentService.findOne(+id);
    }
    update(id, updateContentDto) {
        return this.contentService.update(+id, updateContentDto);
    }
    remove(id) {
        return this.contentService.remove(+id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'create a new post' }),
    (0, common_1.Post)('create'),
    (0, common_1.UseGuards)(isAdmin_guard_1.IsAdminGuard),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_content_dto_1.CreateContentDto]),
    __metadata("design:returntype", void 0)
], ContentController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'get all posts' }),
    (0, common_1.Get)('findall'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ContentController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'get one content by id' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContentController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'update content by id' }),
    (0, common_1.Put)(':id'),
    (0, common_1.UseGuards)(isAdmin_guard_1.IsAdminGuard),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_content_dto_1.UpdateContentDto]),
    __metadata("design:returntype", void 0)
], ContentController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'delete content by id' }),
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(isAdmin_guard_1.IsAdminGuard),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContentController.prototype, "remove", null);
ContentController = __decorate([
    (0, swagger_1.ApiTags)('Contents'),
    (0, common_1.Controller)('content'),
    __metadata("design:paramtypes", [content_service_1.ContentService])
], ContentController);
exports.ContentController = ContentController;
//# sourceMappingURL=content.controller.js.map