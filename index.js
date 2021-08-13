require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
const cors = require("cors");
const logger = require("./middleware/logger");

const app = express();
const { PORT } = process.env;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(compression());
app.use(logger);

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});
