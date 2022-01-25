import Mongoose from "mongoose"

const ItemSchema = new Mongoose.Schema({
  productId:{
    type: String,
    required: true
  },
  image:{
    type: String,
    required: true
  },
  brand:{
    type: String,
    required: true
  },
  title:{
    type: String,
    required: true
  },
  size:{
    type: String,
    required: false
  },
  qty:{
    type: Number,
    required: true
  },
  price:{
    type: String,
    required: true
  }
})

const OrderSchema = new Mongoose.Schema({
  id :{
    type: String,
    required: true
  },
  orderByEmailId:{
    type: String,
    required: true
  },
  items: {
    type: [ItemSchema],
    required: true
  },
  totalPrice:{
    type: Number,
    required: true
  },
  address:{
    type: String,
    required: true
  },
  paymentDetails:{
    type: String,
    required: true
  },
  createdOn: {
    type: String,
    default: Date.now,
}
})

export const OrderModel =  Mongoose.model('Order', OrderSchema)