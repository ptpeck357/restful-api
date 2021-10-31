# PercentageDifference - JavaScript

Return the percentage difference between two numbers, optionally rounding.

## Installation
```bash
npm install percentage-difference
```

## Usage

```javascript
percentDiff(base, peak[, round])
````

```javascript
const {percentDiff} = require('percentage-difference');

console.log( percentDiff(600, 700); // 16.666666666666664
console.log( percentDiff(600, 700, true); // 17
console.log( percentDiff(700, 600, true); // -14
```
