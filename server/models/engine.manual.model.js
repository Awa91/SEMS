const mongoose = require('mongoose');

const EngineManualSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  publisher: {
    type: String,
    required: true
  },
  lastEdition: {
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

module.exports = EngineManual = mongoose.model('engineManual', EngineManualSchema);