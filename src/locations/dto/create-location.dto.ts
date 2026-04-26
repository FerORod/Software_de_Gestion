import { ArrayNotEmpty, IsArray, IsString, Max, MaxLength } from 'class-validator';

export class CreateLocationDto {
    @IsString()
    @MaxLength(35)
    declare locationName: string;
    @IsString()
    @MaxLength(160)
    declare locationLatLng: number[];
    @IsArray()
    @ArrayNotEmpty()
    declare locationAddress: string
}
