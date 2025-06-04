import { DateTime } from "luxon";

const now = DateTime.now();

console.log('Формат DD-MM-YYYY:', now.toFormat("dd-LL-yyyy"));
console.log('Формат MMM Do YY:', now.toFormat("LLL dd yy"));
console.log('День недели:', now.toFormat("cccc"));
