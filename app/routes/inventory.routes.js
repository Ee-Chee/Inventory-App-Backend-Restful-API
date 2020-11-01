module.exports = app => {
    const inventory = require("../controllers/inventory.controller.js");

    var router = require("express").Router();

    router.get("/amount", inventory.findQuantity);
    //////////////////////////////////////////
    router.get("/amountid5", inventory.findQuantityAtUserId5);

    router.post("/changeAmountid5", inventory.updateQuantityAtUserId5);
    ///////////////////////////////////////////////
    router.post("/changeAmount", inventory.updateQuantity);

    router.get("/goods", inventory.findAllGoods);

    app.use("/api/inventory", router);
};
