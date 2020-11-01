module.exports = app => {
    const inventory = require("../controllers/inventory.controller.js");
    const authJwt = require("../middleware/authJwt");

    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/amount", [authJwt.verifyToken], inventory.findQuantity);

    app.post("/changeAmount", [authJwt.verifyToken], inventory.updateQuantity);

    app.get("/goods", inventory.findAllGoods);

};
