import { Allow, IsAlpha, IsAlphanumeric, IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

export class BaseProductDTO{
    @Allow()
    @IsNotEmpty()
    @IsString()
    @IsAlpha()
    readonly title;
    
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    readonly price;

    @IsNotEmpty()
    @IsAlphanumeric()
    readonly description



}