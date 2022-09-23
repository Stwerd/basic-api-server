'use strict';

const gymSchema = (sequelize, DataTypes)=>sequelize.define(
  'gym',
  {
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cost: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    isOpen: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  }
)

module.exports = gymSchema;