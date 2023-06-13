'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('posts_categories', {
      post_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: 'blog_posts', key: 'id' },
        onUpdtade: 'CASCADE',
        onDelete: 'CASCADE',
      },
      category_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: 'categories', key: 'id' },
        onUpdtade: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('posts_categories');
  },
};
