const login = require('./login.router');
const user = require('./user.router');
const category = require('./category.router');
const blogPost = require('./blogPost.router');

module.exports = {
    login,
    user,
    category,
    blogPost,
};