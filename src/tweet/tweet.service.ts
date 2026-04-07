import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/users.services';
 
@Injectable()
export class TweetService {

  constructor(private readonly userService:UserService){}

  tweets:{text:string,Date:string,userId:number}[]=[
{text:"tweet simple",Date:"2023-09-09",userId:1},
{text:"tweet other simple",Date:"2027-09-09",userId:1},
{text:"tweet more  simple",Date:"2024-09-09",userId:2},

 ]

  getTweetById(userId:number){
  let user =this.userService.getUsersById(userId)
  let tweets = this.tweets.filter(t=>t.userId ==userId)
  let response = tweets.map(t=>{return {text:t.text ,name:user?.name}})
  if(!response || response==undefined || response ==null){
    return "No tweet found with this userid"
  }
  else{
    return response
  }
 }
}
