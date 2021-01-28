const school = require("../dist");
const schoolId = "7240393";
const officeCode = "D10";

async function meal(iter) {
  const sTime = new Date();
  for (let i = 0; i < iter; i++) {
    console.time("meal" + i);
    await school.meal(schoolId, officeCode, new Date());
    console.timeEnd("meal" + i);
  }
  console.log(`Meal: ${(new Date() - sTime) / iter}`);
}

async function calendar(iter) {
  const sTime = new Date();
  for (let i = 0; i < iter; i++) {
    console.time("schedule" + i);
    await school.schedule(schoolId, officeCode, new Date());
    console.timeEnd("schedule" + i);
  }
  console.log(`Schedule: ${(new Date() - sTime) / iter}ms`);
}

async function test(iter) {
  await meal(iter);
  console.log("=========================");
  await calendar(iter);
}

test(20);
