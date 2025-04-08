const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger");

const user = require("./roots/user.roots");
const userProduct = require("./roots/user.products.roots");
const auth = require("./roots/auth.roots");

app.use(
  cors({
    origin: ["http://localhost:8000"],
    //origin: "*",
  })
);

app.use("/api/auth", auth);
app.use("/api/users", user);
app.use("/api/user-product", userProduct);

app.use("/", express.static("files"));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument.options));

module.exports = app;
