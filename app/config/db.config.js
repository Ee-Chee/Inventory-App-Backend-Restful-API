const secrets = require("../../secrets");
// console.log("secrets:", secrets);

module.exports = {
    HOST: secrets.AWS_HOST,
    USER: secrets.AWS_USER,
    PASSWORD: secrets.AWS_PASSWORD,
    DB: secrets.AWS_DATABASE,
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

// module.exports = {
//   HOST: "localhost",
//   USER: "postgres",
//   PASSWORD: "postgres",
//   DB: "Eat-Happy-Inventory",
//   dialect: "postgres",
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// };


// To get the details of db url info on heroku: 
// https://www.progress.com/tutorials/jdbc/connect-to-postgresql-on-heroku-using-odbc-and-jdbc-drivers
// other references: 
// https://github.com/Ee-Chee/SpicedAcademy-Tabasco-Curriculum/tree/master/wk8_heroku
// https://bezkoder.com/deploy-node-js-app-heroku-cleardb-mysql/#more-656