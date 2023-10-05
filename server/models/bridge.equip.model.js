const mongoose = require('mongoose');

const BridgeEquipSchema = new mongoose.Schema({
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

module.exports = BridgeEquip = mongoose.model('bridgeEquip', BridgeEquipSchema);