import { IsEmail, IsString, MaxLength } from "class-validator";

export class CreateEmployeeDto {
    @IsString()
    @MaxLength(50)
    name?: string;
    @IsString()
    @MaxLength(50)
    lastName?: string;
    @IsString()
    @MaxLength(10)
    phoneNumber?: string;
    @IsString()
    @IsEmail()
    email?: string;
}