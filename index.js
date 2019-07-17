let express = require('express')
let app = express()
const mongoose = require("mongoose");
const routes = require('./routes/postRoutes')
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))
mongoose
    .connect("mongodb://localhost/foodApp")
    .then(() => console.log("Connected to mongoDB success"))
    .catch(err => console.error("Failed to connect to mongoDB"))
app.use('/', routes)
const port = process.env.PORT || 3000;
app.listen(port, () =>
    console.log(`Using port ${port}...`));