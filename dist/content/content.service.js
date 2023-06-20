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
exports.ContentService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const content_model_1 = require("./models/content.model");
let ContentService = class ContentService {
    constructor(contentRepo) {
        this.contentRepo = contentRepo;
    }
    create(createContentDto) {
        return this.contentRepo.create(createContentDto);
    }
    findAll() {
        return this.contentRepo.findAll({ include: { all: true } });
    }
    findOne(id) {
        return this.contentRepo.findOne({ where: { id }, include: { all: true } });
    }
    update(id, updateContentDto) {
        return this.contentRepo.update(updateContentDto, { where: { id } });
    }
    remove(id) {
        return this.contentRepo.destroy({ where: { id } });
    }
};
ContentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(content_model_1.Content)),
    __metadata("design:paramtypes", [Object])
], ContentService);
exports.ContentService = ContentService;
//# sourceMappingURL=content.service.js.map