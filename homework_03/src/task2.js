import * as fs from "node:fs/promises";
import path from "node:path";

export const writeInFile = async (fileName, text) => {
    const filePath = path.resolve("src", fileName);
    try {
        await fs.writeFile(filePath, `${text}`);
        console.log(`Successfully wrote text to ${fileName}`);
    } catch (error) {
        console.log(error.message);
        console.log(`Failed to write text to ${fileName}`);
    }
};

export const readFile = async fileName => {
    const filePath = path.resolve("src", fileName);
    try {
        const text = await fs.readFile(filePath, "utf-8");
        console.log(text);
        console.log(`Successfully read text from ${fileName}`);
    } catch (error) {
        console.log(error.message);
        console.log(`Failed to read text from ${fileName}`);
    }
};