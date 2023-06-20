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
exports.NewPasswordUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class NewPasswordUserDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: 'Eshmat123!',
        description: "user's old password",
    }),
    __metadata("design:type", String)
], NewPasswordUserDto.prototype, "old_password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: 'Eshmat123!',
        description: 'new user password',
    }),
    __metadata("design:type", String)
], NewPasswordUserDto.prototype, "new_password", void 0);
exports.NewPasswordUserDto = NewPasswordUserDto;
//# sourceMappingURL=new-password-user.dto.js.map