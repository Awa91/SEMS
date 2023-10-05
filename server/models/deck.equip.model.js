const mongoose = require('mongoose');

const DeckEquipSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  manufacturer: {
    type: String,
    required: true
  },
  lastInspectionDate: {
    type: Date,
    default: Date.now
  },
  description: {
    type: String
  },
  totalNumber: {
    type: Number
  },
  location: {
    type: String
  },
  
});

module.exports = DeckEquip = mongoose.model('deckEquip', DeckEquipSchema);