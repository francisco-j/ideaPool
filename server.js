import express from "express";
import cors from "cors";
import v1Router from "./srcV1/routes/index.js";
import path from "path";

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
