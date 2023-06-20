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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const user_model_1 = require("./models/user.model");
const jwt_1 = require("@nestjs/jwt");
const bcrypt_1 = require("bcrypt");
let UserService = class UserService {
    constructor(userRepository, jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    async signup(registerDto, res) {
        const exist_email = await this.userRepository.findOne({
            where: { email: registerDto.email },
        });
        if (exist_email) {
            throw new common_1.BadRequestException('Email already exists!');
        }
        let hashed_password;
        try {
            hashed_password = await (0, bcrypt_1.hash)(registerDto.password, 7);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
        const new_user = await this.userRepository.create(Object.assign(Object.assign({}, registerDto), { is_active: true, hashed_password }));
        const tokens = await this.generateToken(new_user);
        let hashed_refresh_token;
        try {
            hashed_refresh_token = await (0, bcrypt_1.hash)(tokens.refresh_token, 7);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
        const user = await this.userRepository.update({ hashed_refresh_token }, { where: { id: new_user.id }, returning: true });
        return await this.writeToCookie(tokens, user[1][0], res);
    }
    async signin(loginDto, res) {
        const { email, password } = loginDto;
        const check_email = await this.userRepository.findOne({ where: { email } });
        if (!check_email) {
            throw new common_1.BadRequestException('Email is not registreted!');
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
        check_email.is_active = true;
        const tokens = await this.generateToken(check_email);
        let hashed_refresh_token;
        try {
            hashed_refresh_token = await (0, bcrypt_1.hash)(tokens.refresh_token, 7);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
        const user = await this.userRepository.update({ hashed_refresh_token }, { where: { id: check_email.id }, returning: true });
        return await this.writeToCookie(tokens, user[1][0], res);
    }
    async signout(refresh_token, res) {
        let data;
        try {
            data = await this.jwtService.verify(refresh_token, {
                secret: process.env.REFRESH_TOKEN_KEY,
            });
        }
        catch (error) {
            throw new common_1.ForbiddenException(error.message);
        }
        const user = await this.userRepository.update({ hashed_refresh_token: null }, { where: { id: data.id }, returning: true });
        res.clearCookie('refresh_token');
        return { message: 'User successfully signed out!', user: user[1][0] };
    }
    async update(updateUserDto, id) {
        const user = await this.userRepository.update(updateUserDto, {
            where: { id },
            returning: true,
        });
        return user[1][0];
    }
    async newPassword(newPasswordUserDto, id) {
        const check = await this.userRepository.findOne({ where: { id } });
        let is_match_pass;
        try {
            is_match_pass = await (0, bcrypt_1.compare)(newPasswordUserDto.old_password, check.hashed_password);
            if (!is_match_pass) {
                throw new common_1.BadRequestException('Old password is wrong!');
            }
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
        let hashed_password;
        try {
            hashed_password = await (0, bcrypt_1.hash)(newPasswordUserDto.new_password, 7);
        }
        catch (error) {
            throw new common_1.BadRequestException('Please enter your new password!');
        }
        if (newPasswordUserDto.old_password == newPasswordUserDto.new_password) {
            throw new common_1.BadRequestException('New password is invalid!');
        }
        const user = await this.userRepository.update({ hashed_password }, { where: { id }, returning: true });
        return {
            message: "User's new password has been updated successfully",
            user: user[1][0],
        };
    }
    async findAll() {
        const users = await this.userRepository.findAll({ include: { all: true } });
        if (!users.length) {
            throw new common_1.HttpException('Users not found!', common_1.HttpStatus.NOT_FOUND);
        }
        return users;
    }
    async findById(id) {
        const user = await this.userRepository.findByPk(id);
        if (!user) {
            throw new common_1.HttpException('User not found!', common_1.HttpStatus.NOT_FOUND);
        }
        return user;
    }
    async findByEmail(emailDto) {
        const user = await this.userRepository.findOne({
            where: { email: emailDto.email },
        });
        if (!user) {
            throw new common_1.HttpException('User not found!', common_1.HttpStatus.NOT_FOUND);
        }
        return user;
    }
    async remove(id) {
        const user = await this.userRepository.findOne({ where: { id } });
        await this.userRepository.destroy({ where: { id } });
        return user;
    }
    async generateToken(user) {
        const jwtPayload = {
            id: user.id,
            is_active: user.is_active,
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
    async writeToCookie(tokens, user, res) {
        res.cookie('refresh_token', tokens.refresh_token, {
            maxAge: 15 * 24 * 60 * 60 * 1000,
            httpOnly: true,
        });
        return { tokens, user };
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(user_model_1.User)),
    __metadata("design:paramtypes", [Object, jwt_1.JwtService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map