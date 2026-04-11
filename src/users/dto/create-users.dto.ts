import { createProfileDto } from 'src/profile/dto/create-profile.dto';
import { Profile } from './../../profile/profile.entity';
import { IsEmail, isNotEmpty, IsNotEmpty, IsNumber, IsOptional, IsString, maxLength, minLength, MinLength } from 'class-validator';
 

export class createUserDto{
@IsString()
@IsNotEmpty()
@MinLength(3,{message:"length must be greter or greter than 3"})
userName:string;

@IsEmail()
@IsNotEmpty()
@MinLength(3,{message:"length must be greter or greter than 3"})
email:string;

@IsString()
@IsNotEmpty()
@MinLength(3,{message:"length must be greter or greter than 3"})
password:string;


@IsOptional()
ProfileId?:createProfileDto
}   