import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("Mongo is Already Connected");
    return;
  }
  try {
    await mongoose.connect("mongodb://localhost:27017/NextLogin");
    isConnected = true;
    console.log("connected to MongoDB");
  } catch (e) {
    console.log(e);
  }
};
