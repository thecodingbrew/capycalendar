const monthDaysCalculator = require("../index"); //import module for testing

// Test cases
const testCases = [
  { year: 2023, month: 1, expected: 31 },
  { year: 2023, month: 2, expected: 28 },
  { year: 2024, month: 2, expected: 29 },
  { year: 2023, month: 4, expected: 30 },
  { year: 2023, month: 9, expected: 30 },
  { year: 2023, month: 12, expected: 31 },
];

testCases.forEach((testCase) => {
  const { year, month, expected } = testCase;
  test(`getDaysInMonth returns ${expected} for ${year}-${month}`, () => {
    const result = monthDaysCalculator.getDaysInMonth(year, month);
    expect(result).toBe(expected);
  });
});
