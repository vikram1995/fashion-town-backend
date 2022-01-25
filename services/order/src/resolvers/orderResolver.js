import { addOrder, getOrderListByEmailId } from '../repository/orderRepo';
import { emailService } from '../emailService/emailService';


export const createOrder = (orderData) => {
    emailService(orderData)
   return addOrder(orderData)
};

export const getOrderHistory = (orderByEmailId) =>{
    return getOrderListByEmailId(orderByEmailId)
}