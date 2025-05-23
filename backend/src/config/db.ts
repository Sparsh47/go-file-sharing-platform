import mongoose from "mongoose";

export default async function connectToDB() {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("MongoDB Connected");
}