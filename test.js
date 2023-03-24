const Hero = require("./module-caching");

const Batman = new Hero("BATMAN");

console.log(Batman.getName());
Batman.setName("SPIDERMAN");
console.log(Batman.getName());

const Hero2 = require("./module-caching");
const LILI = new Hero2("LILI");

console.log(LILI.getName());

const Hero3 = require("./module-caching");
const YOLO = new Hero2("YOLO");

console.log(YOLO.getName());
