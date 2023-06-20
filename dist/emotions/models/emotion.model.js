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
exports.Emotion = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const comment_model_1 = require("../../comment/models/comment.model");
let Emotion = class Emotion extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Emotion.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Emotion.prototype, "like", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => comment_model_1.Comment),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Emotion.prototype, "comment_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => comment_model_1.Comment),
    __metadata("design:type", Array)
], Emotion.prototype, "comments", void 0);
Emotion = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'emotions' })
], Emotion);
exports.Emotion = Emotion;
//# sourceMappingURL=emotion.model.js.map