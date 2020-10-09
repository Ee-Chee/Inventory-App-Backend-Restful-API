const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const cookieSession = require("cookie-session");

var corsOptions = {
    origin: ["https://eat-happy-inventur.herokuapp.com", "http://localhost:8081"],
    credentials: true
};

app.use(cors(corsOptions));

const cookieSessionMiddleware = cookieSession({
    secret: `I'm wondering...`,
    sameSite: 'none',
    secure: false,
    maxAge: null
});

app.use(cookieSessionMiddleware);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync();

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my first Angular project. I'm glad that it's served as inventory-app for Eat Happy Sushi Shop! I will work even harder to achieve what I want." });
});

require("./app/routes/inventory.routes")(app);

const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
