module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      timestamps: false,
    },
  );

  User.associate = (models) => {
    User.hasMany(models.ToDo, {
      foreignKey: 'userId',
      as: 'toDos',
    });
  };

  return User;
};
