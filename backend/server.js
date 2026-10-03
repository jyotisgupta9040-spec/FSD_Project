require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const pandalRoutes = require("./routes/pandalRoutes");
const crowdRoutes = require("./routes/crowdRoutes");
const visarjanRoutes = require("./routes/visarjanRoutes");
const port = process.env.PORT || 5000;

app.use("/api/pandals", pandalRoutes);
app.use("/api/crowd", crowdRoutes);
app.use("/api/visarjan", visarjanRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
    console.log("Database:", mongoose.connection.name);

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB Connection Error:");
    console.log(error.message);
    process.exitCode = 1;
  });
