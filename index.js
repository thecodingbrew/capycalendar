const monthDaysCalculator = {
  getDaysInMonth: (year, month) => {
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
  }
}
 console.log(monthDaysCalculator.getDaysInMonth(2021, 2)); 
