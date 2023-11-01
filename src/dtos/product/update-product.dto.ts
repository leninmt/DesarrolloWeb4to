import { PartialType } from "@nestjs/swagger";
import { BaseProductDTO } from "./base-product.dto";

export class UpdateProductDTO extends PartialType(BaseProductDTO{
}                                                                                                                                                                                            