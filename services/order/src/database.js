import Mongoose from 'mongoose';

const server = 'mongodb+srv://admin:admin123@cluster0.a9zwe.mongodb.net'; // REPLACE WITH YOUR DB SERVER
const database = 'fashion_town'; // REPLACE WITH YOUR DB NAME

const dbConnect = () => {
    return new Promise(async (resolve, reject) => {
        try {
            await Mongoose.connect(`${server}/${database}`);
            console.log('Database connection successful');
            resolve('Database connection successful');
        } catch (error) {
            console.error('Database connection error');
            reject(error);
        }
    });
};

export default dbConnect;
