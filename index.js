const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const dbConnect = require("./dbConnect");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// Load environment variables
dotenv.config();

const authRouter = require("./routers/authRouter");
const transactionRouter = require("./routers/transactionRouter");
// const coursesRouter = require("./routers/coursesRouter");

const app = express();

// Middleware
app.use(express.json());
app.use(morgan("common"));
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    // origin: "http://localhost:5173",
    origin: "https://chimerical-starlight-6eb981.netlify.app/"
  })
);

// Routes
app.use("/auth", authRouter);
app.use("/transactions", transactionRouter);
// app.use("/courses", coursesRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

// Connect to Database
dbConnect();
