import EventEmitter from "node:events";

const emitter = new EventEmitter();

emitter.on("message", ({ username, message }) => {
    console.log(`${username}: ${message}`);
});

const sendMessage = ({ username, message }) => {
  emitter.emit("message", { username, message });
};

export default sendMessage;