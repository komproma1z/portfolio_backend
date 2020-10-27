const express = require("express");
const db = require("./firebase.js");
var cors = require('cors')
const app = express();
app.use(cors())

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server running at ${port}`);
})

app.get("/data", (req, res) => {
    db.database().ref().on("value", snapshots => {
        let data = snapshots.val();
        res.json({
            data: data,
        })
    })
})

app.get("/data/:id", (req, res) => {
    db.database().ref().on("value", snapshots => {
        let data = snapshots.val();
        res.json({
            data: Object.values(data.sites).filter(item => item.id === parseInt(req.params.id)),
        })
    })
})