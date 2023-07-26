const monthDaysCalculator = {
  getDaysInMonth: (year, month) => {
    //error if month input is incorrect
    if (month < 1 || month > 12) {
        throw new Error("Invalid month. Month must be between 1 and 12.");
      }
      // months with 30 days
    if ([4, 6, 9, 11].includes(month)) {
      return 30;
    }
    if (month === 2) {
        if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
          return 29; // leap year
        } else {
          return 28; // non-leap year
        }
      }
    // other months have 31 days
    return 31;
  },
  checkIfLeapYear: (year) => {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      return true; // leap year
    } else {
      return false; // non-leap year
    }
  }
};
module.exports = monthDaysCalculator;
