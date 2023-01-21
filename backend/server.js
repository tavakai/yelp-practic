require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const store = require('session-file-store');
const { Restoraunt } = require('./db/models');
const authRouter = require('./routes/authRouter');
const indexRouter = require('./routes/indexRouter');

const app = express();
const PORT = 3001 || process.env.PORT;
const FileStore = store(session);

const sessionConfig = {
  name: 'user_sid',
  secret: process.env.SESSION_SECRET ?? 'test',
  resave: true,
  store: new FileStore(),
  // если true, то в хранилище будут попадать пустые сессии
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};

app.use(
  cors({
    credentials: true,
    origin: true,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
  }),
);
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: 'true' }));
app.use(express.json());
app.use(session(sessionConfig));

app.use('/', authRouter);

app.listen(PORT, () => {
  console.log(`Server is started on port ${PORT}`);
});
