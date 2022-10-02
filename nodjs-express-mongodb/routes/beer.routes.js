module.exports = app => {
    const beers = require('../controllers/beer.controller.js');
  
    var router = require('express').Router();
  
    // Create a new Beer
    router.post('/', beers.create);
  
    // Find all Beers
    router.get('/', beers.findAll);
  
    // Find a single beer with id
    router.get('/:id', beers.findById);
  
    // Update a beer with id
    router.put('/:id', beers.update);
  
    // Delete a beer with id
    router.delete('/:id', beers.delete);
  
    app.use('/api/beers', router);
  };