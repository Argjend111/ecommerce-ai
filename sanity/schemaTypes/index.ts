import { type SchemaTypeDefinition } from 'sanity'
import { productType } from './product'
import { categoryType } from './category'
import { customerType } from './customer'
import { orderType } from './order'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productType, categoryType,customerType,orderType],
}
