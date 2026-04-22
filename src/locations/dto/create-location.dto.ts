import { ArrayNotEmpty, IsArray, IsString, Max, MaxLength } from 'class-validator';
import { Location } from '../entities/location.entity';

export class CreateLocationDto extends Location {
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
