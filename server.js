if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({});
}

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const quoteRouter = require('./routes/quoteRouter');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/static', express.static(path.join(__dirname, 'static')));

app.use('/api/v1/quote', quoteRouter);

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-vkbjc.mongodb.net/test?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err);
    if (!err) {
      console.log('DB connected');
    } else {
      console.log('mongo', err);
    }
  },
);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
