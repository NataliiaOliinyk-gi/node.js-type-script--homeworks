import fs from "node:fs/promises";
import path from "node:path";

const logMessage = async (message) => {
    const filepath = path.resolve("src", "log.txt");
    await fs.appendFile(filepath, `\n${message}`);
};

export default logMessage;