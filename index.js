require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const usersRouter = require('./users/router');
const postsRouter = require('./posts/router');

const server = express();
const port = process.env.PORT || 4000;
server.use(cors());
server.use(helmet());
server.use(express.json());

server.use('/api/posts', postsRouter);
server.use('/api/users', usersRouter);
server.use('/', (req, res) => {
  res.send(process.env.MOTD || 'API up and running!');
});

server.listen(port, () =>
  console.log(`\n*** API running on  port ${port} ***\n`)
);
