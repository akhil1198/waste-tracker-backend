const express = require("express");
const app = express();

app.use(express.json());

app.get("/api/records", (req, res) => {
    res.json({ message: "Records endpoint" });
});

app.post("/api/submit-order", (req, res) => {
    res.json({ message: "Order submitted" });
});

// Export the app as a serverless function
module.exports = app;
