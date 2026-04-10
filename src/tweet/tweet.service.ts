import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/users.services';
 
@Injectable()
export class TweetService {

  constructor(private readonly userService:UserService){}
 

  getTweetById(userId:number){

  }
  }
   