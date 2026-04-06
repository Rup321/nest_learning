import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TweetModule } from './tweet/tweet.module';
import { UserModule } from './users/users.module';

@Module({
  imports: [TweetModule,UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
