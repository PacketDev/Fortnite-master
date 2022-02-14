const express = require("express");
const app = express();

app.post("/lightswitch/api/service/Fortnite/status", (req, res) => {
    res.json({
        "serviceInstanceId": "fortnite",
        "status": "UP",
        "message": "Fortnite is running",
        "maintenanceUri": "localhost:4459",
        "overrideCatalogIds": [
            "a7f138b2e51945ffbfdacc1af0541053"
        ],
        "allowedActions": [],
        "banned": false,
        "launcherInfoDTO": {
            "appName": "Fortnite",
            "catalogItemId": "4fe75bbc5a674f4f9b356b5c90567da5",
            "namespace": "fn"
        }
    });
});

app.get("/lightswitch/api/service/Fortnite/status", (req, res) => {
    res.json({
        "serviceInstanceId": "fortnite",
        "status": "UP",
        "message": "Fortnite is running",
        "maintenanceUri": "localhost:4459",
        "overrideCatalogIds": [
            "a7f138b2e51945ffbfdacc1af0541053"
        ],
        "allowedActions": [],
        "banned": false,
        "launcherInfoDTO": {
            "appName": "Fortnite",
            "catalogItemId": "4fe75bbc5a674f4f9b356b5c90567da5",
            "namespace": "fn"
        }
    });
});

app.get("/waitingroom/api/waitingroom", (req, res) => {
    res.status(204).end();
});

module.exports = app;