import { IsEmail, IsString, IsUUID, MinLength } from "class-validator";
import { User } from "../entities/user.entity";

export class CreateUserDto{
    @IsEmail()
    declare userEmail: string;
    @IsString()
    @MinLength(8)
    declare userPassword: string;
}
