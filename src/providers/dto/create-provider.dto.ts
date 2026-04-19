import { IsEmail, IsOptional, IsUUID, MaxLength, IsString } from "class-validator";
import { Entity } from "typeorm";

@Entity()
export class CreateProviderDto {
    @IsUUID()
    @IsString()
    @IsOptional()
    providerId?: string
    @IsString()
    @MaxLength(80)
    providerName?: string
    @IsString()
    @IsEmail()
    providerEmail?: string
    @IsString()
    @MaxLength(10)
    providerPhoneNumber?: string
}
