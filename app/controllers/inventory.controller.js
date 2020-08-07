const db = require("../models");
const Quantity = db.quantity;
const Goods = db.goods;

exports.initializeQuantity = (req, res) => {
    Quantity.create({userid: req.session.userId, quantity_array: req.body.quantityArray})
    .then(data => {
        res.status(200).json({
            message: "initialization completed"
        });
    });
};

exports.findQuantity = (req, res) => {
    Quantity.findOne({ where: {userid: req.session.userId} })
    .then(data => {
        res.send(data);
    })
    .catch((err) => {
        console.log("err1", err);
        res.send({ errMsg: "Wrong!" })
    });
};
/////////////////////////////////////
exports.findQuantityAtUserId5 = (req, res) => {
    Quantity.findOne({ where: {userid: 5} })
    .then(data => {
        res.send(data);
    })
    .catch((err) => {
        res.send({ errMsg: "Error retrieving quantity!" })
    });
};

exports.updateQuantityAtUserId5 = (req, res) => {
    Quantity.update({ quantity_array : req.body.quantityArray }, {
        where: { userid: 5 }
    })
    .then(data => {
        res.status(200).json({
            message: "update completed"
        });
    })
    .catch((err) => {
        res.send({ errMsg: "Error updating quantity!" })
    });
};
/////////////////////////////////////////////////
exports.updateQuantity = (req, res) => {
    Quantity.update({ quantity_array : req.body.quantityArray }, {
        where: { userid: req.session.userId }
    })
    .then(data => {
        res.status(200).json({
            message: "update completed"
        });
        //A response data is absolutely necessary here although no data is returned, because it makes data update process faster (from FE to BE to SQL and then from QSL to BE to FE).
        //There two methods in FE, check home.component.
        //Otherwise, the data update is slow, SQL wouldnt be able to catch up user's clicking (e.g. subunit substraction), clicking 5 times but only 2 is substracted. It has to wait longer time to save this 5 times clicking.
        //Comment out the lines to check the difference. Try refreshing the page too. 
        //console.log(data); => no data returned
    })
    .catch((err) => {
        console.log("err2", err);
        res.send({ errMsg: "Wrong2!" })
    });
};

exports.findAllGoods = (req, res) => {
    Goods.findAll()
        .then (data => {
            res.send(data);
        })
        .catch((err) => {
            res.send({ errMsg: "Error retrieving goods!" })
        });
};

exports.createItem = (req, res) => {
    const item = {
        item: req.body.item,
        unit: req.body.unit,
        unitN: req.body.unitN,
        subUnit: req.body.subUnit,
        subUnitN: req.body.subUnitN,
        category
    };

    Goods.create(item)
        .then (data => {
            console.log(data);
        })
        .catch((err) => {
            console.log("err4", err);
            res.send({ errMsg: "Wrong4!" })
        });
        
}