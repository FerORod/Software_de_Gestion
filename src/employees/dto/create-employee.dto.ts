import { IsEmail, IsString, MaxLength } from "class-validator";

export class CreateEmployeeDto {
    @IsString()
    @MaxLength(50)
    employeeName?: string;
    @IsString()
    @MaxLength(50)
    employeeLastName?: string;
    @IsString()
    @MaxLength(10)
    employeePhoneNumber?: string;
    @IsString()
    @IsEmail()
    employeeEmail?: string;
}