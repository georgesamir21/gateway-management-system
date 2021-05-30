require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

//connect to db...
mongoose.connect(
  `mongodb://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
  .then(() => console.log('Connected to DB!'))
  .catch((err) => console.log('Error Connect to DB!', err));

const server = express();
server.use(express.json());
server.get('/', (req, res) => res.send('Welcome to Gateway API!'));
// start the server...
server.listen(process.env.API_PORT, process.env.API_HOST, () => {
  console.log(`Node server is running on http://${process.env.API_HOST}:${process.env.API_PORT}`);
});