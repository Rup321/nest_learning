import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from 'class-validator';
 

export class createUserDto{
@IsNumber()
id:number ;

@IsString() 
@IsOptional()
gender?:string;


@IsString()
@IsNotEmpty()
@MinLength(3,{message:"length must be greter or greter than 3"})
name:string;

@IsNumber()
age:number;


@IsEmail()
email:string


}   