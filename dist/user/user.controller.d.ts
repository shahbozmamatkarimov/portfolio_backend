import { UserService } from './user.service';
import { RegisterDto } from './dto/register.dto';
import { Response } from 'express';
import { LoginDto } from './dto/login.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NewPasswordUserDto } from './dto/new-password-user.dto';
import { EmailUserDto } from './dto/email-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    signup(registerDto: RegisterDto, res: Response): Promise<{
        tokens: any;
        user: import("./models/user.model").User;
    }>;
    signin(loginDto: LoginDto, res: Response): Promise<{
        tokens: any;
        user: import("./models/user.model").User;
    }>;
    signout(refreshToken: string, res: Response): Promise<{
        message: string;
        user: import("./models/user.model").User;
    }>;
    update(updateUserDto: UpdateUserDto, id: number): Promise<import("./models/user.model").User>;
    newPassword(newPasswordUserDto: NewPasswordUserDto, id: number): Promise<{
        message: string;
        user: import("./models/user.model").User;
    }>;
    findAll(): Promise<import("./models/user.model").User[]>;
    findById(id: number): Promise<import("./models/user.model").User>;
    findByEmail(emailDto: EmailUserDto): Promise<import("./models/user.model").User>;
    remove(id: number): Promise<import("./models/user.model").User>;
}
