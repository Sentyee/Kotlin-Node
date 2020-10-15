const db = require("../models");
const Bicycle = db.bicycles;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
   // Validate request
   if (!req.body.title || !req.body.model) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Bicycle
  const bicycle = {
    title: req.body.title,
    description: req.body.description
  };

  Bicycle.create(tutorial)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Tutorial."
    });
  });
};


// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    Bicycle.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  let id = req.params.id;
  Bicycle.findByPk(id)
    .then(data => {
      console.log("estos son los datos")
      console.log(data)
      if(!data){
        res.status(400).send({
          message:
          "No Bicycle found with specified id"
        })
      }
      res.send(data)
      return;
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred retrieving bicycle with id"
      });
      return;
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};