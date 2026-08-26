import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Movie API is running...");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
