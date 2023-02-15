import dotenv from "dotenv";
dotenv.config();
import express from "express";
import tmsRouter from "./routes/tmsRoutes.js";
import mongoose from "mongoose";

//variables
const { MONGO_URL, PORT, NODE_ENV } = process.env;
const app = express();
const endpoint = "/api/v1/tms";

// middleware
app.use(express.json());
app.use(express.static("public")); //maakt je map openbaar, client-side zichtbaar

//routes
app.use(endpoint, tmsRouter);

// listen to server and connect db
const startServer = async () => {
  try {
    mongoose.set(`strictQuery`, true);
    mongoose.connect(MONGO_URL);
    app.listen(PORT, () => {
      if (NODE_ENV === "development") {
        console.log(`http://localhost:${PORT} 👌`);
      } else {
        console.log("Server is running...");
      }
    });
  } catch (error) {
    console.error(error);
  }
};
startServer();
