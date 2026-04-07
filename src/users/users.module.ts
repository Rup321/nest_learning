import { UserController } from './users.controllers';
import { forwardRef, Module } from "@nestjs/common";
import { UserService } from './users.services';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[forwardRef(()=>AuthModule)],
  controllers:[UserController],
  providers:[UserService],
  exports:[UserService] //h ere exportthe service whicver u want to exports
  
})

export class UserModule {}

