import * as fs from "node:fs/promises";
import path from "node:path";

export const writeInFile = async (fileName, text) => {
    const filePath = path.resolve("src", fileName);
    try {
        await fs.writeFile(filePath, `${text}`);
        return true;
    } catch {
        return false;
    }
};

export const readFile = async fileName => {
    const filePath = path.resolve("src", fileName);
    try {
        const text = await fs.readFile(filePath, "utf-8");
        return { text };
    } catch (error) {
        return { error: error.message };
    }
};