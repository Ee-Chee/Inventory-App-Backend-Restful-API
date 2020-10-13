module.exports = app => {
    const userInfo = require("../controllers/userInfo.controller.js");
    const inventory = require("../controllers/inventory.controller.js");

    var router = require("express").Router();

    router.post("/registration", userInfo.addUser);

    router.get("/welcome", (req, res) => {
        console.log("testb1", req.session.userId);
        res.send({ userId: req.session.userId });

    });

    router.get("/goodbye", (req, res) => {
        req.session = null;
        res.send({ msg: "Cookies clear" });
    });

    router.post("/authentication", userInfo.authUser);

    router.post("/initialization", inventory.initializeQuantity);

    router.get("/amount", inventory.findQuantity);
    //////////////////////////////////////////
    router.get("/amountid5", inventory.findQuantityAtUserId5);

    router.post("/changeAmountid5", inventory.updateQuantityAtUserId5);
    ///////////////////////////////////////////////
    router.post("/changeAmount", inventory.updateQuantity);

    router.get("/goods", inventory.findAllGoods);

    router.post("/addNewItem", inventory.createItem);

    app.use("/api/inventory", router);
};
