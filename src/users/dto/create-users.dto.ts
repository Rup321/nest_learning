import { IsEmail, isNotEmpty, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from 'class-validator';
 

export class createUserDto{
 

@IsString() 
@IsOptional()
gender?:string;


@IsString()
@IsNotEmpty()
@MinLength(3,{message:"length must be greter or greter than 3"})
firstName:string;


@IsString()
@IsNotEmpty()
@MinLength(3,{message:"length must be greter or greter than 3"})
lastName:string;
// @IsNumber()
// age:number;


@IsEmail()
@IsNotEmpty()
@MinLength(3,{message:"length must be greter or greter than 3"})
email:string;

@IsString()
@IsNotEmpty()
@MinLength(3,{message:"length must be greter or greter than 3"})
password:string;


}   