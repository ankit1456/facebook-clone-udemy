const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const userRouter = require("./routes/userRoutes");
const { default: mongoose } = require("mongoose");

dotenv.config();
const app = express();

app.use(cors());

app.use("/api/v1/users", userRouter);

mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("Database connected successfully 😁😁");
  })
  .catch((err) => {
    console.log("Something went wrong with the database : ", err.message);
  });
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
