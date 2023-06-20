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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentPost = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const user_model_1 = require("../../user/models/user.model");
const content_model_1 = require("../../content/models/content.model");
let CommentPost = class CommentPost extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], CommentPost.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], CommentPost.prototype, "comment", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_model_1.User),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], CommentPost.prototype, "user_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_model_1.User),
    __metadata("design:type", Array)
], CommentPost.prototype, "users", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => content_model_1.Content),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], CommentPost.prototype, "content_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => content_model_1.Content),
    __metadata("design:type", Array)
], CommentPost.prototype, "contents", void 0);
CommentPost = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'comment_posts' })
], CommentPost);
exports.CommentPost = CommentPost;
//# sourceMappingURL=comment_post.model.js.map