const express = require('express')
var cors = require('cors');
const v1Router = require("./srcV1/routes");
const path = require("path");

const app = express()

app.use(cors({
    origin: 'http://localhost:5173',
}));

app.use("/api/v1", v1Router);

app.use(express.static("public"));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`pool-back listening on ${port}`)
})
