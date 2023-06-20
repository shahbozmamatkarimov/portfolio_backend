import { CreateSocialNetworkDto } from './dto/create-social_network.dto';
import { UpdateSocialNetworkDto } from './dto/update-social_network.dto';
import { SocialNetwork } from './models/social_network.model';
export declare class SocialNetworksService {
    private socialNetworksRepo;
    constructor(socialNetworksRepo: typeof SocialNetwork);
    create(createSocialNetworkDto: CreateSocialNetworkDto): Promise<SocialNetwork>;
    findAll(): Promise<SocialNetwork[]>;
    findOne(id: number): Promise<SocialNetwork>;
    update(id: number, updateSocialNetworkDto: UpdateSocialNetworkDto): Promise<[affectedCount: number]>;
    remove(id: number): Promise<number>;
}
