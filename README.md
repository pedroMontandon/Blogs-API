<h1>Blog API</h1>
This application is a simple API for managing blogs. It provides functionality to create users, create posts, and classify posts. It follows the CRUD (Create, Read, Update, Delete) operations, allowing you to perform these actions on both users and posts.

<h2>Technologies Used</h2>
<ul>
  <li>Node.js</li>
  <li>Sequelize</li>
  <li>JWT token</li>
</ul>
The API utilizes Node.js for the server-side implementation and Sequelize as the ORM (Object-Relational Mapping) tool for interacting with the database. JWT token is employed to provide some level of protection to the user interface.

<h2>Getting Started</h2>
To run the application, follow the steps below:

<ol>
  <li>Ensure you have Docker installed on your machine.</li>
  <li>Clone this repository.</li>
  <li>Open a terminal or command prompt and navigate to the project directory.</li>
  <li>Run the following command to start the application in a Docker container:</li>
  
```
docker-compose up -d
```
  
  <li>Enter the container's shell using the following command:</li>

```bash
docker exec -it blogs_api bash
```
  
  <li>Once inside the container's shell, start the application by running the following command:</li>

```arduino
npm run dev
```
  
  <li>To create the necessary database structure, run the migration command:</li>

```arduino
npm run prestart
```

  <li>To seed the database with example data, run the following command:</li>

```arduino
npm run seed
```

</ol>

<h2>Feedback</h2>
I welcome any feedback or suggestions you may have. Please feel free to reach out and share your thoughts.
<br></br>
Thank you!
