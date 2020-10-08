const db = require("../models");
const UserInfo = db.userInfos;
const bct = require("../utilities/bcrypt");

exports.addUser = (req, res) => {
    bct.hashPassword(req.body.password)
        .then(hashedPW => {
            return UserInfo
                .create({ username: req.body.username, password: hashedPW })
                .then(data => {
                    req.session.userId = data.id;
                    res.send(data);
                });
        })
        .catch(() => {
            res.send({ errMsg: "This username has already been registered!" }) //to handle non-unique registered name
        });
};

exports.authUser = (req, res) => {
    UserInfo.findOne({ where: { username: req.body.username } })
        .then(data => {
            // console.log("testb2", data.id);
            return bct
                .checkPassword(req.body.password, data.password)
                .then(correctPW => {
                    if (correctPW) {
                        console.log("hereeee", data.id)
                        req.session.userId = data.id;
                        res.send(data); //must response back so that cookies saved on browser
                    } else {
                        res.send({ errMsg: "Wrong password!" }) //to handle wrong message
                    }
                });
        })
        .catch(() => {
            res.send({ errMsg: "Wrong username!" }) //to handle wrong username
        });
};