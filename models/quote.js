const { Schema, model } = require('mongoose');

const quoteSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: false,
  },
  likes: {
    type: Number,
    default: 0,
  },
});

module.exports = model('quote', quoteSchema);
