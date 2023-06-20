import { Model } from 'sequelize-typescript';
interface UserAttributes {
    first_name: string;
    last_name: string;
    email: string;
    hashed_password: string;
    is_active: boolean;
    hashed_refresh_token: string;
}
export declare class User extends Model<User, UserAttributes> {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    hashed_password: string;
    is_active: boolean;
    hashed_refresh_token: string;
}
export {};
