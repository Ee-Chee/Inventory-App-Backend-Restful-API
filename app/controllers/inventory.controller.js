const db = require("../models");
const Quantity = db.quantity;
const Goods = db.goods;

exports.findQuantity = (req, res) => {
    Quantity.findOne({ where: { userid: req.userId } })
        .then(data => {
            res.send(data);
        })
        .catch((err) => {
            console.log("err1", err);
            res.send({ errMsg: "Wrong!" })
        });
};

exports.updateQuantity = (req, res) => {
    Quantity.update({ quantity_array: req.body.quantityArray }, {
        where: { userid: req.userId }
    })
        .then(data => {
            res.status(200).json({
                message: "update completed"
            });
        })
        .catch((err) => {
            console.log("err2", err);
            res.send({ errMsg: "Wrong2!" })
        });
};

exports.findAllGoods = (req, res) => {
    Goods.findAll()
        .then(data => {
            res.send(data);
        })
        .catch((err) => {
            res.send({ errMsg: "Error retrieving goods!" })
        });
};
