import * as fs from "node:fs/promises";
import path from "node:path";

export const creationOfCatalogs = async dirName => {
    const dirPath = path.resolve("src", dirName);
    try {
        await fs.mkdir(dirPath);
        return true;
    } catch {
        return false;
    }
};

export const deleteOfCatalogs = async dirName => {
    const dirPath = path.resolve("src", dirName);
    try {
        await fs.rmdir(dirPath);
        return true;
    } catch {
        return false;
    }
};