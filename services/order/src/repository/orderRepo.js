import { OrderModel } from '../models/order';

export const addOrder = async (orderData)=>{
    const newOrder = new OrderModel({...orderData})
    const savedOrder = await newOrder.save();
    console.log(newOrder)
    return savedOrder
}

export const getOrderListByEmailId = async (orderByEmailId) =>{
    const orderList = await OrderModel.find({ orderByEmailId });
    console.log(orderList)
    return orderList
}