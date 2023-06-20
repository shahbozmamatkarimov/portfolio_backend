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
exports.CommentPostsController = void 0;
const common_1 = require("@nestjs/common");
const comment_posts_service_1 = require("./comment_posts.service");
const create_comment_post_dto_1 = require("./dto/create-comment_post.dto");
const update_comment_post_dto_1 = require("./dto/update-comment_post.dto");
const jwt_guard_1 = require("../guards/jwt.guard");
const swagger_1 = require("@nestjs/swagger");
let CommentPostsController = class CommentPostsController {
    constructor(commentPostsService) {
        this.commentPostsService = commentPostsService;
    }
    create(createCommentPostDto) {
        return this.commentPostsService.create(createCommentPostDto);
    }
    findAll() {
        return this.commentPostsService.findAll();
    }
    findOne(id) {
        return this.commentPostsService.findOne(+id);
    }
    update(id, updateCommentPostDto) {
        return this.commentPostsService.update(+id, updateCommentPostDto);
    }
    remove(id) {
        return this.commentPostsService.remove(+id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'create a new comment' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_comment_post_dto_1.CreateCommentPostDto]),
    __metadata("design:returntype", void 0)
], CommentPostsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'get all comments' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CommentPostsController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'get comments by id' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CommentPostsController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'update comment by id' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_comment_post_dto_1.UpdateCommentPostDto]),
    __metadata("design:returntype", void 0)
], CommentPostsController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'delete comment by id' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CommentPostsController.prototype, "remove", null);
CommentPostsController = __decorate([
    (0, swagger_1.ApiTags)('CommentPosts'),
    (0, common_1.Controller)('comment-posts'),
    __metadata("design:paramtypes", [comment_posts_service_1.CommentPostsService])
], CommentPostsController);
exports.CommentPostsController = CommentPostsController;
//# sourceMappingURL=comment_posts.controller.js.map