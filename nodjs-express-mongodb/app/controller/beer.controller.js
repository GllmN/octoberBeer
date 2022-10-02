const db = require("../models");
const Beer = db.beers;

// Create and Save a new Beer
exports.create = (req, res) => {
    // !!!!!!!!!! =====>>>> RGP : deux bieres identique ne peuvent être sauvegarder dans la bdd
    // Validate request
    if (!req.body.id) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create an object Beer
  const beer = new Beer({
    //id: req.body.id,
    prix: req.body.prix,
    marque: req.body.marque,
    type: req.body.type,
  });

  
  // Save Beer in the database
  beer.save(beer)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500)
        .send({
            message:
                err.message || "Some error occurred while creating the Beer."
        });
    });
};

// Find all Beers from the database.
exports.findAll = (req, res) => {
    const id = req.query.id;
    var condition = id ? { id: { $regex: new RegExp(id), $options: "i" } } : {};
  
    Beer.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500)
                .send({
                    message:
                        err.message || "Some error occurred while retrieving beers."
            });
        });
};

// Find a single Beer with an id
exports.findById = (req, res) => {
    const id = req.params.id;

    Beer.findById(id)
        .then(data => {
            if (!data)
                res.status(404)
                    .send({ message: "Not found Beer with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res.status(500)
                .send({ message: "Error retrieving Beer with id=" + id });
        });
};

// Update a Beer by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400)
            .send({message: "Data to update can not be empty!" });
    }
    
    const id = req.params.id;
    
    Beer.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404)
                    .send({ message: `Cannot update Beer with id=${id}. Maybe Beer was not found!` });
            } else res.send({ message: "Beer was updated successfully." });
        })
        .catch(err => {
            res.status(500)
            .send({ message: "Error updating Beer with id=" + id });
        });
};

// Delete a Beer with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Beer.findByIdAndRemove(id, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404)
                .send({ message: `Cannot delete Beer with id=${id}. Maybe Beer was not found!` });
            } else {
                res.send({ message: "Beer was deleted successfully!" });
            }
        })
        .catch(err => {
            res.status(500)
                .send({ message: "Could not delete Beer with id=" + id });
        });
};