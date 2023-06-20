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
exports.CreateProjectDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateProjectDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://image_url', description: 'image url' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Portfolio', description: 'project title' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'this is a project description',
        description: 'poject description',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '01/01/2023',
        description: 'poject start date',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "start_time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '01/01/2023',
        description: 'poject end date',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "end_time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://url',
        description: 'project link',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "link", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://github_url',
        description: 'project github_link',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "github_link", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Html, CSS, Bootstrap, JavaScript, VueJS',
        description: 'project languages',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "languages", void 0);
exports.CreateProjectDto = CreateProjectDto;
//# sourceMappingURL=create-project.dto.js.map