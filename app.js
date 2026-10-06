const express = require("express");

const applicationsRouter = require("./routes/applications.routes");

const app = express();

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome to the Job Tracker API");
});

app.use("/applications", applicationsRouter);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: "Route not found",
  });
});

app.use((err, req, res, next) => {
  console.err(err.stack);
  res.status(500).json({
    success: false,
    error: "Internal server error",
  });
});

app.listen(3000, () => {
  console.log("Job Tracker API running on http://localhost:3000");
});
