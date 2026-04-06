import { UserController } from './users.controllers';
import { Module } from "@nestjs/common";

@Module({
  imports:[],
  controllers:[UserController],
  providers:[]
})

export class UserModule {}

