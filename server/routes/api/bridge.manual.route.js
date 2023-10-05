const express = require('express');
const router = express.Router();

// Load Bridge manual model
const BridgeManual = require('../../models/bridge.manual.model');

// @route GET api/bridge/manuals/test
// @description tests manuals route
// @access Public
router.get('/test', (req, res) => res.send('bridge manual route testing!'));

// @route GET api/bridge/manuals
// @description Get all manuals
// @access Public
router.get('/', (req, res) => {
  BridgeManual.find()
    .then(bridgeManuals => res.json(bridgeManuals))
    .catch(err => res.status(404).json({ nobridgeManualsfound: 'No BridgeManuals found' }));
});

// @route GET api/bridge/manuals/:id
// @description Get single manual by id
// @access Public
router.get('/:id', (req, res) => {
  BridgeManual.findById(req.params.id)
    .then(bridgeManual => res.json(bridgeManual))
    .catch(err => res.status(404).json({ nobridgeManualfound: 'No BridgeManual found' }));
});

// @route GET api/bridge/manuals
// @description add/save manual
// @access Public
router.post('/', (req, res) => {
  BridgeManual.create(req.body)
    .then(bridgeManual => res.json({ msg: 'BridgeManual added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this bridgeManual' }));
});

// @route GET api/bridge/manuals/:id
// @description Update manual
// @access Public
router.put('/:id', (req, res) => {
  BridgeManual.findByIdAndUpdate(req.params.id, req.body)
    .then(bridgeManual => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/bridge/manuals/:id
// @description Delete manual by id
// @access Public
router.delete('/:id', (req, res) => {
  BridgeManual.findByIdAndRemove(req.params.id, req.body)
    .then(bridgeManual => res.json({ mgs: 'BridgeManual entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a bridgeManual' }));
});

module.exports = router;