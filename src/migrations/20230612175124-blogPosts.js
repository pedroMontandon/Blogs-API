'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('blog_posts', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      content: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      userId: {
        allowNull: false,
        field: 'user_id',
        type: DataTypes.INTEGER,
        references: { model: 'users', key: 'id' },
        onUpdtade: 'CASCADE',
        onDelete: 'CASCADE',
      },
      published: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
      },
      updated: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('blog_posts');
  },
};
