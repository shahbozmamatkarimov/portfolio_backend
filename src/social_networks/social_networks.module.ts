import { Module } from '@nestjs/common';
import { SocialNetworksService } from './social_networks.service';
import { SocialNetworksController } from './social_networks.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { SocialNetwork } from './models/social_network.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    SequelizeModule.forFeature([SocialNetwork]),
    JwtModule.register({}),
  ],
  controllers: [SocialNetworksController],
  providers: [SocialNetworksService],
})
export class SocialNetworksModule {}
