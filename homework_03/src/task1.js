import * as fs from "node:fs/promises";
import path from "node:path";

export const creationOfCatalogs = async dirName => {
    const dirPath = path.resolve("src", dirName);
    try {
        await fs.mkdir(dirPath);
        console.log(`Successfully created ${dirName}`);
    } catch (error) {
        console.log(error.message);
        console.log(`Failed to create ${dirName}`);
    }
};

export const deleteOfCatalogs = async dirName => {
    const dirPath = path.resolve("src", dirName);
    try {
        await fs.rmdir(dirPath);
        console.log(`Successfully deleted ${dirName}`);
    } catch (error) {
        console.log(error.message);
        console.log(`Failed to delete ${dirName}`);
    }
};