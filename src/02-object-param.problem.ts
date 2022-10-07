import { type } from "os";
import { expect, it } from "vitest";

// Can declare the type separately:
// Using type notation
// type TwoNumbers = {
//   first: number;
//   second: number;
// }

// Using interface notation
interface TwoNumbers {
  first: number;
  second: number;
}

export const addTwoNumbers = (params: TwoNumbers) => {
  return params.first + params.second;
};

it("Should add the two numbers together", () => {
  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    }),
  ).toEqual(6);

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    }),
  ).toEqual(30);
});
