module.exports = (sequelize, Sequelize) => {
    const Software = sequelize.define("software", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      }
    }, {timestamps: false});
  
    return Software;
  };