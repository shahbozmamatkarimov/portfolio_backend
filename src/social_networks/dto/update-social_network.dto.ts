import { PartialType } from '@nestjs/swagger';
import { CreateSocialNetworkDto } from './create-social_network.dto';

export class UpdateSocialNetworkDto extends PartialType(CreateSocialNetworkDto) {}
