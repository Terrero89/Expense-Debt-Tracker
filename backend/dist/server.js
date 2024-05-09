"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const Expenses_1 = __importDefault(require("./routes/Expenses"));
dotenv_1.default.config();
//express app
const app = (0, express_1.default)();
//routes
//express app middleware
app.use(express_1.default.json()); //it passes any request and attach the body to the express mehtod--> it needs to be json()
// global middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});
// Routes
app.use("/api/expenses/", Expenses_1.default);
// Start the server
// Start the server
const port = parseInt(process.env.PORT);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
