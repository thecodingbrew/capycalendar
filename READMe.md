# CapyCalendar Library

CapyCalendar is a JavaScript library that provides utilities for working with dates and calendars. It allows you to calculate the number of days in a specific month, check if a year is a leap year, and more. Made with love by capybaras <3

## Installation
You can install CapyCalendar using npm:

```bash
npm install capycalendar

```

## Usage

```javascript
import { checkIfLeapYear, getDaysInMonth } from "capycalendar";
```

## Get Days in a Month

You can use the getDaysInMonth function to calculate the number of days in a specific month:

```javascript
const daysInMarch2023 = getDaysInMonth(2023, 3);
console.log(daysInMarch2023); // Output: 31
```

## Check if a Year is a Leap Year

```javascript
const is2024LeapYear = isLeapYear(2024);
console.log(is2024LeapYear); // Output: true
```
## API Reference

### getDaysInMonth(year, month)
Calculate the number of days in a specific month.

#### 'year' (number): The year (e.g., 2023). This parameter is optional
#### 'month' (number): The month (1 to 12).
Returns the number of days in the specified month.

## Contributing
Contributions to CapyCalendar are welcome! If you have any bug fixes, improvements, or new features, feel free to open a pull request ^^

## Origin

[github](https://github.com/thecodingbrew/capycalendar/)