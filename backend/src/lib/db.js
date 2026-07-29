import mongoose from "mongoose";

 
export async function connectDB() {
    try {
        const mongoUri = process.env.MONGO_URI;

        if(!mongoUri) {
            throw new Error("Mongo_URL is required");
        }
        console.log("MONGO_URI:", process.env.MONGO_URI);
        const conn = await mongoose.connect(mongoUri);

        console.log("MongoDb connected", conn.connection.host);
    }catch(error) {
        console.error(error.stack);
        process.exit(1);
        // 1 means failed, 0 means success
    }
}