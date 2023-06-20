import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './models/profile.model';
export declare class ProfileService {
    private profileRepo;
    constructor(profileRepo: typeof Profile);
    create(createProfileDto: CreateProfileDto): Promise<Profile>;
    findAll(): Promise<Profile[]>;
    findOne(id: number): Promise<Profile>;
    update(id: number, updateProfileDto: UpdateProfileDto): Promise<[affectedCount: number]>;
    remove(id: number): Promise<number>;
}
