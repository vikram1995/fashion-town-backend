import { gql } from 'apollo-server';
import RazorPay from './razorPay';
import Order from './order';
import Item from './item';

export default gql`
    ${RazorPay}
    ${Order}
    ${Item}

    type Query {
        getOrderHistory(orderByEmailId: String): [Order]
    }

    type Mutation {
        createOrder(input: OrderInput): Order
        createRazorPayOrder(input: RazorPayOrderInput): RazorPayOrder
    }
`;
