import { SocialNetworksService } from './social_networks.service';
import { CreateSocialNetworkDto } from './dto/create-social_network.dto';
import { UpdateSocialNetworkDto } from './dto/update-social_network.dto';
export declare class SocialNetworksController {
    private readonly socialNetworksService;
    constructor(socialNetworksService: SocialNetworksService);
    create(createSocialNetworkDto: CreateSocialNetworkDto): Promise<import("./models/social_network.model").SocialNetwork>;
    findAll(): Promise<import("./models/social_network.model").SocialNetwork[]>;
    findOne(id: string): Promise<import("./models/social_network.model").SocialNetwork>;
    update(id: string, updateSocialNetworkDto: UpdateSocialNetworkDto): Promise<[affectedCount: number]>;
    remove(id: string): Promise<number>;
}
