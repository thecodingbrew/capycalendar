const monthDaysCalculator = {
  getDaysInMonth: (year, month) => {
      // months with 30 days
    if ([4, 6, 9, 11].includes(month)) {
      return 30;
    }

    // other months have 31 days
    return 31;
  }
}
 console.log(monthDaysCalculator.getDaysInMonth(null, 6)); 
