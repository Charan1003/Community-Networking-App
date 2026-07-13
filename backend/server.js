import express from "express";
import cors from "cors";
import crypto from "crypto";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import postRoutes from "./routes/posts.routes.js";
import userRoutes from "./routes/user.routes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(postRoutes, userRoutes);
app.use(express.static("uploads"));

const start = async () => {
  const coonnectDB = await mongoose.connect(
    "mongodb+srv://charan1003g_db_user:rSkKYUSA6JCYKM3p@networkingapp.n7vpml4.mongodb.net/network?appName=NetworkingApp",
  );
  app.listen(8080, () => {
    console.log("app is listening on port 8080");
  });
};

start();
