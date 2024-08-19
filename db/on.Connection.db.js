import mongoose from "mongoose";
import { DB_URI, DB } from "../constants.js"

export const onConnection = async () => {
    const DB_URL = DB_URI+DB;
    try {
        
        await mongoose.connect(DB_URL, {});

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