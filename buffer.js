const buffer = new Buffer.from("Avijit", "utf-8");
buffer.write("opticyay");

console.log(buffer);
console.log(buffer.toString());
console.log(buffer.toJSON());