module.exports = (sequelize, DataTypes) => {
  const ToDo = sequelize.define('ToDo', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
  });

  ToDo.associate = (models) => {
    ToDo.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'users',
    });
  };

  return ToDo;
};
