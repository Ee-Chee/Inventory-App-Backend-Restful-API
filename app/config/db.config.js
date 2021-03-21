let secrets;
if (process.env.NODE_ENV == "production") {
    secrets = process.env;
} else {
    secrets = require("../../secrets");
    console.log(secrets);
}


// {
//     "AWS_HOST": "ec2-54-75-246-118.eu-west-1.compute.amazonaws.com",
//     "AWS_USER": "jhnbouqalqeufo",
//     "AWS_PASSWORD": "5dc61129b9c325ff3165ce7a3638c3d9cd8873ac65eec53c2cc66d803ec32ad2",
//     "AWS_DATABASE": "d96sktatd1b276"
// }
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
//     HOST: "localhost",
//     USER: "postgres",
//     PASSWORD: "postgres",
//     DB: "Eat-Happy-Inventory",
//     dialect: "postgres",
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     }
// };


// To get the details of db url info on heroku: 
// https://www.progress.com/tutorials/jdbc/connect-to-postgresql-on-heroku-using-odbc-and-jdbc-drivers
// other references: 
// https://github.com/Ee-Chee/SpicedAcademy-Tabasco-Curriculum/tree/master/wk8_heroku
// https://bezkoder.com/deploy-node-js-app-heroku-cleardb-mysql/#more-656