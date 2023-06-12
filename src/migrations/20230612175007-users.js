'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('users', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      display_name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      image: {
        allowNull: true,
        type: DataTypes.STRING,
      }
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('users');
  },
};