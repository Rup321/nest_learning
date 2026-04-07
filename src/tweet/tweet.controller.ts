import { TweetService } from './tweet.service';
import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';

@Controller('tweets')
export class TweetController {

  constructor(private tweetService:TweetService){}
@Get(":userId")
  public getTweetById(@Param("userId",ParseIntPipe) userId:number){
    return this.tweetService.getTweetById(userId)
 
  }
}
