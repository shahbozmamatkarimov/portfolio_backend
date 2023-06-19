import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { JwtModule } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';
import { Profile } from './models/profile.model';

@Module({
  imports: [SequelizeModule.forFeature([Profile]), JwtModule.register({})],
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}
