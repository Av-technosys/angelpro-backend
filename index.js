const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const dbConnect = require("./dbConnect");

dotenv.config();

const authRouter = require("./routers/authRouter");
const transactionRouter = require("./routers/transactionRouter");

const app = express();

// CORS config
app.use(
  cors({
    origin: "https://chimerical-starlight-6eb981.netlify.app",
    credentials: true,
  })
);
app.options("*", cors());

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(morgan("common"));

// Routes
app.use("/auth", authRouter);
app.use("/transactions", transactionRouter);

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

// DB connection
dbConnect();
