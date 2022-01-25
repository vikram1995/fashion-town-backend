import { gql } from 'apollo-server';
export default gql`
    type RazorPayOrder {
        id: String
        entity: String
        amount: Int
        amount_paid: Int
        amount_due: Int
        currency: String
        receipt: String
        status: String
    }
    input RazorPayOrderInput {
        amount: Int
        orderId: String
    }
`;
