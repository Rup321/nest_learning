import { IsDate, IsEmail, isNotEmpty, IsNotEmpty, IsNumber, IsOptional, IsString, maxLength, minLength, MinLength } from 'class-validator';
import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm';


export class createProfileDto{

@IsString() 
@IsOptional()
gender?:string;


@IsString()
@IsOptional()
firstName?:string;


@IsString()
@IsNotEmpty()
@IsOptional()
@MinLength(3,{message:"length must be greter or greter than 3"})
lastName?:string;

@IsDate()
@IsOptional()
dateOfBirth?:Date;

@IsString()
@IsOptional()
profileImg?:string;


@IsString()
@IsOptional()
bio?:string



}