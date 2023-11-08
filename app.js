const express = require("express");
const cors = require("cors");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const bodyParser = require("body-parser");
require("dotenv/config");

const app = express();
const bookRouter = require("./routes/books");
const connectDB = require("./config/db");

app.use(express.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use(cors());
app.use("/book", bookRouter);

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});

const swaggerOptions = require("./swagger/index");


const specs = swaggerJsdoc(swaggerOptions);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);


connectDB();

module.exports = app;
