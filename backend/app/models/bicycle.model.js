module.exports = (sequelize, Sequelize) => {
    const Bicycle = sequelize.define("bicycle", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      }
    }, {timestamps: false});
  
    return Bicycle;
  };