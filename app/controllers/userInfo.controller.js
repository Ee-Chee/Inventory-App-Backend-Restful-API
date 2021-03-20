const db = require("../models");
const UserInfo = db.userInfos;
const Quantity = db.quantity;
const config = require("../config/auth.config");
const bct = require("../utilities/bcrypt");
const jwt = require("jsonwebtoken");

exports.addUser = (req, res) => {
    console.log("here3", config.secret);
    bct.hashPassword(req.body.password)
        .then(hashedPW => {
            return UserInfo
                .create({ username: req.body.username, password: hashedPW })
                .then(data => {
                    const token = jwt.sign({ id: data.id }, config.secret, {
                        expiresIn: 86400 * 30 // 30 days
                    });

                    //Quantity initialization
                    Quantity.create({ userid: data.id, quantity_array: new Array(164).fill(0) })
                        .then(result => {
                            res.status(200).send({
                                id: data.id,
                                username: data.username,
                                accessToken: token
                            });
                        });
                });
        })
        .catch(() => {
            res.send({ errMsg: "This username has already been registered!" }) //to handle non-unique registered name
        });
};

exports.signIn = (req, res) => {
    UserInfo.findOne({ where: { username: req.body.username } })
        .then(data => {
            return bct
                .checkPassword(req.body.password, data.password)
                .then(correctPW => {
                    if (correctPW) {
                        const token = jwt.sign({ id: data.id }, config.secret, {
                            expiresIn: 86400 * 30 // 30 days
                        });
                        res.status(200).send({
                            id: data.id,
                            username: data.username,
                            accessToken: token
                        });
                    } else {
                        res.send({ errMsg: "Wrong password!" }) //to handle wrong message
                    }
                });
        })
        .catch(() => {
            res.send({ errMsg: "Wrong username!" }) //to handle wrong username
        });
};