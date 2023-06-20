import { Model } from 'sequelize-typescript';
interface AdminAttributes {
    username: string;
    email: string;
    hashed_password: string;
    is_admin: boolean;
    hashed_refresh_token: string;
}
export declare class Admin extends Model<Admin, AdminAttributes> {
    id: number;
    username: string;
    email: string;
    hashed_password: string;
    is_admin: boolean;
    hashed_refresh_token: string;
}
export {};
