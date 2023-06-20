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
exports.CreateProfileDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateProfileDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'http://url', description: 'admin photo' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Najot ta'lim", description: 'company name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "company", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'example@gmail.com', description: 'admin email' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'http://url', description: 'admin phone number' }),
    (0, class_validator_1.IsPhoneNumber)(),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'John', description: 'name' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "first_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Doe', description: 'surname' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "last_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Tashkent',
        description: 'city',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Kattakhurgan',
        description: 'district',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "district", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '5 street 96-home',
        description: 'address',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'I am a full stack web developer',
        description: 'description',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "description", void 0);
exports.CreateProfileDto = CreateProfileDto;
//# sourceMappingURL=create-profile.dto.js.map