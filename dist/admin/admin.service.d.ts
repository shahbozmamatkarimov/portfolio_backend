import { Admin } from './models/admin.model';
import { JwtService } from '@nestjs/jwt';
import { CreateAdminDto } from './dto/create-admin.dto';
import { LoginAdminDto } from './dto/login-admin.dto';
import { Response } from 'express';
import { UpdateAdminInfo } from './dto/update-admin-info.dto';
import { NewPasswordDto } from './dto/new-password.dto';
export declare class AdminService {
    private adminRepository;
    private jwtService;
    constructor(adminRepository: typeof Admin, jwtService: JwtService);
    createAdmin(createAdminDto: CreateAdminDto): Promise<Admin>;
    login(loginAdminDto: LoginAdminDto, res: Response): Promise<{
        access_token: string;
    }>;
    logout(refresh_token: string, res: Response): Promise<{
        message: string;
    }>;
    updateInfo(updateInfo: UpdateAdminInfo, id: number): Promise<{
        message: string;
    }>;
    newPassword(newPasswordDto: NewPasswordDto, id: number): Promise<{
        message: string;
    }>;
    private generateTokenAdmin;
    writeToCookieAdmin(tokens: any, res: Response): Promise<void>;
}
