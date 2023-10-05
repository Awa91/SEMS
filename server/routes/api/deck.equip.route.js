const express = require('express');
const router = express.Router();

// Load Deck equipment model
const DeckEquip = require('../../models/deck.equip.model');

// @route GET api/deck/equipment/test
// @description tests equipment route
// @access Public
router.get('/test', (req, res) => res.send('deck equip route testing!'));

// @route GET api/deck/equipment
// @description Get all equipment
// @access Public
router.get('/', (req, res) => {
  DeckEquip.find()
    .then(deckEquips => res.json(deckEquips))
    .catch(err => res.status(404).json({ nodeckEquipsfound: 'No DeckEquips found' }));
});

// @route GET api/deck/equipment/:id
// @description Get single equipment by id
// @access Public
router.get('/:id', (req, res) => {
  DeckEquip.findById(req.params.id)
    .then(deckEquip => res.json(deckEquip))
    .catch(err => res.status(404).json({ nodeckEquipfound: 'No DeckEquip found' }));
});

// @route GET api/deck/equipment
// @description add/save equipment
// @access Public
router.post('/', (req, res) => {
  DeckEquip.create(req.body)
    .then(deckEquip => res.json({ msg: 'DeckEquip added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this DeckEquip' }));
});

// @route GET api/deck/equipment/:id
// @description Update equipment
// @access Public
router.put('/:id', (req, res) => {
  DeckEquip.findByIdAndUpdate(req.params.id, req.body)
    .then(deckEquip => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/deck/equipment/:id
// @description Delete equipment by id
// @access Public
router.delete('/:id', (req, res) => {
  DeckEquip.findByIdAndRemove(req.params.id, req.body)
    .then(deckEquip => res.json({ mgs: 'DeckEquip entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a deckEquip' }));
});

module.exports = router;