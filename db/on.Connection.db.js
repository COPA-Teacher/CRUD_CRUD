import mongoose from "mongoose";


export const onConnection = async () => {
    
    try {
        
        await mongoose.connect(process.env.DB_URI, {});

        mongoose.connection.on('connected', () => {
            console.log('Mongoose connection open');
        });

        mongoose.connection.on('error', (err) => {
            console.error('Mongoose connection error:', err);
        });

        mongoose.connection.on('disconnected', () => {
            console.log('Mongoose connection disconnected');
        });

    } catch (error) {
        console.log("On.Connection Error : \n", error);
        process.exit("ON_CONNECTION_ERR");
    }

}