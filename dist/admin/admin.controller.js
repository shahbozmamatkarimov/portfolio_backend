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
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const admin_service_1 = require("./admin.service");
const swagger_1 = require("@nestjs/swagger");
const create_admin_dto_1 = require("./dto/create-admin.dto");
const login_admin_dto_1 = require("./dto/login-admin.dto");
const cookieGetter_decorator_1 = require("../decorators/cookieGetter.decorator");
const update_admin_info_dto_1 = require("./dto/update-admin-info.dto");
const new_password_dto_1 = require("./dto/new-password.dto");
const isAdmin_guard_1 = require("../guards/isAdmin.guard");
const jwt_guard_1 = require("../guards/jwt.guard");
let AdminController = class AdminController {
    constructor(adminService) {
        this.adminService = adminService;
    }
    signup(createAdminDto) {
        return this.adminService.createAdmin(createAdminDto);
    }
    login(loginAdminDto, res) {
        return this.adminService.login(loginAdminDto, res);
    }
    logout(refreshToken, res) {
        return this.adminService.logout(refreshToken, res);
    }
    updateInfo(updateAdminInfo, id) {
        return this.adminService.updateInfo(updateAdminInfo, id);
    }
    newPassword(newPasswordDto, id) {
        return this.adminService.newPassword(newPasswordDto, id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'create admin' }),
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_admin_dto_1.CreateAdminDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "signup", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'admin login' }),
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_admin_dto_1.LoginAdminDto, Object]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "login", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'admin log out' }),
    (0, common_1.Post)('/logout'),
    __param(0, (0, cookieGetter_decorator_1.CookieGetter)('refresh_token')),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "logout", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'update admin info' }),
    (0, common_1.Put)('/update/:id'),
    (0, common_1.UseGuards)(isAdmin_guard_1.IsAdminGuard),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_admin_info_dto_1.UpdateAdminInfo, Number]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "updateInfo", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'admin new password' }),
    (0, common_1.Put)('/new-password/:id'),
    (0, common_1.UseGuards)(isAdmin_guard_1.IsAdminGuard),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [new_password_dto_1.NewPasswordDto, Number]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "newPassword", null);
AdminController = __decorate([
    (0, swagger_1.ApiTags)('admins'),
    (0, common_1.Controller)('admin'),
    __metadata("design:paramtypes", [admin_service_1.AdminService])
], AdminController);
exports.AdminController = AdminController;
//# sourceMappingURL=admin.controller.js.map