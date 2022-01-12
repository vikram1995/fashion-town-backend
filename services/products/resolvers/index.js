import { products } from '../models'
import { productById } from './productById/productById';
import { productByFilters } from './productByFilters/productByFilters';
import { productBySearchInput } from './productBySearchInput/productBySearchInput';
//Define resolvers
export default {
    Query: {
      //Resolver for 'user' queries by ID
      productById: async (parent, { product_id }) => {
        return productById(product_id);
      },
      products: async () => {
        return products;
      },
      productByFilters: async (parent, filters) => {
        console.log(filters);
        return  await productByFilters(filters);
      },
      productBySearchInput: async (parent, searchInput) => {
        console.log(searchInput);
        return await productBySearchInput(searchInput)
      }
    }
  };