import express, { Application, Express } from 'express';
import mongoose from 'mongoose'
import dotenv from "dotenv";
import expensesRoutes from './routes/Expenses'

dotenv.config();

//express app
const app: Application = express();

//routes

//express app middleware
app.use(express.json()); //it passes any request and attach the body to the express mehtod--> it needs to be json()

// global middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});



// Routes
app.use("/api/expenses/", expensesRoutes)

// Start the server
// Start the server
const port: number = parseInt(process.env.PORT as string);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});