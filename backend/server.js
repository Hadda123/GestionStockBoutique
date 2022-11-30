const express = require('express');

const { connectDB }= require("./database/db");
const app = express();
const cors = require('cors');

connectDB();

app.use(express.json());
app.use(cors());

//les Routes URL
app.use('/api/user', require ('./routes/user'))
app.use('/api/article', require ('./routes/article'))

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(` app listening on port ${port}`)
  });