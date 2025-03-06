const mongoose = require('mongoose');

const snackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: String
});

module.exports = mongoose.model('Snack', snackSchema);