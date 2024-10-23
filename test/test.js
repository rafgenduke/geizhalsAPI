import geizhals from "../app.js";

test()

async function test() {
  const result = await geizhals.getResultsBySearchString("dyson haarglätter corrale", 10);
  console.log(result);
}