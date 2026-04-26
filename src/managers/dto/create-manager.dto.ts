import { IsEmail, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateManagerDto{
    @IsString()
    @MaxLength(80)
    declare managerFullName: string;
    @IsNumber()
    declare managerSalary: number;
    @IsString()
    @IsEmail()
    declare managerEmail: string;
    @IsString()
    @MaxLength(10)
    declare managerPhoneNumber: string;
}
