import { UserController } from './users.controllers';
import { forwardRef, Module } from "@nestjs/common";
import { UserService } from './users.services';
import { AuthModule } from 'src/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
  imports:[forwardRef(()=>AuthModule),TypeOrmModule.forFeature([User])], //typeorm module need to be write when we are creting new entity
  controllers:[UserController],
  providers:[UserService],
  exports:[UserService] //h ere exportthe service whicver u want to exports
  
})

export class UserModule {}

