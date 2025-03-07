import mongoose from "mongoose";

export const connectDB = async () =>{

    try{

        const conn = await mongoose.connect(process.env.MONGODB_URI);

        console.log('MonogDB_connected: ${conn.connection.host}')
    }
    catch(error)
    {
        console.log('MonogDB connection Error',error);

    }
};