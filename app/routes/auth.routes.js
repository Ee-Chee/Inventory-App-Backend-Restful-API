module.exports = function (app) {
    const userInfo = require("../controllers/userInfo.controller.js");

    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Content-Type"
        );
        next();
    });

    app.post("/api/auth/signup", userInfo.addUser);

    app.post("/api/auth/signin", userInfo.signIn);
};