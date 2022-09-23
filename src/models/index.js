'use strict';

const workoutSchema = require('./workout.js');
const gymSchema = require('./gym');
const { sequelize, DataTypes} = require('sequelize');

const DB_URL = process.env.DB_URL || 'sqlite::memory';

sequelize = new sequelize(DB_URL);

const WorkoutModel = workoutSchema(sequelize, DataTypes);
const GymModel = gymSchema(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  Gym: GymModel,
  Workout: WorkoutModel
}