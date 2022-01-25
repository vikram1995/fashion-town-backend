import { createOrder, getOrderHistory } from './orderResolver';
import { razorPayOrder } from './createRazorPayOrderResolver';

export default {
    Query: {
        getOrderHistory: async (parents, { orderByEmailId }) => {
            return getOrderHistory(orderByEmailId);
        },
    },
    Mutation: {
        createOrder: async (parent, { input }) => {
            return createOrder(input);
        },
        createRazorPayOrder: async (parent, { input }) => {
            return razorPayOrder(input);
        },
    },
};
