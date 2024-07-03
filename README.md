# `Intl.Locale.prototype.getWeekInfo()` polyfill

This package provides a polyfill for the Intl.Locale API, adding the getWeekInfo method if it is not already available in the environment.

## Installation

```sh
npm install @bart-krakowski/get-week-info-polyfill
```

## Usage

```js
require('intl-locale-get-week-info');

const he = new Intl.Locale("he"); // Hebrew (Israel)
console.log(he.getWeekInfo()); // { firstDay: 7, weekend: [5, 6], minimalDays: 1 }

const af = new Intl.Locale("af"); // Afrikaans (South Africa)
console.log(af.getWeekInfo()); // { firstDay: 7, weekend: [6, 7], minimalDays: 1 }

const enGB = new Intl.Locale("en-GB"); // English (United Kingdom)
console.log(enGB.getWeekInfo()); // { firstDay: 1, weekend: [6, 7], minimalDays: 4 }

const arAF = new Intl.Locale("ar-AF"); // Arabic (Afghanistan)
console.log(arAF.getWeekInfo()); // { firstDay: 6, weekend: [4, 5], minimalDays: 1 }

const dvMV = new Intl.Locale("dv-MV"); // Divehi (Maldives)
console.log(dvMV.getWeekInfo()); // { firstDay: 5, weekend: [6, 7], minimalDays: 1 }
```

## API

`Intl.Locale.prototype.getWeekInfo
`Returns an object containing week information for the locale.

### Returns:
- `WeekInfo`
An object with the following properties:
  - `firstDay (number)`
  An integer between 1 (Monday) and 7 (Sunday) indicating the first day of the week for the locale. Commonly 1, 5, 6, or 7.
  - `weekend (number[])`
  An array of integers between 1 and 7 indicating the weekend days for the locale. This is usually continuous because UTS 35 stores weekendStart and weekendEnd instead.
  - `minimalDays (number)`
  An integer between 1 and 7 (commonly 1 and 4) indicating the minimal days required in the first week of a month or year, for week-of-year or week-of-month calculations (e.g. The 20th week of the year). For example, in the [ISO 8601 calendar](https://en.wikipedia.org/wiki/ISO_8601), the first week of a year must have at least 4 days in this year, so if January 1 is a Friday, Saturday, or Sunday, it will be numbered as part of the last week of the previous year.

