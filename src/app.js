const express = require('express');
const { login, user, category, blogPost } = require('./routers');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/login', login);
app.use('/user', user);
app.use('/categories', category);
app.use('/post', blogPost);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
