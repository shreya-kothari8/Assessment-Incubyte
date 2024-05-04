const add = require("./assessment");

// // For empty string
// test("add empty string to equal 0", () => {
//     expect(add("")).toBe(0);
//   });

// test("add 1 to equal 1", () => {
//   expect(add("1")).toBe(1);
// });

// test("add 0 to equal 0", () => {
//   expect(add("0")).toBe(0);
// });

// test("add 1+2+3+4 to equal 10", () => {
//   expect(add("1,2,3,4")).toBe(10);
// });

// // For string containing negative numbers

// test("add 1 + -2 + -3 + 4 to equal Invalid Output", () => {
//     expect(add("1,-2,-3,4")).toBe("Invalid Number -2 -3");
//   });

const items = [
  { input: "", output: 0 },
  { input: "0", output: 0 },
  { input: "2", output: 2 },
  { input: "-1", output: "Negative number not allowed -1" },
  { input: "5,7", output: 12 },
  { input: "-4,-3", output: "Negative number not allowed -4 -3" },
  { input: "1,2,3,4,3,14,15", output: 42 },
  {input:"kjdhskjfhjkf",output:"Invalid Input"},
  {input:"1\n2,3",output:6},
  {input:"1,\n",output:"Invalid Input"},
  {input:"//",output:"Invalid Input"},
  {input:"//;\n1;2",output:3},
  { input: "1;2,3&4,3,14,15", output: 42 },
   

];

describe("Test Cases", () => {
  for (let i = 0; i < items.length; i++) {
    it(`should  add ${items[i].input} to ${items[i].output}`, () => {
      expect(add(items[i].input)).toBe(items[i].output);
    });
  }
});
