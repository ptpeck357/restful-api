const percentDiff = require('./index.js');

if (percentDiff(600,700) !== 16.666666666666664)
    process.exit(1);

if (percentDiff(700,600) !== -14.285714285714285)
    process.exit(1);

if (percentDiff(600,700, true) !== 17)
    process.exit(1);

if (percentDiff(700,600, true) !== -14)
    process.exit(1);

process.exit(0);
