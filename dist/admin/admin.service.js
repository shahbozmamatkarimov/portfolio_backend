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
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const admin_model_1 = require("./models/admin.model");
const jwt_1 = require("@nestjs/jwt");
const bcrypt_1 = require("bcrypt");
let AdminService = class AdminService {
    constructor(adminRepository, jwtService) {
        this.adminRepository = adminRepository;
        this.jwtService = jwtService;
    }
    async createAdmin(createAdminDto) {
        const admins = await this.adminRepository.findAll();
        if (admins.length) {
            throw new common_1.BadRequestException('You are not an admin!');
        }
        let hashed_password;
        try {
            hashed_password = await (0, bcrypt_1.hash)(createAdminDto.password, 7);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
        const admin = await this.adminRepository.create(Object.assign(Object.assign({}, createAdminDto), { hashed_password }));
        return admin;
    }
    async login(loginAdminDto, res) {
        try {
            const { email, password } = loginAdminDto;
            const check_email = await this.adminRepository.findOne({
                where: { email },
            });
            if (!check_email) {
                throw new common_1.BadRequestException('Not found email address!');
            }
            let is_match_pass;
            try {
                is_match_pass = await (0, bcrypt_1.compare)(password, check_email.hashed_password);
                if (!is_match_pass) {
                    throw new common_1.BadRequestException('Wrong password!');
                }
            }
            catch (error) {
                throw new common_1.BadRequestException(error.message);
            }
            const tokens = await this.generateTokenAdmin(check_email);
            let hashed_refresh_token;
            try {
                hashed_refresh_token = await (0, bcrypt_1.hash)(tokens.refresh_token, 7);
            }
            catch (error) {
                throw new common_1.BadRequestException(error.message);
            }
            await this.adminRepository.update({ hashed_refresh_token }, { where: { id: check_email.id }, returning: true });
            await this.writeToCookieAdmin(tokens, res);
            return { access_token: tokens.access_token };
        }
        catch (error) {
            console.log(error.message);
        }
    }
    async logout(refresh_token, res) {
        let data;
        try {
            data = await this.jwtService.verify(refresh_token, {
                secret: process.env.REFRESH_TOKEN_KEY,
            });
        }
        catch (error) {
            throw new common_1.ForbiddenException(error.message);
        }
        await this.adminRepository.update({ hashed_refresh_token: null }, { where: { id: data.id }, returning: true });
        res.clearCookie('refresh_token');
        return { message: 'Admin successfully logged out!' };
    }
    async updateInfo(updateInfo, id) {
        await this.adminRepository.update(updateInfo, {
            where: { id },
            returning: true,
        });
        return { message: "Admin's info has been updated successfully" };
    }
    async newPassword(newPasswordDto, id) {
        const check = await this.adminRepository.findOne({ where: { id } });
        let is_match_pass;
        try {
            is_match_pass = await (0, bcrypt_1.compare)(newPasswordDto.old_password, check.hashed_password);
            if (!is_match_pass) {
                throw new common_1.BadRequestException('Old password is wrong!');
            }
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
        let hashed_password;
        try {
            hashed_password = await (0, bcrypt_1.hash)(newPasswordDto.new_password, 7);
        }
        catch (error) {
            throw new common_1.BadRequestException('Please enter your new password!');
        }
        if (newPasswordDto.old_password == newPasswordDto.new_password) {
            throw new common_1.BadRequestException('New password is invalid!');
        }
        await this.adminRepository.update({ hashed_password }, { where: { id }, returning: true });
        return { message: "Admin's password has been updated successfully" };
    }
    async generateTokenAdmin(admin) {
        const jwtPayload = {
            id: admin.id,
            is_admin: admin.is_admin,
        };
        const [access_token, refresh_token] = await Promise.all([
            this.jwtService.signAsync(jwtPayload, {
                secret: process.env.ACCESS_TOKEN_KEY,
                expiresIn: process.env.ACCESS_TOKEN_TIME,
            }),
            this.jwtService.signAsync(jwtPayload, {
                secret: process.env.REFRESH_TOKEN_KEY,
                expiresIn: process.env.REFRESH_TOKEN_TIME,
            }),
        ]);
        return { access_token, refresh_token };
    }
    async writeToCookieAdmin(tokens, res) {
        res.cookie('refresh_token', tokens.refresh_token, {
            maxAge: 15 * 24 * 60 * 60 * 1000,
            httpOnly: true,
        });
    }
};
AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(admin_model_1.Admin)),
    __metadata("design:paramtypes", [Object, jwt_1.JwtService])
], AdminService);
exports.AdminService = AdminService;
//# sourceMappingURL=admin.service.js.map