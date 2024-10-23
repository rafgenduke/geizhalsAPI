import geizhals from "../app.js";

test()

async function test() {
  const result = await geizhals.getResultsBySearchString("iphone", 10);
  console.log(result);
}