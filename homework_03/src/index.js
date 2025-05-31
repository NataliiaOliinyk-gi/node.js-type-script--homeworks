import { creationOfCatalogs, deleteOfCatalogs } from "./task1.js";
import { writeInFile, readFile } from "./task2.js";

const dirName = "myFolder";

const messageCreatedDirInfo = await creationOfCatalogs(dirName) ? `Successfully created ${dirName}` : `Failed to create ${dirName}`;
console.log(messageCreatedDirInfo);

const messageDeletedDirInfo = await deleteOfCatalogs(dirName) ? `Successfully deleted ${dirName}` : `Failed to delete ${dirName}`;
console.log(messageDeletedDirInfo);



const fileName = "info.txt";

const messageWriteInFileInfo = await writeInFile(fileName, "Node.js is awesome!") ? `Successfully wrote text to ${fileName}` : `Failed to write text to ${fileName}`;
console.log(messageWriteInFileInfo);

const { text, error } = await readFile(fileName);
if (text) {
    console.log(`Successfully read text from ${fileName}:`);
    console.log(text);
} else {
    console.log(`Failed to read text from ${fileName}:`);
    console.log(error);
};