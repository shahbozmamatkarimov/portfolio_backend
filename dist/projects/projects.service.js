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
exports.ProjectsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const project_model_1 = require("./models/project.model");
let ProjectsService = class ProjectsService {
    constructor(projectRepo) {
        this.projectRepo = projectRepo;
    }
    create(createProjectDto) {
        return this.projectRepo.create(createProjectDto);
    }
    findAll() {
        return this.projectRepo.findAll({ include: { all: true } });
    }
    findOne(id) {
        return this.projectRepo.findOne({ where: { id }, include: { all: true } });
    }
    update(id, updateProjectDto) {
        return this.projectRepo.update(updateProjectDto, { where: { id } });
    }
    remove(id) {
        return this.projectRepo.destroy({ where: { id } });
    }
};
ProjectsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(project_model_1.Project)),
    __metadata("design:paramtypes", [Object])
], ProjectsService);
exports.ProjectsService = ProjectsService;
//# sourceMappingURL=projects.service.js.map