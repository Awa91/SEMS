const express = require('express');
const router = express.Router();

// Load Galley equipment model
const GalleyEquip = require('../../models/galley.equip.model');

// @route GET api/galley/equipment/test
// @description tests equipment route
// @access Public
router.get('/test', (req, res) => res.send('galley equip route testing!'));

// @route GET api/galley/equipment
// @description Get all equipment
// @access Public
router.get('/', (req, res) => {
  GalleyEquip.find()
    .then(galleyEquips => res.json(galleyEquips))
    .catch(err => res.status(404).json({ nogalleysfound: 'No GalleyEquips found' }));
});

// @route GET api/galley/equipment/:id
// @description Get single equipment by id
// @access Public
router.get('/:id', (req, res) => {
  GalleyEquip.findById(req.params.id)
    .then(galleyEquip => res.json(galleyEquip))
    .catch(err => res.status(404).json({ nogalleyEquipfound: 'No GalleyEquip found' }));
});

// @route GET api/galley/equipment
// @description add/save equipment
// @access Public
router.post('/', (req, res) => {
  GalleyEquip.create(req.body)
    .then(galleyEquip => res.json({ msg: 'GalleyEquip added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this GalleyEquip' }));
});

// @route GET api/galley/equipment/:id
// @description Update equipment
// @access Public
router.put('/:id', (req, res) => {
  GalleyEquip.findByIdAndUpdate(req.params.id, req.body)
    .then(galleyEquip => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/galley/equipment/:id
// @description Delete equipment by id
// @access Public
router.delete('/:id', (req, res) => {
  GalleyEquip.findByIdAndRemove(req.params.id, req.body)
    .then(galleyEquip => res.json({ mgs: 'GalleyEquip entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a galleyEquip' }));
});

module.exports = router;