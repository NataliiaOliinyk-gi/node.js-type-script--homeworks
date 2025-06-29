import "dotenv/config";

import startServer from "./server.js";
import startWebsocketServer from "./wsServer.js";

const boostrap = async () => {
    startServer();
    startWebsocketServer();
};

boostrap();
