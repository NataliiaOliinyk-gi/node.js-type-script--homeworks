import { creationOfCatalogs, deleteOfCatalogs } from "./task1.js";
import { writeInFile, readFile } from "./task2.js";

await creationOfCatalogs("myFolder");
await deleteOfCatalogs("myFolder");

await writeInFile("info.txt", "Node.js is awesome!");
await readFile("info.txt");