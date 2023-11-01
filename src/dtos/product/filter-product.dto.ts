
import { IsOptional, isString,  } from "class-validator";
import { BaseProductDTO } from "./base-product.dto";

class FilterDTO extends PaginationDTO{
    @IsOptional()
    @IsString()
    readonly title;

    @IsOptional()

}