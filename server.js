require('dotenv').config();
const express = require("express");
const cors = require('cors');

const connectDB = require("./config/db");
const todo = require("./routers/todo");

const app = express();

connectDB();
// initialize middleware
app.use(cors())
app.use(express.json({extended: false}));
app.get("/", (req, res) => {
  res.send("Server up and running");
});

//use todo
app.use("/api/todo", todo);

// setting up port
const PORT = process.env.PORT || 1011;

app.listen(PORT, () =>{
    console.log(`Server is running on http:/localhost:${PORT}`);
});