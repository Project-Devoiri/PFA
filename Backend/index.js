const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./Model/Config/DbConfiguration');

const User = require('./Model/UserModel'); 

const app = express();

app.use(bodyParser.json());



// Synchronize models with the database
sequelize.sync({ logging: console.log, models: [User] })
  .then(() => {
    console.log('All models were synchronized successfully.');
    
    const PORT = process.env.PORT || 3000;
    const server = app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

    module.exports = server;
  })
  .catch(error => {
    console.error('An error occurred while synchronizing the models:', error);
  });
