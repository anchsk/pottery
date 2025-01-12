import { type SchemaTypeDefinition } from 'sanity';
import { homepage } from './documents/homepage';
import { product } from './documents/product';

export const schemaTypes: SchemaTypeDefinition[] = [homepage, product];
