import { gql } from 'apollo-server';

export default gql`
    input ItemInput {
        productId: String
        image: String
        brand: String
        title: String
        size: String
        qty: Int
        price: String
    }
    type Item {
        productId: String
        image: String
        brand: String
        title: String
        size: String
        qty: Int
        price: String
    }
`;
