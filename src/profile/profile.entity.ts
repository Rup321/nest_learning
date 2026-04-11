import { dateTimestampProvider } from "rxjs/internal/scheduler/dateTimestampProvider";
import { text } from "stream/consumers";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Profile{
@PrimaryGeneratedColumn()
  id:number;

  
  @Column({
    type:"varchar",
    nullable:false
  })
  firstName?:string;


  @Column({
   type:"varchar",
    nullable:false
  })
lastName?:string;



@Column({
  type:"varchar",
  nullable:true
})
gender?:string;


@Column({
  type:"timestamp",
  nullable:true
})
dateOfBirth?:Date;


@Column({
  type:"text",
  nullable:true
})
bio?:string;

@Column({
  type:'text',
nullable:true
})
profileImg?:string;

@CreateDateColumn()
createdAt:Date;

@UpdateDateColumn()
updatedAt:Date;


@DeleteDateColumn()
deletedAt:Date;
}