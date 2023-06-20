import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { LoginAdminDto } from './dto/login-admin.dto';
import { Response } from 'express';
import { UpdateAdminInfo } from './dto/update-admin-info.dto';
import { NewPasswordDto } from './dto/new-password.dto';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    signup(createAdminDto: CreateAdminDto): Promise<import("./models/admin.model").Admin>;
    login(loginAdminDto: LoginAdminDto, res: Response): Promise<{
        access_token: string;
    }>;
    logout(refreshToken: string, res: Response): Promise<{
        message: string;
    }>;
    updateInfo(updateAdminInfo: UpdateAdminInfo, id: number): Promise<{
        message: string;
    }>;
    newPassword(newPasswordDto: NewPasswordDto, id: number): Promise<{
        message: string;
    }>;
}
