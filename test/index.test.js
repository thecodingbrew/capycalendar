import { checkIfLeapYear, getDaysInMonth } from "../dist/capycalendar.es.js";

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
  (`getDaysInMonth returns ${expected} for ${year}-${month}`, () => {
    const result = getDaysInMonth(year, month);
    expect(result).toBe(expected);
  });
});

// Test cases
const leapYearTestCases = [
  { year: 2000, expected: true },
  { year: 2004, expected: true },
  { year: 2019, expected: false },
  { year: 2024, expected: true },
  { year: 2021, expected: false },
];

// Test cases for non-leap years
const nonLeapYearTestCases = [
  { year: 1900, expected: false },
  { year: 1800, expected: false },
  { year: 2100, expected: false },
  { year: 2019, expected: false },
  { year: 2021, expected: false },
];

describe("monthDaysCalculator", () => {
  describe("checkIfLeapYear", () => {
    // Test cases for leap years
    leapYearTestCases.forEach((testCase) => {
      const { year, expected } = testCase;
      test(`checkIfLeapYear returns true for leap year ${year}`, () => {
        const result = checkIfLeapYear(year);
        expect(result).toBe(expected);
      });
    });

    // Test cases for non-leap years
    nonLeapYearTestCases.forEach((testCase) => {
      const { year, expected } = testCase;
      test(`checkIfLeapYear returns false for non-leap year ${year}`, () => {
        const result = checkIfLeapYear(year);
        expect(result).toBe(expected);
      });
    });
  });
});
