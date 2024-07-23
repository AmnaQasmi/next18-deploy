import { type SchemaTypeDefinition } from 'sanity';
import { Category } from './Category';
import Product from './Products';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Product , Category],
}
