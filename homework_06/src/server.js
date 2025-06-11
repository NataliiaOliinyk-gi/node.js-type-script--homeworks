import express from "express";
import cors from "cors";

import productsRouter from "./routers/products.router.js";

const startServer = () => {

    const app = express();

    app.use(cors());
    app.use(express.json());

    app.get("/", (req, res) => {
        res.json({
            message: "Hello, World!"
        });
    });

    app.post("/", (req, res) => {
        if (!req.body) {
            res.status(400).json({
                message: "Data was not sent"
            })
        }
        res.status(201).json(req.body);
    });

    app.use("/api/products", productsRouter)

    app.use((req, res) => {
        res.status(404).json({
            message: `${req.url} not found`
        });
    });

    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`Server running on ${port} port`));
};

export default startServer;