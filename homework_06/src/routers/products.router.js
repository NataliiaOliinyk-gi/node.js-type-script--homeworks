import { Router } from "express";

import Product from "../db/Product.js";
import { productAddSchema, productUpdateSchema } from "../validation/product.schemas.js";

const productsRouter = Router();

productsRouter.get("/", async (req, res) => {
    const result = await Product.findAll();
    res.json(result);
});

productsRouter.post("/", async (req, res) => {
    try {
        await productAddSchema.validate(req.body);
        const result = await Product.create(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    };
});

productsRouter.get("/:id", async (req, res) => {
    const { id } = req.params;
    const result = await Product.findByPk(id);

    if (!result) {
        return res.status(404).json({
            message: `Product with id = ${id} not found`
        });
    };

    res.json(result);
});

productsRouter.put("/:id", async (req, res) => {
    try {
        await productUpdateSchema.validate(req.body);

        const { id } = req.params;
        const result = await Product.findByPk(id);
        if (!result) {
            return res.status(404).json({
                message: `Product with id = ${id} not found`
            });
        };

        await result.update(req.body);
        res.json(result);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    };
});

productsRouter.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const result = await Product.findByPk(id);
    if (!result) {
        res.status(404).json({
            message: `Product with id = ${id} not found`
        });
    };

    await result.destroy();
    res.json(result);
})

export default productsRouter;