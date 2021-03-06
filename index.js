require("dotenv").config();
require("./config/db_sync");
const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
const cors = require("cors");
const logger = require("./middleware/logger");
const apiRouter = require("./routes/router");

const app = express();
const { PORT } = process.env;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(compression());
app.use(logger);

app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});
