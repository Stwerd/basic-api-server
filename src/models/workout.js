'use strict';

const workoutSchema = ( sequelize, DataTypes ) => sequelize.define(
  'Workout',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    reps: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sets: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }
)

module.exports = workoutSchema;