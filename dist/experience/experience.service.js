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
exports.ExperienceService = void 0;
const common_1 = require("@nestjs/common");
const experience_model_1 = require("./models/experience.model");
const sequelize_1 = require("@nestjs/sequelize");
let ExperienceService = class ExperienceService {
    constructor(experienceRepo) {
        this.experienceRepo = experienceRepo;
    }
    create(createExperienceDto) {
        return this.experienceRepo.create(createExperienceDto);
    }
    findAll() {
        return this.experienceRepo.findAll({ include: { all: true } });
    }
    findOne(id) {
        return this.experienceRepo.findOne({
            where: { id },
            include: { all: true },
        });
    }
    update(id, updateExperienceDto) {
        return this.experienceRepo.update(updateExperienceDto, { where: { id } });
    }
    remove(id) {
        return this.experienceRepo.destroy({ where: { id } });
    }
};
ExperienceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(experience_model_1.Experience)),
    __metadata("design:paramtypes", [Object])
], ExperienceService);
exports.ExperienceService = ExperienceService;
//# sourceMappingURL=experience.service.js.map