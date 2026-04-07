
import { PartialType } from "@nestjs/swagger";
import { createUserDto } from "./create-users.dto";

export class updateUserDto extends  PartialType(createUserDto){

}