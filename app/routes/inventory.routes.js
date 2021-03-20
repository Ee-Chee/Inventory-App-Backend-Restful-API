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

    app.get("/api/inventory/amount", [authJwt.verifyToken], inventory.findQuantity);

    app.post("/api/inventory/changeAmount", [authJwt.verifyToken], inventory.updateQuantity);

    app.get("/api/inventory/goods", inventory.findAllGoods);

};
