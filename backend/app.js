const dotenv = require("dotenv");
dotenv.config(); 

const cors = require("cors");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const connectToDb = require("./db/db");
const userRoutes = require("./routes/user.routes");
const captainRoutes = require("./routes/captain.routes");
connectToDb();

app.use(cors({
    origin: "http://localhost:3000", // frontend ya Postman origin
    credentials: true                // must for cookies
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("hello world");
});

app.use("/users", userRoutes);
app.use("/captains", captainRoutes);

module.exports = app;