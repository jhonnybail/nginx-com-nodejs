module.exports = (sequelize, DataTypes) => {
  const people = sequelize.define(
    "people",
    {
      name: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );

  return people;
};
