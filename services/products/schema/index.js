import { gql } from "apollo-server";

export default gql`
  # User type definition as an Entity to be shared with multiple services
  # The @key directive defines the entity's primary key
  # This primary key will be used as a unique reference for all implementing services
  type Product @key(fields: "product_id") {
    product_id: String
    brand: String
    images: [String]
    title: String
    dominant_color: String
  }

  type Query {
    product(product_id: String): Product
    products: [Product]
    productByFilters(
      brand: String
      dominant_color: String
      category: String
      idealFor: String
    ): [Product]
  }
`;
