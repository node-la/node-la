module.exports = (sequelize, type) => {
  return sequelize.define('user', {
    username: {
      type: type.STRING,
      allowNull: false,
      unique: true
    },
    neighborhood: {
      type: type.STRING,
      allowNull: true,
      unique: false
    }
  });
};