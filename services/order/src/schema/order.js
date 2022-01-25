import { gql } from 'apollo-server';
export default gql`
    input OrderInput {
        id: String
        orderByEmailId: String
        items: [ItemInput]
        address: String
        totalPrice: Int
        paymentDetails: String
    }
    type Order {
        id: String
        orderByEmailId: String
        items: [Item]
        totalPrice: Int
        address: String
        paymentDetails: String
        createdOn: String
    }
`;
