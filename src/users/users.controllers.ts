import { Limit } from './../../node_modules/pkg-dir/node_modules/p-limit/index.d';
import { Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Post, Query } from "@nestjs/common";
import { UserService } from "./users.services";
 
@Controller("/users")

export class UserController{
   @Get()
  getUser(@Query("page",new DefaultValuePipe(1), ParseIntPipe)page:number,@Query('limit',new DefaultValuePipe(10),ParseIntPipe) limit:number){
 let userService = new UserService();
//  console.log(query.gender);
 console.log(page,limit)
//  if(query.gender){
//   return userService.getAllUser().filter(u=>u.gender == query.gender);
//  }
return userService.getAllUser()
  }


  @Get(":id")
  getUserById(@Param('id',ParseIntPipe) id:any){
    let userService = new UserService();
    console.log(typeof id)
    if(!userService){
      return "user not found"
    }
return userService.getUsersById(id);


  }
  @Post()
  createUser(){
     let user ={id:3,name:"Pooja",age:25,gender:"Female",isMarried:false};
     let userService = new UserService();
userService.createUser(user);
return "new user has been created"
  }


}