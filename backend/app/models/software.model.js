module.exports = (sequelize, Sequelize) => {
    const Software = sequelize.define("software", {
      name: {
        type: Sequelize.STRING
      },
      version: {
        type: Sequelize.STRING
      },
      release: {
        type: Sequelize.STRING
      }
    }, {timestamps: false});
  
    return Software;
  };