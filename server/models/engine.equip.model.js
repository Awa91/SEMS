const mongoose = require('mongoose');

const EngineEquipSchema = new mongoose.Schema({
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

module.exports = EngineEquip = mongoose.model('engineEquip', EngineEquipSchema);