const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware
const sequelize = require('./Model/Config/DbConfiguration');
const User = require('./Model/UserModel'); 
const userRoutes = require ('./Routes/UserRoutes')

const app = express();

app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());

app.use('/test', userRoutes); // Mounting user routes

// Synchronize models with the database
sequelize.sync({ logging: console.log, models: [User] })
  .then(() => {
    console.log('All models were synchronized successfully.');
    
    const PORT = process.env.PORT || 5000;
    const server = app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

    module.exports = server;
  })
  .catch(error => {
    console.error('An error occurred while synchronizing the models:', error);
  });
