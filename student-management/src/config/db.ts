import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const mongoUri: string = process.env.MONGO_URI as string;
const connectDB = async () => {
  try {
    await mongoose.connect(mongoUri);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;