const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  id: String,
  totalWaste: Number,
  recyclingRate: Number
}, { timestamps: true });

module.exports = mongoose.model('Flight', flightSchema);
