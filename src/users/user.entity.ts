import { maxLength, ValidateNested } from "class-validator";
import { createProfileDto } from "src/profile/dto/create-profile.dto";
import { Profile } from "src/profile/profile.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { JoinColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id:number;

 
@Column({
  type:"varchar",
  nullable:false
})
userName:string;

@Column({
  type:"varchar",
  nullable:false
})
email:string;

@Column({
  type:"varchar",
  nullable:false
})
password:string;


@OneToOne(()=>Profile)
@JoinColumn()
profile?:Profile;

 
 @CreateDateColumn()
createdAt:Date;

@UpdateDateColumn()
updatedAt:Date;


@DeleteDateColumn()
deletedAt:Date;

  


}