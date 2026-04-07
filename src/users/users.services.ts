import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { AuthService } from "src/auth/auth.service";

@Injectable()
export class UserService{

  constructor(@Inject(forwardRef(()=>AuthService))private readonly authService :AuthService){}
   users:{id:number,name:string,age:number,gender:string,isMarried:boolean,email:string,password:string}[] =[
    {id:1,name:"Rupali",age:23,gender:"Female",isMarried:false,email:"rupali@gmail.com",password:"rupali"},
    {id:2,name:"Simarn",age:22,gender:"Female",isMarried:false,email:"simran@gmail.com",password:"simran"},
    {id:3,name:"Rohan",age:24,gender:"Male",isMarried:false,email:"rohan@gmail.com",password:"rohan"},

  ]

  getAllUser(){
    if(this.authService.isAthenticated){
 return  this.users;
    }
    else{
      return "User is Loged out"
    }
    
  }

  getUsersById(id:number){
    return this.users.find(x=>x.id===id);

  }
  createUser(user:{id:number,name:string,age:number,gender:string,isMarried:boolean,email:string,password:string}){
     this.users.push(user);
      
    
  }
}