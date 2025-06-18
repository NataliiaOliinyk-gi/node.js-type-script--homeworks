import "dotenv/config"

import startServer from "./server.js";
import { connectDataBase } from "./db/sequelize.js";

const boostrap = async () => {
    await connectDataBase();
    startServer();
};

boostrap();