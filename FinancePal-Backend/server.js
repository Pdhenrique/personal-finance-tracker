import express from "express";
import { transactionController } from './src/controller/transactionController.js'
const app = express();
const port = 3000;

app.get("/api/transactions", transactionController.getTransaction)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});