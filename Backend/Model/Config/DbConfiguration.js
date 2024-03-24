const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(
  "bc4ua52baidkawhiszcn", // the name of the database 
  "uvoc7mnl7aqaj8q8", // the name of the username exemple root
  "JKp2x6n2IJhDrmT0V0ws", // the password of the database
  {
    host: "bc4ua52baidkawhiszcn-mysql.services.clever-cloud.com", // localhost 
    port:3306, // to delete 
    dialect: 'mysql',
    define: {
      timestamps: false,
    },
  }
);

module.exports=sequelize;