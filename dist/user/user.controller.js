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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const swagger_1 = require("@nestjs/swagger");
const register_dto_1 = require("./dto/register.dto");
const login_dto_1 = require("./dto/login.dto");
const cookieGetter_decorator_1 = require("../decorators/cookieGetter.decorator");
const update_user_dto_1 = require("./dto/update-user.dto");
const new_password_user_dto_1 = require("./dto/new-password-user.dto");
const email_user_dto_1 = require("./dto/email-user.dto");
const user_self_guard_1 = require("../guards/user-self.guard");
const jwt_guard_1 = require("../guards/jwt.guard");
const isAdmin_guard_1 = require("../guards/isAdmin.guard");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    signup(registerDto, res) {
        return this.userService.signup(registerDto, res);
    }
    signin(loginDto, res) {
        return this.userService.signin(loginDto, res);
    }
    signout(refreshToken, res) {
        return this.userService.signout(refreshToken, res);
    }
    update(updateUserDto, id) {
        return this.userService.update(updateUserDto, id);
    }
    newPassword(newPasswordUserDto, id) {
        return this.userService.newPassword(newPasswordUserDto, id);
    }
    findAll() {
        return this.userService.findAll();
    }
    findById(id) {
        return this.userService.findById(id);
    }
    findByEmail(emailDto) {
        return this.userService.findByEmail(emailDto);
    }
    remove(id) {
        return this.userService.remove(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'user sign up' }),
    (0, common_1.Post)('/signup'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_dto_1.RegisterDto, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "signup", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'user sign in' }),
    (0, common_1.Post)('/signin'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "signin", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'user sign out' }),
    (0, common_1.Post)('/signout'),
    __param(0, (0, cookieGetter_decorator_1.CookieGetter)('refresh_token')),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "signout", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'update user profile' }),
    (0, common_1.Patch)('/info/:id'),
    (0, common_1.UseGuards)(user_self_guard_1.UserSelfGuard),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_user_dto_1.UpdateUserDto, Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'update user password' }),
    (0, common_1.Patch)('/password/:id'),
    (0, common_1.UseGuards)(user_self_guard_1.UserSelfGuard),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [new_password_user_dto_1.NewPasswordUserDto, Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "newPassword", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'get all users' }),
    (0, common_1.Get)('/all'),
    (0, common_1.UseGuards)(isAdmin_guard_1.IsAdminGuard),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'get user by id' }),
    (0, common_1.Get)('/id/:id'),
    (0, common_1.UseGuards)(user_self_guard_1.UserSelfGuard),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'get user by email' }),
    (0, common_1.Get)('/email'),
    (0, common_1.UseGuards)(user_self_guard_1.UserSelfGuard),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [email_user_dto_1.EmailUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findByEmail", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'delete user by id' }),
    (0, common_1.Delete)('/:id'),
    (0, common_1.UseGuards)(isAdmin_guard_1.IsAdminGuard),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "remove", null);
UserController = __decorate([
    (0, swagger_1.ApiTags)('users'),
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map