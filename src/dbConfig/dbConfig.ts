import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGOURI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    connection.on("error", (error) => {
      console.log("MongoDB connection failed");
      console.log(error);
      process.exit("1");
    });
  } catch (error) {
    console.log("Something went wrong");
    console.log(error);
  }
}
