const express = require('express');
const router = express.Router();

// Load deck manual model
const DeckManual = require('../../models/deck.manual.model');

// @route GET api/deck/manuals/test
// @description tests manuals route
// @access Public
router.get('/test', (req, res) => res.send('deck manual route testing!'));

// @route GET api/deck/manuals
// @description Get all manuals
// @access Public
router.get('/', (req, res) => {
  DeckManual.find()
    .then(deckManuals => res.json(deckManuals))
    .catch(err => res.status(404).json({ nodeckManualsfound: 'No DeckManuals found' }));
});

// @route GET api/deck/manuals/:id
// @description Get single manual by id
// @access Public
router.get('/:id', (req, res) => {
  DeckManual.findById(req.params.id)
    .then(deckManual => res.json(deckManual))
    .catch(err => res.status(404).json({ nodeckManualfound: 'No DeckManual found' }));
});

// @route GET api/deck/manuals
// @description add/save manual
// @access Public
router.post('/', (req, res) => {
  DeckManual.create(req.body)
    .then(deckManual => res.json({ msg: 'DeckManual added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this deckManual' }));
});

// @route GET api/deck/manuals/:id
// @description Update manual
// @access Public
router.put('/:id', (req, res) => {
  DeckManual.findByIdAndUpdate(req.params.id, req.body)
    .then(deckManual => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/deck/manuals/:id
// @description Delete manual by id
// @access Public
router.delete('/:id', (req, res) => {
  DeckManual.findByIdAndRemove(req.params.id, req.body)
    .then(deckManual => res.json({ mgs: 'DeckManual entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a deckManual' }));
});

module.exports = router;