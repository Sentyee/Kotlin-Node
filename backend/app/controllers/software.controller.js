const db = require("../models");
const Software = db.software;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
   // Validate request
   if (!req.body.name || !req.body.version) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Software
  const software = {
    name: req.body.name,
    version: req.body.version,
    release: req.body.release
  };

  Software.create(software)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Software."
    });
  });
};


// Retrieve all Software from the database.
exports.findAll = (req, res) => {
    Software.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving software."
      });
    });
};

// Find a single Software with an id
exports.findOne = (req, res) => {
    let id = req.params.id;
    Software.findByPk(id)
        .then(data => {
            console.log(data);
            if(!data){
                res.status(400).send({
                    message:
                        "No Software found with that id"
                })
            }
            res.send(data);
            return;
        })
        .catch(err => {
            console.log(err.message);
            console.log("hola");
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving software with id"
            });
            return;
        });
};

// Update a Software by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Software with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Sotware from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Software
exports.findAllPublished = (req, res) => {
  
};