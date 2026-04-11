import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Profile } from './profile.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Profile])]
})
export class ProfileModule {}
