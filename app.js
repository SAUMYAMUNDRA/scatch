const db = require("./config/mongoose.config.js")
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
const productsRouter=require("./routes/productsRouter.routes.js")
const usersRouter=require("./routes/usersRouter.routes.js")
const ownersRouter=require("./routes/ownersRouter.routes.js")
app.use("/owners",ownersRouter);
app.use("/users",usersRouter);
app.use("/products",productsRouter);


app.listen(3000);
