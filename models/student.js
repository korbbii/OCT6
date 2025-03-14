'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Student.init({
    studentId: DataTypes.INTEGER,
    fname: DataTypes.STRING,
    yearLevel: DataTypes.STRING,
    block: DataTypes.STRING,
    subjects: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};