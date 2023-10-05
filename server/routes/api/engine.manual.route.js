const express = require('express');
const router = express.Router();

// Load Engine manual model
const EngineManual = require('../../models/engine.manual.model');

// @route GET api/engine/manuals/test
// @description tests manuals route
// @access Public
router.get('/test', (req, res) => res.send('engine manual route testing!'));

// @route GET api/engine/manuals
// @description Get all manuals
// @access Public
router.get('/', (req, res) => {
  EngineManual.find()
    .then(engineManuals => res.json(engineManuals))
    .catch(err => res.status(404).json({ noengineManualsfound: 'No EngineManuals found' }));
});

// @route GET api/engine/manuals/:id
// @description Get single manual by id
// @access Public
router.get('/:id', (req, res) => {
  EngineManual.findById(req.params.id)
    .then(engineManual => res.json(engineManual))
    .catch(err => res.status(404).json({ noengineManualfound: 'No EngineManual found' }));
});

// @route GET api/engine/manuals
// @description add/save manual
// @access Public
router.post('/', (req, res) => {
  EngineManual.create(req.body)
    .then(engineManual => res.json({ msg: 'EngineManual added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this engineManual' }));
});

// @route GET api/engine/manuals/:id
// @description Update manual
// @access Public
router.put('/:id', (req, res) => {
  EngineManual.findByIdAndUpdate(req.params.id, req.body)
    .then(engineManual => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/engine/manuals/:id
// @description Delete manual by id
// @access Public
router.delete('/:id', (req, res) => {
  EngineManual.findByIdAndRemove(req.params.id, req.body)
    .then(engineManual => res.json({ mgs: 'EngineManual entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a engineManual' }));
});

module.exports = router;