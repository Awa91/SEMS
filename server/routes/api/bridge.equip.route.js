const express = require('express');
const router = express.Router();

// Load Bridge Equipment model
const BridgeEquip = require('../../models/bridge.equip.model');

// @route GET api/bridge/equipment/test
// @description tests bridge equipment route
// @access Public
router.get('/test', (req, res) => res.send('bridge equipment route testing!'));

// @route GET api/bridge/equipment
// @description Get all equipment
// @access Public
router.get('/', (req, res) => {
  BridgeEquip.find()
    .then(bridgeEquips => res.json(bridgeEquips))
    .catch(err => res.status(404).json({ nobridgeEquipsfound: 'No BridgeEquips found' }));
});

// @route GET api/bridge/equipment/:id
// @description Get single equipment by id
// @access Public
router.get('/:id', (req, res) => {
  BridgeEquip.findById(req.params.id)
    .then(bridgeEquip => res.json(bridgeEquip))
    .catch(err => res.status(404).json({ nobridgeEquipfound: 'No BridgeEquip found' }));
});

// @route GET api/bridge/equipment
// @description add/save equipment
// @access Public
router.post('/', (req, res) => {
  BridgeEquip.create(req.body)
    .then(bridgeEquip => res.json({ msg: 'BridgeEquip added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this bridgeEquip' }));
});

// @route GET api/bridge/equipment/:id
// @description Update equipment
// @access Public
router.put('/:id', (req, res) => {
  BridgeEquip.findByIdAndUpdate(req.params.id, req.body)
    .then(bridgeEquip => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/bridge/equipment/:id
// @description Delete equipment by id
// @access Public
router.delete('/:id', (req, res) => {
  BridgeEquip.findByIdAndRemove(req.params.id, req.body)
    .then(bridgeEquip => res.json({ mgs: 'BridgeEquip entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a bridgeEquip' }));
});

module.exports = router;