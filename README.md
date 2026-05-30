# Age Calculator

A simple web-based Age Calculator built using HTML, CSS, and JavaScript.  
It calculates a person's exact age in **years, months, and days** based on their date of birth.

## Features
- Select your date of birth using a date picker
- Automatically restricts future dates
- Calculates accurate age in:
  - Years
  - Months
  - Days
- Handles edge cases like:
  - Leap years
  - Month/day borrowing logic

## How It Works

The app compares:
- Your birth date
- The current date

Then it:
1. Calculates year difference
2. Adjusts months if birthday hasn't occurred yet this year
3. Adjusts days if current day is before birth day
4. Uses a helper function to get the number of days in a month dynamically
