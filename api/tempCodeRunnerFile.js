const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");

dotenv.config();

mongoose
.connect(process.env.MONGO_URL)
.then(() => console.log("DBconnection Successfull"))
.catch((err) => {
    console.log(err);
});

app.get("/api/test", ()=>{
    console.log("test is success")
});

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Backend sever is running!");
});