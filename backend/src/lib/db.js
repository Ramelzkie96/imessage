import mongoose from "mongoose";

 
export async function connectDB() {
    try {
        const mongoUri = process.env.MONGO_URI;

        if(!mongoUri) {
            throw new Error("Mongo_URI is required");
        }
        const conn = await mongoose.connect(mongoUri);

        console.log("MongoDb connected", conn.connection.host);
    }catch(error) {
        console.error(error.stack);
        process.exit(1);
        // 1 means failed, 0 means success
    }
}