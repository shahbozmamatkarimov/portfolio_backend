import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
export declare class ProfileController {
    private readonly profileService;
    constructor(profileService: ProfileService);
    create(createProfileDto: CreateProfileDto): Promise<import("./models/profile.model").Profile>;
    findAll(): Promise<import("./models/profile.model").Profile[]>;
    findOne(id: string): Promise<import("./models/profile.model").Profile>;
    update(id: string, updateProfileDto: UpdateProfileDto): Promise<[affectedCount: number]>;
    remove(id: string): Promise<number>;
}
