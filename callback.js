const greet = (name) => {
  console.log(`Hello ${name}`);
};

const greetAvijit = (greetFn) => {
  const name = "AVIJIT";
  greetFn(name);
};

greetAvijit(greet);
