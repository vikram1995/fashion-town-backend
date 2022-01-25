import { gql } from "apollo-server";

export default gql`

  type Product @key(fields: "product_id") {
    product_id: String
    brand: String
    images: [String]
    title: String
    price: String
    dominant_color: String
    ideal_for: String
    product_type: String
    product_category: String
    product_details: String
    size_fit: String
    care_instructions: String
    inventory: String
    is_in_stock: String
    listed_date: String
  }

  type Query {
    productById(product_id: String): Product
    productBySearchInput(searchInput: String) : [Product]
    products: [Product]
    productByFilters(
      product_id: String
      brand: [String]
      title: String
      price: String
      dominant_color: [String]
      ideal_for: [String]
      product_type: String
      product_category: [String]
      product_details: String
      care_instructions: String
      inventory: String
      is_in_stock: String
      listed_date: String
    ): [Product]
  }
`;
