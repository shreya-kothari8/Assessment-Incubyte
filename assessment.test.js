const add = require('./assessment');


test("add 1 to equal 1", () => {
  expect(add("1")).toBe(1);
});

test("add 0 to equal 0", () => {
  expect(add("0")).toBe(0);
});

test("add 1+2+3+4 to equal 10", () => {
  expect(add("1,2,3,4")).toBe(10);
});