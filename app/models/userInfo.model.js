module.exports = (sequelize, Sequelize) => {
    const UserInfo = sequelize.define("userinfo", {
    //In Sequelize, the table shouldnt be named in capital letters. Otherwise, table will not be created even though table is listed 
        username: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: Sequelize.STRING
        }
    });
  
    return UserInfo;
  };