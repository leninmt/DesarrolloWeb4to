import {Exlclude} from 'class-trasformer';
import { BaseProductDTO } from './base-product.dto';


@Exclude()
export class ReadProductDTO extends BaseProductDTO{
@Expose()
readonly id;

@Expose()
readonly title;

@Expose()
readonly price;

@Expose()
readonly description;

}