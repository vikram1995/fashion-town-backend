import { products } from '../models'
import { productById } from './productById/productById';
import { productByFilters } from './productByFilters/productByFilters';
//Define resolvers
export default {
    Query: {
      //Resolver for 'user' queries by ID
      product: async (parent, { product_id }) => {
        return productById(product_id);
      },
      products: async () => {
        return products;
      },
      productByFilters: async (parent, filters) => {
        console.log(filters);
        return  await productByFilters(filters);
      }
    }
  };