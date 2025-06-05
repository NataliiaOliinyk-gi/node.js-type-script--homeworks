import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.use((req, res, next) => {
    res.setHeader("Content-Type", "text/plain");
    const { authorization } = req.headers;
    if (!authorization) {
        res
            .status(401)
            .send("Unauthorized");
    } else {
        res.send("Authorization header received");
    }
    next();
});

app.listen(3000, () => console.log("Server running on 3000 port"));