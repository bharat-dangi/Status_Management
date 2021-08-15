const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const morgan = require("morgan");
const helmet = require("helmet");

//Routes Imports
const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/post");
const userRoutes = require("./routes/user");

//Database Connection
//LOCAL_MONGOOSE_DB_URL
//REMOTE_MONGOOSE_DB_URL
mongoose
  .connect(process.env.REMOTE_MONGOOSE_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

//Middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(morgan("tiny"));
app.use(helmet());

//Routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("WELCOME TO STATUS MANAGEMENT API");
});

//PORT NUMBER DEFINATION
const PORT = process.env.PORT || 5000;

//Starting server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
