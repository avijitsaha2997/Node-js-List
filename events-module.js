const EventEmmiter = require("events");

const emitter = new EventEmmiter();

emitter.on("order-pizza", (size, toppings) => {
  console.log(`Order pizza recieved: Baking a ${size} pizza with ${toppings}`);
});

emitter.on("order-pizza", (size, toppings) => {
  if (size === "large") {
    console.log("Serving pizza with drink");
  }
});

emitter.emit("order-pizza", "large", "mashroom");
