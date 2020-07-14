exports.quantity = (sequelize, Sequelize) => {
    const iQ = sequelize.define("quantity", {
        userid: {
            type: Sequelize.INTEGER,
        },
        quantity_array: {
            type: Sequelize.ARRAY(Sequelize.INTEGER)
        }//UNSIGNED => 0 and positive integer. INTEGER(digit).ZEROFILL => filling unused digit with zero
        //However, unsigned and zerofill are not supported in Postgresql
        //capital letter for columns name is not allowed
        //https://github.com/sequelize/sequelize/issues/3819
    }, {
        createdAt: false,
        updatedAt: false
    });
    return iQ;
};

exports.goods = (sequelize, Sequelize) => {
    const gds = sequelize.define("goods", {
        item: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        unit: {
            type: Sequelize.STRING,
            allowNull: false
        },
        subunit: {
            type: Sequelize.STRING
        },
        subunit_n:{
            type: Sequelize.INTEGER
        },
        category: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        createdAt: false,
        updatedAt: false
    });
  
    return gds;
};

// unit_n: {
//     type: Sequelize.INTEGER,
//     allowNull: false
// },