const express = require('express');
const router = express.Router();

// Load Engine equipment model
const EngineEquip = require('../../models/engine.equip.model');

// @route GET api/engine/equipment/test
// @description tests equipment route
// @access Public
router.get('/test', (req, res) => res.send('engine equip route testing!'));

// @route GET api/engine/equipment
// @description Get all equipment
// @access Public
router.get('/', (req, res) => {
  EngineEquip.find()
    .then(engineEquips => res.json(engineEquips))
    .catch(err => res.status(404).json({ noengineEquipsfound: 'No EngineEquips found' }));
});

// @route GET api/egine/equipment/:id
// @description Get single equipment by id
// @access Public
router.get('/:id', (req, res) => {
  EngineEquip.findById(req.params.id)
    .then(engineEquip => res.json(engineEquip))
    .catch(err => res.status(404).json({ noengineEquipfound: 'No EngineEquip found' }));
});

// @route GET api/engine/equipment
// @description add/save equipment
// @access Public
router.post('/', (req, res) => {
  EngineEquip.create(req.body)
    .then(engineEquip => res.json({ msg: 'EngineEquip added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this EngineEquip' }));
});

// @route GET api/engine/equipment/:id
// @description Update equipment
// @access Public
router.put('/:id', (req, res) => {
  EngineEquip.findByIdAndUpdate(req.params.id, req.body)
    .then(engineEquip => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/engine/equipment/:id
// @description Delete equipment by id
// @access Public
router.delete('/:id', (req, res) => {
  EngineEquip.findByIdAndRemove(req.params.id, req.body)
    .then(engineEquip => res.json({ mgs: 'EngineEquip entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a engineEquip' }));
});

module.exports = router;