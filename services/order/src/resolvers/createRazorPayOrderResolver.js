import Razorpay from 'razorpay';
import 'dotenv/config';

const createOrder = async (amount, orderId) => {
    return new Promise((resolve, reject) => {
        try {
            var instance = new Razorpay({
                key_id: process.env.RAZOR_PAY_KEY,
                key_secret: process.env.RAZOR_PAY_SECRET,
            });
            var options = {
                amount: amount, // amount in the smallest currency unit
                currency: 'INR',
                receipt: orderId,
            };

            instance.orders.create(options, function (err, order) {
                console.log(order);
                resolve(order);
            });
        } catch (error) {
            reject;
        }
    });
};

const razorPayOrder = async (input) => {
    console.log('order input ', input);
    try {
        const orderID = await createOrder(input.amount, input.orderId);
        return orderID;
    } catch (error) {
        console.log(error);
        return 'error Occurred';
    }
};

export { razorPayOrder };
