import express from "express";
import cors from "cors";
import * as fs from "node:fs/promises";
import path from "node:path";

const pathToErrorsLog = path.resolve("src", "errors.log");

const app = express();
app.use(cors());

app.use(async (req, res, next) => {
    res.setHeader("Content-Type", "text/plain");
    try {
        const { authorization } = req.headers;
        if (!authorization) {
            //выбрасываю ошибку для тестирования
            throw new Error("Authorization header is missing");
        }
        res.send("Authorization header received");
    } catch (error) {
        //дополнительный try/catch для записи логов в файл
        try {
            await fs.appendFile(
                pathToErrorsLog,
                `Internal Server Error: ${err.message} \n`
            );
        } catch (logError) {
            console.error("Failed to write to errors.log:", logError.message);
        }
        res
            .status(500)
            .send("Internal Server Error");
    }
    next();
});


app.listen(3000, () => console.log("Server running on 3000 port"));