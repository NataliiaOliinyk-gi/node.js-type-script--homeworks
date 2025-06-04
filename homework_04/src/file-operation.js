import "dotenv/config";
import fs from "node:fs/promises";
import path from "node:path";

const fileName = process.env.FILENAME;
const filePath = path.resolve("src", fileName);
const sourceFilePath = path.resolve("README.md");

const writeInFile = async () => {
    try {
        const sourceText = await fs.readFile(sourceFilePath, "utf-8");
        await fs.writeFile(filePath, sourceText);
        console.log(`Successfully copied text from README.md to ${fileName}`);
    } catch (error) {
        console.log(`Failed to write text to ${fileName}:`);
        console.log(error.message);
    }
};

await writeInFile();

const readFile = async () => {
    try {
        const text = await fs.readFile(filePath, "utf-8");
        console.log(text);
    } catch (error) {
        console.log(`Failed to read text from ${fileName}:`);
        console.log(error.message);
    }
};

await readFile();
