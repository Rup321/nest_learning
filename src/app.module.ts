import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TweetModule } from './tweet/tweet.module';
import { UserModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { ProfileService } from './profile/profile.service';
import { ProfileController } from './profile/profile.controller';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [TweetModule,UserModule, AuthModule,TypeOrmModule.forRootAsync({
    imports:[],
    inject:[],
useFactory:()=>(
  {
  type:"postgres",
    // entities:[User],
    autoLoadEntities:true,
    synchronize:true,//development only,
    host:"localhost",
    port:5432,
    username:"postgres",
    database:"nestjs",
    password:"root",
    
     
})
     


  }), ProfileModule],
  controllers: [AppController, ProfileController],
  providers: [AppService, ProfileService],
  
})
export class AppModule {}
