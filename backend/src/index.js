const express = require('express');
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World');
});




app.listen( process.env.PORT || 3000, () => {
  console.log('Server is running on port 3000');
} );