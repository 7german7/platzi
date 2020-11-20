const doSomeThingAsync = () => {
  return new Promise((resolve, reject) => {
    true// Este true, ? y : son elemetos imortantes para hacer unafunción ternaria
      ? setTimeout(() => resolve("Do someThing Async"), 3000)
      : reject(new Error("Test Error"));
  });
};

const doSomeThing = async () => {
  const something = await doSomeThingAsync();
  console.log(something);
};

console.log("Before");
doSomeThing();
console.log("After");

//¿Cómo vamos a catchar los errores y presentarlos?
const anotherFunction = async () => {
  try {
    const something = await doSomeThingAsync();
    console.log(something)
  } catch (error) {
    console.error(error)
  }
}

console.log("Before 1");
anotherFunction();
console.log("After 1");