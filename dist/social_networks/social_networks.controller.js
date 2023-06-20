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
exports.SocialNetworksController = void 0;
const common_1 = require("@nestjs/common");
const social_networks_service_1 = require("./social_networks.service");
const create_social_network_dto_1 = require("./dto/create-social_network.dto");
const update_social_network_dto_1 = require("./dto/update-social_network.dto");
const swagger_1 = require("@nestjs/swagger");
const isAdmin_guard_1 = require("../guards/isAdmin.guard");
const jwt_guard_1 = require("../guards/jwt.guard");
let SocialNetworksController = class SocialNetworksController {
    constructor(socialNetworksService) {
        this.socialNetworksService = socialNetworksService;
    }
    create(createSocialNetworkDto) {
        return this.socialNetworksService.create(createSocialNetworkDto);
    }
    findAll() {
        return this.socialNetworksService.findAll();
    }
    findOne(id) {
        return this.socialNetworksService.findOne(+id);
    }
    update(id, updateSocialNetworkDto) {
        return this.socialNetworksService.update(+id, updateSocialNetworkDto);
    }
    remove(id) {
        return this.socialNetworksService.remove(+id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create a new social network' }),
    (0, common_1.Post)('/create'),
    (0, common_1.UseGuards)(isAdmin_guard_1.IsAdminGuard),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_social_network_dto_1.CreateSocialNetworkDto]),
    __metadata("design:returntype", void 0)
], SocialNetworksController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'get all social networks' }),
    (0, common_1.Get)('/findall'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SocialNetworksController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'get social network by id' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SocialNetworksController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'update social network by id' }),
    (0, common_1.Put)(':id'),
    (0, common_1.UseGuards)(isAdmin_guard_1.IsAdminGuard),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_social_network_dto_1.UpdateSocialNetworkDto]),
    __metadata("design:returntype", void 0)
], SocialNetworksController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'delete social network by id' }),
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(isAdmin_guard_1.IsAdminGuard),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SocialNetworksController.prototype, "remove", null);
SocialNetworksController = __decorate([
    (0, swagger_1.ApiTags)('socialnetworks'),
    (0, common_1.Controller)('socialnetworks'),
    __metadata("design:paramtypes", [social_networks_service_1.SocialNetworksService])
], SocialNetworksController);
exports.SocialNetworksController = SocialNetworksController;
//# sourceMappingURL=social_networks.controller.js.map