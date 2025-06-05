import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.use((req, res, next) => {
    res.setHeader("Content-Type", "text/plain");
    const requstMethod = req.method;
    switch (requstMethod) {
        case "PUT":
            return res.send("PUT-запрос обработан");
        case "DELETE":
            return res.send("DELETE-запрос обработан");
        default:
            break;
    }
    const { authorization } = req.headers;
    if (!authorization) {
        return res
            .status(401)
            .send("Unauthorized");
    } else {
        return res.send("Authorization header received");
    }
});

app.listen(3000, () => console.log("Server running on 3000 port"));