import { IsArray, IsString, MaxLength } from 'class-validator';

export class CreateRegionDto {
    @IsString()
    @MaxLength(100)
    declare regionName?: string;
    @IsArray()
    declare regionStates?: string[];

}
