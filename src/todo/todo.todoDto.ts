import { IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class todoDto {
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(10)
    name: string;
    @IsNotEmpty()
    @MinLength(10)
    description: string;
}