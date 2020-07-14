const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
        
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.userInfos = require("./userInfo.model.js")(sequelize, Sequelize);
inventory = require("./inventory.model.js");
db.quantity = inventory.quantity(sequelize, Sequelize);
db.goods = inventory.goods(sequelize, Sequelize);

module.exports = db;
