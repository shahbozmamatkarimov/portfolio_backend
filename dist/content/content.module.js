"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentModule = void 0;
const common_1 = require("@nestjs/common");
const content_service_1 = require("./content.service");
const content_controller_1 = require("./content.controller");
const sequelize_1 = require("@nestjs/sequelize");
const content_model_1 = require("./models/content.model");
const comment_model_1 = require("../comment/models/comment.model");
const jwt_1 = require("@nestjs/jwt");
let ContentModule = class ContentModule {
};
ContentModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forFeature([content_model_1.Content, comment_model_1.Comment]),
            jwt_1.JwtModule.register({}),
        ],
        controllers: [content_controller_1.ContentController],
        providers: [content_service_1.ContentService],
    })
], ContentModule);
exports.ContentModule = ContentModule;
//# sourceMappingURL=content.module.js.map