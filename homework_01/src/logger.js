import fs from "node:fs/promises";
import path from "node:path";

const filepath = path.resolve("src", "log.txt");

const logMessage = async (message) => {
    await fs.appendFile(filepath, `\n${message}`);
};

export default logMessage;