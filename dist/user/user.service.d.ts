import { User } from './models/user.model';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto';
import { Response } from 'express';
import { LoginDto } from './dto/login.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NewPasswordUserDto } from './dto/new-password-user.dto';
import { EmailUserDto } from './dto/email-user.dto';
export declare class UserService {
    private userRepository;
    private readonly jwtService;
    constructor(userRepository: typeof User, jwtService: JwtService);
    signup(registerDto: RegisterDto, res: Response): Promise<{
        tokens: any;
        user: User;
    }>;
    signin(loginDto: LoginDto, res: Response): Promise<{
        tokens: any;
        user: User;
    }>;
    signout(refresh_token: string, res: Response): Promise<{
        message: string;
        user: User;
    }>;
    update(updateUserDto: UpdateUserDto, id: number): Promise<User>;
    newPassword(newPasswordUserDto: NewPasswordUserDto, id: number): Promise<{
        message: string;
        user: User;
    }>;
    findAll(): Promise<User[]>;
    findById(id: number): Promise<User>;
    findByEmail(emailDto: EmailUserDto): Promise<User>;
    remove(id: number): Promise<User>;
    private generateToken;
    writeToCookie(tokens: any, user: User, res: Response): Promise<{
        tokens: any;
        user: User;
    }>;
}
