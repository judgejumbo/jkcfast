import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MOGGO_URI);
  } catch (e) {
    console.error("❌ Mongoose Error: " + e.message);
  }
};

export default connectMongo;
