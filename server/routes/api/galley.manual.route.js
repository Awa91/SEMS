const express = require('express');
const router = express.Router();

// Load Galley manuals model
const GalleyManual = require('../../models/galley.manual.model');

// @route GET api/galley/manuals/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send('galley manual route testing!'));

// @route GET api/galley/manuals
// @description Get all manuals
// @access Public
router.get('/', (req, res) => {
  GalleyManual.find()
    .then(galleyManuals => res.json(galleyManuals))
    .catch(err => res.status(404).json({ nogalleyManualsfound: 'No GalleyManuals found' }));
});

// @route GET api/galley/manuals/:id
// @description Get single manual by id
// @access Public
router.get('/:id', (req, res) => {
  GalleyManual.findById(req.params.id)
    .then(galleyManual => res.json(galleyManual))
    .catch(err => res.status(404).json({ nogalleyManualfound: 'No GalleyManual found' }));
});

// @route GET api/galley/manuals
// @description add/save manual
// @access Public
router.post('/', (req, res) => {
  GalleyManual.create(req.body)
    .then(galleyManual => res.json({ msg: 'GalleyManual added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this galleyManual' }));
});

// @route GET api/galley/manuals/:id
// @description Update manual
// @access Public
router.put('/:id', (req, res) => {
  GalleyManual.findByIdAndUpdate(req.params.id, req.body)
    .then(galleyManual => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/galley/manuals/:id
// @description Delete manual by id
// @access Public
router.delete('/:id', (req, res) => {
  GalleyManual.findByIdAndRemove(req.params.id, req.body)
    .then(galleyManual => res.json({ mgs: 'GalleyManual entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a galleyManual' }));
});

module.exports = router;