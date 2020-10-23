module.exports = app => {
    const software = require("../controllers/tutorial.controller.js.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", software.create);
  
    // Retrieve all software
    router.get("/", software.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", software.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", software.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", software.delete);
  
    // Delete all software
    router.delete("/", software.deleteAll);
  
    app.use('/api/software', router);
  };