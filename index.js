const express = require("express");
const app = express();

var PORT = process.env.PORT || 4459

app.listen(PORT, (req, res) => {
    console.log("Fortnite Master is running on Port: " + PORT);
});

app.get("/fortnite/master/api/backend/profile", (req, res) => {
    res.json(require("./src/Profile/profile.json"));
});
app.use("/fortnite", require("./src/fortnite"));