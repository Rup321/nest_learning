import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UserService } from 'src/users/users.services';

@Injectable()
export class AuthService {

  constructor(@Inject(forwardRef(()=>UserService)) private readonly userService:UserService){}
isAthenticated :boolean =false

  login(email:string,password:string){

     let user = this.userService.users.find(u=>u.email==email && u.password==password);
     
     if(user){
      this.isAthenticated =true
      return "MY_Token"
     }
     else{
      return "Failed to Login"
     }
  }
}
