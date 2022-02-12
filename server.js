/* Backend Assignment for TaxAdda
   Author: Jugal Lad */



//dependencies
require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const cors = require("cors");

//express config
const app = express();

const port = process.env.PORT || 5000;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req,res) => {
  res.send('hello')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});