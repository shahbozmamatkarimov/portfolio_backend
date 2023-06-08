import { Injectable } from '@nestjs/common';
import { CreateSocialNetworkDto } from './dto/create-social_network.dto';
import { UpdateSocialNetworkDto } from './dto/update-social_network.dto';
import { InjectModel } from '@nestjs/sequelize';
import { SocialNetwork } from './models/social_network.model';

@Injectable()
export class SocialNetworksService {
  constructor(
    @InjectModel(SocialNetwork)
    private socialNetworksRepo: typeof SocialNetwork,
  ) {}

  create(createSocialNetworkDto: CreateSocialNetworkDto) {
    return this.socialNetworksRepo.create(createSocialNetworkDto);
  }

  findAll() {
    return this.socialNetworksRepo.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.socialNetworksRepo.findOne({
      where: { id },
      include: { all: true },
    });
  }

  update(id: number, updateSocialNetworkDto: UpdateSocialNetworkDto) {
    return this.socialNetworksRepo.update(updateSocialNetworkDto, {
      where: { id },
    });
  }

  remove(id: number) {
    return this.socialNetworksRepo.destroy({ where: { id } });
  }
}
