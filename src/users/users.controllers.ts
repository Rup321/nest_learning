import { Limit } from './../../node_modules/pkg-dir/node_modules/p-limit/index.d';
import { Body, Controller, DefaultValuePipe, Get, Param, ParseBoolPipe, ParseIntPipe, Patch, Post, Query, ValidationPipe } from "@nestjs/common";
import { UserService } from "./users.services";
import { createUserDto } from './dto/create-users.dto';
import { getUserParamDto } from './dto/get-user-param.dto';
import { updateUserDto } from './dto/update-user.dto';
 
@Controller("/users")

export class UserController{

  constructor(private userService :UserService){

  }
   @Get("")
  getUser(@Query("page",new DefaultValuePipe(1), ParseIntPipe)page:number,@Query('limit',new DefaultValuePipe(10),ParseIntPipe) limit:number,@Param() param:getUserParamDto){
//  let userService = new UserService();
 console.log(param)
//  console.log(query.gender);
//  console.log(page,limit)
//  if(query.gender){
//   return userService.getAllUser().filter(u=>u.gender == query.gender);
//  }
return this.userService.getAllUser()
  }


  @Get(":id")
  getUserById(@Param('id',ParseIntPipe) id:any){
    // let userService = new UserService();
    console.log(typeof id)
    if(!this.userService){
      return "user not found"
    }
return this.userService.getUsersById(id);


  }
  @Post()
  createUser(@Body() user:createUserDto){ 
    //  let user ={id:3,name:"Pooja",age:25,gender:"Female",isMarried:false};
    //  let userService = new UserService();
     console.log(user)
// userService.createUser(user);
return "new user has been created"
  }

  @Patch()
  updateUser(@Body() user:updateUserDto){
console.log(user);
return "user updated successfully"
  }


}