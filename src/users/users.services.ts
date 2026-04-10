import { createUserDto } from './dto/create-users.dto';
import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { AuthService } from "src/auth/auth.service";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UserService{

  constructor( 
    @InjectRepository(User)
    private userRepository:Repository<User> 
  ){}
   

  getAllUser(){
  return  this.userRepository.find();
    
  }

  
 public async createUser(userDto:createUserDto){
   let user  = await this.userRepository.find({where:{
    email:userDto.email
   }})
   
    if(user.length>0){
      return "user already exist with this email"
    }

    let newuser = await this.userRepository.create(userDto);
    newuser = await this.userRepository.save(newuser);
    return newuser
  }
      
    
  
}