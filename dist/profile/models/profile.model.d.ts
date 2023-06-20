import { Model } from 'sequelize-typescript';
interface ProfileAttr {
    image: string;
    company: string;
    first_name: string;
    last_name: string;
    city: string;
    district: string;
    address: string;
    description: string;
}
export declare class Profile extends Model<Profile, ProfileAttr> {
    id: number;
    image: string;
    company: string;
    email: string;
    phone: string;
    first_name: string;
    last_name: string;
    city: string;
    district: string;
    address: string;
    description: string;
}
export {};
