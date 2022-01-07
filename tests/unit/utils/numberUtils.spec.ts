import { sumArray } from "../../../src/utils/numberUtils";

describe("Number utils", () => {
  it("Sum [1, 2, 3]", () => {
    expect(sumArray([1, 2, 3])).toBe(6);
  });

  it("Sum []", () => {
    expect(sumArray([])).toBe(0);
  })
});

export {};
