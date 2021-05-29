require('dotenv').config();
const express = require('express');

const server = express();
server.use(express.json());
server.get('/', (req, res) => res.send('Welcome to Gateway API!'));
// start the server...
server.listen(process.env.API_PORT, process.env.API_HOST, () => {
  console.log(`Node server is running on http://${process.env.API_HOST}:${process.env.API_PORT}`);
});